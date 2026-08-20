"use client";

import { Apple, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { useState, useEffect } from "react";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const MS_STORE_URL = "https://apps.microsoft.com/store/detail/9P24WMFJW58N";

const requisiti = [
  {
    voce: "Sistema operativo",
    valore: "Windows 10 o Windows 11 (64 bit)",
  },
  {
    voce: "Spazio su disco",
    valore:
      "Circa 500 MB per l'applicazione, più lo spazio per il tuo archivio clinico",
  },
  {
    voce: "Connessione",
    valore:
      "Serve per scaricare e aggiornare l'app. Le visite si registrano anche offline: i dati sono sul computer",
  },
  {
    voce: "Mac e Linux",
    valore: "Non supportati al momento",
  },
];

const passaggi = [
  {
    titolo: "Scarica dal Microsoft Store",
    testo:
      "L'installazione passa dallo store ufficiale Microsoft, quindi il pacchetto è firmato e verificato e gli aggiornamenti arrivano in automatico. Non devi disattivare avvisi di sicurezza né scaricare eseguibili da fonti esterne.",
  },
  {
    titolo: "Apri Corioli e configura lo studio",
    testo:
      "Al primo avvio imposti i dati dello studio e l'intestazione che comparirà sui referti PDF. È il passaggio che rende i documenti pronti all'uso fin dalla prima visita.",
  },
  {
    titolo: "Scegli dove salvare l'archivio",
    testo:
      "I dati clinici restano sul computer dello studio o sulla rete locale: decidi tu la cartella. È anche il momento giusto per impostare il backup, perché con l'archiviazione locale è una responsabilità tua.",
  },
];

const downloadFaqs = [
  {
    question: "Corioli è disponibile per Mac?",
    answer:
      "Non ancora. Oggi Corioli è un'applicazione desktop per Windows 10 e Windows 11 a 64 bit. Se lavori su Mac, al momento non c'è una versione utilizzabile: preferiamo dirlo chiaramente piuttosto che farti installare qualcosa che non funziona.",
  },
  {
    question: "La prova di 90 giorni richiede la carta di credito?",
    answer:
      "No. Scarichi l'applicazione e la usi per 90 giorni senza inserire dati di pagamento, senza costi di attivazione e senza vincoli contrattuali. Alla fine del periodo decidi se attivare un piano: se non lo fai, non ti viene addebitato nulla.",
  },
  {
    question: "Serve una connessione a internet per usarlo?",
    answer:
      "Serve per scaricare l'applicazione e per riceverne gli aggiornamenti. Il lavoro clinico quotidiano invece non dipende dalla connessione: i dati sono salvati sul computer dello studio, quindi puoi registrare visite e generare referti anche se la linea non funziona.",
  },
  {
    question: "Dove finiscono i dati delle pazienti dopo l'installazione?",
    answer:
      "Sul computer su cui installi Corioli, o sulla rete locale dello studio se scegli quel percorso. Le cartelle cliniche non vengono trasmesse a server esterni e noi non vi accediamo in alcun modo. Il rovescio della medaglia è che backup e sicurezza del computer restano a carico tuo.",
  },
  {
    question: "Posso importare l'archivio che ho già?",
    answer:
      "Sì. Il servizio di migrazione dei dati storici costa 29€ una tantum e copre archivi Word, Excel e i formati esportabili dai gestionali più diffusi. Conviene farlo prima di iniziare, così lo storico delle pazienti è già dentro la cartella clinica dalla prima visita.",
  },
];

const downloadStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://corioli.it/download#faq",
  mainEntity: downloadFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function DownloadPage() {
  const [latestVersion, setLatestVersion] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/download/windows")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { version?: string } | null) => {
        if (data?.version) setLatestVersion(data.version);
      })
      .catch(() => {});
  }, []);

  const handleMsStoreClick = () => {
    posthog.capture("program_downloaded", { os: "windows", source: "ms_store" });
  };

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-gradient-to-b from-brand-50/40 to-background min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight px-2">
          Inizia la tua prova con <span className="text-brand-600">Corioli</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl px-4">
          Scarica l&apos;applicazione per il tuo sistema operativo e trasforma il modo in cui gestisci il tuo ambulatorio. Installazione rapida e sicura.
        </p>

        {/* ── Download buttons ── */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-16 w-full max-w-2xl justify-center z-20 px-4">
          {/* Microsoft Store */}
          <a
            href={MS_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMsStoreClick}
            className="flex-1 bg-brand-800 text-white px-6 py-4 rounded-xl font-bold hover:bg-brand-950 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group text-lg"
          >
            <Image src="/ms-store-badge.svg" alt="Microsoft" width={24} height={24} className="group-hover:scale-110 transition-transform" />
            Scarica per Windows
          </a>

          {/* Mac – coming soon */}
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

        {/* Microsoft Store trust signal */}
        <div className="flex items-center justify-center gap-2.5 mb-16 text-sm text-gray-400 font-medium">
          <Image src="/ms-store-badge.svg" alt="" width={16} height={16} className="opacity-60" />
          <span>Disponibile su <a href={MS_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-600 transition-colors">Microsoft Store</a> · Installazione sicura e verificata</span>
        </div>
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

        {/* ── Requisiti di sistema ── */}
        <section className="w-full max-w-3xl mt-24 text-left">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Requisiti di sistema
          </h2>
          <dl className="bg-white border border-gray-100 shadow-soft rounded-2xl divide-y divide-gray-100 overflow-hidden">
            {requisiti.map((item) => (
              <div
                key={item.voce}
                className="flex flex-col sm:flex-row gap-1 sm:gap-6 px-6 py-5"
              >
                <dt className="font-semibold text-gray-900 sm:w-52 shrink-0">
                  {item.voce}
                </dt>
                <dd className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.valore}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Come installare ── */}
        <section className="w-full max-w-3xl mt-20 text-left">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Come installare Corioli in tre passaggi
          </h2>
          <ol className="flex flex-col gap-5 list-none p-0 m-0">
            {passaggi.map((passo, i) => (
              <li
                key={passo.titolo}
                className="flex gap-5 bg-white border border-gray-100 shadow-soft rounded-2xl p-6"
              >
                <span className="shrink-0 w-9 h-9 rounded-xl bg-brand-50 text-brand-700 font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                    {passo.titolo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {passo.testo}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── FAQ ── */}
        <section className="w-full max-w-3xl mt-20 text-left">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(downloadStructuredData).replace(/</g, "\\u003c"),
            }}
          />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Domande frequenti sul download
          </h2>
          <dl className="flex flex-col gap-4">
            {downloadFaqs.map((item) => (
              <div
                key={item.question}
                className="bg-white border border-gray-100 shadow-soft rounded-2xl p-6"
              >
                <dt className="font-heading font-bold text-lg text-gray-900 mb-2">
                  {item.question}
                </dt>
                <dd className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Link correlati ── */}
        <nav
          aria-label="Link correlati"
          className="w-full max-w-3xl mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500"
        >
          <Link href="/funzionalita" className="hover:text-brand-600 transition-colors">
            Tutte le funzionalità
          </Link>
          <Link href="/ginecologia" className="hover:text-brand-600 transition-colors">
            Gestionale per ginecologi
          </Link>
          <Link href="/prezzi" className="hover:text-brand-600 transition-colors">
            Prezzi e piani
          </Link>
          <Link href="/gdpr" className="hover:text-brand-600 transition-colors">
            Sicurezza e GDPR
          </Link>
          <Link href="/blog/backup-studio-medico-regola-3-2-1" className="hover:text-brand-600 transition-colors">
            Come impostare il backup
          </Link>
        </nav>

      </div>
    </div>
  );
}

