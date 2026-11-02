// Immagine usata nell'articolo (copertina o dentro una sezione). Le dimensioni
// servono a next/image per riservare lo spazio ed evitare layout shift.
export type BlogImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

// Tabella opzionale di una sezione. Per i confronti è il formato che motori di
// ricerca e assistenti estraggono meglio: una riga per caso, celle brevi e
// autosufficienti, nessuna cella vuota. Finisce anche in llms-full.txt.
export type BlogTable = {
  caption: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

export type BlogSection = {
  title: string;
  // Paragrafi separati da una riga vuota. Ammette link interni nella forma
  // [testo](/percorso): portano chi legge alle pagine di specialità, ai prezzi
  // o al modulo contatti dal punto dell'articolo in cui serve. Solo percorsi
  // del sito; le fonti esterne stanno in `sources`.
  body: string;
  variant?: "text" | "comparison-table";
  // Immagine opzionale mostrata sotto al testo della sezione.
  image?: BlogImage;
  table?: BlogTable;
};

export type FaqItem = {
  question: string;
  answer: string;
};

// Fonte citata in fondo all'articolo e dichiarata come `citation` nel JSON-LD.
// Negli articoli clinici è obbligatoria: una formula o una soglia senza la
// fonte da cui viene è esattamente ciò che rimproveriamo ai calcolatori altrui.
export type BlogSource = {
  title: string;
  url?: string;
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
  // Risposta in breve, mostrata subito dopo il lead. 3-5 frasi autosufficienti
  // con i numeri essenziali: è il blocco che motori di ricerca e assistenti
  // estraggono per primo, quindi deve rispondere alla domanda del titolo anche
  // letto da solo. Stessi valori del corpo dell'articolo e del glossario.
  keyPoints?: string[];
  // Fonti primarie (linee guida, articoli originali, testi di legge).
  sources?: BlogSource[];
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
    slug: "holter-pressorio-valori-normali-calo-notturno",
    title: "Holter pressorio delle 24 ore: valori normali e calo notturno",
    description:
      "Soglie ESC 2024 per il monitoraggio delle 24 ore: 130/80 nelle 24 ore, 135/85 di giorno, 120/70 di notte. Calo notturno, validità e referto.",
    excerpt:
      "Le tre fasce delle linee guida ESC 2024 per media delle 24 ore, diurna e notturna, quando una registrazione è valida, come si calcola e si legge il calo notturno e cosa riportare nel referto.",
    date: "2 Novembre 2026",
    isoDate: "2026-11-02",
    category: "Cardiologia",
    lead: "Al monitoraggio pressorio delle 24 ore si parla di ipertensione quando la media delle 24 ore è almeno 130/80 mmHg, quella diurna almeno 135/85 o quella notturna almeno 120/70, secondo le linee guida ESC 2024: soglie diverse dai 140/90 della misura in ambulatorio. Le stesse linee guida aggiungono una fascia intermedia, la pressione elevata. Qui trovi le tre fasce, quando una registrazione è valida, come si calcola e si legge il calo notturno e cosa riportare nel referto.",
    keyPoints: [
      "Secondo le linee guida ESC 2024, al monitoraggio delle 24 ore c'è ipertensione con una media delle 24 ore di almeno 130/80 mmHg, una media diurna di almeno 135/85 o una media notturna di almeno 120/70.",
      "La pressione è elevata, ma non ancora ipertensione, da 115/65 a meno di 130/80 nelle 24 ore, da 120/70 a meno di 135/85 di giorno e da 110/60 a meno di 120/70 di notte.",
      "Una registrazione è valida con almeno il 70% di misure utilizzabili, di solito 27 o più nelle 24 ore, con una misura ogni 15-30 minuti di giorno e ogni 30-60 minuti di notte.",
      "Il paziente è dipper se la pressione notturna scende di oltre il 10% rispetto alla media diurna: un calo minore, o una pressione notturna più alta di quella diurna, si associa a un rischio cardiovascolare maggiore.",
      "Il profilo dipper o non-dipper cambia spesso da una registrazione all'altra: un singolo esame non-dipper va letto con prudenza.",
    ],
    sections: [
      {
        title: "Le soglie delle linee guida ESC 2024",
        body: "Le linee guida ESC 2024 sulla pressione elevata e l'ipertensione dividono i valori in tre fasce: non elevata, elevata e ipertensione. Per il monitoraggio delle 24 ore le soglie valgono separatamente per la media delle 24 ore, per quella diurna e per quella notturna, e basta che la sistolica o la diastolica superi il limite perché il valore cada nella fascia superiore.\n\nLa fascia della pressione elevata è la novità del 2024. Non è una diagnosi di ipertensione, ma un'area di rischio in cui le linee guida chiedono di valutare il rischio cardiovascolare complessivo prima di decidere se trattare. Le soglie diurne del monitoraggio coincidono con quelle della misura a domicilio: 135/85 per l'ipertensione, 120/70 per la pressione elevata.",
        table: {
          caption: "Fasce di pressione al monitoraggio delle 24 ore secondo le linee guida ESC 2024 (mmHg)",
          columns: ["Fascia", "Media 24 ore", "Media diurna", "Media notturna"],
          rows: [
            ["Non elevata", "Sotto 115/65", "Sotto 120/70", "Sotto 110/60"],
            ["Elevata", "Da 115/65 a meno di 130/80", "Da 120/70 a meno di 135/85", "Da 110/60 a meno di 120/70"],
            ["Ipertensione", "130/80 o più", "135/85 o più", "120/70 o più"],
          ],
          note: "Linee guida ESC 2024, tabella 5. Le soglie si applicano alle medie; basta che la sistolica o la diastolica superi il limite.",
        },
      },
      {
        title: "Quando la registrazione è valida",
        body: "Una media vale quanto le misure da cui è calcolata. Le linee guida ESC 2024 considerano valida una registrazione con almeno il 70% di letture utilizzabili, che nelle 24 ore significa di solito 27 misure o più. L'apparecchio va programmato per misurare ogni 15-30 minuti di giorno, indicativamente dalle 7 alle 23, e ogni 30-60 minuti di notte.\n\nLa notte è la parte più fragile della registrazione. Le linee guida indicano idealmente sette letture notturne; quando non si riesce, otto letture in veglia e quattro durante il sonno possono bastare. Prima di calcolare le medie i valori grezzi vanno controllati, per togliere le letture palesemente errate.\n\nConta anche come si definiscono giorno e notte. I periodi fissi dell'apparecchio non coincidono sempre con il sonno reale del paziente: il diario con l'ora in cui è andato a letto e quella in cui si è alzato permette di calcolare le medie sui periodi veri.",
      },
      {
        title: "Il calo notturno: dipper e non-dipper",
        body: "Di notte la pressione normalmente scende. Il calo si esprime in percentuale della media diurna: (media diurna meno media notturna) diviso media diurna, per 100. Con una sistolica diurna di 140 mmHg e una notturna di 130, il calo è 10 su 140, cioè il 7,1%.\n\nLe linee guida ESC/ESH 2018 definiscono dipper il paziente la cui pressione notturna scende di oltre il 10% rispetto alla media diurna. È una soglia arbitraria, ma un calo inferiore al 10%, o un rapporto notte/giorno superiore a 0,9, si associa a un rischio cardiovascolare maggiore, e il rischio cresce ancora quando il calo manca del tutto o la pressione notturna supera quella diurna. Anche un calo molto marcato è stato associato a un rischio più alto, ma è poco frequente e poco riproducibile, quindi difficile da interpretare.\n\nLe stesse linee guida elencano le cause note di un calo assente: disturbi del sonno, apnee ostruttive, obesità, consumo elevato di sale nei soggetti sale-sensibili, ipotensione ortostatica, disfunzione autonomica, malattia renale cronica, neuropatia diabetica ed età avanzata. Avvertono anche che lo stato di dipper cambia spesso da un giorno all'altro: un singolo profilo non-dipper non basta a etichettare il paziente.",
      },
      {
        title: "Camice bianco e ipertensione mascherata",
        body: "Il monitoraggio delle 24 ore serve anche a riconoscere due situazioni che la sola misura in ambulatorio confonde. Nell'ipertensione da camice bianco la pressione è alta in studio e normale fuori. Nell'ipertensione mascherata succede il contrario: normale in studio, alta nella vita quotidiana.\n\nSecondo le linee guida ESC 2024 l'ipertensione mascherata è più frequente negli uomini, nei fumatori, in chi consuma molto alcol e nelle persone con diabete o obesità. Le stesse linee guida osservano che monitoraggio delle 24 ore e misura a domicilio danno una diagnosi diversa in circa il 15% dei casi, e in circa metà di questi la differenza supera i 5 mmHg.",
      },
      {
        title: "Cosa scrivere nel referto",
        body: "Un referto confrontabile con il controllo successivo riporta la data e la durata della registrazione, la percentuale di misure valide, le medie delle 24 ore, diurna e notturna con sistolica e diastolica, i periodi usati per giorno e notte, il calo notturno in percentuale e la fascia secondo le linee guida, con l'anno delle linee guida usate. Accanto ai numeri vanno la terapia in corso, con gli orari di assunzione, e gli eventi annotati nel diario.\n\nIn [Corioli Cardiologia](/cardiologia) l'Holter pressorio è un modulo della visita che si accende quando serve. Ha i campi per la data di inizio, le medie delle 24 ore, diurna e notturna, il calo notturno riportato dall'apparecchio, la percentuale di misure oltre la soglia e il referto testuale. Accanto al calo riportato, l'app propone quello calcolato dalle medie sistoliche diurna e notturna; nel referto PDF compare il valore dell'apparecchio, oppure, se manca, quello calcolato.",
      },
    ],
    faq: [
      {
        question: "Quali sono i valori normali dell'Holter pressorio?",
        answer:
          "Secondo le linee guida ESC 2024 la pressione non è elevata sotto 115/65 mmHg nelle 24 ore, sotto 120/70 di giorno e sotto 110/60 di notte. Si parla di ipertensione da 130/80 nelle 24 ore, 135/85 di giorno o 120/70 di notte; fra le due fasce c'è la pressione elevata.",
      },
      {
        question: "Quante misure servono perché l'Holter pressorio sia valido?",
        answer:
          "Almeno il 70% di letture utilizzabili, di solito 27 o più nelle 24 ore, secondo le linee guida ESC 2024. Di notte servono idealmente sette letture; se non si riesce, otto in veglia e quattro durante il sonno possono bastare.",
      },
      {
        question: "Come si calcola il calo notturno della pressione?",
        answer:
          "Si sottrae la media notturna dalla media diurna, si divide per la media diurna e si moltiplica per 100. Con 140 di giorno e 130 di notte il calo è del 7,1%: sotto il 10%, quindi un profilo non-dipper secondo la definizione delle linee guida ESC/ESH 2018.",
      },
      {
        question: "Cosa vuol dire non-dipper?",
        answer:
          "Che di notte la pressione scende meno del 10% rispetto al giorno. Si associa a un rischio cardiovascolare maggiore, ma lo stato di dipper cambia spesso fra una registrazione e l'altra: un singolo esame non-dipper va letto con prudenza e, se serve, ripetuto.",
      },
    ],
    sources: [
      {
        title:
          "McEvoy JW, McCarthy CP, Bruno RM, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J. 2024;45(38):3912-4018.",
        url: "https://doi.org/10.1093/eurheartj/ehae178",
      },
      {
        title:
          "Williams B, Mancia G, Spiering W, et al. 2018 ESC/ESH Guidelines for the management of arterial hypertension. Eur Heart J. 2018;39(33):3021-3104.",
        url: "https://doi.org/10.1093/eurheartj/ehy339",
      },
    ],
  },
  {
    slug: "biometria-fetale-bpd-hc-ac-fl",
    title: "Biometria fetale: come si misurano BPD, HC, AC e FL",
    description:
      "BPD, HC, AC e FL dalle 14 settimane: piani di scansione e criteri di qualità ISUOG, percentili per epoca, errori comuni e cosa riportare nel referto.",
    excerpt:
      "Le quattro misure della biometria fetale, i piani di scansione con i criteri di qualità delle linee guida ISUOG 2019, come si passa dalla misura al percentile e gli errori che lo falsano.",
    date: "2 Novembre 2026",
    isoDate: "2026-11-02",
    category: "Ostetricia",
    lead: "La biometria fetale del secondo e terzo trimestre si basa su quattro misure, diametro biparietale (BPD), circonferenza cranica (HC), circonferenza addominale (AC) e lunghezza della diafisi del femore (FL), che le linee guida ISUOG indicano di misurare dalle 14 settimane in poi. Ognuna ha un piano di scansione preciso, e il percentile ha senso solo se la misura è presa con lo stesso metodo degli studi che hanno costruito le curve. Qui trovi i piani e i criteri di qualità, come si passa dalla misura al percentile, gli errori più comuni e cosa riportare nel referto.",
    keyPoints: [
      "Dalle 14 settimane si misurano BPD, HC, AC e FL; prima si usa la lunghezza cranio-caudale (CRL), secondo le linee guida ISUOG 2019.",
      "HC e AC si misurano con l'ellisse, con i calibri sul margine esterno dei tessuti molli: è la raccomandazione ISUOG, che considera equivalente il metodo dei due diametri misurati dall'esterno all'esterno.",
      "Le misure vanno prese con lo stesso metodo degli studi che hanno prodotto le curve di riferimento usate in studio, altrimenti il percentile non è confrontabile.",
      "Un feto è piccolo per l'epoca, SGA, quando il peso stimato o la circonferenza addominale sono sotto il 10° percentile, e grande per l'epoca, LGA, quando sono sopra il 90°.",
      "Fra due ecografie di crescita ISUOG indica di norma almeno 3 settimane, per non scambiare l'errore di misura per un rallentamento della crescita.",
    ],
    sections: [
      {
        title: "Le quattro misure e quando si usano",
        body: "Prima delle 14 settimane le dimensioni del feto e l'età gestazionale si valutano con la lunghezza cranio-caudale. Dalle 14 settimane in poi le linee guida ISUOG 2019 indicano quattro misure: il diametro biparietale e la circonferenza cranica per la testa, la circonferenza addominale per l'addome e la lunghezza della diafisi del femore. In italiano si trovano anche come DBP, CC, CA e LF.\n\nLe quattro misure servono a due cose. Ciascuna, confrontata con le curve di riferimento, dice se quella parte del corpo è nella norma per l'epoca. Insieme alimentano le formule che stimano il peso fetale, come quelle di [Hadlock](/blog/stima-peso-fetale-hadlock-guida-pratica). La circonferenza addominale entra in quasi tutte le formule, ed è anche una misura che ISUOG segnala come difficile da prendere bene per ragioni tecniche.",
      },
      {
        title: "I piani di scansione e i criteri di qualità",
        body: "ISUOG propone un punteggio di qualità per ogni immagine biometrica: ogni criterio soddisfatto vale un punto. È utile anche fuori dagli audit, come lista di controllo prima di congelare l'immagine.\n\nPer la circonferenza cranica e quella addominale la raccomandazione è usare l'ellisse, con i calibri sul margine esterno dei tessuti molli. Il metodo dei due diametri perpendicolari è considerato altrettanto riproducibile, purché anche lì i calibri siano dall'esterno all'esterno. Quello che conta, per ISUOG, è che all'interno dello stesso centro o della stessa rete si usi un solo metodo, lo stesso degli studi che hanno costruito le curve di riferimento adottate.",
        table: {
          caption: "Criteri di qualità delle immagini biometriche secondo le linee guida ISUOG 2019",
          columns: ["Misura", "Cosa deve vedersi", "Cosa non deve vedersi"],
          rows: [
            ["BPD e HC", "Piano simmetrico con i talami e il cavo del setto pellucido; testa oltre metà dell'immagine; calibri ed ellisse ben posizionati", "Il cervelletto"],
            ["AC", "Piano simmetrico con la bolla gastrica e il seno portale; addome oltre metà dell'immagine; calibri ed ellisse ben posizionati", "I reni"],
            ["FL", "Entrambe le estremità dell'osso ben visibili; angolo inferiore a 45 gradi rispetto all'orizzontale; femore oltre metà dell'immagine; calibri ben posizionati", "Un'estremità dell'osso non riconoscibile"],
          ],
          note: "Dalla tabella 1 delle linee guida ISUOG 2019, che riprende il punteggio di Salomon et al.: ogni criterio soddisfatto vale un punto.",
        },
      },
      {
        title: "Dalla misura al percentile",
        body: "Un millimetro in più o in meno non dice niente finché non lo si confronta con quello atteso per l'epoca. Il percentile dipende quindi da due cose: dall'età gestazionale, che deve essere stabilita correttamente, e dalle curve di riferimento scelte.\n\nISUOG distingue due tipi di curve. Quelle descrittive, come le curve di Hadlock, descrivono come erano distribuite le misure in una popolazione in un certo periodo. Gli standard prescrittivi, come quelli del progetto INTERGROWTH-21st, descrivono la crescita in condizioni ottimali, in gravidanze sane selezionate in anticipo. Lo stesso feto può cadere a percentili diversi sull'una e sull'altra: per questo nel referto va scritto quale curva si è usata.\n\nLe soglie più usate sono il 10° e il 90° percentile. Secondo ISUOG un feto è adeguato per l'epoca quando le misure o il peso stimato stanno fra il 10° e il 90°, piccolo per l'epoca quando il peso stimato o la circonferenza addominale sono sotto il 10°, grande quando sono sopra il 90°. Alcuni protocolli usano soglie diverse, come il 5° o il 3° percentile.",
      },
      {
        title: "Gli errori che si ripetono",
        body: "La maggior parte degli errori di biometria è già scritta nella tabella dei criteri di qualità. Una testa misurata su un piano obliquo, quello in cui compare il cervelletto, dà un BPD e una HC diversi da quelli del piano corretto. Un addome misurato troppo in basso, dove si vedono i reni, o su una sezione non circolare sbaglia la AC, che è la misura che pesa di più nella stima del peso. Un femore troppo inclinato o con un'estremità non visibile rischia di essere misurato male.\n\nAltri errori stanno fuori dall'immagine. Misurare con un metodo diverso da quello delle curve, per esempio i calibri in una posizione diversa da quella prevista, sposta il percentile anche se la misura è precisa. Ripetere l'ecografia di crescita dopo una o due settimane rischia di leggere come rallentamento quello che è solo errore di misura: ISUOG indica di norma almeno 3 settimane, salvo indicazioni cliniche. E il peso stimato non va riportato sulle curve del peso alla nascita, che includono molti neonati prematuri con restrizione di crescita, ma su curve dedicate al peso fetale.",
      },
      {
        title: "Cosa scrivere nel referto",
        body: "Per ogni misura il referto riporta il valore in millimetri e il percentile, con la curva di riferimento usata. Prima delle misure va l'età gestazionale, con il metodo con cui è stata stabilita. Se si calcola il peso stimato, va indicata la formula, per esempio Hadlock con HC, AC e FL, e la curva su cui si legge il suo percentile. Con questi elementi un collega può confrontare il referto con quello dell'ecografia successiva anche se l'ha fatta un altro operatore con un altro ecografo.\n\nIn [Corioli](/ginecologia), nella visita ostetrica, si inseriscono DBP, CC, CA e LF in millimetri. L'app calcola il percentile di ciascuna misura sulle curve di Hadlock 1984, valide da 14 a 40 settimane, sull'età gestazionale calcolata dall'ultima mestruazione alla data della visita, e il peso stimato con la formula di Hadlock scelta nelle impostazioni, con il suo centile sulle curve del 1991. Il referto PDF riporta gli stessi valori, senza ricopiarli a mano.",
      },
    ],
    faq: [
      {
        question: "Da quale settimana si misurano BPD, HC, AC e FL?",
        answer:
          "Dalle 14 settimane, secondo le linee guida ISUOG 2019. Prima di allora le dimensioni del feto e l'età gestazionale si valutano con la lunghezza cranio-caudale (CRL).",
      },
      {
        question: "Come si misura correttamente la circonferenza cranica?",
        answer:
          "Su un piano assiale simmetrico che mostri i talami e il cavo del setto pellucido, senza il cervelletto, con la testa che occupa più di metà dell'immagine. ISUOG raccomanda l'ellisse con i calibri sul margine esterno dei tessuti molli.",
      },
      {
        question: "Quale misura conta di più per riconoscere un feto piccolo per l'epoca?",
        answer:
          "Secondo ISUOG un feto è piccolo per l'epoca quando il peso stimato o la circonferenza addominale sono sotto il 10° percentile. La circonferenza addominale è anche la misura che pesa di più nelle formule del peso fetale, ed è difficile da prendere bene.",
      },
      {
        question: "Ogni quanto si ripete l'ecografia di crescita?",
        answer:
          "ISUOG indica di norma un intervallo di almeno 3 settimane, per ridurre i falsi positivi dovuti all'errore di misura. Intervalli più brevi restano possibili quando c'è un'indicazione clinica, anche senza ricalcolare il peso stimato.",
      },
    ],
    sources: [
      {
        title:
          "Salomon LJ, Alfirevic Z, Da Silva Costa F, et al. ISUOG Practice Guidelines: ultrasound assessment of fetal biometry and growth. Ultrasound Obstet Gynecol. 2019;53(6):715-723.",
        url: "https://doi.org/10.1002/uog.20272",
      },
      {
        title:
          "Hadlock FP, Deter RL, Harrist RB, Park SK. Estimating fetal age: computer-assisted analysis of multiple fetal growth parameters. Radiology. 1984;152(2):497-501.",
        url: "https://doi.org/10.1148/radiology.152.2.6739822",
      },
      {
        title:
          "Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology. 1991;181(1):129-133.",
        url: "https://doi.org/10.1148/radiology.181.1.1887021",
      },
      {
        title:
          "Papageorghiou AT, Ohuma EO, Altman DG, et al. International standards for fetal growth based on serial ultrasound measurements: the Fetal Growth Longitudinal Study of the INTERGROWTH-21st Project. Lancet. 2014;384(9946):869-879.",
        url: "https://doi.org/10.1016/S0140-6736(14)61490-2",
      },
    ],
  },
  {
    slug: "informativa-privacy-studio-medico-modello",
    title: "Informativa privacy dello studio medico: contenuti e modello",
    description:
      "Cosa deve contenere l'informativa privacy di uno studio medico secondo l'articolo 13 del GDPR, quando serve il consenso e un modello da adattare.",
    excerpt:
      "Gli elementi dell'articolo 13 del GDPR uno per uno, i trattamenti per cui il consenso serve ancora, come e quando consegnare l'informativa e un modello da adattare al proprio studio.",
    date: "2 Novembre 2026",
    isoDate: "2026-11-02",
    category: "Normativa",
    lead: "L'informativa privacy dello studio medico deve dire al paziente chi tratta i suoi dati, per quali finalità e su quale base giuridica, a chi li comunica, per quanto tempo li conserva, quali diritti ha e come proporre reclamo al Garante: sono gli elementi dell'articolo 13 del GDPR. Per la cura il consenso non serve, ma l'informativa sì, e va data quando si raccolgono i dati, cioè di solito alla prima visita. Qui trovi gli elementi uno per uno, i trattamenti per cui il consenso serve ancora e un modello da adattare al tuo studio.",
    keyPoints: [
      "L'articolo 13 del GDPR elenca cosa scrivere: titolare e contatti, eventuale DPO, finalità e base giuridica, destinatari, trasferimenti fuori dall'Unione europea, periodo di conservazione, diritti, revoca del consenso, reclamo al Garante, obbligo di fornire i dati e decisioni automatizzate.",
      "Per i trattamenti necessari alla cura il medico non deve chiedere il consenso del paziente: lo ha chiarito il Garante nel provvedimento n. 55 del 7 marzo 2019, sulla base dell'articolo 9 del GDPR.",
      "Il consenso resta necessario per i trattamenti solo indirettamente legati alla cura, come la consegna del referto online, le app mediche diverse dalla telemedicina o le finalità promozionali.",
      "Il medico libero professionista non deve nominare un DPO, perché non tratta dati su larga scala, ma deve tenere il registro delle attività di trattamento.",
      "Nell'informativa va scritto anche il periodo di conservazione, o il criterio per stabilirlo: per lo studio privato il riferimento più usato è di dieci anni dall'ultima prestazione.",
    ],
    sections: [
      {
        title: "Il consenso per la cura non serve, l'informativa sì",
        body: "Con il GDPR è cambiato il punto di partenza. I dati sanitari trattati per la diagnosi e la cura, da un professionista tenuto al segreto professionale, si basano sull'articolo 9 del regolamento, paragrafo 2, lettera h, e paragrafo 3. Nel provvedimento n. 55 del 7 marzo 2019 il Garante ha chiarito che in questi casi il medico non deve più chiedere il consenso del paziente, sia che lavori in libera professione sia in una struttura, purché il trattamento sia davvero necessario alla prestazione richiesta.\n\nL'informativa invece resta obbligatoria. L'articolo 13 del GDPR chiede di fornirla nel momento in cui i dati vengono raccolti, che nello studio coincide con la prima visita. Per i pazienti già in carico il Garante ha precisato che l'informativa data prima del GDPR va aggiornata solo per gli elementi nuovi, come il periodo di conservazione.",
      },
      {
        title: "Cosa deve contenere: gli elementi dell'articolo 13",
        body: "L'articolo 13 divide gli elementi in due gruppi, ma nella pratica vanno tutti nello stesso documento. Alcuni nello studio medico sono quasi sempre gli stessi; altri vanno scritti solo se ricorrono, come il DPO o il trasferimento dei dati fuori dall'Unione europea.\n\nDue punti meritano attenzione. Fra i destinatari vanno anche i fornitori che trattano i dati per conto dello studio, come un gestionale in cloud o un servizio di prenotazione online: sono responsabili del trattamento e serve un contratto con loro. E i diritti del paziente vanno elencati tutti, sapendo che la cancellazione incontra il limite degli obblighi di conservazione della documentazione clinica.",
        table: {
          caption: "Gli elementi dell'informativa (articolo 13 del GDPR) e come si declinano nello studio medico",
          columns: ["Elemento", "Cosa scrivere nello studio"],
          rows: [
            ["Titolare e contatti", "Nome del medico o della società, indirizzo dello studio, email e telefono"],
            ["Responsabile della protezione dei dati (DPO)", "Solo se nominato: il libero professionista di norma non è tenuto"],
            ["Finalità e base giuridica", "Diagnosi e cura: articolo 9, paragrafo 2, lettera h; adempimenti fiscali: obbligo di legge, articolo 6, paragrafo 1, lettera c"],
            ["Legittimo interesse", "Solo se un trattamento si basa sul legittimo interesse; nello studio è raro"],
            ["Destinatari", "Commercialista, Sistema Tessera Sanitaria, colleghi e laboratori a cui invii il paziente, fornitori che trattano i dati per conto dello studio"],
            ["Trasferimenti fuori dall'Unione europea", "Solo se avvengono, per esempio con servizi che conservano i dati su server extra UE"],
            ["Periodo di conservazione", "Il termine scelto o il criterio, per esempio dieci anni dall'ultima prestazione"],
            ["Diritti del paziente", "Accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, e a chi scrivere per esercitarli"],
            ["Revoca del consenso", "Solo per i trattamenti basati sul consenso: si può revocare in qualsiasi momento"],
            ["Reclamo", "Il diritto di proporre reclamo al Garante per la protezione dei dati personali"],
            ["Obbligo di fornire i dati", "Quali dati sono necessari alla prestazione e cosa succede se il paziente non li fornisce"],
            ["Decisioni automatizzate", "Se non ce ne sono, come di norma nello studio, si scrive che non ce ne sono"],
          ],
          note: "Elementi dell'articolo 13, paragrafi 1 e 2, del Regolamento (UE) 2016/679.",
        },
      },
      {
        title: "Quando il consenso serve ancora",
        body: "La regola del Garante vale per i trattamenti necessari alla cura. Quelli collegati alla cura solo in modo indiretto hanno bisogno di un'altra base giuridica, di solito il consenso esplicito. Nel provvedimento del 2019 il Garante ne indica alcuni: le app mediche usate per finalità diverse dalla telemedicina o accessibili a persone che non sono professionisti sanitari, le finalità promozionali o commerciali, e la consegna del referto online, per cui il consenso è richiesto dalle regole di settore sulla refertazione.\n\nIn pratica conviene separare i due piani. L'informativa descrive tutti i trattamenti; il consenso, quando serve, si raccoglie a parte, per ciascuna finalità, e il paziente deve poterlo negare senza che cambi la cura che riceve.",
      },
      {
        title: "Come e quando consegnarla",
        body: "Il GDPR non impone una forma, ma chiede che l'informativa sia chiara e semplice, e il titolare deve poter dimostrare di averla data. Nello studio la soluzione più pratica è un foglio consegnato alla prima visita, con una firma per presa visione conservata nella scheda del paziente, e la stessa informativa affissa in sala d'attesa e pubblicata sul sito, se c'è.\n\nL'informativa va rivista quando cambia qualcosa di sostanziale, per esempio un nuovo fornitore che tratta i dati per conto dello studio o un nuovo servizio, come le prenotazioni online. Il resto degli adempimenti, dal registro dei trattamenti alle violazioni dei dati, è nella guida al [GDPR per il medico libero professionista](/blog/gdpr-medico-libero-professionista-adempimenti).",
      },
      {
        title: "Un modello da adattare",
        body: "Il testo che segue è un punto di partenza per uno studio specialistico in cui lavora un solo medico. Le parti fra parentesi quadre vanno sostituite, e le voci che non riguardano lo studio vanno tolte: un'informativa che descrive trattamenti che non fai è inesatta quanto una che ne dimentica.\n\nTitolare del trattamento. Il titolare è il dott. o la dott.ssa [nome e cognome], [specialità], con studio in [indirizzo], email [indirizzo email], telefono [numero].\n\nFinalità e base giuridica. I dati personali e sanitari sono trattati per la diagnosi, la cura e le prestazioni richieste, sulla base dell'articolo 9, paragrafo 2, lettera h, e paragrafo 3, del Regolamento (UE) 2016/679: per queste finalità non è richiesto il consenso. I dati necessari agli adempimenti fiscali e contabili sono trattati per obbligo di legge, articolo 6, paragrafo 1, lettera c.\n\nDestinatari. I dati possono essere comunicati al commercialista dello studio, al Sistema Tessera Sanitaria per la dichiarazione dei redditi precompilata, salvo opposizione del paziente, ad altri professionisti sanitari e laboratori coinvolti nella cura, e a [eventuali fornitori che trattano i dati per conto dello studio], nominati responsabili del trattamento. I dati non sono diffusi né trasferiti fuori dall'Unione europea.\n\nConservazione. La documentazione clinica è conservata per [dieci] anni dall'ultima prestazione, salvo contenziosi in corso o diversi obblighi di legge; i documenti fiscali per il tempo previsto dalla normativa fiscale.\n\nDiritti. Il paziente può chiedere in ogni momento l'accesso ai propri dati, la rettifica, la cancellazione nei limiti degli obblighi di conservazione, la limitazione del trattamento, l'opposizione e la portabilità, scrivendo a [indirizzo email]. Ha inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.\n\nConferimento dei dati. I dati anagrafici e sanitari sono necessari per eseguire la prestazione: senza di essi la visita non può essere svolta in modo appropriato. Non sono presenti processi decisionali automatizzati.",
      },
      {
        title: "Se usi un gestionale",
        body: "Il gestionale entra nell'informativa solo se il fornitore tratta i dati dei pazienti per conto dello studio. Un gestionale in cloud conserva l'archivio sui server del fornitore, che diventa responsabile del trattamento: va indicato fra i destinatari, serve un contratto ai sensi dell'articolo 28 e, se i server sono fuori dall'Unione europea, va descritto anche il trasferimento. La differenza fra i due modelli è spiegata in [gestionale medico locale o in cloud](/blog/gestionale-medico-locale-o-cloud).\n\nCon un gestionale che salva i dati sul computer dello studio, come [Corioli](/gdpr), il fornitore del software non riceve i dati clinici e non va indicato fra i destinatari. Resta da scrivere il periodo di conservazione, che è una scelta del medico: i criteri per stabilirlo sono nella guida su [quanto conservare la cartella clinica nello studio privato](/blog/conservazione-cartella-clinica-studio-privato).",
      },
    ],
    faq: [
      {
        question: "Il medico deve far firmare il consenso privacy al paziente?",
        answer:
          "Per la diagnosi e la cura no: il Garante, nel provvedimento n. 55 del 7 marzo 2019, ha chiarito che il medico non deve chiedere il consenso per i trattamenti necessari alla prestazione. Deve però consegnare l'informativa. Il consenso serve per i trattamenti solo indirettamente legati alla cura, come il referto online o le finalità promozionali.",
      },
      {
        question: "Quando va consegnata l'informativa privacy?",
        answer:
          "Nel momento in cui si raccolgono i dati, come prevede l'articolo 13 del GDPR: nello studio, di solito alla prima visita. Conviene conservare una firma per presa visione, perché il titolare deve poter dimostrare di averla data.",
      },
      {
        question: "Il medico libero professionista deve nominare un DPO?",
        answer:
          "No. Secondo il Garante il professionista sanitario che lavora da solo non tratta dati su larga scala e non è tenuto a nominarlo. Deve però tenere il registro delle attività di trattamento, da mostrare in caso di controllo.",
      },
      {
        question: "Cosa scrivere nell'informativa sul periodo di conservazione?",
        answer:
          "Il periodo o il criterio per stabilirlo. Per la cartella dello studio privato nessuna norma fissa un termine: il riferimento più usato è di dieci anni dall'ultima prestazione, il termine di prescrizione ordinaria, salvo contenziosi in corso.",
      },
    ],
    sources: [
      {
        title:
          "Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio, del 27 aprile 2016 (GDPR), articoli 6, 9, 13 e 28.",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
      {
        title:
          "Garante per la protezione dei dati personali. Chiarimenti sull'applicazione della disciplina per il trattamento dei dati relativi alla salute in ambito sanitario, provvedimento n. 55 del 7 marzo 2019.",
        url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9091942",
      },
    ],
  },
  {
    slug: "cambiare-gestionale-medico-migrazione-dati",
    title: "Cambiare gestionale medico senza perdere i dati: come si fa la migrazione",
    description:
      "Cosa chiedere al vecchio fornitore, quali dati passano bene e quali no, come verificare l'import e cosa dice il GDPR: la migrazione in 6 passaggi.",
    excerpt:
      "Il cambio di gestionale si decide sull'archivio, non sul software nuovo. Cosa chiedere al vecchio fornitore, in che formato, cosa prevede l'articolo 28 del GDPR, come si verifica l'import e come si gestisce il periodo di passaggio.",
    date: "2 Novembre 2026",
    isoDate: "2026-11-02",
    category: "Gestione Studio",
    lead: "Per cambiare gestionale medico senza perdere i dati serve un'esportazione completa del vecchio archivio in un formato aperto, verificata prima di disdire il contratto e importata nel nuovo software su una copia di prova. Se il vecchio gestionale tiene i dati sui server del fornitore, il GDPR è dalla tua parte: il contratto deve prevedere che alla fine del servizio il fornitore te li restituisca o li cancelli, a tua scelta. Qui trovi cosa chiedere, in che formato, quali dati passano bene e quali no, come si controlla l'import e come si organizza il periodo di passaggio.",
    keyPoints: [
      "Prima di disdire il vecchio gestionale serve un'esportazione completa in un formato aperto, come CSV, Excel, XML o una copia del database con la descrizione dei campi, e la verifica che contenga tutti i pazienti e tutte le visite.",
      "Se il fornitore conserva i dati sui suoi server è responsabile del trattamento: l'articolo 28 del GDPR impone che il contratto preveda, a scelta del medico titolare, la restituzione o la cancellazione di tutti i dati personali alla fine del servizio.",
      "La portabilità dell'articolo 20 del GDPR è un diritto del paziente sui dati che lo riguardano, non uno strumento del medico verso il fornitore: per riavere l'archivio dello studio contano il contratto e l'articolo 28.",
      "Anagrafiche e appuntamenti di solito passano bene; testi liberi, campi clinici strutturati, immagini e allegati sono le parti che più spesso si perdono o arrivano in una forma diversa.",
      "Conviene importare prima su una copia di prova, confrontare i conteggi e un campione di schede scelte apposta, e tenere il vecchio archivio consultabile finché il nuovo non è verificato.",
    ],
    sections: [
      {
        title: "Prima di tutto: cosa c'è nel vecchio archivio",
        body: "Il cambio di gestionale si decide sull'archivio, non sul software nuovo. Prima di parlare con qualsiasi fornitore conviene fare l'inventario di quello che c'è da portare: le anagrafiche dei pazienti, gli appuntamenti, le visite con il diario clinico, i campi strutturati come misure, biometrie e diagnosi, i referti e gli altri documenti prodotti dallo studio, gli allegati caricati nel tempo, cioè esami esterni, immagini e consensi firmati, e infine i modelli di testo e la carta intestata.\n\nPer ognuna di queste voci servono due numeri, presi dal vecchio software: quanti pazienti ci sono in archivio e quante visite. Sembrano dettagli, ma sono il metro con cui si verificherà l'import. Un'esportazione che arriva con 3.200 pazienti quando il gestionale ne mostrava 3.450 ha un problema, e conviene scoprirlo prima di aver disdetto il contratto, non dopo.\n\nL'inventario serve anche a decidere cosa non portare. Le prove fatte all'installazione, i pazienti di test e i doppioni accumulati negli anni sono un buon momento per essere lasciati indietro.",
      },
      {
        title: "Cosa chiedere al vecchio fornitore",
        body: "La richiesta va fatta per iscritto e deve essere precisa: un'esportazione completa, in un formato aperto, con la descrizione dei campi. Un file di backup che si apre solo con il vecchio programma non è un'esportazione: ti lascia i dati, ma non il modo di leggerli.\n\nPer le anagrafiche e gli appuntamenti il formato più pratico è il CSV o l'Excel, una riga per paziente o per appuntamento, con un identificativo che colleghi ogni appuntamento al suo paziente. Per le visite il formato dipende da come il vecchio gestionale le archivia: un CSV con il testo completo, un XML o una copia del database, sempre accompagnati dal tracciato dei campi, cioè l'elenco di cosa contiene ogni colonna. I referti già prodotti conviene averli in PDF, uno per documento, con un nome o un indice che dica a quale paziente appartengono. Lo stesso vale per gli allegati.\n\nChiedi anche i tempi e gli eventuali costi dell'esportazione, e se il fornitore la fa una sola volta o la ripete alla data del passaggio: tra il primo export di prova e il giorno in cui smetti di usare il vecchio software, l'archivio continua a crescere.",
        table: {
          caption: "Cosa chiedere per ogni tipo di dato e cosa controllare all'arrivo",
          columns: ["Dato", "Formato da chiedere", "Cosa controllare"],
          rows: [
            ["Anagrafiche dei pazienti", "CSV o Excel, una riga per paziente", "Numero di pazienti, codice fiscale, date di nascita nel formato giusto, lettere accentate"],
            ["Appuntamenti", "CSV con l'identificativo del paziente", "Che ogni appuntamento sia collegato al paziente giusto, come sono marcati quelli annullati"],
            ["Visite e diario clinico", "CSV, XML o copia del database, con il tracciato dei campi", "Date, testo completo delle note, campi strutturati come misure e diagnosi"],
            ["Referti e documenti prodotti", "PDF, uno per documento, con un indice paziente-file", "Che si aprano e che ognuno sia attribuibile al suo paziente"],
            ["Allegati: esami esterni, immagini, consensi firmati", "File originali con un indice paziente-file", "Numero di file e spazio occupato, uguali a quelli del vecchio archivio"],
            ["Modelli di testo e carta intestata", "Testo o documento modificabile", "Spesso non si esportano: vanno ricreati nel nuovo software"],
          ],
          note: "Il tracciato dei campi è la descrizione di cosa contiene ogni colonna dell'esportazione. Senza, chi importa deve indovinarlo.",
        },
      },
      {
        title: "Cosa dice il GDPR quando cambi fornitore",
        body: "Se il vecchio gestionale è in cloud, il fornitore tratta i dati dei tuoi pazienti per tuo conto ed è quindi responsabile del trattamento. L'articolo 28 del GDPR stabilisce che il contratto con il responsabile preveda, fra le altre cose, che alla fine della prestazione dei servizi il responsabile cancelli o restituisca tutti i dati personali, su scelta del titolare, e cancelli le copie esistenti, salvo che la legge ne imponga la conservazione. È la clausola da cercare nel contratto o nell'accordo sul trattamento dei dati prima di dare la disdetta.\n\nSpesso si cita la portabilità dell'articolo 20, ma non è lo strumento giusto. La portabilità è un diritto dell'interessato, cioè del paziente, sui dati che lo riguardano e che ha fornito: non è pensata per il medico che vuole riavere l'archivio dello studio dal fornitore. Per quello contano il contratto e l'articolo 28.\n\nSe invece il vecchio gestionale è installato nello studio e i dati sono sul tuo computer, il problema è solo tecnico: l'archivio è già nelle tue mani e bisogna capire come esportarlo in un formato leggibile.\n\nDue adempimenti da non dimenticare. Il registro delle attività di trattamento elenca anche le categorie di destinatari dei dati, quindi va aggiornato quando cambia chi tratta i dati per tuo conto. E durante il trasferimento l'archivio va protetto come qualsiasi altro dato sanitario: un export completo dei pazienti non viaggia come allegato di una email in chiaro, ma su un supporto cifrato o con un trasferimento protetto.",
      },
      {
        title: "La prova d'import e la verifica",
        body: "Il primo import non si fa sull'archivio con cui lavorerai. Si fa su una copia o su un'installazione di prova, con l'export completo, e si controlla prima di decidere la data del passaggio.\n\nLa verifica parte dai numeri dell'inventario: pazienti e visite importati devono corrispondere a quelli del vecchio gestionale, e ogni differenza deve avere una spiegazione, per esempio pazienti di test lasciati fuori o doppioni riuniti. Poi si aprono una decina di schede scelte apposta, non a caso: il paziente più vecchio dell'archivio, quello con più visite, uno con nome e cognome con apostrofi o accenti, due omonimi, una paziente con gravidanze o un paziente con molti esami allegati.\n\nGli errori che si ripetono sono sempre gli stessi. Date con giorno e mese invertiti, che trasformano il 3 aprile nel 4 marzo. Lettere accentate diventate simboli per un problema di codifica del file. Pazienti doppi perché lo stesso nome era scritto in due modi. Note tagliate a una lunghezza massima. Appuntamenti annullati importati come visite fatte.",
      },
      {
        title: "Il periodo di passaggio",
        body: "Il giorno del passaggio va scelto prima: da quella data le visite nuove si registrano solo nel nuovo gestionale. Lavorare in parallelo sui due sistemi, inserendo la stessa visita due volte, sembra prudente ma produce archivi che divergono in pochi giorni.\n\nIl vecchio archivio non sparisce il giorno dopo. Deve restare consultabile, anche solo in lettura o attraverso i PDF esportati, per tutto il tempo in cui potrebbe servire un dato non migrato e per rispettare gli [obblighi di conservazione della documentazione clinica](/blog/conservazione-cartella-clinica-studio-privato), che non si interrompono con il cambio di software.\n\nSolo dopo la verifica si chiude il contratto con il vecchio fornitore e gli si chiede, per iscritto, la conferma della restituzione o della cancellazione dei dati. L'export originale va conservato in [almeno due posti diversi](/blog/backup-studio-medico-regola-3-2-1): è l'unica copia completa dell'archivio com'era prima della migrazione, e l'articolo 32 del GDPR chiede di poter ripristinare tempestivamente l'accesso ai dati in caso di incidente.",
      },
      {
        title: "Come si importa l'archivio in Corioli",
        body: "Corioli, sia nell'app di ginecologia e ostetricia sia in Corioli Cardiologia, importa le anagrafiche dei pazienti e gli appuntamenti da due file CSV con un tracciato preciso, separati da punto e virgola. Gli appuntamenti diventano visite con la prestazione e l'agenda di provenienza, quelli annullati vengono saltati, e osservazioni, patologie pregresse, farmaci e allergie della scheda paziente arrivano come una prima visita di anamnesi. C'è anche un import dedicato delle anagrafiche esportate da Doctolib.\n\nL'import controlla i doppioni: un paziente già presente, riconosciuto dal codice fiscale oppure da nome, cognome e data di nascita, non viene creato una seconda volta, ma completato con i dati che gli mancano, senza riscrivere i campi già compilati. L'unica eccezione è l'import da Doctolib, che corregge il codice fiscale quando gli altri dati confermano che si tratta della stessa persona. Le visite già importate non vengono duplicate, quindi un secondo import con l'export aggiornato al giorno del passaggio aggiunge solo quello che è cambiato. Prima di un import conviene comunque fare un backup manuale dalle impostazioni.\n\nPer gli archivi che non arrivano in questo tracciato, da Word, da Excel organizzati a modo proprio o da altri gestionali, la migrazione dei dati storici è un servizio su preventivo, calcolato in base al formato e alla dimensione dell'archivio: si [chiede dal modulo contatti](/contatti?richiesta=migrazione) indicando da quale software o da quali file si parte. Il software costa [30€ al mese tutto incluso](/prezzi) e si può provare per 30 giorni senza carta di credito, anche con l'archivio importato.",
      },
    ],
    faq: [
      {
        question: "Il vecchio fornitore del gestionale è obbligato a restituirmi i dati?",
        answer:
          "Se il gestionale tiene i dati sui server del fornitore, sì: il fornitore è responsabile del trattamento e l'articolo 28 del GDPR impone che il contratto preveda, a scelta del medico titolare, la restituzione o la cancellazione di tutti i dati personali alla fine del servizio. Se il gestionale è installato nello studio, i dati sono già sul tuo computer e si tratta solo di esportarli.",
      },
      {
        question: "In che formato conviene chiedere l'esportazione?",
        answer:
          "In un formato aperto: CSV o Excel per anagrafiche e appuntamenti, CSV, XML o copia del database per le visite, PDF per referti e documenti, sempre con la descrizione dei campi. Un backup che si apre solo con il vecchio programma non basta.",
      },
      {
        question: "Posso usare la portabilità dell'articolo 20 del GDPR per riavere l'archivio?",
        answer:
          "No. La portabilità è un diritto del paziente sui dati che lo riguardano e che ha fornito. Per riavere l'archivio dello studio dal fornitore contano il contratto e l'articolo 28 del GDPR, che regola la restituzione dei dati alla fine del servizio.",
      },
      {
        question: "Quali dati si perdono più spesso in una migrazione?",
        answer:
          "Anagrafiche e appuntamenti di solito passano bene. I problemi si concentrano su testi liberi tagliati, campi clinici strutturati che il nuovo software organizza in un altro modo, immagini e allegati non collegati al paziente, e modelli di testo che spesso vanno ricreati a mano.",
      },
      {
        question: "Quanto costa migrare i dati in Corioli?",
        answer:
          "Corioli importa da sé anagrafiche e appuntamenti da CSV con il suo tracciato e le anagrafiche esportate da Doctolib. Per gli altri archivi la migrazione è un servizio su preventivo, calcolato su formato e dimensione, che si chiede dal modulo contatti. Il software costa 30€ al mese tutto incluso, con 30 giorni di prova gratuita.",
      },
    ],
    sources: [
      {
        title:
          "Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio, del 27 aprile 2016 (GDPR), articoli 20, 28, 30 e 32.",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
      {
        title:
          "Comitato europeo per la protezione dei dati (EDPB). Linee guida 07/2020 sui concetti di titolare del trattamento e di responsabile del trattamento ai sensi del GDPR, versione definitiva del 7 luglio 2021.",
        url: "https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_it",
      },
    ],
  },
  {
    slug: "ipotensione-ortostatica-come-misurarla-criteri",
    title: "Ipotensione ortostatica: come si misura e quando si fa diagnosi",
    description:
      "Calo di 20/10 mmHg entro 3 minuti: come misurare la pressione in clino e ortostatismo, cosa chiedono le linee guida europee e cosa scrivere nel referto.",
    excerpt:
      "La definizione è una sola, ma il modo in cui si misura cambia il risultato. Criteri, protocollo a 1 e 3 minuti, ipertensione supina, forma neurogena e cosa riportare nel referto perché il dato resti confrontabile.",
    date: "21 Ottobre 2026",
    isoDate: "2026-10-21",
    category: "Cardiologia",
    lead: "Si parla di ipotensione ortostatica quando, passando dalla posizione supina a quella eretta, la pressione sistolica scende di almeno 20 mmHg o la diastolica di almeno 10 mmHg entro 3 minuti. La definizione è semplice; la misura lo è meno, perché il momento in cui si legge lo sfigmomanometro, la posizione di partenza e la pressione di base cambiano il risultato. Qui trovi i criteri, il protocollo indicato dalle linee guida europee sull'ipertensione, i casi particolari e cosa scrivere nel referto.",
    keyPoints: [
      "L'ipotensione ortostatica classica è un calo sostenuto della pressione sistolica di almeno 20 mmHg o della diastolica di almeno 10 mmHg entro 3 minuti dal passaggio in piedi, o dall'inclinazione su lettino basculante di almeno 60 gradi, secondo il consensus statement del 2011.",
      "Le linee guida europee sull'ipertensione indicano di misurare la pressione dopo alcuni minuti di riposo da sdraiati o seduti e poi in piedi, a 1 e a 3 minuti; l'ESC 2024 chiede di cercarla alla prima diagnosi di pressione elevata o di ipertensione e quando compaiono sintomi.",
      "Nel paziente con ipertensione supina un calo sistolico di 30 mmHg può essere un criterio più adatto, perché a pressioni di partenza alte 20 mmHg sono una quota piccola.",
      "La misura entro il primo minuto conta: nello studio ARIC, su 11.429 adulti di mezza età, l'ipotensione rilevata a circa 30 secondi dall'alzata era la più associata a capogiri, cadute, sincope e mortalità.",
      "Un rapporto fra aumento della frequenza e calo della sistolica inferiore a 0,5 battiti per mmHg orienta verso una forma neurogena: nel referto vanno quindi anche le frequenze, non solo le pressioni.",
    ],
    sections: [
      {
        title: "La definizione e le sue varianti",
        body: "Il riferimento è il consensus statement pubblicato nel 2011 da un gruppo di esperti di neurologia autonomica: l'ipotensione ortostatica è un calo sostenuto della pressione sistolica di almeno 20 mmHg o della diastolica di almeno 10 mmHg entro 3 minuti dall'assunzione della posizione eretta, o dall'inclinazione su lettino basculante di almeno 60 gradi. Basta uno dei due criteri. È la forma classica, quella che si cerca in ambulatorio.\n\nLo stesso documento propone un aggiustamento per chi ha l'ipertensione supina: in questi pazienti un calo sistolico di 30 mmHg può essere un criterio più appropriato. Il motivo è aritmetico. Venti millimetri sono molti su una sistolica di 120 e pochi su una di 190, e con la soglia standard il paziente iperteso risulterebbe positivo anche per variazioni che non hanno un significato emodinamico.\n\nAccanto alla forma classica ci sono due varianti. L'ipotensione ortostatica iniziale è un calo transitorio nei primi secondi dopo l'alzata, che si recupera da solo e che lo sfigmomanometro tradizionale fatica a cogliere. Quella ritardata soddisfa gli stessi criteri ma compare dopo i 3 minuti, e spesso si vede solo al tilt test.\n\nDa tutte queste va distinta la sindrome da tachicardia posturale, la POTS, dove la pressione tiene e a salire è la frequenza: almeno 30 battiti in più entro 10 minuti in piedi, almeno 40 fra i 12 e i 19 anni, senza ipotensione ortostatica.",
        table: {
          caption: "Le forme di ipotensione ortostatica e la POTS",
          columns: ["Forma", "Criterio", "Quando si vede"],
          rows: [
            ["Classica", "Calo sostenuto di almeno 20 mmHg di sistolica o 10 mmHg di diastolica", "Entro 3 minuti in piedi o al tilt di almeno 60 gradi"],
            ["Con ipertensione supina", "Calo sistolico di almeno 30 mmHg, criterio più adatto della soglia standard", "Entro 3 minuti in piedi"],
            ["Ritardata", "Stessi valori della forma classica", "Dopo i 3 minuti, spesso solo al tilt test"],
            ["Iniziale", "Calo transitorio che si recupera spontaneamente", "Nei primi secondi dopo l'alzata"],
            ["POTS, da distinguere", "Aumento della frequenza di almeno 30 bpm, 40 fra 12 e 19 anni, senza ipotensione ortostatica", "Entro 10 minuti in piedi o al tilt"],
          ],
          note: "Definizioni del consensus statement del 2011 (Freeman et al., Clinical Autonomic Research). La forma iniziale e quella ritardata richiedono di solito una registrazione continua della pressione o il tilt test.",
        },
      },
      {
        title: "Come si misura in ambulatorio",
        body: "La misura parte da una pressione di base attendibile. Le linee guida ESC 2024 sull'ipertensione indicano di far riposare il paziente da sdraiato o da seduto per 5 minuti prima della misura di riferimento, e di misurare di nuovo dopo l'alzata, a 1 e a 3 minuti. Le linee guida ESH del 2023 indicano le stesse due misure in piedi, a 1 e a 3 minuti.\n\nPartire da sdraiati rende il passaggio di posizione più marcato e quindi il test più sensibile; partire da seduti è più pratico ed è accettato come primo screening. Quello che non va fatto è mescolare: se la misura di base è da seduti e quella in piedi viene confrontata con una supina di un'altra visita, il calo calcolato non vuol dire niente.\n\nIn piedi il paziente sta fermo, senza appoggiarsi e senza contrarre i muscoli delle gambe, con il braccio sostenuto all'altezza del cuore: un braccio che pende lungo il fianco sovrastima la pressione. A ogni misura si annotano anche la frequenza e gli eventuali sintomi, capogiro, offuscamento della vista, sensazione di svenimento, perché un calo accompagnato dai sintomi del paziente pesa più di un numero isolato.\n\nSe il sospetto è forte e il test in ambulatorio è negativo, vale la pena ripeterlo in un'altra occasione, al mattino o dopo il pasto, quando il calo è più frequente, oppure rinviare al tilt test.",
      },
      {
        title: "Perché il primo minuto conta",
        body: "La finestra di 3 minuti nasce dalle definizioni degli anni Novanta, ma nella pratica molti calibrano la misura proprio sul terzo minuto e saltano la prima. I dati dello studio ARIC suggeriscono che è un errore.\n\nNell'analisi pubblicata nel 2017 su JAMA Internal Medicine, 11.429 adulti fra i 44 e i 66 anni avevano misurato la pressione da sdraiati e poi in piedi fino a cinque volte, a intervalli di circa 25 secondi. L'ipotensione rilevata alla prima misura, a una media di 28 secondi dall'alzata, era l'unica associata a una storia di capogiri in piedi, e nei circa 23 anni di follow-up era associata a un rischio più alto di cadute, fratture, sincope e morte. Le misure dopo il primo minuto non erano associate ai capogiri e lo erano in modo incostante agli altri esiti.\n\nGli autori concludono che l'ipotensione ortostatica andrebbe cercata entro il primo minuto. Le linee guida europee hanno scelto di tenere entrambe le misure, a 1 e a 3 minuti, che è la sintesi più ragionevole: la prima coglie il calo precoce, quello più legato ai sintomi, la seconda il calo lento e sostenuto che la definizione classica richiede.",
      },
      {
        title: "Chi controllare",
        body: "Le linee guida ESH del 2023 indicano la misura ortostatica come screening nelle persone sopra i 65 anni, nei pazienti con ipertensione in trattamento, diabete o malattie neurodegenerative, e in chiunque riferisca sintomi in piedi. Le linee guida ESC 2024 raccomandano di cercare l'ipotensione ortostatica alla prima diagnosi di pressione elevata o di ipertensione, e di nuovo quando compaiono sintomi che la fanno sospettare; secondo lo stesso documento riguarda circa un adulto iperteso su dieci.\n\nIn ambulatorio cardiologico la domanda si pone soprattutto prima di iniziare o di aumentare una terapia antipertensiva, dopo l'introduzione di farmaci che abbassano la pressione o il volume, come diuretici, alfa-bloccanti e nitrati, e nel paziente anziano che riferisce cadute. Un calo ortostatico cambia la scelta dei farmaci e il valore a cui conviene fermarsi con la terapia.",
      },
      {
        title: "Neurogena o no: il ruolo della frequenza",
        body: "Quando la pressione scende, la risposta normale è un aumento della frequenza. Nelle forme non neurogene, da disidratazione, anemia o farmaci, la tachicardia compensatoria c'è; nelle forme neurogene, dove il sistema nervoso autonomo non riesce ad attivarsi, è scarsa o assente.\n\nLo studio del consorzio autonomico statunitense pubblicato nel 2018 su Annals of Neurology ha tradotto questa osservazione in un numero. Su 402 pazienti con ipotensione ortostatica e ritmo sinusale, un rapporto fra l'aumento della frequenza e il calo della pressione sistolica inferiore a 0,5 battiti al minuto per mmHg identificava la forma neurogena. Con un calo sistolico di 30 mmHg, per esempio, una frequenza che sale di meno di 15 battiti è un segnale da approfondire.\n\nIl rapporto perde significato quando la frequenza non è libera di salire, per esempio con un pacemaker o con farmaci che la rallentano. Anche per questo, nel referto la frequenza in piedi va scritta accanto alla pressione in piedi.",
      },
      {
        title: "Cosa scrivere nel referto",
        body: "Un \"ipotensione ortostatica assente\" senza numeri non dice al collega che legge come è stata cercata. Nel referto conviene riportare la posizione di partenza e la pressione di base, le pressioni in piedi con il minuto a cui sono state misurate, la frequenza a ogni misura, gli eventuali sintomi e la terapia in corso. Con questi elementi il risultato è confrontabile con quello del controllo successivo, anche se lo esegue un altro medico.\n\nIn [Corioli Cardiologia](/cardiologia) la pressione arteriosa ha una fascia sua nel referto, prima dell'elettrocardiogramma, e ogni misurazione porta la posizione in cui è stata presa: clinostatismo o ortostatismo. Alla prima misurazione se ne aggiunge una seconda, di solito in ortostatismo, e il referto le stampa in tabella una sotto l'altra. Il calo non lo calcola il software e non c'è un campo per il minuto della misura: quello, insieme alla frequenza in piedi e ai sintomi, va scritto nel testo della visita.",
      },
    ],
    faq: [
      {
        question: "Quali valori definiscono l'ipotensione ortostatica?",
        answer:
          "Un calo sostenuto della pressione sistolica di almeno 20 mmHg o della diastolica di almeno 10 mmHg entro 3 minuti dal passaggio in piedi, o dall'inclinazione su lettino basculante di almeno 60 gradi. Nel paziente con ipertensione supina il consensus statement del 2011 suggerisce come criterio più adatto un calo sistolico di 30 mmHg.",
      },
      {
        question: "Quanto deve riposare il paziente prima della misura?",
        answer:
          "Le linee guida ESC 2024 sull'ipertensione indicano 5 minuti da sdraiati o da seduti prima della misura di riferimento. Poi il paziente si alza e la pressione si misura di nuovo a 1 e a 3 minuti, annotando ogni volta anche la frequenza.",
      },
      {
        question: "Basta misurare la pressione a 3 minuti?",
        answer:
          "No. Nello studio ARIC, su più di 11.000 adulti, l'ipotensione rilevata entro il primo minuto in piedi era la più associata a capogiri, cadute, sincope e mortalità. Le linee guida europee indicano due misure, a 1 e a 3 minuti: la prima coglie il calo precoce, la seconda quello sostenuto.",
      },
      {
        question: "Che differenza c'è fra ipotensione ortostatica e POTS?",
        answer:
          "Nell'ipotensione ortostatica in piedi scende la pressione. Nella sindrome da tachicardia posturale la pressione tiene e sale la frequenza: almeno 30 battiti in più entro 10 minuti, almeno 40 fra i 12 e i 19 anni, senza ipotensione ortostatica.",
      },
      {
        question: "Come si capisce se l'ipotensione ortostatica è neurogena?",
        answer:
          "Dalla risposta della frequenza. Un rapporto fra aumento della frequenza e calo della pressione sistolica inferiore a 0,5 battiti al minuto per mmHg orienta verso una forma neurogena, secondo uno studio su 402 pazienti pubblicato nel 2018 su Annals of Neurology. Il rapporto non è interpretabile con un pacemaker o con farmaci che rallentano la frequenza.",
      },
    ],
    sources: [
      {
        title:
          "Freeman R, Wieling W, Axelrod FB, et al. Consensus statement on the definition of orthostatic hypotension, neurally mediated syncope and the postural tachycardia syndrome. Clin Auton Res. 2011;21(2):69-72.",
        url: "https://doi.org/10.1007/s10286-011-0119-5",
      },
      {
        title:
          "McEvoy JW, McCarthy CP, Bruno RM, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J. 2024;45(38):3912-4018.",
        url: "https://doi.org/10.1093/eurheartj/ehae178",
      },
      {
        title:
          "Mancia G, Kreutz R, Brunström M, et al. 2023 ESH Guidelines for the management of arterial hypertension. J Hypertens. 2023;41(12):1874-2071.",
        url: "https://doi.org/10.1097/HJH.0000000000003480",
      },
      {
        title:
          "Juraschek SP, Daya N, Rawlings AM, et al. Association of History of Dizziness and Long-term Adverse Outcomes With Early vs Later Orthostatic Hypotension Assessment Times in Middle-aged Adults. JAMA Intern Med. 2017;177(9):1316-1323.",
        url: "https://doi.org/10.1001/jamainternmed.2017.2937",
      },
      {
        title:
          "Norcliffe-Kaufmann L, Kaufmann H, Palma JA, et al. Orthostatic heart rate changes in patients with autonomic failure caused by neurodegenerative synucleinopathies. Ann Neurol. 2018;83(3):522-531.",
        url: "https://doi.org/10.1002/ana.25170",
      },
    ],
  },
  {
    slug: "stadi-di-tanner-ragazze-visita-ginecologica",
    title: "Stadi di Tanner nelle ragazze: come si valutano in visita",
    description:
      "Seno e peli pubici in cinque stadi secondo Marshall e Tanner: come si valutano, età di riferimento, pubertà precoce o ritardata e cosa scrivere nel referto.",
    excerpt:
      "La scala con cui da più di cinquant'anni si descrive la pubertà femminile: i cinque stadi del seno e dei peli pubici, come si riconosce il tessuto ghiandolare, le età di riferimento e i segnali che chiedono un approfondimento.",
    date: "21 Ottobre 2026",
    isoDate: "2026-10-21",
    category: "Ginecologia",
    lead: "Gli stadi di Tanner descrivono lo sviluppo puberale in cinque fasi, separatamente per il seno e per i peli pubici: lo stadio 1 è prepuberale, il 5 è adulto. Nella visita ginecologica pediatrica sono il modo più rapido per dire a che punto è la pubertà di una ragazza e se il suo ritmo è nella norma. Qui trovi i cinque stadi, come si valuta il seno senza farsi ingannare dal tessuto adiposo, le età di riferimento e i limiti oltre i quali la pubertà si considera precoce o ritardata.",
    keyPoints: [
      "La scala di Marshall e Tanner, pubblicata nel 1969, divide in cinque stadi lo sviluppo del seno, da B1 a B5, e quello dei peli pubici, da PH1 a PH5: i due caratteri si valutano e si annotano separatamente.",
      "L'inizio della pubertà femminile è lo stadio B2, la comparsa di tessuto ghiandolare sotto l'areola: va cercato con la palpazione, perché a vista il tessuto adiposo può simulare un seno in sviluppo.",
      "L'età di comparsa del B2 si è abbassata: nel Copenhagen Puberty Study l'età media è passata da 10,88 anni nelle ragazze studiate nel 1991-1993 a 9,86 anni in quelle studiate nel 2006-2008, mentre il menarca è sceso meno, da 13,42 a 13,13 anni.",
      "Si parla di pubertà precoce quando lo sviluppo del seno compare prima degli 8 anni e di pubertà ritardata quando a 13 anni non c'è alcuno sviluppo del seno.",
      "Il menarca arriva in media circa due anni e mezzo dopo l'inizio dello sviluppo del seno.",
    ],
    sections: [
      {
        title: "Una scala, due caratteri",
        body: "La scala nasce dal lavoro di William Marshall e James Tanner, che nel 1969 descrissero sugli Archives of Disease in Childhood le variazioni della pubertà in un gruppo di ragazze inglesi seguite nel tempo. Da allora è il linguaggio comune con cui pediatri, ginecologi ed endocrinologi descrivono lo sviluppo puberale, tanto che nei referti si scrive semplicemente \"Tanner 3\".\n\nLa semplificazione nasconde però un dettaglio importante: gli stadi sono due serie distinte, una per il seno e una per i peli pubici, e non procedono sempre insieme. Lo sviluppo del seno dipende dagli estrogeni prodotti dall'ovaio, quello dei peli pubici soprattutto dagli androgeni delle ghiandole surrenali. Una ragazza può essere B3 e PH2, o il contrario, e la combinazione dice qualcosa: quando i peli compaiono prima del seno il segnale viene dal surrene, non dall'ovaio.\n\nPer questo una valutazione completa riporta sempre entrambi, nella forma B3 PH2, invece di un numero solo.",
        table: {
          caption: "Stadi di Tanner nelle ragazze: seno e peli pubici",
          columns: ["Stadio", "Seno (B)", "Peli pubici (PH)"],
          rows: [
            ["1", "Prepuberale: è sollevata solo la papilla", "Assenti: solo la peluria fine, come sull'addome"],
            ["2", "Bottone mammario: piccolo rilievo di seno e papilla, areola che si allarga", "Pochi peli lunghi, appena pigmentati, lisci o lievemente arricciati, soprattutto lungo le grandi labbra"],
            ["3", "Seno e areola più ampi e sollevati, senza separazione fra i loro contorni", "Peli più scuri, più spessi e più arricciati, che si estendono sul pube"],
            ["4", "Areola e papilla formano un secondo rilievo sopra il profilo del seno", "Peli di tipo adulto, ma su un'area più piccola e senza estensione alle cosce"],
            ["5", "Seno adulto: l'areola torna nel profilo del seno e sporge solo la papilla", "Tipo e quantità adulti, a triangolo, con estensione alla faccia interna delle cosce"],
          ],
          note: "Descrizioni dalla classificazione di Marshall e Tanner (Archives of Disease in Childhood, 1969). Seno e peli pubici si valutano e si annotano separatamente.",
        },
      },
      {
        title: "Come si valuta il seno: guardare non basta",
        body: "Lo stadio B2 è il segno che la pubertà è cominciata, e proprio lì sta l'errore più frequente. A vista, un accumulo di tessuto adiposo nella regione mammaria, comune nelle bambine in sovrappeso, può sembrare un seno in sviluppo. La differenza la fa la palpazione: il tessuto ghiandolare si sente come un piccolo disco più consistente sotto l'areola, il tessuto adiposo è morbido e senza un nucleo.\n\nEsaminare la ragazza da supina aiuta, perché in quella posizione il tessuto adiposo si appiattisce e il bottone ghiandolare risalta. Il Copenhagen Puberty Study, i cui dati sono fra i riferimenti europei più recenti, ha valutato tutte le ragazze con la palpazione proprio per evitare questo errore.\n\nI peli pubici si valutano invece con l'ispezione. Conviene annotare anche se lo sviluppo del seno è simmetrico: un'asimmetria nelle prime fasi è frequente e di solito si riduce con il tempo, ma va scritta per poterla confrontare alla visita successiva.",
      },
      {
        title: "Le età di riferimento, e perché si sono abbassate",
        body: "Le età di comparsa degli stadi non sono fisse, e negli ultimi decenni si sono spostate in avanti. Il dato europeo più citato viene da Copenaghen, dove lo stesso gruppo di ricerca ha valutato con lo stesso metodo due coorti di ragazze a quindici anni di distanza: l'età media stimata al B2 era 10,88 anni nelle 1.100 ragazze studiate nel 1991-1993 e 9,86 anni nelle 995 studiate nel 2006-2008. La differenza restava significativa anche correggendo per l'indice di massa corporea.\n\nIl menarca si è spostato molto meno, da 13,42 a 13,13 anni, e questo significa che la pubertà nel suo insieme si è allungata: comincia prima, ma finisce più o meno alla stessa età.\n\nIn media il menarca arriva circa due anni e mezzo dopo l'inizio dello sviluppo del seno. È un riferimento utile in visita: davanti a una ragazza B2 da sei mesi il menarca è ancora lontano, davanti a una B4 è vicino.",
      },
      {
        title: "Quando la pubertà è precoce o ritardata",
        body: "Nelle bambine si parla di pubertà precoce quando lo sviluppo del seno compare prima degli 8 anni. È la soglia indicata dalle principali rassegne cliniche e quella che, nella pratica, giustifica l'invio all'endocrinologo pediatra per capire se la causa è centrale, cioè un'attivazione anticipata dell'asse ipotalamo-ipofisi-ovaio, o periferica.\n\nAl capo opposto, la pubertà si considera ritardata quando a 13 anni non c'è alcuno sviluppo del seno. Anche qui l'età è solo il primo filtro: spesso si tratta di un ritardo costituzionale, con una storia familiare simile, ma prima di concluderlo vanno escluse le cause organiche.\n\nOltre all'età di inizio conta il ritmo. Il passaggio da uno stadio all'altro richiede di solito mesi, e una progressione molto rapida, o un arresto prolungato in uno stadio intermedio, sono segnali da approfondire anche quando l'età di partenza era nella norma. Per vederli servono più visite con lo stadio annotato ogni volta, insieme all'altezza.",
      },
      {
        title: "Cosa scrivere nel referto",
        body: "Uno stadio di Tanner ha valore soprattutto nel confronto con la visita precedente. Nel referto conviene annotare lo stadio del seno e quello dei peli pubici separatamente, il metodo con cui il seno è stato valutato, l'eventuale asimmetria, l'età del menarca se c'è già stato, e altezza e peso con i loro percentili. Un \"sviluppo puberale nella norma\" senza stadio non permette di dire, sei mesi dopo, se qualcosa è cambiato.\n\nNella visita ginecologica pediatrica di [Corioli](/ginecologia) lo stadio di Tanner ha un campo suo, da I a V, accanto al menarca e alla vaccinazione HPV, e compare nel referto PDF. Il campo è uno solo: quando seno e peli pubici sono in stadi diversi conviene indicare lo stadio del seno, che segna l'inizio della pubertà, e annotare quello dei peli pubici nel testo della visita.",
      },
    ],
    faq: [
      {
        question: "Cosa sono gli stadi di Tanner?",
        answer:
          "Sono una scala in cinque stadi che descrive lo sviluppo puberale, pubblicata da Marshall e Tanner nel 1969. Nelle ragazze si valutano separatamente il seno, da B1 a B5, e i peli pubici, da PH1 a PH5: lo stadio 1 è prepuberale, il 5 corrisponde allo sviluppo adulto.",
      },
      {
        question: "A che età compare lo stadio B2?",
        answer:
          "Varia da ragazza a ragazza e si è abbassata nel tempo. Nel Copenhagen Puberty Study l'età media stimata era 9,86 anni nelle ragazze valutate nel 2006-2008, contro 10,88 anni in quelle valutate nel 1991-1993. Uno sviluppo del seno prima degli 8 anni si considera precoce.",
      },
      {
        question: "Quando la pubertà si considera precoce o ritardata nelle bambine?",
        answer:
          "È precoce quando lo sviluppo del seno compare prima degli 8 anni, ritardata quando a 13 anni non c'è alcuno sviluppo del seno. In entrambi i casi conta anche il ritmo con cui si passa da uno stadio all'altro, che si vede solo confrontando visite successive.",
      },
      {
        question: "Quanto tempo passa fra l'inizio dello sviluppo del seno e il menarca?",
        answer:
          "In media circa due anni e mezzo. Nel Copenhagen Puberty Study l'età media al menarca era 13,13 anni nelle ragazze valutate nel 2006-2008.",
      },
      {
        question: "Seno e peli pubici possono essere in stadi diversi?",
        answer:
          "Sì, ed è frequente. Il seno risponde agli estrogeni ovarici, i peli pubici soprattutto agli androgeni surrenalici, quindi i due caratteri possono procedere con tempi diversi. Per questo vanno annotati separatamente, per esempio B3 PH2.",
      },
    ],
    sources: [
      {
        title:
          "Marshall WA, Tanner JM. Variations in pattern of pubertal changes in girls. Arch Dis Child. 1969;44(235):291-303.",
        url: "https://doi.org/10.1136/adc.44.235.291",
      },
      {
        title:
          "Aksglaede L, Sørensen K, Petersen JH, Skakkebæk NE, Juul A. Recent decline in age at breast development: the Copenhagen Puberty Study. Pediatrics. 2009;123(5):e932-e939.",
        url: "https://doi.org/10.1542/peds.2008-2491",
      },
      {
        title:
          "Carel JC, Léger J. Precocious puberty. N Engl J Med. 2008;358(22):2366-2377.",
        url: "https://doi.org/10.1056/NEJMcp0800459",
      },
      {
        title:
          "Klein DA, Emerick JE, Sylvester JE, Vogt KS. Disorders of puberty: an approach to diagnosis and management. Am Fam Physician. 2017;96(9):590-599.",
        url: "https://www.aafp.org/afp/2017/1101/p590",
      },
    ],
  },
  {
    slug: "gdpr-medico-libero-professionista-adempimenti",
    title: "GDPR per il medico libero professionista: cosa serve davvero",
    description:
      "Consenso, informativa, registro dei trattamenti, DPO e valutazione d'impatto: gli obblighi privacy del medico che lavora da solo, secondo GDPR e Garante.",
    excerpt:
      "Il medico non deve chiedere il consenso per curare, non deve nominare un DPO e di regola non deve fare la valutazione d'impatto, ma deve dare l'informativa e tenere il registro dei trattamenti. Cosa serve, cosa no e da quale norma viene.",
    date: "21 Ottobre 2026",
    isoDate: "2026-10-21",
    category: "Normativa",
    lead: "Il medico che lavora da solo con la partita IVA è titolare del trattamento dei dati dei suoi pazienti, e alcuni obblighi del GDPR lo riguardano in pieno mentre altri no. Non deve chiedere il consenso per i trattamenti necessari alla cura, non deve nominare un responsabile della protezione dei dati e di regola non deve fare una valutazione d'impatto. Deve invece dare l'informativa, tenere il registro delle attività di trattamento, proteggere i dati e notificare le violazioni. Qui trovi ogni adempimento con la norma da cui viene.",
    keyPoints: [
      "Per i trattamenti necessari alla cura il medico non deve chiedere il consenso del paziente: la base giuridica è l'articolo 9, paragrafo 2, lettera h, del GDPR, insieme al segreto professionale, come ha chiarito il Garante nel provvedimento n. 55 del 7 marzo 2019.",
      "Il consenso serve invece per i trattamenti che non sono necessari alla cura, come le comunicazioni promozionali.",
      "Il registro delle attività di trattamento è obbligatorio anche per il singolo libero professionista, perché l'esenzione per chi ha meno di 250 dipendenti non vale quando si trattano dati sanitari; non va inviato al Garante, ma esibito in caso di controllo.",
      "Il medico che esercita da solo non deve nominare un DPO e, secondo il considerando 91 del GDPR, non è obbligato alla valutazione d'impatto: i dati dei pazienti di un singolo medico non sono un trattamento su larga scala.",
      "Una violazione dei dati va notificata al Garante entro 72 ore da quando se ne è venuti a conoscenza, salvo che sia improbabile che presenti un rischio per le persone.",
    ],
    sections: [
      {
        title: "Il punto di partenza: sei tu il titolare",
        body: "Il GDPR chiama titolare del trattamento chi decide perché e come si trattano i dati personali. Nello studio del libero professionista il titolare è il medico: decide quali dati raccogliere, con quali strumenti, per quanto conservarli e a chi comunicarli, e ne risponde anche quando una parte del lavoro la fanno altri.\n\nI dati sanitari sono dati particolari, nell'articolo 9 del regolamento, e il loro trattamento è vietato salvo le eccezioni che lo stesso articolo elenca. Per il medico l'eccezione che conta è quella della lettera h del paragrafo 2: il trattamento è lecito quando serve a finalità di medicina preventiva, diagnosi, assistenza o terapia ed è svolto da un professionista soggetto al segreto professionale.\n\nDa qui discendono quasi tutti gli adempimenti dello studio. La tabella li riassume, con la norma da cui vengono.",
        table: {
          caption: "Gli adempimenti GDPR per il medico libero professionista",
          columns: ["Adempimento", "Serve al medico che lavora da solo?", "Riferimento"],
          rows: [
            ["Consenso per i trattamenti di cura", "No", "GDPR art. 9, par. 2, lett. h e par. 3; Garante, provv. 55/2019"],
            ["Consenso per trattamenti non necessari alla cura, come le comunicazioni promozionali", "Sì", "GDPR art. 6, par. 1, lett. a"],
            ["Informativa ai pazienti", "Sì, al momento della raccolta dei dati", "GDPR art. 13"],
            ["Registro delle attività di trattamento", "Sì, da esibire al Garante su richiesta", "GDPR art. 30; Garante, provv. 55/2019"],
            ["Responsabile della protezione dei dati (DPO)", "No", "GDPR art. 37; Garante, provv. 55/2019"],
            ["Valutazione d'impatto (DPIA)", "Di regola no", "GDPR art. 35 e considerando 91"],
            ["Accordo con chi tratta i dati per conto dello studio", "Sì, con ogni responsabile del trattamento", "GDPR art. 28"],
            ["Notifica delle violazioni al Garante", "Sì, entro 72 ore, salvo rischio improbabile", "GDPR art. 33"],
          ],
          note: "Regole in vigore a ottobre 2026 per il medico che esercita in forma individuale. Case di cura, ospedali privati e strutture che trattano dati su larga scala hanno obblighi più ampi, a partire dal DPO.",
        },
      },
      {
        title: "Il consenso: quando non serve e quando sì",
        body: "Con il provvedimento n. 55 del 7 marzo 2019 il Garante ha chiarito il punto che più confondeva gli studi: il professionista sanitario soggetto al segreto professionale non deve chiedere il consenso del paziente per i trattamenti necessari alla prestazione richiesta, sia che lavori nel proprio studio sia che lavori in una struttura. Il modulo \"consenso al trattamento dei dati\" che molti studi fanno ancora firmare a ogni nuovo paziente, per la cura, non è necessario.\n\nServe invece un'altra base giuridica, di solito il consenso, per i trattamenti che con la cura hanno a che fare solo indirettamente. Il Garante cita come esempi i programmi di fidelizzazione, le app mediche gestite da altri titolari e le finalità promozionali o commerciali. Per lo studio significa, in concreto, la newsletter o le comunicazioni promozionali ai pazienti.\n\nNon va confuso con il consenso informato all'atto sanitario, disciplinato dalla legge 219/2017: quello riguarda la scelta del paziente di sottoporsi alla prestazione, non i suoi dati, ed è sempre necessario.",
      },
      {
        title: "L'informativa: cosa deve contenere",
        body: "Il consenso per la cura non serve, l'informativa sì. L'articolo 13 del GDPR la richiede al momento in cui i dati vengono raccolti, cioè di norma alla prima visita, e ne fissa il contenuto: l'identità e i contatti del titolare, le finalità e la base giuridica di ciascun trattamento, i destinatari a cui i dati possono essere comunicati, il periodo di conservazione o i criteri per stabilirlo, i diritti del paziente e il diritto di proporre reclamo al Garante.\n\nIl Garante chiede che sia concisa, trasparente, comprensibile e scritta in un linguaggio semplice. Per lo studio del singolo medico basta un documento solo, che descriva i trattamenti reali: le visite e la cartella clinica, la fatturazione e l'invio al Sistema Tessera Sanitaria, gli appuntamenti, e le eventuali comunicazioni facoltative.\n\nUn'informativa scritta per un ospedale e copiata nello studio è il difetto più comune: elenca trattamenti che non esistono e tace su quelli che ci sono, per esempio il commercialista che riceve le fatture o il servizio esterno a cui si appoggia l'agenda.",
      },
      {
        title: "Il registro delle attività di trattamento",
        body: "L'articolo 30 del GDPR esonera dal registro le organizzazioni con meno di 250 dipendenti, ma le esenzioni non valgono quando il trattamento riguarda dati particolari o non è occasionale. Il Garante, nel provvedimento del 2019, ne ha tratto la conseguenza per la sanità: il registro è obbligatorio anche per il singolo libero professionista. Non va inviato al Garante: va tenuto aggiornato ed esibito in caso di controllo.\n\nIl registro elenca i trattamenti dello studio e, per ciascuno, le finalità, le categorie di pazienti e di dati, i destinatari, i termini di conservazione quando è possibile indicarli e una descrizione generale delle misure di sicurezza. Per uno studio specialistico le righe sono poche, e la tabella qui sotto ne dà un esempio.\n\nIl valore del registro non è burocratico. Costringe a fare l'inventario di dove stanno davvero i dati: la cartella nel gestionale, gli esami in una cartella del computer, le fatture dal commercialista, le immagini dell'ecografo, le foto mandate dal paziente sul telefono. Spesso è compilandolo che lo studio scopre un archivio di cui nessuno si occupava.",
        table: {
          caption: "Esempio di righe del registro per uno studio specialistico",
          columns: ["Trattamento", "Dati trattati", "Base giuridica"],
          rows: [
            ["Visite, cartella clinica e referti", "Anagrafica, dati sanitari, immagini ed esami", "Finalità di cura: GDPR art. 9, par. 2, lett. h"],
            ["Fatturazione e invio al Sistema Tessera Sanitaria", "Anagrafica, codice fiscale, importi", "Obbligo di legge: GDPR art. 6, par. 1, lett. c"],
            ["Appuntamenti e promemoria", "Nome, telefono, email", "Prestazione richiesta dal paziente: GDPR art. 6, par. 1, lett. b"],
            ["Comunicazioni promozionali facoltative", "Nome, email", "Consenso: GDPR art. 6, par. 1, lett. a"],
          ],
          note: "Esempio indicativo: le righe vanno adattate ai trattamenti reali dello studio, con i destinatari, i tempi di conservazione e le misure di sicurezza di ciascuno.",
        },
      },
      {
        title: "DPO e valutazione d'impatto: perché di regola non servono",
        body: "Il responsabile della protezione dei dati, il DPO, è obbligatorio quando le attività principali del titolare consistono nel trattamento su larga scala di dati particolari. Il Garante ha chiarito che il singolo professionista sanitario che lavora in libera professione non vi è tenuto, perché i dati dei suoi pazienti non costituiscono un trattamento su larga scala. Il DPO serve invece alle aziende sanitarie e, in generale, a ospedali privati, case di cura e residenze sanitarie.\n\nLo stesso ragionamento vale per la valutazione d'impatto prevista dall'articolo 35. Il considerando 91 del GDPR lo dice in modo esplicito: il trattamento dei dati dei pazienti da parte di un singolo medico non dovrebbe essere considerato su larga scala, e in quel caso la valutazione d'impatto non dovrebbe essere obbligatoria.\n\nSe lo studio cresce, con più medici, più sedi o un poliambulatorio organizzato come società, la risposta può cambiare: è una verifica da rifare quando cambia la struttura, non una volta per sempre.",
      },
      {
        title: "Chi lavora con te: collaboratori e fornitori",
        body: "La segretaria o il collaboratore che accede ai dati dei pazienti agisce sotto l'autorità del titolare e va istruito su come trattarli, come prevede l'articolo 29 del GDPR. Il Codice privacy, all'articolo 2-quaterdecies, consente di attribuire per iscritto compiti e funzioni legati al trattamento a persone designate: è il modo più semplice per dimostrare chi può fare cosa.\n\nDiverso è il caso dei soggetti esterni che trattano i dati per conto dello studio, i responsabili del trattamento: il servizio di agenda online, il fornitore di un gestionale che conserva l'archivio sui propri server, a volte il commercialista. Con ciascuno serve un accordo scritto ai sensi dell'articolo 28, che stabilisca cosa possono fare con i dati e con quali garanzie.\n\nCon un gestionale che salva l'archivio sul computer dello studio, come [Corioli](/gdpr), il fornitore non tratta i dati dei pazienti e quindi non è un responsabile del trattamento: per l'uso standard del software non serve un accordo ai sensi dell'articolo 28.",
      },
      {
        title: "Sicurezza e violazioni dei dati",
        body: "L'articolo 32 chiede misure di sicurezza adeguate al rischio, senza un elenco chiuso. Per uno studio significa, in concreto, accessi protetti da password personali, computer aggiornati, dischi cifrati sui portatili, copie di sicurezza conservate fuori dal computer di lavoro e verificate con una prova di ripristino.\n\nSe qualcosa va storto, un portatile rubato, un ransomware, un referto inviato al paziente sbagliato, l'articolo 33 chiede di notificare la violazione al Garante entro 72 ore da quando se ne è venuti a conoscenza, salvo che sia improbabile che presenti un rischio per i pazienti. Se il rischio è elevato, l'articolo 34 chiede di informare anche le persone coinvolte. In ogni caso la violazione va documentata, anche quando non va notificata.\n\nCon l'archiviazione locale la sicurezza è nelle mani dello studio, ed è un vantaggio solo se viene gestita. Corioli salva l'archivio sul computer dello studio, si blocca con PIN, Windows Hello o Touch ID e fa copie automatiche sullo stesso disco; la copia su un supporto esterno e la cifratura del disco restano scelte dello studio, e vanno scritte nel registro tra le misure di sicurezza.",
      },
    ],
    faq: [
      {
        question: "Il medico deve far firmare il consenso privacy ai pazienti?",
        answer:
          "Non per i trattamenti necessari alla cura. Il Garante, nel provvedimento n. 55 del 7 marzo 2019, ha chiarito che il professionista sanitario soggetto al segreto professionale non deve chiedere il consenso per la prestazione richiesta: la base giuridica è l'articolo 9, paragrafo 2, lettera h, del GDPR. Il consenso serve per i trattamenti non necessari alla cura, come le comunicazioni promozionali.",
      },
      {
        question: "Il medico libero professionista deve tenere il registro dei trattamenti?",
        answer:
          "Sì. L'esenzione dell'articolo 30 del GDPR per chi ha meno di 250 dipendenti non vale quando si trattano dati sanitari, e il Garante ha confermato l'obbligo anche per il singolo professionista. Il registro non va inviato al Garante, ma tenuto aggiornato ed esibito in caso di controllo.",
      },
      {
        question: "Lo studio medico deve nominare un DPO?",
        answer:
          "Il medico che lavora da solo no: secondo il Garante i dati dei suoi pazienti non sono un trattamento su larga scala. Il DPO è obbligatorio per le aziende sanitarie e, in generale, per ospedali privati, case di cura e residenze sanitarie.",
      },
      {
        question: "Cosa deve contenere l'informativa privacy dello studio medico?",
        answer:
          "Secondo l'articolo 13 del GDPR: identità e contatti del titolare, finalità e base giuridica dei trattamenti, destinatari dei dati, periodo di conservazione o criteri per stabilirlo, diritti del paziente e diritto di reclamo al Garante. Va data al momento della raccolta dei dati, di solito alla prima visita, in un linguaggio semplice.",
      },
      {
        question: "Entro quando va notificata una violazione dei dati?",
        answer:
          "Entro 72 ore da quando il titolare ne è venuto a conoscenza, salvo che sia improbabile che presenti un rischio per le persone, come prevede l'articolo 33 del GDPR. Se il rischio è elevato vanno informati anche i pazienti coinvolti, e ogni violazione va comunque documentata.",
      },
      {
        question: "Serve un contratto con il fornitore del gestionale?",
        answer:
          "Serve quando il fornitore tratta i dati per conto dello studio, per esempio perché conserva l'archivio sui propri server: in quel caso è un responsabile del trattamento e va firmato un accordo ai sensi dell'articolo 28 del GDPR. Con un gestionale che salva i dati solo sul computer dello studio il fornitore non tratta i dati dei pazienti e l'accordo, per l'uso standard, non serve.",
      },
    ],
    sources: [
      {
        title:
          "Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio, del 27 aprile 2016 (GDPR): articoli 6, 9, 13, 28, 29, 30, 32-35 e 37, considerando 91.",
        url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0679",
      },
      {
        title:
          "Garante per la protezione dei dati personali, provvedimento n. 55 del 7 marzo 2019, Chiarimenti sull'applicazione della disciplina per il trattamento dei dati relativi alla salute in ambito sanitario (doc. web n. 9091942).",
        url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9091942",
      },
      {
        title:
          "Decreto legislativo 30 giugno 2003, n. 196, Codice in materia di protezione dei dati personali, come modificato dal decreto legislativo 10 agosto 2018, n. 101: articolo 2-quaterdecies.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196",
      },
    ],
  },
  {
    slug: "superammortamento-2026-medici-centri-medici",
    title: "Superammortamento 2026: vale per medici e centri medici?",
    description:
      "Nel 2026 il superammortamento torna come iperammortamento, ma solo per chi ha reddito d'impresa: cosa vale per lo studio individuale, le STP e i poliambulatori.",
    excerpt:
      "Il superammortamento del 2016 valeva anche per lo studio del libero professionista, l'iperammortamento del 2026 no. Chi può usarlo fra STP, poliambulatori e centri diagnostici, su quali beni, quanto vale e cosa resta al medico con la partita IVA.",
    date: "5 Ottobre 2026",
    isoDate: "2026-10-05",
    category: "Normativa",
    lead: "No, se lavori da solo con la partita IVA; sì, se il centro medico è una società. Nel 2026 il superammortamento è tornato con il nome di iperammortamento e con una maggiorazione fino al 180%, ma la legge di bilancio 2026 lo riserva a chi produce reddito d'impresa: poliambulatori, centri diagnostici e società tra professionisti possono usarlo, il medico libero professionista e lo studio associato no. È la differenza principale rispetto al superammortamento del 2016, che valeva anche per lo studio individuale e che molti ricordano ancora. Qui trovi chi ne ha diritto, su quali beni, quanto vale e che cosa resta al libero professionista.",
    keyPoints: [
      "Il medico che lavora con la propria partita IVA non può usare l'iperammortamento 2026, e nemmeno lo studio associato o chi è in regime forfettario: l'agevolazione spetta solo ai titolari di reddito d'impresa, come poliambulatori, centri medici in forma di società e società tra professionisti.",
      "L'iperammortamento ha preso il posto del superammortamento (legge 30 dicembre 2025, n. 199, articolo 1, commi 427-436): maggiora del 180% il costo dei beni strumentali nuovi 4.0 per la quota di investimento fino a 2,5 milioni di euro, ai fini delle quote di ammortamento e dei canoni di leasing, per investimenti dal 1° gennaio 2026 al 30 settembre 2028.",
      "I beni devono rientrare negli allegati IV e V della legge ed essere interconnessi: un'apparecchiatura medica non vi rientra per il solo fatto di essere nuova e digitale, e lo deve attestare una perizia tecnica asseverata, qualunque sia l'importo.",
      "Si accede con una procedura di comunicazioni al GSE; dal decreto-legge 38/2026 i beni non devono più essere prodotti nell'Unione europea, salvo i moduli fotovoltaici.",
      "Per una società soggetta a IRES al 24% la maggiorazione vale un risparmio pari al 43,2% del costo del bene, distribuito negli anni di ammortamento; un gestionale in abbonamento resta un costo dell'anno e non si maggiora.",
    ],
    sections: [
      {
        title: "Dal superammortamento all'iperammortamento: cosa è cambiato",
        body: "Il superammortamento è nato con la legge di stabilità 2016: per i beni strumentali nuovi il costo veniva maggiorato del 40%, ai soli fini del calcolo delle quote di ammortamento, e la norma nominava espressamente, accanto alle imprese, gli esercenti arti e professioni. Un ecografo da 40.000 euro si ammortizzava fiscalmente come se ne costasse 56.000. La misura è stata prorogata con percentuali via via più basse fino al 2019.\n\nDal 2020 la deduzione maggiorata è stata sostituita da un credito d'imposta per gli investimenti in beni strumentali. Per i beni ordinari i professionisti vi hanno avuto accesso fino al 2022; quello per i beni 4.0, interconnessi ai sistemi aziendali, è rimasto riservato alle imprese.\n\nLa legge di bilancio 2026, legge 30 dicembre 2025, n. 199, ha riportato la maggiorazione del costo con il nome di iperammortamento e con percentuali molto più alte: 180% sulla quota di investimento fino a 2,5 milioni di euro, 100% fra 2,5 e 10 milioni, 50% fra 10 e 20 milioni. La platea però è quella del vecchio credito 4.0, non quella del superammortamento: solo i titolari di reddito d'impresa. È il motivo per cui molte indicazioni che circolano fra colleghi, rimaste ferme al 2016, oggi non valgono più per lo studio individuale.",
      },
      {
        title: "Chi può usare l'iperammortamento in sanità",
        body: "L'iperammortamento spetta ai titolari di reddito d'impresa che investono in beni destinati a strutture produttive in Italia, a prescindere da settore, dimensione e forma giuridica. Nel mondo sanitario significa poliambulatori, centri diagnostici, case di cura e centri medici organizzati come società di capitali, srl o spa, o come società di persone commerciali, snc o sas. Rientrano anche le società tra professionisti: con la risoluzione 35/E del 2018, scritta per le società tra avvocati, l'Agenzia delle Entrate ha chiarito che l'esercizio della professione in forma societaria produce reddito d'impresa, e la stessa lettura si applica in generale alle STP.\n\nNe resta fuori il medico che lavora con la propria partita IVA, perché il suo è reddito di lavoro autonomo, e per la stessa ragione lo studio associato, che è un'associazione professionale e non una società commerciale. Sono escluse anche le società semplici e chi applica il regime forfettario. Fra i requisiti, l'impresa deve rispettare le norme sulla sicurezza nei luoghi di lavoro ed essere in regola con i contributi; non vi accede chi è in liquidazione o in una procedura concorsuale.\n\nL'esclusione dei professionisti è stata contestata da Confprofessioni, dall'Associazione Nazionale Commercialisti e, fra i sanitari, dall'Associazione Italiana Odontoiatri. Il decreto fiscale di marzo 2026 ha modificato l'agevolazione ma non ha allargato la platea: chi lavora in forma individuale, oggi, non può usarla. Conta la forma dell'attività, non la specialità né il fatturato.",
        table: {
          caption: "Iperammortamento 2026 secondo la forma dell'attività sanitaria",
          columns: ["Forma dell'attività", "Tipo di reddito", "Iperammortamento 2026"],
          rows: [
            ["Medico con partita IVA individuale, regime ordinario", "Lavoro autonomo", "No: il bene si ammortizza con le regole ordinarie"],
            ["Medico in regime forfettario", "Lavoro autonomo, determinato a forfait", "No: i costi non incidono sul reddito"],
            ["Studio associato", "Lavoro autonomo", "No"],
            ["Società tra professionisti (STP)", "Reddito d'impresa", "Sì, per i beni degli allegati IV e V"],
            ["Centro medico o poliambulatorio in srl, spa, snc o sas", "Reddito d'impresa", "Sì, per i beni degli allegati IV e V"],
          ],
          note: "Regole in vigore a ottobre 2026: legge 30 dicembre 2025, n. 199, articolo 1, commi 427-436. La verifica sul singolo caso spetta al commercialista.",
        },
      },
      {
        title: "Quali beni rientrano nell'iperammortamento",
        body: "Non tutti i beni strumentali nuovi danno diritto all'iperammortamento. Devono rientrare negli allegati IV e V della legge di bilancio, che riprendono, aggiornati, gli allegati A e B del vecchio piano Industria 4.0. Nell'allegato IV ci sono beni materiali il cui funzionamento è controllato da sistemi computerizzati e che vanno interconnessi al sistema informativo dell'impresa, insieme a sistemi per la qualità e a dispositivi per la sicurezza e l'ergonomia del posto di lavoro; nell'allegato V software, piattaforme e applicazioni con funzioni specifiche. Sono agevolabili anche gli impianti per l'autoproduzione di energia da fonti rinnovabili destinata all'autoconsumo, con requisiti propri per i moduli fotovoltaici. Restano fuori i beni usati e tutto ciò che non compare negli allegati, a cominciare da immobili e automobili.\n\nPer un centro medico il punto delicato sono le apparecchiature. Gli allegati sono stati scritti pensando alla manifattura, e un ecografo, un apparecchio radiologico o un riunito odontoiatrico non vi rientrano per il solo fatto di essere nuovi e digitali: devono corrispondere a una voce precisa ed essere effettivamente interconnessi. È una valutazione tecnica, caso per caso, che la perizia deve sostenere. Conviene farla prima di firmare l'ordine, chiedendo al fornitore come il bene si collega al sistema informativo della struttura e a un perito se la voce regge.\n\nUna novità riguarda la provenienza. Nel testo originario i beni dovevano essere prodotti nell'Unione europea o nello Spazio economico europeo; il decreto-legge 27 marzo 2026, n. 38, convertito dalla legge 22 maggio 2026, n. 88, ha tolto questo vincolo con effetto dal 1° gennaio 2026. Il requisito resta solo per i moduli fotovoltaici.",
      },
      {
        title: "Quanto si risparmia con l'iperammortamento: due esempi",
        body: "La maggiorazione dell'iperammortamento non è uno sconto sul prezzo: aumenta il costo su cui si calcolano le quote di ammortamento, o i canoni se il bene è in leasing, ai fini delle imposte sui redditi. Il risparmio arriva quindi negli stessi anni in cui il bene si ammortizza, e solo se c'è reddito imponibile su cui dedurre.\n\nUn poliambulatorio in forma di srl acquista nel 2026 un'apparecchiatura da 100.000 euro che la perizia riconosce come bene dell'allegato IV. Senza agevolazione dedurrebbe in quote di ammortamento 100.000 euro, cioè 24.000 euro di IRES al 24%. Con la maggiorazione del 180% le quote si calcolano su 280.000 euro: i 180.000 euro in più valgono 43.200 euro di IRES in meno, il 43,2% del costo del bene. Il conto riguarda la sola IRES.\n\nSu importi piccoli le proporzioni cambiano. Per un bene da 15.000 euro la maggiorazione vale circa 6.500 euro di imposta, distribuiti su più anni, e dal beneficio vanno tolti il costo della perizia e il tempo della procedura. Gli scaglioni al 100% e al 50%, oltre i 2,5 e i 10 milioni di euro, riguardano investimenti che uno studio medico difficilmente raggiunge.\n\nIl beneficio si usa a partire dal periodo d'imposta in cui si trasmette al GSE la comunicazione di completamento, a condizione che il bene sia già entrato in funzione. Gli investimenti agevolabili sono quelli effettuati dal 1° gennaio 2026 al 30 settembre 2028.",
      },
      {
        title: "Come si accede: comunicazioni al GSE e perizia asseverata",
        body: "All'iperammortamento si accede attraverso la piattaforma del GSE, nell'area clienti del portale, con SPID. Le regole sono nel decreto attuativo firmato dal ministero delle Imprese e del made in Italy e dal ministero dell'Economia il 7 maggio 2026, i modelli in un decreto direttoriale del 10 giugno 2026; la piattaforma riceve le comunicazioni dal 12 giugno 2026.\n\nLe comunicazioni sono cinque. Tre riguardano l'accesso: una preventiva, con i dati dell'impresa e dei beni; una di conferma, entro 60 giorni dall'esito positivo, con il pagamento di un acconto di almeno il 20%; una di completamento, entro il 15 novembre 2028, quando il bene è interconnesso. Le altre due sono di monitoraggio e tornano ogni anno finché dura il beneficio, entro il 20 gennaio e il 30 giugno.\n\nAlla comunicazione di completamento va allegata una perizia tecnica asseverata, firmata da un ingegnere o da un perito industriale iscritti all'albo, oppure da un ente di certificazione accreditato. A differenza del vecchio piano 4.0 non c'è una soglia di importo sotto la quale basti un'autodichiarazione. L'agevolazione si può cumulare con altre misure, purché il totale non superi il costo sostenuto, ma non con i crediti d'imposta Transizione 4.0 o 5.0 sugli stessi beni.",
      },
      {
        title: "Cosa resta al medico libero professionista",
        body: "Escluso dall'iperammortamento, il medico libero professionista in regime ordinario acquista i beni strumentali con le regole di sempre. Il costo si deduce in quote di ammortamento, con i coefficienti ministeriali, negli anni di vita fiscale del bene; i beni con costo unitario fino a 516,46 euro si deducono per intero nell'anno di acquisto; i beni usati anche per fini personali, come un computer che si porta a casa, si deducono al 50%.\n\nC'è poi un dettaglio che nei preventivi si dimentica. Le prestazioni sanitarie di diagnosi e cura alla persona sono esenti da IVA, e chi fa solo operazioni esenti non può detrarre l'IVA sugli acquisti: diventa parte del costo. Un ecografo da 30.000 euro più IVA al 22% costa allo studio 36.600 euro, ed è su quella cifra che si calcola l'ammortamento. Chi accanto all'attività clinica fa anche prestazioni imponibili, per esempio alcune perizie medico-legali, detrae in parte, secondo il proprio pro-rata.\n\nIn regime forfettario la questione non si pone: il reddito si calcola applicando ai compensi il coefficiente di redditività, che per le attività sanitarie è il 78%, e i costi reali non contano. Un acquisto riduce la liquidità, non le imposte.\n\nPassare a una forma societaria per accedere all'iperammortamento è possibile, ma è una decisione che tocca previdenza, contabilità, IRAP e responsabilità, e che raramente si giustifica con un'agevolazione sola. Se lo studio sta già crescendo verso più medici e più apparecchiature, è un tema da portare al commercialista con i numeri dei prossimi anni.",
      },
      {
        title: "Il gestionale dello studio si può superammortizzare?",
        body: "Un software usato in abbonamento non è un bene che si compra ma un servizio che si paga: il canone è un costo dell'anno, e non c'è niente da ammortizzare né da maggiorare. Vale per il professionista, che lo deduce nell'anno in cui lo paga, come per la società, che lo imputa per competenza. La maggiorazione si applica alle quote di ammortamento e ai canoni di leasing: un software dell'allegato V può rientrarvi se viene acquistato e ammortizzato, non se si paga un abbonamento.\n\nCorioli, per esempio, costa [30 euro al mese, tutto incluso](/prezzi), e si installa sul computer dello studio: per chi è in regime ordinario è una spesa inerente all'attività come le altre, deducibile nell'anno. Il computer su cui gira, invece, è un bene strumentale: se costa più di 516,46 euro si ammortizza in più anni, e se si usa anche fuori dallo studio si deduce al 50%.\n\nQuesto articolo descrive le regole in vigore a ottobre 2026 e non sostituisce una consulenza: forma dell'attività, regime fiscale e natura del bene cambiano la risposta da uno studio all'altro, e la verifica sul singolo caso spetta al commercialista.",
      },
    ],
    faq: [
      {
        question: "Che differenza c'è tra superammortamento e iperammortamento?",
        answer:
          "Il superammortamento, introdotto nel 2016, maggiorava del 40% il costo dei beni strumentali nuovi, con alcune esclusioni, e valeva anche per i professionisti. L'iperammortamento della legge di bilancio 2026 maggiora il costo fino al 180%, ma solo per beni 4.0 interconnessi compresi negli allegati IV e V e solo per chi ha reddito d'impresa, con comunicazioni al GSE e perizia tecnica asseverata.",
      },
      {
        question: "I medici liberi professionisti possono usare l'iperammortamento 2026?",
        answer:
          "No. L'iperammortamento della legge di bilancio 2026 spetta solo ai titolari di reddito d'impresa. Il medico che lavora con la propria partita IVA produce reddito di lavoro autonomo e ne è escluso, come lo studio associato e chi è in regime forfettario. Il superammortamento del 2016, invece, valeva anche per i professionisti: è da lì che nasce la confusione. Conviene ricontrollare a ogni nuova legge di bilancio, perché le associazioni di categoria chiedono l'estensione.",
      },
      {
        question: "Un centro medico in forma di srl o una STP può accedere all'iperammortamento?",
        answer:
          "Sì, perché produce reddito d'impresa. Servono beni nuovi compresi negli allegati IV e V della legge 199/2025, interconnessi ai sistemi della struttura, le comunicazioni al GSE e una perizia tecnica asseverata. Gli investimenti agevolabili sono quelli effettuati dal 1° gennaio 2026 al 30 settembre 2028.",
      },
      {
        question: "Un ecografo nuovo rientra nell'iperammortamento?",
        answer:
          "Non automaticamente. Deve corrispondere a una voce dell'allegato IV ed essere interconnesso al sistema informativo della struttura, e la perizia deve attestarlo. Vale solo se chi lo acquista ha reddito d'impresa: per il medico con partita IVA individuale l'ecografo si ammortizza con le regole ordinarie, e l'IVA, se l'attività è esente, entra nel costo.",
      },
      {
        question: "Quanto si risparmia con l'iperammortamento al 180%?",
        answer:
          "Per una società soggetta a IRES al 24%, la maggiorazione del 180% vale un risparmio d'imposta pari al 43,2% del costo del bene, oltre alla normale deduzione dell'ammortamento. Su un bene da 100.000 euro sono 43.200 euro di IRES in meno, distribuiti negli anni di ammortamento, a condizione che ci sia reddito su cui dedurre.",
      },
      {
        question: "Il canone del gestionale medico si può superammortizzare?",
        answer:
          "No. Un software in abbonamento è un servizio, non un bene da ammortizzare: il canone è un costo dell'anno. Il professionista in regime ordinario lo deduce nell'anno in cui lo paga, la società per competenza; in regime forfettario i costi non contano.",
      },
    ],
    sources: [
      {
        title:
          "Legge 30 dicembre 2025, n. 199. Bilancio di previsione dello Stato per l'anno finanziario 2026 e bilancio pluriennale per il triennio 2026-2028, articolo 1, commi 427-436.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-12-30;199",
      },
      {
        title:
          "Decreto-legge 27 marzo 2026, n. 38. Disposizioni urgenti in materia fiscale ed economica, articolo 7, convertito con modificazioni dalla legge 22 maggio 2026, n. 88.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2026-03-27;38",
      },
      {
        title:
          "Decreto interministeriale del ministro delle Imprese e del made in Italy e del ministro dell'Economia e delle finanze del 7 maggio 2026, attuativo dell'iperammortamento, e decreto direttoriale del 10 giugno 2026 sui modelli di comunicazione al GSE.",
      },
      {
        title:
          "Legge 28 dicembre 2015, n. 208. Legge di stabilità 2016, articolo 1, comma 91 (superammortamento).",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2015-12-28;208",
      },
      {
        title:
          "Agenzia delle Entrate. Risoluzione n. 35/E del 7 maggio 2018, natura del reddito prodotto dalle società tra avvocati.",
      },
      {
        title:
          "Decreto del Presidente della Repubblica 26 ottobre 1972, n. 633, articolo 10, primo comma, numero 18, e articolo 19 (esenzione IVA delle prestazioni sanitarie e indetraibilità dell'imposta sugli acquisti).",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
      },
    ],
  },
  {
    slug: "corioli-cardiologia-disponibile",
    title: "Corioli Cardiologia è disponibile: cosa contiene e come provarla",
    description:
      "Il gestionale per l'ambulatorio cardiologico è sul Microsoft Store: com'è fatta la visita, quali moduli si accendono e come iniziare i 30 giorni di prova.",
    excerpt:
      "Corioli Cardiologia è sul Microsoft Store, con 30 giorni di prova gratuita. La visita, i moduli strumentali da accendere, gli indici con la formula in chiaro e quello che abbiamo scelto di lasciare spento.",
    date: "29 Settembre 2026",
    isoDate: "2026-09-29",
    category: "Cardiologia",
    lead: "Corioli Cardiologia si scarica dal Microsoft Store. È un'applicazione a sé, con il suo archivio, costruita insieme a un team di cardiologi per refertare in ambulatorio: una visita che parte essenziale e si allunga solo quando serve, misure in campi strutturati invece che in testo libero, indici calcolati che dichiarano sempre la formula da cui vengono. Qui trovi che cosa contiene, che cosa abbiamo scelto di lasciare spento e come iniziare la prova.",
    keyPoints: [
      "Corioli Cardiologia è un'applicazione desktop per Windows 10 e Windows 11 e si installa dal Microsoft Store; su Mac, con macOS 10.13 o superiore, la installiamo insieme al medico in una breve call.",
      "La prova gratuita dura 30 giorni, senza carta di credito; poi il prezzo è lo stesso di Corioli per la ginecologia, 30 euro al mese tutto incluso.",
      "Alla prima apertura la visita è quella essenziale; ecocardiogramma, TC coronarica, test ergometrico, Holter ECG e pressorio, Doppler dei tronchi sovraaortici, scompenso e fibrillazione atriale si accendono uno per uno dalle impostazioni.",
      "QTc, eGFR, LDL, HOMA-IR, CHA2DS2-VASc e HAS-BLED compaiono con la formula accanto e non vengono mai scritti da soli nel referto.",
      "I dati restano sul computer dello studio, in un archivio separato da quello di Corioli per la ginecologia: le due applicazioni convivono sullo stesso computer.",
    ],
    sections: [
      {
        title: "Un'applicazione a sé, con il suo archivio",
        body: "[Corioli Cardiologia](/cardiologia) nasce dalla stessa base di Corioli, il gestionale che usano i ginecologi, ma non è un modulo aggiunto: è un'applicazione distinta, con la sua scheda sul Microsoft Store e il suo archivio. Dentro non ci sono le visite ostetriche e i calcolatori fetali, ci sono i moduli strumentali e gli indici della cardiologia.\n\nLa separazione è voluta. Un ambulatorio cardiologico non ha bisogno di vedere una cartella ostetrica, e uno studio che le usa tutte e due può installarle sullo stesso computer: gli archivi restano distinti e le due applicazioni non interferiscono. Il prezzo è lo stesso, 30 euro al mese tutto incluso, senza moduli a pagamento.\n\nI requisiti clinici li detta un team di cardiologi: l'ordine delle sezioni, che cosa entra nel referto e che cosa resta nella maschera, quali soglie usare e quali calcoli mostrare. Il software si adegua al modo in cui si referta, non il contrario.",
      },
      {
        title: "La visita: essenziale all'apertura, completa quando serve",
        body: "Il grosso delle visite cardiologiche si referta in poche righe, e una maschera che apre subito tutti i moduli è una maschera che non si usa. Per questo, alla prima apertura, la visita contiene l'essenziale: anamnesi, motivo della visita, terapia in atto, esame obiettivo, pressione arteriosa, elettrocardiogramma, esami di laboratorio, rischio cardiovascolare, accertamenti e conclusioni.\n\nTutto il resto esiste e si accende uno per uno dalle impostazioni, nella scheda dei moduli della visita: ecocardiogramma, TC coronarica, test ergometrico, Holter ECG, Holter pressorio, ecocolorDoppler dei tronchi sovraaortici, scompenso e fibrillazione atriale. Un modulo spento sparisce dalla maschera ma non dai dati: una visita in archivio che lo aveva compilato continua a mostrarlo.\n\nFra un controllo e l'altro la terapia in atto e i fattori di rischio di solito non cambiano: alla visita nuova arrivano copiati dall'ultima, e si corregge solo quello che è cambiato. Nella colonna laterale restano a vista parametri vitali, peso con BMI, fattori di rischio ed esami di laboratorio, raggruppati per ragionamento clinico: burden aterogeno, profilo infiammatorio, metabolismo glucidico, funzione renale.",
      },
      {
        title: "Il referto che esce dallo studio",
        body: "Oltre al referto di visita, l'applicazione produce ricetta, certificato e richiesta di esame, tutti in PDF con l'intestazione dello studio. Nel referto di visita l'anamnesi viene prima del motivo, gli esami ematochimici prima della terapia in atto, poi pressione ed elettrocardiogramma, l'esame obiettivo e gli altri esami strumentali, uno per fascia.\n\nOgni esame strumentale è reso come una tabella, perché con una dozzina di misure per modulo la riga continua separata da punti diventava illeggibile. Il grassetto segnala solo i valori fuori dai limiti di riferimento, senza giudizi scritti accanto: a leggere il foglio è un collega. Le pagine sono numerate e riportano in testa paziente e medico; le immagini allegate, come i tracciati ECG o Holter, sono numerate anche loro.\n\nNei campi di testo si può mettere in grassetto una parola o una frase con Ctrl+B o con il tasto destro, per far risaltare ciò che conta senza dover impaginare un documento.",
      },
      {
        title: "Indici calcolati, e quello che resta spento",
        body: "QTc secondo Bazett, eGFR con CKD-EPI 2021 e stadio KDIGO, LDL secondo Friedewald, colesterolo non-HDL, HOMA-IR, fascia del calcium score, CHA2DS2-VASc e HAS-BLED compaiono in riquadri separati, ciascuno con la formula di provenienza e i limiti che applica. Nessuno viene scritto in automatico nel referto: sono suggerimenti, e l'interpretazione resta del medico. Quando manca un dato necessario, per esempio il sesso del paziente per l'eGFR, il calcolo si ferma e dice che cosa manca invece di rispondere su un valore inventato.\n\nAlcune cose sono implementate ma volutamente spente. Lo SCORE2, lo SCORE2-OP e i percentili MESA del calcium score restano disattivati finché coefficienti e tabelle di riferimento non saranno verificati sulla fonte primaria: l'applicazione mostra il motivo invece di un numero potenzialmente sbagliato. Il prontuario resta spento finché il team di cardiologi non ne valida le schede.\n\nCorioli Cardiologia non è un dispositivo medico certificato: gli indici non pongono diagnosi e non propongono soglie terapeutiche.",
      },
      {
        title: "Come si installa e come si prova",
        body: "Su Windows 10 e Windows 11 l'installazione passa dal Microsoft Store: il pacchetto è verificato dallo store e gli aggiornamenti arrivano in automatico. Nella pagina download del sito scegli la cardiologia, e il pulsante apre la scheda giusta. Su Mac l'applicazione c'è, ma non passa dal Mac App Store: la installiamo insieme in una breve call con un nostro operatore.\n\nAl primo avvio imposti i dati dello studio e l'intestazione dei referti, poi accendi i moduli che usi davvero. I dati stanno sul computer dello studio: non esiste un archivio pazienti sui nostri server, e verso l'esterno passano solo la telemetria della licenza e la chat di assistenza. L'applicazione fa da sola copie di sicurezza sullo stesso disco; una copia da conservare altrove, per esempio su un disco esterno, resta una responsabilità dello studio.\n\nLa prova dura 30 giorni, senza carta di credito e senza vincoli. Alla fine decidi se attivare il piano: se non lo fai, non ti viene addebitato nulla.",
      },
    ],
    faq: [
      {
        question: "Dove si scarica Corioli Cardiologia?",
        answer:
          "Dal Microsoft Store, per Windows 10 e Windows 11. Nella pagina download del sito di Corioli si sceglie la specialità e il pulsante apre la scheda dell'applicazione. Su Mac, con macOS 10.13 o superiore, l'installazione si fa insieme a un operatore in una breve call.",
      },
      {
        question: "Corioli Cardiologia e Corioli per la ginecologia sono la stessa applicazione?",
        answer:
          "No. Sono due applicazioni distinte, ciascuna con la sua scheda sul Microsoft Store e il suo archivio. Possono convivere sullo stesso computer senza interferire, e costano uguale: 30 euro al mese, tutto incluso.",
      },
      {
        question: "Serve internet per usare Corioli Cardiologia?",
        answer:
          "Serve per scaricarla, per gli aggiornamenti, per la licenza e per la chat di assistenza. Il lavoro clinico no: visite, calcoli e referti funzionano sul computer dello studio anche quando la connessione non c'è, perché i dati sono salvati lì.",
      },
      {
        question: "Cosa succede alla fine dei 30 giorni di prova?",
        answer:
          "Decidi se attivare il piano da 30 euro al mese. La prova non richiede la carta di credito, quindi se non lo attivi non ti viene addebitato nulla.",
      },
    ],
  },
  {
    slug: "calcium-score-cad-rads-tc-coronarica",
    title: "Calcium score e CAD-RADS 2.0: come si leggono nel referto della TC coronarica",
    description:
      "Punteggio di Agatston e fasce di calcificazione, limiti del calcium score zero, CAD-RADS 2.0 con burden di placca e modificatori, e cosa scrivere nel referto.",
    excerpt:
      "Due numeri della stessa indagine che rispondono a domande diverse: quanto calcio c'è nelle coronarie e quanto è ristretto il lume. Agatston, fasce, CAD-RADS 2.0, burden di placca e modificatori, con gli errori di lettura più comuni.",
    date: "29 Settembre 2026",
    isoDate: "2026-09-29",
    category: "Cardiologia",
    lead: "Nel referto di una TC coronarica compaiono spesso due numeri che sembrano dire la stessa cosa e non la dicono. Il calcium score misura quanto calcio c'è nelle pareti delle coronarie e viene da una scansione senza mezzo di contrasto; la categoria CAD-RADS descrive quanto è ristretto il lume nel punto peggiore e viene dall'angio-TC. Qui trovi come si calcolano, come si leggono le fasce, che cosa ha aggiunto CAD-RADS 2.0 e che cosa conviene riportare nel referto cardiologico.",
    keyPoints: [
      "Il punteggio di Agatston si calcola su una TC senza contrasto: ogni lesione calcifica sopra i 130 HU ha un'area che viene moltiplicata per un fattore da 1 a 4, scelto in base al picco di densità, e i prodotti di tutte le lesioni si sommano.",
      "Nel referto il valore si descrive di solito per fasce: 0, 1-99, 100-299 e 300 o più; alcuni centri pongono a 400 la soglia della calcificazione severa, quindi va scritto quale soglia si è applicata.",
      "Un calcium score di 0 indica in prevenzione un rischio di eventi basso, ma non esclude una placca non calcifica né, in un paziente con sintomi, una stenosi.",
      "CAD-RADS 2.0 classifica la stenosi massima da 0, nessuna placca, a 5, occlusione totale; 4A indica una stenosi del 70-99% in uno o due vasi, 4B un tronco comune al 50% o più o una malattia trivasale al 70% o più.",
      "Dalla versione 2.0 la categoria è seguita dal burden di placca, da P1 a P4, e da sei possibili modificatori: N, HRP, I, S, G ed E.",
    ],
    sections: [
      {
        title: "Due esami, due domande",
        body: "Il calcium score e l'angio-TC coronarica si fanno spesso nella stessa seduta, ma sono due acquisizioni diverse. La prima è una scansione sincronizzata con l'elettrocardiogramma, senza mezzo di contrasto e a bassa dose di radiazioni: mostra solo il calcio, che nelle coronarie è un marcatore di aterosclerosi. La seconda si esegue dopo l'iniezione del contrasto e mostra il lume, le placche calcifiche e quelle non calcifiche, e quindi le stenosi.\n\nDa qui la regola che attraversa tutto il resto: il calcium score misura il carico di aterosclerosi calcifica, non il grado di stenosi. Un punteggio alto dice che nelle coronarie c'è molto calcio, non che una coronaria è chiusa; un punteggio basso non garantisce che il lume sia libero. La stenosi la descrive la categoria CAD-RADS, che si ottiene solo dall'angio-TC.\n\nLe due informazioni servono a decisioni diverse. Il calcium score è soprattutto uno strumento di stratificazione del rischio in prevenzione; l'angio-TC serve a valutare un paziente con sintomi o con il sospetto di una malattia coronarica ostruttiva.",
      },
      {
        title: "Come si calcola il punteggio di Agatston",
        body: "Il metodo è quello descritto da Agatston nel 1990. Sulle immagini si individuano le lesioni calcifiche delle coronarie, cioè le aree con una densità di almeno 130 unità Hounsfield e una superficie di almeno 1 mm². Per ogni lesione si misura l'area e si guarda il picco di densità, che stabilisce un fattore di peso: 1 fra 130 e 199 HU, 2 fra 200 e 299, 3 fra 300 e 399, 4 da 400 HU in su. Il punteggio della lesione è l'area moltiplicata per il fattore, e il calcium score è la somma di tutte le lesioni in tutte le sezioni.\n\nUn esempio: una lesione di 6 mm² con un picco di 250 HU vale 6 × 2 = 12; una di 10 mm² con un picco di 450 HU vale 10 × 4 = 40. Se nelle coronarie ci sono solo queste due, il calcium score è 52.\n\nIl risultato si esprime in unità Agatston e va letto rispetto alla persona: lo stesso valore di 150 non ha lo stesso peso a 45 e a 75 anni. Per questo accanto al numero assoluto si riporta talvolta il percentile per età, sesso ed etnia, ricavato da grandi coorti come lo studio MESA.",
      },
      {
        title: "Le fasce di lettura e cosa ne fanno le linee guida",
        body: "Nel referto il calcium score si descrive di solito per fasce: 0, nessuna calcificazione; da 1 a 99, calcificazione lieve; da 100 a 299, moderata; da 300 in su, severa. I centri non concordano sull'ultima soglia, che alcuni pongono a 400. Non è un dettaglio: un valore di 350 finisce in due categorie diverse a seconda del centro, e il referto dovrebbe dire quale soglia ha applicato. Il valore si usa come è stato misurato, senza arrotondamenti: un 99 e un 101 cadono in due fasce diverse.\n\nLe linee guida europee non propongono il calcium score come test di screening per tutti. L'aggiornamento 2025 delle linee guida ESC/EAS sulle dislipidemie indica però che, quando è stato misurato, un calcium score aumentato va considerato come modificatore del rischio nelle persone a rischio moderato o vicine a una soglia di trattamento, per riclassificarle.\n\nLe linee guida americane ACC/AHA del 2026 sulle dislipidemie lo usano in modo più esplicito per chi è a rischio intermedio. Con un calcium score di 0, e in assenza di condizioni ad alto rischio come l'ipercolesterolemia familiare o grave, il diabete dopo i 40 anni, il fumo o una forte familiarità per malattia coronarica precoce, considerano ragionevole rimandare la terapia ipolipemizzante e ripetere l'esame dopo 3-7 anni; con un valore superiore a 0 raccomandano di iniziarla, in particolare da 100 unità in su o sopra il 75° percentile. Sono indicazioni di prevenzione, da leggere nel quadro clinico complessivo.",
      },
      {
        title: "Il limite del calcium score zero",
        body: "Un calcium score di 0 è un'informazione rassicurante in prevenzione, ed è per questo che le linee guida americane lo usano per rimandare la terapia in alcuni pazienti. Ma zero calcio non significa zero placca. Le placche non calcifiche, più frequenti nei pazienti giovani, non si vedono nella scansione senza contrasto e possono anche restringere il lume.\n\nNella pratica il rischio è usare un calcium score di 0 per chiudere il discorso in un paziente che ha sintomi. In quel caso la domanda non è quanto calcio c'è, ma se c'è una stenosi, e a quella rispondono l'angio-TC o un test funzionale.\n\nAnche il confronto nel tempo va fatto con attenzione. La progressione si legge sui valori realmente misurati, esame per esame, senza riempire gli intervalli. E il passaggio da 0 a 40 non è un aumento del 100% né di qualsiasi altra percentuale, perché il punto di partenza è zero: è una variazione che si descrive in unità assolute.",
      },
      {
        title: "CAD-RADS 2.0: le categorie di stenosi",
        body: "CAD-RADS è il sistema di refertazione standardizzato dell'angio-TC coronarica, promosso da SCCT, ACC, ACR e NASCI. La versione 2.0, del 2022, ha mantenuto l'impianto originale: una categoria per paziente, assegnata in base alla stenosi più grave ed espressa come riduzione percentuale del diametro del lume.\n\nLe categorie sono queste. CAD-RADS 0: nessuna placca e nessuna stenosi. CAD-RADS 1: stenosi minima, dall'1 al 24%, oppure placca senza stenosi. CAD-RADS 2: stenosi lieve, dal 25 al 49%. CAD-RADS 3: stenosi moderata, dal 50 al 69%. CAD-RADS 4A: stenosi severa, dal 70 al 99%, in uno o due vasi. CAD-RADS 4B: stenosi del tronco comune del 50% o più, oppure malattia trivasale con stenosi del 70% o più. CAD-RADS 5: occlusione totale. CAD-RADS N indica un esame non diagnostico.\n\nPoiché lo 0 significa assenza di placca, un paziente con un calcium score superiore a 0 non può avere una CAD-RADS 0: se c'è calcio, c'è almeno una placca. È un controllo di coerenza semplice, utile quando i due valori arrivano da referti diversi.",
      },
      {
        title: "Burden di placca e modificatori",
        body: "La novità principale della versione 2.0 è il burden di placca, che descrive quanta aterosclerosi c'è nel complesso, a prescindere dalla stenosi peggiore. Va da P1, lieve, a P4, esteso, e si ricava in tre modi: dal calcium score (P1 da 1 a 100, P2 da 101 a 300, P3 da 301 a 999, P4 oltre 1000), dal numero di segmenti coronarici con placca, il segment involvement score (P1 fino a 2, P2 da 3 a 4, P3 da 5 a 7, P4 da 8 in su), oppure con una stima visiva. Due pazienti con la stessa stenosi massima del 40% possono essere uno P1 e l'altro P4, e dal punto di vista del rischio non sono la stessa persona. Le soglie del burden non coincidono con le fasce di lettura del calcium score viste sopra: sono due classificazioni diverse, e nel referto conviene non mescolarle.\n\nAlla categoria e al burden si aggiungono, quando servono, sei modificatori. N segnala segmenti non valutabili. HRP indica una placca ad alto rischio, cioè con almeno due fra rimodellamento positivo, bassa attenuazione, calcificazioni puntiformi e segno dell'anello (napkin-ring), e ha sostituito il vecchio modificatore V. I riporta l'esito di una valutazione dell'ischemia con FFR-TC o perfusione TC: I+ se presente, I- se assente, I± se dubbia. S indica uno stent, G un bypass, E un reperto non aterosclerotico, come un'anomalia coronarica o una dissezione.\n\nLa sigla si scrive nell'ordine categoria, burden e modificatori, separati da una barra: per esempio CAD-RADS 3/P2/HRP, oppure CAD-RADS 4A/P3/I+. Letta così, una riga sola dice quanto è stretto il punto peggiore, quanta placca c'è in tutto e se c'è qualcosa che cambia la gestione.",
      },
      {
        title: "Cosa riportare nel referto cardiologico",
        body: "Nel referto della visita conviene riportare tre informazioni della TC, sempre con la data e il centro dell'esame: il calcium score con la fascia e la soglia usata, la categoria CAD-RADS con burden e modificatori, e la stenosi massima con il segmento in cui si trova, secondo il modello a 18 segmenti della SCCT. Se è stata eseguita una FFR-TC, il suo esito completa il quadro.\n\nIn [Corioli Cardiologia](/cardiologia) la TC coronarica è un modulo che si accende quando serve. Contiene il calcium score con la fascia di Agatston, con la soglia della calcificazione severa impostabile a 300 o a 400, la categoria CAD-RADS con i modificatori, il burden di placca, i segmenti SCCT interessati, la stenosi massima, l'FFR-TC e la sintesi del referto radiologico. Nel referto stampato escono tre numeri: Agatston, CAD-RADS e burden di placca.\n\nLa fascia del calcium score porta sempre con sé un'avvertenza che non si può togliere: il punteggio non equivale a una stenosi ostruttiva e va integrato con la clinica. La variazione fra due esami si calcola solo sui valori misurati, senza interpolazioni. Il percentile MESA non viene mostrato finché le tabelle di riferimento non saranno inserite e verificate, perché un percentile approssimato sposterebbe un paziente di fascia di rischio.",
      },
    ],
    faq: [
      {
        question: "Un calcium score di 0 esclude la malattia coronarica?",
        answer:
          "No. Indica l'assenza di calcificazioni coronariche e, in prevenzione, un rischio di eventi basso, ma non esclude le placche non calcifiche, che nella scansione senza contrasto non si vedono. In un paziente con sintomi la presenza di una stenosi si valuta con l'angio-TC o con un test funzionale.",
      },
      {
        question: "Che differenza c'è fra calcium score e CAD-RADS?",
        answer:
          "Il calcium score misura quanto calcio c'è nelle pareti delle coronarie, su una TC senza contrasto, ed è uno strumento di stratificazione del rischio. La categoria CAD-RADS descrive la stenosi più grave vista all'angio-TC con contrasto. Il primo non dice quanto è ristretto il lume, la seconda sì.",
      },
      {
        question: "Quali sono le fasce del calcium score?",
        answer:
          "Le più usate in refertazione sono 0 (nessuna calcificazione), 1-99 (lieve), 100-299 (moderata) e 300 o più (severa). Alcuni centri pongono la soglia della calcificazione severa a 400: per questo il referto dovrebbe indicare quale soglia è stata applicata.",
      },
      {
        question: "Cosa significa CAD-RADS 4B?",
        answer:
          "Indica una stenosi del tronco comune del 50% o più, oppure una malattia trivasale con stenosi del 70% o più. Nel sistema CAD-RADS 2.0 è la categoria che precede l'occlusione totale, CAD-RADS 5.",
      },
      {
        question: "Cosa vuol dire P2 in un referto CAD-RADS?",
        answer:
          "È il burden di placca, introdotto con CAD-RADS 2.0: P2 indica una quantità moderata di placca nel complesso delle coronarie. Si ricava dal calcium score (da 101 a 300), dal numero di segmenti con placca (3 o 4) oppure da una stima visiva.",
      },
    ],
    sources: [
      {
        title:
          "Agatston AS, Janowitz WR, Hildner FJ, Zusmer NR, Viamonte M Jr, Detrano R. Quantification of coronary artery calcium using ultrafast computed tomography. J Am Coll Cardiol. 1990;15(4):827-832.",
        url: "https://doi.org/10.1016/0735-1097(90)90282-T",
      },
      {
        title:
          "Cury RC, Leipsic J, Abbara S, et al. CAD-RADS 2.0 – 2022 Coronary Artery Disease-Reporting and Data System: an expert consensus document of the SCCT, ACC, ACR and NASCI. J Cardiovasc Comput Tomogr. 2022;16(6):536-557.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36115815/",
      },
      {
        title:
          "Mach F, Koskinas KC, et al. 2025 Focused Update of the 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J. 2025;46(42):4359.",
        url: "https://academic.oup.com/eurheartj/article/46/42/4359/8234482",
      },
      {
        title:
          "2026 ACC/AHA/AACVPR/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Dyslipidemia. J Am Coll Cardiol. 2026.",
        url: "https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016",
      },
    ],
  },
  {
    slug: "egfr-ckd-epi-cockcroft-gault-doac",
    title: "eGFR con CKD-EPI 2021 o clearance di Cockcroft-Gault: quale usare in cardiologia",
    description:
      "CKD-EPI 2021 senza coefficiente etnico, stadi KDIGO e perché per la dose dei DOAC serve ancora la clearance di Cockcroft-Gault. Con esempi numerici.",
    excerpt:
      "Stessa creatinina, due numeri diversi: l'eGFR stadia la malattia renale, la clearance di Cockcroft-Gault decide la dose dei DOAC. Formule, esempi e i pazienti in cui i due valori si allontanano di più.",
    date: "29 Settembre 2026",
    isoDate: "2026-09-29",
    category: "Cardiologia",
    lead: "In ambulatorio cardiologico la funzione renale serve a due cose diverse: capire se c'è una malattia renale cronica e in che stadio, e decidere la dose di un farmaco. Per la prima si usa l'eGFR calcolato con CKD-EPI; per la seconda, almeno per gli anticoagulanti orali diretti, le schede tecniche chiedono ancora la clearance della creatinina secondo Cockcroft-Gault. I due numeri partono dalla stessa creatinina e nell'anziano di basso peso possono essere lontani quasi 30 mL/min. Qui trovi le formule, gli esempi e cosa scrivere nel referto.",
    keyPoints: [
      "CKD-EPI 2021 stima il filtrato glomerulare dalla creatinina, dall'età e dal sesso, senza coefficiente etnico; il risultato è in mL/min/1,73 m², cioè riferito a una superficie corporea standard.",
      "Gli stadi KDIGO dell'eGFR sono G1 (90 o più), G2 (60-89), G3a (45-59), G3b (30-44), G4 (15-29) e G5 (sotto 15); per parlare di malattia renale cronica l'alterazione deve durare più di tre mesi.",
      "Cockcroft-Gault stima la clearance della creatinina in mL/min: (140 − età) × peso / (72 × creatinina), moltiplicato per 0,85 nelle donne. È la clearance su cui le schede tecniche e la guida pratica EHRA fissano le soglie di dose degli anticoagulanti orali diretti.",
      "Nell'anziano di basso peso i due valori divergono: una donna di 82 anni e 52 kg con creatinina 1,1 mg/dL ha un eGFR di 50 mL/min/1,73 m² e una clearance di 32 mL/min.",
      "Accanto al risultato vanno sempre la creatinina, la formula e l'unità di misura: «funzione renale 50» non dice quale delle due stime si ha davanti.",
    ],
    sections: [
      {
        title: "Due numeri per due domande",
        body: "La creatinina da sola dice poco, perché dipende dalla massa muscolare: lo stesso valore di 1,1 mg/dL è normale in un uomo robusto di quarant'anni e segnala una funzione ridotta in una donna minuta di ottanta. Per questo la si trasforma in una stima della funzione renale, e in ambulatorio le stime più usate sono due.\n\nL'eGFR calcolato con l'equazione CKD-EPI stima il filtrato glomerulare ed è riferito a una superficie corporea standard di 1,73 m². È il numero con cui si diagnostica e si stadia la malattia renale cronica, ed è quello che i laboratori stampano accanto alla creatinina.\n\nLa clearance della creatinina secondo Cockcroft-Gault usa anche il peso e dà un valore in mL/min, non normalizzato. È una formula del 1976, meno accurata come stima del filtrato, ma è quella su cui sono state costruite le soglie di dose di molti farmaci, e in particolare degli anticoagulanti orali diretti.",
      },
      {
        title: "La formula CKD-EPI 2021",
        body: "Nel 2021 il gruppo CKD-EPI ha pubblicato una nuova equazione basata sulla creatinina che non usa più il coefficiente etnico della versione del 2009. Con la creatinina in mg/dL è: eGFR = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1,200 × 0,9938^età, moltiplicato per 1,012 nelle donne. κ vale 0,7 nelle donne e 0,9 negli uomini; α vale −0,241 nelle donne e −0,302 negli uomini. Il risultato è in mL/min/1,73 m².\n\nNon è un conto da fare a mente, ma un esempio aiuta a capire quanto pesano età e sesso. Con una creatinina di 1,0 mg/dL a 70 anni l'eGFR è 61 in una donna e 81 in un uomo: stessa creatinina, venti punti di differenza, perché a parità di funzione renale la donna ha in media meno massa muscolare e quindi una creatinina più bassa.\n\nL'equazione presuppone una creatinina dosata con metodi standardizzati e una massa muscolare nella media. Quando la massa muscolare è molto bassa o molto alta la stima perde accuratezza, e le linee guida KDIGO 2024 suggeriscono in questi casi di affiancare il dosaggio della cistatina C.",
      },
      {
        title: "Gli stadi KDIGO",
        body: "Le linee guida KDIGO classificano la funzione renale in sei categorie di filtrato: G1 da 90 in su, G2 da 60 a 89, G3a da 45 a 59, G3b da 30 a 44, G4 da 15 a 29 e G5 sotto 15, tutte in mL/min/1,73 m². Accanto al filtrato c'è l'albuminuria, espressa come rapporto albumina/creatinina sulle urine: A1 sotto 30 mg/g, A2 da 30 a 300, A3 oltre 300.\n\nLa malattia renale cronica si definisce come un'alterazione della struttura o della funzione renale presente da più di tre mesi. Un eGFR sotto 60 che dura da più di tre mesi basta a porre la diagnosi; sopra 60 servono altri segni di danno renale, come l'albuminuria. Un singolo valore basso, magari durante una disidratazione o dopo l'aumento di un diuretico, non è una diagnosi.\n\nLo stadio completo combina le due informazioni, per esempio G3a A2, perché il rischio di progressione e quello di eventi cardiovascolari crescono con entrambe. Nei referti cardiologici l'albuminuria è spesso il dato che manca.",
      },
      {
        title: "Cockcroft-Gault e gli anticoagulanti diretti",
        body: "La formula di Cockcroft e Gault stima la clearance della creatinina in mL/min: (140 − età) × peso in kg / (72 × creatinina in mg/dL), moltiplicato per 0,85 nelle donne. A differenza del CKD-EPI usa il peso, e il risultato non è riferito alla superficie corporea.\n\nGli studi registrativi degli anticoagulanti orali diretti hanno selezionato i pazienti e ridotto le dosi in base a questa clearance, e le schede tecniche fissano le loro soglie sullo stesso valore. Per questo la guida pratica della European Heart Rhythm Association (EHRA) indica di usare Cockcroft-Gault per decidere la dose. Le soglie cambiano da farmaco a farmaco, ma riduzioni e controindicazioni si concentrano intorno a 50, 30 e 15 mL/min: proprio dove una stima sbagliata sposta la dose.\n\nLa stessa guida dice anche ogni quanto ricontrollare la funzione renale: almeno una volta l'anno e, quando la clearance è di 60 mL/min o meno, con un intervallo in mesi pari alla clearance divisa per 10. Con una clearance di 40 mL/min il controllo va ripetuto almeno ogni quattro mesi.",
      },
      {
        title: "Dove i due numeri divergono",
        body: "Nella maggior parte dei pazienti eGFR e clearance sono abbastanza vicini da non cambiare nulla. Divergono dove la decisione conta di più: nell'anziano di basso peso.\n\nUna donna di 82 anni, 52 kg, creatinina 1,1 mg/dL. Il CKD-EPI 2021 le attribuisce un eGFR di 50 mL/min/1,73 m², stadio G3a; la clearance di Cockcroft-Gault è 32 mL/min. Circa diciotto punti di differenza, uno sopra e uno sotto la soglia dei 50. Se la stessa donna pesasse 80 kg la clearance salirebbe a 50 mL/min e i due valori quasi coinciderebbero.\n\nIl caso più insidioso è la creatinina che sembra normale. Una donna di 84 anni e 48 kg con creatinina 0,9 mg/dL ha un eGFR di 63, che pare rassicurante, e una clearance di 35 mL/min: 28 punti di distanza. Guardare solo l'eGFR stampato dal laboratorio porterebbe a lasciare la dose piena a chi forse andrebbe ridotta.\n\nC'è poi la questione della superficie corporea. L'eGFR è riferito a 1,73 m²: per una donna di 52 kg e 155 cm, con una superficie di circa 1,49 m², un eGFR di 50 corrisponde a un filtrato assoluto di circa 43 mL/min. Per questo le linee guida KDIGO 2024 indicano che, nelle persone con un peso molto lontano dalla media e per i farmaci con un margine terapeutico stretto, si può usare l'eGFR non normalizzato, moltiplicandolo per la superficie corporea reale divisa per 1,73. Il verso opposto esiste: in una persona in forte sovrappeso, Cockcroft-Gault calcolato con il peso reale tende a sovrastimare la clearance.",
      },
      {
        title: "Cosa scrivere nel referto",
        body: "Accanto a un valore di funzione renale conviene riportare sempre la creatinina, la formula e l'unità di misura. «eGFR 50 mL/min/1,73 m² (CKD-EPI 2021)» e «clearance 32 mL/min (Cockcroft-Gault, peso 52 kg)» sono due informazioni diverse, e un collega che legge soltanto «funzione renale 50» non sa quale delle due ha davanti. Se il paziente assume un anticoagulante diretto, il valore che giustifica la dose è la clearance, ed è quello che conviene far comparire.\n\nIn [Corioli Cardiologia](/cardiologia) l'eGFR con CKD-EPI 2021 e lo stadio KDIGO si calcolano nel pannello della funzione renale, dalla creatinina, dall'età e dal sesso del paziente. La clearance di Cockcroft-Gault sta nel modulo della fibrillazione atriale, accanto a CHA2DS2-VASc e HAS-BLED, e usa il peso corporeo. Entrambi i valori riportano la formula da cui vengono e nessuno dei due viene scritto da solo nel referto. Se in anagrafica il sesso non è indicato, i calcoli si fermano e lo dicono, invece di rispondere su un sesso scelto a caso.",
      },
    ],
    faq: [
      {
        question: "Qual è la differenza fra eGFR e clearance della creatinina?",
        answer:
          "L'eGFR, calcolato con CKD-EPI, stima il filtrato glomerulare riferito a una superficie corporea di 1,73 m² ed è il valore con cui si stadia la malattia renale cronica. La clearance di Cockcroft-Gault usa anche il peso e dà un valore assoluto in mL/min: è quella su cui le schede tecniche degli anticoagulanti orali diretti fissano le soglie di dose.",
      },
      {
        question: "Per la dose dei DOAC si usa l'eGFR o Cockcroft-Gault?",
        answer:
          "La clearance di Cockcroft-Gault, come indica la guida pratica EHRA: è la stima usata negli studi registrativi e nelle schede tecniche. Nell'anziano di basso peso l'eGFR può risultare molto più alto della clearance, e usarlo al suo posto rischia di lasciare la dose piena a chi andrebbe ridotta.",
      },
      {
        question: "Perché CKD-EPI 2021 non ha il coefficiente etnico?",
        answer:
          "La versione del 2009 moltiplicava il risultato per un coefficiente nei pazienti di etnia nera. L'equazione del 2021 è stata ricalcolata senza quel coefficiente, con la sola creatinina, l'età e il sesso, perché la stima non dipendesse da una categoria etnica.",
      },
      {
        question: "Un eGFR sotto 60 significa malattia renale cronica?",
        answer:
          "Solo se persiste per più di tre mesi. Un valore isolato può dipendere da una disidratazione, da un farmaco o da una malattia acuta; secondo KDIGO la malattia renale cronica richiede un'alterazione della funzione o della struttura renale presente da oltre tre mesi.",
      },
      {
        question: "Quali sono gli stadi KDIGO dell'eGFR?",
        answer:
          "G1 da 90 mL/min/1,73 m² in su, G2 da 60 a 89, G3a da 45 a 59, G3b da 30 a 44, G4 da 15 a 29 e G5 sotto 15. Lo stadio completo si accompagna all'albuminuria: A1 sotto 30 mg/g, A2 da 30 a 300, A3 oltre 300.",
      },
    ],
    sources: [
      {
        title:
          "Inker LA, Eneanya ND, Coresh J, et al. New creatinine- and cystatin C-based equations to estimate GFR without race. N Engl J Med. 2021;385(19):1737-1749.",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2102953",
      },
      {
        title:
          "Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int. 2024;105(4S):S117-S314.",
        url: "https://www.kidney-international.org/article/S0085-2538(23)00766-4/fulltext",
      },
      {
        title:
          "Cockcroft DW, Gault MH. Prediction of creatinine clearance from serum creatinine. Nephron. 1976;16(1):31-41.",
      },
      {
        title:
          "Steffel J, Collins R, Antz M, et al. 2021 European Heart Rhythm Association Practical Guide on the use of non-vitamin K antagonist oral anticoagulants in patients with atrial fibrillation. Europace. 2021;23(10):1612-1676.",
        url: "https://academic.oup.com/europace/article/23/10/1612/6247378",
      },
    ],
  },
  {
    slug: "cha2ds2-vasc-cha2ds2-va-has-bled-calcolo",
    title: "CHA2DS2-VASc, CHA2DS2-VA e HAS-BLED: come si calcolano",
    description:
      "Come si calcolano CHA2DS2-VASc e HAS-BLED, perché l'ESC nel 2024 è passata al CHA2DS2-VA e perché il rischio emorragico non serve a negare l'anticoagulante.",
    excerpt:
      "Le linee guida ESC 2024 hanno tolto il sesso dal punteggio tromboembolico e ribadito che l'HAS-BLED non serve a escludere l'anticoagulante. Il calcolo voce per voce, con gli errori più comuni.",
    date: "22 Settembre 2026",
    isoDate: "2026-09-22",
    category: "Cardiologia",
    lead: "Pochi calcoli si fanno tante volte in un ambulatorio cardiologico quanto il CHA2DS2-VASc, e pochi si sbagliano in modi così prevedibili: un'età ricopiata male, un'ipertensione contata nel punteggio sbagliato, un INR labile attribuito a chi prende un anticoagulante diretto. Nel 2024 le linee guida europee hanno anche cambiato il punteggio di riferimento. Questa è la versione aggiornata del calcolo, voce per voce, con quello che il numero dice e quello che non dice.",
    keyPoints: [
      "Il CHA2DS2-VASc va da 0 a 9 punti: scompenso, ipertensione, diabete, malattia vascolare ed età fra 65 e 74 anni valgono 1 punto; età di 75 anni o più e ictus, TIA o tromboembolia pregressi valgono 2 punti; il sesso femminile 1 punto.",
      "Le linee guida ESC 2024 sulla fibrillazione atriale adottano il CHA2DS2-VA, cioè lo stesso punteggio senza il sesso: anticoagulazione raccomandata da 2 punti in su (classe I), da considerare con 1 punto (classe IIa).",
      "L'HAS-BLED va da 0 a 9 punti e non serve a decidere se anticoagulare: serve a trovare i fattori di rischio emorragico correggibili e a rivedere più spesso chi ha 3 punti o più.",
      "Età e sesso vanno presi dall'anagrafica e i fattori di rischio dall'anamnesi: ricopiarli a mano in un calcolatore esterno è l'origine della maggior parte degli errori.",
    ],
    sections: [
      {
        title: "Dal CHA2DS2-VASc al CHA2DS2-VA: cosa è cambiato nel 2024",
        body: "Il CHA2DS2-VASc è stato proposto nel 2010 per stimare il rischio di ictus e tromboembolia nei pazienti con fibrillazione atriale non valvolare, ed è diventato in pochi anni il punteggio di riferimento. Fra le sue voci c'era il sesso femminile, che aggiungeva un punto.\n\nCon il tempo è diventato chiaro che quel punto non si comporta come gli altri. Il sesso femminile non è un fattore di rischio indipendente: pesa soprattutto in presenza di altri fattori e nelle età più avanzate, cioè in pazienti che hanno già indicazione all'anticoagulazione. Il risultato pratico era una doppia soglia, due punti per gli uomini e tre per le donne, che complicava la lettura senza cambiare le decisioni.\n\nLe linee guida ESC 2024 sulla fibrillazione atriale ne hanno tratto la conseguenza: il punteggio raccomandato è il CHA2DS2-VA, identico al precedente meno la voce sul sesso, con una soglia unica per tutti. L'anticoagulazione orale è raccomandata con un punteggio di 2 o più (classe I) e va considerata con un punteggio di 1 (classe IIa). Le stesse linee guida ammettono strumenti di rischio validati localmente, e le linee guida nordamericane del 2023 ragionano sul rischio annuale stimato con un punteggio validato, fra cui il CHA2DS2-VASc. Nella pratica i due punteggi convivono: l'importante è dichiarare quale si sta usando, perché lo stesso paziente può avere due numeri diversi.",
      },
      {
        title: "Il calcolo voce per voce",
        body: "Queste sono le voci del CHA2DS2-VA con i rispettivi punti. Il CHA2DS2-VASc è lo stesso elenco con in più il sesso femminile.\n\nScompenso cardiaco, 1 punto: segni e sintomi di scompenso qualunque sia la frazione di eiezione, oppure una disfunzione ventricolare sinistra asintomatica con frazione di eiezione pari o inferiore al 40%. Ipertensione, 1 punto: pressione ripetutamente superiore a 140/90 mmHg oppure terapia antipertensiva in corso. Età di 75 anni o più, 2 punti. Diabete mellito, 1 punto. Ictus, TIA o tromboembolia arteriosa pregressi, 2 punti. Malattia vascolare, 1 punto: infarto o coronaropatia documentata, arteriopatia periferica, placca aortica complessa. Età fra 65 e 74 anni, 1 punto. Nel CHA2DS2-VASc si aggiunge 1 punto per il sesso femminile, e il massimo passa da 8 a 9.\n\nUn esempio. Una donna di 72 anni, ipertesa in terapia e diabetica, senza altri fattori: ipertensione 1, diabete 1, età fra 65 e 74 anni 1, per un CHA2DS2-VA di 3. Con il CHA2DS2-VASc il totale sarebbe 4. Con entrambi i punteggi l'anticoagulazione è raccomandata.\n\nL'esempio in cui la differenza si vede è un altro: la stessa donna a 66 anni, senza ipertensione né diabete. Il CHA2DS2-VASc vale 2 (età e sesso), il CHA2DS2-VA vale 1. Con le regole del 2020 un 2 in una donna significava «da considerare», esattamente come oggi un 1 per chiunque. Il cambio di punteggio non sposta la decisione: toglie una regola da ricordare.",
      },
      {
        title: "HAS-BLED: un punteggio per correggere, non per escludere",
        body: "L'HAS-BLED stima il rischio di sanguinamento maggiore nel paziente anticoagulato. Le voci sono: ipertensione non controllata, con pressione sistolica sopra 160 mmHg (1 punto); funzione renale alterata e funzione epatica alterata (1 punto ciascuna); ictus pregresso (1); storia di sanguinamento o predisposizione, come un'anemia (1); INR labile, che vale solo per chi assume un antagonista della vitamina K (1); età superiore a 65 anni (1); farmaci che aumentano il rischio, come antiaggreganti o antinfiammatori, e consumo di alcol a rischio (1 punto ciascuno). Il massimo è 9, e da 3 punti in su il rischio si considera alto.\n\nL'uso sbagliato più diffuso dell'HAS-BLED è trattarlo come una controindicazione: punteggio alto, niente anticoagulante. Le linee guida ESC 2024 dicono il contrario. Il punteggio serve a due cose: individuare i fattori su cui si può intervenire, come la pressione non controllata, un INR instabile, un antinfiammatorio che si può sospendere o l'alcol, e programmare controlli più ravvicinati per chi ha un punteggio di 3 o più. Il rischio emorragico si riduce correggendo quei fattori, non togliendo la protezione dall'ictus a chi ne ha indicazione.\n\nPer questo, davanti a un HAS-BLED, conviene guardare le voci prima del totale. Un 3 fatto di età, ictus pregresso e insufficienza renale è un dato da tenere presente; un 3 in cui due punti vengono da una pressione non controllata e da un antiaggregante senza indicazione è una lista di cose da fare.",
      },
      {
        title: "Gli errori che si ripetono",
        body: "Il primo è ricopiare età e sesso. Sono gli unici dati del punteggio che non richiedono un giudizio clinico, e proprio per questo nessuno li ricontrolla: un paziente passato da 74 a 75 anni fra un controllo e l'altro guadagna un punto, e se il calcolatore lo prende da un campo scritto a mano l'anno prima quel punto non arriva. Il posto giusto da cui leggerli è l'anagrafica.\n\nIl secondo è confondere le due ipertensioni. Nel CHA2DS2-VA conta l'ipertensione come diagnosi, anche se ben controllata dalla terapia. Nell'HAS-BLED conta solo quella non controllata. Lo stesso paziente iperteso ben compensato ha un punto nel primo punteggio e zero nel secondo, e non è un'incoerenza.\n\nIl terzo è l'INR labile attribuito a chi è in terapia con un anticoagulante diretto: la voce ha senso solo con gli antagonisti della vitamina K, dove il tempo nel range terapeutico si misura.\n\nIl quarto riguarda il perimetro. I due punteggi valgono per la fibrillazione atriale non valvolare: con una protesi valvolare meccanica o una stenosi mitralica moderata o severa l'indicazione all'anticoagulazione non passa da qui. E calcolarli per un paziente che non ha mai avuto una fibrillazione atriale documentata produce un numero che non significa niente, ma che, una volta scritto in un referto, qualcuno leggerà.",
      },
      {
        title: "Cosa scrivere nel referto",
        body: "Nel referto di solito basta il totale, con l'indicazione del punteggio usato: «CHA2DS2-VA 3» dice già tutto a un collega, e le voci che lo compongono sono comunque nell'anamnesi. Scrivere CHA2DS2-VASc o CHA2DS2-VA non è un dettaglio formale, perché lo stesso paziente può avere due numeri diversi.\n\nAccanto ai punteggi conviene riportare i dati da cui dipende la scelta della dose dell'anticoagulante: età, peso, creatinina e funzione renale. Per alcuni anticoagulanti diretti la dose si decide sulla clearance della creatinina stimata con Cockcroft-Gault, non sull'eGFR: se nel referto c'è solo uno dei due valori, chi legge deve ricalcolare l'altro.\n\nInfine, la data. Il rischio tromboembolico cambia con l'età e con le nuove diagnosi, e le linee guida chiedono di rivalutarlo nel tempo. Un punteggio senza data di calcolo è un punteggio di cui non si sa se è ancora valido.",
      },
      {
        title: "Come lo gestisce un gestionale cardiologico",
        body: "Quasi tutti i dati che servono a questi punteggi sono già nella visita: età e sesso nell'anagrafica, ipertensione, diabete, scompenso e malattia vascolare fra i fattori di rischio, la creatinina fra gli esami di laboratorio. Un calcolatore separato obbliga a ricopiarli; un gestionale che li rilegge da dove stanno elimina l'errore alla radice.\n\nIn [Corioli Cardiologia](/cardiologia) il modulo della fibrillazione atriale funziona così: età e sesso arrivano dall'anagrafica e non sono caselle da spuntare, gli altri fattori dal pannello dei fattori di rischio della visita, e i due punteggi compaiono in un riquadro con la fonte accanto. Il punteggio calcolato è il CHA2DS2-VASc; quando un punto deriva solo dal sesso femminile l'applicazione lo segnala, e togliendolo si ottiene il CHA2DS2-VA. L'HAS-BLED distingue le voci su cui si può intervenire, e il software non propone né sconsiglia l'anticoagulazione: la decisione resta del medico.\n\nNel referto finisce solo il totale, accanto a peso, creatinina, età ed eGFR. E il modulo si stampa solo se il medico ha dichiarato la fibrillazione atriale: i punteggi si calcolano da età, sesso e fattori di rischio, quindi senza quell'interruttore comparirebbero su ogni referto.",
      },
    ],
    faq: [
      {
        question: "Che differenza c'è fra CHA2DS2-VASc e CHA2DS2-VA?",
        answer:
          "Il CHA2DS2-VA è il CHA2DS2-VASc senza il punto per il sesso femminile. Le linee guida ESC 2024 sulla fibrillazione atriale lo hanno adottato perché il sesso femminile non è un fattore di rischio indipendente e costringeva a usare soglie diverse per uomini e donne. Con il CHA2DS2-VA la soglia è unica: anticoagulazione raccomandata da 2 punti, da considerare con 1.",
      },
      {
        question: "Con quale punteggio si inizia l'anticoagulante nella fibrillazione atriale?",
        answer:
          "Secondo le linee guida ESC 2024, con un CHA2DS2-VA di 2 o più l'anticoagulazione orale è raccomandata, con 1 va considerata, con 0 in genere non è indicata. Il punteggio orienta la decisione ma non la sostituisce: contano anche il rischio emorragico, le preferenze del paziente e le condizioni che il punteggio non considera. Con protesi valvolari meccaniche o stenosi mitralica moderata o severa il punteggio non si applica.",
      },
      {
        question: "Un HAS-BLED alto è una controindicazione all'anticoagulante?",
        answer:
          "No. Le linee guida ESC 2024 indicano di non usare i punteggi di rischio emorragico per decidere se iniziare o sospendere l'anticoagulazione. Un HAS-BLED di 3 o più significa che il paziente va seguito più da vicino e che bisogna cercare e correggere i fattori modificabili, come pressione non controllata, farmaci non necessari, alcol o INR instabile.",
      },
      {
        question: "L'HAS-BLED si calcola anche con gli anticoagulanti diretti?",
        answer:
          "Sì, ma la voce sull'INR labile riguarda solo chi è in terapia con un antagonista della vitamina K, perché è lì che il tempo nel range terapeutico si misura. Per chi assume un anticoagulante diretto quella voce resta a zero, e il punteggio massimo raggiungibile scende di conseguenza.",
      },
      {
        question: "Ogni quanto va ricalcolato il punteggio tromboembolico?",
        answer:
          "A ogni controllo in cui cambia qualcosa che il punteggio considera: un compleanno che fa passare di fascia d'età, una nuova diagnosi di ipertensione o diabete, un evento vascolare. Le linee guida ESC 2024 chiedono una rivalutazione periodica del rischio, perché un paziente a basso rischio oggi può non esserlo fra un anno.",
      },
    ],
    sources: [
      {
        title:
          "Van Gelder IC, Rienstra M, Bunting KV, et al. 2024 ESC Guidelines for the management of atrial fibrillation developed in collaboration with EACTS. Eur Heart J. 2024;45(36):3314-3414.",
        url: "https://doi.org/10.1093/eurheartj/ehae176",
      },
      {
        title:
          "Lip GYH, Nieuwlaat R, Pisters R, Lane DA, Crijns HJGM. Refining clinical risk stratification for predicting stroke and thromboembolism in atrial fibrillation using a novel risk factor-based approach: the Euro Heart Survey on atrial fibrillation. Chest. 2010;137(2):263-272.",
      },
      {
        title:
          "Pisters R, Lane DA, Nieuwlaat R, de Vos CB, Crijns HJGM, Lip GYH. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation: the Euro Heart Survey. Chest. 2010;138(5):1093-1100.",
      },
    ],
  },
  {
    slug: "qtc-bazett-calcolo-limiti",
    title: "QTc con Bazett: come si calcola e quando non fidarsi",
    description:
      "Formula di Bazett con un esempio, soglie di QT lungo e corto, perché sopra i 100 bpm il QTc viene sovrastimato e quando conviene confrontarlo con Fridericia.",
    excerpt:
      "La correzione del QT più usata è anche quella che sbaglia di più agli estremi di frequenza. Formula, esempi numerici, soglie e cosa scrivere nel referto perché il valore sia confrontabile.",
    date: "22 Settembre 2026",
    isoDate: "2026-09-22",
    category: "Cardiologia",
    lead: "Il QT si accorcia quando il cuore accelera: per confrontarlo fra un tracciato e l'altro, o con una soglia, va corretto per la frequenza. La correzione di Bazett è la più usata da un secolo, è quella che calcolano quasi tutti gli elettrocardiografi ed è anche quella che sbaglia di più proprio dove il QT interessa di più. Qui trovi la formula con un esempio, i limiti con i numeri, le soglie e cosa scrivere nel referto.",
    keyPoints: [
      "Formula di Bazett: QTc = QT / √RR, con l'intervallo RR in secondi (RR = 60 / frequenza). Con un QT di 400 ms a 78 bpm il QTc è 456 ms.",
      "Bazett sovrastima il QTc alle frequenze alte e lo sottostima alle basse: fuori da una finestra indicativa di 50-100 bpm conviene confrontarlo con Fridericia, che usa la radice cubica dell'RR.",
      "Secondo le raccomandazioni AHA/ACCF/HRS del 2009 il QTc è prolungato sopra i 450 ms negli uomini e da 460 ms in su nelle donne, ed è corto a 390 ms o meno.",
      "Sopra i 500 ms il rischio di aritmie ventricolari, torsione di punta compresa, cresce in modo netto: è la soglia a cui si rivalutano i farmaci che allungano il QT.",
      "Un QTc nel referto è confrontabile solo se accanto ci sono QT misurato, frequenza e formula usata.",
    ],
    sections: [
      {
        title: "Perché il QT va corretto",
        body: "L'intervallo QT misura, dall'inizio del QRS alla fine dell'onda T, la durata della depolarizzazione e della ripolarizzazione ventricolare. Dipende dalla frequenza: quando il ciclo cardiaco si accorcia, si accorcia anche il QT. Un QT di 400 ms può essere normale a 60 battiti al minuto e lungo a 100.\n\nLa correzione serve a riportare il valore a quello che si avrebbe a 60 bpm, cioè con un intervallo RR di un secondo, così da confrontare due tracciati registrati a frequenze diverse o applicare una soglia unica. È una normalizzazione matematica, non una misura: e come ogni normalizzazione funziona bene vicino al punto di riferimento e peggio man mano che ci si allontana.",
      },
      {
        title: "La formula di Bazett, con un esempio",
        body: "La formula proposta da Bazett nel 1920 divide il QT per la radice quadrata dell'intervallo RR espresso in secondi: QTc = QT / √RR. Se hai la frequenza e non l'RR, lo ricavi così: RR = 60 / frequenza.\n\nUn esempio con numeri da ambulatorio: QT 400 ms, frequenza 78 bpm. L'RR è 60 / 78 = 0,769 secondi, la sua radice quadrata è 0,877, e 400 / 0,877 dà un QTc di 456 ms. In un uomo è appena sopra la soglia di prolungamento, in una donna appena sotto.\n\nDue dettagli pratici. L'RR va in secondi, non in millisecondi: con 769 al posto di 0,769 il risultato esce sbagliato di un fattore superiore a trenta. E a 60 bpm l'RR vale 1 e il QTc coincide con il QT misurato: è un buon controllo mentale per capire se un calcolatore sta facendo il conto giusto.",
      },
      {
        title: "Dove Bazett sbaglia, con i numeri",
        body: "Il limite di Bazett è noto: la radice quadrata corregge troppo quando la frequenza è alta e troppo poco quando è bassa. Si vede bene confrontandola con la formula di Fridericia, che usa la radice cubica dell'RR: QTc = QT / ∛RR.\n\nA 120 bpm, con un QT di 320 ms, Bazett dà un QTc di 453 ms, Fridericia di 403. Lo stesso tracciato è prolungato per un uomo con la prima formula e normale con la seconda: 50 ms di differenza che vengono solo dalla scelta della formula. A 48 bpm, con un QT di 460 ms, succede il contrario: Bazett dà 411 ms, Fridericia 427, e il rischio è di sottostimare un QT che si sta davvero allungando.\n\nPer questo Bazett si considera affidabile in una finestra indicativa fra 50 e 100 bpm, e fuori da lì il risultato va confrontato con Fridericia o con correzioni lineari come quella di Framingham, QT + 0,154 × (1 − RR) con i valori in secondi, o di Hodges, QT + 1,75 × (frequenza − 60) con il QT in millisecondi. Negli studi sugli effetti dei farmaci sul QT si preferisce di norma Fridericia. Nessuna formula è perfetta per tutti; quello che non va bene è usarne una senza sapere quale.",
      },
      {
        title: "Le soglie: QT lungo e QT corto",
        body: "Le raccomandazioni AHA/ACCF/HRS del 2009 per la standardizzazione dell'elettrocardiogramma definiscono prolungato un QTc superiore a 450 ms negli uomini e pari o superiore a 460 ms nelle donne, e corto un QTc pari o inferiore a 390 ms. Sono soglie per l'adulto; in età pediatrica i riferimenti sono diversi.\n\nSopra i 500 ms il rischio di aritmie ventricolari, compresa la torsione di punta, aumenta in modo netto, ed è il valore oltre il quale si rivaluta ogni farmaco che allunga il QT. Anche un aumento di 60 ms o più rispetto al valore di base dopo l'introduzione di un farmaco è un segnale da non ignorare, a prescindere dal valore assoluto.\n\nUna soglia però è solo una riga. Un QTc di 452 ms in un uomo è formalmente prolungato con Bazett, ma se la frequenza è 105 bpm lo stesso tracciato può risultare normale con Fridericia. La soglia va letta insieme alla formula e alla frequenza.",
      },
      {
        title: "Misurare bene prima di correggere",
        body: "La correzione non ripara una misura sbagliata. Il QT si misura dall'inizio del QRS alla fine dell'onda T, nella derivazione in cui è più lungo, spesso la II o le precordiali V2-V3, e la fine della T si individua di solito con il metodo della tangente, tracciata sulla parte discendente dell'onda fino alla linea di base. L'onda U, quando è distinta dalla T, non va inclusa.\n\nAlcune situazioni rendono il valore meno affidabile a prescindere dalla formula. Con un ritmo irregolare, come nella fibrillazione atriale, RR e QT cambiano da un battito all'altro: si misurano su più battiti e si usa un valore medio, sapendo che il risultato resta approssimativo. Con un QRS allargato, per esempio in un blocco di branca, una parte del QT è occupata dalla depolarizzazione e il QTc risulta allungato senza che lo sia la ripolarizzazione; in quei casi si guarda anche l'intervallo JT.\n\nInfine, il valore dell'elettrocardiografo. La misura automatica è un buon punto di partenza ma va verificata, e la formula usata dall'apparecchio non è sempre Bazett: se il QTc stampato sul tracciato non coincide con il tuo, la prima cosa da controllare è quale correzione ha applicato.",
      },
      {
        title: "Cosa scrivere nel referto",
        body: "Un QTc scritto da solo non è confrontabile con quello del controllo successivo, soprattutto se nel frattempo è cambiata la frequenza. Nel referto conviene riportare il QT misurato, la frequenza cardiaca, la formula usata e il QTc risultante: quattro numeri, una riga.\n\nIn [Corioli Cardiologia](/cardiologia) il modulo ECG ha campi separati per PR, QRS, QT e asse; il QTc secondo Bazett si calcola mentre si compila, con la formula indicata accanto al risultato e un avviso quando la frequenza è fuori dalla finestra 50-100 bpm. Nel referto l'elettrocardiogramma esce come tabella, e il QTc è in grassetto solo se è fuori dai limiti: nessun giudizio scritto accanto, perché a leggere il foglio è un medico.",
      },
    ],
    faq: [
      {
        question: "Qual è la formula del QTc di Bazett?",
        answer:
          "QTc = QT / √RR, con il QT in millisecondi e l'intervallo RR in secondi. L'RR si ricava dalla frequenza: RR = 60 / frequenza. Per esempio, con un QT di 400 ms a 78 bpm l'RR è 0,769 secondi e il QTc risulta 456 ms.",
      },
      {
        question: "Quale formula usare quando la frequenza è alta?",
        answer:
          "Sopra i 100 bpm Bazett tende a sovrastimare il QTc. Conviene confrontarlo con Fridericia, che divide il QT per la radice cubica dell'RR e risente meno della frequenza: a 120 bpm, con un QT di 320 ms, Bazett dà 453 ms e Fridericia 403. Negli studi sugli effetti dei farmaci sul QT Fridericia è la correzione preferita.",
      },
      {
        question: "Qual è il valore normale del QTc?",
        answer:
          "Nell'adulto, secondo le raccomandazioni AHA/ACCF/HRS del 2009, il QTc è prolungato sopra i 450 ms negli uomini e da 460 ms in su nelle donne, ed è corto a 390 ms o meno. Oltre i 500 ms il rischio di aritmie ventricolari aumenta in modo netto. I valori vanno letti sapendo con quale formula il QTc è stato calcolato.",
      },
      {
        question: "Si può calcolare il QTc in fibrillazione atriale?",
        answer:
          "Sì, con cautela. Con un ritmo irregolare QT e RR cambiano da un battito all'altro: si misurano su più battiti consecutivi e si usa un valore medio. Il risultato è meno affidabile che in ritmo sinusale, e con Bazett l'errore cresce se la frequenza media è alta.",
      },
      {
        question: "Perché il QTc dell'elettrocardiografo è diverso dal mio?",
        answer:
          "Le cause più comuni sono due: l'apparecchio misura il QT in automatico, con un algoritmo che può individuare la fine dell'onda T in un punto diverso, e non sempre usa la formula di Bazett. Prima di confrontare i valori conviene verificare la misura del QT sul tracciato e controllare quale correzione ha applicato l'elettrocardiografo.",
      },
    ],
    sources: [
      {
        title:
          "Rautaharju PM, Surawicz B, Gettes LS. AHA/ACCF/HRS Recommendations for the Standardization and Interpretation of the Electrocardiogram. Part IV: the ST segment, T and U waves, and the QT interval. Circulation. 2009;119(10):e241-e250.",
        url: "https://www.ahajournals.org/doi/10.1161/circulationaha.108.191096",
      },
      {
        title:
          "Drew BJ, Ackerman MJ, Funk M, et al. Prevention of torsade de pointes in hospital settings: a scientific statement from the American Heart Association and the American College of Cardiology Foundation. Circulation. 2010;121(8):1047-1060.",
      },
      {
        title:
          "Bazett HC. An analysis of the time-relations of electrocardiograms. Heart. 1920;7:353-370.",
      },
      {
        title:
          "Fridericia LS. Die Systolendauer im Elektrokardiogramm bei normalen Menschen und bei Herzkranken. Acta Med Scand. 1920;53:469-486.",
      },
      {
        title:
          "Sagie A, Larson MG, Goldberg RJ, Bengtson JR, Levy D. An improved method for adjusting the QT interval for heart rate (the Framingham Heart Study). Am J Cardiol. 1992;70(7):797-801.",
      },
    ],
  },
  {
    slug: "flussimetria-arteria-ombelicale-pi-percentili",
    title: "Flussimetria dell'arteria ombelicale: PI, IR e percentili",
    description:
      "Flussimetria ombelicale: come si misurano PI e IR, come si legge il percentile per epoca gestazionale e cosa significa un flusso diastolico assente.",
    excerpt:
      "Il PI ombelicale non ha una soglia fissa: scende con l'epoca gestazionale e va letto come percentile. Formule, esecuzione della misura, curve FMF e ruolo nella restrizione di crescita.",
    date: "22 Settembre 2026",
    isoDate: "2026-09-22",
    category: "Ostetricia",
    lead: "La flussimetria dell'arteria ombelicale è uno degli esami Doppler più eseguiti in ostetricia, e uno di quelli che più spesso finiscono nel referto come un numero senza contesto. Un indice di pulsatilità di 1,05 può essere perfettamente atteso o meritare attenzione: dipende dalla settimana di gestazione. Qui trovi le formule, come si esegue la misura, come si legge il percentile e perché questo esame pesa nella diagnosi di restrizione di crescita.",
    keyPoints: [
      "L'indice di pulsatilità (PI) è la differenza fra velocità sistolica e diastolica divisa per la velocità media; l'indice di resistenza (IR) è la stessa differenza divisa per la velocità sistolica.",
      "Entrambi diminuiscono con l'avanzare della gravidanza: nelle curve della Fetal Medicine Foundation il PI mediano scende da circa 1,22 a 20 settimane a circa 0,80 a 40, quindi il valore va letto come percentile per l'epoca gestazionale.",
      "Un PI sopra il 95° percentile indica resistenze placentari aumentate; un flusso diastolico assente o invertito è il reperto più grave.",
      "Il PI ombelicale entra nella definizione di consenso della restrizione di crescita fetale e nel rapporto cerebro-placentare, che lo confronta con il PI dell'arteria cerebrale media.",
    ],
    sections: [
      {
        title: "Che cosa misura",
        body: "Il Doppler dell'arteria ombelicale descrive la resistenza che il sangue fetale incontra nella circolazione placentare. In una gravidanza normale, man mano che la placenta matura e il suo letto vascolare si sviluppa, le resistenze diminuiscono: il flusso durante la diastole aumenta e gli indici calano.\n\nQuando la placenta funziona male, per un'alterazione della sua vascolarizzazione come accade tipicamente nelle forme precoci di restrizione di crescita, le resistenze restano alte o aumentano. Il primo segno è un indice sopra i valori attesi per l'epoca; nelle forme più gravi il flusso in diastole si riduce fino ad annullarsi o a invertirsi.",
      },
      {
        title: "Le formule: PI, IR e rapporto S/D",
        body: "Dall'onda di velocità si leggono tre valori: la velocità sistolica di picco (S), la velocità telediastolica (D) e la velocità media nel ciclo. Con questi si calcolano gli indici.\n\nL'indice di pulsatilità è PI = (S − D) / velocità media. L'indice di resistenza è IR = (S − D) / S. Il rapporto S/D, ancora diffuso, divide semplicemente la velocità sistolica per quella diastolica.\n\nIl PI è il più usato per una ragione pratica: resta informativo anche quando il flusso diastolico è assente. Con D uguale a zero l'IR vale 1 in ogni caso e il rapporto S/D non è definito, mentre il PI continua a distinguere un'onda dall'altra. Per questo le curve di riferimento più recenti e le definizioni di consenso sono espresse in PI.",
      },
      {
        title: "Come si esegue la misura",
        body: "La misura si esegue su un'ansa libera del funicolo, a feto fermo e senza movimenti respiratori, con un angolo di insonazione il più possibile vicino a zero. Si registra una sequenza di onde regolari e simili fra loro, di norma da tre a dieci, e gli indici si calcolano sulla loro media.\n\nIl punto di campionamento conta: vicino all'inserzione fetale del funicolo gli indici sono più alti che vicino a quella placentare, e le curve di riferimento sono costruite su una sede precisa. Riportare dove è stata fatta la misura non è un eccesso di zelo: è ciò che rende il valore confrontabile con quello dell'ecografia successiva.",
      },
      {
        title: "Leggere il valore: percentili, non soglie",
        body: "Siccome gli indici scendono con l'epoca gestazionale, un valore isolato non dice nulla senza la settimana. Le curve più utilizzate oggi sono quelle della Fetal Medicine Foundation, pubblicate nel 2019 su oltre 72.000 gravidanze: il PI mediano passa da circa 1,22 a 20 settimane a circa 1,01 a 30 e a circa 0,80 a 40.\n\nUn esempio: a 28+5 settimane un PI di 1,05 cade poco sopra il 50° percentile, cioè dove ci si aspetta. Lo stesso 1,05 a 38 settimane sarebbe intorno al 90°. Per questo il referto dovrebbe riportare il percentile, o almeno l'epoca gestazionale accanto al valore.\n\nIl riferimento è il 95° percentile: un PI oltre questa soglia indica resistenze aumentate. Vale però la pena sapere che le curve non sono standardizzate: le linee guida ISUOG del 2020 segnalano che, fra i lavori più citati, il valore soglia del 95° percentile del PI ombelicale varia del 20-40%. È un altro motivo per dichiarare nel referto quali curve si stanno usando. Poi ci sono i quadri qualitativi, che contano più di qualunque percentile: il flusso diastolico assente e quello invertito sono i segni più gravi di compromissione placentare e cambiano da soli la gestione della gravidanza.",
      },
      {
        title: "Il ruolo nella restrizione di crescita fetale",
        body: "La definizione di consenso della restrizione di crescita fetale, pubblicata nel 2016 con un processo Delphi, usa il Doppler ombelicale in entrambe le forme.\n\nNella forma precoce, prima delle 32 settimane, basta da solo un flusso diastolico assente nell'arteria ombelicale, oppure una circonferenza addominale o un peso stimato sotto il 3° percentile; in alternativa, circonferenza addominale o peso stimato sotto il 10° percentile associati a un PI ombelicale oltre il 95° o a un PI delle arterie uterine oltre il 95°. Nella forma tardiva, dalle 32 settimane in poi, il criterio Doppler è un PI ombelicale oltre il 95° percentile oppure un rapporto cerebro-placentare sotto il 5°, da associare ad almeno un altro criterio di crescita (peso o circonferenza addominale sotto il 10° percentile, oppure un attraversamento dei canali di crescita superiore a due quartili).\n\nIl rapporto cerebro-placentare divide il PI dell'arteria cerebrale media per quello ombelicale. Quando la placenta non basta, il feto ridistribuisce il flusso verso il cervello: le resistenze cerebrali scendono, quelle placentari salgono, e il rapporto cala. È spesso il primo segno nelle forme tardive, in cui il Doppler ombelicale può restare nei limiti fino a ridosso del termine.",
      },
      {
        title: "Cosa scrivere nel referto",
        body: "Un referto di flussimetria ombelicale completo dice dove è stata fatta la misura, riporta il PI e, se lo si usa, l'IR con il percentile per l'epoca gestazionale, e descrive il flusso diastolico: presente, ridotto, assente o invertito. Se sono state misurate anche l'arteria cerebrale media o le arterie uterine, i loro valori e il rapporto cerebro-placentare vanno accanto, con le curve di riferimento usate.\n\nIn [Corioli](/ginecologia) la flussimetria del cordone ombelicale è un blocco della visita ostetrica: inserisci PI e IR, e l'applicazione mostra il percentile per l'epoca gestazionale con una barra grafica fra il 5° e il 95°. Per il PI le curve sono quelle della Fetal Medicine Foundation. L'arteria cerebrale media e il rapporto cerebro-placentare, oggi, si descrivono nel testo del referto con i modelli: non hanno un calcolatore dedicato.",
      },
    ],
    faq: [
      {
        question: "Qual è il valore normale del PI dell'arteria ombelicale?",
        answer:
          "Non esiste un valore normale unico, perché il PI diminuisce con l'epoca gestazionale. Nelle curve della Fetal Medicine Foundation il PI mediano è circa 1,22 a 20 settimane, 1,01 a 30 e 0,80 a 40. Un valore si considera nella norma fra il 5° e il 95° percentile per la settimana in cui è misurato.",
      },
      {
        question: "Che differenza c'è fra indice di pulsatilità e indice di resistenza?",
        answer:
          "Entrambi partono dalla differenza fra velocità sistolica e diastolica: il PI la divide per la velocità media, l'IR per la velocità sistolica. Il PI è preferito perché resta informativo anche quando il flusso diastolico è assente, mentre in quel caso l'IR vale sempre 1.",
      },
      {
        question: "Cosa significa flusso diastolico assente nell'arteria ombelicale?",
        answer:
          "Significa che alla fine della diastole il sangue nell'arteria ombelicale smette di scorrere verso la placenta, perché le resistenze placentari sono molto aumentate. Insieme al flusso invertito è il reperto Doppler ombelicale più grave e, prima delle 32 settimane, basta da solo a definire una restrizione di crescita fetale precoce secondo il consenso Delphi del 2016.",
      },
      {
        question: "Che cos'è il rapporto cerebro-placentare?",
        answer:
          "È il PI dell'arteria cerebrale media diviso per il PI dell'arteria ombelicale. Un valore sotto il 5° percentile indica una ridistribuzione del flusso verso il cervello fetale ed è uno dei criteri della restrizione di crescita tardiva, dopo le 32 settimane.",
      },
      {
        question: "La misura va fatta vicino al feto o alla placenta?",
        answer:
          "Di norma su un'ansa libera del funicolo. Gli indici sono più alti vicino all'inserzione fetale e più bassi vicino a quella placentare, quindi la sede va indicata nel referto e deve essere coerente con quella delle curve di riferimento usate.",
      },
    ],
    sources: [
      {
        title:
          "Ciobanu A, Wright A, Syngelaki A, Wright D, Akolekar R, Nicolaides KH. Fetal Medicine Foundation reference ranges for umbilical artery and middle cerebral artery pulsatility index and cerebroplacental ratio. Ultrasound Obstet Gynecol. 2019;53(4):465-472.",
        url: "https://doi.org/10.1002/uog.20157",
      },
      {
        title:
          "Gordijn SJ, Beune IM, Thilaganathan B, et al. Consensus definition of fetal growth restriction: a Delphi procedure. Ultrasound Obstet Gynecol. 2016;48(3):333-339.",
        url: "https://doi.org/10.1002/uog.15884",
      },
      {
        title:
          "Lees CC, Stampalija T, Baschat AA, et al. ISUOG Practice Guidelines: diagnosis and management of small-for-gestational-age fetus and fetal growth restriction. Ultrasound Obstet Gynecol. 2020;56(2):298-312.",
        url: "https://doi.org/10.1002/uog.22134",
      },
    ],
  },
  {
    slug: "gestionale-medico-locale-o-cloud",
    title: "Gestionale medico locale o in cloud: come scegliere",
    description:
      "Gestionale medico installato in studio o in cloud: cosa cambia per GDPR e DPA, backup, accesso da più sedi, lavoro senza internet e uscita dal fornitore.",
    excerpt:
      "Non è una scelta fra moderno e antiquato: sono due architetture con rischi diversi, gestiti da persone diverse. Le differenze che contano e le cinque domande per decidere.",
    date: "22 Settembre 2026",
    isoDate: "2026-09-22",
    category: "Guide",
    lead: "Quando si sceglie un gestionale medico, la domanda «cloud o locale?» arriva di solito tardi, dopo le funzionalità e il prezzo, e viene liquidata con uno slogan: il cloud è moderno, il locale è sicuro, o viceversa. In realtà è la scelta che decide chi custodisce i dati sanitari dei tuoi pazienti, chi risponde se qualcosa va storto e cosa succede il giorno in cui vorrai cambiare software. Vale la pena farla per prima, e con le informazioni giuste.",
    keyPoints: [
      "Con un gestionale in cloud l'archivio sta sui server del fornitore, che tratta i dati per tuo conto: è responsabile del trattamento e serve un accordo scritto ai sensi dell'articolo 28 del GDPR.",
      "Con un gestionale installato in studio l'archivio sta sul tuo computer o sulla rete dello studio: per l'uso ordinario non c'è un responsabile esterno, ma backup e sicurezza della macchina sono interamente a tuo carico.",
      "Il cloud conviene a chi lavora su più sedi o più dispositivi; l'installazione locale a chi lavora in uno studio, vuole il controllo diretto dei dati e non vuole dipendere dalla connessione.",
      "In entrambi i casi il medico resta titolare del trattamento: nessuna architettura rende conforme al GDPR da sola.",
      "Prima di firmare, chiedi sempre come si esportano tutti i dati e in che formato.",
    ],
    sections: [
      {
        title: "Due architetture, non due livelli di qualità",
        body: "Un gestionale in cloud, o SaaS, è un'applicazione a cui accedi dal browser o da un'app: il programma e l'archivio stanno sui server del fornitore, e il tuo computer serve a visualizzarli. Un gestionale installato in studio è un programma che gira sul tuo computer e salva l'archivio lì, o su un server nella rete dello studio.\n\nEntrambi possono essere ben fatti o mal fatti, sicuri o insicuri, costosi o economici. Quello che cambia davvero è la posizione dei dati, e da quella discendono tre cose: chi ha la responsabilità di proteggerli, cosa succede quando manca la connessione e quanto è facile portarli via. Sono queste tre cose da valutare, non l'etichetta.",
      },
      {
        title: "Cosa cambia per il GDPR",
        body: "I dati sanitari sono categorie particolari di dati ai sensi dell'articolo 9 del GDPR. Il medico o la struttura che li raccoglie è titolare del trattamento in entrambi i casi: decide finalità e mezzi e deve adottare misure di sicurezza adeguate, come chiede l'articolo 32. Nessun software sposta questa responsabilità.\n\nCon il cloud si aggiunge un soggetto. Il fornitore conserva e gestisce i dati per tuo conto, quindi è responsabile del trattamento: serve un contratto o un atto che lo nomini tale, con i contenuti previsti dall'articolo 28. Vanno verificati anche gli eventuali sub-responsabili, per esempio il provider dell'infrastruttura su cui il fornitore appoggia il servizio, e dove stanno fisicamente i server: se i dati escono dallo Spazio economico europeo si applicano le regole sui trasferimenti del capo V del regolamento.\n\nCon l'installazione locale, per l'uso ordinario, quel soggetto non c'è: il fornitore consegna il programma ma non vede i dati. Con un'eccezione da tenere presente: se il fornitore accede al tuo computer per un'assistenza remota e in quel momento può vedere l'archivio, sta trattando dati per tuo conto, e quella situazione va regolata.",
      },
      {
        title: "Backup e continuità: chi fa cosa",
        body: "Nel cloud il backup è compito del fornitore, ed è uno dei vantaggi reali di questa architettura. Ma «il fornitore fa il backup» non basta come risposta: conviene chiedere ogni quanto, dove sono conservate le copie, in quanto tempo si ripristina un archivio e se puoi ottenere tu stesso una copia completa dei tuoi dati.\n\nIn locale il backup è compito tuo, e non è un dettaglio. Un buon gestionale installato fa copie automatiche, ma se stanno sullo stesso disco del programma proteggono da un errore o da un file danneggiato, non da un guasto del computer, da un furto o da un ransomware. Per quelli serve una copia fuori dalla macchina, e meglio ancora una fuori dallo studio: è la regola 3-2-1, tre copie, su due supporti diversi, una delle quali altrove.\n\nIn entrambi i casi la domanda da farsi è la stessa: se domani mattina il computer non si accende, o il servizio non risponde, quanto tempo passa prima di poter tornare a lavorare con lo storico dei pazienti?",
      },
      {
        title: "Sedi, dispositivi e connessione",
        body: "Il cloud dà il meglio quando si lavora in più posti: due studi, un poliambulatorio, visite a domicilio, un collaboratore che deve vedere le stesse cartelle da un altro computer. Tutti vedono lo stesso archivio aggiornato, senza configurare nulla.\n\nL'installazione locale dà il meglio quando si lavora in uno studio e la connessione non è garantita, o non si vuole che il lavoro clinico ne dipenda: visite, calcoli e referti funzionano anche se la linea cade. Usarla su più sedi è possibile, ma richiede una rete configurata o archivi separati, ed è un lavoro che nel cloud non c'è.\n\nConta anche il dispositivo. Molti gestionali in cloud si usano da tablet e telefono; quelli installati di solito richiedono un computer. Se in visita lavori con il portatile sulla scrivania è una differenza che non pesa; se ti sposti fra più ambulatori con un tablet, pesa molto.",
      },
      {
        title: "Costi e uscita dal fornitore",
        body: "I modelli di prezzo oggi si somigliano: quasi tutti sono in abbonamento, in cloud come in locale. Le differenze stanno altrove. Nel cloud il canone cresce spesso con il numero di utenti o di sedi, e i moduli aggiuntivi possono cambiare molto il costo su tre anni. In locale va messo in conto l'hardware, cioè un computer affidabile e un disco esterno o un NAS per i backup, e il tempo, tuo o di un tecnico, per occuparsene.\n\nIl costo che si dimentica è quello di uscita. Un giorno potresti voler cambiare software, e quel giorno conterà una cosa sola: poter esportare tutto, anagrafiche, visite, referti e allegati, in un formato leggibile. Nel cloud i dati stanno sui server del fornitore e l'esportazione dipende da quello che il servizio prevede; in locale il file è sul tuo computer, ma resta da capire se un altro programma è in grado di leggerlo. In entrambi i casi è una domanda da fare prima di firmare, non dopo.",
      },
      {
        title: "Le cinque domande per decidere",
        body: "Dove stanno fisicamente i dati dei miei pazienti, e chi può accedervi? Se è un servizio in cloud, esiste un accordo di nomina a responsabile del trattamento e dove sono i server? Chi fa il backup, dove sono le copie e quanto tempo serve per ripristinare l'archivio? Posso lavorare quando la connessione non c'è, e mi serve farlo? Come esporto tutti i miei dati, in che formato, e quanto costa farlo?\n\nNon c'è una risposta giusta per tutti. Un poliambulatorio con più medici e più sedi ha buone ragioni per scegliere il cloud; uno specialista che lavora nel suo studio e vuole tenere l'archivio sotto controllo diretto ha buone ragioni per l'installazione locale. Quello che conta è scegliere sapendo quali rischi si prendono e chi li gestisce.",
      },
      {
        title: "Dove si colloca Corioli",
        body: "[Corioli](/download) è un gestionale medico installato: un'applicazione desktop per Windows e macOS che salva l'archivio sul computer dello studio. Le cartelle cliniche non vengono trasmesse ai nostri server e non vi accediamo; verso di noi vanno solo i dati della licenza e i messaggi che scrivi in chat all'assistenza. Per l'uso ordinario non serve un accordo di nomina a responsabile del trattamento.\n\nIl rovescio, detto chiaramente: l'applicazione fa copie automatiche ogni giorno e prima di ogni importazione o ripristino, ma stanno sullo stesso disco, e la copia fuori dal computer, da esportare dalle impostazioni, resta compito dello studio. E non c'è una sincronizzazione automatica fra computer diversi: se lavori su più sedi con lo stesso archivio, oggi Corioli non è lo strumento giusto.",
      },
    ],
    faq: [
      {
        question: "Un gestionale medico in cloud è conforme al GDPR?",
        answer:
          "Un software non è conforme o non conforme da solo: la conformità riguarda il trattamento, di cui il medico resta titolare. Un gestionale in cloud può essere usato in modo conforme se il fornitore è nominato responsabile del trattamento con un accordo ai sensi dell'articolo 28, se le misure di sicurezza sono adeguate e se gli eventuali trasferimenti di dati fuori dallo Spazio economico europeo rispettano le regole del regolamento.",
      },
      {
        question: "Con un gestionale installato in studio serve il DPA con il fornitore?",
        answer:
          "Per l'uso ordinario no, perché il fornitore non tratta i dati dei pazienti: l'archivio resta sul computer dello studio. Se però il fornitore accede al computer per un'assistenza remota e può vedere i dati, in quella situazione li tratta per conto del medico, e il rapporto va regolato.",
      },
      {
        question: "Il cloud è più sicuro del computer dello studio?",
        answer:
          "Dipende da chi gestisce cosa. Un buon fornitore cloud ha misure di sicurezza e backup professionali, ma concentra i dati di molti studi in un unico punto e aggiunge un soggetto nella catena. Un computer dello studio ben gestito, con backup fuori sede e aggiornamenti regolari, può essere molto sicuro; uno trascurato no. La sicurezza dipende dalle misure, non dall'etichetta.",
      },
      {
        question: "Posso usare un gestionale installato su più computer?",
        answer:
          "Sì, ma richiede di mettere l'archivio in rete o di lavorare con archivi separati. Se più medici o più sedi devono vedere lo stesso archivio in tempo reale, un gestionale in cloud è di solito la soluzione più semplice.",
      },
      {
        question: "Cosa succede ai miei dati se il fornitore chiude?",
        answer:
          "Con un gestionale installato l'archivio resta sul tuo computer, ma serve un modo per leggerlo o esportarlo senza il programma. Con un servizio in cloud i dati stanno sui server del fornitore: il contratto dovrebbe prevederne la restituzione in un formato leggibile e la successiva cancellazione. In entrambi i casi conviene verificarlo prima di iniziare.",
      },
    ],
    sources: [
      {
        title:
          "Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio (GDPR), in particolare articoli 9, 28 e 32 e capo V.",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
      {
        title:
          "European Data Protection Board. Linee guida 07/2020 sui concetti di titolare del trattamento e di responsabile del trattamento ai sensi del GDPR, versione 2.0, 2021.",
      },
    ],
  },
  {
    slug: "gestionale-per-cardiologi-cosa-cercare",
    title: "Gestionale per cardiologi: cosa deve saper fare davvero",
    description:
      "ECG, ecocardiogramma, calcium score, QTc, eGFR, CHA2DS2-VASc: cosa distingue un software per l'ambulatorio cardiologico da un gestionale generico.",
    excerpt:
      "Un gestionale cardiologico non si giudica dall'archivio pazienti, ma da come si comporta quando devi refertare un ECG e un eco in dieci minuti. Ecco i criteri che contano.",
    date: "7 Settembre 2026",
    isoDate: "2026-09-07",
    updated: "21 Ottobre 2026",
    updatedIso: "2026-10-21",
    category: "Cardiologia",
    lead: "La domanda con cui inizia quasi ogni valutazione di un gestionale è sbagliata. Non è «dove archivio i pazienti»: quello lo fa qualsiasi software, compreso un elenco di cartelle su Windows. La domanda utile è un'altra — quando ho davanti una persona, un tracciato ECG e un ecocardiografo, quanto tempo passa fra l'ultima misura e un referto pronto da consegnare? È lì che i gestionali generici si vedono, ed è lì che si decide se lo strumento ti fa risparmiare mezz'ora al giorno o te la fa perdere.",
    keyPoints: [
      "Un gestionale cardiologico si riconosce dalle misure strutturate: ECG, ecocardiogramma e TC coronarica devono essere campi con unità di misura, non testo libero, altrimenti non si possono confrontare fra un controllo e l'altro.",
      "I calcoli (QTc, eGFR con CKD-EPI, LDL secondo Friedewald, CHA2DS2-VASc, HAS-BLED) vanno fatti dentro la visita, a partire dai dati già inseriti, con la formula e i limiti di applicabilità indicati accanto al risultato.",
      "Gli indici devono restare suggerimenti: un software che li scrive da solo nelle conclusioni del referto fa un'interpretazione che spetta al medico.",
      "Prima di scegliere conviene guardare un PDF reale prodotto dal software, chiedere dove sono archiviati i dati e come si esportano.",
    ],
    sections: [
      {
        title: "Il referto cardiologico è scarno per scelta, non per pigrizia",
        body: "Chi arriva alla cardiologia da altre branche fa fatica a crederci, ma è una caratteristica del mestiere: i referti cardiologici sono volutamente essenziali. In un ambulatorio con visite ravvicinate — a maggior ragione in convenzione — il referto deve dire l'indispensabile e dirlo in fretta. Il medico che lo riceve, spesso il curante o un collega, cerca tre cose: i numeri degli esami strumentali, la conclusione e la terapia.\n\nQuesto ha una conseguenza pratica che quasi nessun software generico rispetta. Un gestionale che ti obbliga a compilare venti campi per stampare mezza pagina non è più accurato: è più lento. Al contrario, un gestionale che lascia tutto a testo libero ti fa risparmiare due minuti in scrittura e te ne fa perdere dieci sei mesi dopo, quando vuoi sapere com'era la frazione di eiezione al controllo precedente e devi riaprire il PDF di allora.\n\nIl punto di equilibrio è un altro: pochi campi, ma strutturati dove serve. Le misure sono dati, la conclusione è prosa. Chi progetta il software deve sapere quali sono le une e quali le altre.",
      },
      {
        title: "Misure strutturate: la differenza pratica",
        body: "Prendi un ecocardiogramma transtoracico. Le misure che finiscono nel referto sono sempre quelle: DTD e DTS, setto interventricolare, parete posteriore, frazione di eiezione, atrio sinistro, gradienti transvalvolari, radice aortica, aorta ascendente, TAPSE, PAPs, rapporto E/A. Sono una dozzina di numeri con la loro unità di misura e il loro intervallo di normalità.\n\nSe quei numeri vivono dentro una frase — «FE 58%, AS 38 mm, TAPSE 21 mm» — sono testo. Il software non sa che 58 è una percentuale, non sa che quel valore ha un significato clinico, non può dirti come è cambiato dal controllo dell'anno scorso e non può metterlo in una tabella leggibile nel PDF. Se invece ogni misura è un campo, tutto questo diventa possibile senza che tu faccia nulla di diverso mentre scrivi.\n\nVale lo stesso per l'elettrocardiogramma — PR, QRS, QT, asse — e per la TC coronarica, dove il calcium score, la fascia Agatston e il CAD-RADS sono classificazioni codificate, non aggettivi. La domanda da fare a chi ti vende un gestionale è secca: questi sono campi o è un editor di testo con un titolo sopra?",
      },
      {
        title: "I calcoli devono stare dove sta il dato",
        body: "Il QTc si calcola dal QT e dalla frequenza. L'eGFR dalla creatinina, dall'età e dal sesso. L'LDL secondo Friedewald da colesterolo totale, HDL e trigliceridi. Il CHA2DS2-VASc da una lista di fattori di rischio che hai già raccolto in anamnesi. Sono tutti calcoli che il software ha davanti agli occhi nel momento in cui compili la visita.\n\nEppure la routine più diffusa è ancora: apro il browser, cerco un calcolatore, ricopio i valori, leggo il risultato, torno nel referto e lo trascrivo. Quattro passaggi manuali, ognuno dei quali può sbagliarsi, e alla fine nessuno di quei calcoli resta agganciato alla visita: se fra un anno ti chiedi con che creatinina avevi stimato quel filtrato, la risposta non è da nessuna parte.\n\nUn gestionale cardiologico serio calcola in linea, mentre scrivi, e conserva sia il risultato sia i valori da cui è nato. Non è una comodità: è la differenza fra un numero verificabile e un numero di cui ti devi fidare a memoria.",
      },
      {
        title: "Un calcolatore che non dice da dove viene il numero non è utile",
        body: "Qui viene la parte che di solito nelle brochure non c'è. Ogni formula clinica ha una fonte, e ha dei limiti di applicabilità. La Friedewald non vale con trigliceridi ≥ 400 mg/dL. Il QTc secondo Bazett diventa inaffidabile fuori dalla finestra 50-100 bpm. L'HOMA-IR ha senso solo su un prelievo a digiuno. Il CKD-EPI 2021 esiste in versione con e senza coefficiente etnico, e la scelta non è indifferente.\n\nUn software che ti mostra un numero e basta ti sta nascondendo tutto questo. Quello che dovresti pretendere è che accanto a ogni indice ci sia la formula usata e, quando esiste, il limite applicato — e che il valore resti un suggerimento in un riquadro a parte, senza finire scritto in automatico dentro il referto. L'interpretazione è un atto medico e deve restare tua: se il software compila da solo le conclusioni, il giorno in cui sbaglia lo firmi tu.\n\nC'è anche un corollario scomodo, ed è il modo migliore per capire chi hai davanti: chiedi cosa succede quando i coefficienti di uno score non sono verificabili. La risposta onesta è disattivare il calcolo e dire perché. È esattamente la scelta che abbiamo fatto in Corioli con lo SCORE2: la pipeline è implementata e coperta da test, ma i coefficienti pubblicati stanno solo nel materiale supplementare della linea guida e non è stato possibile riscontrarli sulla fonte primaria. L'applicazione mostra il motivo invece di un numero di rischio potenzialmente sbagliato. Un fornitore che invece ti restituisce sempre un risultato, qualunque cosa succeda, ti sta dicendo qualcosa su come tratta il resto.",
      },
      {
        title: "Il referto è anche il modo in cui il tuo lavoro viene visto",
        body: "C'è una funzione del referto cardiologico che si sottovaluta sempre: è il documento che esce dallo studio. Lo legge il paziente, lo legge il medico curante, spesso finisce in mano a un collega di un'altra struttura. È il pezzo di lavoro tuo che circola.\n\nDa qui discende un criterio molto concreto per valutare un gestionale: guarda il PDF che produce, non l'interfaccia che ti mostrano in demo. Con una decina di sezioni e una dozzina di misure per ogni esame strumentale, una riga continua di valori separati da punti diventa illeggibile in A4. Le misure vogliono stare in tabella, e ogni esame vuole la sua intestazione ben visibile: chi legge deve trovare l'ecocardiogramma a colpo d'occhio, senza scorrere la pagina alla ricerca di una parola in grassetto.\n\nSono dettagli tipografici, e sembrano secondari rispetto alla clinica. Ma sono la ragione per cui un referto viene letto fino in fondo o scorso di sfuggita.",
      },
      {
        title: "Dove finiscono i dati, e chi risponde se succede qualcosa",
        body: "Un gestionale cardiologico gestisce dati sanitari, che il GDPR colloca fra le categorie particolari dell'articolo 9. La domanda «dove sono archiviati» non è un dettaglio tecnico, perché cambia chi fa cosa nella catena delle responsabilità.\n\nCon una soluzione cloud, il fornitore tratta i dati per tuo conto: sei titolare del trattamento, lui è responsabile esterno, e serve un accordo scritto ai sensi dell'articolo 28. Vanno verificati dove stanno i server, chi può accedervi, cosa succede ai dati se chiudi il contratto o se il fornitore chiude l'attività. Sono domande legittime, e un fornitore serio ha le risposte pronte per iscritto.\n\nCon un'applicazione desktop ad archivio locale la catena si accorcia: i dati stanno sul computer dello studio, il fornitore non vi accede e non esiste un responsabile esterno del trattamento da nominare per l'uso ordinario. In cambio, il backup diventa interamente responsabilità tua — che è un onere reale, non una nota a piè di pagina. Nessuna delle due architetture è giusta in assoluto: cambiano i rischi e cambia chi li gestisce. Quello che non va bene è sceglierla senza sapere quale delle due si sta comprando.",
      },
      {
        title: "Le domande da fare prima di decidere",
        body: "Se devi valutare un gestionale per il tuo ambulatorio cardiologico, questa è la lista che vale più di qualsiasi confronto di funzionalità sul sito del fornitore.\n\nLe misure di ECG, ecocardiogramma e TC coronarica sono campi strutturati o testo libero? I calcoli — QTc, eGFR, LDL, CHA2DS2-VASc, HAS-BLED — stanno dentro la visita o vanno fatti altrove? Accanto a ogni indice compare la formula usata e il limite di applicabilità? Gli indici vengono scritti automaticamente nel referto o restano un suggerimento? Posso vedere un PDF reale prodotto dal software, non uno screenshot dell'interfaccia? Dove sono archiviati i dati e, se sono in cloud, esiste un accordo ex articolo 28 e dove stanno i server? Posso esportare tutto e in che formato, il giorno in cui volessi cambiare strumento? La prova gratuita dura abbastanza da coprire un ciclo di controlli veri, o sono quindici giorni?\n\nUn'ultima cosa, che vale a prescindere dal software scelto: chi ha definito i requisiti clinici. Un gestionale cardiologico scritto senza un cardiologo che dica come si referta davvero — in che ordine, con quanti campi, cosa entra nel PDF e cosa no — si riconosce entro la prima settimana d'uso. Le decisioni che contano sono tutte piccole e tutte cliniche: se l'anamnesi viene prima o dopo il motivo della visita, se i punteggi vanno stampati per esteso o solo nel totale, se un blocco che serve di rado deve restare aperto o collassato. Nessuna di queste si indovina da fuori.",
      },
    ],
    faq: [
      {
        question: "Che cosa distingue un gestionale cardiologico da uno generico?",
        answer:
          "La struttura dei dati clinici. Un gestionale generico archivia pazienti e documenti; uno cardiologico tratta le misure di ECG, ecocardiogramma e TC coronarica come campi con una loro unità e un loro intervallo, calcola gli indici derivati dentro la visita e produce un referto in cui gli esami strumentali sono leggibili in tabella. La differenza si vede quando devi confrontare due controlli a distanza di mesi: con il testo libero devi riaprire i vecchi PDF, con i campi strutturati il dato è già confrontabile.",
      },
      {
        question: "Quali calcoli servono davvero in un ambulatorio cardiologico?",
        answer:
          "Quelli che nascono da valori che hai già inserito: QTc dal QT e dalla frequenza, eGFR con CKD-EPI dalla creatinina con età e sesso, LDL secondo Friedewald e colesterolo non-HDL dal profilo lipidico, HOMA-IR su prelievo a digiuno, fascia Agatston dal calcium score, CHA2DS2-VASc e HAS-BLED dai fattori di rischio raccolti in anamnesi. Il criterio non è la quantità di calcolatori, ma se il risultato resta agganciato alla visita insieme ai valori da cui è stato ottenuto.",
      },
      {
        question: "Un gestionale può calcolare il rischio cardiovascolare al posto mio?",
        answer:
          "Può calcolare un punteggio, non può stratificare al posto tuo. Gli score di rischio sono modelli con una popolazione di derivazione, una finestra di età e dei limiti di applicabilità, e il loro risultato va integrato con il quadro clinico complessivo e con quello che l'imaging mostra. Un software che presenta il punteggio come conclusione, e non come uno degli elementi, sta facendo un'operazione che non gli compete: l'interpretazione resta un atto medico.",
      },
      {
        question: "È meglio un gestionale cardiologico in cloud o installato in studio?",
        answer:
          "Dipende da come lavori. Il cloud serve se accedi da più sedi o da più dispositivi, ma comporta un responsabile esterno del trattamento, un accordo ex articolo 28 del GDPR e la verifica di dove stanno i server e di cosa succede ai dati alla fine del contratto. L'installazione locale tiene i dati sanitari nello studio e accorcia la catena delle responsabilità, ma lascia interamente a te il backup. Nessuna delle due è migliore in assoluto: sono rischi diversi, gestiti da persone diverse.",
      },
      {
        question: "Corioli ha un modulo per la cardiologia?",
        answer:
          "Sì. Corioli Cardiologia si scarica dal Microsoft Store: elettrocardiogramma, pressione arteriosa ed esami di laboratorio in ogni visita, e moduli da attivare quando servono per ecocardiogramma, TC coronarica, test ergometrico, Holter ECG e pressorio, Doppler dei tronchi sovraaortici, scompenso e fibrillazione atriale. Gli indici calcolati hanno sempre la formula in chiaro, i pazienti si possono raggruppare per progetto di ricerca e i referti PDF riportano gli esami strumentali in tabella. I requisiti clinici sono dettati da un team di cardiologi. I dati restano in locale sul computer dello studio e l'archivio è separato da quello dell'edizione per la ginecologia.",
      },
    ],
  },
  {
    slug: "sistema-tessera-sanitaria-invio-dati-annuale",
    title: "Sistema Tessera Sanitaria: l'invio dei dati è diventato annuale",
    description:
      "Dalle spese del 2025 l'invio al Sistema Tessera Sanitaria è annuale, entro il 31 gennaio dell'anno dopo. Cosa cambia per il medico privato e come prepararsi.",
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
      "Nessuna norma fissa un termine per la cartella clinica del libero professionista: cosa dice il Garante e perché dieci anni è il riferimento più usato.",
    excerpt:
      "Quanto vanno tenuti i dati clinici di un paziente in uno studio privato? La risposta non è nel codice: è una scelta che il medico deve motivare. Ecco i criteri per farlo bene.",
    date: "11 Agosto 2026",
    isoDate: "2026-08-11",
    updated: "2 Novembre 2026",
    updatedIso: "2026-11-02",
    category: "Normativa",
    lead: "Per la cartella clinica dello studio privato nessuna norma fissa un termine di conservazione: lo decide il medico, come titolare del trattamento, e il riferimento più usato e più difendibile è di dieci anni, la prescrizione ordinaria. Per le cartelle degli ospedali e delle case di cura, invece, la conservazione è illimitata. È una delle domande che ricorrono più spesso quando uno specialista mette ordine nel proprio archivio, e capire da dove viene la risposta aiuta a prendere una decisione motivata invece di accumulare tutto per sempre.",
    keyPoints: [
      "Per la cartella clinica del medico libero professionista non convenzionato nessuna norma fissa un termine di conservazione: lo stabilisce il medico, come titolare del trattamento, in base alla finalità.",
      "Le cartelle cliniche degli ospedali e delle case di cura, con i relativi referti, si conservano invece illimitatamente, come ricorda il Garante nei chiarimenti del 7 marzo 2019.",
      "Il riferimento più usato è di dieci anni, la prescrizione ordinaria del codice civile: è il termine della responsabilità contrattuale, quella del libero professionista che ha un rapporto diretto con il paziente secondo la legge Gelli-Bianco.",
      "Il GDPR chiede di indicare nell'informativa ai pazienti il periodo di conservazione o i criteri usati per stabilirlo, e di non tenere i dati più del necessario.",
      "Una cancellazione è effettiva solo se riguarda anche i backup: serve una rotazione delle copie coerente con il termine scelto.",
    ],
    sections: [
      {
        title: "La differenza tra ospedale e studio privato",
        body: "Il punto di partenza è distinguere due situazioni che vengono spesso confuse. Per le cartelle cliniche ospedaliere e delle case di cura, insieme ai relativi referti, la conservazione è illimitata: sono documenti che fanno parte della memoria sanitaria della struttura e non si distruggono.\n\nPer il medico libero professionista non convenzionato la situazione è diversa: nessuna norma stabilisce espressamente che debba conservare la 'cartella clinica privata' dei propri pazienti e la documentazione allegata, né per quanto tempo. Questo non significa che ci si possa comportare come si vuole. Significa che la decisione ricade sul medico in quanto titolare del trattamento, e che va motivata.\n\nÈ una responsabilità in più, non una libertà. Il GDPR chiede che i tempi di conservazione siano definiti in anticipo e coerenti con la finalità del trattamento, non lasciati all'inerzia. Un archivio che cresce all'infinito perché nessuno ha mai deciso quando fermarsi non è conforme: è semplicemente non gestito.",
      },
      {
        title: "Perché dieci anni è il riferimento più usato",
        body: "In assenza di un termine di legge, la prassi più diffusa e più difendibile è ancorare la conservazione al termine di prescrizione ordinaria, che nell'ipotesi più ampia è di dieci anni. Il ragionamento è lineare: il medico conserva la documentazione clinica anche per poter tutelare i propri diritti e la propria difesa in caso di contestazioni future, e finché quella possibilità esiste la finalità di conservazione è attuale.\n\nPerché proprio dieci anni lo spiega la legge 24/2017, la Gelli-Bianco. Il medico che lavora in una struttura risponde verso il paziente a titolo extracontrattuale, e quel diritto al risarcimento si prescrive in cinque anni. Il libero professionista che ha assunto un'obbligazione contrattuale direttamente con il paziente, invece, risponde a titolo contrattuale, e qui vale la prescrizione ordinaria del codice civile: dieci anni. È il caso tipico dello specialista nel proprio studio.\n\nÈ un criterio che regge perché lega il tempo di conservazione a una ragione concreta e verificabile, non a una preferenza personale. E funziona in entrambe le direzioni: giustifica il fatto che i dati siano ancora lì dopo otto anni, e giustifica il fatto che vengano cancellati dopo dodici.\n\nAttenzione però a non trattarlo come un automatismo universale. Il principio generale enunciato dal Garante resta che i dati vanno conservati per il tempo necessario al perseguimento della finalità per cui sono stati raccolti, e ci sono situazioni in cui quel tempo è ragionevolmente diverso: un percorso di cura ancora in corso, una documentazione rilevante per la storia clinica di lungo periodo della paziente, un contenzioso aperto che congela qualsiasi cancellazione. La politica di conservazione dovrebbe prevedere questi casi invece di ignorarli.",
      },
      {
        title: "Come si scrive una politica di conservazione che sta in piedi",
        body: "Non serve un documento lungo. Serve un documento che esista e che descriva scelte reali. Quattro elementi bastano a renderlo utile.\n\nIl primo è il termine ordinario: quanti anni conservi la documentazione clinica dopo l'ultimo contatto con il paziente, e perché hai scelto quel numero. Il secondo sono le eccezioni: i casi in cui il termine si allunga (contenzioso in corso, obblighi specifici) o si accorcia, definiti in anticipo e non decisi caso per caso. Il terzo è il momento della verifica: una data ricorrente — una volta l'anno è sufficiente — in cui si controlla cosa ha superato il termine, invece di aspettare che qualcuno se ne accorga. Il quarto è il modo in cui la cancellazione avviene concretamente, inclusi i backup, che è il punto in cui quasi tutte le politiche di conservazione si rompono.\n\nQuest'ultimo aspetto merita attenzione. Cancellare una cartella dall'archivio principale mentre la stessa cartella continua a esistere in dieci copie di backup accumulate negli anni significa non averla cancellata. Una politica di backup con rotazione definita — copie che vengono sovrascritte o eliminate dopo un periodo stabilito — non serve solo a risparmiare spazio: è ciò che rende la cancellazione effettiva.",
      },
      {
        title: "Cosa scrivere nell'informativa",
        body: "Il periodo di conservazione non resta un documento interno: il GDPR chiede di comunicarlo ai pazienti nell'informativa, indicando il periodo oppure, se non è possibile, i criteri usati per determinarlo. Il Garante lo ha ripetuto nei chiarimenti del 7 marzo 2019 sul trattamento dei dati sanitari, aggiungendo che quando nessuna norma fissa un termine è il titolare a doverlo individuare, senza superare quanto necessario alla finalità.\n\nIn pratica basta una frase chiara, per esempio che la documentazione clinica è conservata per dieci anni dall'ultima prestazione, il termine di prescrizione ordinaria, salvo contenziosi in corso o obblighi di legge diversi. Il resto degli adempimenti privacy dello studio, dall'informativa al registro dei trattamenti, è nella guida al [GDPR per il medico libero professionista](/blog/gdpr-medico-libero-professionista-adempimenti).",
      },
      {
        title: "Perché l'archivio digitale rende tutto questo praticabile",
        body: "Su carta, applicare una politica di conservazione è teoricamente possibile e praticamente raro. Significa scorrere fisicamente un archivio, individuare i fascicoli oltre il termine, estrarli e distruggerli in modo sicuro. Nella maggior parte degli studi questo non succede mai, e l'archivio cresce fino a esaurire lo spazio disponibile.\n\nIn un archivio digitale la stessa operazione diventa una interrogazione: quali pazienti non hanno contatti da più di N anni. Da lì la revisione annuale è un'ora di lavoro invece di un progetto rimandato a tempo indeterminato. È una di quelle differenze che non si notano il primo anno e diventano evidenti al settimo.\n\nC'è anche un vantaggio meno ovvio, che riguarda chi sceglie l'archiviazione locale. Quando i dati clinici restano sul computer dello studio e non transitano da server di terzi, il perimetro della conservazione è netto: sai esattamente dove sono le copie, chi può accedervi e cosa succede quando decidi di cancellarle. Non devi verificare le politiche di retention di un fornitore né chiederti quanto a lungo un provider mantenga i propri backup. In cambio, l'onere di eseguire quei backup — e di gestirne la rotazione — è interamente tuo: è il rovescio della medaglia dell'archiviazione locale, e va affrontato con un piano preciso, come quello della [regola 3-2-1 applicata allo studio](/blog/backup-studio-medico-regola-3-2-1).\n\nÈ il modello di [Corioli](/gdpr): l'archivio sta sul computer dello studio, l'app fa da sola una copia giornaliera sullo stesso disco e l'esportazione completa dalle impostazioni è la copia da conservare altrove. Dove tenere quelle copie e per quanto, invece, lo decide la politica di conservazione dello studio.",
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
      {
        question: "Cosa devo scrivere nell'informativa sulla conservazione?",
        answer:
          "Il periodo di conservazione o, se non è possibile, i criteri usati per determinarlo: lo chiede l'articolo 13 del GDPR e il Garante lo ha ricordato nei chiarimenti del 7 marzo 2019. Per lo studio privato basta una frase come: documentazione conservata per dieci anni dall'ultima prestazione, salvo contenziosi in corso o obblighi di legge diversi.",
      },
    ],
    sources: [
      {
        title:
          "Garante per la protezione dei dati personali. Chiarimenti sull'applicazione della disciplina per il trattamento dei dati relativi alla salute in ambito sanitario, provvedimento n. 55 del 7 marzo 2019.",
        url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9091942",
      },
      {
        title:
          "Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio, del 27 aprile 2016 (GDPR), articoli 5 e 13.",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
      {
        title:
          "Legge 8 marzo 2017, n. 24, Disposizioni in materia di sicurezza delle cure e della persona assistita, nonché in materia di responsabilità professionale degli esercenti le professioni sanitarie, articolo 7.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-03-08;24~art7",
      },
      {
        title: "Codice civile, articoli 2946 (prescrizione ordinaria) e 2947 (prescrizione del diritto al risarcimento del danno).",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.civile:1942-03-16;262~art2946",
      },
    ],
  },
  {
    slug: "backup-studio-medico-regola-3-2-1",
    title: "Backup dello studio medico: la regola 3-2-1 applicata all'ambulatorio",
    description:
      "Con i dati clinici in locale il backup tocca al medico: la regola 3-2-1 applicata allo studio privato, cosa cifrare e perché un backup mai provato non basta.",
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
      "La legge 219/2017 vuole il consenso informato documentato e inserito nella cartella clinica: come raccoglierlo e archiviarlo in digitale nello studio privato.",
    excerpt:
      "Il consenso informato non è un modulo da far firmare in fretta: è un atto che la legge vuole documentato e collegato alla cartella clinica. Ecco cosa serve e come smettere di gestirlo su carta.",
    date: "21 Luglio 2026",
    isoDate: "2026-07-21",
    updatedIso: "2026-10-21",
    updated: "21 Ottobre 2026",
    category: "Normativa",
    lead: "In molti studi il consenso informato vive una doppia vita: da un lato è considerato un adempimento formale da sbrigare in sala d'attesa, dall'altro è il primo documento che viene cercato — spesso senza trovarlo — quando emerge una contestazione. La legge 219/2017 lo tratta come parte integrante della relazione di cura, e prescrive con precisione dove deve finire.",
    keyPoints: [
      "La legge 22 dicembre 2017, n. 219, articolo 1, comma 4, vuole il consenso informato documentato in forma scritta, con una videoregistrazione o, per la persona con disabilità, con dispositivi che le consentano di comunicare.",
      "In qualunque forma sia espresso, il consenso va inserito nella cartella clinica e nel fascicolo sanitario elettronico: non è un documento da archiviare in un raccoglitore a parte.",
      "Il consenso alla cura della legge 219/2017 e il consenso al trattamento dei dati del GDPR sono due documenti diversi: per le finalità di cura i dati si trattano senza consenso, secondo il Garante, e i due testi vanno tenuti distinti.",
      "Portare il consenso nel digitale significa prima di tutto conservarlo nella cartella della paziente; la validità della firma dipende dalla modalità scelta, autografa poi acquisita o elettronica.",
    ],
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
        body: "Spostare il consenso dentro il gestionale non cambia il contenuto del documento né la sostanza dell'obbligo: cambia il fatto che il documento resti collegato alla persona e alla prestazione, invece di dover essere ricongiunto a mano.\n\nNei software che lo prevedono il flusso completo è questo. Il modulo esiste come modello, in una versione unica e aggiornata, così che nessuno usi per errore un'informativa superata. Al momento della visita il consenso viene generato per quella paziente, con i dati già compilati dall'anagrafica, e una volta firmato resta agganciato alla sua scheda, nello storico insieme a visite e referti: è ciò che la legge chiede quando prescrive l'inserimento in cartella clinica.\n\nAnche senza generazione automatica, il passo che conta di più è l'ultimo. Il consenso firmato su carta si scansiona e si allega alla scheda della paziente, così da stare nella cartella e non in un raccoglitore a parte: recuperarlo tre anni dopo è una ricerca per nome. In Corioli oggi funziona così: il consenso firmato si carica come PDF o immagine fra i file della paziente, accanto agli esami esterni. Corioli non genera il modulo di consenso e non raccoglie la firma: quella resta su carta, o con lo strumento di firma elettronica che lo studio usa già.\n\nLa validità giuridica della sottoscrizione è un piano distinto dall'archiviazione: una firma autografa su copia stampata poi acquisita e una firma elettronica di livello adeguato hanno effetti probatori diversi, e la scelta va fatta in base al tipo di prestazione.",
      },
      {
        title: "Consenso al trattamento e consenso alla cura: non confonderli",
        body: "Vale la pena chiarire un equivoco che ricorre spesso, perché genera moduli confusi e archivi disordinati. Il consenso informato di cui parla la legge 219/2017 riguarda l'atto sanitario: è l'adesione consapevole della paziente al trattamento proposto, dopo essere stata informata su natura, benefici, rischi e alternative.\n\nIl consenso al trattamento dei dati personali disciplinato dal GDPR è un'altra cosa, e risponde a una domanda diversa: come possono essere trattati i suoi dati e per quali finalità. Va peraltro ricordato che nel contesto sanitario il trattamento dei dati per finalità di cura si fonda normalmente su basi giuridiche diverse dal consenso, cosa che rende ancora meno sensato accorpare i due documenti in un unico foglio da far firmare.\n\nIn pratica: teneteli distinti, con testi separati e finalità dichiarate in modo chiaro. Un unico modulo che mescola l'informativa clinica e quella privacy indebolisce entrambe, perché rende difficile dimostrare che la paziente sia stata effettivamente informata su ciascuna delle due cose. Sono anche documenti con cicli di vita diversi: l'informativa privacy si aggiorna quando cambiano i trattamenti, il consenso alla cura si rinnova quando cambia la prestazione proposta.",
      },
    ],
    sources: [
      {
        title:
          "Legge 22 dicembre 2017, n. 219, Norme in materia di consenso informato e di disposizioni anticipate di trattamento, articolo 1.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-12-22;219",
      },
      {
        title:
          "Garante per la protezione dei dati personali, provvedimento n. 55 del 7 marzo 2019, Chiarimenti sull'applicazione della disciplina per il trattamento dei dati relativi alla salute in ambito sanitario (doc. web n. 9091942).",
        url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9091942",
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
          "Il gestionale non cambia il valore del consenso: serve a conservarlo dentro la cartella clinica della paziente, come la legge richiede, e a ritrovarlo. La validità dipende dalla modalità di firma adottata: una firma autografa su copia stampata e poi acquisita, o una firma elettronica di livello adeguato, hanno effetti probatori diversi. È una scelta da valutare con il proprio consulente in base al tipo di prestazione.",
      },
    ],
  },
  {
    slug: "fse-2-0-obbligo-studi-privati-cosa-fare",
    title: "FSE 2.0 obbligatorio per gli studi privati: cosa deve fare lo specialista",
    description:
      "Dal 31 marzo 2026 il Fascicolo Sanitario Elettronico 2.0 è obbligatorio anche per le strutture private: cosa cambia per lo specialista e da dove iniziare.",
    excerpt:
      "Il FSE 2.0 è diventato obbligatorio anche per il privato: cosa cambia per lo specialista in ambulatorio, quali documenti vanno inviati e come prepararsi senza stravolgere il proprio flusso.",
    date: "3 Luglio 2026",
    isoDate: "2026-07-03",
    updated: "2 Novembre 2026",
    updatedIso: "2026-11-02",
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
        body: "Si parla molto di canali di invio e poco del punto di partenza: non puoi alimentare il FSE se i tuoi referti nascono sparsi tra file Word, PDF rinominati a mano e cartelle sul desktop. L'obbligo di alimentazione presuppone che ogni prestazione produca un documento clinico completo, associato correttamente al paziente, con dati anagrafici e clinici coerenti.\n\nÈ esattamente il lavoro che un gestionale medico fa per natura: anagrafica unica, visita strutturata, referto generato dai dati della cartella — non ricopiato a mano. Chi lavora già così ha davanti solo il passaggio tecnico dell'invio; chi lavora ancora con documenti sciolti ha davanti anche il riordino dell'archivio, ed è quello il vero costo nascosto dell'adeguamento.\n\nCorioli aiuta proprio su questo primo miglio: ogni visita produce un referto PDF completo e coerente con la cartella clinica, l'archivio resta ordinato per paziente e l'archivio storico in Word o Excel si può trasferire con il servizio di migrazione su preventivo. Corioli non invia i documenti al FSE. Sul fronte dell'invio regionale, il consiglio resta quello di verificare i canali della propria Regione: il panorama è in evoluzione e cambia da territorio a territorio.",
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
      "Percentili di crescita OMS: cosa indicano peso e altezza per età, come leggere l'attraversamento dei canali e come si calcola il target genetico di Tanner.",
    excerpt:
      "Cosa dicono davvero i percentili OMS di peso e altezza, quando un attraversamento di canale deve far drizzare le antenne e come il target genetico aiuta a interpretare la curva.",
    date: "30 Giugno 2026",
    isoDate: "2026-06-30",
    updated: "2 Novembre 2026",
    updatedIso: "2026-11-02",
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
        body: "La soluzione più solida è calcolare i percentili direttamente dove il dato viene registrato: nella cartella clinica. È la strada del modulo pediatrico di Corioli, che è in sviluppo e non ha ancora una data di uscita: oggi Corioli è disponibile per ginecologia e ostetricia e per cardiologia.\n\nIl medico inserisce la misura una volta sola: percentile e posizione sulla curva si aggiornano da soli, la traiettoria è subito visibile accanto alle visite precedenti e il referto eredita valori coerenti con la cartella. E i dati restano in locale, nel computer dello studio: un dettaglio che per chi tratta dati di minori non è affatto un dettaglio.",
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
          "Non ancora. Il modulo pediatrico di Corioli è in sviluppo e non ha una data di uscita annunciata. Oggi Corioli è disponibile per ginecologia e ostetricia, dove la visita ginecologica pediatrica registra lo stadio di Tanner, e per cardiologia.",
      },
    ],
  },
  {
    slug: "stima-peso-fetale-hadlock-guida-pratica",
    title: "Stima del peso fetale con Hadlock: guida pratica per l'ambulatorio",
    description:
      "Come funziona la stima del peso fetale con Hadlock: parametri biometrici (BPD, HC, AC, FL), margini di errore e percentili di crescita.",
    excerpt:
      "BPD, HC, AC e FL: come le formule di Hadlock stimano il peso fetale, quanto è ampio il margine d'errore e come evitare gli errori di trascrizione tra ecografo, cartella e referto.",
    date: "26 Giugno 2026",
    isoDate: "2026-06-26",
    updated: "2 Novembre 2026",
    updatedIso: "2026-11-02",
    category: "Ostetricia",
    lead: "Le formule di Hadlock stimano il peso fetale combinando in un'equazione logaritmica da due a quattro misure biometriche: diametro biparietale (BPD), circonferenza cranica (HC), circonferenza addominale (AC) e lunghezza del femore (FL). In uno studio della Fetal Medicine Foundation su 5.163 gravidanze, la versione con HC, AC e FL è risultata la più accurata e ha stimato il peso entro il 10% di quello alla nascita in 8 casi su 10. Qui trovi le quattro formule con un esempio, come leggere il margine d'errore, il passaggio al percentile e come evitare gli errori di trascrizione.",
    keyPoints: [
      "Le formule di Hadlock del 1985 stimano il peso fetale in grammi da due, tre o quattro misure biometriche in centimetri: diametro biparietale, circonferenza cranica, circonferenza addominale e lunghezza del femore.",
      "Nello studio della Fetal Medicine Foundation su 5.163 gravidanze singole (Hammami 2018), la formula con HC, AC e FL è risultata la più accurata: stima entro il 10% del peso alla nascita nell'80% dei casi.",
      "Vuol dire che in 2 casi su 10 l'errore supera il 10%: su un feto stimato 3.000 g, il peso alla nascita può cadere fuori dall'intervallo 2.700-3.300 g.",
      "La circonferenza addominale è la misura che pesa di più nella stima, ed è anche la più sensibile alla tecnica di misura.",
      "Il peso stimato acquista significato solo come percentile per l'età gestazionale, per esempio sulle curve di peso fetale pubblicate da Hadlock nel 1991.",
    ],
    sections: [
      {
        title: "Cosa misura davvero la stima del peso fetale",
        body: "Il peso fetale non si misura: si stima. Le formule di Hadlock, pubblicate nel 1985 e ancora oggi fra le più usate, combinano i parametri biometrici rilevati in ecografia — diametro biparietale (BPD), circonferenza cranica (HC), circonferenza addominale (AC) e lunghezza del femore (FL) — in equazioni logaritmiche che restituiscono il peso stimato in grammi.\n\nEsistono quattro varianti della formula, con due, tre o quattro parametri. La circonferenza addominale entra in tutte ed è il parametro che pesa di più sulla stima, ed è anche il più sensibile alle condizioni di misura: un piano di scansione obliquo o una compressione della sonda la cambiano di qualche millimetro, e il peso stimato si sposta di conseguenza.",
      },
      {
        title: "Le quattro formule di Hadlock, con un esempio",
        body: "Tutte le formule restituiscono il logaritmo in base 10 del peso in grammi, con le misure in centimetri: il peso si ottiene elevando 10 al risultato. Cambiano le misure che entrano nel calcolo.\n\nUn esempio con la formula a tre parametri. Con HC di 30 cm, AC di 30 cm e FL di 6,5 cm il logaritmo vale 1,326 + 0,321 + 1,314 + 1,027 − 0,636 = 3,352, e il peso stimato è 10 elevato a 3,352, circa 2.250 g.\n\nAttenzione ai nomi: software e calcolatori numerano le formule in modo diverso, Hadlock I, II, III, IV oppure 1, 2, 3, 4, e lo stesso numero può indicare formule diverse in due programmi. Quello che conta è quali misure usa la formula, ed è l'informazione da riportare nel referto.",
        table: {
          caption: "Le formule di Hadlock 1985 per la stima del peso fetale",
          columns: ["Misure", "log10 del peso in grammi (misure in cm)"],
          rows: [
            ["AC, FL", "1,304 + 0,05281 × AC + 0,1938 × FL − 0,004 × AC × FL"],
            ["BPD, AC, FL", "1,335 − 0,0034 × AC × FL + 0,0316 × BPD + 0,0457 × AC + 0,1623 × FL"],
            ["HC, AC, FL", "1,326 − 0,00326 × AC × FL + 0,0107 × HC + 0,0438 × AC + 0,158 × FL"],
            ["BPD, HC, AC, FL", "1,3596 − 0,00386 × AC × FL + 0,0064 × HC + 0,00061 × BPD × AC + 0,0424 × AC + 0,174 × FL"],
          ],
          note: "Coefficienti di Hadlock et al., Am J Obstet Gynecol 1985, come riportati nei codici LOINC delle quattro formule. Le misure vanno in centimetri: inserirle in millimetri dà pesi senza senso.",
        },
      },
      {
        title: "Il margine di errore: un numero da leggere con onestà",
        body: "Anche nelle mani migliori, la stima ecografica del peso fetale ha un margine di errore ampio. Nello studio pubblicato nel 2018 dal gruppo della Fetal Medicine Foundation su 5.163 gravidanze singole, la formula di Hadlock con HC, AC e FL è risultata la più accurata fra i modelli pubblicati, e la stima era entro il 10% del peso alla nascita nell'80% dei casi. Nei restanti 2 casi su 10 l'errore era più grande: su un feto stimato 3.000 g, il peso reale poteva cadere fuori dall'intervallo 2.700-3.300 g.\n\nQuesto non rende la stima inutile — resta fondamentale per il monitoraggio della crescita e per le decisioni cliniche — ma suggerisce due buone pratiche: comunicarla come stima con il suo intervallo, e valutarla sempre in serie, confrontando l'andamento tra ecografie successive più che il singolo valore assoluto.",
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
        body: "La soluzione è far viaggiare i numeri il meno possibile: inserire le misure biometriche una volta sola, nella cartella clinica, e lasciare che stima di Hadlock, percentili e curva di crescita si calcolino da soli, agganciati all'età gestazionale già calcolata in cartella.\n\nÈ così che funziona in [Corioli](/ginecologia): nella visita ostetrica inserisci BPD, HC, AC e FL in millimetri, e l'app calcola i percentili della biometria secondo Hadlock 1984, il peso stimato con la formula di Hadlock che hai scelto fra le quattro e il suo centile sulle curve del 1991, con le settimane di gestazione calcolate dall'ultima mestruazione. Il grafico di crescita mette in fila i pesi di tutte le visite della stessa gravidanza, e il referto PDF eredita gli stessi valori senza ricopiature. Meno trascrizioni, meno errori, e una storia di crescita fetale leggibile a colpo d'occhio — con i dati salvati in locale, nello studio.",
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
          "Nello studio della Fetal Medicine Foundation su 5.163 gravidanze singole, la formula di Hadlock con HC, AC e FL ha stimato il peso entro il 10% di quello alla nascita nell'80% dei casi: in 2 casi su 10 l'errore era maggiore. Per questo la stima va comunicata come tale, con il suo intervallo, e interpretata soprattutto nell'andamento tra ecografie successive.",
      },
      {
        question: "Qual è la formula di Hadlock più accurata?",
        answer:
          "Nel confronto pubblicato nel 2018 dal gruppo della Fetal Medicine Foundation, la più accurata fra i modelli pubblicati è risultata la formula di Hadlock del 1985 con circonferenza cranica, circonferenza addominale e lunghezza del femore: log10 del peso = 1,326 − 0,00326 × AC × FL + 0,0107 × HC + 0,0438 × AC + 0,158 × FL, con le misure in centimetri.",
      },
      {
        question: "Perché il percentile conta più del peso assoluto?",
        answer:
          "Perché lo stesso peso può essere adeguato o patologico a seconda dell'età gestazionale: è il confronto con la distribuzione attesa per quell'epoca a identificare feti piccoli (SGA/FGR) o grandi (LGA) per l'epoca. Il percentile dipende criticamente da una datazione corretta della gravidanza.",
      },
      {
        question: "Corioli calcola la stima di Hadlock automaticamente?",
        answer:
          "Sì. Inserendo la biometria nella visita ostetrica, Corioli calcola il peso fetale stimato con la formula di Hadlock scelta dal medico fra le quattro, il centile sulle curve Hadlock 1991 e il grafico di crescita della gravidanza, sull'età gestazionale calcolata dall'ultima mestruazione. I valori vengono riportati coerenti nel referto PDF, senza trascrizioni manuali.",
      },
    ],
    sources: [
      {
        title:
          "Hadlock FP, Harrist RB, Sharman RS, Deter RL, Park SK. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol. 1985;151(3):333-337.",
        url: "https://doi.org/10.1016/0002-9378(85)90298-4",
      },
      {
        title:
          "Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology. 1991;181(1):129-133.",
        url: "https://doi.org/10.1148/radiology.181.1.1887021",
      },
      {
        title:
          "Hammami A, Mazer Zumaeta A, Syngelaki A, Akolekar R, Nicolaides KH. Ultrasonographic estimation of fetal weight: development of new model and assessment of performance of previous models. Ultrasound Obstet Gynecol. 2018;52(1):35-43.",
        url: "https://doi.org/10.1002/uog.19066",
      },
      {
        title:
          "Hadlock FP, Deter RL, Harrist RB, Park SK. Estimating fetal age: computer-assisted analysis of multiple fetal growth parameters. Radiology. 1984;152(2):497-501.",
        url: "https://doi.org/10.1148/radiology.152.2.6739822",
      },
    ],
  },
  {
    slug: "corioli-congresso-miomi-uterini-2026",
    title: "Com'è andata: Corioli al congresso sui miomi uterini",
    description:
      "La giornata di Corioli al congresso sui miomi uterini a Nana Bianca: lo stand, le demo dal vivo e i confronti con ginecologi e ostetrici.",
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
        body: "Grazie a tutti i ginecologi e gli ostetrici che si sono fermati allo stand, hanno provato Corioli e ci hanno raccontato il loro modo di lavorare. Corioli è sviluppato in Italia, con i medici, e gestisce già oltre 15.000 cartelle pazienti: giornate come questa sono il motivo per cui continua a migliorare.\n\nNon sei riuscito a passare? Puoi vedere Corioli dal vivo lo stesso: richiedi una demo gratuita di 15 minuti dalla pagina contatti e ti mostriamo come funziona nel tuo flusso clinico, con 30 giorni di prova senza impegno.",
      },
    ],
  },
  {
    slug: "miomi-uterini-storia-clinica-completa",
    title: "Miomi uterini: perché la storia clinica completa fa la differenza",
    description:
      "Nei miomi uterini avere sotto mano l'intera storia clinica migliora diagnosi, follow-up e decisioni. Come Corioli aiuta il ginecologo in ambulatorio.",
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
        body: "[Corioli](/ginecologia) è un gestionale medico pensato per la pratica clinica di ginecologi e ostetrici. La cartella ginecologica e ostetrica raccoglie anamnesi strutturata, diario delle visite con timeline, referti, ecografie e allegati in un unico ambiente consultabile in pochi clic. I valori - comprese le misure dei miomi - restano confrontabili nel tempo, così il follow-up smette di essere una ricostruzione a memoria.\n\nIl risultato è quello che raccontiamo al congresso: il medico arriva alla decisione con il quadro completo davanti, produce il referto senza copia-incolla e dedica più attenzione alla paziente. Se domani sei a Nana Bianca, passa a trovarci: ti mostriamo come funziona sul campo.",
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
          "Saremo presenti al congresso sui miomi uterini a Nana Bianca il 18 giugno 2026, dove mostriamo come Corioli supporta il ginecologo in ambulatorio. In alternativa, puoi richiedere una demo gratuita di 15 minuti dalla pagina contatti del sito Corioli e provare il software nel tuo flusso clinico per 30 giorni.",
      },
    ],
  },
  {
    slug: "calcolo-eta-gestazionale-settimane-gravidanza",
    title:
      "Calcolo dell'età gestazionale: settimane di gravidanza e datazione",
    description:
      "Età gestazionale e data presunta del parto: regola di Naegele, datazione ecografica, settimane più giorni e come un gestionale riduce gli errori.",
    excerpt:
      "Regola di Naegele, datazione ecografica e settimane+giorni: come si calcola l'età gestazionale senza errori e perché conviene farlo dentro la cartella clinica.",
    date: "16 Giugno 2026",
    isoDate: "2026-06-16",
    updated: "2 Novembre 2026",
    updatedIso: "2026-11-02",
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
        body: "Avere la datazione integrata nella cartella clinica elimina i passaggi manuali: l'età gestazionale si aggiorna automaticamente a ogni visita a partire dalla datazione stabilita, resta coerente con la data presunta del parto e si collega direttamente alla biometria e ai percentili. Il referto eredita lo stesso valore, senza ricopiature.\n\n[Corioli per ginecologia e ostetricia](/ginecologia) include i calcolatori ostetrici - età gestazionale e data presunta del parto dall'ultima mestruazione, stima del peso fetale secondo Hadlock, percentili e curve di crescita - direttamente nel flusso della visita. Il medico inserisce i dati una volta sola e li ritrova coerenti in cartella e nel referto PDF, riducendo gli errori di trascrizione e il tempo speso a fare conti tra app diverse.",
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
          "Sì, dall'ultima mestruazione. Nella visita ostetrica Corioli calcola le settimane di gestazione alla data di ogni visita e la data presunta del parto a 280 giorni, e le usa per biometria fetale e percentili. Il valore viene riportato anche nel referto PDF senza ricopiature manuali, riducendo il rischio di errori.",
      },
    ],
  },
  {
    slug: "gestionale-per-ginecologi-cosa-cercare",
    title: "Gestionale per ginecologi: cosa cercare nel 2026",
    description:
      "Come scegliere un gestionale per ginecologi: funzioni cliniche, calcolatori ostetrici, cartella ostetrica elettronica, GDPR e limiti dei software generici.",
    excerpt:
      "Funzionalità cliniche, calcolatori ostetrici, cartella ostetrica elettronica e GDPR: tutto quello che serve davvero a un ginecologo in ambulatorio.",
    date: "5 Febbraio 2025",
    isoDate: "2025-02-05",
    updated: "2 Novembre 2026",
    updatedIso: "2026-11-02",
    category: "Ginecologia",
    lead: "Un gestionale per ginecologi deve saper fare quello che serve in visita: cartella ostetrica, età gestazionale, biometria e peso fetale con le formule di riferimento, flussimetria e referti PDF, senza app esterne né ricopiature in Word. Un software generico gestisce agenda e fatture, ma non il flusso clinico della visita ostetrica e ginecologica. Qui trovi le funzioni da pretendere, come si confrontano i principali software in Italia e quanto costano davvero.",
    keyPoints: [
      "Un gestionale per ginecologi deve avere la cartella ostetrica e ginecologica strutturata, l'età gestazionale calcolata a ogni visita, biometria e peso fetale con le formule di Hadlock, la flussimetria e i referti PDF.",
      "I calcolatori vanno dentro la visita: un numero calcolato in un'app esterna e ricopiato a mano nel referto è un'occasione di errore in più.",
      "Le curve di riferimento devono essere dichiarate: per la biometria Hadlock 1984, per il peso fetale Hadlock 1985 con i centili del 1991, per il PI dell'arteria ombelicale le curve della Fetal Medicine Foundation.",
      "Nel confronto dei prezzi conta il costo su 12 mesi con tutti i moduli che servono, non il canone d'ingresso.",
      "Corioli costa 30€ al mese tutto incluso, salva i dati in locale nello studio e si prova gratis per 30 giorni senza carta di credito.",
    ],
    sections: [
      {
        title: "Perché i gestionali generici non bastano in ginecologia",
        body: "Un software nato per amministrare uno studio generico può gestire agenda e fatture, ma non supporta il flusso clinico di una visita ostetrica o ginecologica. Mancano l'anamnesi strutturata per gravidanza, i calcolatori per la datazione e la biometria, le curve di crescita fetale e i template di referto specializzati. Il medico finisce per usare app esterne e Word in parallelo, perdendo tempo e coerenza dei dati.",
      },
      {
        title: "Funzionalità indispensabili per un ginecologo",
        body: "Un gestionale per ginecologi deve includere: cartella ostetrica e ginecologica strutturata, calcolo automatico dell'età gestazionale, stima del peso fetale (Hadlock), percentili e biometria fetale, tracciamento del BMI e dell'aumento di peso in gravidanza, curve di crescita con grafici, generazione di referti PDF completi e archiviazione ordinata dei documenti della paziente, compresi i consensi firmati. Questi non sono optional: sono il cuore della visita specialistica.\n\nConta anche da dove vengono i numeri. Un percentile senza la curva di riferimento non è confrontabile con quello di un collega: il software deve dire quale formula usa, per esempio Hadlock 1984 per la biometria, Hadlock 1985 per il peso fetale con i centili del 1991, le curve della Fetal Medicine Foundation per il PI dell'arteria ombelicale, e possibilmente lasciarti scegliere quando ne esistono più versioni.",
      },
      {
        title: "Il valore dei calcolatori clinici integrati",
        body: "Avere i calcolatori clinici dentro il gestionale elimina il bisogno di app separate e riduce il rischio di errori di trascrizione. Le misure si inseriscono una volta sola e i risultati finiscono direttamente nel referto: niente numeri ricopiati a mano dall'app del calcolo al documento, che è proprio il punto in cui gli errori si infilano. Su un ambulatorio con molte visite al giorno, i minuti risparmiati a visita diventano tempo che torna alla paziente.",
      },
      {
        title: "Corioli per ginecologi e ostetrici",
        body: "[Corioli per ginecologia e ostetricia](/ginecologia) nasce specificamente per questa specialità, sviluppato insieme a un team di ginecologi che ne detta i requisiti clinici. Ha tre visite distinte, ginecologica, ginecologica pediatrica e ostetrica, con un'anamnesi per sezioni che si adatta allo studio. Nella visita ostetrica calcola le settimane di gestazione dall'ultima mestruazione alla data della visita e la data presunta del parto, la biometria fetale con i percentili di Hadlock 1984, il peso fetale con la formula di Hadlock scelta dal medico e il centile sulle curve del 1991, con il grafico di crescita di tutta la gravidanza, e la flussimetria dell'arteria ombelicale con il PI sulle curve della Fetal Medicine Foundation. Ci sono anche BMI con fasce OMS, aumento di peso in gravidanza e HOMA-IR.\n\nDalla visita escono in PDF referto, ricetta, certificato e richiesta di esame, con le immagini ecografiche, la firma e il timbro. Esami esterni e consensi firmati si allegano alla scheda della paziente come PDF o immagine. I dati restano salvati in locale, nel tuo studio, sotto il tuo esclusivo controllo, e la prova gratuita di 30 giorni permette di valutarlo nel proprio flusso clinico reale.",
      },
      {
        title: "Confronto tra i principali software ginecologici in Italia",
        variant: "comparison-table",
        body: "Scegliere un gestionale per ginecologi significa confrontare soluzioni molto diverse tra loro: alcune nascono per la gestione amministrativa dello studio e aggiungono moduli clinici in un secondo momento, altre sono verticali e pensate fin dall'inizio per la visita ostetrica e ginecologica. In Italia, tra i nomi più citati in ambulatorio troviamo Corioli, ArzaMed, Gynobase e WindDoctor. Nessuno di questi software è 'migliore in assoluto': la scelta dipende da quanto peso dai agli strumenti clinici nativi rispetto alla fatturazione elettronica, al numero di utenti e al budget mensile dello studio.\n\nArzaMed è una soluzione cloud consolidata, molto orientata alla gestione complessiva di studi e poliambulatori: agenda, fatturazione sanitaria, integrazione con il Sistema Tessera Sanitaria e cartella clinica ginecologica personalizzabile. È una scelta solida per chi gestisce team numerosi, ma il canone parte da 99€ al mese per due utenti — un investimento significativo per il libero professionista che lavora da solo.\n\nGynobase è storico nel panorama italiano: offre gestione di anagrafiche, visite ginecologiche e visite in gravidanza, con la possibilità di usare una versione desktop offline (Gynobase Portable) quando la connessione non è disponibile. L'interfaccia è essenziale e funzionale, ma i calcolatori fetali avanzati e l'esperienza utente moderna non sono il suo punto di forza principale.\n\nWindDoctor propone un gestionale cloud accessibile, con piani a partire da 10€ al mese e una prova gratuita limitata. Copre appuntamenti, cartelle cliniche digitali e fatturazione, ma resta un software generalista: per la biometria fetale, i percentili Hadlock e una cartella ostetrica strutturata il medico dovrà spesso integrare strumenti esterni.\n\nCorioli si colloca come alternativa verticale: nato per ginecologia e ostetricia, integra cartella ostetrica elettronica, calcolatori fetali (Hadlock, biometria, percentili, età gestazionale), referti PDF e documenti della paziente in un unico flusso clinico. Costa 30€ al mese, tutto incluso, con prova gratuita di 30 giorni — un posizionamento pensato per lo specialista privato che vuole strumenti clinici professionali senza il costo di un gestionale enterprise.\n\nLa tabella seguente riassume le differenze principali. I prezzi indicativi sono quelli pubblicati sui siti ufficiali e consultati ad agosto 2026, e possono variare in base a moduli aggiuntivi, numero di utenti e promozioni in corso.",
      },
      {
        title: "Quanto costa un gestionale per ginecologi?",
        body: "Il costo di un gestionale per ginecologi dipende dal modello commerciale scelto dal fornitore e dalle funzionalità incluse nel canone base. Conoscere le tre tipologie di pricing più diffuse aiuta a evitare sorprese e a calcolare il costo reale su 12 mesi, non solo quello del primo mese promozionale.\n\nIl modello più comune oggi è l'abbonamento mensile (SaaS cloud): paghi un canone fisso ogni mese e ottieni accesso al software, aggiornamenti automatici, backup e assistenza. I vantaggi sono prevedibilità, nessun investimento iniziale in server o licenze e la possibilità di disdire se il software non si adatta al tuo flusso. I canoni variano molto: le soluzioni generaliste con funzionalità limitate costano poco, i gestionali enterprise pensati per poliambulatori con molti utenti arrivano a diverse centinaia di euro al mese.\n\nEsiste ancora, soprattutto tra software più datati, il modello a licenza perpetua: paghi una tantum per il software e lo installi sul tuo computer. Il costo iniziale può sembrare conveniente, ma di solito non include aggiornamenti, assistenza continuativa e adeguamenti normativi — voci che, sommate nel tempo, spesso superano l'abbonamento. Attenzione a non confondere il modello di pagamento con l'architettura: un software installato in studio può benissimo essere in abbonamento con aggiornamenti continui, ed è un vantaggio quando vuoi che i dati restino sotto il tuo controllo.\n\nIl modello freemium prevede una versione base gratuita con limiti (numero di pazienti, documenti o funzionalità) e piani a pagamento per sbloccare il pieno potenziale. WindDoctor, ad esempio, offre una prova gratuita con 12 documenti annui; Gynobase permette di registrarsi e testare il servizio. Attenzione: un piano freemium può andare bene per valutare l'interfaccia, ma raramente copre le esigenze cliniche di un ambulatorio ostetrico attivo con decine di visite settimanali.\n\nQuando calcoli il budget, considera anche i costi nascosti: moduli extra per calcolatori clinici avanzati, migrazione dati storici, personalizzazione template PDF, utenti aggiuntivi per segreteria o collaboratori. Un canone d'ingresso basso a cui si sommano moduli per i percentili fetali, utenti aggiuntivi e personalizzazioni può finire per costare più di un software con un prezzo unico e tutto incluso.\n\nCorioli adotta un modello di abbonamento trasparente: un solo prezzo, [30€ al mese, tutto incluso](/prezzi). Il canone comprende cartella clinica elettronica illimitata, anagrafica pazienti, refertazione PDF, calcolatori clinici avanzati — percentili, stime Hadlock, curve di crescita — e un'impostazione privacy by design con i dati salvati in locale nello studio. Non esistono moduli a pagamento da aggiungere dopo. L'unico servizio a parte è la migrazione dei dati storici da Word, Excel o altri gestionali, facoltativa e su preventivo. Non ci sono costi di attivazione né vincoli contrattuali: puoi provare Corioli gratuitamente per 30 giorni, senza carta di credito, e valutarlo nel tuo ambulatorio reale prima di decidere.",
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
          "Sì. Corioli include un servizio di migrazione dati storici che permette di trasferire l'archivio pazienti da Word, Excel, carta o altri gestionali medici. Il costo è su preventivo, in base al formato e alla dimensione dell'archivio, e copre l'importazione dell'anagrafica e dei dati clinici principali. Il team di Corioli ti guida nel processo: non devi fare da solo export manuali o conversioni di formato. Anagrafiche e appuntamenti in CSV si possono anche importare da soli, con il controllo dei doppioni.",
      },
      {
        question: "È conforme al GDPR?",
        answer:
          "Corioli adotta un approccio privacy by design radicale: i dati clinici delle pazienti sono salvati esclusivamente in locale, sul computer o sulla rete dello studio, e Corioli (l'azienda) non vi ha accesso in alcun modo — non li raccoglie, non li memorizza e non li trasmette a server esterni. Il medico resta l'unico Titolare del Trattamento e, non essendoci trasferimento di dati clinici verso il fornitore, per il funzionamento standard non è necessario un DPA. Restano responsabilità del medico le misure di sicurezza sul proprio PC (backup periodici, password robuste, crittografia del disco, antivirus). Per approfondire, consulta la pagina dedicata alla sicurezza e al GDPR sul sito Corioli.",
      },
      {
        question: "Quante pazienti posso gestire?",
        answer:
          "Con l'abbonamento Corioli non ci sono limiti al numero di pazienti gestibili: l'anagrafica e la cartella clinica elettronica sono illimitate. Puoi archiviare l'intero storico del tuo ambulatorio — visite ginecologiche, gravidanze in corso e concluse, referti, consensi — senza costi aggiuntivi legati al volume. A differenza di alcuni gestionali freemium che limitano i contatti in rubrica o i documenti annuali, Corioli è pensato per studi specialistici con flussi clinici intensi. Se lavori in team con collaboratori o segreteria, scrivici e ti aiutiamo a configurare Corioli per lo studio.",
      },
      {
        question: "C'è assistenza in italiano?",
        answer:
          "Sì. Corioli offre supporto in italiano via chat ed email, con un team che conosce il contesto clinico della ginecologia e dell'ostetricia — non un call center generico. Durante la prova gratuita di 30 giorni hai accesso allo stesso livello di assistenza dei clienti attivi, così puoi risolvere dubbi operativi mentre valuti il software nel tuo ambulatorio. Per richieste di configurazione avanzata, personalizzazione template PDF o migrazione dati, il team è raggiungibile anche telefonicamente. Corioli ha sede in Italia (Sesto Fiorentino, FI) e sviluppa il software in collaborazione con ginecologi italiani.",
      },
    ],
    sources: [
      {
        title:
          "Hadlock FP, Deter RL, Harrist RB, Park SK. Estimating fetal age: computer-assisted analysis of multiple fetal growth parameters. Radiology. 1984;152(2):497-501.",
        url: "https://doi.org/10.1148/radiology.152.2.6739822",
      },
      {
        title:
          "Hadlock FP, Harrist RB, Sharman RS, Deter RL, Park SK. Estimation of fetal weight with the use of head, body, and femur measurements: a prospective study. Am J Obstet Gynecol. 1985;151(3):333-337.",
        url: "https://doi.org/10.1016/0002-9378(85)90298-4",
      },
      {
        title:
          "Hadlock FP, Harrist RB, Martinez-Poyer J. In utero analysis of fetal growth: a sonographic weight standard. Radiology. 1991;181(1):129-133.",
        url: "https://doi.org/10.1148/radiology.181.1.1887021",
      },
      {
        title:
          "Ciobanu A, Wright A, Syngelaki A, Wright D, Akolekar R, Nicolaides KH. Fetal Medicine Foundation reference ranges for umbilical artery and middle cerebral artery pulsatility index and cerebroplacental ratio. Ultrasound Obstet Gynecol. 2019;53(4):465-472.",
        url: "https://doi.org/10.1002/uog.20157",
      },
    ],
  },
  {
    slug: "come-sostituire-word-excel-studio-medico",
    title: "Come sostituire Word e Excel nello studio medico",
    description:
      "Come passare da Word ed Excel a un gestionale medico: migrare i dati storici, eliminare la carta e migliorare il flusso clinico senza perdere nulla.",
    excerpt:
      "Come migrare i dati storici, eliminare la carta e migliorare il flusso clinico passando a un gestionale medico senza perdere nulla.",
    date: "28 Gennaio 2025",
    isoDate: "2025-01-28",
    updated: "2 Novembre 2026",
    updatedIso: "2026-11-02",
    category: "Gestione Studio",
    lead: "Per sostituire Word ed Excel nello studio medico servono tre passaggi: scegliere un gestionale che abbia le visite e i calcoli della tua specialità, portarci l'archivio storico e fissare un giorno da cui le visite nuove si registrano solo lì. Word ed Excel sono strumenti potenti, ma non sono nati per gestire pazienti, visite e referti: ogni documento vive da solo, senza legami con l'anagrafica e con lo storico. Qui trovi cosa non funziona, cosa conviene portare nel gestionale e cosa no, e come si organizza il passaggio.",
    keyPoints: [
      "Con Word ogni referto è un file a sé, senza collegamento con l'anagrafica, con le visite precedenti o con i calcoli: l'archivio cresce, ma non si può interrogare.",
      "Excel tiene i numeri ma non la struttura clinica: non distingue le visite, non produce referti e una cella sovrascritta per sbaglio non lascia traccia.",
      "I referti già scritti in Word non vanno ricopiati: si salvano in PDF e si allegano alla scheda del paziente, mentre le anagrafiche si importano.",
      "Il passaggio funziona quando c'è una data precisa da cui le visite nuove si registrano solo nel gestionale, con il vecchio archivio ancora consultabile.",
      "In Corioli la migrazione da Word ed Excel è un servizio su preventivo, in base a formato e dimensione dell'archivio; il software costa 30€ al mese tutto incluso.",
    ],
    sections: [
      {
        title: "I limiti concreti di Word per i referti medici",
        body: "Con Word ogni referto si crea da zero o da un template che va aggiornato manualmente. Non esiste una connessione con l'anagrafica del paziente, con lo storico delle visite o con i calcolatori clinici. Il risultato è un archivio di file separati, difficile da consultare, impossibile da interrogare e vulnerabile a perdite accidentali.\n\nC'è poi il problema delle versioni. Se un referto viene corretto e salvato sopra, la versione precedente sparisce, e non resta traccia di chi ha cambiato cosa e quando. Per un documento clinico è una debolezza seria, perché è proprio la storia delle modifiche a dimostrare che cosa è stato scritto alla data della visita.",
      },
      {
        title: "Excel per i dati clinici: perché non funziona",
        body: "Excel può sembrare pratico per tenere traccia di parametri nel tempo, ma manca di struttura clinica. Non distingue tra visite, non produce referti e un valore sovrascritto per sbaglio, o una riga ordinata male, cambia i dati senza lasciare traccia. Il rischio di errori di inserimento e di perdita di dati è elevato.\n\nAnche la protezione è limitata. La password su un file impedisce di aprirlo a chi non la conosce, ma non registra le modifiche e non segue le copie: basta un allegato a una email o una chiavetta perché esista una versione del foglio fuori controllo. Il GDPR tratta i dati sanitari come categorie particolari e chiede misure di sicurezza adeguate al rischio.",
      },
      {
        title: "Cosa portare nel gestionale e cosa no",
        body: "Il passaggio non obbliga a ricopiare anni di archivio. Le anagrafiche dei pazienti, se stanno in un foglio Excel, si importano. I referti già scritti in Word restano quello che sono, documenti firmati a una certa data: si salvano in PDF e si allegano alla scheda del paziente, dove si ritrovano con una ricerca per nome invece che fra le cartelle del disco.\n\nI dati numerici del passato, pesi, misure, valori di laboratorio, conviene inserirli solo dove servono davvero, per esempio per i pazienti seguiti nel tempo di cui vuoi vedere l'andamento. Tutto il resto può restare nei PDF allegati.\n\nConviene partire dai pazienti attivi, quelli che rivedrai nei prossimi mesi, e lasciare l'archivio storico più vecchio per ultimo.",
      },
      {
        title: "Come funziona la migrazione a un gestionale medico",
        body: "Il passaggio a un gestionale medico moderno non richiede di ripartire da zero. I dati storici dei pazienti, anche da Word, Excel o carta, possono essere importati o inseriti progressivamente. Il metodo, dalla richiesta dell'esportazione alla verifica dell'import, è spiegato passo per passo nella [guida per cambiare gestionale senza perdere i dati](/blog/cambiare-gestionale-medico-migrazione-dati).\n\nIn Corioli anagrafiche e appuntamenti si importano da file CSV con un tracciato preciso, con il controllo dei doppioni. Per i file Word ed Excel organizzati a modo proprio, la migrazione dei dati storici è un servizio su preventivo, calcolato in base al formato e alla dimensione dell'archivio, che si [chiede dal modulo contatti](/contatti?richiesta=migrazione).\n\nIl passaggio regge quando ha una data: da quel giorno le visite nuove si registrano solo nel gestionale, e il vecchio archivio resta consultabile ma non si aggiorna più. Lavorare in parallelo sui due sistemi, inserendo la stessa visita due volte, produce archivi che divergono in pochi giorni.",
      },
      {
        title: "Cosa cambia in ambulatorio",
        body: "Con un gestionale l'anamnesi si compila in modo guidato e si ritrova alla visita successiva, i calcolatori clinici sono integrati nella visita e i referti escono in PDF con carta intestata, firma e timbro, senza impaginare ogni volta un documento. Lo storico del paziente è in un'unica scheda: visite, documenti prodotti, esami esterni e consensi firmati allegati.\n\nIn Corioli, in più, ogni modifica a una visita lascia una traccia nella cronologia, che non si cancella: quello che in Word si perdeva salvando sopra. Le [funzionalità di Corioli](/funzionalita) sono descritte per esteso, e il software costa 30€ al mese tutto incluso, con 30 giorni di prova gratuita.",
      },
    ],
    faq: [
      {
        question: "Devo ricopiare a mano i vecchi referti scritti in Word?",
        answer:
          "No. I referti già scritti sono documenti firmati a una certa data: si salvano in PDF e si allegano alla scheda del paziente nel gestionale. Conviene inserire come dati strutturati solo i valori che servono a seguire nel tempo i pazienti attivi.",
      },
      {
        question: "Posso importare l'elenco pazienti che tengo in Excel?",
        answer:
          "Sì, se il foglio si salva in CSV con le colonne che il gestionale si aspetta. In Corioli anagrafiche e appuntamenti si importano da CSV con un tracciato preciso e il controllo dei doppioni; se il tuo file è organizzato in un altro modo, la migrazione è un servizio su preventivo.",
      },
      {
        question: "Un file Excel protetto da password basta per il GDPR?",
        answer:
          "Il GDPR non elenca strumenti obbligatori: l'articolo 32 chiede misure adeguate al rischio, che per i dati sanitari è alto. La password impedisce di aprire il file, ma non registra le modifiche e non protegge le copie che circolano per email o su chiavetta.",
      },
      {
        question: "Devo usare Word e il gestionale insieme per un periodo?",
        answer:
          "Meglio di no. Si sceglie una data da cui le visite nuove si registrano solo nel gestionale, e il vecchio archivio resta consultabile senza aggiornarlo. Inserire la stessa visita due volte crea due archivi che in pochi giorni non coincidono più.",
      },
    ],
    sources: [
      {
        title:
          "Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio, del 27 aprile 2016 (GDPR), articoli 9 e 32.",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      },
    ],
  },
  {
    slug: "gestionale-medico-gdpr-cosa-deve-avere",
    title: "Gestionale medico e GDPR: cosa deve avere per essere conforme",
    description:
      "Cosa deve garantire un gestionale medico per il GDPR: sicurezza, accessi, backup e contratti con il fornitore per proteggere i dati dei pazienti.",
    excerpt:
      "Crittografia, backup, DPA e accessi controllati: la checklist per valutare un software medico sul GDPR, e cosa cambia se i dati restano nello studio.",
    date: "20 Gennaio 2025",
    isoDate: "2025-01-20",
    updated: "21 Ottobre 2026",
    updatedIso: "2026-10-21",
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
        body: "[Corioli](/gdpr) segue la strada della minimizzazione: è un software desktop per Windows con archiviazione locale, quindi i dati clinici dei pazienti non lasciano mai lo studio e Corioli non vi ha accesso in alcun modo. Il medico resta l'unico titolare del trattamento, senza DPA necessario per l'uso standard, senza trasferimenti extra-UE e senza rischi di violazione lato fornitore. I consensi firmati si allegano alla scheda del paziente come PDF o immagine, così stanno nella cartella clinica invece che in un archivio cartaceo separato.",
      },
    ],
  },
  {
    slug: "cos-e-cartella-clinica-elettronica-come-sceglierla",
    title: "Cos'è la cartella clinica elettronica e come sceglierla",
    description:
      "Cos'è la cartella clinica elettronica, cosa cambia rispetto alla carta, i vantaggi e i criteri per scegliere il software giusto per lo studio medico.",
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
        body: "[Corioli](/funzionalita) è una cartella clinica elettronica progettata per medici specialisti privati. Integra in un unico ambiente la gestione del paziente, l'anamnesi specializzata, i calcolatori clinici e la produzione di referti PDF. I dati restano salvati in locale, nello studio del medico, secondo un approccio privacy by design attento alla conformità GDPR.",
      },
    ],
  },
  {
    slug: "migliori-software-gestionali-medici-italia",
    title: "Migliori software gestionali per medici in Italia (2026)",
    description:
      "I migliori software gestionali per medici in Italia nel 2026: cosa valutare, differenze tra soluzioni generiche e verticali e perché la specializzazione conta.",
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
        body: "[Corioli](/ginecologia) è stato costruito osservando direttamente il lavoro di ginecologi e ostetrici in ambulatorio, non partendo da un modello amministrativo da adattare alla clinica. Il risultato è un software in cui l'anamnesi è strutturata per la specializzazione, i calcolatori (età gestazionale, Hadlock, percentili, BMI) sono integrati nella visita e i referti escono in PDF pronti senza lavoro extra.",
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
        body: "Corioli nasce come gestionale medico per specialisti, con un [modulo dedicato a ginecologia e ostetricia](/ginecologia). L'obiettivo è portare in un unico ambiente cartella clinica elettronica, calcolatori clinici, refertazione e un approccio ai dati rispettoso del GDPR, con archiviazione in locale nello studio.",
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
        body: "[Corioli](/ginecologia) è indicato quando il medico vuole superare Word, Excel e carta con un software per dottori pensato per la pratica clinica specialistica, non solo per l'amministrazione dello studio.",
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
        body: "[Corioli](/funzionalita) è progettato per studi specialistici che vogliono una cartella clinica elettronica con referti, dati strutturati e un'impostazione privacy by design: i dati restano in locale, nello studio, con attenzione alla conformità GDPR.",
      },
    ],
  },
];

export const postsBySlug: Record<string, BlogPost> = Object.fromEntries(
  posts.map((post) => [post.slug, post]),
);

// --- Categorie -------------------------------------------------------------

// Slug URL-safe di un testo: senza accenti, minuscolo, parole unite da "-".
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Slug URL-safe di una categoria ("Gestione Studio" -> "gestione-studio").
// Usata da /blog/categoria/[slug] e dalla sitemap: unica fonte, cosi i due
// non possono divergere.
export function categorySlug(category: string): string {
  return slugify(category);
}

// Link interni del body: [testo](/percorso). Il gruppo esterno di LINK_INTERNO
// serve a split(), che cosi tiene i link fra le parti di testo.
export const LINK_INTERNO = /(\[[^\]]+\]\(\/[^)\s]*\))/;
const LINK_INTERNO_PARTI = /^\[([^\]]+)\]\((\/[^)\s]*)\)$/;

export function parseLinkInterno(parte: string): { testo: string; href: string } | null {
  const m = parte.match(LINK_INTERNO_PARTI);
  return m ? { testo: m[1], href: m[2] } : null;
}

// Il body in testo semplice, con i link riscritti da `formato` (di default
// resta solo il testo del link).
export function bodyInTesto(
  body: string,
  formato: (testo: string, href: string) => string = (testo) => testo,
): string {
  return body
    .split(LINK_INTERNO)
    .map((parte) => {
      const link = parseLinkInterno(parte);
      return link ? formato(link.testo, link.href) : parte;
    })
    .join("");
}

// Minuti di lettura, stimati a 200 parole al minuto su tutto il testo che il
// lettore trova nella pagina: lead, "In breve", sezioni e domande frequenti.
export function readingMinutes(post: BlogPost): number {
  const text = [
    post.lead,
    ...(post.keyPoints ?? []),
    ...post.sections.map((section) => bodyInTesto(section.body)),
    ...(post.faq ?? []).flatMap((item) => [item.question, item.answer]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
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
      "FSE 2.0, GDPR, Sistema Tessera Sanitaria, conservazione della documentazione clinica e iperammortamento: le regole per lo specialista e il centro privato.",
    intro:
      "Gli adempimenti e le agevolazioni che toccano davvero lo studio privato, spiegati senza gergo: cosa prescrive la norma, a chi si applica, cosa cambia nella pratica quotidiana e da dove conviene iniziare.",
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
  Cardiologia: {
    title: "Cardiologia: refertazione e software per l'ambulatorio",
    description:
      "Refertazione di ECG, ecocardiogramma e TC coronarica, indici calcolati, funzione renale e scelta del gestionale: guide per chi lavora in un ambulatorio cardiologico.",
    intro:
      "Come si tiene insieme un referto cardiologico rapido e dei dati che restino confrontabili nel tempo, senza affidarsi a calcolatori sparsi e a documenti di testo.",
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
