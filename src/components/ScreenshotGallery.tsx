"use client";

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import NextImage from "next/image";
import { ArrowDown, Image as ImageIcon, Maximize2, X, Minus } from "lucide-react";

// label = testo della tab (breve). alt = descrizione per screen reader e
// Google Immagini, quindi piu esplicita. width/height sono le dimensioni reali
// del PNG: servono a next/image per riservare lo spazio ed evitare layout shift.
export type Screenshot = {
  id: string;
  label: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

// Le schermate di Corioli per la ginecologia, quelle di /ginecologia.
const screenshotsGinecologia: Screenshot[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    image: "/screenshots/dashboard.png",
    alt: "Dashboard del gestionale medico Corioli con l'elenco delle visite in programma e i pazienti recenti",
    width: 2400,
    height: 1522,
  },
  {
    id: "ostetrica",
    label: "Visita Ostetrica",
    image: "/screenshots/ostetrica.png",
    alt: "Cartella ostetrica elettronica di Corioli con biometria fetale, stima del peso con Hadlock ed età gestazionale",
    width: 1654,
    height: 1949,
  },
  {
    id: "ginecologica",
    label: "Visita Ginecologica",
    image: "/screenshots/ginecologica.png",
    alt: "Scheda della visita ginecologica nel software Corioli, con anamnesi strutturata e referto compilabile",
    width: 1654,
    height: 1190,
  },
  {
    id: "paziente",
    label: "Scheda Paziente",
    image: "/screenshots/paziente.png",
    alt: "Scheda paziente della cartella clinica elettronica Corioli con lo storico completo delle visite",
    width: 2400,
    height: 1524,
  },
  {
    id: "impostazioni",
    label: "Impostazioni",
    image: "/screenshots/impostazioni.png",
    alt: "Impostazioni di Corioli per personalizzare i template dei referti PDF e i dati dello studio medico",
    width: 1654,
    height: 2667,
  },
];

type ScreenshotGalleryProps = {
  screenshots?: Screenshot[];
  // Testo sotto il titolo; l'indicazione sul tutto schermo segue da sola.
  intro?: ReactNode;
  // Rapporto larghezza/altezza delle schermate. Se c'e, la finestra prende a
  // ogni larghezza l'altezza giusta per contenerle intere: niente banda vuota
  // sotto, e solo quelle piu alte (un referto PDF) si scorrono. Senza, la
  // finestra ha le altezze fisse pensate per le schermate della ginecologia.
  frameRatio?: number;
};

export default function ScreenshotGallery({
  screenshots = screenshotsGinecologia,
  intro = (
    <>
      Scopri quanto è intuitivo Corioli. Seleziona una vista e{" "}
      <strong className="text-brand-700">
        scorri all&apos;interno della finestra
      </strong>{" "}
      per esplorare l&apos;intera schermata.
    </>
  ),
  frameRatio,
}: ScreenshotGalleryProps) {
  const [activeTab, setActiveTab] = useState(screenshots[0].id);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const active = screenshots.find((s) => s.id === activeTab) ?? screenshots[0];

  // La schermata attiva e' piu alta della finestra. Va detto in modo che si
  // veda: chi apre la visita intera vede solo l'inizio e, senza un invito a
  // scorrere, la crede tagliata. Si misura invece di dedurlo dalle
  // proporzioni, perche' la finestra della ginecologia ha altezze fisse.
  const schermi = useRef<Record<string, HTMLDivElement | null>>({});
  const [sborda, setSborda] = useState(false);
  // Schermate gia' scorse: l'invito sparisce e non torna.
  const [scorse, setScorse] = useState<Record<string, boolean>>({});
  const misura = useCallback(() => {
    const el = schermi.current[activeTab];
    setSborda(Boolean(el && el.scrollHeight - el.clientHeight > 24));
  }, [activeTab]);
  useEffect(() => {
    misura();
    // Il passaggio al tutto schermo dura 700ms: si rimisura a fine corsa.
    const t = window.setTimeout(misura, 750);
    window.addEventListener("resize", misura);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", misura);
    };
  }, [misura, isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  return (
    // --barra e l'altezza della barra della finestra: la usa la barra stessa e
    // il calcolo dell'altezza della finestra quando c'e frameRatio.
    <div className="w-full relative [--barra:42px] sm:[--barra:54px]">
      <div className="text-center mb-8 sm:mb-10 px-4">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Esplora l&apos;Interfaccia
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {intro}{" "}
          <span className="hidden sm:inline">
            Puoi anche cliccare sulla schermata per vederla a tutto schermo.
          </span>
          <span className="sm:hidden">
            Tocca l&apos;immagine per aprirla a tutto schermo.
          </span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 relative z-10 px-2">
        {screenshots.map((screen) => (
          <button
            key={screen.id}
            onClick={() => setActiveTab(screen.id)}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeTab === screen.id
                ? "bg-brand-600 text-white shadow-md scale-105 ring-2 ring-brand-600 ring-offset-2 ring-offset-background"
                : "bg-white text-gray-600 hover:bg-brand-50 border border-gray-200 hover:border-brand-200 hover:text-brand-700"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>

      <div
        className={`relative mx-auto w-full max-w-[1200px] group mt-4 ${
          frameRatio
            ? "box-content"
            : "aspect-video sm:aspect-auto sm:h-[600px] md:h-[750px] lg:h-[850px] px-2 sm:px-0"
        }`}
        // Con box-content il rapporto vale per l'area della schermata e la
        // barra si aggiunge sopra come padding (+1px per il bordo inferiore).
        style={
          frameRatio
            ? { aspectRatio: frameRatio, paddingTop: "calc(var(--barra) + 1px)" }
            : undefined
        }
      >
        {!isFullscreen && sborda && (
          // Da 2xl e non da xl: a 1280px la galleria (max 1200px) lascia meno
          // dei 64px che servono all'indicatore e la pagina scorreva di lato.
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-xs font-bold tracking-widest uppercase rotate-90 mb-8 text-brand-500">
              Scorri
            </span>
            <div className="animate-bounce mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-400"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}

        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
            isFullscreen
              ? "fixed z-[100] flex items-center justify-center p-0 sm:p-6 md:p-12 top-1/2 left-1/2 w-[100dvh] h-[100dvw] -translate-x-1/2 -translate-y-1/2 rotate-90 landscape:top-0 landscape:left-0 landscape:w-full landscape:h-full landscape:translate-x-0 landscape:translate-y-0 landscape:rotate-0 sm:!top-0 sm:!left-0 sm:!w-full sm:!h-full sm:!translate-x-0 sm:!translate-y-0 sm:!rotate-0"
              : "absolute z-10 flex items-center justify-center top-0 left-0 w-full h-full translate-x-0 translate-y-0 rotate-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isFullscreen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsFullscreen(false)}
          />

          <div
            className={`relative flex flex-col w-full shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
              isFullscreen
                ? "max-w-[1600px] h-full max-h-[100dvw] landscape:max-h-[100dvh] sm:!max-h-[95dvh] rounded-none sm:rounded-2xl"
                : "max-w-[1200px] h-full rounded-2xl"
            }`}
          >
            <div
              className={`h-[var(--barra)] bg-white/95 backdrop-blur-md border border-gray-200 border-b-0 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 shadow-sm shrink-0 z-20 transition-all ${
                isFullscreen ? "rounded-none sm:rounded-t-2xl" : "rounded-t-2xl"
              }`}
            >
              <div className="flex gap-2 group/lights items-center shrink-0">
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center relative overflow-hidden focus:outline-none transition-all duration-300 hover:brightness-110 hover:scale-[1.2] active:scale-90 shadow-sm"
                  title="Chiudi"
                >
                  <X
                    size={8}
                    strokeWidth={4}
                    className="text-[#900000] opacity-0 group-hover/lights:opacity-100 transition-opacity"
                  />
                </button>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center relative overflow-hidden focus:outline-none transition-all duration-300 hover:brightness-110 hover:scale-[1.2] active:scale-90 shadow-sm"
                  title="Riduci"
                >
                  <Minus
                    size={8}
                    strokeWidth={5}
                    className="text-[#995700] opacity-0 group-hover/lights:opacity-100 transition-opacity"
                  />
                </button>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center relative overflow-hidden focus:outline-none transition-all duration-300 hover:brightness-110 hover:scale-[1.2] active:scale-90 shadow-sm"
                  title={
                    isFullscreen ? "Esci da schermo intero" : "Schermo intero"
                  }
                >
                  {isFullscreen ? (
                    <Minus
                      size={8}
                      strokeWidth={4}
                      className="text-[#006500] opacity-0 group-hover/lights:opacity-100 transition-opacity"
                    />
                  ) : (
                    <Maximize2
                      size={8}
                      strokeWidth={4}
                      className="text-[#006500] opacity-0 group-hover/lights:opacity-100 transition-opacity"
                    />
                  )}
                </button>
              </div>

              <div className="flex-1 flex justify-center overflow-hidden px-2">
                <div className="bg-gray-100/80 text-gray-500 text-[10px] sm:text-xs font-semibold px-3 sm:px-6 py-1 sm:py-1.5 rounded-md border border-gray-200 flex items-center gap-1.5 sm:gap-2 transition-colors hover:bg-gray-200 cursor-default truncate max-w-full">
                  <ImageIcon size={12} className="shrink-0 sm:w-3.5 sm:h-3.5" />
                  <span className="truncate">{active.label}</span>
                </div>
              </div>
              <div className="w-12 sm:w-16 shrink-0" />
            </div>

            <div
              className={`bg-[#FAFAFA] border border-gray-200 border-t-0 overflow-hidden relative shadow-inner flex-1 z-10 transition-all ${
                isFullscreen ? "rounded-none sm:rounded-b-2xl" : "rounded-b-2xl"
              }`}
            >
              {screenshots.map((screen) => (
                <div
                  key={screen.id}
                  ref={(el) => {
                    schermi.current[screen.id] = el;
                  }}
                  onScroll={(e) => {
                    if (e.currentTarget.scrollTop > 40 && !scorse[screen.id]) {
                      setScorse((prima) => ({ ...prima, [screen.id]: true }));
                    }
                  }}
                  className={`absolute inset-0 overflow-auto [&::-webkit-scrollbar]:w-1.5 sm:[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-1.5 sm:[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300/80 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 transition-opacity duration-500 ${
                    activeTab === screen.id
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <NextImage
                    src={screen.image}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    onClick={() => !isFullscreen && setIsFullscreen(true)}
                    onLoad={misura}
                    className={`h-auto object-top transition-all duration-500 ${
                      isFullscreen
                        ? "w-full cursor-default"
                        : "w-full cursor-zoom-in"
                    }`}
                    // Solo lo screenshot della tab attiva e prioritario: gli
                    // altri restano lazy finche l'utente non cambia tab.
                    priority={activeTab === screen.id}
                    loading={activeTab === screen.id ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1280px"
                  />
                </div>
              ))}

              {sborda && !scorse[activeTab] && (
                <div
                  aria-hidden="true"
                  className="absolute bottom-4 sm:bottom-6 inset-x-0 z-30 flex justify-center px-4 pointer-events-none"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-gray-900/80 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
                    <ArrowDown size={16} className="shrink-0" />
                    Scorri per vedere tutta la pagina
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
