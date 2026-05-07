import { Shield, Server, FileCheck, Lock } from "lucide-react";

export default function GDPRPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
              <Shield size={16} /> Privacy & Sicurezza
           </div>
           <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Conformità GDPR completa.</h1>
           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
             Il nostro impegno per la sicurezza dei dati sanitari. Sviluppato nativamente seguendo i principi di Privacy by Design.
           </p>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-soft mb-12">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gray-900">Perché i medici scelgono Corioli per la compliance</h2>
          <p className="text-gray-600 leading-relaxed">
            Trattare dati relativi alla salute (dati particolari ex art. 9 GDPR) richiede precauzioni tecniche e legali rigorose. Affidarsi a server locali o documenti Word non criptati è oggi uno dei principali rischi legali per i professionisti sanitari. Corioli risolve alla radice questa responsabilità.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
               <Lock size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">Crittografia dei dati</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Tutti i dati sono cifrati in transito (TLS 1.3) e a riposo (AES-256). L'infrastruttura di chiavi assicura che solo tu abbia accesso in chiaro alle cartelle cliniche dei pazienti.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
               <FileCheck size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">Data Processing Agreement</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Forniamo un contratto DPA precompilato e conforme al GDPR per regolamentare formalmente il nostro ruolo di Responsabili del Trattamento (Data Processors).</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
               <Shield size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">Log di Accesso Auditabili</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Registriamo rigidamente ogni accesso e modifica al sistema, come richiesto specificamente dalle linee guida del Garante Privacy per i dossier sanitari elettronici.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
               <Server size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">Server in Unione Europea</h3>
            <p className="text-gray-600 leading-relaxed text-sm">I nostri server (infrastruttura certificata ISO 27001, ISO 27017, ISO 27018) si trovano fisicamente in UE, evitando i complessi adempimenti per i trasferimenti extra-UE.</p>
          </div>

        </div>

        <div className="bg-brand-900 text-white rounded-3xl p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
             <h2 className="font-heading text-2xl font-bold mb-4">Modulo Consenso Integrato</h2>
             <p className="text-brand-100 leading-relaxed mb-0 max-w-3xl">
               Il nostro software include un modulo nativo per la raccolta digitale e la storicizzazione inalterabile del consenso informato privacy dei pazienti, eliminando la necessità di infiniti archivi cartacei e facilitando l'esibizione immediata in caso di controlli dell'autorità.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}
