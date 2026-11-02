// Voci del glossario clinico e normativo.
//
// Perché esiste questo file. Gli assistenti conversazionali citano volentieri le
// definizioni: sono autoconclusive, si estraggono in un blocco solo e non
// richiedono di leggere l'intera pagina per essere riutilizzate. Una voce ben
// scritta risponde alla domanda "che cos'è X" in poche righe, e chi la cita
// porta con sé il link a Corioli.
//
// Regole redazionali, da rispettare aggiungendo nuove voci:
// - `definition` è la risposta diretta: 40-80 parole, autosufficiente, senza
//   rimandi ad altre voci e senza pubblicità del prodotto.
// - `detail` è l'approfondimento, ed è il posto dove può comparire Corioli.
// - i numeri e le formule devono coincidere con quanto scritto negli articoli
//   del blog (src/app/blog/posts.ts): due definizioni diverse dello stesso
//   valore sullo stesso dominio sono peggio di nessuna definizione.

export type GlossaryGroupId =
  | "gestionale"
  | "normativa"
  | "ostetricia"
  | "cardiologia";

export type GlossaryGroup = {
  id: GlossaryGroupId;
  title: string;
  description: string;
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  // Sinonimi e sigle con cui il termine viene cercato: finiscono in
  // `alternateName` nei dati strutturati.
  aliases?: string[];
  group: GlossaryGroupId;
  definition: string;
  detail?: string;
  link?: { href: string; label: string };
};

export const glossaryGroups: GlossaryGroup[] = [
  {
    id: "gestionale",
    title: "Gestionale e cartella clinica",
    description:
      "I termini che ricorrono quando si valuta un software per lo studio medico.",
  },
  {
    id: "normativa",
    title: "Privacy, GDPR e adempimenti",
    description:
      "Chi risponde dei dati sanitari, per quanto si conservano, quali obblighi digitali riguardano lo studio privato e quali agevolazioni fiscali gli spettano.",
  },
  {
    id: "ostetricia",
    title: "Ginecologia e ostetricia",
    description:
      "Datazione, biometria e stime che accompagnano ogni ecografia ostetrica.",
  },
  {
    id: "cardiologia",
    title: "Cardiologia",
    description:
      "Misure, punteggi e classificazioni che compaiono nel referto dell'ambulatorio cardiologico.",
  },
];

// Data dell'ultima modifica sostanziale delle voci. Alimenta sia il lastmod di
// /glossario nella sitemap sia il dateModified del DefinedTermSet: aggiornala
// quando aggiungi o correggi una voce, altrimenti la pagina dichiara una
// freschezza che non ha.
export const GLOSSARY_UPDATED = "2026-11-02";

export const glossaryTerms: GlossaryTerm[] = [
  // --- Gestionale e cartella clinica ---
  {
    slug: "gestionale-medico",
    term: "Gestionale medico",
    aliases: ["software gestionale medico", "software per studi medici"],
    group: "gestionale",
    definition:
      "Software con cui uno studio medico tiene insieme anagrafica dei pazienti, storico delle visite, documentazione clinica e adempimenti. Il termine copre due categorie molto diverse: i gestionali amministrativi, nati per agenda, fatturazione e incassi, e quelli clinici, costruiti attorno alla visita e alla refertazione. La distinzione conta più del prezzo, perché determina che cosa il software sa fare mentre il paziente è davanti al medico.",
    detail:
      "Corioli appartiene alla seconda categoria: copre la parte clinica della visita — cartella, anamnesi, calcolatori, referti e consensi — mentre agenda e fatturazione elettronica non sono oggi tra le funzionalità disponibili.",
    link: { href: "/funzionalita", label: "Le funzionalità di Corioli" },
  },
  {
    slug: "cartella-clinica-elettronica",
    term: "Cartella clinica elettronica",
    aliases: ["CCE", "cartella clinica digitale"],
    group: "gestionale",
    definition:
      "Raccolta digitale e ordinata della storia clinica di un paziente: anagrafica, anamnesi, visite, misure, referti e documenti allegati, collegati fra loro e consultabili in ordine cronologico. Si distingue da una cartella di file sul computer perché i dati sono strutturati e ricercabili: il software sa che un valore è una misura, con la sua unità e la sua data, e non solo del testo dentro un documento.",
    link: {
      href: "/blog/cos-e-cartella-clinica-elettronica-come-sceglierla",
      label: "Come scegliere una cartella clinica elettronica",
    },
  },
  {
    slug: "campo-strutturato",
    term: "Campo strutturato",
    aliases: ["dato strutturato", "testo libero"],
    group: "gestionale",
    definition:
      "Un dato clinico registrato in un campo dedicato, con il proprio tipo, la propria unità di misura e il proprio intervallo di riferimento, invece che dentro una frase di testo libero. La differenza si vede a distanza di mesi: una frazione di eiezione scritta in un campo si confronta con quella del controllo precedente e finisce in tabella nel referto, la stessa misura dentro una frase resta testo che qualcuno deve rileggere.",
    detail:
      "Il criterio pratico per valutare un gestionale è chiedere, modulo per modulo, se le misure sono campi o un editor di testo con un titolo sopra.",
    link: {
      href: "/blog/gestionale-per-cardiologi-cosa-cercare",
      label: "Cosa deve saper fare un gestionale cardiologico",
    },
  },
  {
    slug: "anamnesi-strutturata",
    term: "Anamnesi strutturata",
    group: "gestionale",
    definition:
      "Raccolta della storia clinica organizzata in sezioni e campi previsti in anticipo per quella specializzazione, invece che in un testo libero da riscrivere a ogni visita. Riduce le omissioni, rende gli elementi rilevanti ritrovabili anche anni dopo e permette al software di riutilizzarli: i fattori di rischio raccolti in anamnesi, per esempio, possono alimentare direttamente i punteggi clinici.",
    link: { href: "/funzionalita", label: "L'anamnesi in Corioli" },
  },
  {
    slug: "refertazione",
    term: "Refertazione",
    aliases: ["referto medico", "referto PDF"],
    group: "gestionale",
    definition:
      "Produzione del documento che riporta l'esito della visita o dell'esame. È il pezzo di lavoro che esce dallo studio: lo legge il paziente, spesso il medico curante e a volte un collega di un'altra struttura. Quando il referto nasce dai dati già inseriti in cartella, invece di essere riscritto a parte, non può divergere dalla visita e non richiede ricopiature.",
    detail:
      "Nella pratica il modo migliore per valutare un gestionale è guardare un PDF reale che produce, non l'interfaccia mostrata in demo.",
  },
  {
    slug: "archiviazione-locale",
    term: "Archiviazione locale",
    aliases: ["software desktop", "on-premise", "gestionale senza cloud"],
    group: "gestionale",
    definition:
      "Architettura in cui i dati clinici restano sul computer o sulla rete dello studio, invece di essere ospitati sui server del fornitore. Il medico resta unico titolare del trattamento, non esiste un responsabile esterno da nominare per l'uso ordinario e non ci sono trasferimenti di dati all'estero. In cambio, il backup e la continuità operativa sono interamente a carico dello studio.",
    detail:
      "È l'architettura di Corioli: applicazione desktop per Windows 10 e 11, con versione per macOS 10.13 o superiore installata insieme a un operatore in una breve call. Nessuna delle due architetture è migliore in assoluto — cambiano i rischi e cambia chi li gestisce.",
    link: { href: "/gdpr", label: "Dove finiscono i dati con Corioli" },
  },
  {
    slug: "gestionale-cloud",
    term: "Gestionale in cloud",
    aliases: ["SaaS", "gestionale online"],
    group: "gestionale",
    definition:
      "Software gestionale a cui si accede via internet, con programma e archivio ospitati sui server del fornitore. Per i dati sanitari il fornitore diventa responsabile del trattamento e serve un accordo ai sensi dell'articolo 28 del GDPR. Facilita l'accesso da più sedi e dispositivi e affida il backup al fornitore, ma fa dipendere il lavoro dalla connessione e rende decisiva la possibilità di esportare i dati.",
    link: {
      href: "/blog/gestionale-medico-locale-o-cloud",
      label: "Gestionale medico locale o in cloud: come scegliere",
    },
  },
  {
    slug: "backup-3-2-1",
    term: "Regola 3-2-1 del backup",
    aliases: ["backup studio medico"],
    group: "gestionale",
    definition:
      "Criterio pratico per un backup che regge: tre copie dei dati, su due supporti diversi, di cui una conservata fuori sede. Serve a coprire eventi diversi — cancellazione accidentale, guasto del supporto, furto o incendio — che una copia sola non copre. La regola vale solo se il ripristino viene provato: un backup mai testato non è un backup.",
    link: {
      href: "/blog/backup-studio-medico-regola-3-2-1",
      label: "La regola 3-2-1 applicata all'ambulatorio",
    },
  },
  {
    slug: "migrazione-dati",
    term: "Migrazione dei dati",
    group: "gestionale",
    definition:
      "Trasferimento dell'archivio storico — pazienti, visite e documenti — da Word, Excel, altri gestionali o archivi cartacei verso il nuovo software. È il passaggio che decide se il cambio di strumento avviene davvero: senza lo storico si finisce per tenere aperti due sistemi, e dopo qualche mese si torna al vecchio.",
    detail:
      "In Corioli la migrazione dei dati storici è un servizio su preventivo, calcolato in base al formato e alla dimensione dell'archivio.",
    link: {
      href: "/blog/cambiare-gestionale-medico-migrazione-dati",
      label: "Cambiare gestionale senza perdere i dati",
    },
  },
  {
    slug: "consenso-informato-digitale",
    term: "Consenso informato digitale",
    group: "gestionale",
    definition:
      "Raccolta e conservazione in formato elettronico del consenso del paziente, in luogo dei moduli cartacei. La legge 219/2017 stabilisce che il consenso informato, in qualunque forma espresso, va documentato e inserito nella cartella clinica e nel fascicolo sanitario elettronico. Conservarlo in modo storicizzato serve a poterlo esibire, anche a distanza di anni, esattamente com'era al momento della firma.",
    link: {
      href: "/blog/consenso-informato-digitale-studio-medico",
      label: "Il consenso informato digitale nello studio",
    },
  },

  // --- Privacy, GDPR e adempimenti ---
  {
    slug: "dati-particolari",
    term: "Dati particolari (art. 9 GDPR)",
    aliases: ["dati sensibili", "dati relativi alla salute"],
    group: "normativa",
    definition:
      "Categorie di dati personali che il GDPR protegge in modo rinforzato all'articolo 9, tra cui i dati relativi alla salute. Il loro trattamento è vietato salvo che ricorra una delle condizioni previste — per il medico, tipicamente la finalità di cura — e richiede misure tecniche e organizzative proporzionate al rischio. È la ragione per cui un archivio clinico non si gestisce come una rubrica di clienti.",
    link: { href: "/gdpr", label: "L'approccio di Corioli ai dati sanitari" },
  },
  {
    slug: "titolare-del-trattamento",
    term: "Titolare del trattamento",
    group: "normativa",
    definition:
      "Chi determina finalità e mezzi del trattamento dei dati personali e ne risponde. Nello studio privato è il medico o la struttura: decide quali dati raccogliere, per quanto conservarli e con quali strumenti trattarli. La responsabilità resta sua anche quando il lavoro materiale è svolto da altri, e non si trasferisce scegliendo un fornitore invece di un altro.",
  },
  {
    slug: "registro-dei-trattamenti",
    term: "Registro delle attività di trattamento",
    aliases: ["registro dei trattamenti"],
    group: "normativa",
    definition:
      "Documento previsto dall'articolo 30 del GDPR in cui il titolare elenca i propri trattamenti di dati personali, con finalità, categorie di interessati e di dati, destinatari, tempi di conservazione e misure di sicurezza. L'esenzione per chi ha meno di 250 dipendenti non vale quando si trattano dati sanitari: per questo, come ha chiarito il Garante nel 2019, il registro è obbligatorio anche per il singolo medico libero professionista.",
    detail:
      "Non va inviato al Garante: va tenuto aggiornato ed esibito in caso di controllo. Per uno studio specialistico le righe sono poche, tipicamente visite e cartella clinica, fatturazione e Sistema Tessera Sanitaria, appuntamenti ed eventuali comunicazioni facoltative.",
    link: {
      href: "/blog/gdpr-medico-libero-professionista-adempimenti",
      label: "GDPR per il medico libero professionista",
    },
  },
  {
    slug: "informativa-privacy",
    term: "Informativa privacy",
    aliases: ["informativa sul trattamento dei dati", "articolo 13 GDPR"],
    group: "normativa",
    definition:
      "Documento con cui il titolare spiega al paziente come tratta i suoi dati: titolare e contatti, finalità e base giuridica, destinatari, periodo di conservazione, diritti e reclamo al Garante, come richiede l'articolo 13 del GDPR. Va data quando si raccolgono i dati, nello studio di solito alla prima visita.",
    detail:
      "Per i trattamenti necessari alla cura il consenso non serve, ha chiarito il Garante nel provvedimento n. 55 del 7 marzo 2019; l'informativa sì.",
    link: {
      href: "/blog/informativa-privacy-studio-medico-modello",
      label: "Informativa privacy dello studio medico: contenuti e modello",
    },
  },
  {
    slug: "responsabile-del-trattamento",
    term: "Responsabile del trattamento e DPA",
    aliases: ["accordo ex art. 28", "data processing agreement"],
    group: "normativa",
    definition:
      "Il responsabile è il soggetto che tratta dati personali per conto del titolare — tipicamente il fornitore di un servizio cloud che ospita l'archivio clinico. Il rapporto va regolato da un accordo scritto ai sensi dell'articolo 28 del GDPR, che definisce oggetto, durata, istruzioni, misure di sicurezza e destino dei dati alla fine del contratto.",
    detail:
      "Con un software ad archiviazione locale la catena si accorcia: se il fornitore non accede ai dati clinici, per l'uso ordinario non c'è un responsabile esterno da nominare. È il caso di Corioli, dove le cartelle non lasciano il computer dello studio.",
    link: { href: "/gdpr", label: "Titolare, responsabile e DPA" },
  },
  {
    slug: "privacy-by-design",
    term: "Privacy by design",
    aliases: ["protezione dei dati fin dalla progettazione"],
    group: "normativa",
    definition:
      "Principio dell'articolo 25 del GDPR: le misure di protezione dei dati vanno incorporate nella progettazione del trattamento, non aggiunte dopo. Applicato al software clinico significa che l'architettura stessa limita i dati raccolti e i soggetti che vi accedono, invece di affidarsi a impostazioni che l'utente dovrebbe ricordarsi di attivare.",
    link: { href: "/gdpr", label: "Privacy by design in Corioli" },
  },
  {
    slug: "conservazione-documentazione-sanitaria",
    term: "Conservazione della documentazione sanitaria",
    group: "normativa",
    definition:
      "Per le cartelle cliniche ospedaliere e delle case di cura la conservazione è illimitata. Per il medico libero professionista non convenzionato nessuna norma fissa un termine espresso: la scelta spetta al medico come titolare del trattamento e va motivata. Il riferimento più diffuso e più difendibile è il termine di prescrizione ordinaria di dieci anni, legato alla necessità di tutelare i propri diritti in caso di contestazioni.",
    detail:
      "Una politica di conservazione sta in piedi se dichiara il termine ordinario, le eccezioni, il momento della verifica periodica e il modo in cui la cancellazione avviene davvero, backup compresi.",
    link: {
      href: "/blog/conservazione-cartella-clinica-studio-privato",
      label: "Per quanto conservare la cartella clinica",
    },
  },
  {
    slug: "fse-2-0",
    term: "FSE 2.0",
    aliases: ["Fascicolo Sanitario Elettronico"],
    group: "normativa",
    definition:
      "Il Fascicolo Sanitario Elettronico raccoglie i dati e i documenti sanitari generati dagli eventi clinici di un cittadino. La versione 2.0 punta a renderlo completo e interoperabile a livello nazionale, e ha esteso l'obbligo di alimentazione anche alle strutture sanitarie private: la data spartiacque più citata è il 31 marzo 2026. I documenti clinici, in primo luogo i referti, vanno conferiti in formato strutturato (CDA2) attraverso i canali regionali.",
    detail:
      "Il prerequisito che si sottovaluta è l'archivio: non si alimenta il fascicolo se i referti nascono sparsi tra file Word e PDF rinominati a mano. Tempi e modalità operative dipendono dai provvedimenti attuativi e dall'accreditamento regionale.",
    link: {
      href: "/blog/fse-2-0-obbligo-studi-privati-cosa-fare",
      label: "FSE 2.0 per gli studi privati",
    },
  },
  {
    slug: "sistema-tessera-sanitaria",
    term: "Sistema Tessera Sanitaria",
    aliases: ["Sistema TS", "730 precompilato"],
    group: "normativa",
    definition:
      "Il sistema attraverso cui i professionisti sanitari trasmettono i dati delle spese sanitarie ai fini della dichiarazione precompilata. Dalle spese sostenute dal 1° gennaio 2025 la trasmissione è annuale, entro il 31 gennaio dell'anno successivo: il decreto correttivo D.Lgs. 81 del 12 giugno 2025 ha eliminato il precedente obbligo semestrale.",
    detail:
      "È un adempimento fiscale, che passa dal software di fatturazione o dal commercialista: Corioli non lo sostituisce. Verifica sempre le indicazioni aggiornate dell'Agenzia delle Entrate, perché proroghe e slittamenti tecnici non sono rari.",
    link: {
      href: "/blog/sistema-tessera-sanitaria-invio-dati-annuale",
      label: "L'invio al Sistema TS è annuale",
    },
  },
  {
    slug: "iperammortamento",
    term: "Iperammortamento",
    aliases: ["Superammortamento", "Iper ammortamento 2026"],
    group: "normativa",
    definition:
      "L'agevolazione della legge di bilancio 2026 che maggiora il costo dei beni strumentali nuovi 4.0, ai soli fini delle quote di ammortamento e dei canoni di leasing: del 180% per la quota di investimento fino a 2,5 milioni di euro, del 100% fino a 10 milioni e del 50% fino a 20 milioni. Vale per gli investimenti dal 1° gennaio 2026 al 30 settembre 2028 ed è riservata ai titolari di reddito d'impresa.",
    detail:
      "Il superammortamento del 2016 valeva anche per i professionisti, l'iperammortamento no. Un centro medico in forma societaria, comprese le società tra professionisti, può accedervi con le comunicazioni al GSE e una perizia tecnica asseverata; il medico con partita IVA individuale ne resta escluso. Un gestionale in abbonamento è un costo dell'anno e non si maggiora.",
    link: {
      href: "/blog/superammortamento-2026-medici-centri-medici",
      label: "Superammortamento 2026 per medici e centri medici",
    },
  },

  // --- Ginecologia e ostetricia ---
  {
    slug: "eta-gestazionale",
    term: "Età gestazionale",
    aliases: ["settimane di gravidanza"],
    group: "ostetricia",
    definition:
      "Da quanto tempo è in corso la gravidanza, espressa in settimane compiute più giorni (per esempio 24+3). Per convenzione si conta dal primo giorno dell'ultima mestruazione e non dal concepimento: per questo è di circa due settimane superiore all'età concezionale. È il riferimento da cui dipendono la data presunta del parto, le finestre degli screening e la lettura della biometria fetale.",
    link: {
      href: "/blog/calcolo-eta-gestazionale-settimane-gravidanza",
      label: "Come si calcola l'età gestazionale",
    },
  },
  {
    slug: "datazione-della-gravidanza",
    term: "Datazione della gravidanza",
    aliases: ["regola di Naegele", "data presunta del parto", "DPP"],
    group: "ostetricia",
    definition:
      "Determinazione dell'epoca di gravidanza e della data presunta del parto. Il metodo classico è la regola di Naegele: al primo giorno dell'ultima mestruazione si aggiungono 7 giorni, si sottraggono 3 mesi e si aggiunge un anno, per circa 280 giorni complessivi. Assume però un ciclo regolare di 28 giorni: nel primo trimestre la misura della lunghezza cranio-caudale (CRL) è il metodo più accurato e può sostituire la datazione mestruale.",
    detail:
      "Stabilita una volta, la datazione va mantenuta coerente per tutta la gravidanza: un errore di pochi giorni si propaga a cascata su biometria e percentili. Le soglie esatte di revisione vanno verificate sulle linee guida di riferimento.",
  },
  {
    slug: "biometria-fetale",
    term: "Biometria fetale",
    aliases: ["BPD", "HC", "AC", "FL"],
    group: "ostetricia",
    definition:
      "Insieme delle misure ecografiche del feto usate per valutarne dimensioni e crescita: diametro biparietale (BPD), circonferenza cranica (HC), circonferenza addominale (AC) e lunghezza del femore (FL), che le linee guida ISUOG 2019 indicano di misurare dalle 14 settimane. Alimentano la stima del peso fetale e il confronto con le curve di riferimento. La circonferenza addominale è il parametro che pesa di più sulla stima ed è il più sensibile alle condizioni di misura.",
    detail:
      "Il feto è piccolo per l'epoca quando il peso stimato o la circonferenza addominale sono sotto il 10° percentile, grande quando sono sopra il 90°. HC e AC si misurano con l'ellisse, con i calibri sul margine esterno dei tessuti molli.",
    link: {
      href: "/blog/biometria-fetale-bpd-hc-ac-fl",
      label: "Biometria fetale: come si misurano BPD, HC, AC e FL",
    },
  },
  {
    slug: "formula-di-hadlock",
    term: "Formula di Hadlock",
    aliases: ["stima del peso fetale", "EFW"],
    group: "ostetricia",
    definition:
      "Standard di fatto per la stima ecografica del peso fetale: quattro equazioni logaritmiche, pubblicate nel 1985, che combinano da due a quattro parametri biometrici in centimetri (AC e FL in tutte, più BPD, HC o entrambi) restituendo un peso in grammi. Il peso fetale non si misura, si stima: nello studio della Fetal Medicine Foundation su 5.163 gravidanze, la variante con HC, AC e FL, la più accurata, era entro il 10% del peso alla nascita nell'80% dei casi.",
    detail:
      "Il numero acquista significato solo insieme al percentile per epoca, che a sua volta dipende da una datazione corretta.",
    link: {
      href: "/blog/stima-peso-fetale-hadlock-guida-pratica",
      label: "La stima del peso fetale in pratica",
    },
  },
  {
    slug: "percentili-di-crescita",
    term: "Percentili e curve di crescita",
    group: "ostetricia",
    definition:
      "Il percentile colloca una misura rispetto alla popolazione di riferimento di pari età e sesso: al 25° percentile significa che il 25% dei soggetti sta sotto e il 75% sopra. Non è un voto — un bambino al 10° percentile può essere perfettamente sano. Il dato clinicamente rilevante è la traiettoria nel tempo: il segnale da approfondire è l'attraversamento marcato e persistente dei canali di crescita.",
    link: {
      href: "/blog/percentili-crescita-pediatrici-oms-guida",
      label: "Come si leggono i percentili OMS",
    },
  },
  {
    slug: "stadi-di-tanner",
    term: "Stadi di Tanner",
    aliases: ["scala di Tanner", "stadi puberali"],
    group: "ostetricia",
    definition:
      "Scala in cinque stadi che descrive lo sviluppo puberale, pubblicata da Marshall e Tanner nel 1969. Nelle ragazze si valutano separatamente il seno, da B1 a B5, e i peli pubici, da PH1 a PH5: lo stadio 1 è prepuberale, il 5 adulto. L'inizio della pubertà è lo stadio B2, la comparsa di tessuto ghiandolare sotto l'areola, che va cercato con la palpazione.",
    detail:
      "Lo sviluppo del seno prima degli 8 anni si considera precoce, l'assenza di sviluppo del seno a 13 anni ritardata. Nella visita ginecologica pediatrica di Corioli lo stadio di Tanner ha un campo suo, accanto al menarca, e compare nel referto.",
    link: {
      href: "/blog/stadi-di-tanner-ragazze-visita-ginecologica",
      label: "Stadi di Tanner nelle ragazze: come si valutano in visita",
    },
  },
  {
    slug: "cartella-ostetrica",
    term: "Cartella ostetrica elettronica",
    group: "ostetricia",
    definition:
      "Cartella clinica specializzata per il percorso di gravidanza: raccoglie la datazione, le visite in ordine di epoca, la biometria di ogni ecografia, gli esami e i referti, mostrando la crescita come una serie invece che come misure isolate. Rispetto a una cartella generica, evita che i valori vengano ricopiati fra strumento, appunti e referto.",
    link: {
      href: "/ginecologia",
      label: "Corioli per ginecologia e ostetricia",
    },
  },
  {
    slug: "indice-pulsatilita-arteria-ombelicale",
    term: "Indice di pulsatilità dell'arteria ombelicale",
    aliases: ["PI ombelicale", "UA-PI", "flussimetria ombelicale"],
    group: "ostetricia",
    definition:
      "Indice Doppler che descrive la resistenza della circolazione placentare: la differenza fra velocità sistolica e diastolica nell'arteria ombelicale divisa per la velocità media. Diminuisce con l'avanzare della gravidanza, per cui si legge come percentile per l'epoca gestazionale: un valore oltre il 95° percentile indica resistenze aumentate, e un flusso diastolico assente o invertito è il reperto più grave.",
    link: {
      href: "/blog/flussimetria-arteria-ombelicale-pi-percentili",
      label: "Flussimetria ombelicale: PI, IR e percentili",
    },
  },

  // --- Cardiologia ---
  {
    slug: "qtc-bazett",
    term: "QTc secondo Bazett",
    aliases: ["intervallo QT corretto"],
    group: "cardiologia",
    definition:
      "Intervallo QT corretto per la frequenza cardiaca, perché il QT misurato si accorcia quando la frequenza sale. La formula di Bazett divide il QT per la radice quadrata dell'intervallo RR espresso in secondi. È la correzione più diffusa, ma diventa inaffidabile fuori da una finestra indicativa di 50-100 bpm, dove tende a sovrastimare alle frequenze alte e a sottostimare a quelle basse.",
    link: {
      href: "/blog/qtc-bazett-calcolo-limiti",
      label: "QTc con Bazett: come si calcola e quando non fidarsi",
    },
  },
  {
    slug: "ipotensione-ortostatica",
    term: "Ipotensione ortostatica",
    group: "cardiologia",
    definition:
      "Calo sostenuto della pressione sistolica di almeno 20 mmHg o della diastolica di almeno 10 mmHg entro 3 minuti dal passaggio in piedi, o dall'inclinazione su lettino basculante di almeno 60 gradi, secondo il consensus statement del 2011. Nel paziente con ipertensione supina un calo sistolico di 30 mmHg può essere un criterio più adatto. Le linee guida europee indicano di misurare la pressione in piedi a 1 e a 3 minuti.",
    detail:
      "Una frequenza che sale poco mentre la pressione scende, con un rapporto inferiore a 0,5 battiti al minuto per mmHg, orienta verso una forma neurogena. In Corioli Cardiologia ogni misurazione della pressione porta la posizione, clinostatismo o ortostatismo, e il referto le stampa una sotto l'altra.",
    link: {
      href: "/blog/ipotensione-ortostatica-come-misurarla-criteri",
      label: "Ipotensione ortostatica: come si misura e quando si fa diagnosi",
    },
  },
  {
    slug: "monitoraggio-pressorio-24-ore",
    term: "Monitoraggio pressorio delle 24 ore",
    aliases: ["Holter pressorio", "ABPM", "MAPA"],
    group: "cardiologia",
    definition:
      "Registrazione automatica della pressione per 24 ore, ogni 15-30 minuti di giorno e ogni 30-60 di notte. Secondo le linee guida ESC 2024 c'è ipertensione con una media di almeno 130/80 mmHg nelle 24 ore, 135/85 di giorno o 120/70 di notte; la registrazione è valida con almeno il 70% di misure utilizzabili.",
    detail:
      "Il paziente è dipper se la pressione notturna scende di oltre il 10% rispetto alla media diurna (ESC/ESH 2018). In Corioli Cardiologia l'Holter pressorio è un modulo della visita, con le medie delle 24 ore, diurna e notturna e il calo notturno calcolato dalle medie sistoliche.",
    link: {
      href: "/blog/holter-pressorio-valori-normali-calo-notturno",
      label: "Holter pressorio delle 24 ore: valori normali e calo notturno",
    },
  },
  {
    slug: "frazione-di-eiezione",
    term: "Frazione di eiezione",
    aliases: ["FE", "HFrEF", "HFpEF"],
    group: "cardiologia",
    definition:
      "Percentuale del volume telediastolico che il ventricolo sinistro espelle a ogni sistole, misura di riferimento della funzione sistolica. È il parametro con cui si classificano i fenotipi dello scompenso cardiaco: nelle linee guida ESC 2026 la categoria intermedia (HFmrEF) non esiste più e il confine tra frazione ridotta e preservata è posto al 50%.",
    link: { href: "/cardiologia", label: "Il modulo ecocardiogramma" },
  },
  {
    slug: "tapse",
    term: "TAPSE",
    group: "cardiologia",
    definition:
      "Escursione sistolica del piano dell'anulus tricuspidalico, misurata in M-mode durante l'ecocardiogramma transtoracico. Esprime in millimetri la funzione longitudinale del ventricolo destro ed è una delle misure che entrano abitualmente nel referto insieme a diametri, spessori, frazione di eiezione, atrio sinistro, radice aortica, PAPs e rapporti E/A ed E/e'.",
  },
  {
    slug: "cha2ds2-vasc",
    term: "CHA2DS2-VASc",
    aliases: ["CHA2DS2-VA"],
    group: "cardiologia",
    definition:
      "Punteggio che stima il rischio tromboembolico nella fibrillazione atriale non valvolare e orienta la decisione sull'anticoagulazione. Somma scompenso cardiaco, ipertensione, diabete, malattia vascolare ed età fra 65 e 74 anni (un punto ciascuno), età di 75 anni o più e ictus, TIA o tromboembolia pregressi (due punti ciascuno) e sesso femminile (un punto). Le linee guida ESC 2024 usano il CHA2DS2-VA, lo stesso punteggio senza il sesso.",
    detail:
      "Molti dei suoi elementi sono già raccolti in anamnesi: quando il gestionale li rilegge dal pannello dei fattori di rischio, il punteggio non va ricompilato a mano.",
    link: {
      href: "/blog/cha2ds2-vasc-cha2ds2-va-has-bled-calcolo",
      label: "CHA2DS2-VASc, CHA2DS2-VA e HAS-BLED: come si calcolano",
    },
  },
  {
    slug: "has-bled",
    term: "HAS-BLED",
    group: "cardiologia",
    definition:
      "Punteggio che stima il rischio emorragico nel paziente in terapia anticoagulante. Considera ipertensione non controllata, funzione renale o epatica alterata, ictus pregresso, sanguinamento o predisposizione, INR labile, età oltre i 65 anni, farmaci che aumentano il rischio e alcol. Secondo le linee guida ESC 2024 non serve a negare l'anticoagulazione ma a correggere i fattori modificabili e a seguire più da vicino chi ha 3 punti o più.",
    link: {
      href: "/blog/cha2ds2-vasc-cha2ds2-va-has-bled-calcolo",
      label: "Come si calcola l'HAS-BLED, voce per voce",
    },
  },
  {
    slug: "calcium-score",
    term: "Calcium score e fascia Agatston",
    group: "cardiologia",
    definition:
      "Quantificazione della calcificazione delle arterie coronarie ottenuta con TC senza mezzo di contrasto, espressa in unità Agatston. Il valore viene abitualmente riportato per fasce, che descrivono l'entità del carico di calcio coronarico e vengono interpretate insieme all'età, al sesso e al quadro clinico complessivo.",
    detail:
      "Le fasce più usate in refertazione sono 0, 1-99, 100-299 e 300 o più; alcuni centri pongono a 400 la soglia della calcificazione severa. Un valore di 0 non esclude una placca non calcifica.",
    link: {
      href: "/blog/calcium-score-cad-rads-tc-coronarica",
      label: "Calcium score e CAD-RADS 2.0: come si leggono",
    },
  },
  {
    slug: "cad-rads",
    term: "CAD-RADS",
    group: "cardiologia",
    definition:
      "Sistema di refertazione standardizzato della TC coronarica: classifica il grado massimo di stenosi rilevato con una scala codificata, accompagnata da modificatori che segnalano condizioni particolari come stent, bypass, placche ad alto rischio o esame non diagnostico. Serve a rendere i referti confrontabili fra centri diversi, invece di affidare la sintesi agli aggettivi.",
    detail:
      "La versione 2.0 del 2022 va da CAD-RADS 0, nessuna placca, a 5, occlusione totale, e aggiunge il burden di placca da P1 a P4: la sigla completa si scrive per esempio CAD-RADS 3/P2/HRP.",
    link: {
      href: "/blog/calcium-score-cad-rads-tc-coronarica",
      label: "Le categorie CAD-RADS 2.0, con burden e modificatori",
    },
  },
  {
    slug: "egfr-ckd-epi",
    term: "eGFR con CKD-EPI 2021",
    aliases: ["filtrato glomerulare stimato", "stadi KDIGO"],
    group: "cardiologia",
    definition:
      "Stima del filtrato glomerulare calcolata dalla creatinina sierica insieme a età e sesso. L'equazione CKD-EPI del 2021 è la versione che non impiega il coefficiente etnico. Il valore stimato colloca il paziente in uno degli stadi KDIGO della funzione renale, informazione che in cardiologia entra nella scelta e nel dosaggio di diversi farmaci.",
    detail:
      "Il risultato è in mL/min/1,73 m². Gli stadi KDIGO sono G1 (90 o più), G2 (60-89), G3a (45-59), G3b (30-44), G4 (15-29) e G5 (sotto 15).",
    link: {
      href: "/blog/egfr-ckd-epi-cockcroft-gault-doac",
      label: "eGFR o Cockcroft-Gault: quale usare in cardiologia",
    },
  },
  {
    slug: "clearance-cockcroft-gault",
    term: "Clearance della creatinina secondo Cockcroft-Gault",
    aliases: ["Cockcroft-Gault", "clearance della creatinina"],
    group: "cardiologia",
    definition:
      "Stima della clearance della creatinina in mL/min calcolata da età, peso e creatinina sierica: (140 − età) × peso in kg / (72 × creatinina in mg/dL), moltiplicato per 0,85 nelle donne. A differenza dell'eGFR non è riferita alla superficie corporea. È il valore su cui le schede tecniche degli anticoagulanti orali diretti fissano le soglie di riduzione della dose.",
    detail:
      "Nell'anziano di basso peso può essere molto più bassa dell'eGFR: una donna di 82 anni e 52 kg con creatinina 1,1 mg/dL ha un eGFR di 50 e una clearance di 32 mL/min.",
    link: {
      href: "/blog/egfr-ckd-epi-cockcroft-gault-doac",
      label: "Cockcroft-Gault e la dose dei DOAC",
    },
  },
  {
    slug: "ldl-friedewald",
    term: "LDL secondo Friedewald",
    aliases: ["colesterolo non-HDL"],
    group: "cardiologia",
    definition:
      "Stima del colesterolo LDL calcolata dal profilo lipidico: colesterolo totale meno HDL meno un quinto dei trigliceridi, con i valori espressi in mg/dL. La formula non è applicabile con trigliceridi pari o superiori a 400 mg/dL. Il colesterolo non-HDL, cioè totale meno HDL, non ha questo limite e viene spesso riportato accanto.",
    detail:
      "Un calcolatore che restituisce il numero senza dichiarare la formula usata e il limite applicato sta nascondendo l'informazione che serve per fidarsi del risultato.",
  },
  {
    slug: "homa-ir",
    term: "HOMA-IR",
    group: "cardiologia",
    definition:
      "Indice di insulino-resistenza calcolato dal prodotto di glicemia e insulinemia a digiuno diviso per una costante. Ha senso solo su un prelievo eseguito a digiuno ed è un indicatore di supporto, da leggere nel contesto metabolico complessivo del paziente e non come esito isolato.",
  },
];
