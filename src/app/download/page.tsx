"use client";

import { Apple, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { useState, useEffect } from "react";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FaqList from "@/components/FaqList";

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
    voce: "Mac",
    valore:
      "macOS 10.13 o superiore. La versione per Mac non passa dal Mac App Store: la installiamo insieme in una breve call",
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
      "Sì, su richiesta. Su Windows l'installazione passa dal Microsoft Store ed è completamente autonoma; su Mac no, quindi preferiamo seguirti invece di lasciarti un file e basta. Scrivici dalla pagina contatti e fissiamo una breve call: installiamo l'applicazione insieme e da lì in poi lavori normalmente. Requisito: macOS 10.13 o superiore.",
  },
  {
    question: "La prova di 30 giorni richiede la carta di credito?",
    answer:
      "No. Scarichi l'applicazione e la usi per 30 giorni senza inserire dati di pagamento, senza costi di attivazione e senza vincoli contrattuali. Alla fine del periodo decidi se attivare un piano: se non lo fai, non ti viene addebitato nulla.",
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
      "Sì. La migrazione dei dati storici è un servizio su preventivo, calcolato in base al formato e alla dimensione dell'archivio, e copre Word, Excel e i formati esportabili dai gestionali più diffusi. Conviene farlo prima di iniziare, così lo storico delle pazienti è già dentro la cartella clinica dalla prima visita.",
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

  // Su Mac non c'e un download diretto: l'evento traccia la richiesta di
  // installazione assistita, non un'installazione avvenuta.
  const handleMacRequestClick = () => {
    posthog.capture("mac_install_requested", { os: "macos", source: "download_page" });
  };

  return (
    <div className="pt-40 md:pt-48 pb-24 bg-gradient-to-b from-brand-50/40 to-background min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight px-2">
          Inizia la tua prova con <span className="text-brand-600">Corioli</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl px-4">
          Su Windows scarichi e installi in autonomia dal Microsoft Store. Su Mac ti seguiamo noi: una breve call e sei operativo, con gli stessi 30 giorni di prova.
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

          {/* Mac – installazione assistita. Non e un download diretto: su Mac
              seguiamo il primo avvio in call invece di lasciare un file. */}
          <div className="flex-1 relative">
            <Link
              href="/contatti"
              onClick={handleMacRequestClick}
              className="w-full h-full bg-white text-brand-800 border-2 border-brand-100 px-6 py-4 rounded-xl font-bold transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand-300 flex items-center justify-center gap-3 group text-lg"
            >
              <Apple size={24} className="group-hover:scale-110 transition-transform" />
              Richiedi per Mac
            </Link>
            <div className="absolute -top-3 -right-2 sm:-right-4 bg-brand-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md border border-brand-600">
              Installazione assistita
            </div>
          </div>
        </div>

        {/* Nota per i due sistemi: il segnale di fiducia dello store vale solo
            per Windows, quindi la riga Mac dice cosa succede davvero. */}
        <div className="flex flex-col items-center gap-2.5 mb-16 text-sm text-gray-400 font-medium">
          <div className="flex items-center justify-center gap-2.5">
            <Image src="/ms-store-badge.svg" alt="" width={16} height={16} className="opacity-60" />
            <span>Windows: disponibile su <a href={MS_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-600 transition-colors">Microsoft Store</a> · Installazione sicura e verificata</span>
          </div>
          <div className="flex items-start justify-center gap-2.5 text-center px-4">
            <Apple size={15} className="opacity-60 shrink-0 mt-[3px]" />
            <span>Mac: la configuriamo insieme in una breve call, così parti già impostato · <Link href="/contatti" className="text-gray-500 hover:text-brand-600 transition-colors">prenota l&apos;installazione</Link></span>
          </div>
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
              <span className="font-semibold text-base sm:text-lg">30 giorni di prova</span>
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
            Come installare Corioli su Windows in tre passaggi
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

          {/* ── E su Mac ── */}
          <div className="mt-8 bg-brand-50/60 border border-brand-100 rounded-2xl p-6 md:p-8">
            <div className="flex gap-5">
              <span className="shrink-0 w-9 h-9 rounded-xl bg-white text-brand-700 flex items-center justify-center border border-brand-100">
                <Apple size={18} />
              </span>
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                  E su Mac?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                  La versione per macOS c&apos;è, ma non passa dal Mac App Store
                  come quella per Windows passa dal Microsoft Store. Per questo
                  non la lasciamo come file da scaricare e arrangiarsi:
                  fissiamo una breve call con un nostro operatore e installiamo
                  l&apos;applicazione insieme. Alla fine della chiamata sei
                  operativo, con gli stessi 30 giorni di prova. Serve macOS 10.13
                  o superiore.
                </p>
                <Link
                  href="/contatti"
                  onClick={handleMacRequestClick}
                  className="inline-flex items-center gap-2 bg-brand-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-800 transition-colors"
                >
                  Prenota l&apos;installazione su Mac
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="w-full max-w-6xl mt-20 text-left">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(downloadStructuredData).replace(/</g, "\\u003c"),
            }}
          />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Domande frequenti sul download
          </h2>
          <FaqList items={downloadFaqs} />
        </section>

        {/* ── Link correlati ── */}
        <nav
          aria-label="Link correlati"
          className="w-full max-w-3xl mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500"
        >
          <Link href="/funzionalita" className="inline-block py-1 hover:text-brand-600 transition-colors">
            Tutte le funzionalità
          </Link>
          <Link href="/ginecologia" className="inline-block py-1 hover:text-brand-600 transition-colors">
            Gestionale per ginecologi
          </Link>
          <Link href="/cardiologia" className="inline-block py-1 hover:text-brand-600 transition-colors">
            Gestionale per cardiologi
          </Link>
          <Link href="/prezzi" className="inline-block py-1 hover:text-brand-600 transition-colors">
            Prezzi e piani
          </Link>
          <Link href="/gdpr" className="inline-block py-1 hover:text-brand-600 transition-colors">
            Sicurezza e GDPR
          </Link>
          <Link href="/blog/backup-studio-medico-regola-3-2-1" className="inline-block py-1 hover:text-brand-600 transition-colors">
            Come impostare il backup
          </Link>
        </nav>

      </div>
    </div>
  );
}

