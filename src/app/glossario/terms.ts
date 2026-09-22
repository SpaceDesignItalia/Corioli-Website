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
      "Chi risponde dei dati sanitari, per quanto si conservano e quali obblighi digitali riguardano lo studio privato.",
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
      href: "/blog/come-sostituire-word-excel-studio-medico",
      label: "Come sostituire Word ed Excel nello studio",
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
      "Insieme delle misure ecografiche del feto usate per valutarne dimensioni e crescita: diametro biparietale (BPD), circonferenza cranica (HC), circonferenza addominale (AC) e lunghezza del femore (FL). Alimentano la stima del peso fetale e il confronto con le curve di riferimento. La circonferenza addominale è il parametro che pesa di più sulla stima ed è il più sensibile alle condizioni di misura.",
    link: { href: "/ginecologia", label: "I calcolatori ostetrici di Corioli" },
  },
  {
    slug: "formula-di-hadlock",
    term: "Formula di Hadlock",
    aliases: ["stima del peso fetale", "EFW"],
    group: "ostetricia",
    definition:
      "Standard di fatto per la stima ecografica del peso fetale: equazioni logaritmiche che combinano i parametri biometrici — nelle varianti più diffuse HC, AC e FL, oppure tutti e quattro con il BPD — restituendo un peso in grammi. Il peso fetale non si misura, si stima: l'errore tipico è intorno al ±10% rispetto al peso alla nascita, e si amplia agli estremi e a fine gravidanza.",
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
    link: { href: "/cardiologia", label: "Il blocco TC coronarica" },
  },
  {
    slug: "cad-rads",
    term: "CAD-RADS",
    group: "cardiologia",
    definition:
      "Sistema di refertazione standardizzato della TC coronarica: classifica il grado massimo di stenosi rilevato con una scala codificata, accompagnata da modificatori che segnalano condizioni particolari come stent, bypass, placche ad alto rischio o esame non diagnostico. Serve a rendere i referti confrontabili fra centri diversi, invece di affidare la sintesi agli aggettivi.",
  },
  {
    slug: "egfr-ckd-epi",
    term: "eGFR con CKD-EPI 2021",
    aliases: ["filtrato glomerulare stimato", "stadi KDIGO"],
    group: "cardiologia",
    definition:
      "Stima del filtrato glomerulare calcolata dalla creatinina sierica insieme a età e sesso. L'equazione CKD-EPI del 2021 è la versione che non impiega il coefficiente etnico. Il valore stimato colloca il paziente in uno degli stadi KDIGO della funzione renale, informazione che in cardiologia entra nella scelta e nel dosaggio di diversi farmaci.",
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
