import type { ReactNode } from "react";
import { ArrowRight, Copy, FileText, RotateCcw } from "lucide-react";
import { Didascalia, entra, esci, morbido, rimbalzo, seg, TELA } from "./parti";

// Le scene uguali nei due film: l'aggancio, la scrivania in disordine, il
// passaggio a Corioli, l'app vera e il finale.

export type Scena = {
  durata: number;
  // Il colore di fondo della scena: anche le bande ai lati della tela,
  // quando lo schermo è più largo, lo prendono.
  fondo: "scuro" | "chiaro";
  // Il capitolo mostrato nella colonna a sinistra da desktop; le scene senza
  // capitolo restano in quello precedente.
  capitolo?: string;
  // Collegata alla scena prima: niente dissolvenza fra le due, perché la
  // finestra dell'app resta ferma e cambia solo quello che c'è dentro.
  legata?: boolean;
  disegna: (t: number, ctx: Contesto) => ReactNode;
};

export type Contesto = {
  durata: number;
  // Le immagini si caricano solo quando il film è stato visto.
  avviato: boolean;
  cta: { href: string; label: string; onClick: () => void };
  riguarda: () => void;
};

export const FONDI = { scuro: "#0d1f1f", chiaro: "#eef5f5" };

export function Aggancio({ t, prima, poi }: { t: number; prima: string; poi: string }) {
  // Un quadrante che gira veloce dietro le parole: il tempo che se ne va.
  const giro = t * 0.42;
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-7 pb-10">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="absolute right-[-18px] top-[70px] opacity-25"
        aria-hidden="true"
        style={entra(t, 0, 600, 0)}
      >
        <circle cx="60" cy="60" r="52" fill="none" stroke="#5ba6a6" strokeWidth="6" />
        <line x1="60" y1="60" x2="60" y2="22" stroke="#d9eeee" strokeWidth="6" strokeLinecap="round" transform={`rotate(${giro} 60 60)`} />
        <line x1="60" y1="60" x2="84" y2="60" stroke="#d9eeee" strokeWidth="6" strokeLinecap="round" transform={`rotate(${giro / 12} 60 60)`} />
      </svg>
      <Didascalia t={t} testo={prima} da={150} dim={44} scuro />
      <Didascalia t={t} testo={poi} da={950} dim={44} scuro className="mt-1" />
    </div>
  );
}

export type Foglio = { icona: ReactNode; titolo: string; riga: string };

// La scrivania in disordine: i fogli arrivano uno dopo l'altro, con un colpo.
export function Caos({ t, fogli, frase }: { t: number; fogli: Foglio[]; frase: string }) {
  const posti = [
    { x: 18, y: 64, r: -5 },
    { x: 128, y: 136, r: 6 },
    { x: 30, y: 208, r: -3 },
    { x: 120, y: 280, r: 5 },
    { x: 26, y: 352, r: -6 },
  ];
  const passo = 380;
  // Il colpo di ogni foglio scuote la tela per un attimo.
  let scossa = 0;
  fogli.forEach((_, i) => {
    const d = t - (200 + i * passo);
    if (d > 0 && d < 160) scossa = Math.sin(d / 12) * (1 - d / 160) * 5;
  });
  return (
    <div className="absolute inset-0" style={{ transform: `translateX(${scossa}px)` }}>
      {fogli.map((f, i) => {
        const p = seg(t, 200 + i * passo - 220, 220);
        if (p <= 0) return null;
        const s = 1.55 - 0.55 * esci(p);
        const posto = posti[i % posti.length];
        return (
          <div
            key={i}
            className="absolute w-[214px] rounded-xl bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden"
            style={{
              left: posto.x,
              top: posto.y,
              opacity: Math.min(1, p * 2),
              transform: `rotate(${posto.r}deg) scale(${s})`,
              zIndex: i,
            }}
          >
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-100">
              {f.icona}
              <span className="text-[13px] font-semibold text-gray-700 truncate">{f.titolo}</span>
            </div>
            <p className="px-3 py-2.5 font-mono text-[14px] text-gray-800 truncate">{f.riga}</p>
          </div>
        );
      })}
      <div className="absolute left-0 right-0 bottom-14 px-7 z-10">
        <Didascalia t={t} testo={frase} da={200 + fogli.length * passo} dim={38} scuro />
      </div>
    </div>
  );
}

export const fogliIcone = {
  word: <FileText size={15} className="text-blue-600 shrink-0" />,
  excel: <FileText size={15} className="text-green-600 shrink-0" />,
  pdf: <FileText size={15} className="text-red-600 shrink-0" />,
  copia: <Copy size={15} className="text-gray-500 shrink-0" />,
};

// Il passaggio: un cerchio verde si apre dal centro con il logo.
export function Passaggio({ t }: { t: number }) {
  const r = morbido(seg(t, 0, 650)) * 85;
  const logo = rimbalzo(seg(t, 280, 500));
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 bg-brand-600"
        style={{ clipPath: `circle(${r}% at 50% 50%)` }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/corioli-logo-su-scuro.svg"
          alt="Corioli"
          className="h-14 w-auto"
          style={{ opacity: Math.min(1, logo), transform: `scale(${0.6 + 0.4 * logo})` }}
        />
        <Didascalia t={t} testo="Con Corioli:" da={520} dim={30} scuro />
      </div>
    </div>
  );
}

// L'app vera: tre schermate in finestra che si aprono a ventaglio.
export function AppVera({
  t,
  immagini,
  avviato,
}: {
  t: number;
  immagini: { src: string; alt: string }[];
  avviato: boolean;
}) {
  const pose = [
    { x: -26, y: -56, r: -9 },
    { x: 28, y: 10, r: 6 },
    { x: -4, y: 82, r: -2 },
  ];
  return (
    <div className="absolute inset-0">
      <div className="absolute top-12 left-7 right-7">
        <Didascalia t={t} testo="Non è un'animazione: è *l'app vera*." dim={32} scuro />
      </div>
      {immagini.map((im, i) => {
        const p = esci(seg(t, 250 + i * 220, 650));
        const posa = pose[i];
        return (
          <div
            key={im.src}
            className="absolute left-1/2 top-[330px] w-[290px] rounded-xl overflow-hidden bg-white shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
            style={{
              opacity: p,
              transform: `translate(-50%, -50%) translate(${posa.x}px, ${posa.y + (1 - p) * 220}px) rotate(${posa.r * p}deg) scale(${0.9 + 0.1 * p + seg(t, 900, 2500) * 0.04})`,
              zIndex: i,
            }}
          >
            <div className="h-6 flex items-center gap-1 px-2.5 bg-gray-50 border-b border-gray-100" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avviato ? im.src : undefined}
              alt={im.alt}
              className="block w-full h-[172px] object-cover object-top"
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );
}

export function Finale({ t, titolo, ctx }: { t: number; titolo: string; ctx: Contesto }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-7 pb-6 bg-[radial-gradient(90%_70%_at_50%_30%,#2d6b6b_0%,#0d1f1f_75%)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/corioli-logo-su-scuro.svg" alt="Corioli" className="h-11 w-auto mb-8" style={entra(t, 0, 500)} />
      <Didascalia t={t} testo={titolo} da={200} dim={36} scuro />
      <p className="mt-4 text-[16px] leading-snug text-brand-100/85" style={entra(t, 900)}>
        Senza carta di credito.
        <br />I dati restano nel tuo studio.
      </p>
      <div className="mt-8 flex flex-col items-center gap-2" style={entra(t, 1200)}>
        <a
          href={ctx.cta.href}
          onClick={ctx.cta.onClick}
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-[17px] font-bold text-brand-800 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)]"
          style={{ transform: `scale(${1 + 0.03 * Math.sin(Math.max(0, t - 1700) / 260)})` }}
        >
          {ctx.cta.label} <ArrowRight size={19} aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={ctx.riguarda}
          className="inline-flex items-center gap-1.5 px-4 py-3 text-[14px] font-semibold text-brand-100"
        >
          <RotateCcw size={15} aria-hidden="true" /> Riguarda
        </button>
      </div>
    </div>
  );
}

export { TELA };
