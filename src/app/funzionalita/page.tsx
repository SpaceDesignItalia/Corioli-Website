import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Baby,
  Bold,
  Building2,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  DatabaseBackup,
  FileStack,
  FileText,
  FlaskConical,
  HardDrive,
  HeartPulse,
  History,
  KeyRound,
  Laptop,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sigma,
  SlidersHorizontal,
  Users,
  WifiOff,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FeaturesCta from "@/components/FeaturesCta";
import FaqList from "@/components/FaqList";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import {
  SITE_URL,
  STATIC_PAGES_UPDATED,
  breadcrumbList,
  jsonLdProps,
  pageOpenGraph,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Funzionalità gestionale medico",
  description:
    "Anamnesi strutturata, calcolatori ostetrici, moduli cardiologici (ECG, ecocardiogramma, TC coronarica, Holter), referti PDF e dati salvati nel tuo studio.",
  alternates: {
    canonical: "/funzionalita",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Funzionalità Corioli | Gestionale medico per specialisti",
    description:
      "Ginecologia e ostetricia, cardiologia, referti PDF e archivio locale protetto: cosa fa Corioli, e cosa non fa ancora.",
    url: "https://corioli.it/funzionalita",
  },
};

// Ogni claim di questa pagina è verificato sul codice delle app: repo Corioli
// per ginecologia e ostetricia, CorioliGenerale (README) per la cardiologia.
// Prima di aggiungerne uno, controllare che esista davvero: la pagina
// precedente citava un autocompletamento ICD-9/10 che il software non ha.

const sections = [
  { id: "visita", label: "Visita e anamnesi" },
  { id: "ginecologia", label: "Ginecologia" },
  { id: "cardiologia", label: "Cardiologia" },
  { id: "referti", label: "Referti PDF" },
  { id: "archivio", label: "Pazienti e archivio" },
  { id: "sicurezza", label: "Sicurezza" },
];

const visitSteps = [
  {
    icon: ClipboardList,
    title: "Anamnesi",
    text: "Per sezioni o in un campo unico, come preferisci. Le parti ricorrenti arrivano dai tuoi modelli di testo.",
  },
  {
    icon: Ruler,
    title: "Misure",
    text: "Biometria fetale, ECG, ecocardiogramma, pressione: campi numerici, non testo libero da rileggere.",
  },
  {
    icon: Activity,
    title: "Calcoli",
    text: "Percentili fetali, peso stimato, QTc, eGFR, LDL, CHA2DS2-VASc: compaiono mentre compili.",
  },
  {
    icon: FileText,
    title: "Referto",
    text: "Il PDF si compone dai dati della visita: tabelle per le misure, le tue parole per le conclusioni.",
  },
];

type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  bullets: string[];
  note?: React.ReactNode;
  screenshot: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const visita: Feature = {
  id: "visita",
  icon: ClipboardList,
  title: "Cartella clinica e anamnesi strutturata",
  intro:
    "Ogni specialità ha le sue visite: ginecologica, ginecologica pediatrica e ostetrica in Corioli, una visita cardiologica con moduli da accendere quando servono in Corioli Cardiologia. L'anamnesi la imposti tu.",
  bullets: [
    "Sezioni familiare, fisiologica, patologica, farmacologica, allergica e altre per specialità: rinominabili, riordinabili, e puoi aggiungerne di tue",
    "Modelli di testo per anamnesi, esame obiettivo, referti strumentali e conclusioni, inseriti con un clic dal pulsante «Modello»",
    "Immagini allegate alla visita: ecografie, tracciati ECG, strisce Holter",
    "Cronologia delle modifiche: ogni correzione a una visita viene registrata con data, campo e valore precedente, e non si cancella",
  ],
  screenshot: {
    src: "/screenshots/funzionalita-visita.png",
    alt: "Visita ginecologica in Corioli: schede per i tipi di visita, anamnesi e referto medico con i pulsanti per inserire i modelli di testo",
    width: 1245,
    height: 850,
  },
};

const ginecologia: Feature = {
  id: "ginecologia",
  icon: Baby,
  title: "Ginecologia e ostetricia: i calcoli dentro la visita",
  intro:
    "Niente calcolatrici sul telefono né app a parte: le misure che inserisci diventano subito percentili, con una barra che mostra dove cade il valore.",
  bullets: [
    "Settimane di gestazione e data presunta del parto dall'ultima mestruazione, riallineate sul CRL se non concordano",
    "Biometria fetale (DBP, CC, CA, FL) con i percentili di Hadlock",
    "Peso fetale stimato con la formula Hadlock che preferisci (I–IV), centile e grafico di crescita",
    "Flussimetria dell'arteria ombelicale: PI e IR con il percentile per epoca gestazionale",
    "Storia ostetrica, gravidanze in corso e concluse, stadio di Tanner nella visita pediatrica",
    "BMI con fascia OMS, anche pre-gravidanza, aumento di peso in gravidanza e HOMA-IR",
  ],
  note: (
    <p className="mt-8 text-sm text-gray-500 leading-relaxed border-l-2 border-brand-200 pl-4">
      Le curve di riferimento sono quelle pubblicate: Hadlock per biometria e
      peso, Fetal Medicine Foundation per il PI ombelicale, OMS per le fasce di
      BMI.
    </p>
  ),
  screenshot: {
    src: "/screenshots/funzionalita-calcolatori.png",
    alt: "Visita ostetrica in Corioli: biometria fetale con i percentili di ogni misura, peso fetale stimato con Hadlock IV e flussimetria del cordone ombelicale",
    width: 860,
    height: 485,
  },
};

const referti: Feature = {
  id: "referti",
  icon: FileText,
  title: "Referti e documenti PDF",
  intro:
    "Il referto si compone dai dati della visita: niente ricopiature tra la cartella e il documento che consegni.",
  bullets: [
    "Referto ginecologico, ostetrico o cardiologico, con le immagini della visita",
    "Ricetta, certificato e richiesta di esame, con firma e timbro dello studio",
    "Carta intestata con i dati dello studio e i recapiti che scegli di mostrare",
    "Modelli per ogni sezione e ogni esame, tutti modificabili dalle impostazioni",
  ],
  screenshot: {
    src: "/screenshots/funzionalita-modelli.png",
    alt: "Gestione dei modelli di referto in Corioli, divisi fra ginecologia, ostetricia, terapie, esami e certificati",
    width: 1245,
    height: 760,
  },
};

const archivio: Feature = {
  id: "archivio",
  icon: Users,
  title: "Pazienti e archivio",
  intro:
    "La scheda paziente mette insieme tutto: visite in ordine cronologico, esami, certificati e file allegati.",
  bullets: [
    "Scheda con allergie in evidenza, note e storico delle visite",
    "File del paziente: carichi PDF e immagini, come esami esterni o consensi firmati",
    "Controllo del codice fiscale e ricerca dei pazienti doppioni, da unire con un clic",
    "Import da CSV di pazienti e appuntamenti, compreso l'elenco pazienti di Doctolib",
  ],
  note: (
    <p className="mt-8 text-sm text-gray-500 leading-relaxed">
      Archivio in Word, Excel o su carta?{" "}
      <Link
        href="/contatti?richiesta=migrazione"
        className="text-brand-600 font-medium hover:text-brand-700 underline underline-offset-2 decoration-brand-300"
      >
        La migrazione la facciamo noi, su preventivo
      </Link>
      .
    </p>
  ),
  screenshot: {
    src: "/screenshots/funzionalita-paziente.png",
    alt: "Scheda paziente di Corioli con dati anagrafici, allergie in evidenza, elenco delle visite, esami e certificati",
    width: 1880,
    height: 1100,
  },
};

// Cardiologia: dal README di CorioliGenerale. Il prontuario esiste ma resta
// spento finché il cardiologo non ne valida le schede, e SCORE2 è disattivato:
// nessuno dei due va presentato come funzione disponibile.
const cardioModules = [
  {
    icon: HeartPulse,
    title: "ECG e pressione arteriosa",
    text: "PR, QRS, QT e asse, con il QTc secondo Bazett. Pressione in clinostatismo e ortostatismo, con una seconda misurazione per l'ipotensione ortostatica.",
  },
  {
    icon: Activity,
    title: "Esami strumentali",
    text: "Ecocardiogramma color-Doppler transtoracico, TC coronarica (calcium score, CAD-RADS, burden di placca), test ergometrico, Holter ECG e pressorio, Doppler dei tronchi sovraaortici.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorio ragionato",
    text: "Burden aterogeno con ApoB, Lp(a) e stenosi carotidea; profilo infiammatorio con hs-PCR e fibrinogeno; HOMA-IR; eGFR con CKD-EPI 2021; LDL secondo Friedewald quando manca il dosaggio.",
  },
  {
    icon: ClipboardCheck,
    title: "Inquadramento clinico",
    text: "Scompenso con frazione di eiezione, classe NYHA e NT-proBNP; fibrillazione atriale con CHA2DS2-VASc e HAS-BLED; classe di rischio decisa dal medico, con l'obiettivo lipidico che ne discende.",
  },
  {
    icon: History,
    title: "Controlli più rapidi",
    text: "Terapia in atto e fattori di rischio arrivano dall'ultima visita: correggi solo quello che è cambiato.",
  },
  {
    icon: Users,
    title: "Gruppi di ricerca",
    text: "Arruoli i pazienti in un progetto con la data di inclusione e li ritrovi tutti insieme.",
  },
];

const cardioPrinciples = [
  {
    icon: SlidersHorizontal,
    title: "Moduli che accendi tu",
    text: "La visita parte scarna, perché la maggior parte dei controlli si referta in poche righe. Ecocardiogramma, TC, Holter e gli altri si attivano uno per uno.",
  },
  {
    icon: Sigma,
    title: "Gli indici suggeriscono",
    text: "Ogni indice mostra la formula da cui viene e non entra mai da solo nel referto. SCORE2 è implementato ma resta spento finché i coefficienti non sono verificati sulla fonte primaria.",
  },
  {
    icon: Bold,
    title: "Il grassetto vuol dire fuori norma",
    text: "Nel referto è in grassetto solo il valore fuori dai limiti, senza giudizi scritti accanto: chi lo legge vede subito dove guardare.",
  },
  {
    icon: FileStack,
    title: "Un referto che viaggia",
    text: "«Pagina 1 di 3», paziente e medico in testa a ogni pagina, tracciati ECG e Holter a tutta larghezza e numerati per citarli nel testo.",
  },
];

const securityCards = [
  {
    icon: HardDrive,
    title: "Archivio sul tuo computer",
    text: "Pazienti, visite e documenti restano sul disco dello studio. Non esiste una copia dei tuoi pazienti sui nostri server.",
  },
  {
    icon: KeyRound,
    title: "Blocco dell'applicazione",
    text: "PIN con codice di recupero, oppure Windows Hello e Touch ID.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup automatici",
    text: "Una copia al giorno e una prima di ogni importazione o ripristino, da ripristinare con un clic dalle impostazioni.",
  },
  {
    icon: ShieldCheck,
    title: "Salvataggi a prova di blackout",
    text: "Se il computer si spegne mentre salvi, l'archivio non si corrompe: Corioli riparte dall'ultima copia valida.",
  },
];

const extras = [
  {
    icon: WifiOff,
    title: "Funziona senza internet",
    text: "Visite, calcoli e referti non dipendono dalla linea dello studio.",
  },
  {
    icon: Laptop,
    title: "Windows e Mac",
    text: "Su Windows dal Microsoft Store, con aggiornamenti automatici. Su Mac lo installiamo con te in una breve call.",
  },
  {
    icon: Building2,
    title: "Più ambulatori",
    text: "Configuri le sedi in cui lavori, con i loro recapiti, e scegli quella in uso.",
  },
  {
    icon: MessageCircle,
    title: "Assistenza dall'app",
    text: "Scrivi al team che sviluppa Corioli direttamente dalla chat integrata, in italiano.",
  },
];

const notYet = [
  {
    title: "Agenda e fatturazione elettronica",
    text: "Sono in sviluppo. Oggi Corioli copre la parte clinica, e per l'amministrazione serve ancora uno strumento a parte.",
  },
  {
    title: "Sincronizzazione fra computer",
    text: "L'archivio vive su un computer: non c'è una copia che si aggiorna da sola su altri dispositivi.",
  },
  {
    title: "Invio al Sistema Tessera Sanitaria",
    text: "Resta un adempimento fiscale da gestire con il tuo commercialista o con il software di fatturazione.",
  },
  {
    title: "Diagnosi",
    text: "Corioli non è un dispositivo medico certificato: i calcoli supportano il medico e non sostituiscono la valutazione clinica.",
  },
];

const faqs = [
  {
    question: "Corioli funziona senza internet?",
    answer:
      "Sì, per il lavoro clinico: visite, calcoli e referti funzionano sul computer dello studio anche se la linea non c'è. La connessione serve per scaricare l'applicazione, riceverne gli aggiornamenti e usare la chat di assistenza.",
  },
  {
    question: "Posso personalizzare l'anamnesi e i referti?",
    answer:
      "Sì. Per ogni tipo di visita scegli se usare un campo unico o le sezioni, quali sezioni tenere, in che ordine e con che nome. I modelli di testo per anamnesi, esame obiettivo, esami strumentali, conclusioni e certificati si creano e si modificano dalle impostazioni.",
  },
  {
    question: "Su quali riferimenti si basano i calcolatori ostetrici?",
    answer:
      "Biometria fetale e peso stimato seguono Hadlock, e la formula del peso (Hadlock I, II, III o IV) si sceglie nelle impostazioni. Il PI dell'arteria ombelicale è confrontato con le curve della Fetal Medicine Foundation, il BMI con le fasce OMS. I calcoli supportano il medico e non sostituiscono la valutazione clinica.",
  },
  {
    question: "Cosa comprende Corioli Cardiologia?",
    answer:
      "Una visita cardiologica con elettrocardiogramma, pressione arteriosa, esame obiettivo ed esami di laboratorio, più moduli da accendere quando servono: ecocardiogramma, TC coronarica, test ergometrico, Holter ECG e pressorio, Doppler dei tronchi sovraaortici, scompenso e fibrillazione atriale. Calcola QTc, eGFR, LDL, HOMA-IR, CHA2DS2-VASc e HAS-BLED, sempre con la formula in chiaro e senza scriverli da solo nel referto.",
  },
  {
    question: "Quando esce la cardiologia, e quanto costa?",
    answer:
      "Esce a ottobre 2026 e costa come Corioli: 30€ al mese, tutto incluso, con 30 giorni di prova gratuita. Ginecologia e cardiologia sono due applicazioni con archivi separati, che possono convivere sullo stesso computer senza interferire.",
  },
  {
    question: "Cosa succede se il computer si rompe?",
    answer:
      "Le copie automatiche stanno sullo stesso disco dell'applicazione, quindi da un guasto del computer ti protegge solo l'export dell'archivio conservato altrove, per esempio su un disco esterno. Corioli lo genera dalle impostazioni; conservarlo resta compito dello studio.",
  },
  {
    question: "Posso importare i pazienti dal gestionale che uso adesso?",
    answer:
      "Da file CSV sì: Corioli importa pazienti e appuntamenti, e l'elenco pazienti esportato da Doctolib. Per archivi in Word, Excel o in formati diversi c'è il servizio di migrazione, su preventivo.",
  },
  {
    question: "Posso provare tutte le funzionalità prima di pagare?",
    answer:
      "Sì. I 30 giorni di prova gratuita includono tutto, senza carta di credito. Dopo il prezzo è uno solo: 30€ al mese, tutto incluso, senza moduli a pagamento.",
  },
];

const featureListItem = (feature: Feature) => ({
  name: feature.title,
  description: `${feature.intro} ${feature.bullets.join(". ")}.`,
});

const funzionalitaStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Funzionalità", path: "/funzionalita" }]),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/funzionalita#pagina`,
      url: `${SITE_URL}/funzionalita`,
      name: "Funzionalità del gestionale medico Corioli",
      inLanguage: "it-IT",
      dateModified: STATIC_PAGES_UPDATED,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
      primaryImageOfPage: `${SITE_URL}/screenshots/funzionalita-calcolatori.png`,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/funzionalita#funzionalita`,
      name: "Funzionalità di Corioli",
      // Stesso ordine della pagina: la cardiologia sta dopo la ginecologia.
      itemListElement: [
        ...[visita, ginecologia].map(featureListItem),
        {
          name: "Cardiologia (in arrivo a ottobre 2026)",
          description: cardioModules
            .map((module) => `${module.title}: ${module.text}`)
            .join(" "),
        },
        ...[referti, archivio].map(featureListItem),
        {
          name: "Sicurezza e dati locali",
          description: securityCards
            .map((card) => `${card.title}: ${card.text}`)
            .join(" "),
        },
      ].map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        ...item,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/funzionalita#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

// Sezione testo + screenshot. `tone` alterna lo sfondo fra le sezioni,
// `reversed` sposta lo screenshot a sinistra da lg in su.
function FeatureSection({
  feature,
  tone,
  reversed = false,
}: {
  feature: Feature;
  tone: "white" | "plain";
  reversed?: boolean;
}) {
  const Icon = feature.icon;
  return (
    <section
      id={feature.id}
      className={`scroll-mt-28 py-20 md:py-28 ${tone === "white" ? "bg-white border-y border-gray-100" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
          <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8">
            <Icon size={24} />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {feature.title}
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">{feature.intro}</p>
          <ul className="flex flex-col gap-4 text-gray-700">
            {feature.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-2.5" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
          {feature.note}
        </div>
        <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
          <ScreenshotFrame {...feature.screenshot} />
        </div>
      </div>
    </section>
  );
}

export default function FunzionalitaPage() {
  return (
    <div className="pt-40 md:pt-48 pb-24">
      <script {...jsonLdProps(funzionalitaStructuredData)} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Tutto quello che serve alla visita. <br className="hidden md:block" />
          <span className="text-brand-600">Niente che ti rallenti.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
          In ginecologia e ostetricia come in cardiologia, Corioli segue il filo
          della visita: raccogli l&apos;anamnesi, inserisci le misure, i calcoli
          si fanno da soli e il referto è pronto da consegnare. Qui trovi cosa fa
          oggi il software, e anche cosa non fa ancora.
        </p>
        <nav aria-label="Sezioni della pagina" className="mt-10 flex flex-wrap justify-center gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 transition-colors"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Il flusso della visita */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28" aria-labelledby="flusso-visita">
        <h2 id="flusso-visita" className="sr-only">Il flusso di una visita in Corioli</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visitSteps.map(({ icon: Icon, title, text }, index) => (
            <li key={title} className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center">
                  <Icon size={20} />
                </span>
                <span className="font-heading text-sm font-bold text-gray-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-1.5">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <FeatureSection feature={visita} tone="white" />
      <FeatureSection feature={ginecologia} tone="plain" reversed />

      {/* Cardiologia */}
      <section id="cardiologia" className="scroll-mt-28 py-20 md:py-28 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wide mb-6">
              <CalendarClock size={14} /> Corioli Cardiologia · in arrivo a ottobre 2026
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cardiologia: la visita come la referta un cardiologo
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Un&apos;edizione a sé, con il suo archivio, sviluppata insieme a un
              cardiologo che ne detta i requisiti clinici: l&apos;ordine delle
              sezioni, cosa entra nel referto e cosa resta nella maschera. Dagli
              esami strumentali al laboratorio, ogni dato ha il suo campo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cardioModules.map(({ icon: Icon, title, text }) => (
                <li key={title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <Icon size={20} className="text-brand-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>

            <figure className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-white rounded-lg border border-gray-200 shadow-card p-3 sm:p-4">
                <Image
                  src="/screenshots/funzionalita-referto-cardiologia.png"
                  alt="Estratto di un referto di Corioli Cardiologia: pressione arteriosa, elettrocardiogramma con QTc, esame obiettivo, ecocardiogramma in tabella e TC coronarica con calcium score, CAD-RADS e burden di placca. I valori fuori norma sono in grassetto."
                  width={1431}
                  height={1512}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">
                Estratto del referto stampato, da una visita di prova. In
                grassetto solo i valori fuori dai limiti di riferimento.
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardioPrinciples.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t-2 border-brand-200 pt-5">
                <Icon size={20} className="text-brand-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/cardiologia"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-brand-700 transition-colors"
            >
              Tutti i dettagli sulla cardiologia <ArrowRight size={18} />
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 border border-brand-200 text-brand-700 px-6 py-3.5 rounded-xl font-bold hover:bg-brand-50 transition-colors"
            >
              Avvisami al lancio
            </Link>
          </div>
        </div>
      </section>

      <FeatureSection feature={referti} tone="plain" reversed />
      <FeatureSection feature={archivio} tone="white" />

      {/* Sicurezza */}
      <section id="sicurezza" className="scroll-mt-28 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8">
              <ShieldCheck size={24} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              I dati restano nel tuo studio
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Corioli salva l&apos;archivio sul computer dello studio. Verso i
              nostri server vanno solo i dati della licenza e i messaggi che
              scrivi in chat all&apos;assistenza: mai le cartelle dei pazienti.
            </p>
            <Link
              href="/gdpr"
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors"
            >
              Come Corioli applica il GDPR <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft">
                  <Icon size={20} className="text-brand-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <strong className="text-gray-900">L&apos;unica cosa che resta a te:</strong>{" "}
              le copie automatiche stanno sullo stesso disco. Esporta
              periodicamente l&apos;archivio dalle impostazioni e conservalo
              altrove, per esempio su un disco esterno.
            </p>
          </div>
        </div>
      </section>

      {/* E inoltre */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28" aria-labelledby="e-inoltre">
        <h2 id="e-inoltre" className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          E inoltre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extras.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6">
              <Icon size={20} className="text-brand-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cosa non fa */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-100" aria-labelledby="non-ancora">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="non-ancora" className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cosa Corioli non fa, ancora
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Meglio saperlo prima della prova che scoprirlo dopo.
            </p>
          </div>
          <dl className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {notYet.map((item) => (
              <div key={item.title} className="border-t border-gray-200 pt-5">
                <dt className="font-bold text-gray-900 mb-1.5">{item.title}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28" aria-labelledby="faq-funzionalita">
        <h2 id="faq-funzionalita" className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Domande frequenti sulle funzionalità
        </h2>
        <FaqList items={faqs} />
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Provalo sulle tue visite, non su una demo
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          30 giorni gratis con tutte le funzionalità, senza carta di credito.
          Poi 30€ al mese, tutto incluso.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <FeaturesCta />
          <Link
            href="/prezzi"
            className="px-8 py-4 rounded-xl font-medium text-brand-700 border border-brand-200 hover:bg-brand-50 transition-colors"
          >
            Vedi i prezzi
          </Link>
        </div>
      </section>
    </div>
  );
}
