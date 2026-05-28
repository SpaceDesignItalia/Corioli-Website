"use client";

import { Monitor, Apple, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import { useState, useEffect } from "react";
import ScreenshotGallery from "@/components/ScreenshotGallery";

export default function DownloadPage() {
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [windowsDownloading, setWindowsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/download/windows")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { version?: string } | null) => {
        if (data?.version) setLatestVersion(data.version);
      })
      .catch(() => {});
  }, []);

  const handleWindowsDownload = async () => {
    setDownloadError(null);
    setWindowsDownloading(true);
    posthog.capture("program_downloaded", { os: "windows" });

    try {
      const res = await fetch("/api/download/windows");
      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Download non disponibile");
      }

      if (data.version) setLatestVersion(data.version);
      window.location.href = data.url;
    } catch {
      setDownloadError("Impossibile avviare il download. Riprova tra poco.");
      setWindowsDownloading(false);
    }
  };

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-gradient-to-b from-brand-50/40 to-background min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight px-2">
          Inizia la tua prova con <span className="text-brand-600">Corioli</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl px-4">
          Scarica l'applicazione per il tuo sistema operativo e trasforma il modo in cui gestisci il tuo ambulatorio. Installazione rapida e sicura.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-16 w-full max-w-2xl justify-center z-20 px-4">
          <button 
            onClick={handleWindowsDownload}
            disabled={windowsDownloading}
            className="flex-1 bg-brand-800 text-white px-6 py-4 rounded-xl font-bold hover:bg-brand-950 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group text-lg disabled:opacity-70 disabled:cursor-wait disabled:hover:translate-y-0"
          >
            <Monitor size={24} className="group-hover:scale-110 transition-transform" />
            {windowsDownloading ? "Avvio download..." : "Scarica per Windows"}
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

        {downloadError && (
          <p className="text-sm text-red-600 font-medium -mt-10 mb-10">{downloadError}</p>
        )}

        {/* INTERACTIVE GALLERY */}
        <div className="w-full mt-6 sm:mt-10 relative">
          <ScreenshotGallery />
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
          Versione {latestVersion ?? "…"} • <Link href="/contatti" className="text-brand-600 hover:underline">Serve aiuto?</Link>
        </p>

      </div>
    </div>
  );
}
