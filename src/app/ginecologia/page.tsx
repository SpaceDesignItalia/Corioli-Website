import type { Metadata } from "next";
import Link from "next/link";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import {
  ArrowRight,
  Check,
  Clock,
  FileText,
  AlertTriangle,
  Calculator,
  Shield,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Gestionale per Ginecologi | Software Ginecologia e Ostetricia — Corioli",
  },
  description:
    "Software gestionale per ginecologi e ostetrici. Cartella clinica elettronica, calcolatori fetali e referti PDF. Prova gratuita 90 giorni.",
  alternates: {
    canonical: "/ginecologia",
  },
  openGraph: {
    title: "Gestionale per Ginecologi | Software Ginecologia e Ostetricia — Corioli",
    description:
      "Software gestionale per ginecologi e ostetrici. Cartella clinica elettronica, calcolatori fetali e referti PDF. Prova gratuita 90 giorni.",
    url: "https://corioli.it/ginecologia",
  },
};

const softwareStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Corioli — Gestionale per Ginecologi",
  url: "https://corioli.it/ginecologia",
  applicationCategory: "MedicalBusinessSoftware",
  operatingSystem: "Web",
  inLanguage: "it-IT",
  offers: {
    "@type": "Offer",
    price: "15",
    priceCurrency: "EUR",
    url: "https://corioli.it/prezzi",
    availability: "https://schema.org/InStock",
    description: "Prova gratuita di 90 giorni, senza carta di credito",
  },
  description:
    "Software gestionale per ginecologi e ostetrici con cartella ostetrica elettronica, calcolatori fetali Hadlock, referti PDF e consenso informato digitale.",
  featureList: [
    "Cartella ostetrica elettronica",
    "Calcolatori fetali Hadlock, biometria e percentili",
    "Referti PDF personalizzabili",
    "Consenso informato digitale",
    "Conformità GDPR",
  ],
  publisher: {
    "@type": "Organization",
    name: "Corioli",
    url: "https://corioli.it",
  },
};

const painPoints = [
  {
    icon: Clock,
    title: "Ore perse tra Word, Excel e app esterne",
    description:
      "Senza un gestionale per ginecologi dedicato, ogni visita ostetrica richiede copia-incolla tra documenti, calcolatrici fetali su smartphone e referti creati da zero. Il tempo clinico si trasforma in lavoro amministrativo ripetitivo.",
  },
  {
    icon: AlertTriangle,
    title: "Dati clinici dispersi e non confrontabili",
    description:
      "Biometrie, percentili e curve di crescita finiscono in file separati, impossibili da interrogare nel tempo. Recuperare lo storico di una gravidanza o confrontare visite consecutive diventa un'operazione manuale soggetta a errori.",
  },
  {
    icon: FileText,
    title: "Referti non strutturati e archivi fragili",
    description:
      "I software generici non offrono template ostetrici né calcolatori integrati. Il medico produce referti inconsistenti, archivia consensi cartacei e non ha garanzie su backup, crittografia e conformità GDPR per i dati sanitari.",
  },
];

const features = [
  {
    icon: FileText,
    title: "Cartella ostetrica elettronica",
    description:
      "Anamnesi strutturata per gravidanza e ginecologia, diario clinico con timeline delle visite e storico completo consultabile in pochi clic. La cartella ostetrica elettronica è il cuore del software ginecologia Corioli.",
  },
  {
    icon: Calculator,
    title: "Calcolatori fetali integrati",
    description:
      "Età gestazionale, biometria fetale (BPD, HC, AC, FL), stima del peso fetale con algoritmo Hadlock, percentili e curve di crescita tutti nativi nella visita, senza app di terze parti.",
  },
  {
    icon: FileText,
    title: "Referti PDF pronti",
    description:
      "Genera referti ostetrici e ginecologici completi in PDF con un clic. I risultati dei calcolatori si inseriscono automaticamente nel documento, pronto per la stampa o l'invio alla paziente.",
  },
  {
    icon: Shield,
    title: "Consenso informato digitale",
    description:
      "Raccogli e archivia i consensi informati in modo tracciabile e conforme al GDPR. Niente più moduli cartacei dispersi: tutto collegato alla scheda paziente nel gestionale.",
  },
];

const genericComparison = [
  { feature: "Cartella ostetrica elettronica strutturata", corioli: true, generic: false },
  { feature: "Calcolatori fetali Hadlock integrati", corioli: true, generic: false },
  { feature: "Percentili e biometria nella visita", corioli: true, generic: false },
  { feature: "Referti PDF con dati clinici auto-compilati", corioli: true, generic: "Parziale" },
  { feature: "Consenso informato digitale nativo", corioli: true, generic: false },
  { feature: "Progettato per ginecologia e ostetricia", corioli: true, generic: false },
  { feature: "Agenda e fatturazione", corioli: "In sviluppo", generic: true },
  { feature: "Prova gratuita 90 giorni", corioli: true, generic: "Variabile" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="pt-40 md:pt-48 pb-24 bg-background">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
            Gestionale per Ginecologi e Ostetrici
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Corioli è il gestionale per ginecologi pensato per la visita
            specialistica: cartella ostetrica elettronica, calcolatori fetali e
            referti PDF in un unico software ginecologia cloud, sicuro e
            conforme al GDPR.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-soft hover:shadow-md text-base"
          >
            Inizia la prova gratuita <ArrowRight size={20} />
          </Link>
        </section>

        {/* Pain points */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                I problemi di chi lavora senza un gestionale dedicato
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

        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Funzionalità specifiche per ginecologia e ostetricia
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ogni strumento del software ginecologia Corioli è integrato
                nel flusso della visita, non aggiunto come modulo esterno.
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

        {/* Screenshot gallery */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
            <ScreenshotGallery />
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 md:py-28 bg-white border-y border-gray-100">
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
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="bg-brand-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Download size={28} className="text-white" />
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                  Prova gratuita di 90 giorni
                </h2>
                <p className="text-brand-100 text-lg mb-2 max-w-xl mx-auto">
                  Nessuna carta di credito richiesta. Usa Corioli nel tuo
                  ambulatorio reale con pazienti veri, calcolatori fetali e
                  cartella ostetrica elettronica complete.
                </p>
                <p className="text-brand-200 text-sm mb-10">
                  Piano Specialista da 15€/mese con fatturazione annuale ·
                  disdici quando vuoi
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

        {/* Internal links footer */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pt-8 border-t border-gray-100">
          <nav
            aria-label="Link correlati"
            className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500"
          >
            <Link
              href="/funzionalita"
              className="hover:text-brand-600 transition-colors"
            >
              Funzionalità
            </Link>
            <Link
              href="/prezzi"
              className="hover:text-brand-600 transition-colors"
            >
              Prezzi
            </Link>
            <Link
              href="/download"
              className="hover:text-brand-600 transition-colors"
            >
              Download
            </Link>
            <Link
              href="/blog/gestionale-per-ginecologi-cosa-cercare"
              className="hover:text-brand-600 transition-colors"
            >
              Guida alla scelta del gestionale
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
}
