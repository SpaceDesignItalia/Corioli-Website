import type { Metadata } from "next";
import { Inter, Outfit, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", style: "italic" });

export const metadata: Metadata = {
  title: "Corioli | La gestione clinica avanzata per specialisti",
  description: "Software gestionale cloud nativo per medici specialisti privati. Cartella clinica elettronica pensata per ginecologia, ostetricia e pediatria.",
  icons: {
    icon: "/logo-icon.png",
  },
  keywords: ["software gestionale ginecologi", "gestionale medico specialista", "cartella clinica elettronica ginecologia", "software ostetricia", "gestionale ambulatorio medico italia"],
  openGraph: {
    title: "Corioli | Gestionale Medico Specialista",
    description: "La gestione clinica avanzata. L'unico gestionale costruito nativamente per la tua specializzazione.",
    url: "https://corioli.it",
    siteName: "Corioli",
    images: [
      {
        url: "https://corioli.it/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${newsreader.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
