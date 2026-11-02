import Link from "next/link";
import Image from "next/image";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        <div className="md:col-span-12 lg:col-span-4 pr-8">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/corioli-logo.svg"
              alt="Corioli"
              width={395}
              height={120}
              className="h-10 w-auto"
              unoptimized
            />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Il software gestionale che restituisce tempo prezioso ai
            medici specialisti privati, migliorando la qualità del lavoro in
            ambulatorio.
          </p>
          <div className="flex gap-4">
             <Link href="https://www.linkedin.com/company/corioli" target="_blank" rel="noopener noreferrer" aria-label="Corioli su LinkedIn" className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 hover:bg-[#0A66C2] hover:text-white hover:-translate-y-1 cursor-pointer transition-all shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </Link>
             <Link href="https://www.youtube.com/channel/UCZhXFRRBXnyjidLI1umX7YQ" target="_blank" rel="noopener noreferrer" aria-label="Corioli su YouTube" className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 hover:bg-[#FF0000] hover:text-white hover:-translate-y-1 cursor-pointer transition-all shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 69.04 69.04 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 69.04 69.04 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
             </Link>
             <Link href="https://www.instagram.com/corioli.it" target="_blank" rel="noopener noreferrer" aria-label="Corioli su Instagram" className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 hover:bg-[#E1306C] hover:text-white hover:-translate-y-1 cursor-pointer transition-all shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
             </Link>
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
          <h2 className="font-heading text-base font-semibold text-gray-900 mb-6">
            Prodotto
          </h2>
          <ul className="flex flex-col gap-2 text-gray-500 text-sm">
            <li>
              <Link
                href="/funzionalita"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Funzionalità gestionale medico
              </Link>
            </li>
            <li>
              <Link
                href="/specializzazioni"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Specializzazioni mediche
              </Link>
            </li>
            <li>
              <Link
                href="/ginecologia"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Gestionale per ginecologi
              </Link>
            </li>
            <li>
              <Link
                href="/cardiologia"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Gestionale per cardiologi
              </Link>
            </li>
            <li>
              <Link
                href="/prezzi"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Prezzi
              </Link>
            </li>
            <li>
              <Link
                href="/download"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Inizia la prova
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-2">
          <h2 className="font-heading text-base font-semibold text-gray-900 mb-6">
            Approfondimenti
          </h2>
          <ul className="flex flex-col gap-2 text-gray-500 text-sm">
            <li>
              <Link
                href="/blog/gestionale-per-ginecologi-cosa-cercare"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                {/* "Guida" li distingue dalle pagine di prodotto con lo stesso
                    nome nella colonna accanto. */}
                Guida per ginecologi
              </Link>
            </li>
            {/* Prima qui c'erano due articoli brevi del 2025: il footer è su
                ogni pagina, quindi questi link vanno alle guide più complete. */}
            <li>
              <Link
                href="/blog/gestionale-per-cardiologi-cosa-cercare"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Guida per cardiologi
              </Link>
            </li>
            <li>
              <Link
                href="/blog/gestionale-medico-locale-o-cloud"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Gestionale locale o in cloud
              </Link>
            </li>
            <li>
              <Link
                href="/glossario"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Glossario
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Tutti gli articoli
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-2">
          <h2 className="font-heading text-base font-semibold text-gray-900 mb-6">
            Azienda
          </h2>
          <ul className="flex flex-col gap-2 text-gray-500 text-sm">
            <li>
              <Link
                href="/chi-siamo"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link
                href="/gdpr"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Sicurezza e GDPR
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="inline-block py-1.5 hover:text-brand-600 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <CookiePreferencesButton className="inline-block py-1.5 hover:text-brand-600 transition-colors text-left" />
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 py-8 border-t border-gray-100">
        {/* Link in linea senza inline-block: con il padding verticale le
            righe che contenevano un link erano più distanziate delle altre. */}
        <p className="text-xs text-gray-500 leading-6 max-w-3xl">
          Corioli è un{" "}
          <strong className="font-medium text-gray-600">
            software gestionale medico per Windows e Mac
          </strong>{" "}
          per medici specialisti privati. Offre{" "}
          <Link
            href="/funzionalita"
            className="underline underline-offset-2 hover:text-brand-600 transition-colors"
          >
            cartella clinica elettronica
          </Link>
          ,{" "}
          <Link
            href="/ginecologia"
            className="underline underline-offset-2 hover:text-brand-600 transition-colors"
          >
            gestionale per ginecologi e ostetrici
          </Link>
          ,{" "}
          <Link
            href="/cardiologia"
            className="underline underline-offset-2 hover:text-brand-600 transition-colors"
          >
            software per l&apos;ambulatorio cardiologico
          </Link>
          , refertazione PDF, calcolatori clinici e sicurezza GDPR. Sede legale:
          Sesto Fiorentino (FI), Italia.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Corioli - P.IVA IT07420400488</p>
      </div>
    </footer>
  );
}
