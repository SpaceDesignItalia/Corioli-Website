// Fonte unica delle FAQ di /prezzi: le usa la pagina (accordion) e il layout
// (FAQPage JSON-LD). Prima erano due copie scritte a mano e divergevano sui
// prezzi senza che nessun errore lo segnalasse.
export const PRICE_MONTHLY = 30;
export const TRIAL_DAYS = 30;

export const pricingFaqs = [
  {
    q: "Quanto costa Corioli?",
    a: `${PRICE_MONTHLY}€ al mese, tutto incluso: cartella clinica elettronica, calcolatori clinici avanzati, refertazione PDF con ricette e certificati, backup automatici e tutti gli aggiornamenti. Non ci sono moduli a pagamento né piani diversi da confrontare.`,
  },
  {
    q: "Ci sono moduli o costi extra?",
    a: "No. Con l'abbonamento hai tutto Corioli, senza add-on da attivare dopo. L'unico servizio a parte è la migrazione dei dati storici, che è facoltativa e su preventivo.",
  },
  {
    q: "La prova gratuita richiede la carta di credito?",
    a: `No. Attivi i ${TRIAL_DAYS} giorni di prova senza inserire alcun metodo di pagamento: al termine decidi liberamente se abbonarti.`,
  },
  {
    q: `Cosa succede alla fine dei ${TRIAL_DAYS} giorni?`,
    a: `Nessun addebito automatico: non avendo la tua carta, non possiamo addebitarti nulla. Se Corioli ti ha convinto, attivi l'abbonamento a ${PRICE_MONTHLY}€ al mese. I dati inseriti durante la prova restano tuoi, salvati sul tuo computer.`,
  },
  {
    q: "Posso disdire quando voglio?",
    a: "Sì. Non ci sono vincoli contrattuali né costi di attivazione: l'abbonamento è mensile e si disdice in qualsiasi momento.",
  },
  {
    q: "Dove vengono salvati i dati dei miei pazienti?",
    a: "In locale, sul computer o sulla rete del tuo studio. Corioli non raccoglie né trasmette i dati clinici dei tuoi pazienti: ne mantieni il pieno controllo, in linea con il GDPR.",
  },
  {
    q: "Posso importare i dati dal mio archivio attuale?",
    a: "Sì. La migrazione dei dati storici da Word, Excel, carta o altri gestionali è un servizio su preventivo: il costo dipende dal formato e dalla dimensione dell'archivio. Ci descrivi come è organizzato e ti rispondiamo con un preventivo senza impegno.",
  },
];
