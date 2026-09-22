import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostHogConsent from "@/components/PostHogConsent";
import GoogleAdsTag from "@/components/GoogleAdsTag";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const siteUrl = "https://corioli.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Corioli",
  title: {
    default: "Corioli | Gestionale medico per specialisti",
    template: "%s | Corioli",
  },
  description:
    "Gestionale medico per specialisti: cartella clinica elettronica, referti PDF e calcolatori clinici, con i dati salvati nel tuo studio. Ginecologia, cardiologia.",
  alternates: {
    canonical: "/",
  },
  icons: {
    // Sotto i 48px l'icona piccola a 3 anelli (favicon.ico e icon.svg, che nel
    // tema scuro passa al verde chiaro); da 192px in su l'icona dell'app.
    // favicon.ico dichiara 32x32 e non "any": con "any" Chrome lo preferisce
    // all'SVG. I file icon-16/32/48.png restano per chi li linka direttamente.
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  keywords: [
    "gestionale medico",
    "software gestionale medico",
    "gestionale per medici",
    "gestionale studio medico",
    "software per dottori",
    "cartella clinica elettronica",
    "software medico per Windows",
    "gestionale ambulatorio medico",
    "software gestionale ginecologi",
    "gestionale medico specialista",
    "cartella clinica elettronica ginecologia",
    "software ostetricia",
    "software pediatria",
    "gestionale per cardiologi",
    "software cardiologia",
    "cartella clinica cardiologica",
    "refertazione ECG",
    "software ambulatorio cardiologico",
    "gestionale medico GDPR",
    "gestionale medico Italia",
    "gestionale medico offline",
    "gestionale medico senza cloud",
    "software medico dati in locale",
    "cartella ostetrica elettronica",
    "software refertazione medica",
    "consenso informato digitale",
    "conservazione cartella clinica",
    "backup studio medico",
    "alternativa a Word per referti medici",
  ],
  authors: [{ name: "Corioli" }],
  creator: "Corioli",
  publisher: "Corioli",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Corioli | Gestionale medico per specialisti",
    description:
      "Software gestionale medico per dottori e studi specialistici: cartella clinica elettronica, referti, calcolatori clinici e dati al sicuro nel tuo studio.",
    url: siteUrl,
    siteName: "Corioli",
    // L'immagine e generata da app/opengraph-image.tsx (convenzione Next.js).
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corioli | Gestionale medico per specialisti",
    description:
      "Cartella clinica elettronica, referti e calcolatori clinici per studi medici specialistici.",
    // L'immagine e generata da app/twitter-image.tsx (convenzione Next.js).
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Corioli",
      url: siteUrl,
      logo: `${siteUrl}/logo_short.png`,
      image: `${siteUrl}/logo_short.png`,
      vatID: "IT07420400488",
      slogan: "Tu visiti. Corioli referta.",
      email: "info@corioli.it",
      telephone: "+39 393 800 1284",
      areaServed: "IT",
      description:
        "Corioli sviluppa gestionali medici desktop per studi specialistici privati italiani, con i dati clinici salvati in locale nello studio.",
      // knowsAbout: aiuta motori e assistenti a collegare l'entita Corioli ai
      // temi su cui e pertinente, invece di dedurli solo dal testo delle pagine.
      knowsAbout: [
        "Gestionale medico",
        "Cartella clinica elettronica",
        "Software per studi medici specialistici",
        "Ginecologia e ostetricia",
        "Cardiologia",
        "Refertazione medica",
        "Conformita GDPR in ambito sanitario",
        "Archiviazione locale dei dati sanitari",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sesto Fiorentino",
        addressRegion: "FI",
        addressCountry: "IT",
      },
      // Profili ufficiali: aiutano i motori a collegare il sito all'entita
      // Corioli invece di trattarli come account omonimi scollegati.
      sameAs: [
        "https://www.linkedin.com/company/corioli",
        "https://www.instagram.com/corioli.it",
        "https://www.youtube.com/channel/UCZhXFRRBXnyjidLI1umX7YQ",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@corioli.it",
        telephone: "+39 393 800 1284",
        contactType: "sales",
        areaServed: "IT",
        availableLanguage: "Italian",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Corioli",
      inLanguage: "it-IT",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Sito ufficiale di Corioli, gestionale medico per dottori e studi specialistici.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Corioli",
      url: siteUrl,
      applicationCategory: "MedicalBusinessSoftware",
      applicationSubCategory: "Cartella clinica elettronica",
      operatingSystem: "Windows 10, Windows 11, macOS 10.13+",
      inLanguage: "it-IT",
      countriesSupported: "IT",
      downloadUrl: `${siteUrl}/download`,
      softwareHelp: `${siteUrl}/funzionalita`,
      screenshot: [
        `${siteUrl}/screenshots/dashboard.png`,
        `${siteUrl}/screenshots/ostetrica.png`,
        `${siteUrl}/screenshots/paziente.png`,
      ],
      // A chi si rivolge: senza questo, un assistente che deve decidere se
      // Corioli e pertinente a "software per il mio ambulatorio" lo deduce solo
      // dal testo delle pagine.
      audience: {
        "@type": "MedicalAudience",
        audienceType:
          "Medici specialisti privati, studi medici e ambulatori specialistici in Italia",
        geographicArea: {
          "@type": "Country",
          name: "Italia",
        },
      },
      offers: {
        "@type": "Offer",
        price: "30",
        priceCurrency: "EUR",
        url: `${siteUrl}/prezzi`,
        availability: "https://schema.org/InStock",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Gestionale medico per specialisti con cartella clinica elettronica, refertazione PDF, calcolatori clinici e dati salvati in locale nello studio, nel rispetto del GDPR.",
      featureList: [
        "Cartella clinica elettronica per specialisti",
        "Refertazione PDF",
        "Calcolatori clinici per ginecologia, ostetricia e cardiologia",
        "Moduli verticali per specializzazione",
        "Dati salvati in locale nello studio",
        "Privacy by design e conformità GDPR",
      ],
      // I moduli verticali sono entita a se, descritte nelle rispettive pagine:
      // il collegamento evita che risultino tre software scollegati.
      hasPart: [
        { "@id": `${siteUrl}/ginecologia#software-ginecologia` },
        { "@id": `${siteUrl}/cardiologia#software-cardiologia` },
      ],
    },
  ],
};
// Nota: i dati strutturati FAQPage NON stanno qui. Google richiede che le
// domande siano visibili nella pagina che le dichiara, mentre il layout viene
// applicato a tutto il sito: il markup finiva su pagine prive di FAQ e andava
// in conflitto con le FAQPage dei singoli articoli. Ora vivono nella home
// (src/app/page.tsx) e nelle pagine che mostrano davvero le domande.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden`}
      >
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="6ea9c7eb-19a6-4e10-b204-6ab67ad949eb"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />
        {/* Le versioni in testo piano per gli assistenti conversazionali,
            dichiarate nell'head di ogni pagina (React le solleva da qui).
            Non stanno in `alternates` dei metadata perche quel campo viene
            sostituito per intero dalle pagine che definiscono il proprio
            canonical: sarebbero comparse solo in home. */}
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteUrl}/llms.txt`}
          title="Corioli — scheda di sintesi per assistenti IA"
        />
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteUrl}/llms-full.txt`}
          title="Corioli — testo integrale del sito e del blog"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <PostHogConsent />
        <GoogleAdsTag />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
