// Immagine usata nell'articolo (copertina o dentro una sezione). Le dimensioni
// servono a next/image per riservare lo spazio ed evitare layout shift.
export type BlogImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type BlogSection = {
  title: string;
  body: string;
  variant?: "text" | "comparison-table";
  // Immagine opzionale mostrata sotto al testo della sezione.
  image?: BlogImage;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  // Breve estratto mostrato nella griglia degli articoli.
  excerpt: string;
  // Data in formato leggibile (es. "5 Febbraio 2025"), mostrata nell'articolo.
  date: string;
  // Stessa data in formato ISO 8601 (es. "2025-02-05"), usata per structured
  // data, OpenGraph e sitemap. NON sostituire con la stringa italiana.
  isoDate: string;
  // Data ISO dell'ultima revisione sostanziale, se l'articolo e stato
  // aggiornato dopo la pubblicazione. Alimenta dateModified nei dati
  // strutturati e lastModified nella sitemap, mentre isoDate resta la data di
  // pubblicazione originale: sovrascrivere isoDate falserebbe la storia del
  // contenuto. Ometterlo quando l'articolo non e mai stato rivisto.
  updatedIso?: string;
  // Etichetta leggibile dell'aggiornamento (es. "20 Agosto 2026"), mostrata
  // accanto alla data di pubblicazione. Va tenuta allineata a updatedIso.
  updated?: string;
  category: string;
  lead: string;
  // Immagine di copertina opzionale, mostrata sotto al titolo.
  coverImage?: BlogImage;
  sections: BlogSection[];
  faq?: FaqItem[];
};

// Fonte unica degli articoli del blog: la pagina dell'articolo, la griglia
// (/blog), la sitemap e le immagini OpenGraph derivano tutte da qui.
// Ordine: dal più recente al meno recente.
export const posts: BlogPost[] = [
  {
    slug: "sistema-tessera-sanitaria-invio-dati-annuale",
    title: "Sistema Tessera Sanitaria: l'invio dei dati è diventato annuale",
    description:
      "Dalle spese sostenute dal 2025 la trasmissione al Sistema Tessera Sanitaria è annuale, entro il 31 gennaio dell'anno successivo. Cosa cambia per il medico privato e come arrivare preparati alla scadenza.",
    excerpt:
      "Addio invio semestrale: il Sistema TS è passato alla cadenza annuale. Sembra una semplificazione, ma concentra dodici mesi di documenti in una sola scadenza. Ecco come organizzarsi.",
    date: "18 Agosto 2026",
    isoDate: "2026-08-18",
    category: "Normativa",
    lead: "Per anni il calendario del medico libero professionista ha avuto due appuntamenti fissi con il Sistema Tessera Sanitaria: settembre e gennaio. Il decreto correttivo ha cambiato le carte in tavola e oggi l'invio è annuale. Sulla carta è una semplificazione; nella pratica, per chi non tiene i documenti in ordine durante l'anno, può trasformarsi in una scadenza molto più pesante di prima.",
    sections: [
      {
        title: "Cosa è cambiato: da due invii all'anno a uno solo",
        body: "Fino alle spese del 2024 la trasmissione dei dati al Sistema Tessera Sanitaria seguiva una cadenza semestrale: entro il 30 settembre andavano inviate le spese sostenute da gennaio a giugno, ed entro il 31 gennaio dell'anno successivo quelle del secondo semestre. Due finestre, due momenti di lavoro amministrativo, due occasioni per accorgersi che qualcosa non tornava.\n\nCon il decreto correttivo (D.Lgs. n. 81 del 12 giugno 2025) l'obbligo semestrale è stato eliminato. Per le spese sanitarie sostenute a partire dal 1° gennaio 2025 la trasmissione avviene con cadenza annuale, entro il 31 gennaio dell'anno successivo a quello di sostenimento della spesa.\n\nIn concreto: i dati relativi alle spese del 2025 andavano trasmessi entro il 2 febbraio 2026 — il 31 gennaio cadeva di sabato e la scadenza è slittata al primo giorno lavorativo utile. I dati delle spese del 2026 vanno trasmessi entro il 31 gennaio 2027. L'obbligo riguarda medici chirurghi e professionisti sanitari, oltre a farmacie, parafarmacie e strutture sanitarie accreditate.",
      },
      {
        title: "Perché una scadenza sola non è necessariamente più facile",
        body: "L'invio annuale riduce gli adempimenti da due a uno, e questa è una buona notizia. Ma sposta anche tutto il carico su un'unica finestra di gennaio, e cambia la natura dell'errore possibile.\n\nCon la cadenza semestrale, un dato sbagliato inserito a marzo emergeva a settembre: sei mesi di distanza, ancora recuperabili con un po' di memoria e qualche ricerca. Con la cadenza annuale, una ricevuta emessa a febbraio viene verificata undici mesi dopo, quando ricostruire il contesto di quella prestazione è molto più difficile. Se il codice fiscale della paziente era incompleto, se l'importo non corrisponde, se la prestazione era esente o meno: sono dettagli che a gennaio dell'anno dopo si recuperano solo se qualcuno li ha registrati bene sul momento.\n\nC'è poi un tema puramente pratico di volume. Un ambulatorio specialistico con due o tre giorni di visite a settimana produce facilmente diverse centinaia di documenti fiscali in dodici mesi. Ricontrollarli tutti nelle ultime due settimane di gennaio, mentre l'attività clinica prosegue normalmente, è un esercizio che invita agli errori.",
      },
      {
        title: "Cosa serve davvero: dati corretti alla fonte",
        body: "La lezione operativa è semplice e vale a prescindere dal software che usi: la scadenza di gennaio si vince a marzo, a giugno e a ottobre. Se ogni prestazione viene registrata con anagrafica completa e importo corretto nel momento in cui avviene, l'invio annuale diventa un'operazione di verifica; se invece i dati vengono ricostruiti a posteriori da un blocchetto di ricevute e da un file Excel compilato a intermittenza, diventa un lavoro di archeologia.\n\nI punti su cui vale la pena essere rigorosi durante l'anno sono pochi ma decisivi. L'anagrafica del paziente deve essere completa e verificata al primo accesso, codice fiscale compreso: è la chiave su cui si aggancia tutto il resto. Ogni prestazione deve essere collegata alla persona giusta, senza omonimie risolte a occhio. La natura della prestazione va annotata quando è fresca, perché è quella a determinare il trattamento corretto ai fini della detraibilità. E l'opposizione del paziente all'invio dei dati, quando espressa, va tracciata subito e in modo inequivocabile.\n\nUn'ultima nota di metodo: la trasmissione vera e propria al Sistema TS resta un adempimento fiscale, che nella maggior parte degli studi passa dal commercialista o dal software di fatturazione. Il gestionale clinico non lo sostituisce. Quello che può fare — ed è la parte che di solito si rompe — è garantire che i dati anagrafici e lo storico delle prestazioni siano ordinati, univoci e consultabili quando serve ricostruire un anno intero di attività.",
      },
      {
        title: "Il legame con il resto degli adempimenti digitali",
        body: "Il passaggio all'invio annuale non è un episodio isolato: si inserisce in un movimento più ampio che sta chiedendo agli studi privati di lavorare con dati strutturati anziché con documenti sciolti. Nello stesso periodo è arrivato l'obbligo di alimentazione del Fascicolo Sanitario Elettronico 2.0 anche per il privato, che richiede referti prodotti come documenti digitali coerenti e completi.\n\nSono adempimenti diversi, con destinatari e finalità diverse — uno fiscale, l'altro clinico — ma poggiano sullo stesso prerequisito: un archivio in cui ogni paziente esiste una volta sola, ogni prestazione è collegata a chi l'ha ricevuta e nulla dipende dalla memoria di chi ha scritto. Chi ha già messo ordine su questo fronte affronta entrambe le scadenze come una verifica. Chi non l'ha fatto le affronta due volte, ogni volta da capo.\n\nÈ il motivo per cui in Corioli l'anagrafica è unica e ogni visita resta legata alla scheda della paziente, con lo storico consultabile per data: non perché il software si occupi degli invii fiscali, ma perché quando arriva gennaio la domanda a cui devi rispondere è sempre la stessa — che cosa ho fatto, a chi, e quando — e la risposta deve essere già scritta da qualche parte.",
      },
    ],
    faq: [
      {
        question: "Qual è la scadenza per l'invio dei dati al Sistema Tessera Sanitaria?",
        answer:
          "Dalle spese sostenute a partire dal 1° gennaio 2025 la trasmissione è annuale, entro il 31 gennaio dell'anno successivo. Per le spese del 2025 la scadenza è stata il 2 febbraio 2026, perché il 31 gennaio cadeva di sabato; per le spese del 2026 la scadenza è il 31 gennaio 2027. Verifica sempre le indicazioni aggiornate dell'Agenzia delle Entrate e del portale Sistema TS, perché proroghe e slittamenti tecnici non sono rari.",
      },
      {
        question: "L'invio semestrale è stato davvero eliminato?",
        answer:
          "Sì. Il decreto correttivo D.Lgs. n. 81 del 12 giugno 2025 ha eliminato l'obbligo di trasmissione semestrale, sostituendolo con la cadenza annuale per le spese sostenute dal 2025 in poi. Fino alle spese del 2024 restava in vigore il doppio appuntamento del 30 settembre e del 31 gennaio.",
      },
      {
        question: "Chi è obbligato a trasmettere i dati al Sistema TS?",
        answer:
          "L'obbligo riguarda medici chirurghi e odontoiatri, gli altri professionisti sanitari, le farmacie e parafarmacie e le strutture sanitarie accreditate al Servizio Sanitario Nazionale. Per il singolo specialista in libera professione l'adempimento riguarda le prestazioni sanitarie fatturate a persone fisiche.",
      },
      {
        question: "Corioli si occupa dell'invio al Sistema Tessera Sanitaria?",
        answer:
          "No. La trasmissione al Sistema TS è un adempimento fiscale che passa dal software di fatturazione o dal commercialista, e Corioli non lo sostituisce: agenda e fatturazione elettronica non sono oggi tra le funzionalità disponibili. Corioli lavora sul livello sotto, quello clinico: anagrafica unica e verificata, storico delle visite ordinato per paziente e referti coerenti, così che ricostruire un anno di attività non dipenda da fogli sparsi.",
      },
    ],
  },
  {
    slug: "conservazione-cartella-clinica-studio-privato",
    title: "Per quanto tempo conservare la cartella clinica nello studio privato",
    description:
      "Nessuna norma fissa un termine preciso per la cartella clinica del libero professionista. Cosa dice il Garante Privacy, perché dieci anni è il riferimento più usato e come impostare una politica di conservazione difendibile.",
    excerpt:
      "Quanto vanno tenuti i dati clinici di un paziente in uno studio privato? La risposta non è nel codice: è una scelta che il medico deve motivare. Ecco i criteri per farlo bene.",
    date: "11 Agosto 2026",
    isoDate: "2026-08-11",
    category: "Normativa",
    lead: "È una delle domande che ricorrono più spesso quando uno specialista mette ordine nel proprio archivio: per quanto tempo devo conservare le cartelle dei pazienti? Molti si aspettano un numero secco scritto da qualche parte. Non c'è — almeno non per lo studio privato — e capire perché aiuta a prendere una decisione consapevole invece di accumulare tutto per sempre.",
    sections: [
      {
        title: "La differenza tra ospedale e studio privato",
        body: "Il punto di partenza è distinguere due situazioni che vengono spesso confuse. Per le cartelle cliniche ospedaliere e delle case di cura, insieme ai relativi referti, la conservazione è illimitata: sono documenti che fanno parte della memoria sanitaria della struttura e non si distruggono.\n\nPer il medico libero professionista non convenzionato la situazione è diversa: nessuna norma stabilisce espressamente che debba conservare la 'cartella clinica privata' dei propri pazienti e la documentazione allegata, né per quanto tempo. Questo non significa che ci si possa comportare come si vuole. Significa che la decisione ricade sul medico in quanto titolare del trattamento, e che va motivata.\n\nÈ una responsabilità in più, non una libertà. Il GDPR chiede che i tempi di conservazione siano definiti in anticipo e coerenti con la finalità del trattamento, non lasciati all'inerzia. Un archivio che cresce all'infinito perché nessuno ha mai deciso quando fermarsi non è conforme: è semplicemente non gestito.",
      },
      {
        title: "Perché dieci anni è il riferimento più usato",
        body: "In assenza di un termine di legge, la prassi più diffusa e più difendibile è ancorare la conservazione al termine di prescrizione ordinaria, che nell'ipotesi più ampia è di dieci anni. Il ragionamento è lineare: il medico conserva la documentazione clinica anche per poter tutelare i propri diritti e la propria difesa in caso di contestazioni future, e finché quella possibilità esiste la finalità di conservazione è attuale.\n\nÈ un criterio che regge perché lega il tempo di conservazione a una ragione concreta e verificabile, non a una preferenza personale. E funziona in entrambe le direzioni: giustifica il fatto che i dati siano ancora lì dopo otto anni, e giustifica il fatto che vengano cancellati dopo dodici.\n\nAttenzione però a non trattarlo come un automatismo universale. Il principio generale enunciato dal Garante resta che i dati vanno conservati per il tempo necessario al perseguimento della finalità per cui sono stati raccolti, e ci sono situazioni in cui quel tempo è ragionevolmente diverso: un percorso di cura ancora in corso, una documentazione rilevante per la storia clinica di lungo periodo della paziente, un contenzioso aperto che congela qualsiasi cancellazione. La politica di conservazione dovrebbe prevedere questi casi invece di ignorarli.",
      },
      {
        title: "Come si scrive una politica di conservazione che sta in piedi",
        body: "Non serve un documento lungo. Serve un documento che esista e che descriva scelte reali. Quattro elementi bastano a renderlo utile.\n\nIl primo è il termine ordinario: quanti anni conservi la documentazione clinica dopo l'ultimo contatto con il paziente, e perché hai scelto quel numero. Il secondo sono le eccezioni: i casi in cui il termine si allunga (contenzioso in corso, obblighi specifici) o si accorcia, definiti in anticipo e non decisi caso per caso. Il terzo è il momento della verifica: una data ricorrente — una volta l'anno è sufficiente — in cui si controlla cosa ha superato il termine, invece di aspettare che qualcuno se ne accorga. Il quarto è il modo in cui la cancellazione avviene concretamente, inclusi i backup, che è il punto in cui quasi tutte le politiche di conservazione si rompono.\n\nQuest'ultimo aspetto merita attenzione. Cancellare una cartella dall'archivio principale mentre la stessa cartella continua a esistere in dieci copie di backup accumulate negli anni significa non averla cancellata. Una politica di backup con rotazione definita — copie che vengono sovrascritte o eliminate dopo un periodo stabilito — non serve solo a risparmiare spazio: è ciò che rende la cancellazione effettiva.",
      },
      {
        title: "Perché l'archivio digitale rende tutto questo praticabile",
        body: "Su carta, applicare una politica di conservazione è teoricamente possibile e praticamente raro. Significa scorrere fisicamente un archivio, individuare i fascicoli oltre il termine, estrarli e distruggerli in modo sicuro. Nella maggior parte degli studi questo non succede mai, e l'archivio cresce fino a esaurire lo spazio disponibile.\n\nIn un archivio digitale la stessa operazione diventa una interrogazione: quali pazienti non hanno contatti da più di N anni. Da lì la revisione annuale è un'ora di lavoro invece di un progetto rimandato a tempo indeterminato. È una di quelle differenze che non si notano il primo anno e diventano evidenti al settimo.\n\nC'è anche un vantaggio meno ovvio, che riguarda chi sceglie l'archiviazione locale. Quando i dati clinici restano sul computer dello studio e non transitano da server di terzi, il perimetro della conservazione è netto: sai esattamente dove sono le copie, chi può accedervi e cosa succede quando decidi di cancellarle. Non devi verificare le politiche di retention di un fornitore né chiederti quanto a lungo un provider mantenga i propri backup. In cambio, l'onere di eseguire quei backup — e di gestirne la rotazione — è interamente tuo: è il rovescio della medaglia dell'archiviazione locale, e va affrontato con un piano preciso.",
      },
    ],
    faq: [
      {
        question: "Per quanto tempo deve conservare le cartelle un medico libero professionista?",
        answer:
          "Nessuna norma fissa un termine espresso per la cartella clinica del libero professionista non convenzionato. Spetta al medico, in quanto titolare del trattamento, definire il periodo in base alla finalità. La prassi più diffusa è ancorarlo al termine di prescrizione ordinaria di dieci anni, che consente al medico di tutelare i propri diritti in caso di contestazioni. La scelta va documentata, non lasciata all'inerzia.",
      },
      {
        question: "Le cartelle cliniche ospedaliere seguono le stesse regole?",
        answer:
          "No. Per le cartelle cliniche ospedaliere e delle case di cura, insieme ai relativi referti, la conservazione è illimitata: sono documenti che non vengono distrutti. La flessibilità di cui si parla riguarda esclusivamente la documentazione prodotta dal professionista privato nel proprio studio.",
      },
      {
        question: "Devo cancellare i dati anche dai backup?",
        answer:
          "Sì, altrimenti la cancellazione non è effettiva. È il punto in cui la maggior parte delle politiche di conservazione fallisce: la cartella sparisce dall'archivio principale ma sopravvive in copie di backup accumulate negli anni. La soluzione pratica è una rotazione definita dei backup, con copie sovrascritte o eliminate dopo un periodo stabilito, coerente con il termine di conservazione dichiarato.",
      },
      {
        question: "Un gestionale aiuta a rispettare i tempi di conservazione?",
        answer:
          "Aiuta a renderli praticabili. In un archivio digitale individuare i pazienti senza contatti da oltre N anni è una ricerca, mentre su carta è una revisione fisica dell'archivio che nella pratica quasi nessuno esegue. Il gestionale non decide la politica al posto tuo — quella resta una scelta del titolare del trattamento — ma trasforma la verifica periodica in un'operazione di routine invece che in un progetto rimandato.",
      },
    ],
  },
  {
    slug: "backup-studio-medico-regola-3-2-1",
    title: "Backup dello studio medico: la regola 3-2-1 applicata all'ambulatorio",
    description:
      "Se i dati clinici sono salvati in locale, il backup è responsabilità del medico. Come applicare la regola 3-2-1 in uno studio privato, cosa cifrare e perché un backup mai testato non è un backup.",
    excerpt:
      "L'archiviazione locale mette i dati sotto il tuo controllo e, insieme, sotto la tua responsabilità. Ecco come costruire un backup serio senza diventare un sistemista.",
    date: "30 Luglio 2026",
    isoDate: "2026-07-30",
    category: "Gestione Studio",
    lead: "Chi sceglie un gestionale con archiviazione locale lo fa quasi sempre per una ragione precisa: vuole che i dati delle pazienti restino nello studio e non su server di terzi. È una scelta legittima e, dal punto di vista della minimizzazione, la più radicale. Ma va detto con onestà: sposta sul medico un onere che nel cloud è del fornitore. Quell'onere si chiama backup, e ignorarlo è il modo più veloce per trasformare un vantaggio in un disastro.",
    sections: [
      {
        title: "Cosa può andare storto davvero",
        body: "Quando si parla di backup la mente va al guasto del disco, che è in effetti lo scenario classico. Ma nella pratica di uno studio medico gli incidenti più frequenti sono altri tre, e nessuno di questi è risolto da un semplice disco di scorta.\n\nIl primo è il ransomware. Un allegato aperto per distrazione cifra tutti i file raggiungibili dal computer — e se il disco di backup è collegato in permanenza tramite USB, cifra anche quello. È il motivo per cui una copia costantemente connessa non è una copia sicura.\n\nIl secondo è l'errore umano: una cartella eliminata per sbaglio, una modifica sbagliata salvata sopra il dato corretto. Qui il problema non è la perdita del disco ma il tempo: se il backup viene sovrascritto ogni notte e l'errore viene scoperto dopo cinque giorni, l'unica copia disponibile contiene già il dato sbagliato. Servono versioni multiple nel tempo, non una sola copia sempre aggiornata.\n\nIl terzo è il furto o l'incendio dello studio. È lo scenario più raro e quello che azzera tutto insieme: computer e disco di backup si trovano nella stessa stanza e spariscono nello stesso momento. È esattamente il motivo per cui esiste la regola che segue.",
      },
      {
        title: "La regola 3-2-1, tradotta per un ambulatorio",
        body: "La regola 3-2-1 è lo standard di riferimento in materia di backup e si riassume così: tre copie dei dati, su due supporti diversi, di cui una conservata fuori sede. Applicata a uno studio medico non richiede infrastrutture complesse.\n\nLe tre copie sono il dato originale sul computer dello studio, più due copie di backup. Non conta come copia il file duplicato in un'altra cartella dello stesso disco: se il disco muore o viene cifrato, se ne vanno entrambi.\n\nI due supporti diversi servono a non dipendere da un singolo punto di rottura. In pratica: il disco interno del computer più un disco esterno, oppure un NAS dello studio. L'importante è che il secondo supporto non resti collegato in permanenza — si connette per il backup e si scollega — proprio per proteggerlo dal ransomware.\n\nLa copia fuori sede è quella che quasi tutti saltano, ed è quella che salva nei casi peggiori. Per uno studio medico può essere un secondo disco cifrato custodito altrove e ruotato con cadenza regolare, oppure un servizio di backup remoto. Qui va posta una condizione non negoziabile: se la copia fuori sede finisce su un servizio online, quei dati sono dati sanitari e vanno cifrati prima di uscire dallo studio, con una chiave che resta in tuo possesso. Diversamente hai reintrodotto dalla finestra il trasferimento a terzi che avevi escluso dalla porta, e il fornitore di quel servizio diventa un responsabile del trattamento da regolare con un contratto.",
      },
      {
        title: "Cifratura: il livello che rende il backup difendibile",
        body: "Un disco esterno con dieci anni di cartelle cliniche, non cifrato, dimenticato in una borsa su un treno, è una violazione di dati personali con tutto quello che ne consegue. Lo stesso disco, cifrato con una password robusta, è un oggetto inutilizzabile per chi lo trova.\n\nSu Windows lo strumento nativo è BitLocker, disponibile nelle edizioni Pro ed Enterprise, che consente di cifrare sia il disco di sistema sia le unità rimovibili tramite BitLocker To Go. È la configurazione minima ragionevole per qualsiasi supporto che esce dallo studio, e vale la pena estenderla anche al disco del computer principale: un portatile sottratto dall'ambulatorio senza cifratura del disco espone l'intero archivio, indipendentemente dalla password di accesso a Windows.\n\nLa chiave di ripristino va conservata da qualche parte che non sia il computer cifrato — è un errore ricorrente e le sue conseguenze sono definitive. Un supporto separato, o un gestore di password affidabile, sono entrambe soluzioni accettabili; un file di testo sul desktop non lo è.",
      },
      {
        title: "Il backup che non hai mai ripristinato non è un backup",
        body: "È la parte che si salta sempre, ed è quella che distingue un backup reale da un backup presunto. Un processo automatico che gira ogni notte e produce file può fallire silenziosamente per mesi: un percorso cambiato, un disco pieno, un servizio che non riparte dopo un aggiornamento. Nessuno se ne accorge finché non serve.\n\nL'unico modo per saperlo è provare. Una volta ogni sei mesi, prendi il backup e ripristina i dati su una macchina diversa o in una cartella separata: verifica che i file ci siano davvero, che si aprano, che l'archivio sia completo e non tronco. Mezz'ora di lavoro due volte l'anno, con un beneficio sproporzionato rispetto al costo.\n\nVale la pena scrivere anche due righe di procedura: dove si trovano le copie, ogni quanto vengono fatte, chi le esegue, dove sta la chiave di ripristino e quali sono i passaggi per rimettere in piedi lo studio. Se l'unica persona che conosce la risposta è in ferie il giorno in cui il computer non si accende, la procedura non esiste. E se ti stai chiedendo se ne valga la pena: il criterio pratico è quanti giorni di attività clinica saresti disposto a perdere. Se la risposta è nessuno, il piano va scritto adesso, non dopo il primo incidente.",
      },
    ],
    faq: [
      {
        question: "Che cos'è la regola 3-2-1 del backup?",
        answer:
          "È lo standard di riferimento per la protezione dei dati: tre copie delle informazioni, conservate su due supporti diversi, di cui una custodita fuori sede. In uno studio medico si traduce nel dato sul computer, una copia su disco esterno o NAS che non resta collegato in permanenza, e una terza copia cifrata conservata altrove.",
      },
      {
        question: "Con un gestionale locale il backup è responsabilità mia?",
        answer:
          "Sì, ed è il rovescio della medaglia dell'archiviazione locale. Quando i dati clinici restano sul computer dello studio, nessun fornitore esegue backup al posto tuo: dischi cifrati, copie periodiche protette e test di ripristino ricadono sul medico. In cambio ottieni che i dati non transitino da server di terzi e che il perimetro di chi può accedervi sia netto.",
      },
      {
        question: "Posso usare un servizio cloud per la copia fuori sede?",
        answer:
          "Puoi, a una condizione: i dati sanitari vanno cifrati prima di lasciare lo studio, con una chiave che resta in tuo possesso. Se carichi cartelle cliniche in chiaro su un servizio online hai reintrodotto un trasferimento a terzi, e quel fornitore diventa un responsabile del trattamento da regolare contrattualmente. Con la cifratura lato client il servizio custodisce un archivio che non è in grado di leggere.",
      },
      {
        question: "Ogni quanto va testato il ripristino?",
        answer:
          "Una verifica ogni sei mesi è un compromesso ragionevole per uno studio privato. Un backup automatico può fallire silenziosamente per mesi — percorso cambiato, disco pieno, servizio non riavviato — e l'unico modo per accorgersene prima dell'emergenza è ripristinare davvero i dati su una macchina o una cartella diversa e controllare che l'archivio sia completo e apribile.",
      },
    ],
  },
  {
    slug: "consenso-informato-digitale-studio-medico",
    title: "Consenso informato: cosa dice la legge 219/2017 e come gestirlo senza carta",
    description:
      "La legge 219/2017 impone che il consenso informato sia documentato e inserito nella cartella clinica. Come raccoglierlo e archiviarlo in formato digitale in uno studio specialistico privato.",
    excerpt:
      "Il consenso informato non è un modulo da far firmare in fretta: è un atto che la legge vuole documentato e collegato alla cartella clinica. Ecco cosa serve e come smettere di gestirlo su carta.",
    date: "21 Luglio 2026",
    isoDate: "2026-07-21",
    category: "Normativa",
    lead: "In molti studi il consenso informato vive una doppia vita: da un lato è considerato un adempimento formale da sbrigare in sala d'attesa, dall'altro è il primo documento che viene cercato — spesso senza trovarlo — quando emerge una contestazione. La legge 219/2017 lo tratta come parte integrante della relazione di cura, e prescrive con precisione dove deve finire.",
    sections: [
      {
        title: "Cosa prescrive la legge 219/2017",
        body: "La legge 22 dicembre 2017, n. 219 ha dato al consenso informato una disciplina organica. Il passaggio operativamente più rilevante per lo studio privato è l'articolo 1, comma 4: il consenso informato, acquisito nei modi e con gli strumenti più consoni alle condizioni del paziente, è documentato in forma scritta o attraverso videoregistrazioni oppure, per la persona con disabilità, attraverso dispositivi che le consentano di comunicare.\n\nLa norma prosegue con l'indicazione che pesa di più sull'organizzazione dell'archivio: il consenso informato, in qualunque forma espresso, è inserito nella cartella clinica e nel fascicolo sanitario elettronico.\n\nDue conseguenze pratiche. La prima è che la forma scritta non è l'unica ammessa — la legge apre esplicitamente a modalità alternative da adattare alle condizioni del paziente — ma la documentazione è sempre necessaria: un consenso raccolto solo a voce e non documentato è, dal punto di vista probatorio, un consenso che non esiste. La seconda è che il documento non è un foglio autonomo da conservare a parte: deve stare dentro la cartella clinica, collegato al paziente e alla prestazione.",
      },
      {
        title: "Dove si rompe il flusso cartaceo",
        body: "Il modulo cartaceo firmato è la modalità più diffusa e, in astratto, perfettamente conforme. I problemi nascono in quello che succede dopo la firma.\n\nIl primo è la separazione fisica dal resto della documentazione. Il consenso finisce in un raccoglitore ordinato per data mentre la cartella della paziente sta altrove: sono due archivi paralleli che la legge vorrebbe uno solo. Quando serve recuperare il consenso di una prestazione di tre anni fa, la ricerca dipende dalla memoria di chi ha archiviato.\n\nIl secondo è il controllo di completezza. Con un flusso cartaceo nessuno verifica sistematicamente che ogni prestazione che lo richiedeva abbia il proprio consenso firmato: l'assenza si scopre quando qualcuno la cerca, cioè nel momento peggiore.\n\nIl terzo è la gestione delle versioni. I moduli di consenso vengono aggiornati nel tempo, e in un archivio cartaceo capita di trovare la versione vecchia ancora in uso mesi dopo la revisione, semplicemente perché sono rimaste copie stampate nel cassetto. Ricostruire quale versione dell'informativa sia stata effettivamente sottoposta a una paziente in una certa data diventa impossibile.",
      },
      {
        title: "Come funziona un consenso gestito nel gestionale",
        body: "Spostare il consenso dentro il gestionale non cambia il contenuto del documento né la sostanza dell'obbligo: cambia il fatto che il documento nasca già collegato alla persona e alla prestazione, invece di dover essere ricongiunto a mano.\n\nIl flusso tipico è questo. Il modulo esiste come modello nel software, in una versione unica e aggiornata, così che nessuno usi per errore un'informativa superata. Al momento della visita il consenso viene generato per quella paziente, con i suoi dati già compilati dall'anagrafica: si elimina la trascrizione manuale e con essa gli errori di trascrizione. Una volta acquisito, il documento resta agganciato alla scheda della paziente e compare nel suo storico insieme a visite e referti — che è esattamente ciò che la legge chiede quando prescrive l'inserimento in cartella clinica. Recuperarlo tre anni dopo è una ricerca per nome, non una battuta di caccia in un raccoglitore.\n\nÈ il modo in cui Corioli gestisce il consenso informato: come parte della cartella clinica elettronica, non come allegato separato. Va detto con precisione cosa questo significa e cosa no: il software garantisce che il documento sia prodotto correttamente, collegato alla paziente e sempre reperibile nello storico. La validità giuridica della sottoscrizione dipende invece dalla modalità di firma che scegli di adottare, ed è un piano distinto — con implicazioni diverse a seconda che si usi una firma autografa su copia stampata poi acquisita, o una firma elettronica di livello adeguato.",
      },
      {
        title: "Consenso al trattamento e consenso alla cura: non confonderli",
        body: "Vale la pena chiarire un equivoco che ricorre spesso, perché genera moduli confusi e archivi disordinati. Il consenso informato di cui parla la legge 219/2017 riguarda l'atto sanitario: è l'adesione consapevole della paziente al trattamento proposto, dopo essere stata informata su natura, benefici, rischi e alternative.\n\nIl consenso al trattamento dei dati personali disciplinato dal GDPR è un'altra cosa, e risponde a una domanda diversa: come possono essere trattati i suoi dati e per quali finalità. Va peraltro ricordato che nel contesto sanitario il trattamento dei dati per finalità di cura si fonda normalmente su basi giuridiche diverse dal consenso, cosa che rende ancora meno sensato accorpare i due documenti in un unico foglio da far firmare.\n\nIn pratica: teneteli distinti, con testi separati e finalità dichiarate in modo chiaro. Un unico modulo che mescola l'informativa clinica e quella privacy indebolisce entrambe, perché rende difficile dimostrare che la paziente sia stata effettivamente informata su ciascuna delle due cose. Sono anche documenti con cicli di vita diversi: l'informativa privacy si aggiorna quando cambiano i trattamenti, il consenso alla cura si rinnova quando cambia la prestazione proposta.",
      },
    ],
    faq: [
      {
        question: "Il consenso informato deve essere per forza scritto?",
        answer:
          "L'articolo 1, comma 4 della legge 219/2017 prevede che il consenso sia documentato in forma scritta oppure attraverso videoregistrazioni o, per la persona con disabilità, tramite dispositivi che le consentano di comunicare. La forma scritta non è quindi l'unica ammessa, ma la documentazione è sempre necessaria: un consenso raccolto solo a voce e non documentato non è dimostrabile.",
      },
      {
        question: "Dove va conservato il consenso informato?",
        answer:
          "La legge è esplicita: il consenso informato, in qualunque forma espresso, è inserito nella cartella clinica e nel fascicolo sanitario elettronico. Non è quindi un documento da archiviare a parte in un raccoglitore separato, ma parte integrante della documentazione clinica della paziente.",
      },
      {
        question: "Consenso informato e consenso privacy sono la stessa cosa?",
        answer:
          "No, e conviene tenerli su documenti distinti. Il consenso informato della legge 219/2017 riguarda l'adesione consapevole della paziente al trattamento sanitario proposto. Il consenso privacy riguarda il trattamento dei dati personali secondo il GDPR — trattamento che, per le finalità di cura, si fonda peraltro normalmente su basi giuridiche diverse dal consenso. Accorparli in un unico modulo indebolisce entrambi.",
      },
      {
        question: "Un consenso gestito nel gestionale ha valore legale?",
        answer:
          "Il gestionale garantisce che il documento sia prodotto nella versione corretta, compilato con i dati della paziente e conservato dentro la sua cartella clinica, come la legge richiede. La validità della sottoscrizione dipende però dalla modalità di firma adottata: una firma autografa su copia stampata e poi acquisita, o una firma elettronica di livello adeguato, hanno effetti probatori diversi. È una scelta da valutare con il proprio consulente in base al tipo di prestazione.",
      },
    ],
  },
  {
    slug: "fse-2-0-obbligo-studi-privati-cosa-fare",
    title: "FSE 2.0 obbligatorio per gli studi privati: cosa deve fare lo specialista",
    description:
      "Dal 31 marzo 2026 il Fascicolo Sanitario Elettronico 2.0 è obbligatorio anche per le strutture private: cosa significa per il medico specialista, quali documenti vanno alimentati e da dove iniziare.",
    excerpt:
      "Il FSE 2.0 è diventato obbligatorio anche per il privato: cosa cambia per lo specialista in ambulatorio, quali documenti vanno inviati e come prepararsi senza stravolgere il proprio flusso.",
    date: "3 Luglio 2026",
    isoDate: "2026-07-03",
    category: "Normativa",
    lead: "Dal 31 marzo 2026 anche le strutture sanitarie private hanno l'obbligo di alimentare il Fascicolo Sanitario Elettronico 2.0. Per molti specialisti in libera professione è il primo contatto vero con il FSE, e le domande sono sempre le stesse: cosa devo inviare, con quali strumenti, e cosa rischio se non lo faccio? Facciamo ordine.",
    sections: [
      {
        title: "Cos'è il FSE 2.0 e perché ora riguarda anche il privato",
        body: "Il Fascicolo Sanitario Elettronico è l'insieme dei dati e documenti digitali di tipo sanitario generati da eventi clinici presenti e trascorsi del paziente. La versione 2.0, spinta dagli investimenti del PNRR, punta a renderlo davvero completo e interoperabile a livello nazionale: non più un contenitore alimentato quasi solo dalle strutture pubbliche, ma il punto unico in cui confluisce la storia clinica del cittadino.\n\nÈ qui che entra in gioco il privato: il quadro normativo (a partire dal decreto FSE 2.0 e dai successivi provvedimenti attuativi) ha esteso l'obbligo di alimentazione anche alle strutture sanitarie private e ai professionisti autorizzati. La data spartiacque più citata è il 31 marzo 2026: da lì in avanti anche ambulatori e specialisti privati sono chiamati ad alimentare il fascicolo con i documenti prodotti durante le prestazioni.",
      },
      {
        title: "Quali documenti vanno alimentati",
        body: "Il perimetro esatto dipende dai decreti attuativi e dalle indicazioni regionali, ma il principio è chiaro: i documenti clinici prodotti dalla prestazione — in particolare i referti — devono confluire nel fascicolo del paziente in formato strutturato (CDA2, il formato documentale previsto dal FSE), attraverso i canali regionali di conferimento.\n\nPer lo specialista privato questo significa due cose molto concrete. La prima: il referto non può più essere solo un foglio Word stampato, deve esistere come documento digitale ordinato, completo dei dati del paziente e della prestazione. La seconda: serve un canale tecnico di invio verso l'infrastruttura regionale, che tipicamente passa da sistemi di integrazione accreditati o dai servizi messi a disposizione dalla propria Regione.\n\nIl consiglio operativo è di procedere per gradi: verifica sul sito della tua Regione le modalità di accreditamento per le strutture private, chiedi al tuo consulente o alla tua associazione di categoria a che punto sono gli adempimenti nella tua zona, e nel frattempo metti ordine nel modo in cui produci e archivi i referti.",
      },
      {
        title: "Il prerequisito che molti sottovalutano: un archivio clinico ordinato",
        body: "Si parla molto di canali di invio e poco del punto di partenza: non puoi alimentare il FSE se i tuoi referti nascono sparsi tra file Word, PDF rinominati a mano e cartelle sul desktop. L'obbligo di alimentazione presuppone che ogni prestazione produca un documento clinico completo, associato correttamente al paziente, con dati anagrafici e clinici coerenti.\n\nÈ esattamente il lavoro che un gestionale medico fa per natura: anagrafica unica, visita strutturata, referto generato dai dati della cartella — non ricopiato a mano. Chi lavora già così ha davanti solo il passaggio tecnico dell'invio; chi lavora ancora con documenti sciolti ha davanti anche il riordino dell'archivio, ed è quello il vero costo nascosto dell'adeguamento.\n\nCorioli aiuta proprio su questo primo miglio: ogni visita produce un referto PDF completo e coerente con la cartella clinica, l'archivio resta ordinato per paziente e i dati storici si importano anche da Word ed Excel. Sul fronte dell'invio regionale, il consiglio resta quello di verificare i canali della propria Regione: il panorama è in evoluzione e cambia da territorio a territorio.",
      },
      {
        title: "Cosa rischia chi non si adegua",
        body: "Al di là delle possibili conseguenze formali — che dipendono dai provvedimenti attuativi e dai controlli regionali — il rischio più concreto è rimanere indietro rispetto a uno standard che sta diventando la normalità del sistema sanitario: pazienti che si aspettano di trovare i propri referti nel fascicolo, colleghi che vi accedono per ricostruire la storia clinica, Regioni che progressivamente stringono sui requisiti.\n\nLa buona notizia è che per un singolo specialista l'adeguamento non è un progetto enorme: si tratta di digitalizzare bene il proprio flusso di refertazione e agganciarsi ai canali regionali quando disponibili. Il momento giusto per sistemare la parte documentale è adesso, senza aspettare la scadenza successiva.",
      },
    ],
    faq: [
      {
        question: "Da quando è obbligatorio il FSE 2.0 per i privati?",
        answer:
          "La data di riferimento più citata è il 31 marzo 2026, da cui anche le strutture sanitarie private sono chiamate ad alimentare il Fascicolo Sanitario Elettronico 2.0 con i documenti clinici prodotti. Tempi e modalità operative dipendono però dai provvedimenti attuativi e dall'accreditamento presso la propria Regione: verifica sempre le indicazioni regionali aggiornate.",
      },
      {
        question: "Quali documenti deve inviare al FSE uno specialista privato?",
        answer:
          "Il nucleo dell'obbligo riguarda i documenti clinici generati dalle prestazioni, in primo luogo i referti, in formato strutturato secondo gli standard previsti (CDA2). Il perimetro esatto e i tracciati sono definiti dai decreti attuativi e dalle piattaforme regionali di conferimento.",
      },
      {
        question: "Corioli invia automaticamente i referti al FSE?",
        answer:
          "Corioli si occupa del prerequisito fondamentale: produrre per ogni visita un referto completo e coerente con la cartella clinica, in un archivio ordinato per paziente. Per il conferimento al FSE le modalità dipendono dai canali regionali di integrazione, che variano da territorio a territorio: contattaci per capire come organizzare il flusso nel tuo caso specifico.",
      },
    ],
  },
  {
    slug: "percentili-crescita-pediatrici-oms-guida",
    title: "Percentili di crescita OMS: come leggerli e calcolarli senza errori",
    description:
      "Guida pratica ai percentili di crescita pediatrici OMS: cosa indicano peso e altezza per età, come si interpreta l'attraversamento dei canali, il target genetico di Tanner e perché conviene calcolarli nel gestionale.",
    excerpt:
      "Cosa dicono davvero i percentili OMS di peso e altezza, quando un attraversamento di canale deve far drizzare le antenne e come il target genetico aiuta a interpretare la curva.",
    date: "30 Giugno 2026",
    isoDate: "2026-06-30",
    category: "Pediatria",
    lead: "I percentili di crescita sono il linguaggio con cui la pediatria descrive se un bambino sta crescendo bene. Ma tra curve OMS, canali di crescita e target genetico, l'interpretazione richiede metodo — e il calcolo manuale, visita dopo visita, è una fonte silenziosa di errori.",
    sections: [
      {
        title: "Cosa sono i percentili e cosa dicono davvero",
        body: "Un percentile colloca la misura di un bambino rispetto alla popolazione di riferimento della stessa età e sesso: un peso al 25° percentile significa che il 25% dei bambini pesa meno e il 75% pesa di più. Non è un voto: un bambino al 10° percentile può essere perfettamente sano, così come uno al 90°.\n\nGli standard OMS — costruiti su bambini allattati al seno e cresciuti in condizioni ottimali — sono il riferimento raccomandato nei primi anni di vita, e descrivono come i bambini dovrebbero crescere, non semplicemente come crescono in media. Per questo sono lo strumento giusto per intercettare precocemente deviazioni della traiettoria di crescita.",
      },
      {
        title: "La singola misura conta poco: conta la traiettoria",
        body: "L'errore interpretativo più comune è dare peso a una misura isolata. Il dato clinicamente rilevante è la traiettoria: un bambino che viaggia stabile sul suo canale — che sia il 15° o l'85° percentile — sta seguendo la propria curva. Il segnale da approfondire è l'attraversamento di canali: una discesa (o salita) marcata e persistente attraverso le linee percentili, classicamente il superamento di due canali principali.\n\nPer valutare la traiettoria servono le misure precedenti, ordinate e confrontabili: peso, lunghezza o statura, circonferenza cranica nei primi anni, ciascuna con la propria data. È qui che l'archivio conta quanto la misura: se i dati delle visite passate sono sparsi tra fogli, ricette e memoria, la curva di crescita si ricostruisce male, e il giudizio clinico perde il suo riferimento principale.",
      },
      {
        title: "Il target genetico: la statura dei genitori come bussola",
        body: "La crescita staturale va sempre letta anche alla luce del potenziale genetico. Il metodo classico è il target genetico secondo Tanner: si parte dalla media delle stature dei genitori e si corregge per il sesso del bambino (convenzionalmente ±6,5 cm), ottenendo la statura bersaglio attesa con il suo intervallo di variabilità.\n\nUn bambino al 20° percentile con genitori minuti è probabilmente in perfetta coerenza con il proprio potenziale; lo stesso percentile con genitori alti merita uno sguardo in più. Il target genetico trasforma quindi il percentile da numero assoluto a valutazione contestualizzata — a patto di calcolarlo e di averlo sotto gli occhi durante la visita, non su un foglietto di tre visite fa.",
      },
      {
        title: "BMI pediatrico e percentili di peso: attenzione alle scorciatoie",
        body: "Nel bambino il BMI non si interpreta con le soglie fisse dell'adulto: anche l'indice di massa corporea va riportato a percentili per età e sesso, perché la composizione corporea cambia fisiologicamente durante la crescita. Sovrappeso e sottopeso pediatrici si definiscono rispetto alle curve, non con il 18,5-25 dell'adulto.\n\nQuesto moltiplica i calcoli da fare in visita: percentile del peso, della statura, del BMI, target genetico, tutto per età espresse in mesi e giorni. Fatti a mano o con app separate, sono minuti persi e occasioni di errore di trascrizione; l'esito peggiore è il referto che riporta un percentile non coerente con la misura registrata in cartella.",
      },
      {
        title: "Percentili nel gestionale: il calcolo dove nasce il dato",
        body: "La soluzione più solida è calcolare i percentili direttamente dove il dato viene registrato: nella cartella clinica. Il modulo pediatrico di Corioli include percentili di peso e altezza secondo gli standard OMS, il target genetico calcolato dalle stature dei genitori, il BMI pediatrico e il grafico dell'andamento staturale visita dopo visita.\n\nIl medico inserisce la misura una volta sola: percentile e posizione sulla curva si aggiornano da soli, la traiettoria è subito visibile accanto alle visite precedenti e il referto eredita valori coerenti con la cartella. E i dati restano in locale, nel computer dello studio: un dettaglio che per chi tratta dati di minori non è affatto un dettaglio.",
      },
    ],
    faq: [
      {
        question: "Quali curve di crescita si usano per i bambini?",
        answer:
          "Nei primi anni di vita il riferimento raccomandato sono gli standard di crescita OMS, costruiti su bambini cresciuti in condizioni ottimali. Descrivono peso, lunghezza/statura, circonferenza cranica e BMI per età e sesso, e permettono di collocare ogni misura in un percentile confrontabile nel tempo.",
      },
      {
        question: "Quando un percentile deve preoccupare?",
        answer:
          "Più della singola misura conta la traiettoria: un bambino stabile sul proprio canale di crescita sta generalmente seguendo la sua curva fisiologica. Il segnale da approfondire è l'attraversamento marcato e persistente dei canali percentili, classicamente il superamento di due linee principali, sempre interpretato dal pediatra nel contesto clinico e del potenziale genetico.",
      },
      {
        question: "Come si calcola il target genetico di Tanner?",
        answer:
          "Si calcola la media delle stature dei due genitori e si corregge per il sesso del bambino, convenzionalmente aggiungendo 6,5 cm per i maschi e sottraendo 6,5 cm per le femmine. Il risultato è la statura bersaglio attesa, con un intervallo di variabilità, da confrontare con la traiettoria staturale reale del bambino.",
      },
      {
        question: "Corioli calcola i percentili OMS automaticamente?",
        answer:
          "Sì. Il modulo pediatrico di Corioli calcola percentili di peso e altezza secondo gli standard OMS, il target genetico dalle stature dei genitori e il BMI pediatrico, e traccia il grafico dell'andamento visita dopo visita. I valori si aggiornano inserendo la misura una volta sola e vengono riportati coerenti nel referto PDF.",
      },
    ],
  },
  {
    slug: "stima-peso-fetale-hadlock-guida-pratica",
    title: "Stima del peso fetale con Hadlock: guida pratica per l'ambulatorio",
    description:
      "Come funziona la stima del peso fetale con le formule di Hadlock: parametri biometrici (BPD, HC, AC, FL), margini di errore, percentili di crescita e perché conviene calcolarla dentro la cartella clinica.",
    excerpt:
      "BPD, HC, AC e FL: come le formule di Hadlock stimano il peso fetale, quanto è ampio il margine d'errore e come evitare gli errori di trascrizione tra ecografo, cartella e referto.",
    date: "26 Giugno 2026",
    isoDate: "2026-06-26",
    category: "Ostetricia",
    lead: "La stima del peso fetale è uno dei calcoli più frequenti dell'ecografia ostetrica del secondo e terzo trimestre, e le formule di Hadlock ne sono lo standard di fatto. Capire cosa c'è dentro quel numero — e quanto fidarsi — aiuta a usarlo bene; calcolarlo dentro la cartella clinica aiuta a non sbagliarlo.",
    sections: [
      {
        title: "Cosa misura davvero la stima del peso fetale",
        body: "Il peso fetale non si misura: si stima. Le formule di Hadlock, pubblicate negli anni '80 e ancora oggi le più utilizzate al mondo, combinano i parametri biometrici rilevati in ecografia — diametro biparietale (BPD), circonferenza cranica (HC), circonferenza addominale (AC) e lunghezza del femore (FL) — in equazioni logaritmiche che restituiscono il peso stimato in grammi.\n\nEsistono diverse varianti della formula (con due, tre o quattro parametri): quella a tre parametri HC-AC-FL e quella a quattro sono tra le più diffuse nei software ecografici. La circonferenza addominale è il parametro che pesa di più sulla stima, ed è anche il più sensibile alle condizioni di misura.",
      },
      {
        title: "Il margine di errore: un numero da leggere con onestà",
        body: "Anche nelle mani migliori, la stima ecografica del peso fetale ha un errore tipico intorno al ±10% rispetto al peso reale alla nascita, che può ampliarsi agli estremi (feti molto piccoli o macrosomici) e a fine gravidanza. Su un feto stimato 3.000 g significa un intervallo realistico di circa 2.700-3.300 g.\n\nQuesto non rende la stima inutile — resta fondamentale per il monitoraggio della crescita e per le decisioni cliniche — ma suggerisce due buone pratiche: comunicarla come stima con il suo intervallo, e valutarla sempre in serie, confrontando l'andamento tra ecografie successive più che il singolo valore assoluto.",
      },
      {
        title: "Dal peso stimato al percentile: il passaggio che dà significato",
        body: "Il peso stimato da solo dice poco: 1.800 g può essere perfettamente adeguato a 32 settimane e fortemente sospetto a 36. Il significato clinico arriva dal percentile, cioè dal confronto del peso stimato con la distribuzione attesa per quell'età gestazionale: è così che si intercettano il feto piccolo per epoca (SGA/FGR) e il feto grande (LGA).\n\nQuesto rende la stima del peso inseparabile dalla datazione: un errore di una settimana nell'età gestazionale sposta il percentile anche di molto. Datazione, biometria, stima Hadlock e percentile sono anelli della stessa catena, e la catena è forte quanto il suo anello più debole — che spesso è la trascrizione manuale dei numeri da uno strumento all'altro.",
      },
      {
        title: "L'errore più banale: la trascrizione tra ecografo, appunti e referto",
        body: "Nella pratica reale l'errore più frequente non è nella formula: è nel viaggio dei numeri. Le misure si leggono sull'ecografo, si appuntano, si ricopiano in un'app o in un foglio per il calcolo, poi si trascrivono nel referto. Ogni passaggio è un'occasione per invertire due cifre, confondere HC e AC o riportare un percentile calcolato su un'epoca sbagliata.\n\nSu una gravidanza seguita per mesi, questi micro-errori producono referti incoerenti tra loro — e sono il tipo di incoerenza che una paziente attenta, o un collega che rilegge la storia, nota subito.",
      },
      {
        title: "Hadlock dentro la cartella: una misura, tutto coerente",
        body: "La soluzione è far viaggiare i numeri il meno possibile: inserire le misure biometriche una volta sola, nella cartella clinica, e lasciare che stima di Hadlock, percentili e curva di crescita si calcolino da soli, agganciati alla datazione già stabilita in cartella.\n\nÈ così che funziona in Corioli: la biometria inserita in visita produce automaticamente peso stimato, percentili e posizione sulla curva di crescita, il referto PDF eredita gli stessi valori senza ricopiature e ogni ecografia si confronta con le precedenti nella timeline della paziente. Meno trascrizioni, meno errori, e una storia di crescita fetale leggibile a colpo d'occhio — con i dati salvati in locale, nello studio.",
      },
    ],
    faq: [
      {
        question: "Quali parametri usa la formula di Hadlock?",
        answer:
          "Le formule di Hadlock combinano fino a quattro parametri biometrici: diametro biparietale (BPD), circonferenza cranica (HC), circonferenza addominale (AC) e lunghezza del femore (FL). Le varianti più usate impiegano tre (HC, AC, FL) o quattro parametri; la circonferenza addominale è quella che incide di più sulla stima.",
      },
      {
        question: "Quanto è precisa la stima del peso fetale?",
        answer:
          "L'errore tipico è intorno al ±10% rispetto al peso alla nascita, e può aumentare per feti molto piccoli o macrosomici e a fine gravidanza. Per questo la stima va comunicata come tale, con il suo intervallo, e interpretata soprattutto nell'andamento tra ecografie successive.",
      },
      {
        question: "Perché il percentile conta più del peso assoluto?",
        answer:
          "Perché lo stesso peso può essere adeguato o patologico a seconda dell'età gestazionale: è il confronto con la distribuzione attesa per quell'epoca a identificare feti piccoli (SGA/FGR) o grandi (LGA) per l'epoca. Il percentile dipende criticamente da una datazione corretta della gravidanza.",
      },
      {
        question: "Corioli calcola la stima di Hadlock automaticamente?",
        answer:
          "Sì. Inserendo la biometria in visita, Corioli calcola il peso fetale stimato secondo Hadlock, i percentili e la posizione sulla curva di crescita, tutto agganciato alla datazione della cartella. I valori vengono riportati coerenti nel referto PDF, senza trascrizioni manuali.",
      },
    ],
  },
  {
    slug: "corioli-congresso-miomi-uterini-2026",
    title: "Com'è andata: Corioli al congresso sui miomi uterini",
    description:
      "Il racconto della giornata di Corioli al congresso sui miomi uterini a Nana Bianca: lo stand, le demo dal vivo e i confronti con ginecologi e ostetrici sulla cartella clinica e sul referto in un click.",
    excerpt:
      "Eravamo allo stand del congresso sui miomi uterini, tra ginecologi e ostetrici: ecco com'è andata la giornata, cosa abbiamo mostrato e cosa ci portiamo a casa.",
    date: "19 Giugno 2026",
    isoDate: "2026-06-19",
    category: "Eventi",
    lead: "Ieri abbiamo portato Corioli al congresso sui miomi uterini, faccia a faccia con i medici per cui il software è pensato. Un'intera giornata allo stand, tra demo dal vivo e conversazioni con ginecologi e ostetrici: ecco com'è andata e cosa ci portiamo a casa.",
    coverImage: {
      src: "/blog/corioli-congresso-miomi-stand.jpg",
      alt: "Lo stand Corioli al congresso sui miomi uterini, con il roll-up 'Tu visiti. Corioli referta.' e il tavolo con le brochure.",
      width: 1200,
      height: 1600,
      caption:
        "Lo stand Corioli al congresso: 'Tu visiti. Corioli referta.'",
    },
    sections: [
      {
        title: "Una giornata tra ginecologi e ostetrici",
        body: "Come avevamo anticipato qui sul blog, il 18 giugno 2026 saremmo stati al congresso dedicato ai miomi uterini ospitato a Nana Bianca. Ci siamo andati davvero, e per noi è stata la giornata più importante degli ultimi mesi: passare un'intera giornata allo stand, a parlare con i medici che ogni giorno usano - o potrebbero usare - un gestionale come il nostro.\n\nNon è la stessa cosa raccontare un software a distanza e mostrarlo dal vivo, con il medico che ti chiede 'e questo come lo gestisci?' mentre guarda lo schermo. È quel confronto diretto, tra una visita raccontata e un referto generato sotto i loro occhi, il motivo per cui eravamo lì.",
        image: {
          src: "/blog/corioli-congresso-miomi-team.jpg",
          alt: "Membro del team Corioli allo stand del congresso, accanto al roll-up dedicato a ginecologi e ostetrici.",
          width: 1200,
          height: 1600,
          caption:
            "Allo stand Corioli, pronti ad accogliere ginecologi e ostetrici.",
        },
      },
      {
        title: "Cosa abbiamo mostrato allo stand",
        body: "Il filo conduttore dello stand era la domanda che campeggiava sul roll-up: quanta parte della visita finisce in burocrazia? La risposta che abbiamo mostrato dal vivo è semplice - tu visiti, Corioli referta. Abbiamo fatto vedere come si inserisce una misura una volta sola e come percentili, curve di crescita e referto completo si generino da soli, in un click.\n\nI temi più apprezzati sono stati quelli che i medici toccano con mano ogni giorno: la cartella clinica pensata per ginecologia e ostetricia, la biometria e il Doppler con percentili automatici, l'import dei pazienti da MioDottore e Doctolib. E poi un punto che a Nana Bianca è tornato spesso: dal 31 marzo 2026 il FSE 2.0 è obbligatorio per le strutture private, e molti volevano capire se erano pronti.",
      },
      {
        title: "Le conversazioni che ci portiamo a casa",
        body: "Il valore di una giornata così non sono solo le demo, sono le domande. Tornano sempre le stesse, e per noi sono oro: quanto tempo recupero davvero a settimana? I dati delle mie pazienti dove finiscono e sono al sicuro? Riesco a confrontare le misure di un mioma o di una biometria nel tempo senza ricostruire tutto a memoria?\n\nSono esattamente le domande attorno a cui Corioli è nato. Sentirle ripetere da chi sta in ambulatorio ogni giorno è la conferma che stiamo lavorando sui problemi giusti - e l'elenco di spunti che ci riportiamo in ufficio è già diventato lavoro per le prossime settimane.",
      },
      {
        title: "Grazie a chi e passato a trovarci",
        body: "Grazie a tutti i ginecologi e gli ostetrici che si sono fermati allo stand, hanno provato Corioli e ci hanno raccontato il loro modo di lavorare. Corioli è sviluppato in Italia, con i medici, e gestisce già oltre 15.000 cartelle pazienti: giornate come questa sono il motivo per cui continua a migliorare.\n\nNon sei riuscito a passare? Puoi vedere Corioli dal vivo lo stesso: richiedi una demo gratuita di 15 minuti dalla pagina contatti e ti mostriamo come funziona nel tuo flusso clinico, con 90 giorni di prova senza impegno.",
      },
    ],
  },
  {
    slug: "miomi-uterini-storia-clinica-completa",
    title: "Miomi uterini: perché la storia clinica completa fa la differenza",
    description:
      "Nella gestione dei miomi uterini avere a portata di mano l'intera storia clinica della paziente migliora diagnosi, follow-up e decisioni. Come Corioli aiuta il ginecologo in ambulatorio.",
    excerpt:
      "Dimensioni, sintomi e follow-up dei miomi vanno letti nel tempo: avere l'intera storia clinica a portata di mano migliora le decisioni. Vi aspettiamo al congresso a Nana Bianca.",
    date: "17 Giugno 2026",
    isoDate: "2026-06-17",
    category: "Eventi",
    lead: "I miomi uterini sono tra le condizioni più frequenti in ginecologia, ma la loro gestione non si gioca in una singola visita: si gioca nel tempo. E nel tempo conta una cosa sopra le altre: avere l'intera storia clinica della paziente a portata di mano, senza doverla ricostruire ogni volta.",
    sections: [
      {
        title: "Domani al congresso sui miomi: ci siamo anche noi",
        body: "Domani, 18 giugno 2026, saremo al congresso dedicato ai miomi uterini ospitato a Nana Bianca. Per noi è l'occasione di confrontarci con ginecologi e ostetrici sul tema che ci sta più a cuore: come la tecnologia, quando è progettata davvero intorno alla visita, può migliorare la qualità del lavoro clinico invece di appesantirlo.\n\nI miomi sono un esempio perfetto. Sono frequentissimi, spesso asintomatici, ma quando contano richiedono decisioni delicate: sorvegliare, trattare farmacologicamente o operare. E ognuna di queste decisioni è migliore quando il medico ha davanti, in pochi secondi, tutto ciò che è successo prima.",
      },
      {
        title: "Perche i miomi si gestiscono nel tempo, non in una visita",
        body: "Un mioma non è una fotografia, è un film. Dimensioni, numero, localizzazione (sottosieroso, intramurale, sottomucoso) e impatto sui sintomi - menometrorragie, dolore pelvico, effetti sulla fertilità - cambiano nel corso dei mesi e degli anni. La decisione clinica nasce dal confronto: questo mioma è cresciuto rispetto all'ecografia di sei mesi fa? I sintomi sono peggiorati dopo l'ultima terapia? La paziente ha un desiderio di gravidanza che modifica le priorità?\n\nSenza una storia clinica ordinata, queste domande costringono a ricostruire a memoria, a cercare referti sparsi o a ripetere esami. Con una cartella ben strutturata, la risposta è già lì, davanti agli occhi del medico.",
      },
      {
        title: "Il valore della storia clinica a portata di mano",
        body: "Avere la storia clinica completa durante la visita significa poter confrontare le misure ecografiche di un mioma nel tempo, rivedere le terapie già provate e la loro efficacia, controllare gli esami precedenti e l'anamnesi senza fare ripartire la paziente dall'inizio del racconto. Si traduce in meno domande ripetute, meno esami inutili e decisioni più solide.\n\nÈ un vantaggio per la paziente, che si sente seguita con continuità, ma anche per il medico: una prestazione migliore non dipende solo dall'esperienza, dipende dall'avere il quadro completo al momento giusto. Ogni minuto risparmiato a cercare informazioni è un minuto in più dedicato alla decisione clinica e alla relazione con la paziente.",
      },
      {
        title: "Come Corioli mette la storia clinica al centro della visita",
        body: "Corioli è un gestionale medico pensato per la pratica clinica di ginecologi e ostetrici. La cartella ginecologica e ostetrica raccoglie anamnesi strutturata, diario delle visite con timeline, referti, ecografie e allegati in un unico ambiente consultabile in pochi clic. I valori - comprese le misure dei miomi - restano confrontabili nel tempo, così il follow-up smette di essere una ricostruzione a memoria.\n\nIl risultato è quello che raccontiamo al congresso: il medico arriva alla decisione con il quadro completo davanti, produce il referto senza copia-incolla e dedica più attenzione alla paziente. Se domani sei a Nana Bianca, passa a trovarci: ti mostriamo come funziona sul campo.",
      },
    ],
    faq: [
      {
        question:
          "Come aiuta un gestionale nella gestione dei miomi uterini?",
        answer:
          "Un gestionale clinico raccoglie in un unico luogo le ecografie, le misure dei miomi, le terapie provate e l'anamnesi della paziente, rendendoli confrontabili nel tempo. Questo permette al ginecologo di valutare rapidamente se un mioma è cresciuto, se i sintomi sono cambiati e se la strategia (sorveglianza, terapia medica o chirurgia) va aggiornata, senza ricostruire la storia a memoria o cercare referti sparsi.",
      },
      {
        question:
          "Posso confrontare le misure dei miomi nel tempo con Corioli?",
        answer:
          "Sì. Corioli conserva i dati delle visite in una cartella ginecologica strutturata, con una timeline che permette di confrontare misure, referti ed esami tra una visita e l'altra. Per il follow-up dei miomi questo significa avere subito davanti l'andamento nel tempo, un elemento decisivo per scegliere tra sorveglianza e trattamento.",
      },
      {
        question: "Dove posso vedere Corioli dal vivo?",
        answer:
          "Saremo presenti al congresso sui miomi uterini a Nana Bianca il 18 giugno 2026, dove mostriamo come Corioli supporta il ginecologo in ambulatorio. In alternativa, puoi richiedere una demo gratuita di 15 minuti dalla pagina contatti del sito Corioli e provare il software nel tuo flusso clinico per 90 giorni.",
      },
    ],
  },
  {
    slug: "calcolo-eta-gestazionale-settimane-gravidanza",
    title:
      "Calcolo dell'età gestazionale: settimane di gravidanza e datazione",
    description:
      "Come si calcola l'età gestazionale e la data presunta del parto: regola di Naegele, datazione ecografica, settimane + giorni e perché un gestionale ostetrico riduce gli errori.",
    excerpt:
      "Regola di Naegele, datazione ecografica e settimane+giorni: come si calcola l'età gestazionale senza errori e perché conviene farlo dentro la cartella clinica.",
    date: "16 Giugno 2026",
    isoDate: "2026-06-16",
    category: "Ostetricia",
    lead: "L'età gestazionale è il punto di partenza di ogni visita ostetrica: da essa dipendono la data presunta del parto, l'interpretazione della biometria fetale e il timing degli screening. Calcolarla in modo corretto e mantenerla coerente nel tempo è tanto importante quanto è facile sbagliarla con conti fatti a mano.",
    sections: [
      {
        title: "Cos'è l'età gestazionale e perché è il riferimento di tutto",
        body: "L'età gestazionale esprime da quanto tempo è in corso la gravidanza e si misura in settimane più giorni (per esempio 24+3, cioè 24 settimane e 3 giorni). Per convenzione si conta a partire dal primo giorno dell'ultima mestruazione, non dal concepimento: per questo l'età gestazionale è di circa due settimane superiore all'età concezionale.\n\nÈ il riferimento su cui poggia tutto il resto: la datazione determina la data presunta del parto, definisce le finestre per gli screening del primo e secondo trimestre e permette di leggere correttamente la biometria fetale e i percentili di crescita. Un errore di datazione, anche di pochi giorni, si propaga a cascata su tutte le valutazioni successive.",
      },
      {
        title: "Regola di Naegele e data presunta del parto",
        body: "Il metodo classico per stimare la data presunta del parto (DPP) è la regola di Naegele: si prende il primo giorno dell'ultima mestruazione, si aggiungono 7 giorni, si sottraggono 3 mesi e si aggiunge un anno. Il risultato corrisponde a una gravidanza di circa 280 giorni (40 settimane) dall'ultima mestruazione.\n\nLa regola assume però un ciclo regolare di 28 giorni con ovulazione al quattordicesimo giorno. Quando il ciclo è più lungo, più corto o irregolare, la stima va corretta di conseguenza; lo stesso vale se la data dell'ultima mestruazione è incerta. Per questo la regola di Naegele è un buon punto di partenza, ma raramente l'ultima parola.",
      },
      {
        title: "Datazione ecografica: quando prevale sull'ultima mestruazione",
        body: "Nel primo trimestre la misura della lunghezza cranio-caudale (CRL) è il metodo più accurato per datare la gravidanza. Le principali linee guida raccomandano di rivedere la datazione basata sull'ultima mestruazione quando la stima ecografica se ne discosta oltre una certa soglia - indicativamente alcuni giorni nelle prime settimane, fino a circa una settimana verso la fine del primo trimestre.\n\nIn pratica: se l'ecografia precoce e l'ultima mestruazione concordano, si conferma la datazione mestruale; se divergono in modo significativo, si adotta la datazione ecografica. Stabilire la datazione una volta e mantenerla coerente per tutta la gravidanza evita ricalcoli contraddittori tra una visita e l'altra. Le soglie esatte vanno sempre verificate sulle linee guida di riferimento e sul giudizio clinico.",
      },
      {
        title: "Settimane + giorni: l'errore più comune nei referti",
        body: "L'età gestazionale va espressa in settimane compiute più giorni, e qui si annidano gli errori più frequenti: confondere settimane intere con settimane più giorni, aggiornare la datazione a mano a ogni visita, riportare nel referto un valore non coerente con quello calcolato in cartella. Sono sviste banali, ma su una gravidanza seguita per mesi diventano una fonte di confusione.\n\nIl problema nasce quasi sempre dal calcolo manuale o dal copia-incolla tra documenti separati. Ogni volta che il dato viene ricopiato a mano da Word, da un'app esterna o da un foglio, aumenta la probabilità che una visita riporti un'età gestazionale leggermente diversa dalle altre.",
      },
      {
        title: "Perché calcolare l'età gestazionale dentro il gestionale",
        body: "Avere la datazione integrata nella cartella clinica elimina i passaggi manuali: l'età gestazionale si aggiorna automaticamente a ogni visita a partire dalla datazione stabilita, resta coerente con la data presunta del parto e si collega direttamente alla biometria e ai percentili. Il referto eredita lo stesso valore, senza ricopiature.\n\nCorioli include i calcolatori ostetrici - datazione, età gestazionale, stima del peso fetale secondo Hadlock, percentili e curve di crescita - direttamente nel flusso della visita. Il medico inserisce i dati una volta sola e li ritrova coerenti in cartella e nel referto PDF, riducendo gli errori di trascrizione e il tempo speso a fare conti tra app diverse.",
      },
    ],
    faq: [
      {
        question: "Come si calcola la data presunta del parto?",
        answer:
          "Il metodo classico è la regola di Naegele: al primo giorno dell'ultima mestruazione si aggiungono 7 giorni, si sottraggono 3 mesi e si aggiunge un anno, per una gravidanza di circa 280 giorni (40 settimane). La stima va corretta se il ciclo non è regolare di 28 giorni o se la data dell'ultima mestruazione è incerta, e nel primo trimestre può essere rivista in base alla datazione ecografica.",
      },
      {
        question:
          "Età gestazionale ed età concezionale sono la stessa cosa?",
        answer:
          "No. L'età gestazionale si conta dal primo giorno dell'ultima mestruazione, mentre l'età concezionale si conta dal concepimento. Poiché l'ovulazione avviene circa due settimane dopo l'inizio del ciclo, l'età gestazionale è di norma superiore di circa due settimane rispetto all'età concezionale. In ostetricia il riferimento standard è l'età gestazionale.",
      },
      {
        question:
          "Quando la datazione ecografica sostituisce l'ultima mestruazione?",
        answer:
          "Nel primo trimestre la misura della lunghezza cranio-caudale (CRL) è il metodo più accurato. Le linee guida raccomandano di adottare la datazione ecografica quando questa si discosta dalla datazione mestruale oltre una certa soglia (indicativamente da alcuni giorni a circa una settimana, a seconda dell'epoca). Le soglie precise vanno verificate sulle linee guida di riferimento e integrate con il giudizio clinico.",
      },
      {
        question: "Corioli calcola l'età gestazionale automaticamente?",
        answer:
          "Sì. Corioli include i calcolatori ostetrici integrati nella cartella clinica: una volta stabilita la datazione, l'età gestazionale si aggiorna automaticamente a ogni visita e resta coerente con la data presunta del parto, la biometria fetale e i percentili. Il valore viene riportato anche nel referto PDF senza ricopiature manuali, riducendo il rischio di errori.",
      },
    ],
  },
  {
    slug: "gestionale-per-ginecologi-cosa-cercare",
    title: "Gestionale per ginecologi: cosa cercare nel 2026",
    description:
      "Guida alla scelta del gestionale medico per ginecologi: funzionalità cliniche, calcolatori ostetrici, cartella ostetrica elettronica, GDPR e differenze rispetto ai software generici.",
    excerpt:
      "Funzionalità cliniche, calcolatori ostetrici, cartella ostetrica elettronica e GDPR: tutto quello che serve davvero a un ginecologo in ambulatorio.",
    date: "5 Febbraio 2025",
    isoDate: "2025-02-05",
    updated: "20 Agosto 2026",
    updatedIso: "2026-08-20",
    category: "Ginecologia",
    lead: "Un ginecologo ha esigenze cliniche molto specifiche che un software generico non può soddisfare. Dalla biometria fetale alla curva di crescita, dalla cartella ostetrica al consenso informato: ogni visita richiede strumenti pensati per la specializzazione.",
    sections: [
      {
        title: "Perché i gestionali generici non bastano in ginecologia",
        body: "Un software nato per amministrare uno studio generico può gestire agenda e fatture, ma non supporta il flusso clinico di una visita ostetrica o ginecologica. Mancano l'anamnesi strutturata per gravidanza, i calcolatori per la datazione e la biometria, le curve di crescita fetale e i template di referto specializzati. Il medico finisce per usare app esterne e Word in parallelo, perdendo tempo e coerenza dei dati.",
      },
      {
        title: "Funzionalità indispensabili per un ginecologo",
        body: "Un gestionale per ginecologi deve includere: cartella ostetrica e ginecologica strutturata, calcolo automatico dell'età gestazionale, stima del peso fetale (Hadlock), percentili e biometria fetale, tracciamento del BMI e del delta peso materno, curve di crescita con grafici, generazione di referti PDF completi e gestione del consenso informato. Questi non sono optional: sono il cuore della visita specialistica.",
      },
      {
        title: "Il valore dei calcolatori clinici integrati",
        body: "Avere i calcolatori clinici dentro il gestionale elimina il bisogno di app separate e riduce il rischio di errori di trascrizione. I risultati si inseriscono direttamente nel referto, risparmiando minuti preziosi a ogni visita. Per un ambulatorio che fa 20 visite al giorno, questo si traduce in un'ora e mezza di lavoro in meno ogni giorno.",
      },
      {
        title: "Corioli per ginecologi e ostetrici",
        body: "Corioli nasce specificamente per ginecologia e ostetricia, sviluppato con la consulenza di specialisti delle migliori strutture italiane. Include tutti gli strumenti clinici elencati sopra, una cartella ostetrica elettronica completa, referti PDF personalizzabili e un approccio privacy by design: i dati delle pazienti restano salvati in locale, nel tuo studio, sotto il tuo esclusivo controllo. La prova gratuita di 90 giorni permette di valutarlo nel proprio flusso clinico reale.",
      },
      {
        title: "Confronto tra i principali software ginecologici in Italia",
        variant: "comparison-table",
        body: "Scegliere un gestionale per ginecologi significa confrontare soluzioni molto diverse tra loro: alcune nascono per la gestione amministrativa dello studio e aggiungono moduli clinici in un secondo momento, altre sono verticali e pensate fin dall'inizio per la visita ostetrica e ginecologica. In Italia, tra i nomi più citati in ambulatorio troviamo Corioli, ArzaMed, Gynobase e WindDoctor. Nessuno di questi software è 'migliore in assoluto': la scelta dipende da quanto peso dai agli strumenti clinici nativi rispetto alla fatturazione elettronica, al numero di utenti e al budget mensile dello studio.\n\nArzaMed è una soluzione cloud consolidata, molto orientata alla gestione complessiva di studi e poliambulatori: agenda, fatturazione sanitaria, integrazione con il Sistema Tessera Sanitaria e cartella clinica ginecologica personalizzabile. È una scelta solida per chi gestisce team numerosi, ma il canone parte da 99€ al mese per due utenti — un investimento significativo per il libero professionista che lavora da solo.\n\nGynobase è storico nel panorama italiano: offre gestione di anagrafiche, visite ginecologiche e visite in gravidanza, con la possibilità di usare una versione desktop offline (Gynobase Portable) quando la connessione non è disponibile. L'interfaccia è essenziale e funzionale, ma i calcolatori fetali avanzati e l'esperienza utente moderna non sono il suo punto di forza principale.\n\nWindDoctor propone un gestionale cloud accessibile, con piani a partire da 10€ al mese e una prova gratuita limitata. Copre appuntamenti, cartelle cliniche digitali e fatturazione, ma resta un software generalista: per la biometria fetale, i percentili Hadlock e una cartella ostetrica strutturata il medico dovrà spesso integrare strumenti esterni.\n\nCorioli si colloca come alternativa verticale: nato per ginecologia e ostetricia, integra cartella ostetrica elettronica, calcolatori fetali (Hadlock, biometria, percentili, età gestazionale), referti PDF e consenso informato digitale in un unico flusso clinico. Il piano base parte da 15€ al mese con prova gratuita di 90 giorni — un posizionamento pensato per lo specialista privato che vuole strumenti clinici professionali senza il costo di un gestionale enterprise.\n\nLa tabella seguente riassume le differenze principali. I prezzi indicativi sono quelli pubblicati sui siti ufficiali al 2025 e possono variare in base a moduli aggiuntivi, numero di utenti e promozioni in corso.",
      },
      {
        title: "Quanto costa un gestionale per ginecologi?",
        body: "Il costo di un gestionale per ginecologi dipende dal modello commerciale scelto dal fornitore e dalle funzionalità incluse nel canone base. Conoscere le tre tipologie di pricing più diffuse aiuta a evitare sorprese e a calcolare il costo reale su 12 mesi, non solo quello del primo mese promozionale.\n\nIl modello più comune oggi è l'abbonamento mensile (SaaS cloud): paghi un canone fisso ogni mese e ottieni accesso al software, aggiornamenti automatici, backup e assistenza. I vantaggi sono prevedibilità, nessun investimento iniziale in server o licenze e la possibilità di disdire se il software non si adatta al tuo flusso. I canoni variano da circa 10€ al mese per soluzioni generaliste con funzionalità limitate, fino a 99€-499€ al mese per gestionali enterprise pensati per poliambulatori con molti utenti. Per un ginecologo in libera professione, la fascia utile si colloca generalmente tra 15€ e 50€ al mese per un software verticale completo.\n\nEsiste ancora, soprattutto tra software più datati, il modello a licenza perpetua: paghi una tantum per il software e lo installi sul tuo computer. Il costo iniziale può sembrare conveniente, ma di solito non include aggiornamenti, assistenza continuativa e adeguamenti normativi — voci che, sommate nel tempo, spesso superano l'abbonamento. Attenzione a non confondere il modello di pagamento con l'architettura: un software installato in studio può benissimo essere in abbonamento con aggiornamenti continui, ed è un vantaggio quando vuoi che i dati restino sotto il tuo controllo.\n\nIl modello freemium prevede una versione base gratuita con limiti (numero di pazienti, documenti o funzionalità) e piani a pagamento per sbloccare il pieno potenziale. WindDoctor, ad esempio, offre una prova gratuita con 12 documenti annui; Gynobase permette di registrarsi e testare il servizio. Attenzione: un piano freemium può andare bene per valutare l'interfaccia, ma raramente copre le esigenze cliniche di un ambulatorio ostetrico attivo con decine di visite settimanali.\n\nQuando calcoli il budget, considera anche i costi nascosti: moduli extra per calcolatori clinici avanzati, migrazione dati storici, personalizzazione template PDF, utenti aggiuntivi per segreteria o collaboratori. Un gestionale a 19€ al mese che richiede 15€ extra per i percentili fetali e 29€ una tantum per la migrazione costa di più di un software a 15€ con tutto incluso.\n\nCorioli adotta un modello di abbonamento trasparente: il Piano Specialista include cartella clinica elettronica illimitata, anagrafica pazienti, refertazione PDF e un'impostazione privacy by design con i dati salvati in locale nello studio. Il canone è di 19€ al mese (o 15€/mese con fatturazione annuale). I calcolatori clinici avanzati — percentili, stime Hadlock, curve di crescita — sono disponibili come modulo opzionale a 15€/mese, con i primi 90 giorni inclusi nel periodo di prova. La migrazione dati storici da Word, Excel o altri gestionali costa 29€ una tantum. Non ci sono costi di attivazione né vincoli contrattuali: puoi provare Corioli gratuitamente per 90 giorni, senza carta di credito, e valutarlo nel tuo ambulatorio reale prima di decidere.",
      },
    ],
    faq: [
      {
        question: "Il gestionale funziona senza internet?",
        answer:
          "Sì. Corioli è un software desktop per Windows 10 e Windows 11 con archiviazione locale: la cartella clinica, le visite, i calcolatori e la generazione dei referti funzionano direttamente sul computer dello studio, senza dipendere da una connessione per il lavoro quotidiano in ambulatorio. La connessione serve solo per operazioni accessorie come il download del software e gli aggiornamenti. È una scelta deliberata: i dati sanitari delle tue pazienti restano nel tuo studio, sotto il tuo controllo, e non vengono trasmessi a server esterni.",
      },
      {
        question: "Posso migrare i dati dal mio vecchio software?",
        answer:
          "Sì. Corioli include un servizio di migrazione dati storici che permette di trasferire l'archivio pazienti da Word, Excel, carta o altri gestionali medici. Il costo è di 29€ una tantum e copre l'importazione dell'anagrafica e dei dati clinici principali. Il team di Corioli ti guida nel processo: non devi fare da solo export manuali o conversioni di formato. Molti ginecologi che passano da Word o da software datati come Gynobase completano la migrazione in pochi giorni, continuando a lavorare in parallelo finché l'archivio non è completamente operativo nel nuovo gestionale.",
      },
      {
        question: "È conforme al GDPR?",
        answer:
          "Corioli adotta un approccio privacy by design radicale: i dati clinici delle pazienti sono salvati esclusivamente in locale, sul computer o sulla rete dello studio, e Corioli (l'azienda) non vi ha accesso in alcun modo — non li raccoglie, non li memorizza e non li trasmette a server esterni. Il medico resta l'unico Titolare del Trattamento e, non essendoci trasferimento di dati clinici verso il fornitore, per il funzionamento standard non è necessario un DPA. Restano responsabilità del medico le misure di sicurezza sul proprio PC (backup periodici, password robuste, crittografia del disco, antivirus). Per approfondire, consulta la pagina dedicata alla sicurezza e al GDPR sul sito Corioli.",
      },
      {
        question: "Quante pazienti posso gestire?",
        answer:
          "Con il Piano Specialista di Corioli non ci sono limiti al numero di pazienti gestibili: l'anagrafica e la cartella clinica elettronica sono illimitate. Puoi archiviare l'intero storico del tuo ambulatorio — visite ginecologiche, gravidanze in corso e concluse, referti, consensi — senza costi aggiuntivi legati al volume. A differenza di alcuni gestionali freemium che limitano i contatti in rubrica o i documenti annuali, Corioli è pensato per studi specialistici con flussi clinici intensi. Se lavori in team, puoi aggiungere collaboratori o segreteria con il modulo Multi-utente (+15€/mese per utente aggiuntivo).",
      },
      {
        question: "C'è assistenza in italiano?",
        answer:
          "Sì. Corioli offre supporto prioritario in italiano via chat ed email, con un team che conosce il contesto clinico della ginecologia e dell'ostetricia — non un call center generico. Durante la prova gratuita di 90 giorni hai accesso allo stesso livello di assistenza dei clienti attivi, così puoi risolvere dubbi operativi mentre valuti il software nel tuo ambulatorio. Per richieste di configurazione avanzata, personalizzazione template PDF o migrazione dati, il team è raggiungibile anche telefonicamente. Corioli ha sede in Italia (Sesto Fiorentino, FI) e sviluppa il software in collaborazione con ginecologi italiani.",
      },
    ],
  },
  {
    slug: "come-sostituire-word-excel-studio-medico",
    title: "Come sostituire Word e Excel nello studio medico",
    description:
      "Guida pratica per passare da Word ed Excel a un gestionale medico: come migrare i dati storici, eliminare la carta e migliorare il flusso clinico senza perdere nulla.",
    excerpt:
      "Come migrare i dati storici, eliminare la carta e migliorare il flusso clinico passando a un gestionale medico senza perdere nulla.",
    date: "28 Gennaio 2025",
    isoDate: "2025-01-28",
    category: "Gestione Studio",
    lead: "Word e Excel sono strumenti potenti, ma non sono stati progettati per gestire pazienti, visite cliniche e referti medici. Molti studi li usano per abitudine, senza rendersi conto di quanto tempo si perda ogni giorno.",
    sections: [
      {
        title: "I limiti concreti di Word per i referti medici",
        body: "Con Word ogni referto si crea da zero o da un template che va aggiornato manualmente. Non esiste una connessione con l'anagrafica del paziente, con lo storico delle visite o con i calcolatori clinici. Il risultato è un archivio di file separati, difficile da consultare, impossibile da interrogare e vulnerabile a perdite accidentali.",
      },
      {
        title: "Excel per i dati clinici: perché non funziona",
        body: "Excel può sembrare pratico per tenere traccia di parametri nel tempo, ma manca di struttura clinica. Non distingue tra visite, non gestisce il consenso, non produce referti e non offre alcuna sicurezza per i dati sanitari. Il rischio di errori di inserimento e di perdita di dati è elevato.",
      },
      {
        title: "Come funziona la migrazione a un gestionale medico",
        body: "Il passaggio a un gestionale medico moderno non richiede di ripartire da zero. I dati storici dei pazienti (anche da Word, Excel o carta) possono essere importati o inseriti progressivamente. Corioli include un servizio di migrazione dei dati storici che permette di trasferire l'archivio esistente senza perdere continuità clinica.",
      },
      {
        title: "Il guadagno reale in ambulatorio",
        body: "I medici che passano a Corioli riportano di recuperare in media due ore al giorno di lavoro amministrativo. L'anamnesi si compila in modo guidato, i calcolatori clinici sono integrati nella visita e i referti escono in PDF pronti con un clic. Meno tempo al computer significa più attenzione al paziente.",
      },
    ],
  },
  {
    slug: "gestionale-medico-gdpr-cosa-deve-avere",
    title: "Gestionale medico e GDPR: cosa deve avere per essere conforme",
    description:
      "Guida pratica alla conformità GDPR per studi medici: cosa deve garantire un gestionale medico in termini di sicurezza, accessi, backup e contratti per proteggere i dati dei pazienti.",
    excerpt:
      "Crittografia, backup, DPA, accessi controllati e consenso digitale: la checklist per valutare la conformità GDPR di un software medico.",
    date: "20 Gennaio 2025",
    isoDate: "2025-01-20",
    category: "Normativa",
    lead: "I dati sanitari sono tra le informazioni più sensibili che esistano. Per un medico specialista privato, scegliere un gestionale non conforme al GDPR non è solo un rischio legale: è una responsabilità verso i propri pazienti.",
    sections: [
      {
        title: "Perché i dati sanitari richiedono attenzione speciale",
        body: "Il Regolamento Europeo sulla protezione dei dati (GDPR) classifica le informazioni relative alla salute come 'dati particolari', soggetti a requisiti di protezione rafforzati rispetto ai dati comuni. Questo significa che il medico, in quanto titolare del trattamento, è responsabile di adottare misure tecniche e organizzative adeguate.",
      },
      {
        title: "Crittografia, backup e controllo degli accessi",
        body: "Se il gestionale è in cloud, deve cifrare i dati sia durante la trasmissione (TLS) che a riposo (AES-256), effettuare backup automatici e georeplicati, mantenere log degli accessi auditabili e permettere una gestione granulare dei permessi utente. Se invece i dati sono archiviati in locale nello studio, le misure ricadono sul medico: dischi cifrati, backup periodici protetti, password robuste e sistemi operativi aggiornati. In entrambi i casi, archiviare dati sanitari in chiaro su sistemi non aggiornati non soddisfa i requisiti del GDPR.",
      },
      {
        title: "Il Data Processing Agreement (DPA)",
        body: "Quando il medico usa un software cloud, il fornitore diventa responsabile del trattamento dei dati. Il GDPR richiede che questa relazione sia formalizzata in un contratto DPA: senza questo documento, il medico è esposto a responsabilità. C'è però un'alternativa che semplifica il quadro alla radice: se il software archivia i dati esclusivamente in locale e il fornitore non vi accede mai, non c'è alcun trattamento da parte di terzi da regolamentare, e il medico resta l'unico titolare senza bisogno di un DPA per l'uso standard del software.",
      },
      {
        title: "Come Corioli gestisce la conformità",
        body: "Corioli segue la strada della minimizzazione: è un software desktop per Windows con archiviazione locale, quindi i dati clinici dei pazienti non lasciano mai lo studio e Corioli non vi ha accesso in alcun modo. Il medico resta l'unico titolare del trattamento, senza DPA necessario per l'uso standard, senza trasferimenti extra-UE e senza rischi di violazione lato fornitore. Il modulo di raccolta del consenso informato digitale è integrato nel software, eliminando la necessità di archivi cartacei separati.",
      },
    ],
  },
  {
    slug: "cos-e-cartella-clinica-elettronica-come-sceglierla",
    title: "Cos'è la cartella clinica elettronica e come sceglierla",
    description:
      "Guida completa alla cartella clinica elettronica per studi medici: differenze con la carta, vantaggi, criteri di scelta e cosa deve offrire un buon software medico.",
    excerpt:
      "Differenze con la carta, vantaggi concreti e i criteri tecnici e clinici per scegliere il software giusto per il tuo studio medico.",
    date: "15 Gennaio 2025",
    isoDate: "2025-01-15",
    category: "Guide",
    lead: "La cartella clinica elettronica è lo strumento centrale di qualsiasi studio medico moderno. Non è solo un archivio digitale: è il luogo in cui vive la storia clinica del paziente, strutturata in modo da essere utile durante la visita.",
    sections: [
      {
        title: "Cartella clinica cartacea vs elettronica",
        body: "La cartella cartacea è limitata: non si può cercare, confrontare nel tempo, trasmettere in sicurezza o proteggere da perdite. Una cartella clinica elettronica consente di filtrare lo storico, confrontare valori tra visite, generare referti strutturati e archiviare il consenso informato in modo tracciabile. Il guadagno di tempo e sicurezza è significativo già nelle prime settimane di utilizzo.",
      },
      {
        title: "Cosa deve contenere una buona cartella clinica elettronica",
        body: "Una cartella clinica elettronica efficace deve includere: anagrafica completa del paziente, anamnesi strutturata per la specializzazione, diario clinico con timeline delle visite, gestione dei referti in PDF, archiviazione sicura dei consensi e accesso controllato per eventuali collaboratori. Per la ginecologia e l'ostetricia servono anche strumenti specifici: datazione, biometria fetale, curve di crescita e percentili.",
      },
      {
        title: "I criteri tecnici che non si devono ignorare",
        body: "Sicurezza e conformità GDPR sono requisiti non negoziabili per i dati sanitari. Se scegli una soluzione cloud, il software deve garantire crittografia dei dati in transito e a riposo, backup automatici, log degli accessi e un contratto DPA che regolamenti il ruolo del fornitore come responsabile del trattamento, preferibilmente con server in Unione Europea. L'alternativa è l'archiviazione locale nello studio: elimina il fornitore dal trattamento dei dati clinici e lascia al medico il pieno controllo, insieme alla responsabilità di backup e sicurezza del computer.",
      },
      {
        title: "Corioli come cartella clinica elettronica per specialisti",
        body: "Corioli è una cartella clinica elettronica progettata per medici specialisti privati. Integra in un unico ambiente la gestione del paziente, l'anamnesi specializzata, i calcolatori clinici e la produzione di referti PDF. I dati restano salvati in locale, nello studio del medico, secondo un approccio privacy by design attento alla conformità GDPR.",
      },
    ],
  },
  {
    slug: "migliori-software-gestionali-medici-italia",
    title: "Migliori software gestionali per medici in Italia (2026)",
    description:
      "Guida ai migliori software gestionali per medici in Italia nel 2026: cosa valutare, differenze tra soluzioni generiche e verticali, e perché la specializzazione fa la differenza.",
    excerpt:
      "Cosa distingue un gestionale generico da uno verticale, cosa valutare prima di scegliere e come orientarsi tra cloud e dati salvati in locale.",
    date: "10 Gennaio 2025",
    isoDate: "2025-01-10",
    updated: "20 Agosto 2026",
    updatedIso: "2026-08-20",
    category: "Confronto",
    lead: "Scegliere il gestionale medico giusto non è facile: l'offerta è ampia, i prezzi variano molto e i dettagli che contano davvero emergono solo durante l'uso clinico quotidiano. Questa guida ti aiuta a orientarti.",
    sections: [
      {
        title: "Gestionali generici vs software medici verticali",
        body: "La maggior parte dei software sul mercato nasce per la gestione amministrativa: agenda, fatturazione, anagrafica. Funzionano bene per uno studio commerciale, ma faticano quando il medico ha bisogno di strutturare anamnesi cliniche, inserire calcolatori specialistici o recuperare rapidamente lo storico di una paziente in gravidanza. I software verticali, costruiti per una singola specializzazione, eliminano questa frizione alla radice.",
      },
      {
        title: "Cosa valutare prima di scegliere",
        body: "I criteri fondamentali sono: adattabilità al tuo flusso clinico, presenza di strumenti nativi per la tua specializzazione, sicurezza dei dati sanitari conforme al GDPR, qualità del supporto, presenza di backup automatici e costo reale mensile (inclusi i moduli extra). Un gestionale apparentemente economico può diventare costoso se richiede molti add-on.",
      },
      {
        title: "Perché Corioli nasce diverso",
        body: "Corioli è stato costruito osservando direttamente il lavoro di ginecologi e ostetrici in ambulatorio, non partendo da un modello amministrativo da adattare alla clinica. Il risultato è un software in cui l'anamnesi è strutturata per la specializzazione, i calcolatori (datazione, Hadlock, percentili, BMI) sono integrati nella visita e i referti escono in PDF pronti senza lavoro extra.",
      },
      {
        title: "Cloud o dati in locale?",
        body: "Il cloud offre accesso da più dispositivi e backup gestiti dal fornitore, ma comporta che i dati dei pazienti risiedano su server di terzi: servono un DPA, garanzie sui trasferimenti e fiducia nella sicurezza del provider. L'archiviazione locale segue la logica opposta: i dati restano fisicamente nello studio, il medico ne è l'unico titolare e nessun soggetto esterno vi accede. Per uno specialista privato attento alla riservatezza, quest'ultima è la forma più radicale di minimizzazione — a fronte della responsabilità di curare backup e sicurezza del proprio computer.",
      },
    ],
  },
  {
    slug: "come-digitalizzare-lo-studio-ginecologico",
    title: "Come digitalizzare lo studio ginecologico: la guida definitiva",
    description:
      "Guida pratica per passare da carta, Word ed Excel a un gestionale medico per ginecologi con cartella clinica elettronica, referti e dati sicuri.",
    excerpt:
      "Dal passaggio da carta a digitale fino alla scelta del software: gli step per modernizzare il tuo ambulatorio senza stress.",
    date: "24 Maggio 2024",
    isoDate: "2024-05-24",
    category: "Gestione Studio",
    lead: "Digitalizzare uno studio ginecologico non significa solo sostituire la carta con uno schermo. Significa costruire un flusso clinico più ordinato, veloce e sicuro per medico, segreteria e paziente.",
    sections: [
      {
        title: "Da dove partire",
        body: "Il primo passo è identificare le attività ripetitive: anamnesi, referti, recupero dello storico, calcolo della datazione, archiviazione dei consensi e produzione dei PDF. Un gestionale medico efficace deve ridurre questi passaggi, non aggiungerne di nuovi.",
      },
      {
        title: "Perché un gestionale generico non basta",
        body: "Un software amministrativo può aiutare su agenda e fatture, ma la visita ginecologica richiede strumenti clinici verticali: cartella ostetrica, curve di crescita, percentili, biometria fetale, BMI, referti strutturati e dati consultabili nel tempo.",
      },
      {
        title: "Il ruolo di Corioli",
        body: "Corioli nasce come gestionale medico per specialisti, con un modulo dedicato a ginecologia e ostetricia. L'obiettivo è portare in un unico ambiente cartella clinica elettronica, calcolatori clinici, refertazione e un approccio ai dati rispettoso del GDPR, con archiviazione in locale nello studio.",
      },
    ],
  },
  {
    slug: "gestionale-medico-vs-word-ginecologi",
    title: "Gestionale medico vs Word: perché i ginecologi cambiano",
    description:
      "Confronto tra Word, Excel e un gestionale medico per ginecologi: limiti dei documenti generici, rischi operativi e vantaggi della cartella clinica elettronica.",
    excerpt:
      "Analisi dei costi occulti dell'uso di Word per i referti clinici e perché il 40% dei medici sta finalmente passando a soluzioni native.",
    date: "12 Maggio 2024",
    isoDate: "2024-05-12",
    category: "Tecnologia",
    lead: "Word è familiare, ma non è un gestionale medico. Per uno studio ginecologico, usare documenti separati può creare archivi fragili, referti non strutturati e molto lavoro manuale.",
    sections: [
      {
        title: "Il costo nascosto del copia-incolla",
        body: "Ogni referto creato da zero richiede formattazione, recupero dati, ricerca dello storico e controlli manuali. Nel tempo, questi minuti diventano ore sottratte alla visita e aumentano il rischio di errori.",
      },
      {
        title: "La differenza della cartella clinica elettronica",
        body: "Una cartella clinica elettronica conserva dati strutturati, confrontabili e recuperabili. Peso, settimane gestazionali, percentili, anamnesi e referti non restano dispersi in file separati, ma diventano parte dello storico clinico.",
      },
      {
        title: "Quando passare a Corioli",
        body: "Corioli è indicato quando il medico vuole superare Word, Excel e carta con un software per dottori pensato per la pratica clinica specialistica, non solo per l'amministrazione dello studio.",
      },
    ],
  },
  {
    slug: "cartella-clinica-elettronica-obbligatoria-2025",
    title: "Cartella clinica elettronica: cosa cambia nel 2026?",
    description:
      "Cosa valutare nel 2026 quando si sceglie una cartella clinica elettronica per studio medico: sicurezza, GDPR, backup, accessi e controllo dei dati.",
    excerpt:
      "I requisiti GDPR e le novità normative che gli specialisti privati devono conoscere per scegliere una cartella clinica elettronica in regola.",
    date: "3 Maggio 2024",
    isoDate: "2024-05-03",
    updated: "20 Agosto 2026",
    updatedIso: "2026-08-20",
    category: "Normativa",
    lead: "La gestione digitale dei dati sanitari richiede sempre più attenzione a privacy, sicurezza e tracciabilità. Per gli studi medici privati, la cartella clinica elettronica deve essere scelta con criteri clinici e tecnici.",
    sections: [
      {
        title: "Dati sanitari e responsabilità",
        body: "Le informazioni sulla salute sono dati particolari e vanno protette con misure adeguate. Archivi locali non protetti, documenti sparsi e backup manuali possono diventare un problema operativo e legale.",
      },
      {
        title: "Cosa cercare in un software medico",
        body: "Un buon gestionale medico dovrebbe offrire accessi controllati, crittografia, backup, continuità operativa, ruoli utente e un modello chiaro di trattamento dei dati. La semplicità d'uso non deve sacrificare la sicurezza.",
      },
      {
        title: "Come si posiziona Corioli",
        body: "Corioli è progettato per studi specialistici che vogliono una cartella clinica elettronica con referti, dati strutturati e un'impostazione privacy by design: i dati restano in locale, nello studio, con attenzione alla conformità GDPR.",
      },
    ],
  },
];

export const postsBySlug: Record<string, BlogPost> = Object.fromEntries(
  posts.map((post) => [post.slug, post]),
);

// --- Categorie -------------------------------------------------------------

// Slug URL-safe di una categoria ("Gestione Studio" -> "gestione-studio").
// Usata da /blog/categoria/[slug] e dalla sitemap: unica fonte, cosi i due
// non possono divergere.
export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Testi delle pagine di categoria. Ogni voce alimenta title, description e
// intro di /blog/categoria/[slug]: sono pagine indicizzabili, quindi il testo
// deve essere specifico e non una formula ripetuta con la parola sostituita.
export const categoryMeta: Record<
  string,
  { title: string; description: string; intro: string }
> = {
  Normativa: {
    title: "Normativa sanitaria per lo studio privato",
    description:
      "FSE 2.0, GDPR, Sistema Tessera Sanitaria, consenso informato e conservazione della documentazione clinica: gli obblighi che riguardano il medico specialista in libera professione.",
    intro:
      "Gli adempimenti che toccano davvero lo studio privato, spiegati senza gergo: cosa prescrive la norma, cosa cambia nella pratica quotidiana e da dove conviene iniziare.",
  },
  Ostetricia: {
    title: "Ostetricia: calcoli e refertazione in ambulatorio",
    description:
      "Età gestazionale, datazione della gravidanza, biometria e stima del peso fetale con Hadlock: guide pratiche per la visita ostetrica e per una refertazione coerente.",
    intro:
      "Guide pratiche sui calcoli che accompagnano la visita ostetrica, con attenzione ai margini di errore e agli errori di trascrizione che si annidano tra ecografo e referto.",
  },
  Pediatria: {
    title: "Pediatria: percentili e curve di crescita",
    description:
      "Come leggere e calcolare correttamente percentili di crescita, curve OMS e BMI pediatrico, evitando gli errori di interpretazione più comuni in ambulatorio.",
    intro:
      "Come si leggono davvero i percentili di crescita, perché conta la traiettoria più della singola misura e quali scorciatoie è meglio evitare.",
  },
  Ginecologia: {
    title: "Ginecologia: software e gestione dello studio",
    description:
      "Come scegliere un gestionale per ginecologi, cosa distingue un software verticale da uno generico e quali strumenti clinici servono davvero in ambulatorio.",
    intro:
      "Cosa serve a uno studio di ginecologia per lavorare bene: strumenti clinici nativi, cartella strutturata e referti che non nascono da copia-incolla.",
  },
  "Gestione Studio": {
    title: "Gestione dello studio medico",
    description:
      "Digitalizzazione dell'ambulatorio, sostituzione di Word ed Excel, backup e organizzazione dell'archivio clinico: come far funzionare meglio uno studio specialistico.",
    intro:
      "Organizzazione, archivio e strumenti: gli aspetti pratici che decidono quanto tempo lo studio passa sull'amministrazione invece che sulla clinica.",
  },
  Confronto: {
    title: "Confronti tra software gestionali medici",
    description:
      "Confronti tra i principali gestionali medici disponibili in Italia: funzionalità cliniche, modelli di prezzo, architettura cloud o locale e criteri di scelta.",
    intro:
      "Confronti ragionati tra le soluzioni sul mercato italiano, con i criteri che contano davvero durante l'uso clinico quotidiano.",
  },
  Guide: {
    title: "Guide al software per studi medici",
    description:
      "Guide introduttive per orientarsi tra cartella clinica elettronica, gestionali medici e digitalizzazione dello studio specialistico privato.",
    intro:
      "Le basi, spiegate per chi parte da zero: cos'è una cartella clinica elettronica, come si sceglie e cosa aspettarsi dal passaggio al digitale.",
  },
  Tecnologia: {
    title: "Tecnologia per lo studio medico",
    description:
      "Strumenti digitali per l'ambulatorio specialistico: dai limiti di Word e Excel per i referti alle soluzioni pensate per la pratica clinica.",
    intro:
      "Perché gli strumenti generici si rompono quando incontrano la clinica, e cosa cambia con software costruiti per la visita.",
  },
  Eventi: {
    title: "Eventi e congressi",
    description:
      "Corioli ai congressi e agli incontri con ginecologi e ostetrici: cosa abbiamo mostrato, cosa ci siamo portati a casa e i temi clinici emersi.",
    intro:
      "Dove incontriamo i medici che usano Corioli, e le conversazioni cliniche che finiscono per orientare il prodotto.",
  },
};

// Elenco ordinato delle categorie effettivamente usate dagli articoli, con il
// numero di post: alimenta i filtri della griglia e le pagine di categoria.
export const categories = [...new Set(posts.map((post) => post.category))]
  .sort((a, b) => a.localeCompare(b, "it"))
  .map((name) => ({
    name,
    slug: categorySlug(name),
    count: posts.filter((post) => post.category === name).length,
  }));

export const categoryBySlug: Record<string, string> = Object.fromEntries(
  categories.map((category) => [category.slug, category.name]),
);
