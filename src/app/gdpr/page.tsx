import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import { Shield, Server, FileCheck, Lock } from "lucide-react";
import { SITE_URL, breadcrumbList, jsonLdProps, pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gestionale medico GDPR e sicurezza dati sanitari",
  description: "Dati sanitari e GDPR: perché con Corioli le cartelle restano nello studio, chi è titolare del trattamento e quando serve un DPA con il fornitore.",
  alternates: {
    canonical: "/gdpr",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Corioli GDPR | Sicurezza per gestionale medico",
    description: "Privacy by design: dati sanitari in locale, sotto il pieno controllo del medico.",
    url: "https://corioli.it/gdpr",
  },
};

// Le domande che i medici pongono davvero prima di firmare, e che gli
// assistenti conversazionali ricevono nella stessa forma ("serve un DPA con il
// fornitore?"). Sono mostrate in pagina e dichiarate come FAQPage: il markup
// vale solo se le due cose restano allineate.
const gdprFaqs = [
  {
    question: "Dove sono salvati i dati dei pazienti con Corioli?",
    answer:
      "Sul computer o sulla rete locale dello studio. Le cartelle cliniche, i referti e i calcoli non vengono trasmessi a server esterni e Corioli non vi accede in alcun modo. Non esiste un archivio pazienti lato fornitore, quindi non esiste nemmeno il rischio che una violazione dei nostri sistemi esponga i dati clinici dei tuoi pazienti.",
  },
  {
    question: "Serve firmare un DPA con Corioli?",
    answer:
      "Per il funzionamento standard del software no, perché non c'è un trattamento svolto per tuo conto: i dati clinici restano nello studio e il fornitore non li tratta. L'accordo ex articolo 28 del GDPR serve quando un fornitore agisce come responsabile del trattamento, tipicamente ospitando l'archivio sui propri server. Con l'archiviazione locale quel soggetto non c'è.",
  },
  {
    question: "Chi è il titolare del trattamento dei dati dei pazienti?",
    answer:
      "Il medico o la struttura. Sei tu a determinare finalità e mezzi del trattamento: quali dati raccogliere, per quanto conservarli e con quali strumenti. La scelta di un software non trasferisce questa responsabilità, ma può ridurre il numero di soggetti coinvolti — ed è esattamente quello che fa un archivio che non lascia lo studio.",
  },
  {
    question: "Un software può essere «conforme al GDPR»?",
    answer:
      "In senso stretto no: la conformità riguarda il trattamento, non il programma. Quello che un software può fare è renderla più semplice da raggiungere e da dimostrare — limitando i dati che escono dallo studio, riducendo i soggetti coinvolti e documentando consensi e accessi. Corioli è progettato con questo criterio, ma gli adempimenti restano in capo al titolare.",
  },
  {
    question: "I dati clinici escono dall'Unione Europea?",
    answer:
      "No. Con l'archiviazione locale non ci sono trasferimenti di dati clinici verso l'estero, né i relativi adempimenti: i dati risiedono fisicamente dove lavori, nel tuo studio in Italia.",
  },
  {
    question: "Con l'archiviazione locale chi si occupa del backup?",
    answer:
      "Il medico. È il rovescio onesto della medaglia: quando i dati non stanno sui server di un fornitore, la continuità dell'archivio dipende dallo studio. Corioli esegue backup automatici in locale, ma la politica complessiva — una copia fuori sede, la rotazione, il test di ripristino — resta una scelta organizzativa dello studio.",
  },
];

const gdprStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Sicurezza e GDPR", path: "/gdpr" }]),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/gdpr#faq`,
      mainEntity: gdprFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function GDPRPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <script {...jsonLdProps(gdprStructuredData)} />

      <div className="max-w-5xl mx-auto px-6 md:px-12">

        <div className="mb-16 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
              <Shield size={16} /> Privacy & Sicurezza
           </div>
           <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Dati sanitari e GDPR: tutto resta nel tuo studio.</h1>
           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
             Il nostro impegno per la sicurezza dei dati sanitari. Sviluppato nativamente seguendo i principi di Privacy by Design.
           </p>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-soft mb-12">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900">Perché i medici scelgono Corioli per la compliance</h2>
          <p className="text-gray-600 leading-relaxed">
            Trattare dati relativi alla salute (dati particolari ex art. 9 GDPR) richiede precauzioni tecniche e legali rigorose. Corioli adotta l&apos;approccio più radicale possibile alla minimizzazione: i dati clinici dei tuoi pazienti non lasciano mai il tuo studio. Sono salvati in locale, sul computer o sulla rete dello studio, e Corioli non vi ha accesso in alcun modo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
               <Lock size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">Archiviazione locale</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Tutti i dati clinici — visite, referti, calcoli biometrici — sono salvati esclusivamente sul computer o sulla rete locale del tuo studio. Nessun archivio su server esterni, nessuna copia fuori dal tuo controllo.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
               <FileCheck size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">Tu sei l&apos;unico Titolare</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Poiché nessun dato clinico viene trasferito ai nostri sistemi, resti l&apos;unico Titolare del Trattamento dei dati dei tuoi pazienti: per il funzionamento standard del software non serve nemmeno stipulare un DPA con Corioli. Meno adempimenti, meno soggetti coinvolti.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
               <Shield size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">Nessun accesso di terzi</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Corioli (l&apos;azienda) non raccoglie, non memorizza e non trasmette le informazioni cliniche o personali dei tuoi pazienti. Il rischio di violazioni lato fornitore è eliminato alla radice, perché i dati semplicemente non ci arrivano.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
               <Server size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">Nessun trasferimento extra-UE</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Con l&apos;archiviazione locale non esistono trasferimenti di dati clinici verso l&apos;estero, né i complessi adempimenti che ne derivano: i dati risiedono fisicamente dove lavori, nel tuo studio in Italia.</p>
          </div>

        </div>

        <div className="bg-brand-900 text-white rounded-3xl p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
             <h2 className="font-heading text-2xl font-bold mb-4">Modulo Consenso Integrato</h2>
             <p className="text-brand-100 leading-relaxed mb-0 max-w-3xl">
               Il nostro software include un modulo nativo per la raccolta digitale e la storicizzazione inalterabile del consenso informato privacy dei pazienti, eliminando la necessità di infiniti archivi cartacei e facilitando l'esibizione immediata in caso di controlli dell'autorità.
             </p>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Domande frequenti su GDPR e dati sanitari
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
            Le domande che i medici ci pongono prima di adottare Corioli, con le
            risposte che diamo per iscritto.
          </p>

          <FaqList items={gdprFaqs} />

          <p className="text-sm text-gray-500 mt-8">
            I termini normativi ricorrenti — titolare e responsabile del
            trattamento, dati particolari, privacy by design, conservazione della
            documentazione sanitaria — sono definiti nel{" "}
            <Link
              href="/glossario#normativa"
              className="text-brand-600 font-medium hover:text-brand-800 underline underline-offset-2 transition-colors"
            >
              glossario
            </Link>
            .
          </p>
        </section>

      </div>
    </div>
  );
}
