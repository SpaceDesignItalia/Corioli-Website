"use client";

import { Download, Monitor, Apple, CheckCircle2, Image as ImageIcon, Maximize2, X, Minus } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import { useState, useEffect } from "react";

const screenshots = [
  { id: 'dashboard', label: 'Dashboard', image: '/screenshots/dashboard.png' },
  { id: 'ostetrica', label: 'Visita Ostetrica', image: '/screenshots/ostetrica.png' },
  { id: 'ginecologica', label: 'Visita Ginecologica', image: '/screenshots/ginecologica.png' },
  { id: 'paziente', label: 'Scheda Paziente', image: '/screenshots/paziente.png' },
  { id: 'impostazioni', label: 'Impostazioni', image: '/screenshots/impostazioni.png' },
];

export default function DownloadPage() {
  const [activeTab, setActiveTab] = useState(screenshots[0].id);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Esci dallo schermo intero premendo ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Gestione scroll della pagina quando è in fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  const handleDownload = (os: string) => {
    posthog.capture("program_downloaded", { os });
    // In a real app, this would trigger the actual download
  };

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-brand-50/40 to-background min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 text-brand-700 text-sm font-semibold mb-8 shadow-sm">
          <Download size={16} /> Scarica il programma
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight px-2">
          Inizia la tua prova con <span className="text-brand-600">Corioli</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl px-4">
          Scarica l'applicazione per il tuo sistema operativo e trasforma il modo in cui gestisci il tuo ambulatorio. Installazione rapida e sicura.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-16 w-full max-w-2xl justify-center z-20 px-4">
          <button 
            onClick={() => handleDownload('windows')}
            className="flex-1 bg-brand-800 text-white px-6 py-4 rounded-xl font-bold hover:bg-brand-950 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group text-lg"
          >
            <Monitor size={24} className="group-hover:scale-110 transition-transform" />
            Scarica per Windows
          </button>
          
          <div className="flex-1 relative">
            <button 
              disabled
              className="w-full h-full bg-white text-gray-400 border-2 border-gray-100 px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 text-lg cursor-not-allowed"
            >
              <Apple size={24} />
              Scarica per Mac
            </button>
            <div className="absolute -top-3 -right-2 sm:-right-4 bg-gray-800 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md border border-gray-700">
              Disponibile nel 2026
            </div>
          </div>
        </div>

        {/* INTERACTIVE GALLERY */}
        <div className="w-full mt-6 sm:mt-10 relative">
          
          <div className="text-center mb-8 sm:mb-10 px-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Esplora l'Interfaccia</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Scopri quanto è intuitivo Corioli. Seleziona una vista e <strong className="text-brand-700">scorri all'interno della finestra</strong> per esplorare l'intera schermata. <span className="hidden sm:inline">Puoi anche cliccare sulla schermata per vederla a tutto schermo.</span><span className="sm:hidden">Tocca l'immagine per aprirla a tutto schermo.</span>
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 relative z-10 px-2">
            {screenshots.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === screen.id 
                  ? 'bg-brand-600 text-white shadow-md scale-105 ring-2 ring-brand-600 ring-offset-2 ring-offset-background' 
                  : 'bg-white text-gray-600 hover:bg-brand-50 border border-gray-200 hover:border-brand-200 hover:text-brand-700'
                }`}
              >
                {screen.label}
              </button>
            ))}
          </div>

          {/* MOCKUP WINDOW CONTAINER (With Placeholder to prevent layout shift) */}
          <div className="relative mx-auto w-full max-w-[1200px] group mt-4 aspect-video sm:aspect-auto sm:h-[600px] md:h-[750px] lg:h-[850px] px-2 sm:px-0">
            
            {/* Scroll Indicator (shows on hover) - Nascosto in fullscreen e su mobile */}
            {!isFullscreen && (
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs font-bold tracking-widest uppercase rotate-90 mb-8 text-brand-500">Scorri</span>
                <div className="w-1 h-24 bg-gray-200 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-brand-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}

            {/* Animation Wrapper */}
            <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
              isFullscreen 
              ? "fixed z-[100] flex items-center justify-center p-0 sm:p-6 md:p-12 top-1/2 left-1/2 w-[100dvh] h-[100dvw] -translate-x-1/2 -translate-y-1/2 rotate-90 landscape:top-0 landscape:left-0 landscape:w-full landscape:h-full landscape:translate-x-0 landscape:translate-y-0 landscape:rotate-0 sm:!top-0 sm:!left-0 sm:!w-full sm:!h-full sm:!translate-x-0 sm:!translate-y-0 sm:!rotate-0"
              : "absolute z-10 flex items-center justify-center top-0 left-0 w-full h-full translate-x-0 translate-y-0 rotate-0"
            }`}>
              
              {/* Overlay background for fullscreen */}
              <div 
                className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isFullscreen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsFullscreen(false)}
              ></div>

              {/* Actual Window */}
              <div className={`relative flex flex-col w-full shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                isFullscreen 
                ? "max-w-[1600px] h-full max-h-[100dvw] landscape:max-h-[100dvh] sm:!max-h-[95dvh] rounded-none sm:rounded-2xl" 
                : "max-w-[1200px] h-full rounded-2xl"
              }`}>
                
                {/* Header: Traffic lights & Title */}
                <div className={`bg-white/95 backdrop-blur-md border border-gray-200 border-b-0 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 shadow-sm shrink-0 z-20 transition-all ${
                  isFullscreen ? 'rounded-none sm:rounded-t-2xl' : 'rounded-t-2xl'
                }`}>
                  <div className="flex gap-2 group/lights items-center shrink-0">
                    {/* Close Button (Red) */}
                    <button 
                      onClick={() => setIsFullscreen(false)}
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center relative overflow-hidden focus:outline-none transition-all duration-300 hover:brightness-110 hover:scale-[1.2] active:scale-90 shadow-sm"
                      title="Chiudi"
                    >
                      <X size={8} strokeWidth={4} className="text-[#900000] opacity-0 group-hover/lights:opacity-100 transition-opacity" />
                    </button>
                    {/* Minimize Button (Yellow) */}
                    <button 
                      onClick={() => setIsFullscreen(false)}
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center relative overflow-hidden focus:outline-none transition-all duration-300 hover:brightness-110 hover:scale-[1.2] active:scale-90 shadow-sm"
                      title="Riduci"
                    >
                      <Minus size={8} strokeWidth={5} className="text-[#995700] opacity-0 group-hover/lights:opacity-100 transition-opacity" />
                    </button>
                    {/* Fullscreen Button (Green) */}
                    <button 
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center relative overflow-hidden focus:outline-none transition-all duration-300 hover:brightness-110 hover:scale-[1.2] active:scale-90 shadow-sm"
                      title={isFullscreen ? "Esci da schermo intero" : "Schermo intero"}
                    >
                      {isFullscreen ? (
                        <Minus size={8} strokeWidth={4} className="text-[#006500] opacity-0 group-hover/lights:opacity-100 transition-opacity" />
                      ) : (
                        <Maximize2 size={8} strokeWidth={4} className="text-[#006500] opacity-0 group-hover/lights:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </div>

                  <div className="flex-1 flex justify-center overflow-hidden px-2">
                    <div className="bg-gray-100/80 text-gray-500 text-[10px] sm:text-xs font-semibold px-3 sm:px-6 py-1 sm:py-1.5 rounded-md border border-gray-200 flex items-center gap-1.5 sm:gap-2 transition-colors hover:bg-gray-200 cursor-default truncate max-w-full">
                      <ImageIcon size={12} className="shrink-0 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{screenshots.find(s => s.id === activeTab)?.label}</span>
                    </div>
                  </div>
                  <div className="w-12 sm:w-16 shrink-0"></div> {/* Spacer for symmetry */}
                </div>
                
                {/* Window Content (Scrollable Area) */}
                <div className={`bg-[#FAFAFA] border border-gray-200 border-t-0 overflow-hidden relative shadow-inner flex-1 z-10 transition-all ${
                  isFullscreen ? 'rounded-none sm:rounded-b-2xl' : 'rounded-b-2xl'
                }`}>
                  {screenshots.map((screen) => (
                    <div 
                      key={screen.id} 
                      className={`absolute inset-0 overflow-auto [&::-webkit-scrollbar]:w-1.5 sm:[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-1.5 sm:[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300/80 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 transition-opacity duration-500 ${
                        activeTab === screen.id 
                        ? 'opacity-100 z-10' 
                        : 'opacity-0 z-0 pointer-events-none'
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
                  
                  {/* Bottom gradient hint */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24 bg-white border border-gray-100 shadow-soft rounded-2xl p-6 md:p-8 w-full max-w-3xl">
          <ul className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-8 text-gray-700 w-full">
            <li className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-brand-500 shrink-0" />
              <span className="font-semibold text-base sm:text-lg">Nessuna carta di credito</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-brand-500 shrink-0" />
              <span className="font-semibold text-base sm:text-lg">90 giorni di prova</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-brand-500 shrink-0" />
              <span className="font-semibold text-base sm:text-lg">Supporto rapido</span>
            </li>
          </ul>
        </div>
        
        <p className="text-sm text-gray-500 mt-8 font-medium">
          Versione 2.4.1 • <Link href="/contatti" className="text-brand-600 hover:underline">Serve aiuto?</Link>
        </p>

      </div>
    </div>
  );
}
