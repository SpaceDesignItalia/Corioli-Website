// Utilita condivise per i dati strutturati.
//
// Prima ogni pagina ripeteva a mano l'URL del sito, la costruzione del
// breadcrumb e l'escape di "<" dentro il JSON-LD. Sono tre cose che se
// divergono non danno errore: producono semplicemente markup incoerente, che i
// motori e gli assistenti leggono come entita diverse.

export const SITE_URL = "https://corioli.it";

// Data dell'ultima revisione sostanziale delle pagine statiche. Alimenta
// dateModified nei dati strutturati: per i motori di risposta la freschezza
// dichiarata e uno dei segnali con cui scelgono quale fonte citare.
// Tenere allineata a STATIC_PAGES_UPDATED in src/app/sitemap.ts.
export const STATIC_PAGES_UPDATED = "2026-09-22";

// Base per l'openGraph di ogni pagina. Next non fonde openGraph fra layout e
// pagina: una pagina che definisce il proprio openGraph perde tutto quello del
// layout, compresa l'immagine generata da app/opengraph-image.tsx. Senza
// questa base le anteprime su WhatsApp, LinkedIn e Facebook uscivano senza
// immagine per tutte le pagine tranne la home e gli articoli.
export const pageOpenGraph = {
  siteName: "Corioli",
  locale: "it_IT",
  type: "website" as const,
  images: [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Corioli — Gestionale medico per specialisti",
    },
  ],
};

type BreadcrumbStep = { name: string; path: string };

// BreadcrumbList: dice a motori e assistenti dove si colloca la pagina
// nell'albero del sito, invece di lasciarglielo dedurre dall'URL.
export function breadcrumbList(steps: BreadcrumbStep[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...steps.map((step, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: step.name,
        item: `${SITE_URL}${step.path}`,
      })),
    ],
  };
}

// L'escape di "<" evita che una stringa nel JSON possa chiudere il tag script.
export function jsonLdProps(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: {
      // Serve la barra doppia: con una sola, nel sorgente la sequenza e gia il
      // carattere "<" e la sostituzione non cambiava niente.
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}
