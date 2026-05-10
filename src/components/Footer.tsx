import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        <div className="md:col-span-12 lg:col-span-4 pr-8">
          <Link href="/" className="inline-block mb-6">
            <Image 
              src="/logo-full.png" 
              alt="Corioli Logo" 
              width={280} 
              height={80} 
              className="h-20 w-auto"
            />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Il software gestionale cloud che restituisce tempo prezioso ai medici specialisti privati, migliorando la qualità del lavoro in ambulatorio.
          </p>
          <div className="flex gap-4">
             <Link href="#" className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white hover:-translate-y-1 cursor-pointer transition-all shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </Link>
             <Link href="#" className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 hover:bg-[#FF0000] hover:text-white hover:-translate-y-1 cursor-pointer transition-all shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 69.04 69.04 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 69.04 69.04 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
             </Link>
          </div>
        </div>
        
        <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
          <h4 className="font-heading font-semibold text-gray-900 mb-6">Prodotto</h4>
          <ul className="flex flex-col gap-4 text-gray-500 text-sm">
            <li><Link href="/funzionalita" className="hover:text-brand-600 transition-colors">Funzionalità</Link></li>
            <li><Link href="/specializzazioni" className="hover:text-brand-600 transition-colors">Specializzazioni</Link></li>
            <li><Link href="/prezzi" className="hover:text-brand-600 transition-colors">Prezzi</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-2">
          <h4 className="font-heading font-semibold text-gray-900 mb-6">Risorse</h4>
          <ul className="flex flex-col gap-4 text-gray-500 text-sm">
            <li><Link href="/chi-siamo" className="hover:text-brand-600 transition-colors">Chi Siamo</Link></li>
            <li><Link href="/contatti" className="hover:text-brand-600 transition-colors">Supporto</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-2">
          <h4 className="font-heading font-semibold text-gray-900 mb-6">Legale</h4>
          <ul className="flex flex-col gap-4 text-gray-500 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/termini" className="hover:text-brand-600 transition-colors">Termini di Servizio</Link></li>
            <li><Link href="/gdpr" className="hover:text-brand-600 transition-colors">Conformità GDPR</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>&copy; {new Date().getFullYear()} Corioli - P.IVA IT07420400488</p>
      </div>
    </footer>
  );
}
