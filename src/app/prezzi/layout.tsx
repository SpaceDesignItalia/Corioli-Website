import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prezzi: gestionale medico da 15€/mese",
  description:
    "Piano Specialista da 15€/mese con fatturazione annuale (19€/mese mensile): cartella clinica elettronica illimitata, referti PDF e dati salvati nel tuo studio. Prova gratuita di 90 giorni senza carta di credito.",
  alternates: {
    canonical: "/prezzi",
  },
  openGraph: {
    title: "Prezzi Corioli | Gestionale medico da 15€/mese",
    description:
      "Un solo piano completo, 90 giorni di prova gratuita senza carta di credito e nessun vincolo contrattuale.",
    url: "https://corioli.it/prezzi",
  },
};

// FAQ mostrate nella pagina prezzi: replicate qui come structured data
// (la pagina è un client component e non può esporre JSON-LD in modo statico).
const pricingFaqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://corioli.it/prezzi#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "La prova gratuita di Corioli richiede la carta di credito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La prova gratuita di 90 giorni si attiva senza inserire alcun metodo di pagamento: al termine il medico decide liberamente se abbonarsi.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto costa Corioli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il Piano Specialista costa 15€ al mese con fatturazione annuale (180€/anno) oppure 19€ al mese con fatturazione mensile. I calcolatori clinici avanzati sono un modulo opzionale a 15€/mese, incluso gratuitamente nei 90 giorni di prova.",
      },
    },
    {
      "@type": "Question",
      name: "Cosa succede alla fine dei 90 giorni di prova?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non c'è alcun addebito automatico, perché la prova non richiede la carta di credito. Se il software convince, si sceglie il piano mensile o annuale; i dati inseriti durante la prova restano sul computer del medico.",
      },
    },
    {
      "@type": "Question",
      name: "Posso disdire l'abbonamento quando voglio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Non ci sono vincoli contrattuali né costi di attivazione: il piano mensile si disdice in qualsiasi momento, quello annuale semplicemente non si rinnova.",
      },
    },
    {
      "@type": "Question",
      name: "Dove vengono salvati i dati dei pazienti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In locale, sul computer o sulla rete dello studio. Corioli non raccoglie né trasmette i dati clinici dei pazienti: il medico ne mantiene il pieno controllo, in linea con il GDPR.",
      },
    },
    {
      "@type": "Question",
      name: "Posso importare i dati dal mio archivio attuale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Il servizio di migrazione dati storici (29€ una tantum) importa l'archivio esistente da Word, Excel, carta o altri gestionali medici.",
      },
    },
  ],
};

export default function PrezziLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingFaqStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      {children}
    </>
  );
}
