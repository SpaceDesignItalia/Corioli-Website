import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestionale medico per ginecologia, ostetricia e pediatria",
  description: "Corioli è il gestionale medico specializzato per ginecologi, ostetrici e pediatri: moduli verticali, cartella clinica elettronica, curve, percentili e referti.",
  alternates: {
    canonical: "/specializzazioni",
  },
  openGraph: {
    title: "Specializzazioni Corioli | Gestionale medico verticale",
    description: "Software gestionale medico per ginecologia, ostetricia e pediatria, con strumenti clinici integrati.",
    url: "https://corioli.it/specializzazioni",
  },
};

export default function SpecializzazioniPage() {
  return (
    <div className="pt-40 md:pt-48 pb-24 bg-background">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          L'eccellenza richiede <span className="text-brand-600">specializzazione.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-balance">
          A differenza dei gestionali generici, sviluppiamo moduli verticali dedicati ad ogni singola branca della medicina, in collaborazione con i migliori specialisti.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 gap-12">
        
        {/* Ginecologia e Ostetricia */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-card flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="md:w-[55%] p-10 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> ATTIVO ORA
            </div>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Ginecologia & Ostetricia</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Il nostro modulo di punta, sviluppato e validato clinicamente da specialisti delle migliori strutture italiane. Progettato per ottimizzare le visite ostetriche e ginecologiche.
            </p>
            <ul className="flex flex-col gap-3 text-sm font-medium text-gray-700 mb-8">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Cartella ostetrica elettronica e ginecologia pediatrica</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Calcolo automatico della datazione</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Integrazione di curve e percentili fetali</li>
            </ul>
            <Link href="/contatti" className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-6 py-3 rounded-xl font-semibold hover:bg-brand-100 transition-colors w-fit">
              Richiedi Demo Ginecologica <ArrowRight size={18} />
            </Link>
          </div>
          <div className="md:w-[45%] bg-brand-50 p-8 flex items-center justify-center relative border-t md:border-t-0 md:border-l border-gray-100">
             {/* Visual abstraction of gynecology/obstetrics tool */}
             <div className="w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
                   <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Biometria Fetale</div>
                   <div className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-bold">W 22+4</div>
                </div>
                <div className="flex flex-col gap-3">
                   <div className="flex justify-between items-center">
                     <span className="text-sm font-medium text-gray-700">Diametro Biparietale (BPD)</span>
                     <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-xs text-gray-900 font-medium">54.2 mm</div>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-sm font-medium text-gray-700">Circonferenza Cranica (HC)</span>
                     <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-xs text-gray-900 font-medium">198 mm</div>
                   </div>
                   <div className="mt-2 pt-3 border-t border-gray-100 flex justify-between items-center bg-brand-50/50 -mx-6 -mb-6 px-6 py-4 rounded-b-xl">
                     <span className="text-xs text-gray-500 font-medium">Peso Stimato (Hadlock)</span>
                     <span className="text-sm font-bold text-brand-700 flex items-center gap-1">450 g <span className="text-xs font-normal text-brand-500">(45° pc)</span></span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Pediatria */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row overflow-hidden opacity-70 grayscale-[30%]">
          <div className="md:w-[55%] p-10 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> PROSSIMAMENTE (2026)
            </div>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Pediatria</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Stiamo portando l'eccellenza di Corioli nella cura dei più piccoli. Curve di crescita integrate, gestione del calendario vaccinale e bilanci di salute strutturati.
            </p>
            <button className="inline-flex items-center gap-2 text-gray-500 font-semibold cursor-not-allowed w-fit" disabled>
              Iscriviti alla lista d'attesa <ChevronRight size={18} />
            </button>
          </div>
          <div className="md:w-[45%] bg-gray-50 p-8 flex items-center justify-center relative border-t md:border-t-0 md:border-l border-gray-100">
             <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[1px] z-10">
               <span className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 shadow-sm">In Sviluppo</span>
             </div>
             {/* Visual abstraction of pediatrics tool */}
             <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">Curva di Crescita (WHO)</div>
                <div className="h-32 border-l-2 border-b-2 border-gray-200 relative mt-2 ml-4">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <path d="M0,80 Q50,40 100,10" fill="none" stroke="#d1d5db" strokeWidth="2" />
                    <path d="M0,90 Q50,60 100,30" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="70" cy="42" r="4" fill="#6b7280" />
                  </svg>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
