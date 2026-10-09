import type { Metadata } from "next";
import { SITE_URL, breadcrumbList, jsonLdProps, pageOpenGraph } from "@/lib/seo";
import { MS_STORE_URL } from "@/lib/ms-store";
import Link from "next/link";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FaqList from "@/components/FaqList";
import { RicordaEdizione } from "@/components/DownloadLinks";
import {
  ArrowRight,
  Baby,
  Check,
  Clock,
  FileText,
  AlertTriangle,
  Calculator,
  Download,
  FolderInput,
  Lock,
  Paperclip,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Gestionale per Ginecologi | Software Ginecologia e Ostetricia — Corioli",
  },
  description:
    "Gestionale per ginecologi e ostetrici: cartella ostetrica, biometria e peso fetale con Hadlock, flussimetria ombelicale e referti PDF. Prova gratuita 30 giorni.",
  keywords: [
    "gestionale per ginecologi",
    "software ginecologia",
    "gestionale ginecologico",
    "software per ginecologi",
    "software ginecologia e ostetricia",
    "gestionale studio ginecologico",
    "cartella ostetrica elettronica",
    "cartella clinica ginecologica",
    "software referto ecografia ostetrica",
    "biometria fetale Hadlock software",
    "stima peso fetale Hadlock",
    "flussimetria arteria ombelicale percentili",
  ],
  alternates: {
    canonical: "/ginecologia",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Gestionale per Ginecologi | Software Ginecologia e Ostetricia — Corioli",
    description:
      "Cartella ostetrica elettronica, biometria e peso fetale con i percentili di Hadlock, flussimetria ombelicale e referti PDF in un unico software desktop. Prova gratuita di 30 giorni.",
    url: `${SITE_URL}/ginecologia`,
  },
};

// Le funzionalita dichiarate qui vengono dal codice dell'app (repo Corioli,
// src/utils e src/Pages/Dashboard), non dal resto del sito: e la stessa regola
// di /cardiologia. In particolare non esiste una raccolta digitale del
// consenso informato: i consensi firmati si allegano alla scheda come file.
const softwareStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  // @id esplicito: il layout dichiara gia un SoftwareApplication per il
  // prodotto (#software). Senza un id distinto i due nodi risultano due entita
  // sovrapposte per lo stesso software.
  "@id": `${SITE_URL}/ginecologia#software-ginecologia`,
  name: "Corioli — Gestionale per Ginecologi",
  url: `${SITE_URL}/ginecologia`,
  applicationCategory: "MedicalBusinessSoftware",
  applicationSubCategory: "Cartella clinica elettronica per ginecologia e ostetricia",
  operatingSystem: "Windows 10, Windows 11, macOS 10.13+",
  inLanguage: "it-IT",
  downloadUrl: MS_STORE_URL.ginecologia,
  // La scheda Store e la stessa applicazione vista da un altro sito: dirlo
  // aiuta motori e assistenti a non trattarle come due prodotti omonimi.
  sameAs: [MS_STORE_URL.ginecologia],
  offers: {
    "@type": "Offer",
    price: "30",
    priceCurrency: "EUR",
    url: `${SITE_URL}/prezzi`,
    availability: "https://schema.org/InStock",
    description: "Prova gratuita di 30 giorni, senza carta di credito",
  },
  description:
    "Gestionale per ginecologi e ostetrici con visite ginecologica, ginecologica pediatrica e ostetrica, cartella ostetrica elettronica, biometria fetale e peso fetale stimato con i percentili di Hadlock, flussimetria dell'arteria ombelicale e referti PDF. Applicazione desktop con i dati delle pazienti salvati in locale nello studio.",
  featureList: [
    "Visite ginecologica, ginecologica pediatrica e ostetrica con anamnesi per sezioni configurabile",
    "Cartella ostetrica elettronica con storia ostetrica e gravidanze in corso e concluse",
    "Settimane di gestazione e data presunta del parto dall'ultima mestruazione",
    "Biometria fetale (DBP, CC, CA, LF) con i percentili di Hadlock",
    "Peso fetale stimato con Hadlock I–IV, centile e grafico di crescita",
    "Flussimetria dell'arteria ombelicale: PI e IR con il percentile per epoca gestazionale",
    "BMI con fasce OMS e HOMA-IR",
    "Referti PDF ginecologici e ostetrici con immagini ecografiche, ricette, certificati e richieste di esame",
    "Modelli di testo per ecografia ginecologica, visita ed esame obiettivo",
    "Dati salvati in locale nello studio, senza archivio pazienti sul server",
  ],
  publisher: { "@id": `${SITE_URL}/#organization` },
  isPartOf: { "@id": `${SITE_URL}/#software` },
};

// Le FAQ sono mostrate in pagina e replicate come FAQPage: Google accetta il
// markup solo se le stesse domande e risposte sono visibili all'utente, quindi
// le due copie devono restare allineate.
const faqs = [
  {
    question: "Quanto costa un gestionale per ginecologi?",
    answer:
      "In Italia i gestionali medici vanno da circa 10€ al mese per soluzioni generaliste fino a 99€-499€ al mese per piattaforme pensate per poliambulatori. Corioli costa 30€ al mese, tutto incluso: cartella clinica elettronica illimitata, anagrafica pazienti, refertazione PDF e calcolatori fetali, senza moduli a pagamento né costi di attivazione.",
  },
  {
    question: "Come si scarica il gestionale per ginecologi di Corioli?",
    answer:
      "Dal Microsoft Store: Corioli è un'applicazione per Windows 10 e Windows 11 che si installa in autonomia e si aggiorna da sola, con 30 giorni di prova gratuita senza carta di credito. Su Mac (macOS 10.13 o superiore) la installiamo insieme a te in una breve call. È un'applicazione distinta da Corioli Cardiologia, con il proprio archivio.",
  },
  {
    question: "Quali calcoli fetali sono inclusi?",
    answer:
      "Settimane di gestazione e data presunta del parto dall'ultima mestruazione; biometria fetale (DBP, CC, CA, LF) con i percentili di Hadlock; peso fetale stimato con la formula di Hadlock che preferisci, dalla I alla IV, con il centile e il grafico di crescita; flussimetria dell'arteria ombelicale con PI e IR e il loro percentile per epoca gestazionale, sulle curve della Fetal Medicine Foundation per il PI. Sono dentro la visita: il risultato finisce nel referto senza passare da app esterne o calcolatrici sullo smartphone.",
  },
  {
    question: "Corioli gestisce anche la ginecologia pediatrica?",
    answer:
      "Sì. Le visite sono tre: ginecologica, ginecologica pediatrica e ostetrica, ognuna con la propria anamnesi. Nella visita ginecologica pediatrica c'è anche lo stadio di Tanner. Le sezioni dell'anamnesi — familiare, fisiologica, patologica, ginecologica, farmacologica, allergica, partner — si rinominano, si riordinano e si completano con sezioni tue.",
  },
  {
    question: "I dati delle pazienti dove vengono salvati?",
    answer:
      "Restano sul computer dello studio. Corioli è un'applicazione desktop con archiviazione locale: le cartelle cliniche non vengono trasmesse a server esterni e il fornitore non vi accede in alcun modo. Il medico resta l'unico titolare del trattamento e, per l'uso standard del software, non serve stipulare un DPA con noi perché non esiste un responsabile esterno del trattamento.",
  },
  {
    question: "Corioli è un dispositivo medico?",
    answer:
      "No. Corioli non è un dispositivo medico certificato: percentili, stime del peso fetale e indici sono strumenti di supporto alla refertazione, riportano la curva o la formula da cui nascono, non pongono diagnosi e vanno letti nel contesto clinico complessivo.",
  },
  {
    question: "Posso provare Corioli prima di acquistarlo?",
    answer:
      "Sì. La prova gratuita dura 30 giorni, non richiede carta di credito e non prevede costi di attivazione né vincoli contrattuali. È pensata per essere usata nell'ambulatorio reale, con pazienti veri, così da valutare il software su un ciclo di visite completo e non su una demo di quindici minuti.",
  },
  {
    question: "Corioli gestisce anche agenda e fatturazione?",
    answer:
      "Non ancora: agenda e fatturazione elettronica sono in sviluppo. Oggi Corioli copre la parte clinica della visita — cartella, anamnesi, calcolatori, referti e documenti della paziente — mentre per la gestione amministrativa serve ancora uno strumento separato. È un limite da considerare se cerchi una soluzione unica per clinica e contabilità.",
  },
  {
    question: "Posso migrare i dati da Word, Excel o da un altro gestionale?",
    answer:
      "Sì. Pazienti e appuntamenti si importano da CSV, compreso l'elenco pazienti esportato da Doctolib, con il controllo del codice fiscale e dei doppioni. Per gli archivi in Word, Excel o in altri formati la migrazione dei dati storici è un servizio su preventivo, calcolato in base al formato e alla dimensione dell'archivio, così lo storico delle pazienti resta consultabile dentro la cartella clinica invece di rimanere in cartelle separate sul disco.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/ginecologia#faq`,
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  ...breadcrumbList([
    { name: "Specializzazioni", path: "/specializzazioni" },
    { name: "Gestionale per ginecologi", path: "/ginecologia" },
  ]),
};

// Riquadro "in breve": risposte secche alle domande che un ginecologo — o un
// assistente conversazionale che riassume la pagina — si pone per primo.
// Stesso schema di /cardiologia.
const inBreve = [
  {
    label: "Che cos'è",
    value:
      "Un gestionale desktop per lo studio di ginecologia e ostetricia: cartella clinica, calcoli fetali e referti PDF.",
  },
  {
    label: "Per chi",
    value:
      "Ginecologi e ostetrici in libera professione, studi e ambulatori ginecologici.",
  },
  {
    label: "Dove si scarica",
    value: "Dal Microsoft Store, con prova gratuita di 30 giorni.",
  },
  {
    label: "Dove stanno i dati",
    value:
      "In locale sul computer dello studio. Nessun archivio pazienti sui nostri server.",
  },
  {
    label: "Prezzo",
    value: "30€ al mese, tutto incluso: nessun modulo a pagamento.",
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
    title: "Ore perse tra Word, Excel e app esterne",
    description:
      "Senza un gestionale ginecologico, ogni visita ostetrica richiede copia-incolla tra documenti, calcolatrici fetali sullo smartphone e referti scritti da zero. Il tempo clinico si trasforma in lavoro amministrativo ripetitivo.",
  },
  {
    icon: AlertTriangle,
    title: "Dati clinici dispersi e non confrontabili",
    description:
      "Biometrie, percentili e pesi stimati finiscono in file separati, impossibili da interrogare nel tempo. Recuperare lo storico di una gravidanza o confrontare due controlli diventa un'operazione manuale soggetta a errori.",
  },
  {
    icon: FileText,
    title: "Referti non strutturati e archivi fragili",
    description:
      "Un software generico non conosce la differenza fra un DBP e una nota libera: niente modelli ostetrici, niente percentili, niente curve. I referti cambiano forma da una paziente all'altra e i consensi firmati restano in un raccoglitore.",
  },
];

// Le tre visite dell'app (tipi di visita in AddVisit.tsx) e le sezioni
// dell'anamnesi predefinite (utils/anamnesiStrutturata.ts).
const visite = [
  {
    numero: "01",
    title: "Visita ginecologica",
    description:
      "Anamnesi per sezioni — familiare, fisiologica, patologica, ginecologica, farmacologica, allergica, partner — da rinominare, riordinare e completare con sezioni tue. Esame obiettivo, ecografia e conclusioni con i modelli di testo dello studio.",
  },
  {
    numero: "02",
    title: "Visita ginecologica pediatrica",
    description:
      "Una visita a parte per le pazienti più giovani, con la sua anamnesi e lo stadio di Tanner nella scheda.",
  },
  {
    numero: "03",
    title: "Visita ostetrica",
    description:
      "Storia ostetrica, gravidanze in corso e concluse, settimane di gestazione e data presunta del parto, biometria, peso fetale stimato e flussimetria ombelicale nella stessa maschera.",
  },
];

const features = [
  {
    icon: Baby,
    title: "Cartella ostetrica elettronica",
    description:
      "Storia ostetrica, gravidanze in corso e concluse e ogni controllo in ordine cronologico. Il peso fetale stimato di ogni visita finisce nel grafico di crescita: l'andamento di una gravidanza si legge in un colpo d'occhio, senza riaprire i vecchi referti.",
  },
  {
    icon: Calculator,
    title: "Calcoli fetali dentro la visita",
    description:
      "Le misure diventano subito percentili, con una barra che mostra dove cade il valore: DBP, CC, CA e LF con Hadlock, peso fetale con la formula Hadlock che preferisci (I–IV), PI e IR dell'arteria ombelicale per epoca gestazionale. Niente calcolatrici sul telefono.",
  },
  {
    icon: FileText,
    title: "Referti PDF pronti",
    description:
      "Referto ginecologico e ostetrico, ricetta, certificato e richiesta di esame, con le immagini ecografiche della visita, la carta intestata dello studio, firma e timbro. I risultati dei calcoli entrano nel documento senza essere ricopiati.",
  },
  {
    icon: Paperclip,
    title: "Documenti e consensi della paziente",
    description:
      "Esami esterni, consensi firmati e immagini si caricano come PDF o immagine nella scheda della paziente, accanto alle visite. Ogni correzione a una visita resta nella cronologia delle modifiche, con data, campo e valore precedente.",
  },
  {
    icon: Lock,
    title: "Archivio locale e protetto",
    description:
      "I dati restano sul computer dello studio, con backup automatici sullo stesso disco, scrittura atomica del database e blocco dell'applicazione con PIN, Windows Hello o Touch ID.",
  },
  {
    icon: FolderInput,
    title: "Dal vecchio archivio a Corioli",
    description:
      "Import da CSV di pazienti e appuntamenti, compreso l'elenco pazienti di Doctolib, con il controllo del codice fiscale e dei doppioni. Gli archivi in Word o Excel li migriamo noi, su preventivo.",
  },
];

// Curve e formule realmente usate dall'app (utils/biometryCentiles.ts,
// fetalWeightUtils.ts, fetalGrowthCentiles.ts, flussimetriaUtils.ts,
// metabolicIndices.ts). I limiti sono quelli applicati dal codice: fuori range
// il percentile non viene calcolato.
const calcoli = [
  {
    nome: "Settimane di gestazione e data presunta del parto",
    fonte: "Dall'ultima mestruazione, 280 giorni",
    nota: "Calcolate alla data della visita",
  },
  {
    nome: "Biometria fetale (DBP, CC, CA, LF)",
    fonte: "Percentili di Hadlock (1984)",
    nota: "Da 14 a 40 settimane",
  },
  {
    nome: "Peso fetale stimato",
    fonte: "Hadlock I–IV (1985), a scelta del medico",
    nota: "Centile sulle curve Hadlock 1991, da 20 a 42 settimane",
  },
  {
    nome: "PI dell'arteria ombelicale",
    fonte: "Curve Fetal Medicine Foundation (Ciobanu et al., 2019)",
    nota: "Percentile da 20 a 41 settimane",
  },
  {
    nome: "IR dell'arteria ombelicale",
    fonte: "Percentile per epoca gestazionale",
    nota: "Nel riepilogo insieme al PI e al flusso telediastolico",
  },
  {
    nome: "BMI",
    fonte: "Fasce OMS",
    nota: "Anche sul peso pre-gravidanza, con l'aumento di peso in gravidanza",
  },
  {
    nome: "HOMA-IR",
    fonte: "(glicemia × insulinemia) / 405",
    nota: "Su glicemia e insulinemia a digiuno",
  },
];

const genericComparison = [
  { feature: "Cartella ostetrica elettronica strutturata", corioli: true, generic: false },
  { feature: "Biometria con i percentili di Hadlock nella visita", corioli: true, generic: false },
  { feature: "Peso fetale stimato Hadlock I–IV con grafico di crescita", corioli: true, generic: false },
  { feature: "Flussimetria ombelicale con percentili", corioli: true, generic: false },
  { feature: "Referti PDF con i dati della visita", corioli: true, generic: "Parziale" },
  { feature: "Modelli di testo per ecografia e visita", corioli: true, generic: "Parziale" },
  { feature: "Dati salvati in locale nello studio", corioli: true, generic: "Raro" },
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
    return (
      <span className="text-gray-300 font-bold text-lg leading-none">—</span>
    );
  }
  return (
    <span className="text-xs font-medium text-gray-500">{value}</span>
  );
}

export default function GinecologiaPage() {
  return (
    <>
      <RicordaEdizione edizione="ginecologia" />
      <script {...jsonLdProps(softwareStructuredData)} />
      <script {...jsonLdProps(breadcrumbStructuredData)} />
      <script {...jsonLdProps(faqStructuredData)} />

      <div className="pt-40 md:pt-48 pb-24 bg-background">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
            Gestionale per Ginecologi e Ostetrici
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Corioli è il software per lo studio di ginecologia e ostetricia:
            visite ginecologiche e ostetriche con l'anamnesi che imposti tu,
            biometria e peso fetale con i percentili di Hadlock, flussimetria
            ombelicale e referti PDF pronti da consegnare. I dati delle
            pazienti restano nel tuo studio.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-soft hover:shadow-md text-base"
          >
            Inizia la prova gratuita <ArrowRight size={20} />
          </Link>
        </section>

        {/* In breve: risposte secche, utili a chi arriva da una ricerca o da un
            assistente conversazionale e vuole capire in dieci secondi. */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 md:p-10">
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-6">
              Corioli per la ginecologia in breve
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
                Cosa non funziona senza un gestionale ginecologico
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un software generico o Word ed Excel non coprono le esigenze
                cliniche di un ambulatorio ostetrico e ginecologico.
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

        {/* Le visite */}
        <section id="visite" className="py-20 md:py-28 scroll-mt-32">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tre visite, ciascuna con la sua anamnesi
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ginecologia, ginecologia pediatrica e ostetricia non si
                refertano allo stesso modo: in Corioli sono tre visite distinte,
                con i campi che servono a ciascuna.
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {visite.map((visita) => (
                <li
                  key={visita.numero}
                  className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6 flex flex-col gap-4"
                >
                  <span
                    aria-hidden="true"
                    className="font-heading font-bold text-brand-200 text-2xl leading-none"
                  >
                    {visita.numero}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                      {visita.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {visita.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Modelli di testo pronti, tutti modificabili
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Corioli parte con i modelli per le formulazioni ricorrenti —
                ecografia ginecologica transvaginale, fibromatosi uterina,
                endometrioma, cisti dermoide, inserimento di IUD, visita per
                prolasso — e li inserisci con un clic dal pulsante «Modello».
                Ognuno si modifica o si sostituisce dalle impostazioni, e puoi
                aggiungere i tuoi per anamnesi, esame obiettivo, conclusioni e
                terapie.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Funzionalità del software di ginecologia e ostetricia
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ogni strumento è dentro il flusso della visita, non aggiunto
                come modulo esterno.
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

        {/* Calcoli e curve */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calcoli e curve, con la fonte dichiarata
              </h2>
              <p className="text-gray-600">
                Le curve di riferimento sono quelle pubblicate. Fuori
                dall'intervallo di settimane in cui una curva è valida, il
                percentile non viene calcolato.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="bg-brand-50 border-b border-brand-100">
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Calcolo
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Formula o curva
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Limite applicato
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {calcoli.map((riga) => (
                    <tr
                      key={riga.nome}
                      className="border-b border-gray-100 even:bg-gray-50/50"
                    >
                      <td className="px-6 py-4 text-gray-900 font-semibold">
                        {riga.nome}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{riga.fonte}</td>
                      <td className="px-6 py-4 text-gray-500 text-xs">
                        {riga.nota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mt-8 max-w-2xl mx-auto text-center">
              Corioli non è un dispositivo medico certificato: percentili e
              stime sono strumenti di supporto alla refertazione e
              l'interpretazione resta del medico.
            </p>
          </div>
        </section>

        {/* Screenshot gallery */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
            <ScreenshotGallery />
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Corioli vs software generici
              </h2>
              <p className="text-gray-600">
                Perché un gestionale per ginecologi verticale fa la differenza
                rispetto a un software amministrativo adattato alla clinica.
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

        {/* Free trial */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="bg-brand-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Download size={28} className="text-white" />
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                  Prova gratuita di 30 giorni
                </h2>
                <p className="text-brand-100 text-lg mb-2 max-w-xl mx-auto">
                  Nessuna carta di credito richiesta. Usa Corioli nel tuo
                  ambulatorio reale con pazienti veri, calcolatori fetali e
                  cartella ostetrica elettronica complete.
                </p>
                <p className="text-brand-200 text-sm mb-10">
                  30€/mese, tutto incluso · disdici quando vuoi
                </p>
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 bg-white text-brand-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-md text-base"
                >
                  Scarica e inizia la prova <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Domande frequenti sul gestionale per ginecologi
              </h2>
              <p className="text-gray-600">
                Le risposte che i ginecologi ci chiedono più spesso prima di
                scegliere un software per la ginecologia.
              </p>
            </div>
            <FaqList items={faqs} variant="muted" />
          </div>
        </section>

        {/* Internal links footer */}
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
              href="/cardiologia"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Gestionale per cardiologi
            </Link>
            <Link
              href="/funzionalita"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Funzionalità
            </Link>
            <Link
              href="/prezzi"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Prezzi
            </Link>
            <Link
              href="/blog/gestionale-per-ginecologi-cosa-cercare"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Come scegliere un gestionale per ginecologi
            </Link>
            <Link
              href="/blog/stima-peso-fetale-hadlock-guida-pratica"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Stima del peso fetale con Hadlock
            </Link>
            <Link
              href="/blog/flussimetria-arteria-ombelicale-pi-percentili"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Flussimetria dell'arteria ombelicale
            </Link>
            <Link
              href="/blog/calcolo-eta-gestazionale-settimane-gravidanza"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Calcolo dell'età gestazionale
            </Link>
            <Link
              href="/gdpr"
              className="inline-block py-1 hover:text-brand-600 transition-colors"
            >
              Sicurezza e GDPR
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
}
