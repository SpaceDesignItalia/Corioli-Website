import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Zap, LayoutDashboard, Clock } from "lucide-react";
import clsx from "clsx";

export default function Home() {
  return (
    <div className="pt-32 pb-16">
      
      {/* Modern Clean Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 pt-10 md:pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
            La nuova era della gestione ambulatoriale
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            La gestione clinica <br />
            <span className="text-brand-600">che rispetta il tuo tempo.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Abbandona i software generici. Corioli è l'unico gestionale cloud costruito nativamente per le esigenze specifiche del tuo ambulatorio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contatti" className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-700 transition-all shadow-soft hover:shadow-card hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Inizia la prova gratuita <ArrowRight size={18} />
            </Link>
            <Link href="/funzionalita" className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
              Scopri le funzionalità
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
            <Shield size={14} className="text-gray-400" /> Nessuna carta di credito richiesta.
          </p>
        </div>

        {/* Hero Visual Abstraction */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 h-full w-full"></div>
          <div className="aspect-[16/9] md:aspect-[21/9] bg-white rounded-t-2xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] border border-gray-200 border-b-0 overflow-hidden relative flex flex-col">
            {/* Fake Browser Header */}
            <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
               </div>
            </div>
            <div className="flex-1 p-8 grid grid-cols-12 gap-6 bg-slate-50/50">
               {/* Sidebar mock */}
               <div className="col-span-3 flex flex-col gap-3">
                  <div className="h-8 bg-gray-200 rounded-md w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
               </div>
               {/* Content mock */}
               <div className="col-span-9 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                  <div className="h-6 bg-brand-100 rounded-md w-1/4 mb-4"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-2/3"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="border-y border-gray-100 bg-white py-12 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8 text-center">
            Scelto da specialisti e cliniche di eccellenza
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logos placeholders */}
            <div className="font-heading font-bold text-xl text-gray-800">Policlinico Gemelli</div>
            <div className="font-heading font-bold text-xl text-gray-800">Centro Medico San Biagio</div>
            <div className="font-heading font-bold text-xl text-gray-800">Clinica Mangiagalli</div>
            <div className="font-heading font-bold text-xl text-gray-800">Studio Medico Associato</div>
          </div>
        </div>
      </section>

      {/* Value Props Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Progettato per la pratica clinica
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ogni funzionalità è stata studiata osservando il lavoro quotidiano dei medici, per eliminare clic inutili e frizioni amministrative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Interfaccia Intuitiva</h3>
            <p className="text-gray-600 leading-relaxed">
              Design pulito e reattivo che riduce il carico cognitivo. Trova le informazioni del paziente in una frazione del tempo.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Refertazione Rapida</h3>
            <p className="text-gray-600 leading-relaxed">
              Genera PDF impeccabili con un clic. I template precompilati si adattano al tuo stile di scrittura e alla tua specializzazione.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <Shield size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Sicurezza Dati (GDPR)</h3>
            <p className="text-gray-600 leading-relaxed">
              Infrastruttura cloud europea, crittografia avanzata e gestione del consenso integrata nativamente nel workflow.
            </p>
          </div>

        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              L'automazione intelligente<br/>che ti fa guadagnare ore.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I medici italiani perdono in media 12 ore al mese in attività di data-entry e formattazione documenti. Corioli abbatte questo tempo grazie a calcolatori integrati e campi pre-compilabili.
            </p>
            <ul className="flex flex-col gap-4">
               <li className="flex items-start gap-3 text-gray-700">
                 <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={20} />
                 <span>Calcolatori ostetrici e percentili di crescita nativi</span>
               </li>
               <li className="flex items-start gap-3 text-gray-700">
                 <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={20} />
                 <span>Cronologia clinica visuale per ogni paziente</span>
               </li>
               <li className="flex items-start gap-3 text-gray-700">
                 <CheckCircle2 className="text-brand-500 mt-1 shrink-0" size={20} />
                 <span>Anamnesi guidata specifica per patologia</span>
               </li>
            </ul>
          </div>
          <div className="relative">
            {/* Visual Element */}
            <div className="aspect-square bg-brand-50 rounded-3xl p-8 relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-100 rounded-full blur-[100px] opacity-60"></div>
               <div className="relative z-10 w-full h-full bg-white rounded-2xl shadow-card border border-gray-100 flex flex-col p-6">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                     <div className="font-semibold text-gray-800">Calcolo Datazione</div>
                     <Clock size={18} className="text-brand-500" />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                     <div className="h-10 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4"><div className="w-1/3 h-2.5 bg-gray-300 rounded"></div></div>
                     <div className="h-10 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4"><div className="w-1/2 h-2.5 bg-gray-300 rounded"></div></div>
                     <div className="mt-auto h-12 bg-brand-50 rounded-lg border border-brand-100 flex items-center justify-between px-4">
                        <div className="w-1/4 h-3 bg-brand-200 rounded"></div>
                        <div className="w-1/4 h-4 bg-brand-600 rounded"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-brand-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
               <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                 Pronto ad aggiornare il tuo studio?
               </h2>
               <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
                 Unisciti ai professionisti che hanno già scelto la semplicità e la sicurezza di Corioli per la loro pratica quotidiana.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/contatti" className="bg-white text-brand-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg">
                   Richiedi Demo Gratuita
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
