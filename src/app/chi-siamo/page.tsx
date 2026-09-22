import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  HardDrive,
  MapPin,
  Monitor,
  Printer,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import {
  SITE_URL,
  breadcrumbList,
  jsonLdProps,
  pageOpenGraph,
} from "@/lib/seo";

// Revisione di questa pagina: tenerla allineata al lastModified di
// /chi-siamo in src/app/sitemap.ts, come per STATIC_PAGES_UPDATED.
const PAGE_UPDATED = "2026-09-23";

export const metadata: Metadata = {
  title: "Chi siamo",
  description: "Corioli nasce da giornate passate accanto ai medici: un gestionale pensato per la pratica clinica, non per l'amministrazione. Chi siamo e come lavoriamo.",
  alternates: {
    canonical: "/chi-siamo",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Chi siamo | Corioli",
    description: "Come nasce Corioli e come lavoriamo: requisiti clinici dettati dai medici che refertano, dati dei pazienti salvati nello studio.",
    url: "https://corioli.it/chi-siamo",
  },
};

// AboutPage collegata all'entita Organization del layout: e la pagina che
// motori e assistenti usano per rispondere a "chi c'e dietro Corioli", e senza
// il collegamento esplicito resterebbe un testo qualsiasi del sito.
const chiSiamoStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Chi siamo", path: "/chi-siamo" }]),
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/chi-siamo#pagina`,
      url: `${SITE_URL}/chi-siamo`,
      name: "Chi siamo — Corioli",
      description:
        "Come nasce Corioli, gestionale medico con sede a Sesto Fiorentino, e come lavora: requisiti clinici dettati dai medici che refertano e dati dei pazienti salvati nello studio.",
      inLanguage: "it-IT",
      dateModified: PAGE_UPDATED,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

const facts = [
  { icon: MapPin, label: "Sede a Sesto Fiorentino (FI)" },
  { icon: Monitor, label: "App desktop per Windows e macOS" },
  { icon: HardDrive, label: "Dati dei pazienti salvati nello studio" },
];

// Ogni principio porta con sé la scelta di prodotto che lo dimostra. Le prove
// vengono dai README delle due app (Corioli e CorioliGenerale): prima di
// aggiungerne una, verificarla lì.
const principles = [
  {
    title: "La clinica prima dell'amministrazione.",
    proof:
      "Il referto segue l'ordine in cui il medico ragiona, non la grafica di un modulo da compilare.",
  },
  {
    title: "I dati restano nello studio.",
    proof:
      "Le cartelle dei pazienti stanno sul computer dell'ambulatorio, non sui nostri server.",
  },
  {
    title: "Zero click inutili.",
    proof:
      "In cardiologia terapia in atto e fattori di rischio passano da una visita alla successiva: si corregge solo quello che è cambiato.",
  },
  {
    title: "Meglio nessun numero che un numero sbagliato.",
    proof:
      "Lo SCORE2 è già scritto, ma resta spento finché i coefficienti non sono verificati sulla fonte primaria.",
  },
];

// Il metodo: ogni edizione si costruisce con un gruppo di specialisti, mai con
// un singolo consulente. I nomi dei medici non si pubblicano senza il loro
// consenso esplicito. La terza scheda cita solo funzioni verificate nelle app.
const method = [
  {
    icon: Users,
    title: "Un gruppo per ogni specialità",
    text: "Ogni edizione nasce dal confronto con più specialisti di quella disciplina, non da un unico consulente. Più medici vuol dire più feedback e punti di vista diversi sulla stessa visita.",
  },
  {
    icon: Printer,
    title: "Si prova sui referti veri",
    text: "Le modifiche si giudicano sulle visite di tutti i giorni e sui referti stampati, non su una demo: il foglio che esce dallo studio è quello che conta.",
  },
  {
    icon: SlidersHorizontal,
    title: "Opinioni diverse, software flessibile",
    text: "Due medici della stessa specialità non visitano allo stesso modo. Per questo l'anamnesi si configura per tipo di visita e, in cardiologia, i moduli strumentali si accendono uno per uno.",
  },
];

const editions = [
  {
    name: "Ginecologia e ostetricia",
    status: "Disponibile",
    text: "Cartella ostetrica elettronica, calcolatori fetali e referti PDF.",
    href: "/ginecologia",
    highlight: true,
  },
  {
    name: "Cardiologia",
    status: "Da ottobre 2026",
    text: "Elettrocardiogramma, ecocardiogramma e TC coronarica, con indici calcolati di supporto.",
    href: "/cardiologia",
    highlight: false,
  },
  {
    name: "Pediatria",
    status: "In sviluppo",
    text: "Curve di crescita, calendario vaccinale e bilanci di salute. Nessuna data annunciata.",
    href: null,
    highlight: false,
  },
];

export default function ChiSiamoPage() {
  return (
    <div className="pt-40 md:pt-48 pb-24 bg-background">
      <script {...jsonLdProps(chiSiamoStructuredData)} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Nati per risolvere <span className="text-brand-600">un&apos;anomalia.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance mb-10">
          Molti medici specialisti gestiscono ancora l&apos;ambulatorio con Word, Excel o la carta. Non perché manchino i software, ma perché quasi tutti sono pensati per l&apos;amministrazione dello studio, non per la visita.
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {facts.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-soft text-sm font-medium text-gray-700"
            >
              <Icon size={16} className="text-brand-600 shrink-0" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Da dove partiamo</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Corioli è nato da un&apos;osservazione diretta sul campo. Abbiamo affiancato ginecologi e ostetrici durante le loro giornate, contando i click inutili, i copia-incolla rischiosi e i minuti persi a formattare documenti.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Abbiamo deciso di costruire l&apos;esatto opposto: un software che segue il modo in cui il medico ragiona durante la visita, e non il contrario. Oggi applichiamo lo stesso metodo alla cardiologia.
            </p>
          </div>
          <div className="bg-brand-50 rounded-3xl p-8 md:p-10 border border-brand-100 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-[40px]"></div>
            <div className="relative text-brand-600 font-bold text-sm uppercase tracking-wider mb-8">I nostri principi</div>
            <ol className="relative flex flex-col gap-6">
              {principles.map((principle, index) => (
                <li key={principle.title} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-brand-600 text-sm font-bold shadow-sm shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <div className="font-heading text-xl font-bold text-gray-900 leading-snug">
                      {principle.title}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      {principle.proof}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-600 font-bold text-sm uppercase tracking-wider mb-4">Come lavoriamo</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Più medici, più punti di vista</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Progettiamo e sviluppiamo Corioli internamente, ma i requisiti clinici non li scriviamo da soli. Per ogni specialità lavoriamo con un team di medici: è il modo per avere più feedback e opinioni diverse, invece di costruire il software sulle abitudini di una sola persona.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {method.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl mb-6 flex items-center justify-center text-brand-600">
                <Icon size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-gray-100 order-last md:order-first">
            <Image
              src="/blog/corioli-congresso-miomi-stand.jpg"
              alt="Lo stand Corioli al congresso sui miomi uterini, con il roll-up 'Tu visiti. Corioli referta.'"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, 600px"
              className="w-full h-auto"
            />
          </div>
          <div>
            <div className="text-brand-600 font-bold text-sm uppercase tracking-wider mb-4">Sul campo, non solo online</div>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Incontriamo i medici di persona</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Non costruiamo Corioli a porte chiuse. Lo portiamo ai congressi, accanto ai ginecologi e agli ostetrici che lo usano ogni giorno: è lì che raccogliamo i dubbi, le richieste e le idee che diventano le prossime funzionalità.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              L&apos;ultima tappa è stata il congresso sui miomi uterini, dove abbiamo passato una giornata intera allo stand a mostrare il software dal vivo. Te lo raccontiamo nel dettaglio sul blog.
            </p>
            <Link
              href="/blog/corioli-congresso-miomi-uterini-2026"
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 hover:text-brand-800 transition-colors group"
            >
              Leggi com&apos;è andata al congresso
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">A che punto siamo</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Un&apos;edizione per ogni specialità, perché ogni specialità visita e referta in modo diverso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editions.map((edition) => {
            const body = (
              <>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                    edition.highlight
                      ? "bg-brand-600 text-white"
                      : "bg-brand-50 text-brand-700"
                  }`}
                >
                  {edition.status}
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{edition.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{edition.text}</p>
                {edition.href && (
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                    Scopri l&apos;edizione <ArrowRight size={16} />
                  </span>
                )}
              </>
            );
            return edition.href ? (
              <Link
                key={edition.name}
                href={edition.href}
                className="group block bg-white rounded-2xl border border-gray-100 p-8 shadow-soft hover:shadow-card transition-shadow"
              >
                {body}
              </Link>
            ) : (
              <div
                key={edition.name}
                className="bg-white/60 rounded-2xl border border-dashed border-gray-200 p-8"
              >
                {body}
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="bg-brand-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Provalo nel tuo ambulatorio
            </h2>
            <p className="text-brand-100 text-lg mb-2 max-w-xl mx-auto">
              30 giorni di prova gratuita, senza carta di credito. Se hai domande o vuoi vederlo prima, scrivici.
            </p>
            <p className="text-brand-200 text-sm mb-10">
              Corioli · Sesto Fiorentino (FI) · P.IVA IT07420400488
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 bg-white text-brand-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-md text-base"
              >
                <Download size={20} /> Scarica e inizia la prova
              </Link>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors text-base"
              >
                Scrivici <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
