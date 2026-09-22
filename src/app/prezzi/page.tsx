"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Check,
  FileCheck,
  FileText,
  FolderInput,
  MessageCircle,
  PenLine,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import posthog from "posthog-js";
import { PRICE_MONTHLY, TRIAL_DAYS, pricingFaqs } from "./faqs";

const included = [
  {
    icon: FileText,
    title: "Cartella clinica illimitata",
    text: "Pazienti, visite e anamnesi senza limiti di numero.",
  },
  {
    icon: Calculator,
    title: "Calcolatori clinici avanzati",
    text: "Hadlock, percentili fetali, curve di crescita, indici cardiologici.",
  },
  {
    icon: FileCheck,
    title: "Referti PDF personalizzabili",
    text: "Modelli riutilizzabili, pronti da stampare o consegnare.",
  },
  {
    icon: Stethoscope,
    title: "Tutte le edizioni specialistiche",
    text: "Ginecologia e ostetricia, cardiologia: stesso prezzo.",
  },
  {
    icon: PenLine,
    title: "Ricette, certificati, richieste",
    text: "In PDF dai tuoi modelli, con firma e timbro dello studio.",
  },
  {
    icon: RefreshCw,
    title: "Aggiornamenti inclusi",
    text: "Ogni nuova versione arriva senza costi aggiuntivi.",
  },
  {
    icon: ShieldCheck,
    title: "Dati salvati nel tuo studio",
    text: "In locale, con blocco tramite PIN, Windows Hello o Touch ID.",
  },
  {
    icon: MessageCircle,
    title: "Supporto in italiano",
    text: "Via chat ed email, dal team che sviluppa Corioli.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-40 md:pt-48 pb-24 bg-background">

      <div className="text-center mb-16 max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Un prezzo solo. <br className="md:hidden" />Tutto incluso.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {PRICE_MONTHLY}€ al mese per tutto Corioli: niente moduli a pagamento,
          niente piani da confrontare, niente extra che scopri dopo. Lo provi
          gratis per {TRIAL_DAYS} giorni nel tuo ambulatorio reale.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
          <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-brand-600" /> {TRIAL_DAYS} giorni gratis</span>
          <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-brand-600" /> Nessuna carta di credito</span>
          <span className="inline-flex items-center gap-1.5"><Check size={16} className="text-brand-600" /> Disdici quando vuoi</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Piano unico */}
        <div className="lg:col-span-5 bg-white rounded-3xl shadow-card border-2 border-brand-200 p-8 md:p-10 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-0"></div>

          <div className="relative z-10 flex flex-col flex-1">
            <span className="inline-flex w-fit items-center bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              Tutto incluso
            </span>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Abbonamento Corioli</h2>
            <p className="text-gray-500 text-sm mb-8">Tutto il software, per un solo prezzo.</p>

            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-7xl font-heading font-bold text-gray-900 tracking-tight">{PRICE_MONTHLY}€</span>
              <span className="text-gray-500 font-medium">/ mese</span>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              Senza vincoli: disdici quando vuoi.
            </p>

            <Link
              href="/download"
              className="block w-full bg-brand-600 text-white text-center py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors mb-3 shadow-soft hover:shadow-md"
              onClick={() => posthog.capture("pricing_cta_clicked", { price: PRICE_MONTHLY })}
            >
              Inizia la prova gratuita di {TRIAL_DAYS} giorni
            </Link>
            <p className="text-xs text-gray-400 text-center">
              Senza carta di credito &middot; Nessun addebito automatico
            </p>

            <div className="mt-auto pt-8">
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Meno di una singola visita al mese, per lo strumento che usi
                tutto il giorno.
              </p>
              <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">18.000+ pazienti gestiti</strong> &middot; Validato
                in una clinica con 10 specialisti &middot; Sviluppato in Italia
                con i medici
              </div>
            </div>
          </div>
        </div>

        {/* Cosa include */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-soft border border-gray-100 p-8 md:p-10">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">Cosa include</h2>
          <p className="text-sm text-gray-500 mb-8">
            Tutto, dal primo giorno di prova. Nessuna funzione si sblocca pagando di più.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            {included.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">{title}</h3>
                  <p className="text-sm text-gray-500 leading-snug">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Migrazione dati: l'unico servizio fuori abbonamento */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-soft p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <span className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 text-gray-700 flex items-center justify-center shrink-0">
            <FolderInput size={22} />
          </span>
          <div className="flex-1">
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-2 flex items-center gap-3 flex-wrap">
              Migrazione dei dati storici
              <span className="bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide">
                Su preventivo
              </span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Importiamo il tuo archivio da Word, Excel, carta o dal vecchio
              gestionale, così non riparti da zero. Il costo dipende dal formato
              e dalla dimensione dell&apos;archivio: raccontaci come è organizzato
              e ti mandiamo un preventivo senza impegno.
            </p>
          </div>
          <Link
            href="/contatti?richiesta=migrazione"
            className="inline-flex items-center justify-center gap-2 border border-brand-200 text-brand-700 bg-brand-50 px-6 py-3.5 rounded-xl font-bold hover:bg-brand-100 hover:border-brand-300 transition-colors whitespace-nowrap"
            onClick={() => posthog.capture("pricing_migration_quote_clicked")}
          >
            Richiedi un preventivo <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mt-24">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Domande frequenti sui prezzi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
          {pricingFaqs.map((faq, i) => (
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
              {TRIAL_DAYS} giorni di prova completa, senza carta di credito. Poi{" "}
              {PRICE_MONTHLY}€ al mese, tutto incluso. Oppure guardalo prima in
              azione con una demo di 15 minuti.
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
