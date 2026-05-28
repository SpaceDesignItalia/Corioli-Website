"use client";

import { useState, useEffect } from "react";
import { Image as ImageIcon, Maximize2, X, Minus } from "lucide-react";

const screenshots = [
  { id: "dashboard", label: "Dashboard", image: "/screenshots/dashboard.png" },
  { id: "ostetrica", label: "Visita Ostetrica", image: "/screenshots/ostetrica.png" },
  {
    id: "ginecologica",
    label: "Visita Ginecologica",
    image: "/screenshots/ginecologica.png",
  },
  { id: "paziente", label: "Scheda Paziente", image: "/screenshots/paziente.png" },
  {
    id: "impostazioni",
    label: "Impostazioni",
    image: "/screenshots/impostazioni.png",
  },
];

export default function ScreenshotGallery() {
  const [activeTab, setActiveTab] = useState(screenshots[0].id);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    <div className="w-full relative">
      <div className="text-center mb-8 sm:mb-10 px-4">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Esplora l&apos;Interfaccia
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Scopri quanto è intuitivo Corioli. Seleziona una vista e{" "}
          <strong className="text-brand-700">
            scorri all&apos;interno della finestra
          </strong>{" "}
          per esplorare l&apos;intera schermata.{" "}
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

      <div className="relative mx-auto w-full max-w-[1200px] group mt-4 aspect-video sm:aspect-auto sm:h-[600px] md:h-[750px] lg:h-[850px] px-2 sm:px-0">
        {!isFullscreen && (
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
              className={`bg-white/95 backdrop-blur-md border border-gray-200 border-b-0 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 shadow-sm shrink-0 z-20 transition-all ${
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
                  <span className="truncate">
                    {screenshots.find((s) => s.id === activeTab)?.label}
                  </span>
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
                  className={`absolute inset-0 overflow-auto [&::-webkit-scrollbar]:w-1.5 sm:[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-1.5 sm:[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300/80 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 transition-opacity duration-500 ${
                    activeTab === screen.id
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={screen.image}
                    alt={screen.label}
                    onClick={() => !isFullscreen && setIsFullscreen(true)}
                    className={`h-auto object-top transition-all duration-500 ${
                      isFullscreen
                        ? "w-full cursor-default"
                        : "w-full cursor-zoom-in"
                    }`}
                    loading={activeTab === screen.id ? "eager" : "lazy"}
                  />
                </div>
              ))}

              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
