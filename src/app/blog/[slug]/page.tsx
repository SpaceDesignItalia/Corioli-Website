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
    description:
      "Guida pratica per passare da carta, Word ed Excel a un gestionale medico per ginecologi con cartella clinica elettronica, referti e dati sicuri.",
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
    description:
      "Confronto tra Word, Excel e un gestionale medico per ginecologi: limiti dei documenti generici, rischi operativi e vantaggi della cartella clinica elettronica.",
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
    description:
      "Cosa valutare nel 2025 quando si sceglie una cartella clinica elettronica per studio medico: sicurezza, GDPR, backup, accessi e software cloud.",
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
  "migliori-software-gestionali-medici-italia": {
    title: "Migliori software gestionali per medici in Italia (2025)",
    description:
      "Guida ai migliori software gestionali per medici in Italia nel 2025: cosa valutare, differenze tra soluzioni generiche e verticali, e perché la specializzazione fa la differenza.",
    date: "10 Gennaio 2025",
    category: "Confronto",
    lead: "Scegliere il gestionale medico giusto non è facile: l'offerta è ampia, i prezzi variano molto e i dettagli che contano davvero emergono solo durante l'uso clinico quotidiano. Questa guida ti aiuta a orientarti.",
    sections: [
      {
        title: "Gestionali generici vs software medici verticali",
        body: "La maggior parte dei software sul mercato nasce per la gestione amministrativa: agenda, fatturazione, anagrafica. Funzionano bene per uno studio commerciale, ma faticano quando il medico ha bisogno di strutturare anamnesi cliniche, inserire calcolatori specialistici o recuperare rapidamente lo storico di una paziente in gravidanza. I software verticali, costruiti per una singola specializzazione, eliminano questa frizione alla radice.",
      },
      {
        title: "Cosa valutare prima di scegliere",
        body: "I criteri fondamentali sono: adattabilità al tuo flusso clinico, presenza di strumenti nativi per la tua specializzazione, sicurezza dei dati sanitari conforme al GDPR, qualità del supporto, presenza di backup automatici e costo reale mensile (inclusi i moduli extra). Un gestionale apparentemente economico può diventare costoso se richiede molti add-on.",
      },
      {
        title: "Perché Corioli nasce diverso",
        body: "Corioli è stato costruito osservando direttamente il lavoro di ginecologi e ostetrici in ambulatorio, non partendo da un modello amministrativo da adattare alla clinica. Il risultato è un software in cui l'anamnesi è strutturata per la specializzazione, i calcolatori (datazione, Hadlock, percentili, BMI) sono integrati nella visita e i referti escono in PDF pronti senza lavoro extra.",
      },
      {
        title: "Il fattore cloud",
        body: "Un gestionale cloud elimina la necessità di server locali, aggiornamenti manuali e backup fai-da-te. I dati sono disponibili da qualsiasi dispositivo, protetti da crittografia e con backup automatici georepliacati. Per uno studio medico privato, questo si traduce in meno rischi operativi e più continuità.",
      },
    ],
  },
  "cos-e-cartella-clinica-elettronica-come-sceglierla": {
    title: "Cos'è la cartella clinica elettronica e come sceglierla",
    description:
      "Guida completa alla cartella clinica elettronica per studi medici: differenze con la carta, vantaggi, criteri di scelta e cosa deve offrire un buon software medico.",
    date: "15 Gennaio 2025",
    category: "Guide",
    lead: "La cartella clinica elettronica è lo strumento centrale di qualsiasi studio medico moderno. Non è solo un archivio digitale: è il luogo in cui vive la storia clinica del paziente, strutturata in modo da essere utile durante la visita.",
    sections: [
      {
        title: "Cartella clinica cartacea vs elettronica",
        body: "La cartella cartacea è limitata: non si può cercare, confrontare nel tempo, trasmettere in sicurezza o proteggere da perdite. Una cartella clinica elettronica consente di filtrare lo storico, confrontare valori tra visite, generare referti strutturati e archiviare il consenso informato in modo tracciabile. Il guadagno di tempo e sicurezza è significativo già nelle prime settimane di utilizzo.",
      },
      {
        title: "Cosa deve contenere una buona cartella clinica elettronica",
        body: "Una cartella clinica elettronica efficace deve includere: anagrafica completa del paziente, anamnesi strutturata per la specializzazione, diario clinico con timeline delle visite, gestione dei referti in PDF, archiviazione sicura dei consensi e accesso controllato per eventuali collaboratori. Per la ginecologia e l'ostetricia servono anche strumenti specifici: datazione, biometria fetale, curve di crescita e percentili.",
      },
      {
        title: "I criteri tecnici che non si devono ignorare",
        body: "Sicurezza e conformità GDPR sono requisiti non negoziabili per i dati sanitari. Il software scelto deve garantire crittografia dei dati in transito e a riposo, backup automatici, log degli accessi e un contratto DPA che regolamenti il ruolo del fornitore come responsabile del trattamento. Soluzioni cloud su server europei sono preferibili per evitare complessità nei trasferimenti di dati extra-UE.",
      },
      {
        title: "Corioli come cartella clinica elettronica per specialisti",
        body: "Corioli è una cartella clinica elettronica cloud progettata per medici specialisti privati. Integra in un unico ambiente la gestione del paziente, l'anamnesi specializzata, i calcolatori clinici e la produzione di referti PDF. I dati sono protetti con crittografia, backup giornalieri e attenzione alla conformità GDPR.",
      },
    ],
  },
  "gestionale-medico-gdpr-cosa-deve-avere": {
    title: "Gestionale medico e GDPR: cosa deve avere per essere conforme",
    description:
      "Guida pratica alla conformità GDPR per studi medici: cosa deve garantire un gestionale medico in termini di sicurezza, accessi, backup e contratti per proteggere i dati dei pazienti.",
    date: "20 Gennaio 2025",
    category: "Normativa",
    lead: "I dati sanitari sono tra le informazioni più sensibili che esistano. Per un medico specialista privato, scegliere un gestionale non conforme al GDPR non è solo un rischio legale: è una responsabilità verso i propri pazienti.",
    sections: [
      {
        title: "Perché i dati sanitari richiedono attenzione speciale",
        body: "Il Regolamento Europeo sulla protezione dei dati (GDPR) classifica le informazioni relative alla salute come 'dati particolari', soggetti a requisiti di protezione rafforzati rispetto ai dati comuni. Questo significa che il medico, in quanto titolare del trattamento, è responsabile di adottare misure tecniche e organizzative adeguate.",
      },
      {
        title: "Crittografia, backup e controllo degli accessi",
        body: "Un gestionale medico conforme al GDPR deve cifrare i dati sia durante la trasmissione (TLS) che a riposo (AES-256), effettuare backup automatici e georepliacati, mantenere log degli accessi auditabili e permettere una gestione granulare dei permessi utente. Soluzioni che archiviano dati in chiaro o su sistemi locali non aggiornati non soddisfano questi requisiti.",
      },
      {
        title: "Il Data Processing Agreement (DPA)",
        body: "Quando il medico usa un software cloud, il fornitore diventa responsabile del trattamento dei dati. Il GDPR richiede che questa relazione sia formalizzata in un contratto DPA. Senza questo documento, il medico è esposto a responsabilità. Verificare che il fornitore del gestionale offra un DPA conforme è uno dei primi passi nella valutazione.",
      },
      {
        title: "Come Corioli gestisce la conformità",
        body: "Corioli include crittografia completa, backup giornalieri su server europei certificati, log degli accessi e fornisce un DPA precompilato per i propri clienti. Il modulo di raccolta del consenso informato digitale è integrato nativamente nel software, eliminando la necessità di archivi cartacei separati.",
      },
    ],
  },
  "come-sostituire-word-excel-studio-medico": {
    title: "Come sostituire Word e Excel nello studio medico",
    description:
      "Guida pratica per passare da Word ed Excel a un gestionale medico: come migrare i dati storici, eliminare la carta e migliorare il flusso clinico senza perdere nulla.",
    date: "28 Gennaio 2025",
    category: "Gestione Studio",
    lead: "Word e Excel sono strumenti potenti, ma non sono stati progettati per gestire pazienti, visite cliniche e referti medici. Molti studi li usano per abitudine, senza rendersi conto di quanto tempo si perda ogni giorno.",
    sections: [
      {
        title: "I limiti concreti di Word per i referti medici",
        body: "Con Word ogni referto si crea da zero o da un template che va aggiornato manualmente. Non esiste una connessione con l'anagrafica del paziente, con lo storico delle visite o con i calcolatori clinici. Il risultato è un archivio di file separati, difficile da consultare, impossibile da interrogare e vulnerabile a perdite accidentali.",
      },
      {
        title: "Excel per i dati clinici: perché non funziona",
        body: "Excel può sembrare pratico per tenere traccia di parametri nel tempo, ma manca di struttura clinica. Non distingue tra visite, non gestisce il consenso, non produce referti e non offre alcuna sicurezza per i dati sanitari. Il rischio di errori di inserimento e di perdita di dati è elevato.",
      },
      {
        title: "Come funziona la migrazione a un gestionale medico",
        body: "Il passaggio a un gestionale medico moderno non richiede di ripartire da zero. I dati storici dei pazienti (anche da Word, Excel o carta) possono essere importati o inseriti progressivamente. Corioli include un servizio di migrazione dei dati storici che permette di trasferire l'archivio esistente senza perdere continuità clinica.",
      },
      {
        title: "Il guadagno reale in ambulatorio",
        body: "I medici che passano a Corioli riportano di recuperare in media due ore al giorno di lavoro amministrativo. L'anamnesi si compila in modo guidato, i calcolatori clinici sono integrati nella visita e i referti escono in PDF pronti con un clic. Meno tempo al computer significa più attenzione al paziente.",
      },
    ],
  },
  "gestionale-per-ginecologi-cosa-cercare": {
    title: "Gestionale per ginecologi: cosa cercare nel 2025",
    description:
      "Guida alla scelta del gestionale medico per ginecologi: funzionalità cliniche, calcolatori ostetrici, cartella ostetrica elettronica, GDPR e differenze rispetto ai software generici.",
    date: "5 Febbraio 2025",
    category: "Ginecologia",
    lead: "Un ginecologo ha esigenze cliniche molto specifiche che un software generico non può soddisfare. Dalla biometria fetale alla curva di crescita, dalla cartella ostetrica al consenso informato: ogni visita richiede strumenti pensati per la specializzazione.",
    sections: [
      {
        title: "Perché i gestionali generici non bastano in ginecologia",
        body: "Un software nato per amministrare uno studio generico può gestire agenda e fatture, ma non supporta il flusso clinico di una visita ostetrica o ginecologica. Mancano l'anamnesi strutturata per gravidanza, i calcolatori per la datazione e la biometria, le curve di crescita fetale e i template di referto specializzati. Il medico finisce per usare app esterne e Word in parallelo, perdendo tempo e coerenza dei dati.",
      },
      {
        title: "Funzionalità indispensabili per un ginecologo",
        body: "Un gestionale per ginecologi deve includere: cartella ostetrica e ginecologica strutturata, calcolo automatico dell'età gestazionale, stima del peso fetale (Hadlock), percentili e biometria fetale, tracciamento del BMI e del delta peso materno, curve di crescita con grafici, generazione di referti PDF completi e gestione del consenso informato. Questi non sono optional: sono il cuore della visita specialistica.",
      },
      {
        title: "Il valore dei calcolatori clinici integrati",
        body: "Avere i calcolatori clinici dentro il gestionale elimina il bisogno di app separate e riduce il rischio di errori di trascrizione. I risultati si inseriscono direttamente nel referto, risparmiando minuti preziosi a ogni visita. Per un ambulatorio che fa 20 visite al giorno, questo si traduce in un'ora e mezza di lavoro in meno ogni giorno.",
      },
      {
        title: "Corioli per ginecologi e ostetrici",
        body: "Corioli nasce specificamente per ginecologia e ostetricia, sviluppato con la consulenza di specialisti delle migliori strutture italiane. Include tutti gli strumenti clinici elencati sopra, una cartella ostetrica elettronica completa, referti PDF personalizzabili e sicurezza cloud con attenzione alla conformità GDPR. La prova gratuita di 14 giorni permette di valutarlo nel proprio flusso clinico reale.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
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
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
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
            url: "https://corioli.it/logo_short.png",
          },
        },
        mainEntityOfPage: `https://corioli.it/blog/${params.slug}`,
      },
      {
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
            name: "Blog",
            item: "https://corioli.it/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://corioli.it/blog/${params.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Torna agli articoli
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 font-medium">
              {post.date}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-lg prose-brand max-w-none text-gray-700 leading-relaxed">
          <p className="lead text-xl text-gray-600 mb-8 font-medium">
            {post.lead}
          </p>

          <div className="my-10 p-8 bg-brand-50 rounded-2xl border border-brand-100">
            <p className="italic text-brand-900 font-heading text-xl mb-0">
              "Un gestionale medico utile non archivia soltanto dati: deve
              aiutare il medico a lavorare meglio durante la visita."
            </p>
          </div>

          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-gray-900">
                {section.title}
              </h2>
              <p className="mb-6">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="bg-brand-900 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h4 className="font-heading font-bold text-2xl text-white mb-3">
                Pronto a trasformare il tuo ambulatorio?
              </h4>
              <p className="text-brand-100 text-sm mb-8 max-w-md mx-auto">
                Scopri come Corioli può farti risparmiare ore di lavoro
                amministrativo con una demo gratuita di 15 minuti.
              </p>
              <Link
                href="/contatti"
                className="bg-white text-brand-900 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors inline-block text-sm shadow-md"
              >
                Richiedi una Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
