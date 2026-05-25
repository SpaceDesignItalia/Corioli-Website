import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy di Corioli: trattamento dati personali e chiarimenti sulla sicurezza e sulla conformità GDPR del software gestionale medico desktop con dati salvati in locale.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Corioli",
    description: "Informazioni sulla privacy per Corioli, software gestionale medico locale per medici specialisti.",
    url: "https://corioli.it/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-12 bg-background min-h-screen">
      
      <div className="mb-12">
         <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
         <p className="text-gray-500 font-medium">Ultimo aggiornamento: 25 Maggio 2026</p>
      </div>

      <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
        <div className="prose prose-brand max-w-none text-gray-600 leading-relaxed">
          <p className="mb-8 text-lg">
            La presente Privacy Policy descrive le modalità di gestione del sito web <strong>corioli.it</strong> in riferimento al trattamento dei dati personali degli utenti che lo consultano, che richiedono demo o assistenza, e illustra il funzionamento e la conformità al GDPR del software desktop Corioli.
          </p>

          <div className="p-6 bg-brand-50 border border-brand-100 rounded-2xl mb-8">
            <h3 className="font-heading text-lg font-bold text-brand-900 mb-2">Cos'è Corioli?</h3>
            <p className="text-sm text-brand-800 mb-4">
              Corioli è il software di gestione delle cartelle cliniche pensato per i medici specialisti privati italiani — ginecologi, ostetrici e pediatri.
            </p>
            <p className="text-sm text-brand-800 mb-4">
              Progettato per semplificare il lavoro quotidiano dello studio medico, Corioli permette di creare e gestire cartelle cliniche digitali in modo rapido, intuitivo e sicuro, nel pieno rispetto del GDPR.
            </p>
            <p className="text-sm text-brand-800 font-semibold mb-2">Caratteristiche principali:</p>
            <ul className="list-disc pl-5 text-sm text-brand-800 flex flex-col gap-1">
              <li>Gestione completa delle cartelle cliniche dei pazienti</li>
              <li>Registrazione visite, referti e documentazione clinica</li>
              <li>Calcoli automatici di biometria fetale e percentili Doppler</li>
              <li>Interfaccia semplice e pensata per il medico specialista</li>
              <li><strong>Dati salvati in locale, sicuri e sempre sotto il tuo controllo</strong></li>
              <li>Compatibile con Windows 10 e Windows 11</li>
            </ul>
            <p className="text-xs text-brand-600 mt-4 italic">
              Sviluppato con il contributo di professionisti medici e validato con una clinica con 10 specialisti.
            </p>
          </div>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">1. Titolare del Trattamento</h2>
          <p className="mb-6">
            Il Titolare del trattamento dei dati raccolti tramite questo sito web (es. dati di navigazione, dati inviati tramite i moduli di contatto, richieste di demo o download) è <strong>Corioli</strong>, con sede legale in Firenze (FI). Email: <a href="mailto:privacy@corioli.it" className="text-brand-600 hover:underline">privacy@corioli.it</a>.
          </p>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">2. Esclusione del Trattamento dei Dati Clinici da parte di Corioli</h2>
          <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl mb-6">
            <p className="text-amber-900 font-semibold mb-2">Principio di Privacy by Design & Archiviazione Locale</p>
            <p className="text-sm text-amber-800 mb-4">
              A differenza delle tradizionali soluzioni cloud (SaaS), Corioli è un <strong>software desktop con archiviazione locale</strong>. Tutti i dati relativi alla salute, alle visite e ai calcoli biometrici inseriti all'interno del software sono salvati esclusivamente sul computer (o sulla rete locale dello studio) sul quale il software è installato.
            </p>
            <ul className="list-disc pl-5 text-sm text-amber-800 flex flex-col gap-2">
              <li><strong>Nessun accesso ai dati sanitari:</strong> Corioli (l'azienda proprietaria) non ha accesso in alcun modo, non raccoglie, non memorizza e non trasmette a server esterni o cloud le informazioni cliniche o personali dei tuoi pazienti.</li>
              <li><strong>Il Medico come unico Titolare:</strong> In qualità di medico specialista, tu sei l'unico <strong>Titolare del Trattamento</strong> (Data Controller) dei dati dei tuoi pazienti. Poiché non vi è alcun trasferimento di dati clinici verso i nostri sistemi, non è necessaria la stipula di un Data Processing Agreement (DPA) con Corioli per il funzionamento standard del software.</li>
              <li><strong>Responsabilità della Sicurezza Locale:</strong> È responsabilità esclusiva del Medico adottare misure di sicurezza adeguate sul proprio PC Windows 10/11 (es. crittografia dei dischi, backup periodici e protetti, password di accesso sicure, software antivirus) per prevenire accessi non autorizzati o perdite di dati.</li>
            </ul>
          </div>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">3. Tipologia di dati raccolti sul sito web</h2>
          <p className="mb-4">
            Corioli raccoglie solo i dati personali strettamente necessari alla fornitura del sito web, all'assistenza e alle relazioni commerciali con i medici:
          </p>
          <ul className="list-disc pl-6 mb-6 flex flex-col gap-3">
            <li><strong>Dati di navigazione:</strong> I sistemi informatici acquisiscono alcuni dati la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, tipo di browser, data e ora di accesso).</li>
            <li><strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo ed esplicito di messaggi tramite i moduli di contatto, la richiesta di demo o il download del software comporta l'acquisizione dei dati personali del medico (Nome, Email, Telefono, Specializzazione, ed eventuali note).</li>
            <li><strong>Cookie e Strumenti di Analisi:</strong> Il sito utilizza cookie tecnici e di analisi anonima (come PostHog o Google Analytics, previo consenso) per ottimizzare l'esperienza utente e comprendere il traffico del sito web.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">4. Finalità del trattamento dei dati di contatto</h2>
          <p className="mb-4"> I dati personali del medico (es. contatti o richieste di demo) raccolti tramite il sito sono utilizzati per: </p>
          <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
            <li>Erogare l'assistenza richiesta, inviare i link di download del software o configurare una demo personalizzata.</li>
            <li>Inviare aggiornamenti tecnici legati alla compatibilità di Corioli con Windows 10/11 o al rilascio di nuove funzionalità (come i calcoli Doppler o la biometria).</li>
            <li>Adempiere ad obblighi di natura amministrativa, contabile o legale legati all'eventuale acquisto della licenza del software.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">5. Sicurezza dei dati di contatto</h2>
          <p className="mb-6">
            Corioli implementa misure di sicurezza tecniche e organizzative rigorose per proteggere i dati di contatto dei medici e dei clienti gestiti tramite il sito web da accessi non autorizzati, divulgazioni o distruzioni indesiderate.
          </p>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">6. Diritti degli interessati</h2>
          <p className="mb-6">
            Ai sensi del GDPR (Regolamento UE 2016/679), in relazione ai dati di contatto o navigazione da noi gestiti, gli utenti hanno il diritto in qualsiasi momento di chiedere l'accesso, la rettifica, la cancellazione, la limitazione del trattamento o di opporsi al trattamento stesso inviando una comunicazione scritta a <a href="mailto:privacy@corioli.it" className="text-brand-600 hover:underline">privacy@corioli.it</a>.
          </p>
        </div>
      </div>

    </div>
  );
}

