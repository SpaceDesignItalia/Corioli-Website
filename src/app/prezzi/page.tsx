"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import clsx from "clsx";
import posthog from "posthog-js";

const faqs = [
  {
    q: "La prova gratuita richiede la carta di credito?",
    a: "No. Attivi i 90 giorni di prova senza inserire alcun metodo di pagamento: al termine decidi liberamente se abbonarti.",
  },
  {
    q: "Cosa succede alla fine dei 90 giorni?",
    a: "Nessun addebito automatico: non avendo la tua carta, non possiamo addebitarti nulla. Se Corioli ti ha convinto, scegli il piano mensile o annuale. I dati inseriti durante la prova restano tuoi, salvati sul tuo computer.",
  },
  {
    q: "I calcolatori clinici avanzati sono inclusi?",
    a: "Sono inclusi per tutti i 90 giorni di prova, così li testi nel tuo flusso reale. Dopo, restano disponibili come modulo opzionale a 15€/mese: lo aggiungi solo se ti serve davvero.",
  },
  {
    q: "Posso disdire quando voglio?",
    a: "Sì. Non ci sono vincoli contrattuali né costi di attivazione: il piano mensile si disdice in qualsiasi momento, quello annuale semplicemente non si rinnova.",
  },
  {
    q: "Dove vengono salvati i dati dei miei pazienti?",
    a: "In locale, sul computer o sulla rete del tuo studio. Corioli non raccoglie né trasmette i dati clinici dei tuoi pazienti: ne mantieni il pieno controllo, in linea con il GDPR.",
  },
  {
    q: "Posso importare i dati dal mio archivio attuale?",
    a: "Sì. Con il servizio di migrazione dati storici (29€ una tantum) importiamo il tuo archivio da Word, Excel, carta o altri gestionali, così non riparti da zero.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-background">

      <div className="text-center mb-12 max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Piani chiari. <br className="md:hidden"/>Nessuna sorpresa.</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un solo piano completo, da provare per 90 giorni nel tuo ambulatorio
          reale. I moduli extra si aggiungono solo se ti servono.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
          <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-brand-600" /> 90 giorni gratis</span>
          <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-brand-600" /> Nessuna carta di credito</span>
          <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-brand-600" /> Disdici quando vuoi</span>
        </div>
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

             <div className="mb-2 flex items-baseline gap-3">
               {annual && (
                 <span className="text-2xl font-heading font-bold text-gray-400 line-through">19€</span>
               )}
               <span className="text-6xl font-heading font-bold text-gray-900">{annual ? "15" : "19"}€</span>
               <span className="text-gray-500 font-medium">/ mese</span>
             </div>
             <p className="text-sm text-gray-500 mb-8">
               {annual
                 ? "Con fatturazione annuale (180€/anno): risparmi 48€ rispetto al mensile."
                 : "Con fatturazione mensile: nessun vincolo, disdici quando vuoi."}
             </p>

             <Link
               href="/download"
               className="block w-full bg-brand-600 text-white text-center py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors mb-3 shadow-soft hover:shadow-md"
               onClick={() => posthog.capture("pricing_cta_clicked", { billing_period: annual ? "annuale" : "mensile", price: annual ? 15 : 19 })}
             >
               Inizia la prova gratuita di 90 giorni
             </Link>
             <p className="text-xs text-gray-400 text-center mb-10">
               Senza carta di credito &middot; Nessun addebito automatico
             </p>

             <ul className="flex flex-col gap-4 text-sm text-gray-700">
               {[
                 { text: "Cartella clinica elettronica illimitata" },
                 { text: "Anagrafica pazienti illimitata" },
                 { text: "Refertazione in formato PDF" },
                 { text: "Calcolatori clinici avanzati inclusi nella prova" },
                 { text: "Dati salvati in locale, nel tuo studio" },
                 { text: "Conformità privacy e GDPR completa" },
                 { text: "Supporto prioritario in italiano via chat/email" },
               ].map((feature, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <Check size={18} className="text-brand-500 shrink-0 mt-0.5" />
                   <span className="font-medium">{feature.text}</span>
                 </li>
               ))}
             </ul>

             <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">
               <strong className="text-gray-700">18.000+ pazienti gestiti</strong> &middot; Validato
               in una clinica con 10 specialisti &middot; Sviluppato in Italia
               con i medici
             </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="pl-2 mb-2">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">Moduli Opzionali</h3>
            <p className="text-sm text-gray-500">Si attivano solo su tua richiesta: nessun costo nascosto.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-brand-100 shadow-soft flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-brand-200 transition-colors">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2 flex-wrap">
                Calcolatori Clinici Avanzati
                <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide">Incluso nella prova</span>
              </h4>
              <p className="text-sm text-gray-500">Percentili, stime, curve di crescita (Hadlock, OMS). Gratis per i 90 giorni di prova.</p>
            </div>
            <div className="text-brand-700 font-medium whitespace-nowrap bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-100 text-sm text-center">
               poi 15€/mese
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
              <p className="text-sm text-gray-500">Importiamo il tuo archivio da Word, Excel o dal vecchio gestionale: non riparti da zero.</p>
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

          <p className="text-sm text-gray-500 pl-2 mt-2 leading-relaxed">
            Per fare due conti: il piano annuale con i calcolatori attivi costa
            30€ al mese — meno di una singola visita, per uno strumento che usi
            tutto il giorno.
          </p>
        </div>

      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 mt-24">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Domande frequenti sui prezzi
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 shadow-soft px-6 py-5 open:shadow-card transition-shadow"
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  posthog.capture("pricing_faq_opened", { question: faq.q });
                }
              }}
            >
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-4">
                {faq.q}
                <span className="text-brand-600 shrink-0 transition-transform group-open:rotate-90">
                  <ArrowRight size={18} />
                </span>
              </summary>
              <p className="text-gray-600 leading-relaxed mt-3 text-sm md:text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mt-24">
        <div className="bg-brand-900 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Provalo nel tuo studio, senza rischi.
            </h2>
            <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
              90 giorni di prova completa, senza carta di credito. Oppure
              guardalo prima in azione con una demo di 15 minuti.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/download"
                className="bg-white text-brand-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg"
                onClick={() => posthog.capture("pricing_final_cta_clicked", { cta: "download" })}
              >
                Inizia la prova gratuita
              </Link>
              <Link
                href="/contatti"
                className="border border-brand-400 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors"
                onClick={() => posthog.capture("pricing_final_cta_clicked", { cta: "demo" })}
              >
                Prenota una demo di 15 minuti
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
