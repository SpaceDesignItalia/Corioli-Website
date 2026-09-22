import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Bell,
  Calculator,
  CalendarClock,
  Check,
  Clock,
  FileText,
  HeartPulse,
  Lock,
  Users,
} from "lucide-react";

// Data di rilascio pubblico del modulo. Vive qui come costante perche compare
// nel badge, nel corpo della pagina, nelle FAQ e nei dati strutturati: tenerla
// in un punto solo evita che le quattro copie divergano quando si sposta.
const RELEASE_LABEL = "ottobre 2026";
// È annunciato solo il mese: availabilityStarts vuole una data, quindi il primo.
const RELEASE_ISO = "2026-10-01";

export const metadata: Metadata = {
  title: {
    absolute:
      "Gestionale per Cardiologi | Software Cardiologia e Refertazione ECG — Corioli",
  },
  description:
    "Gestionale per cardiologi: cartella cardiologica, referto ECG ed ecocardiogramma, TC coronarica e indici calcolati. In arrivo a ottobre 2026.",
  keywords: [
    "gestionale per cardiologi",
    "software cardiologia",
    "software gestionale cardiologo",
    "cartella clinica cardiologica",
    "refertazione ECG",
    "referto ecocardiogramma software",
    "software ambulatorio cardiologico",
    "gestionale studio cardiologico",
    "calcolo QTc",
    "CHA2DS2-VASc software",
    "HAS-BLED calcolatore",
    "calcium score Agatston CAD-RADS",
    "eGFR CKD-EPI referto",
    "gestionale cardiologia offline",
  ],
  alternates: {
    canonical: "/cardiologia",
  },
  openGraph: {
    ...pageOpenGraph,
    title:
      "Gestionale per Cardiologi | Software Cardiologia e Refertazione ECG — Corioli",
    description:
      "Cartella clinica cardiologica, referto ECG ed ecocardiogramma, TC coronarica e indici calcolati in un unico software desktop. In arrivo a ottobre 2026.",
    url: "https://corioli.it/cardiologia",
  },
};

// @id distinto: il layout dichiara gia un SoftwareApplication per Corioli
// (#software) e /ginecologia ne dichiara uno per il modulo ginecologico. Senza
// un id proprio i tre nodi sarebbero la stessa entita descritta tre volte.
const softwareStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://corioli.it/cardiologia#software-cardiologia",
  name: "Corioli Cardiologia — Gestionale per Cardiologi",
  url: "https://corioli.it/cardiologia",
  applicationCategory: "MedicalBusinessSoftware",
  applicationSubCategory: "Cartella clinica elettronica per cardiologia",
  operatingSystem: "Windows 10, Windows 11, macOS 10.13+",
  inLanguage: "it-IT",
  offers: {
    "@type": "Offer",
    price: "30",
    priceCurrency: "EUR",
    url: "https://corioli.it/prezzi",
    // PreOrder + availabilityStarts: il modulo esiste ma non e ancora
    // distribuito. Dichiararlo InStock come le altre pagine sarebbe falso.
    availability: "https://schema.org/PreOrder",
    availabilityStarts: RELEASE_ISO,
    description: "Prova gratuita di 30 giorni, senza carta di credito",
  },
  description:
    "Gestionale per cardiologi con cartella clinica cardiologica, moduli strumentali per elettrocardiogramma, ecocardiogramma e TC coronarica, indici calcolati di supporto e referti PDF. Applicazione desktop con i dati dei pazienti salvati in locale nello studio.",
  featureList: [
    "Cartella clinica cardiologica con anamnesi strutturata",
    "Modulo elettrocardiogramma con QTc calcolato secondo Bazett",
    "Modulo ecocardiogramma transtoracico con misure standard",
    "Modulo TC coronarica con calcium score Agatston e CAD-RADS",
    "CHA2DS2-VASc e HAS-BLED per la fibrillazione atriale",
    "Fenotipi dello scompenso cardiaco secondo ESC 2026 e classe NYHA",
    "Indici di laboratorio calcolati: LDL Friedewald, non-HDL, eGFR CKD-EPI 2021, HOMA-IR",
    "Referti PDF, ricette, certificati e richieste di esame",
    "Gruppi di ricerca per arruolare e ritrovare i pazienti di un progetto",
    "Dati salvati in locale nello studio, senza archivio pazienti sul server",
  ],
  publisher: {
    "@type": "Organization",
    name: "Corioli",
    url: "https://corioli.it",
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://corioli.it",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Specializzazioni",
      item: "https://corioli.it/specializzazioni",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gestionale per cardiologi",
      item: "https://corioli.it/cardiologia",
    },
  ],
};

// Le FAQ sono mostrate in pagina e replicate come FAQPage: Google accetta il
// markup solo se le stesse domande e risposte sono visibili all'utente, quindi
// le due copie devono restare allineate.
const faqs = [
  {
    question: "Quando esce il gestionale per cardiologi di Corioli?",
    answer:
      "Il modulo di cardiologia viene rilasciato al pubblico a ottobre 2026. È già un'applicazione funzionante, sviluppata insieme a un team di cardiologi che ne dettano i requisiti clinici, e in questa fase stiamo chiudendo la distribuzione e la messa a punto del referto stampato. Chi si iscrive alla lista d'attesa dalla pagina contatti riceve il link di download appena disponibile.",
  },
  {
    question: "Che cosa contiene la visita cardiologica in Corioli?",
    answer:
      "Un solo tipo di visita, diviso in otto sezioni come si lavora in ambulatorio: anamnesi, descrizione del problema e dati clinici, esame obiettivo, elettrocardiogramma, ecocardiogramma, TC coronarica, accertamenti, conclusioni e terapia. L'anamnesi viene prima del motivo della visita, perché la storia del paziente va letta prima della domanda che lo ha portato lì. Nella colonna laterale restano sempre visibili parametri vitali, peso con BMI, esami di laboratorio e indici calcolati.",
  },
  {
    question: "Quali misure gestisce il modulo ecocardiogramma?",
    answer:
      "Le misure standard di un transtoracico refertato in ambulatorio: DTD e DTS, setto interventricolare, parete posteriore, frazione di eiezione, atrio sinistro, radice aortica, aorta ascendente, TAPSE, PAPs, rapporto E/A ed E/e', più il referto testuale. Ogni modulo strumentale ha i propri modelli di refertazione riutilizzabili, così le frasi ricorrenti non vanno riscritte a ogni visita.",
  },
  {
    question: "Corioli calcola i punteggi di rischio cardiovascolare?",
    answer:
      "Calcola CHA2DS2-VASc e HAS-BLED per la fibrillazione atriale, il QTc secondo Bazett, l'eGFR con CKD-EPI 2021 con lo stadio KDIGO, l'LDL secondo Friedewald, il colesterolo non-HDL, l'HOMA-IR e la fascia Agatston del calcium score. Ogni indice compare in un riquadro separato, riporta sempre la formula di provenienza e non viene mai scritto in automatico nei campi del referto: l'interpretazione resta del medico. Lo SCORE2 è implementato ma volutamente disattivato finché i coefficienti pubblicati non saranno verificati sulla fonte primaria, perché preferiamo mostrare il motivo piuttosto che un numero di rischio potenzialmente sbagliato.",
  },
  {
    question: "I dati dei pazienti dove vengono salvati?",
    answer:
      "Sul computer dello studio. Corioli Cardiologia è un'applicazione desktop con archivio locale: non esiste un archivio pazienti sui nostri server, il fornitore non vi accede e le cartelle non vengono trasmesse a terzi. Verso il server passano solo la telemetria di licenza e la chat di assistenza. L'archivio è inoltre separato da quello di Corioli per la ginecologia: le due applicazioni possono convivere sullo stesso computer senza interferire.",
  },
  {
    question: "Corioli Cardiologia è un dispositivo medico?",
    answer:
      "No. Corioli Cardiologia non è un dispositivo medico certificato e gli indici calcolati sono strumenti di supporto alla scrittura del referto: non pongono diagnosi, non propongono soglie terapeutiche e vanno letti nel contesto clinico complessivo. È una scelta esplicita, dichiarata anche dentro l'applicazione.",
  },
  {
    question: "Quanto costa e si può provare prima?",
    answer:
      "Il prezzo è lo stesso di tutto Corioli: 30€ al mese, tutto incluso, senza moduli a pagamento. La prova gratuita dura 30 giorni, senza carta di credito e senza vincoli contrattuali. La migrazione dei dati storici da Word, Excel o da un altro gestionale è su preventivo.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://corioli.it/cardiologia#faq",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

// Riquadro "in breve": risposte secche alle domande che un cardiologo — o un
// assistente conversazionale che riassume la pagina — si pone per primo.
const inBreve = [
  {
    label: "Che cos'è",
    value:
      "Un gestionale desktop per l'ambulatorio cardiologico: cartella clinica, moduli strumentali e referti PDF.",
  },
  {
    label: "Per chi",
    value:
      "Cardiologi liberi professionisti, ambulatori cardiologici e centri di diagnostica.",
  },
  {
    label: "Disponibile da",
    value: `${RELEASE_LABEL}, con prova gratuita di 30 giorni.`,
  },
  {
    label: "Dove stanno i dati",
    value:
      "In locale sul computer dello studio. Nessun archivio pazienti sui nostri server.",
  },
  {
    label: "Prezzo",
    value:
      "30€ al mese, tutto incluso: nessun modulo a pagamento.",
  },
  {
    label: "Sistemi supportati",
    value:
      "Windows 10 e Windows 11. Su Mac (macOS 10.13 o superiore) con installazione assistita da un nostro operatore.",
  },
];

const painPoints = [
  {
    icon: Clock,
    title: "Referti riscritti da zero a ogni visita",
    description:
      "Senza un gestionale cardiologico, misure ECG ed eco vengono ribattute a mano in un documento vuoto e le frasi ricorrenti si recuperano con il copia-incolla da un vecchio referto. Il tempo che serve alla visita finisce nella formattazione.",
  },
  {
    icon: AlertTriangle,
    title: "Punteggi calcolati fuori dal gestionale",
    description:
      "CHA2DS2-VASc, QTc, eGFR e LDL si calcolano su siti esterni o a mente, poi il risultato viene trascritto. Ogni passaggio a mano è un punto in cui il dato può sbagliarsi, e nessuno di quei calcoli resta agganciato alla visita.",
  },
  {
    icon: FileText,
    title: "Storico strumentale non confrontabile",
    description:
      "Frazione di eiezione, calcium score e valori di laboratorio finiscono in PDF separati sul disco. Sapere come è cambiato un parametro fra due controlli richiede di riaprire i vecchi referti uno per uno.",
  },
];

// Le otto sezioni della visita, nell'ordine reale dell'applicazione.
const sezioniVisita = [
  {
    numero: "01",
    title: "Anamnesi",
    description:
      "Campo unico oppure sezioni multiple configurabili — familiare, fisiologica, patologica, chirurgica, farmacologica, allergica, abitudini di vita — più le sezioni personalizzate dello studio. Sta prima del motivo della visita, sia in maschera che nel PDF.",
  },
  {
    numero: "02",
    title: "Descrizione del problema e dati clinici",
    description:
      "La domanda che ha portato il paziente in ambulatorio, letta dopo la sua storia clinica e non prima.",
  },
  {
    numero: "03",
    title: "Esame obiettivo",
    description:
      "Rilievi della visita, con i modelli di refertazione riutilizzabili per le formulazioni ricorrenti.",
  },
  {
    numero: "04",
    title: "Elettrocardiogramma",
    description:
      "Ritmo, PR, QRS, QT, asse elettrico, QTc calcolato secondo Bazett e referto testuale.",
  },
  {
    numero: "05",
    title: "Ecocardiogramma",
    description:
      "DTD e DTS, setto interventricolare, parete posteriore, frazione di eiezione, atrio sinistro, radice aortica, aorta ascendente, TAPSE, PAPs, E/A ed E/e', con referto.",
  },
  {
    numero: "06",
    title: "TC coronarica",
    description:
      "Data e struttura dell'esame, calcium score con fascia Agatston, CAD-RADS con modificatori, burden di placca, segmenti SCCT, stenosi massima, FFR-TC e sintesi del referto radiologico. Il blocco è collassabile: i campi sono molti e servono di rado.",
  },
  {
    numero: "07",
    title: "Accertamenti",
    description:
      "Esami richiesti e in programma, con le richieste di esame generate come documento stampabile.",
  },
  {
    numero: "08",
    title: "Conclusioni e terapia",
    description:
      "Sintesi clinica, terapia e schemi dietetici fra i modelli di terapia: mediterranea, iposodica, ipercolesterolemia, ipertrigliceridemia, scompenso.",
  },
];

const features = [
  {
    icon: Activity,
    title: "Moduli strumentali strutturati",
    description:
      "Elettrocardiogramma, ecocardiogramma e TC coronarica non sono campi di testo libero: sono misure con la loro unità e il loro referto. Nel PDF finiscono raggruppati sotto un unico titolo, Esami strumentali, resi come tabella a griglia leggibile.",
  },
  {
    icon: Calculator,
    title: "Indici calcolati con la formula in chiaro",
    description:
      "QTc, eGFR, LDL, non-HDL, HOMA-IR, fascia Agatston, CHA2DS2-VASc e HAS-BLED compaiono in un riquadro a parte, con la formula di provenienza sempre riportata. Non vengono mai scritti in automatico nel referto: restano un suggerimento, non una conclusione.",
  },
  {
    icon: FileText,
    title: "Referto pensato per essere letto da un collega",
    description:
      "Referto di visita, ricetta, certificato e richiesta di esame come documenti PDF. Le sezioni hanno un'intestazione su barra grigia e le misure stanno in tabella: con otto sezioni e una dozzina di valori per modulo, la riga continua separata da punti era illeggibile.",
  },
  {
    icon: HeartPulse,
    title: "Scompenso e fibrillazione atriale",
    description:
      "Fenotipi dello scompenso aggiornati a ESC 2026 — dove HFmrEF non esiste più e il confine passa a una frazione di eiezione del 50% — con classe NYHA e NT-proBNP. Per la fibrillazione atriale CHA2DS2-VASc e HAS-BLED, che leggono ipertensione e diabete dal pannello dei fattori di rischio invece di richiederli di nuovo.",
  },
  {
    icon: Users,
    title: "Gruppi di ricerca",
    description:
      "Etichetta i pazienti arruolati in un progetto e ritrovali tutti insieme, con la data di arruolamento e da quanto tempo il progetto va avanti. L'appartenenza è salvata sul paziente, quindi sopravvive a un ripristino da backup.",
  },
  {
    icon: Lock,
    title: "Archivio locale e separato",
    description:
      "I dati clinici restano sul computer dello studio, con backup automatici, scrittura atomica del database e blocco dell'applicazione con PIN, Windows Hello o Touch ID. L'archivio è distinto da quello di Corioli ginecologia: le due edizioni convivono senza interferire.",
  },
];

// Tabella degli indici: gli stessi che l'app mostra nel riquadro dei calcoli.
// I limiti dichiarati sono quelli realmente applicati dal software.
const indici = [
  {
    nome: "LDL colesterolo",
    formula: "Friedewald (totale − HDL − TG/5)",
    nota: "Non calcolato con trigliceridi ≥ 400 mg/dL",
  },
  {
    nome: "Colesterolo non-HDL",
    formula: "Totale − HDL",
    nota: "—",
  },
  {
    nome: "eGFR e stadio KDIGO",
    formula: "CKD-EPI 2021, senza coefficiente etnico",
    nota: "Richiede età e sesso",
  },
  {
    nome: "HOMA-IR",
    formula: "(glicemia × insulinemia) / 405",
    nota: "Solo su prelievo a digiuno",
  },
  {
    nome: "QTc",
    formula: "Bazett (QT / √RR)",
    nota: "Segnalato come inaffidabile fuori da 50-100 bpm",
  },
  {
    nome: "Fascia calcium score",
    formula: "Fasce Agatston 0 / 1-99 / 100-399 / ≥ 400",
    nota: "Descrittiva, non diagnostica",
  },
  {
    nome: "CHA2DS2-VASc",
    formula: "Punteggio per il rischio tromboembolico in fibrillazione atriale",
    nota: "Legge i fattori di rischio dalla visita",
  },
  {
    nome: "HAS-BLED",
    formula: "Punteggio per il rischio emorragico in corso di anticoagulazione",
    nota: "Nel referto esce il totale, non le singole voci",
  },
  {
    nome: "Progressione calcium score",
    formula: "Variazione assoluta e percentuale fra esami consecutivi",
    nota: "Nessuna interpolazione fra un esame e l'altro",
  },
];

const genericComparison = [
  {
    feature: "Moduli ECG, ecocardiogramma e TC coronarica strutturati",
    corioli: true,
    generic: false,
  },
  {
    feature: "QTc, eGFR e LDL calcolati dentro la visita",
    corioli: true,
    generic: false,
  },
  { feature: "CHA2DS2-VASc e HAS-BLED integrati", corioli: true, generic: false },
  {
    feature: "Referto PDF con esami strumentali in tabella",
    corioli: true,
    generic: "Parziale",
  },
  {
    feature: "Modelli di refertazione per singolo modulo",
    corioli: true,
    generic: "Parziale",
  },
  { feature: "Gruppi di ricerca sui pazienti", corioli: true, generic: false },
  {
    feature: "Dati salvati in locale nello studio",
    corioli: true,
    generic: "Raro",
  },
  { feature: "Agenda e fatturazione", corioli: "In sviluppo", generic: true },
  { feature: "Prova gratuita 30 giorni", corioli: true, generic: "Variabile" },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700">
        <Check size={14} strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return <span className="text-gray-300 font-bold text-lg leading-none">—</span>;
  }
  return <span className="text-xs font-medium text-gray-500">{value}</span>;
}

export default function CardiologiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="pt-40 md:pt-48 pb-24 bg-background">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold mb-8 w-fit mx-auto uppercase tracking-wider">
            <CalendarClock size={14} /> In arrivo · {RELEASE_LABEL}
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
            Gestionale per Cardiologi
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Corioli Cardiologia è il software per l'ambulatorio cardiologico:
            cartella clinica, moduli per elettrocardiogramma, ecocardiogramma e
            TC coronarica, indici calcolati con la formula in chiaro e referti
            PDF pronti da consegnare. I dati delle persone che segui restano nel
            tuo studio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-soft hover:shadow-md text-base"
            >
              <Bell size={18} /> Avvisami al lancio
            </Link>
            <Link
              href="#funzionalita"
              className="inline-flex items-center gap-2 text-brand-700 px-6 py-4 rounded-xl font-semibold hover:text-brand-800 transition-colors"
            >
              Guarda cosa contiene <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* In breve: risposte secche, utili a chi arriva da una ricerca o da un
            assistente conversazionale e vuole capire in dieci secondi. */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 md:p-10">
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-6">
              Corioli Cardiologia in breve
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
              {inBreve.map((item) => (
                <div key={item.label} className="border-t border-gray-100 pt-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1.5">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-gray-600 leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cosa non funziona senza un gestionale cardiologico
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un software amministrativo o un documento di testo non conoscono
                la differenza fra una frazione di eiezione e una nota libera.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
                    <point.icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* La visita in otto sezioni */}
        <section id="funzionalita" className="py-20 md:py-28 scroll-mt-32">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                La visita cardiologica in otto sezioni
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un solo tipo di visita, come in ambulatorio. L'ordine delle
                sezioni è quello chiesto dal cardiologo che ha dettato i
                requisiti del modulo, non quello comodo al software.
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sezioniVisita.map((sezione) => (
                <li
                  key={sezione.numero}
                  className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6 flex gap-5"
                >
                  <span
                    aria-hidden="true"
                    className="font-heading font-bold text-brand-200 text-2xl leading-none shrink-0 pt-0.5"
                  >
                    {sezione.numero}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                      {sezione.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {sezione.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-gray-500 leading-relaxed mt-8 max-w-2xl mx-auto text-center">
              Nella colonna di sinistra restano sempre a vista i parametri vitali
              (pressione arteriosa, frequenza cardiaca, fumo), il peso con il
              BMI, gli esami di laboratorio con gli indici calcolati e le
              immagini da allegare al PDF.
            </p>
          </div>
        </section>

        {/* Funzionalità */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Funzionalità del software di cardiologia
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sviluppato insieme a un team di cardiologi che ne dettano i
                requisiti clinici: soglie, punteggi e struttura del referto
                arrivano da lì.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-100 shadow-card"
                >
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indici calcolati */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Gli indici calcolati, con formula e limiti dichiarati
              </h2>
              <p className="text-gray-600">
                Ogni valore compare in un riquadro separato e riporta la formula
                da cui nasce. Nessuno viene scritto in automatico nel referto.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="bg-brand-50 border-b border-brand-100">
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Indice
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Formula o fonte
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Limite applicato
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {indici.map((riga) => (
                    <tr
                      key={riga.nome}
                      className="border-b border-gray-100 even:bg-gray-50/50"
                    >
                      <td className="px-6 py-4 text-gray-900 font-semibold">
                        {riga.nome}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{riga.formula}</td>
                      <td className="px-6 py-4 text-gray-500 text-xs">
                        {riga.nota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-5 p-6 md:p-8 rounded-2xl bg-amber-50/60 border border-amber-100">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <AlertTriangle size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                  Cosa non troverai, e perché
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Lo SCORE2 è implementato e coperto da test, ma resta
                  disattivato: i coefficienti pubblicati stanno solo nel
                  materiale supplementare della linea guida e non è stato
                  possibile verificarli sulla fonte primaria. L'applicazione
                  mostra il motivo invece di un numero di rischio potenzialmente
                  sbagliato, e lo stesso vale per SCORE2-OP e per i percentili
                  MESA. Corioli Cardiologia, inoltre, non è un dispositivo medico
                  certificato: gli indici sono strumenti di supporto, non pongono
                  diagnosi e non propongono soglie terapeutiche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confronto */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Corioli Cardiologia vs software generici
              </h2>
              <p className="text-gray-600">
                Perché un gestionale verticale cambia le cose rispetto a un
                software amministrativo adattato alla clinica.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="bg-brand-50 border-b border-brand-100">
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Funzionalità
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-brand-700">
                      Corioli
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-gray-500">
                      Software generico
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {genericComparison.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-gray-100 even:bg-gray-50/50"
                    >
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <ComparisonCell value={row.corioli} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <ComparisonCell value={row.generic} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Lista d'attesa */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="bg-brand-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HeartPulse size={28} className="text-white" />
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                  Disponibile da {RELEASE_LABEL}
                </h2>
                <p className="text-brand-100 text-lg mb-2 max-w-xl mx-auto">
                  Lasciaci la tua email e ti scriviamo il giorno del rilascio,
                  con il link di download e i 30 giorni di prova gratuita già
                  attivi. Nessuna carta di credito, nessun vincolo.
                </p>
                <p className="text-brand-200 text-sm mb-10">
                  30€/mese, tutto incluso · disdici quando vuoi
                </p>
                <Link
                  href="/contatti"
                  className="inline-flex items-center gap-2 bg-white text-brand-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-md text-base"
                >
                  Iscriviti alla lista d'attesa <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Domande frequenti sul gestionale per cardiologi
              </h2>
              <p className="text-gray-600">
                Le risposte che i cardiologi ci chiedono più spesso prima di
                provare un software per l'ambulatorio.
              </p>
            </div>
            <FaqList items={faqs} variant="muted" />
          </div>
        </section>

        {/* Link interni */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pt-8 border-t border-gray-100">
          <nav
            aria-label="Link correlati"
            className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500"
          >
            <Link
              href="/specializzazioni"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Tutte le specializzazioni
            </Link>
            <Link
              href="/ginecologia"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Gestionale per ginecologi
            </Link>
            <Link
              href="/funzionalita"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Funzionalità
            </Link>
            <Link href="/prezzi" className="inline-block py-1 hover:text-brand-600 transition-colors">
              Prezzi
            </Link>
            <Link
              href="/blog/gestionale-per-cardiologi-cosa-cercare"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Come scegliere un gestionale cardiologico
            </Link>
            <Link href="/gdpr" className="inline-block py-1 hover:text-brand-600 transition-colors">
              Sicurezza e GDPR
            </Link>
            <Link
              href="/contatti"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Contatti
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
}
