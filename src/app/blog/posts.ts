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
    title: "Gestionale per ginecologi: cosa cercare nel 2025",
    description:
      "Guida alla scelta del gestionale medico per ginecologi: funzionalità cliniche, calcolatori ostetrici, cartella ostetrica elettronica, GDPR e differenze rispetto ai software generici.",
    excerpt:
      "Funzionalità cliniche, calcolatori ostetrici, cartella ostetrica elettronica e GDPR: tutto quello che serve davvero a un ginecologo in ambulatorio.",
    date: "5 Febbraio 2025",
    isoDate: "2025-02-05",
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
    title: "Migliori software gestionali per medici in Italia (2025)",
    description:
      "Guida ai migliori software gestionali per medici in Italia nel 2025: cosa valutare, differenze tra soluzioni generiche e verticali, e perché la specializzazione fa la differenza.",
    excerpt:
      "Cosa distingue un gestionale generico da uno verticale, cosa valutare prima di scegliere e come orientarsi tra cloud e dati salvati in locale.",
    date: "10 Gennaio 2025",
    isoDate: "2025-01-10",
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
    title: "Cartella clinica elettronica: cosa cambia nel 2025?",
    description:
      "Cosa valutare nel 2025 quando si sceglie una cartella clinica elettronica per studio medico: sicurezza, GDPR, backup, accessi e controllo dei dati.",
    excerpt:
      "Tutte le novità normative e i requisiti GDPR che gli specialisti privati devono conoscere per essere in regola l'anno prossimo.",
    date: "3 Maggio 2024",
    isoDate: "2024-05-03",
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
