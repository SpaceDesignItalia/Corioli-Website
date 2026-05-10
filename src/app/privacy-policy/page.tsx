export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-12 bg-background min-h-screen">
      
      <div className="mb-12">
         <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
         <p className="text-gray-500 font-medium">Ultimo aggiornamento: 24 Maggio 2024</p>
      </div>

      <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
        <div className="prose prose-brand max-w-none text-gray-600 leading-relaxed">
          <p className="mb-8 text-lg">
            La presente Privacy Policy descrive le modalità di gestione del sito web corioli.it in riferimento al trattamento dei dati personali degli utenti che lo consultano e che utilizzano i servizi SaaS offerti da Corioli.
          </p>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">1. Titolare del Trattamento</h2>
          <p className="mb-6">
            Il Titolare del trattamento dei dati raccolti tramite questo sito è Corioli, con sede legale in Firenze (FI). Email: privacy@corioli.it.
          </p>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">2. Tipologia di dati raccolti</h2>
          <ul className="list-disc pl-6 mb-6 flex flex-col gap-3">
            <li><strong>Dati di navigazione:</strong> I sistemi informatici acquisiscono alcuni dati la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP).</li>
            <li><strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo ed esplicito di posta elettronica o la compilazione dei form di contatto comportano l'acquisizione dei dati personali forniti.</li>
            <li><strong>Dati clinici (Servizio SaaS):</strong> In relazione al software gestionale, Corioli agisce come Responsabile del Trattamento per conto del Medico (Titolare del Trattamento dei dati dei propri pazienti). I dettagli di tale rapporto sono regolati da apposito DPA (Data Processing Agreement).</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">3. Finalità del trattamento</h2>
          <p className="mb-6">
            I dati personali raccolti sul sito web sono utilizzati per rispondere alle richieste di demo, inviare comunicazioni informative (previo consenso) e per il funzionamento tecnico del sito.
          </p>

          <h2 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">4. Sicurezza dei dati</h2>
          <p className="mb-6">
            Corioli implementa misure di sicurezza tecniche e organizzative avanzate (crittografia end-to-end, backup georeplicati in UE) per garantire l'integrità e la riservatezza dei dati, in conformità con gli standard richiesti per i dati sanitari.
          </p>
        </div>
      </div>

    </div>
  );
}
