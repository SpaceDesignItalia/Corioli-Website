"use client";

import { useEffect, useRef, useState } from "react";
import posthog from "posthog-js";
import { Pause, Play } from "lucide-react";
import type { Edizione } from "@/lib/ms-store";

// Il video dimostrativo vero: una ripresa dell'app (versione dello Store) in
// una finestra da computer, su un archivio di prova, con una frase per scena.
// Due montaggi dallo stesso girato: verticale per il telefono, con primi piani
// stretti perché il testo dell'app si legga, e orizzontale per il computer.
// Parte da solo, senza audio, e si ferma fuori schermo: chi apre la pagina da
// WhatsApp non deve toccare nulla (richiesta di Pablo, 3/11/2026).
// Come si rifà: vedi la memoria "film-demo-specialita".

type Sorgente = { src: string; poster: string };

function Video({
  edizione,
  sorgente,
  descrizione,
  className,
  videoClassName,
}: {
  edizione: Edizione;
  sorgente: Sorgente;
  descrizione: string;
  className: string;
  videoClassName: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [pausa, setPausa] = useState(true);
  const pausaUtente = useRef(false);
  const visto = useRef(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    // Dei due video ne è visibile uno solo (l'altro è display:none): quello
    // nascosto non scarica nulla oltre al poster.
    const io = new IntersectionObserver(
      ([voce]) => {
        if (!el.offsetParent) return;
        if (voce.isIntersecting && !pausaUtente.current) {
          el.preload = "auto";
          el.play().catch(() => {});
        } else if (!voce.isIntersecting) {
          el.pause();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className={className}>
      <video
        ref={video}
        src={sorgente.src}
        poster={sorgente.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={descrizione}
        onPlay={() => setPausa(false)}
        onPause={() => setPausa(true)}
        onTimeUpdate={(e) => {
          // Con loop l'evento ended non arriva: il giro completo si conta
          // quando il video arriva in fondo la prima volta.
          const v = e.currentTarget;
          if (!visto.current && v.duration && v.currentTime > v.duration - 0.4) {
            visto.current = true;
            posthog.capture("demo_video_completed", { edizione });
          }
        }}
        className={`block w-full bg-white ${videoClassName}`}
      />
      <button
        type="button"
        onClick={() => {
          const el = video.current;
          if (!el) return;
          if (el.paused) {
            pausaUtente.current = false;
            el.play().catch(() => {});
          } else {
            pausaUtente.current = true;
            el.pause();
          }
        }}
        aria-label={pausa ? "Riprendi il video" : "Metti in pausa il video"}
        className="absolute right-3 bottom-3 w-10 h-10 rounded-full bg-gray-900/55 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-900/70 transition-colors"
      >
        {pausa ? <Play size={17} fill="currentColor" /> : <Pause size={17} fill="currentColor" />}
      </button>
      <figcaption className="sr-only">{descrizione}</figcaption>
    </figure>
  );
}

export default function VideoDemo({
  edizione,
  telefono,
  computer,
  descrizione,
}: {
  edizione: Edizione;
  telefono: Sorgente;
  computer: Sorgente;
  // Cosa si vede nel video, per chi non lo vede.
  descrizione: string;
}) {
  return (
    <>
      {/* Da telefono il video va da bordo a bordo: ogni pixel serve a leggere. */}
      <Video
        edizione={edizione}
        sorgente={telefono}
        descrizione={descrizione}
        className="relative -mx-4 sm:mx-auto sm:max-w-[520px] lg:hidden"
        videoClassName="aspect-[4/5] sm:rounded-[24px] sm:shadow-[0_30px_80px_-30px_rgba(16,37,37,0.45)] sm:ring-1 sm:ring-black/5"
      />
      <Video
        edizione={edizione}
        sorgente={computer}
        descrizione={descrizione}
        className="relative hidden lg:block mx-auto w-full max-w-[1100px]"
        videoClassName="aspect-video rounded-3xl shadow-[0_30px_80px_-30px_rgba(16,37,37,0.45)] ring-1 ring-black/5"
      />
    </>
  );
}
