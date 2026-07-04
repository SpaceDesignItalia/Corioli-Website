import type { Metadata } from "next";
import { Inter, Outfit, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostHogConsent from "@/components/PostHogConsent";
import GoogleAdsTag from "@/components/GoogleAdsTag";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  adjustFontFallback: false,
});

const siteUrl = "https://corioli.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Corioli",
  title: {
    default: "Corioli | Gestionale medico per specialisti",
    template: "%s | Corioli",
  },
  description:
    "Corioli è il gestionale medico per dottori e studi specialistici: cartella clinica elettronica, referti, calcolatori clinici, dati salvati in locale nel tuo studio e conformità GDPR, con moduli per ginecologia, ostetricia e pediatria.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo_short.png", sizes: "512x512", type: "image/png" },
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
    "gestionale medico GDPR",
    "gestionale medico Italia",
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
      operatingSystem: "Windows 10, Windows 11",
      inLanguage: "it-IT",
      offers: {
        "@type": "Offer",
        price: "15",
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
        "Calcolatori clinici per ginecologia, ostetricia e pediatria",
        "Dati salvati in locale nello studio",
        "Privacy by design e conformità GDPR",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Che cos'e Corioli?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Corioli è un gestionale medico per dottori e studi specialistici, pensato per cartella clinica elettronica, referti, calcolatori clinici e gestione sicura dei dati sanitari, salvati in locale nello studio.",
          },
        },
        {
          "@type": "Question",
          name: "Per quali medici e pensato Corioli?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Corioli nasce per medici specialisti privati, con moduli verticali per ginecologia, ostetricia e pediatria. È compatibile con Windows 10 e Windows 11.",
          },
        },
        {
          "@type": "Question",
          name: "Corioli e conforme al GDPR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Corioli è progettato secondo il principio di privacy by design: i dati clinici restano salvati in locale sul computer dello studio, non vengono trasmessi a server esterni e il medico ne mantiene il pieno controllo come unico titolare del trattamento.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${newsreader.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden`}
      >
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="6ea9c7eb-19a6-4e10-b204-6ab67ad949eb"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
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
