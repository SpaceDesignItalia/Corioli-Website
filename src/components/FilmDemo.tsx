"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import posthog from "posthog-js";
import { ArrowRight, Pause, Play } from "lucide-react";
import type { Edizione } from "@/lib/ms-store";
import { FONDI, TELA, type Contesto, type Scena } from "@/components/film/comuni";
import { filmGinecologia } from "@/components/film/ginecologia";
import { filmCardiologia } from "@/components/film/cardiologia";
import { seg } from "@/components/film/parti";

// Il film che apre /ginecologia e /cardiologia (richiesta di Pablo, 3/11/2026):
// chi arriva da un messaggio su WhatsApp apre la pagina dal telefono e non
// tocca le schede di una galleria. Il film parte da solo, verticale come un
// video breve: il problema, poi le parti dell'app ricostruite in movimento
// (campi che si riempiono, punteggi che si calcolano, un dito che tocca), poi
// le schermate vere e la prova gratuita.
//
// Non è un file video: ogni scena è una funzione del tempo disegnata su una
// tela di 360 x 600 che si scala allo schermo, così il testo resta nitido e
// grande sul telefono. Il tempo avanza solo quando il film è in vista.

const film: Record<Edizione, () => Scena[]> = {
  ginecologia: filmGinecologia,
  cardiologia: filmCardiologia,
};

const CTA: Record<Edizione, string> = {
  ginecologia: "/download#ginecologia",
  cardiologia: "/download#cardiologia",
};

export default function FilmDemo({ edizione }: { edizione: Edizione }) {
  const scene = useMemo(() => film[edizione](), [edizione]);
  const inizi = useMemo(() => {
    let t = 0;
    return scene.map((s) => {
      const inizio = t;
      t += s.durata;
      return inizio;
    });
  }, [scene]);
  const totale = inizi[inizi.length - 1] + scene[scene.length - 1].durata;
  // Il capitolo di ogni scena: quelle senza restano in quello prima.
  const capitoli = useMemo(() => {
    let ultimo = "";
    return scene.map((s) => (ultimo = s.capitolo ?? ultimo));
  }, [scene]);
  const elencoCapitoli = useMemo(() => Array.from(new Set(capitoli)), [capitoli]);

  const [t, setT] = useState(0);
  const [pausa, setPausa] = useState(false);
  const [avviato, setAvviato] = useState(false);
  const [scala, setScala] = useState(0.95);

  const palco = useRef<HTMLDivElement>(null);
  const schermo = useRef<HTMLDivElement>(null);
  const tempo = useRef(0);
  const inVista = useRef(false);
  const pausaRef = useRef(false);
  const completato = useRef(false);

  useEffect(() => {
    pausaRef.current = pausa;
  }, [pausa]);

  useEffect(() => {
    const el = palco.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([voce]) => {
        inVista.current = voce.isIntersecting;
        if (voce.isIntersecting) setAvviato(true);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // La tela si scala per stare intera nello schermo del film.
  useEffect(() => {
    const el = schermo.current;
    if (!el) return;
    const ro = new ResizeObserver(([voce]) => {
      const { width, height } = voce.contentRect;
      if (width && height) setScala(Math.min(width / TELA.w, height / TELA.h));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    let prima = performance.now();
    const fotogramma = (ora: number) => {
      const dt = Math.min(ora - prima, 100);
      prima = ora;
      if (inVista.current && !pausaRef.current && !document.hidden) {
        tempo.current += dt;
        if (tempo.current >= totale) {
          tempo.current %= totale;
          if (!completato.current) {
            completato.current = true;
            posthog.capture("demo_video_completed", { edizione });
          }
        }
        setT(tempo.current);
      }
      raf = requestAnimationFrame(fotogramma);
    };
    raf = requestAnimationFrame(fotogramma);
    return () => cancelAnimationFrame(raf);
  }, [totale, edizione]);

  const vaiA = useCallback(
    (i: number) => {
      tempo.current = inizi[i];
      setT(inizi[i]);
      setPausa(false);
    },
    [inizi],
  );

  // Solo in sviluppo: window.__film(scena, punto 0-1) ferma il film su un
  // fotogramma preciso, per controllare ogni scena.
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    (window as unknown as { __film?: (i: number, p: number) => void }).__film = (i, p) => {
      setPausa(true);
      tempo.current = inizi[i] + p * scene[i].durata;
      setT(tempo.current);
    };
  }, [inizi, scene]);

  let i = scene.length - 1;
  while (i > 0 && inizi[i] > t) i--;
  const s = scene[i];
  const tl = t - inizi[i];
  // Ogni scena entra ed esce con una dissolvenza breve, tranne fra scene
  // collegate (la finestra dell'app resta ferma). La prima, al caricamento,
  // c'è già.
  const dopo = scene[(i + 1) % scene.length];
  const entraScena = s.legata || (i === 0 && t < 50) ? 1 : seg(tl, 0, 220);
  const esceScena = dopo.legata ? 0 : seg(tl, s.durata - 200, 200);
  const visibile = entraScena * (1 - esceScena);
  const chiara = s.fondo === "chiaro";

  const ctx: Contesto = {
    durata: s.durata,
    avviato,
    cta: {
      href: CTA[edizione],
      label: "Inizia la prova gratuita",
      onClick: () => posthog.capture("demo_video_cta_clicked", { edizione }),
    },
    riguarda: () => vaiA(0),
  };

  return (
    <div
      ref={palco}
      role="region"
      aria-roledescription="video dimostrativo"
      aria-label="Come Corioli risolve i problemi di tutti i giorni dello studio"
      className="relative mx-auto w-full max-w-[440px] lg:max-w-[1200px] aspect-[3/5] lg:aspect-[16/9] overflow-hidden rounded-[28px] lg:rounded-3xl shadow-[0_30px_80px_-30px_rgba(16,37,37,0.55)] ring-1 ring-black/5 bg-brand-950 lg:flex"
    >
      {/* Da desktop, a sinistra i capitoli: si vede dove si è e si salta. */}
      <aside className="hidden lg:flex flex-col justify-center w-[42%] shrink-0 px-12 xl:px-14 text-white bg-[radial-gradient(120%_80%_at_0%_0%,#234949_0%,#102525_70%)]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-300 mb-4">
          Corioli in {Math.round(totale / 1000)} secondi
        </p>
        <ol className="space-y-1.5">
          {elencoCapitoli.map((c) => {
            const prima = capitoli.indexOf(c);
            const attivo = capitoli[i] === c;
            return (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => vaiA(prima)}
                  className={`w-full text-left rounded-xl px-4 py-2.5 text-lg font-semibold transition-colors ${
                    attivo ? "bg-white/10 text-white" : "text-brand-100/60 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              </li>
            );
          })}
        </ol>
        <a
          href={CTA[edizione]}
          onClick={ctx.cta.onClick}
          className="mt-8 self-start inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-brand-800 hover:bg-brand-50 transition-colors"
        >
          Inizia la prova gratuita <ArrowRight size={18} aria-hidden="true" />
        </a>
      </aside>

      <div
        ref={schermo}
        className="relative h-full lg:flex-1 overflow-hidden"
        style={{ backgroundColor: FONDI[s.fondo] }}
      >
        <div
          className="absolute left-1/2 top-1/2 overflow-hidden"
          style={{
            width: TELA.w,
            height: TELA.h,
            transform: `translate(-50%, -50%) scale(${scala})`,
          }}
        >
          <div key={i} className="absolute inset-0" style={{ opacity: visibile }}>
            {s.disegna(tl, ctx)}
          </div>
        </div>

        {/* Avanzamento in alto, come le storie; pausa in basso a destra. */}
        <div className="absolute inset-x-0 top-0 z-20 flex gap-1 px-4 pt-3">
          {scene.map((sc, j) => {
            const v = j < i ? 1 : j > i ? 0 : tl / sc.durata;
            return (
              <button
                key={j}
                type="button"
                onClick={() => vaiA(j)}
                aria-label={`Vai alla scena ${j + 1} di ${scene.length}`}
                className="flex-1 h-4 flex items-start"
              >
                <span className={`relative block w-full h-[3px] rounded-full overflow-hidden ${chiara ? "bg-gray-900/10" : "bg-white/25"}`}>
                  <span
                    className={`absolute inset-0 origin-left rounded-full ${chiara ? "bg-brand-600" : "bg-white"}`}
                    style={{ transform: `scaleX(${v})` }}
                  />
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setPausa((v) => !v)}
          aria-label={pausa ? "Riprendi il video" : "Metti in pausa il video"}
          className={`absolute right-3 bottom-3 z-20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors ${
            chiara ? "bg-gray-900/10 text-gray-800" : "bg-white/15 text-white"
          }`}
        >
          {pausa ? <Play size={17} fill="currentColor" /> : <Pause size={17} fill="currentColor" />}
        </button>
      </div>
    </div>
  );
}
