import { FileText, Activity, Lock, ArrowRight, Layers, FileOutput } from "lucide-react";
import Link from "next/link";

export default function FunzionalitaPage() {
  return (
    <div className="pt-32 pb-24">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Progettato per funzionare <br/><span className="text-brand-600">come pensi tu.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
          Ogni modulo di Corioli è stato disegnato partendo dall'osservazione clinica sul campo, non dalla scrivania di un programmatore.
        </p>
      </div>

      {/* Feature 1 */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8">
              <FileText size={24} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">L'Anamnesi Strutturata</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Dimentica i documenti di testo vuoti e le perdite di tempo con il copia-incolla. Il nostro sistema di input intelligente si adatta alla situazione clinica.
            </p>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Campi anamnestici specifici per specializzazione
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Auto-completamento per diagnosi frequenti e ICD-9/10
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Timeline visiva per recuperare rapidamente lo storico
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-100 shadow-soft p-8 flex items-center justify-center">
               <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-5">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-10 border border-gray-200 rounded-lg flex items-center px-3"><div className="w-1/2 h-2.5 bg-gray-300 rounded"></div></div>
                  <div className="h-10 border border-gray-200 rounded-lg flex items-center px-3"><div className="w-2/3 h-2.5 bg-gray-300 rounded"></div></div>
                  <div className="h-20 border border-gray-200 rounded-lg p-3"><div className="w-full h-2.5 bg-gray-300 rounded mb-2"></div><div className="w-4/5 h-2.5 bg-gray-300 rounded"></div></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-[4/3] bg-brand-50/50 rounded-2xl border border-brand-100 shadow-soft p-8 flex items-center justify-center relative overflow-hidden">
               {/* Abstract graph */}
               <svg viewBox="0 0 100 100" className="absolute w-full h-full text-brand-200 p-12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10,90 Q30,80 50,40 T90,10" className="text-brand-500" strokeWidth="3" strokeLinecap="round" />
                  <path d="M10,90 Q30,70 50,50 T90,30" className="text-brand-300 stroke-dasharray-[4,4]" strokeLinecap="round" />
                  <circle cx="50" cy="40" r="3" className="fill-white stroke-brand-500" strokeWidth="2" />
               </svg>
            </div>
          </div>
          <div>
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8">
              <Activity size={24} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Calcolatori Clinici Nativi</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Nessun bisogno di app di terze parti per i tuoi calcoli. Corioli integra gli algoritmi più avanzati e riconosciuti (Hadlock, WHO, etc.) direttamente nella visita.
            </p>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Datazione accurata integrata
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 Curve di crescita fetale e pediatriche
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                 I risultati vengono inseriti in automatico nel referto finale
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-8">
              <Lock size={24} />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sicurezza e Privacy (GDPR)</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              I dati sanitari richiedono i massimi standard di sicurezza. La nostra infrastruttura cloud protegge te e i tuoi pazienti in ogni momento.
            </p>
            <Link href="/gdpr" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors mb-8">
              Consulta la nostra pagina sulla conformità GDPR <ArrowRight size={16} />
            </Link>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">Crittografia Totale</h4>
                  <p className="text-xs text-gray-500">Dati cifrati AES-256 a riposo e in transito.</p>
               </div>
               <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">Backup Automatici</h4>
                  <p className="text-xs text-gray-500">Copie georeplicate giornaliere in server europei.</p>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] bg-brand-900 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden shadow-xl">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]"></div>
               <Shield size={120} className="text-brand-400 opacity-20 absolute" />
               <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 max-w-xs w-full text-white">
                  <div className="flex items-center gap-3 mb-4">
                     <Lock size={18} className="text-brand-300" />
                     <span className="text-sm font-medium">Connessione Sicura Attiva</span>
                  </div>
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                     <div className="w-full h-full bg-brand-400"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Migliora la qualità del tuo tempo in studio</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">Scopri di persona come la nostra piattaforma può semplificare la tua attività clinica.</p>
          <Link href="/contatti" className="bg-brand-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-soft hover:shadow-card">
            Richiedi Demo
          </Link>
        </div>
      </section>

    </div>
  );
}

// Temporary Shield icon to fix the build
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
