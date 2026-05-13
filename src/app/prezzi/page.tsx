"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Info } from "lucide-react";
import clsx from "clsx";
import posthog from "posthog-js";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="pt-32 pb-24 bg-background">
      
      <div className="text-center mb-20 max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Piani chiari. <br className="md:hidden"/>Nessuna sorpresa.</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Inizia con il piano base completo e aggiungi solo i moduli extra quando ne hai realmente bisogno.
        </p>
      </div>

      <div className="flex justify-center mb-16 px-6">
        <div className="bg-gray-100 p-1 rounded-xl flex items-center border border-gray-200 w-full max-w-xs sm:w-auto">
          <button
            className={clsx("flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg text-sm font-medium transition-colors text-center", !annual ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900")}
            onClick={() => { setAnnual(false); posthog.capture("pricing_billing_toggled", { billing_period: "mensile" }); }}
          >
            Mensile
          </button>
          <button
            className={clsx("flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2", annual ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900")}
            onClick={() => { setAnnual(true); posthog.capture("pricing_billing_toggled", { billing_period: "annuale" }); }}
          >
            Annuale <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full text-xs font-bold">-20%</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Plan */}
        <div className="lg:col-span-5 bg-white rounded-3xl shadow-card border border-gray-100 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-0"></div>
          
          <div className="relative z-10">
             <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Piano Specialista</h2>
             <p className="text-gray-500 text-sm mb-8">La gestione clinica senza compromessi.</p>
             
             <div className="mb-8 flex items-baseline gap-2">
               <span className="text-6xl font-heading font-bold text-gray-900">{annual ? "15" : "19"}€</span>
               <span className="text-gray-500 font-medium">/ mese</span>
             </div>

             <Link
               href="/contatti"
               className="block w-full bg-brand-600 text-white text-center py-4 rounded-xl font-medium hover:bg-brand-700 transition-colors mb-10 shadow-soft hover:shadow-md"
               onClick={() => posthog.capture("pricing_cta_clicked", { billing_period: annual ? "annuale" : "mensile", price: annual ? 15 : 19 })}
             >
               Inizia la prova gratuita di 90 giorni
             </Link>

             <ul className="flex flex-col gap-4 text-sm text-gray-700">
               {[
                 { text: "Cartella clinica elettronica illimitata" },
                 { text: "Anagrafica pazienti cloud sicura" },
                 { text: "Refertazione in formato PDF" },
                 { text: "Calcolatori avanzati: 90 giorni inclusi" },
                 { text: "Supporto prioritario via chat/email" },
                 { text: "Backup giornaliero georeplicato" },
                 { text: "Conformità privacy e GDPR completa" },
               ].map((feature, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <Check size={18} className="text-brand-500 shrink-0 mt-0.5" />
                   <span className="font-medium">{feature.text}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Add-ons */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 pl-2">Moduli Opzionali</h3>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-brand-200 transition-colors">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2">Calcolatori Clinici Avanzati <Info size={16} className="text-gray-400" /></h4>
              <p className="text-sm text-gray-500">Percentili, stime, curve di crescita (Hadlock, WHO).</p>
            </div>
            <div className="text-brand-700 font-medium whitespace-nowrap bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-100 text-sm text-center">
               15€/mese
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-brand-200 transition-colors">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Multi-utente (Team)</h4>
              <p className="text-sm text-gray-500">Aggiungi collaboratore o segreteria con permessi dedicati.</p>
            </div>
            <div className="text-brand-700 font-medium whitespace-nowrap bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-100 text-sm text-center">
               +15€/mese per utente
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-brand-200 transition-colors">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Migrazione Dati Storici</h4>
              <p className="text-sm text-gray-500">Importiamo il tuo archivio da Word/Excel nel nuovo sistema.</p>
            </div>
            <div className="text-gray-700 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-center">
               29€ una tantum
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-brand-200 transition-colors">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Template PDF Su Misura</h4>
              <p className="text-sm text-gray-500">Personalizzazione avanzata del layout di stampa referti.</p>
            </div>
            <div className="text-gray-700 font-medium whitespace-nowrap bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-center">
               19€ una tantum
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
