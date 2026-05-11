"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import posthog from "posthog-js";

export default function LandingPageGinecologia() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    posthog.capture("lp_ginecologia_viewed");
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      {/* Simple Header for Landing */}
      <header className="p-6 md:px-12 flex justify-between items-center border-b border-gray-100 bg-white shadow-sm">
         <div className="font-heading text-2xl font-bold tracking-tight text-brand-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
               <span className="text-white text-lg leading-none">C</span>
            </div>
            Corioli
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 md:py-24 items-center">
         
         <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
               Specifico per Ginecologia e Ostetricia
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
               Il gestionale clinico <br/>che <span className="text-brand-600">pensa come te.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
               Basta software generici o fogli Word. Usa il primo gestionale costruito nativamente per l'ostetricia e la ginecologia, con calcolatori fetali integrati e referti immediati.
            </p>
            
            <ul className="flex flex-col gap-5 text-gray-800 mb-12">
               <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <div className="text-brand-500 shrink-0"><CheckCircle2 size={24} /></div>
                  <span className="font-medium">Migrazione gratuita dei vecchi dati e pazienti inclusa</span>
               </li>
               <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <div className="text-brand-500 shrink-0"><CheckCircle2 size={24} /></div>
                  <span className="font-medium">Template e calcolatori validati dal Policlinico Gemelli</span>
               </li>
               <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-soft">
                  <div className="text-brand-500 shrink-0"><CheckCircle2 size={24} /></div>
                  <span className="font-medium">Dati criptati e certificati 100% GDPR compliant</span>
               </li>
            </ul>

            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 relative mt-4">
               <div className="absolute -top-3 left-6 bg-brand-100 text-brand-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Feedback Reale</div>
               <p className="text-sm text-brand-900 italic font-medium">
                 "L'inserimento dell'anamnesi è diventato così fluido che riesco finalmente a mantenere il contatto visivo con la paziente, invece di fissare il monitor."
               </p>
            </div>
         </div>

         <div className="bg-white p-8 md:p-12 rounded-3xl shadow-card border border-gray-100 lg:ml-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-50 rounded-full blur-[60px] -z-0 opacity-80"></div>
            
            <div className="relative z-10">
               {submitted ? (
                  <div className="text-center py-12 flex flex-col items-center">
                     <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} />
                     </div>
                     <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">Richiesta ricevuta.</h3>
                     <p className="text-gray-600 leading-relaxed">Grazie Dottore. Un nostro specialista la contatterà nelle prossime 24 ore per l'attivazione della demo gratuita di 14 giorni.</p>
                  </div>
               ) : (
                  <>
                     <div className="flex items-center justify-center gap-2 text-brand-600 mb-4">
                        <ShieldCheck size={20} />
                        <span className="text-sm font-bold uppercase tracking-widest">Test Gratuito</span>
                     </div>
                     <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2 text-center">Inizia la prova gratuita di 14 giorni</h2>
                     <p className="text-gray-500 text-sm text-center mb-8">Nessun impegno. Nessuna carta di credito richiesta.</p>
                     
                     <form onSubmit={(e) => { e.preventDefault(); posthog.capture("lp_ginecologia_demo_requested"); setSubmitted(true); }} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                           <label className="text-sm font-medium text-gray-700">Nome e Cognome *</label>
                           <input type="text" required className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all text-sm" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                           <label className="text-sm font-medium text-gray-700">Email Professionale *</label>
                           <input type="email" required className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all text-sm" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                           <label className="text-sm font-medium text-gray-700">Numero di Telefono Cellulare *</label>
                           <input type="tel" required className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all text-sm" />
                        </div>
                        <button type="submit" className="bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all mt-4 shadow-md hover:shadow-lg text-lg">
                           Richiedi Accesso Immediato
                        </button>
                        <p className="text-xs text-center text-gray-400 mt-2">
                           Cliccando, accetti la nostra Privacy Policy in conformità al GDPR per il trattamento dei dati personali.
                        </p>
                     </form>
                  </>
               )}
            </div>
         </div>

      </main>
    </div>
  );
}
