import type { Metadata } from "next";
import { FileText, Activity, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import FeaturesCta from "@/components/FeaturesCta";

export const metadata: Metadata = {
  title: "Funzionalità gestionale medico",
  description: "Scopri le funzionalità di Corioli: cartella clinica elettronica, anamnesi strutturata, refertazione PDF, calcolatori clinici, sicurezza cloud e GDPR per studi medici specialistici.",
  alternates: {
    canonical: "/funzionalita",
  },
  openGraph: {
    title: "Funzionalità Corioli | Gestionale medico cloud",
    description: "Cartella clinica elettronica, referti, calcolatori clinici e sicurezza GDPR per medici specialisti.",
    url: "https://corioli.it/funzionalita",
  },
};

export default function FunzionalitaPage() {
  return (
    <div className="pt-32 pb-24">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Progettato per funzionare <br/><span className="text-brand-600">come pensi tu.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
          Ogni modulo di Corioli è stato disegnato partendo dall'osservazione clinica sul campo, non dalla scrivania di un programmatore.
        </p>
      </div>

      {/* Feature 1 */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8">
              <FileText size={24} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">L'Anamnesi Strutturata</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Dimentica i documenti di testo vuoti e le perdite di tempo con il copia-incolla. Il nostro sistema di input intelligente si adatta alla situazione clinica.
            </p>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Campi anamnestici specifici per specializzazione
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Auto-completamento per diagnosi frequenti e ICD-9/10
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Timeline visiva per recuperare rapidamente lo storico
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 rounded-2xl shadow-2xl p-8 flex items-center justify-center relative overflow-hidden">
               {/* Pattern di sfondo */}
               <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
               </div>
               
               {/* Elementi visivi che rappresentano la struttura dei dati */}
               <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
                  
                  {/* Icona centrale grande */}
                  <div className="relative">
                     <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
                        <FileText size={36} className="text-white" strokeWidth={2} />
                     </div>
                     {/* Badge auto-completamento */}
                     <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                           <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </div>
                  </div>

                  {/* Tre card che rappresentano le funzionalità */}
                  <div className="flex gap-3 items-center">
                     {/* Card 1: Campi Strutturati */}
                     <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/50 w-28 transform -rotate-3 hover:rotate-0 transition-transform">
                        <div className="flex flex-col gap-2">
                           <div className="h-2 bg-brand-200 rounded-full w-3/4"></div>
                           <div className="h-2 bg-brand-200 rounded-full w-full"></div>
                           <div className="h-2 bg-brand-200 rounded-full w-5/6"></div>
                           <div className="mt-2 flex gap-1">
                              <div className="h-4 px-2 bg-brand-100 rounded text-[8px] font-bold text-brand-700 flex items-center">ICD-10</div>
                           </div>
                        </div>
                     </div>

                     {/* Card 2: Timeline */}
                     <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/50 w-28 transform rotate-2 hover:rotate-0 transition-transform">
                        <div className="flex items-center gap-2">
                           <div className="flex flex-col gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                              <div className="w-0.5 h-6 bg-brand-200 mx-auto"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-300"></div>
                              <div className="w-0.5 h-6 bg-brand-200 mx-auto"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-300"></div>
                           </div>
                           <div className="flex flex-col gap-2 flex-1">
                              <div className="h-1.5 bg-brand-500 rounded-full w-full"></div>
                              <div className="h-1.5 bg-brand-200 rounded-full w-3/4"></div>
                              <div className="h-1.5 bg-brand-200 rounded-full w-2/3"></div>
                           </div>
                        </div>
                     </div>

                     {/* Card 3: Tags */}
                     <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/50 w-28 transform -rotate-2 hover:rotate-0 transition-transform">
                        <div className="flex flex-wrap gap-1.5">
                           <div className="h-3 px-2 bg-red-100 rounded-full text-[7px] font-bold text-red-700 flex items-center">Patologia</div>
                           <div className="h-3 px-2 bg-blue-100 rounded-full text-[7px] font-bold text-blue-700 flex items-center">Allergia</div>
                           <div className="h-3 px-2 bg-amber-100 rounded-full text-[7px] font-bold text-amber-700 flex items-center">Farmaco</div>
                           <div className="h-3 px-2 bg-green-100 rounded-full text-[7px] font-bold text-green-700 flex items-center">+</div>
                        </div>
                     </div>
                  </div>

                  {/* Testo descrittivo */}
                  <div className="text-center">
                     <p className="text-white text-sm font-semibold drop-shadow-lg">Anamnesi Intelligente</p>
                     <p className="text-brand-100 text-xs mt-1">Strutturata • Storico • Auto-completamento</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-[4/3] bg-brand-50/50 rounded-2xl border border-brand-100 shadow-soft p-8 flex items-center justify-center relative overflow-hidden">
               {/* Abstract graph */}
               <svg viewBox="0 0 100 100" className="absolute w-full h-full text-brand-200 p-12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10,90 Q30,80 50,40 T90,10" className="text-brand-500" strokeWidth="3" strokeLinecap="round" />
                  <path d="M10,90 Q30,70 50,50 T90,30" className="text-brand-300 stroke-dasharray-[4,4]" strokeLinecap="round" />
                  <circle cx="50" cy="40" r="3" className="fill-white stroke-brand-500" strokeWidth="2" />
               </svg>
            </div>
          </div>
          <div>
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8">
              <Activity size={24} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Calcolatori Clinici Nativi</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Nessun bisogno di app di terze parti per i tuoi calcoli. Corioli integra gli algoritmi più avanzati e riconosciuti (Hadlock, WHO, etc.) direttamente nella visita.
            </p>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Datazione accurata integrata
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Curve di crescita fetale e pediatriche
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 I risultati vengono inseriti in automatico nel referto finale
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8">
              <Lock size={24} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sicurezza e Privacy (GDPR)</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              I dati sanitari richiedono i massimi standard di sicurezza. La nostra infrastruttura cloud protegge te e i tuoi pazienti in ogni momento.
            </p>
            <Link href="/gdpr" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors mb-8">
              Consulta la nostra pagina sulla conformità GDPR <ArrowRight size={16} />
            </Link>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">Crittografia Totale</h4>
                  <p className="text-xs text-gray-500">Dati cifrati a riposo e in transito.</p>
               </div>
               <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">Backup Automatici</h4>
                  <p className="text-xs text-gray-500">Copie georeplicate giornaliere in server europei.</p>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] bg-brand-900 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden shadow-xl">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]"></div>
               <Shield size={120} className="text-brand-400 opacity-20 absolute" />
               <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 max-w-xs w-full text-white">
                  <div className="flex items-center gap-3 mb-4">
                     <Lock size={18} className="text-brand-300" />
                     <span className="text-sm font-medium">Connessione Sicura Attiva</span>
                  </div>
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                     <div className="w-full h-full bg-brand-400"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Migliora la qualità del tuo tempo in studio</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">Scopri di persona come la nostra piattaforma può semplificare la tua attività clinica.</p>
          <FeaturesCta />
        </div>
      </section>

    </div>
  );
}

// Temporary Shield icon to fix the build
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
