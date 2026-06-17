import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi siamo",
  description: "Corioli nasce per creare un gestionale medico davvero pensato per la pratica clinica: software cloud, design medico, cartella clinica elettronica e sicurezza per specialisti.",
  alternates: {
    canonical: "/chi-siamo",
  },
  openGraph: {
    title: "Chi siamo | Corioli",
    description: "Il team dietro Corioli, gestionale medico cloud per specialisti.",
    url: "https://corioli.it/chi-siamo",
  },
};

export default function ChiSiamoPage() {
  return (
    <div className="pt-40 md:pt-48 pb-24 bg-background">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
         <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Nati per risolvere <span className="text-brand-600">un'anomalia.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
          Nel 2024, i medici specialisti italiani utilizzavano ancora carta e penna Word e Excel per gestire l ambulatorio. Non perché mancassero i software, ma perché quelli esistenti erano stati pensati per l'amministrazione, non per la clinica.
        </p>
      </div>

      <section className="py-20 bg-white border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">La nostra visione</h2>
               <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                 Corioli è nato da un'osservazione diretta sul campo. Abbiamo affiancato ginecologi e ostetrici durante le loro giornate, contando i click inutili, i copia-incolla rischiosi e i minuti persi a formattare documenti.
               </p>
               <p className="text-gray-600 text-lg leading-relaxed">
                 Abbiamo deciso di costruire l'esatto opposto: un software invisibile. Un gestionale che si modella sul flusso di pensiero medico, non viceversa.
               </p>
            </div>
            <div className="bg-brand-50 rounded-3xl p-8 md:p-10 border border-brand-100 shadow-soft relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-[40px]"></div>
               <div className="text-brand-600 font-bold text-sm uppercase tracking-wider mb-8">I Nostri Principi</div>
               <ul className="flex flex-col gap-6 font-heading text-xl font-bold text-gray-900">
                  <li className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-brand-600 text-sm shadow-sm shrink-0">1</span> La clinica prima dell'amministrazione.</li>
                  <li className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-brand-600 text-sm shadow-sm shrink-0">2</span> Zero click inutili.</li>
                  <li className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-brand-600 text-sm shadow-sm shrink-0">3</span> Design come strumento di chiarezza.</li>
                  <li className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-brand-600 text-sm shadow-sm shrink-0">4</span> Sicurezza non negoziabile.</li>
               </ul>
            </div>
         </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
         <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">L'Eccellenza Multidisciplinare</h2>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
           Siamo un team che unisce sviluppatori, designer e medici specialisti. Costruiamo strumenti che nascono dalla pratica clinica reale, non da un modello generico adattato alla sanità.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-soft hover:shadow-card transition-shadow">
               <div className="w-14 h-14 bg-brand-50 rounded-xl mb-6 flex items-center justify-center text-brand-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
               </div>
               <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Tecnologia</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Sviluppatori con esperienza in ambito medtech cloud, dedicati alla creazione di architetture performanti, scalabili e ultra-sicure.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-soft hover:shadow-card transition-shadow">
               <div className="w-14 h-14 bg-brand-50 rounded-xl mb-6 flex items-center justify-center text-brand-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
               </div>
               <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Design UX</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Product designer che credono che l'estetica funzionale e l'usabilità nel software medico possano salvare tempo prezioso in ambulatorio.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-soft hover:shadow-card transition-shadow">
               <div className="w-14 h-14 bg-brand-50 rounded-xl mb-6 flex items-center justify-center text-brand-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
               </div>
               <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Validazione Clinica</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Medici specialisti in attività che progettano i flussi logici e validano rigorosamente ogni singola funzionalità prima del rilascio.</p>
            </div>
         </div>
      </section>

    </div>
  );
}
