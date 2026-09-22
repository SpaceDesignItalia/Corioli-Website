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
        body: "Quasi tutti i dati che servono a questi punteggi sono già nella visita: età e sesso nell'anagrafica, ipertensione, diabete, scompenso e malattia vascolare fra i fattori di rischio, la creatinina fra gli esami di laboratorio. Un calcolatore separato obbliga a ricopiarli; un gestionale che li rilegge da dove stanno elimina l'errore alla radice.\n\nIn Corioli Cardiologia, in arrivo a ottobre 2026, il modulo della fibrillazione atriale funziona così: età e sesso arrivano dall'anagrafica e non sono caselle da spuntare, gli altri fattori dal pannello dei fattori di rischio della visita, e i due punteggi compaiono in un riquadro con la fonte accanto. Il punteggio calcolato è il CHA2DS2-VASc; quando un punto deriva solo dal sesso femminile l'applicazione lo segnala, e togliendolo si ottiene il CHA2DS2-VA. L'HAS-BLED distingue le voci su cui si può intervenire, e il software non propone né sconsiglia l'anticoagulazione: la decisione resta del medico.\n\nNel referto finisce solo il totale, accanto a peso, creatinina, età ed eGFR. E il modulo si stampa solo se il medico ha dichiarato la fibrillazione atriale: i punteggi si calcolano da età, sesso e fattori di rischio, quindi senza quell'interruttore comparirebbero su ogni referto.",
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
        body: "Un QTc scritto da solo non è confrontabile con quello del controllo successivo, soprattutto se nel frattempo è cambiata la frequenza. Nel referto conviene riportare il QT misurato, la frequenza cardiaca, la formula usata e il QTc risultante: quattro numeri, una riga.\n\nIn Corioli Cardiologia, in arrivo a ottobre 2026, il modulo ECG ha campi separati per PR, QRS, QT e asse; il QTc secondo Bazett si calcola mentre si compila, con la formula indicata accanto al risultato e un avviso quando la frequenza è fuori dalla finestra 50-100 bpm. Nel referto l'elettrocardiogramma esce come tabella, e il QTc è in grassetto solo se è fuori dai limiti: nessun giudizio scritto accanto, perché a leggere il foglio è un medico.",
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
        body: "Un referto di flussimetria ombelicale completo dice dove è stata fatta la misura, riporta il PI e, se lo si usa, l'IR con il percentile per l'epoca gestazionale, e descrive il flusso diastolico: presente, ridotto, assente o invertito. Se sono state misurate anche l'arteria cerebrale media o le arterie uterine, i loro valori e il rapporto cerebro-placentare vanno accanto, con le curve di riferimento usate.\n\nIn Corioli la flussimetria del cordone ombelicale è un blocco della visita ostetrica: inserisci PI e IR, e l'applicazione mostra il percentile per l'epoca gestazionale con una barra grafica fra il 5° e il 95°. Per il PI le curve sono quelle della Fetal Medicine Foundation. L'arteria cerebrale media e il rapporto cerebro-placentare, oggi, si descrivono nel testo del referto con i modelli: non hanno un calcolatore dedicato.",
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
        body: "Corioli è un gestionale medico installato: un'applicazione desktop per Windows e macOS che salva l'archivio sul computer dello studio. Le cartelle cliniche non vengono trasmesse ai nostri server e non vi accediamo; verso di noi vanno solo i dati della licenza e i messaggi che scrivi in chat all'assistenza. Per l'uso ordinario non serve un accordo di nomina a responsabile del trattamento.\n\nIl rovescio, detto chiaramente: l'applicazione fa copie automatiche ogni giorno e prima di ogni importazione o ripristino, ma stanno sullo stesso disco, e la copia fuori dal computer, da esportare dalle impostazioni, resta compito dello studio. E non c'è una sincronizzazione automatica fra computer diversi: se lavori su più sedi con lo stesso archivio, oggi Corioli non è lo strumento giusto.",
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
      "ECG, ecocardiogramma, calcium score, QTc, eGFR, CHA2DS2-VASc: cosa distingue un software pensato per l'ambulatorio cardiologico da un gestionale generico, e le domande da fare prima di sceglierlo.",
    excerpt:
      "Un gestionale cardiologico non si giudica dall'archivio pazienti, ma da come si comporta quando devi refertare un ECG e un eco in dieci minuti. Ecco i criteri che contano.",
    date: "7 Settembre 2026",
    isoDate: "2026-09-07",
    updated: "22 Settembre 2026",
    updatedIso: "2026-09-22",
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
        body: "Prendi un ecocardiogramma transtoracico. Le misure che finiscono nel referto sono sempre quelle: DTD e DTS, setto interventricolare, parete posteriore, frazione di eiezione, atrio sinistro, radice aortica, aorta ascendente, TAPSE, PAPs, rapporto E/A ed E/e'. Sono una dozzina di numeri con la loro unità di misura e il loro intervallo di normalità.\n\nSe quei numeri vivono dentro una frase — «FE 58%, AS 38 mm, TAPSE 21 mm» — sono testo. Il software non sa che 58 è una percentuale, non sa che quel valore ha un significato clinico, non può dirti come è cambiato dal controllo dell'anno scorso e non può metterlo in una tabella leggibile nel PDF. Se invece ogni misura è un campo, tutto questo diventa possibile senza che tu faccia nulla di diverso mentre scrivi.\n\nVale lo stesso per l'elettrocardiogramma — ritmo, PR, QRS, QT, asse — e per la TC coronarica, dove il calcium score, la fascia Agatston e il CAD-RADS sono classificazioni codificate, non aggettivi. La domanda da fare a chi ti vende un gestionale è secca: questi sono campi o è un editor di testo con un titolo sopra?",
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
          "Sì. Corioli Cardiologia viene rilasciata al pubblico a ottobre 2026: elettrocardiogramma, pressione arteriosa ed esami di laboratorio in ogni visita, e moduli da attivare quando servono per ecocardiogramma, TC coronarica, test ergometrico, Holter ECG e pressorio, Doppler dei tronchi sovraaortici, scompenso e fibrillazione atriale. Gli indici calcolati hanno sempre la formula in chiaro, i pazienti si possono raggruppare per progetto di ricerca e i referti PDF riportano gli esami strumentali in tabella. I requisiti clinici sono dettati da un cardiologo. I dati restano in locale sul computer dello studio e l'archivio è separato da quello dell'edizione per la ginecologia.",
      },
    ],
  },
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
        body: "Grazie a tutti i ginecologi e gli ostetrici che si sono fermati allo stand, hanno provato Corioli e ci hanno raccontato il loro modo di lavorare. Corioli è sviluppato in Italia, con i medici, e gestisce già oltre 15.000 cartelle pazienti: giornate come questa sono il motivo per cui continua a migliorare.\n\nNon sei riuscito a passare? Puoi vedere Corioli dal vivo lo stesso: richiedi una demo gratuita di 15 minuti dalla pagina contatti e ti mostriamo come funziona nel tuo flusso clinico, con 30 giorni di prova senza impegno.",
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
          "Saremo presenti al congresso sui miomi uterini a Nana Bianca il 18 giugno 2026, dove mostriamo come Corioli supporta il ginecologo in ambulatorio. In alternativa, puoi richiedere una demo gratuita di 15 minuti dalla pagina contatti del sito Corioli e provare il software nel tuo flusso clinico per 30 giorni.",
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
    updated: "22 Settembre 2026",
    updatedIso: "2026-09-22",
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
        body: "Corioli nasce specificamente per ginecologia e ostetricia, sviluppato con la consulenza di specialisti delle migliori strutture italiane. Include tutti gli strumenti clinici elencati sopra, una cartella ostetrica elettronica completa, referti PDF personalizzabili e un approccio privacy by design: i dati delle pazienti restano salvati in locale, nel tuo studio, sotto il tuo esclusivo controllo. La prova gratuita di 30 giorni permette di valutarlo nel proprio flusso clinico reale.",
      },
      {
        title: "Confronto tra i principali software ginecologici in Italia",
        variant: "comparison-table",
        body: "Scegliere un gestionale per ginecologi significa confrontare soluzioni molto diverse tra loro: alcune nascono per la gestione amministrativa dello studio e aggiungono moduli clinici in un secondo momento, altre sono verticali e pensate fin dall'inizio per la visita ostetrica e ginecologica. In Italia, tra i nomi più citati in ambulatorio troviamo Corioli, ArzaMed, Gynobase e WindDoctor. Nessuno di questi software è 'migliore in assoluto': la scelta dipende da quanto peso dai agli strumenti clinici nativi rispetto alla fatturazione elettronica, al numero di utenti e al budget mensile dello studio.\n\nArzaMed è una soluzione cloud consolidata, molto orientata alla gestione complessiva di studi e poliambulatori: agenda, fatturazione sanitaria, integrazione con il Sistema Tessera Sanitaria e cartella clinica ginecologica personalizzabile. È una scelta solida per chi gestisce team numerosi, ma il canone parte da 99€ al mese per due utenti — un investimento significativo per il libero professionista che lavora da solo.\n\nGynobase è storico nel panorama italiano: offre gestione di anagrafiche, visite ginecologiche e visite in gravidanza, con la possibilità di usare una versione desktop offline (Gynobase Portable) quando la connessione non è disponibile. L'interfaccia è essenziale e funzionale, ma i calcolatori fetali avanzati e l'esperienza utente moderna non sono il suo punto di forza principale.\n\nWindDoctor propone un gestionale cloud accessibile, con piani a partire da 10€ al mese e una prova gratuita limitata. Copre appuntamenti, cartelle cliniche digitali e fatturazione, ma resta un software generalista: per la biometria fetale, i percentili Hadlock e una cartella ostetrica strutturata il medico dovrà spesso integrare strumenti esterni.\n\nCorioli si colloca come alternativa verticale: nato per ginecologia e ostetricia, integra cartella ostetrica elettronica, calcolatori fetali (Hadlock, biometria, percentili, età gestazionale), referti PDF e consenso informato digitale in un unico flusso clinico. Costa 30€ al mese, tutto incluso, con prova gratuita di 30 giorni — un posizionamento pensato per lo specialista privato che vuole strumenti clinici professionali senza il costo di un gestionale enterprise.\n\nLa tabella seguente riassume le differenze principali. I prezzi indicativi sono quelli pubblicati sui siti ufficiali al 2025 e possono variare in base a moduli aggiuntivi, numero di utenti e promozioni in corso.",
      },
      {
        title: "Quanto costa un gestionale per ginecologi?",
        body: "Il costo di un gestionale per ginecologi dipende dal modello commerciale scelto dal fornitore e dalle funzionalità incluse nel canone base. Conoscere le tre tipologie di pricing più diffuse aiuta a evitare sorprese e a calcolare il costo reale su 12 mesi, non solo quello del primo mese promozionale.\n\nIl modello più comune oggi è l'abbonamento mensile (SaaS cloud): paghi un canone fisso ogni mese e ottieni accesso al software, aggiornamenti automatici, backup e assistenza. I vantaggi sono prevedibilità, nessun investimento iniziale in server o licenze e la possibilità di disdire se il software non si adatta al tuo flusso. I canoni variano da circa 10€ al mese per soluzioni generaliste con funzionalità limitate, fino a 99€-499€ al mese per gestionali enterprise pensati per poliambulatori con molti utenti. Per un ginecologo in libera professione, la fascia utile si colloca generalmente tra 15€ e 50€ al mese per un software verticale completo.\n\nEsiste ancora, soprattutto tra software più datati, il modello a licenza perpetua: paghi una tantum per il software e lo installi sul tuo computer. Il costo iniziale può sembrare conveniente, ma di solito non include aggiornamenti, assistenza continuativa e adeguamenti normativi — voci che, sommate nel tempo, spesso superano l'abbonamento. Attenzione a non confondere il modello di pagamento con l'architettura: un software installato in studio può benissimo essere in abbonamento con aggiornamenti continui, ed è un vantaggio quando vuoi che i dati restino sotto il tuo controllo.\n\nIl modello freemium prevede una versione base gratuita con limiti (numero di pazienti, documenti o funzionalità) e piani a pagamento per sbloccare il pieno potenziale. WindDoctor, ad esempio, offre una prova gratuita con 12 documenti annui; Gynobase permette di registrarsi e testare il servizio. Attenzione: un piano freemium può andare bene per valutare l'interfaccia, ma raramente copre le esigenze cliniche di un ambulatorio ostetrico attivo con decine di visite settimanali.\n\nQuando calcoli il budget, considera anche i costi nascosti: moduli extra per calcolatori clinici avanzati, migrazione dati storici, personalizzazione template PDF, utenti aggiuntivi per segreteria o collaboratori. Un canone d'ingresso basso a cui si sommano moduli per i percentili fetali, utenti aggiuntivi e personalizzazioni può finire per costare più di un software con un prezzo unico e tutto incluso.\n\nCorioli adotta un modello di abbonamento trasparente: un solo prezzo, 30€ al mese, tutto incluso. Il canone comprende cartella clinica elettronica illimitata, anagrafica pazienti, refertazione PDF, calcolatori clinici avanzati — percentili, stime Hadlock, curve di crescita — e un'impostazione privacy by design con i dati salvati in locale nello studio. Non esistono moduli a pagamento da aggiungere dopo. L'unico servizio a parte è la migrazione dei dati storici da Word, Excel o altri gestionali, facoltativa e su preventivo. Non ci sono costi di attivazione né vincoli contrattuali: puoi provare Corioli gratuitamente per 30 giorni, senza carta di credito, e valutarlo nel tuo ambulatorio reale prima di decidere.",
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
          "Sì. Corioli include un servizio di migrazione dati storici che permette di trasferire l'archivio pazienti da Word, Excel, carta o altri gestionali medici. Il costo è su preventivo, in base al formato e alla dimensione dell'archivio, e copre l'importazione dell'anagrafica e dei dati clinici principali. Il team di Corioli ti guida nel processo: non devi fare da solo export manuali o conversioni di formato. Molti ginecologi che passano da Word o da software datati come Gynobase completano la migrazione in pochi giorni, continuando a lavorare in parallelo finché l'archivio non è completamente operativo nel nuovo gestionale.",
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
  Cardiologia: {
    title: "Cardiologia: refertazione e software per l'ambulatorio",
    description:
      "Refertazione di ECG ed ecocardiogramma, indici calcolati, calcium score e scelta del gestionale: guide per chi lavora in un ambulatorio cardiologico.",
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
