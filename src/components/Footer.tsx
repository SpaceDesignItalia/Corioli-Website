import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        <div className="md:col-span-12 lg:col-span-4 pr-8">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-brand-900 flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
               <span className="text-white text-lg leading-none">C</span>
            </div>
            Corioli
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Il software gestionale cloud che restituisce tempo prezioso ai medici specialisti privati, migliorando la qualità del lavoro in ambulatorio.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 hover:bg-brand-100 cursor-pointer transition-colors">in</div>
             <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 hover:bg-brand-100 cursor-pointer transition-colors">fb</div>
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
            <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog & Guide</Link></li>
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
        <p>&copy; {new Date().getFullYear()} Corioli S.r.l. - P.IVA 12345678901</p>
        <div className="flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-green-500"></span>
           Sistemi operativi al 100%
        </div>
      </div>
    </footer>
  );
}
