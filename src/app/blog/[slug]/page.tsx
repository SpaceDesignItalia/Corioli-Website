import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type BlogPost = {
  title: string;
  description: string;
  date: string;
  category: string;
  lead: string;
  sections: {
    title: string;
    body: string;
  }[];
};

const posts: Record<string, BlogPost> = {
  "come-digitalizzare-lo-studio-ginecologico": {
    title: "Come digitalizzare lo studio ginecologico: la guida definitiva",
    description: "Guida pratica per passare da carta, Word ed Excel a un gestionale medico per ginecologi con cartella clinica elettronica, referti e dati sicuri.",
    date: "24 Maggio 2024",
    category: "Gestione Studio",
    lead: "Digitalizzare uno studio ginecologico non significa solo sostituire la carta con uno schermo. Significa costruire un flusso clinico più ordinato, veloce e sicuro per medico, segreteria e paziente.",
    sections: [
      {
        title: "Da dove partire",
        body: "Il primo passo è identificare le attività ripetitive: anamnesi, referti, recupero dello storico, calcolo della datazione, archiviazione dei consensi e produzione dei PDF. Un gestionale medico efficace deve ridurre questi passaggi, non aggiungerne di nuovi.",
      },
      {
        title: "Perché un gestionale generico non basta",
        body: "Un software amministrativo può aiutare su agenda e fatture, ma la visita ginecologica richiede strumenti clinici verticali: cartella ostetrica, curve di crescita, percentili, biometria fetale, BMI, referti strutturati e dati consultabili nel tempo.",
      },
      {
        title: "Il ruolo di Corioli",
        body: "Corioli nasce come gestionale medico cloud per specialisti, con un modulo dedicato a ginecologia e ostetricia. L'obiettivo è portare in un unico ambiente cartella clinica elettronica, calcolatori clinici, refertazione e sicurezza GDPR.",
      },
    ],
  },
  "gestionale-medico-vs-word-ginecologi": {
    title: "Gestionale medico vs Word: perché i ginecologi cambiano",
    description: "Confronto tra Word, Excel e un gestionale medico per ginecologi: limiti dei documenti generici, rischi operativi e vantaggi della cartella clinica elettronica.",
    date: "12 Maggio 2024",
    category: "Tecnologia",
    lead: "Word è familiare, ma non è un gestionale medico. Per uno studio ginecologico, usare documenti separati può creare archivi fragili, referti non strutturati e molto lavoro manuale.",
    sections: [
      {
        title: "Il costo nascosto del copia-incolla",
        body: "Ogni referto creato da zero richiede formattazione, recupero dati, ricerca dello storico e controlli manuali. Nel tempo, questi minuti diventano ore sottratte alla visita e aumentano il rischio di errori.",
      },
      {
        title: "La differenza della cartella clinica elettronica",
        body: "Una cartella clinica elettronica conserva dati strutturati, confrontabili e recuperabili. Peso, settimane gestazionali, percentili, anamnesi e referti non restano dispersi in file separati, ma diventano parte dello storico clinico.",
      },
      {
        title: "Quando passare a Corioli",
        body: "Corioli è indicato quando il medico vuole superare Word, Excel e carta con un software per dottori pensato per la pratica clinica specialistica, non solo per l'amministrazione dello studio.",
      },
    ],
  },
  "cartella-clinica-elettronica-obbligatoria-2025": {
    title: "Cartella clinica elettronica: cosa cambia nel 2025?",
    description: "Cosa valutare nel 2025 quando si sceglie una cartella clinica elettronica per studio medico: sicurezza, GDPR, backup, accessi e software cloud.",
    date: "3 Maggio 2024",
    category: "Normativa",
    lead: "La gestione digitale dei dati sanitari richiede sempre più attenzione a privacy, sicurezza e tracciabilità. Per gli studi medici privati, la cartella clinica elettronica deve essere scelta con criteri clinici e tecnici.",
    sections: [
      {
        title: "Dati sanitari e responsabilità",
        body: "Le informazioni sulla salute sono dati particolari e vanno protette con misure adeguate. Archivi locali non protetti, documenti sparsi e backup manuali possono diventare un problema operativo e legale.",
      },
      {
        title: "Cosa cercare in un software medico",
        body: "Un buon gestionale medico dovrebbe offrire accessi controllati, crittografia, backup, continuità operativa, ruoli utente e un modello chiaro di trattamento dei dati. La semplicità d'uso non deve sacrificare la sicurezza.",
      },
      {
        title: "Come si posiziona Corioli",
        body: "Corioli è progettato per studi specialistici che vogliono una cartella clinica elettronica cloud con referti, dati strutturati, sicurezza e attenzione alla conformità GDPR.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug];

  if (!post) {
    return {
      title: "Articolo non trovato",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://corioli.it/blog/${params.slug}`,
      publishedTime: "2024-05-24",
      authors: ["Corioli"],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: "2024-05-24",
    dateModified: "2024-05-24",
    inLanguage: "it-IT",
    author: {
      "@type": "Organization",
      name: "Corioli",
      url: "https://corioli.it",
    },
    publisher: {
      "@type": "Organization",
      name: "Corioli",
      logo: {
        "@type": "ImageObject",
        url: "https://corioli.it/logo-icon.png",
      },
    },
    mainEntityOfPage: `https://corioli.it/blog/${params.slug}`,
  };

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors mb-12">
          <ArrowLeft size={16} /> Torna agli articoli
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">{post.category}</span>
            <span className="text-sm text-gray-500 font-medium">{post.date}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
        </div>

        <div className="prose prose-lg prose-brand max-w-none text-gray-700 leading-relaxed">
          <p className="lead text-xl text-gray-600 mb-8 font-medium">
            {post.lead}
          </p>

          <div className="my-10 p-8 bg-brand-50 rounded-2xl border border-brand-100">
            <p className="italic text-brand-900 font-heading text-xl mb-0">
              "Un gestionale medico utile non archivia soltanto dati: deve aiutare il medico a lavorare meglio durante la visita."
            </p>
          </div>

          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-gray-900">{section.title}</h2>
              <p className="mb-6">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
           <div className="bg-brand-900 rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-2xl text-white mb-3">Pronto a trasformare il tuo ambulatorio?</h4>
                <p className="text-brand-100 text-sm mb-8 max-w-md mx-auto">Scopri come Corioli può farti risparmiare ore di lavoro amministrativo con una demo gratuita di 15 minuti.</p>
                <Link href="/contatti" className="bg-white text-brand-900 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors inline-block text-sm shadow-md">
                  Richiedi una Demo
                </Link>
              </div>
           </div>
        </div>
      </div>
    </article>
  );
}
