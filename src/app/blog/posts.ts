export type BlogSection = {
  title: string;
  body: string;
  variant?: "text" | "comparison-table";
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
  sections: BlogSection[];
  faq?: FaqItem[];
};

// Fonte unica degli articoli del blog: la pagina dell'articolo, la griglia
// (/blog), la sitemap e le immagini OpenGraph derivano tutte da qui.
// Ordine: dal piu recente al meno recente.
export const posts: BlogPost[] = [
  {
    slug: "miomi-uterini-storia-clinica-completa",
    title: "Miomi uterini: perche la storia clinica completa fa la differenza",
    description:
      "Nella gestione dei miomi uterini avere a portata di mano l'intera storia clinica della paziente migliora diagnosi, follow-up e decisioni. Come Corioli aiuta il ginecologo in ambulatorio.",
    excerpt:
      "Dimensioni, sintomi e follow-up dei miomi vanno letti nel tempo: avere l'intera storia clinica a portata di mano migliora le decisioni. Vi aspettiamo al congresso a Nane Bianche.",
    date: "17 Giugno 2026",
    isoDate: "2026-06-17",
    category: "Eventi",
    lead: "I miomi uterini sono tra le condizioni piu frequenti in ginecologia, ma la loro gestione non si gioca in una singola visita: si gioca nel tempo. E nel tempo conta una cosa sopra le altre: avere l'intera storia clinica della paziente a portata di mano, senza doverla ricostruire ogni volta.",
    sections: [
      {
        title: "Domani al congresso sui miomi: ci siamo anche noi",
        body: "Domani, 18 giugno 2026, saremo al congresso dedicato ai miomi uterini ospitato a Nane Bianche. Per noi e l'occasione di confrontarci con ginecologi e ostetrici sul tema che ci sta piu a cuore: come la tecnologia, quando e progettata davvero intorno alla visita, puo migliorare la qualita del lavoro clinico invece di appesantirlo.\n\nI miomi sono un esempio perfetto. Sono frequentissimi, spesso asintomatici, ma quando contano richiedono decisioni delicate: sorvegliare, trattare farmacologicamente o operare. E ognuna di queste decisioni e migliore quando il medico ha davanti, in pochi secondi, tutto cio che e successo prima.",
      },
      {
        title: "Perche i miomi si gestiscono nel tempo, non in una visita",
        body: "Un mioma non e una fotografia, e un film. Dimensioni, numero, localizzazione (sottosieroso, intramurale, sottomucoso) e impatto sui sintomi - menometrorragie, dolore pelvico, effetti sulla fertilita - cambiano nel corso dei mesi e degli anni. La decisione clinica nasce dal confronto: questo mioma e cresciuto rispetto all'ecografia di sei mesi fa? I sintomi sono peggiorati dopo l'ultima terapia? La paziente ha un desiderio di gravidanza che modifica le priorita?\n\nSenza una storia clinica ordinata, queste domande costringono a ricostruire a memoria, a cercare referti sparsi o a ripetere esami. Con una cartella ben strutturata, la risposta e gia li, davanti agli occhi del medico.",
      },
      {
        title: "Il valore della storia clinica a portata di mano",
        body: "Avere la storia clinica completa durante la visita significa poter confrontare le misure ecografiche di un mioma nel tempo, rivedere le terapie gia provate e la loro efficacia, controllare gli esami precedenti e l'anamnesi senza fare ripartire la paziente dall'inizio del racconto. Si traduce in meno domande ripetute, meno esami inutili e decisioni piu solide.\n\nE un vantaggio per la paziente, che si sente seguita con continuita, ma anche per il medico: una prestazione migliore non dipende solo dall'esperienza, dipende dall'avere il quadro completo al momento giusto. Ogni minuto risparmiato a cercare informazioni e un minuto in piu dedicato alla decisione clinica e alla relazione con la paziente.",
      },
      {
        title: "Come Corioli mette la storia clinica al centro della visita",
        body: "Corioli e un gestionale medico cloud pensato per la pratica clinica di ginecologi e ostetrici. La cartella ginecologica e ostetrica raccoglie anamnesi strutturata, diario delle visite con timeline, referti, ecografie e allegati in un unico ambiente consultabile in pochi clic. I valori - comprese le misure dei miomi - restano confrontabili nel tempo, cosi il follow-up smette di essere una ricostruzione a memoria.\n\nIl risultato e quello che raccontiamo al congresso: il medico arriva alla decisione con il quadro completo davanti, produce il referto senza copia-incolla e dedica piu attenzione alla paziente. Se domani sei a Nane Bianche, passa a trovarci: ti mostriamo come funziona sul campo.",
      },
    ],
    faq: [
      {
        question:
          "Come aiuta un gestionale nella gestione dei miomi uterini?",
        answer:
          "Un gestionale clinico raccoglie in un unico luogo le ecografie, le misure dei miomi, le terapie provate e l'anamnesi della paziente, rendendoli confrontabili nel tempo. Questo permette al ginecologo di valutare rapidamente se un mioma e cresciuto, se i sintomi sono cambiati e se la strategia (sorveglianza, terapia medica o chirurgia) va aggiornata, senza ricostruire la storia a memoria o cercare referti sparsi.",
      },
      {
        question:
          "Posso confrontare le misure dei miomi nel tempo con Corioli?",
        answer:
          "Si. Corioli conserva i dati delle visite in una cartella ginecologica strutturata, con una timeline che permette di confrontare misure, referti ed esami tra una visita e l'altra. Per il follow-up dei miomi questo significa avere subito davanti l'andamento nel tempo, un elemento decisivo per scegliere tra sorveglianza e trattamento.",
      },
      {
        question: "Dove posso vedere Corioli dal vivo?",
        answer:
          "Saremo presenti al congresso sui miomi uterini a Nane Bianche il 18 giugno 2026, dove mostriamo come Corioli supporta il ginecologo in ambulatorio. In alternativa, puoi richiedere una demo gratuita di 15 minuti dalla pagina contatti del sito Corioli e provare il software nel tuo flusso clinico per 90 giorni.",
      },
    ],
  },
  {
    slug: "calcolo-eta-gestazionale-settimane-gravidanza",
    title:
      "Calcolo dell'eta gestazionale: settimane di gravidanza e datazione",
    description:
      "Come si calcola l'eta gestazionale e la data presunta del parto: regola di Naegele, datazione ecografica, settimane + giorni e perche un gestionale ostetrico riduce gli errori.",
    excerpt:
      "Regola di Naegele, datazione ecografica e settimane+giorni: come si calcola l'eta gestazionale senza errori e perche conviene farlo dentro la cartella clinica.",
    date: "16 Giugno 2026",
    isoDate: "2026-06-16",
    category: "Ostetricia",
    lead: "L'eta gestazionale e il punto di partenza di ogni visita ostetrica: da essa dipendono la data presunta del parto, l'interpretazione della biometria fetale e il timing degli screening. Calcolarla in modo corretto e mantenerla coerente nel tempo e tanto importante quanto e facile sbagliarla con conti fatti a mano.",
    sections: [
      {
        title: "Cos'e l'eta gestazionale e perche e il riferimento di tutto",
        body: "L'eta gestazionale esprime da quanto tempo e in corso la gravidanza e si misura in settimane piu giorni (per esempio 24+3, cioe 24 settimane e 3 giorni). Per convenzione si conta a partire dal primo giorno dell'ultima mestruazione, non dal concepimento: per questo l'eta gestazionale e di circa due settimane superiore all'eta concezionale.\n\nE il riferimento su cui poggia tutto il resto: la datazione determina la data presunta del parto, definisce le finestre per gli screening del primo e secondo trimestre e permette di leggere correttamente la biometria fetale e i percentili di crescita. Un errore di datazione, anche di pochi giorni, si propaga a cascata su tutte le valutazioni successive.",
      },
      {
        title: "Regola di Naegele e data presunta del parto",
        body: "Il metodo classico per stimare la data presunta del parto (DPP) e la regola di Naegele: si prende il primo giorno dell'ultima mestruazione, si aggiungono 7 giorni, si sottraggono 3 mesi e si aggiunge un anno. Il risultato corrisponde a una gravidanza di circa 280 giorni (40 settimane) dall'ultima mestruazione.\n\nLa regola assume pero un ciclo regolare di 28 giorni con ovulazione al quattordicesimo giorno. Quando il ciclo e piu lungo, piu corto o irregolare, la stima va corretta di conseguenza; lo stesso vale se la data dell'ultima mestruazione e incerta. Per questo la regola di Naegele e un buon punto di partenza, ma raramente l'ultima parola.",
      },
      {
        title: "Datazione ecografica: quando prevale sull'ultima mestruazione",
        body: "Nel primo trimestre la misura della lunghezza cranio-caudale (CRL) e il metodo piu accurato per datare la gravidanza. Le principali linee guida raccomandano di rivedere la datazione basata sull'ultima mestruazione quando la stima ecografica se ne discosta oltre una certa soglia - indicativamente alcuni giorni nelle prime settimane, fino a circa una settimana verso la fine del primo trimestre.\n\nIn pratica: se l'ecografia precoce e l'ultima mestruazione concordano, si conferma la datazione mestruale; se divergono in modo significativo, si adotta la datazione ecografica. Stabilire la datazione una volta e mantenerla coerente per tutta la gravidanza evita ricalcoli contraddittori tra una visita e l'altra. Le soglie esatte vanno sempre verificate sulle linee guida di riferimento e sul giudizio clinico.",
      },
      {
        title: "Settimane + giorni: l'errore piu comune nei referti",
        body: "L'eta gestazionale va espressa in settimane compiute piu giorni, e qui si annidano gli errori piu frequenti: confondere settimane intere con settimane piu giorni, aggiornare la datazione a mano a ogni visita, riportare nel referto un valore non coerente con quello calcolato in cartella. Sono sviste banali, ma su una gravidanza seguita per mesi diventano una fonte di confusione.\n\nIl problema nasce quasi sempre dal calcolo manuale o dal copia-incolla tra documenti separati. Ogni volta che il dato viene ricopiato a mano da Word, da un'app esterna o da un foglio, aumenta la probabilita che una visita riporti un'eta gestazionale leggermente diversa dalle altre.",
      },
      {
        title: "Perche calcolare l'eta gestazionale dentro il gestionale",
        body: "Avere la datazione integrata nella cartella clinica elimina i passaggi manuali: l'eta gestazionale si aggiorna automaticamente a ogni visita a partire dalla datazione stabilita, resta coerente con la data presunta del parto e si collega direttamente alla biometria e ai percentili. Il referto eredita lo stesso valore, senza ricopiature.\n\nCorioli include i calcolatori ostetrici - datazione, eta gestazionale, stima del peso fetale secondo Hadlock, percentili e curve di crescita - direttamente nel flusso della visita. Il medico inserisce i dati una volta sola e li ritrova coerenti in cartella e nel referto PDF, riducendo gli errori di trascrizione e il tempo speso a fare conti tra app diverse.",
      },
    ],
    faq: [
      {
        question: "Come si calcola la data presunta del parto?",
        answer:
          "Il metodo classico e la regola di Naegele: al primo giorno dell'ultima mestruazione si aggiungono 7 giorni, si sottraggono 3 mesi e si aggiunge un anno, per una gravidanza di circa 280 giorni (40 settimane). La stima va corretta se il ciclo non e regolare di 28 giorni o se la data dell'ultima mestruazione e incerta, e nel primo trimestre puo essere rivista in base alla datazione ecografica.",
      },
      {
        question:
          "Eta gestazionale ed eta concezionale sono la stessa cosa?",
        answer:
          "No. L'eta gestazionale si conta dal primo giorno dell'ultima mestruazione, mentre l'eta concezionale si conta dal concepimento. Poiche l'ovulazione avviene circa due settimane dopo l'inizio del ciclo, l'eta gestazionale e di norma superiore di circa due settimane rispetto all'eta concezionale. In ostetricia il riferimento standard e l'eta gestazionale.",
      },
      {
        question:
          "Quando la datazione ecografica sostituisce l'ultima mestruazione?",
        answer:
          "Nel primo trimestre la misura della lunghezza cranio-caudale (CRL) e il metodo piu accurato. Le linee guida raccomandano di adottare la datazione ecografica quando questa si discosta dalla datazione mestruale oltre una certa soglia (indicativamente da alcuni giorni a circa una settimana, a seconda dell'epoca). Le soglie precise vanno verificate sulle linee guida di riferimento e integrate con il giudizio clinico.",
      },
      {
        question: "Corioli calcola l'eta gestazionale automaticamente?",
        answer:
          "Si. Corioli include i calcolatori ostetrici integrati nella cartella clinica: una volta stabilita la datazione, l'eta gestazionale si aggiorna automaticamente a ogni visita e resta coerente con la data presunta del parto, la biometria fetale e i percentili. Il valore viene riportato anche nel referto PDF senza ricopiature manuali, riducendo il rischio di errori.",
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
        body: "Corioli nasce specificamente per ginecologia e ostetricia, sviluppato con la consulenza di specialisti delle migliori strutture italiane. Include tutti gli strumenti clinici elencati sopra, una cartella ostetrica elettronica completa, referti PDF personalizzabili e sicurezza cloud con attenzione alla conformità GDPR. La prova gratuita di 90 giorni permette di valutarlo nel proprio flusso clinico reale.",
      },
      {
        title: "Confronto tra i principali software ginecologici in Italia",
        variant: "comparison-table",
        body: "Scegliere un gestionale per ginecologi significa confrontare soluzioni molto diverse tra loro: alcune nascono per la gestione amministrativa dello studio e aggiungono moduli clinici in un secondo momento, altre sono verticali e pensate fin dall'inizio per la visita ostetrica e ginecologica. In Italia, tra i nomi più citati in ambulatorio troviamo Corioli, ArzaMed, Gynobase e WindDoctor. Nessuno di questi software è 'migliore in assoluto': la scelta dipende da quanto peso dai agli strumenti clinici nativi rispetto alla fatturazione elettronica, al numero di utenti e al budget mensile dello studio.\n\nArzaMed è una soluzione cloud consolidata, molto orientata alla gestione complessiva di studi e poliambulatori: agenda, fatturazione sanitaria, integrazione con il Sistema Tessera Sanitaria e cartella clinica ginecologica personalizzabile. È una scelta solida per chi gestisce team numerosi, ma il canone parte da 99€ al mese per due utenti — un investimento significativo per il libero professionista che lavora da solo.\n\nGynobase è storico nel panorama italiano: offre gestione di anagrafiche, visite ginecologiche e visite in gravidanza, con la possibilità di usare una versione desktop offline (Gynobase Portable) quando la connessione non è disponibile. L'interfaccia è essenziale e funzionale, ma i calcolatori fetali avanzati e l'esperienza utente moderna non sono il suo punto di forza principale.\n\nWindDoctor propone un gestionale cloud accessibile, con piani a partire da 10€ al mese e una prova gratuita limitata. Copre appuntamenti, cartelle cliniche digitali e fatturazione, ma resta un software generalista: per la biometria fetale, i percentili Hadlock e una cartella ostetrica strutturata il medico dovrà spesso integrare strumenti esterni.\n\nCorioli si colloca come alternativa verticale: nato per ginecologia e ostetricia, integra cartella ostetrica elettronica, calcolatori fetali (Hadlock, biometria, percentili, età gestazionale), referti PDF e consenso informato digitale in un unico flusso clinico. Il piano base parte da 15€ al mese con prova gratuita di 90 giorni — un posizionamento pensato per lo specialista privato che vuole strumenti clinici professionali senza il costo di un gestionale enterprise.\n\nLa tabella seguente riassume le differenze principali. I prezzi indicativi sono quelli pubblicati sui siti ufficiali al 2025 e possono variare in base a moduli aggiuntivi, numero di utenti e promozioni in corso.",
      },
      {
        title: "Quanto costa un gestionale per ginecologi?",
        body: "Il costo di un gestionale per ginecologi dipende dal modello commerciale scelto dal fornitore e dalle funzionalità incluse nel canone base. Conoscere le tre tipologie di pricing più diffuse aiuta a evitare sorprese e a calcolare il costo reale su 12 mesi, non solo quello del primo mese promozionale.\n\nIl modello più comune oggi è l'abbonamento mensile (SaaS cloud): paghi un canone fisso ogni mese e ottieni accesso al software, aggiornamenti automatici, backup e assistenza. I vantaggi sono prevedibilità, nessun investimento iniziale in server o licenze e la possibilità di disdire se il software non si adatta al tuo flusso. I canoni variano da circa 10€ al mese per soluzioni generaliste con funzionalità limitate, fino a 99€-499€ al mese per gestionali enterprise pensati per poliambulatori con molti utenti. Per un ginecologo in libera professione, la fascia utile si colloca generalmente tra 15€ e 50€ al mese per un software verticale completo.\n\nEsiste ancora, soprattutto tra software più datati, il modello a licenza perpetua: paghi una tantum per il software e lo installi sul tuo computer. Il costo iniziale può sembrare conveniente, ma non include aggiornamenti, backup cloud, assistenza continuativa e conformità GDPR — voci che, sommate nel tempo, spesso superano l'abbonamento. Inoltre, una licenza desktop legata a un singolo PC crea rischi operativi: se il computer si guasta, perdi l'accesso ai dati finché non ripristini il backup locale.\n\nIl modello freemium prevede una versione base gratuita con limiti (numero di pazienti, documenti o funzionalità) e piani a pagamento per sbloccare il pieno potenziale. WindDoctor, ad esempio, offre una prova gratuita con 12 documenti annui; Gynobase permette di registrarsi e testare il servizio. Attenzione: un piano freemium può andare bene per valutare l'interfaccia, ma raramente copre le esigenze cliniche di un ambulatorio ostetrico attivo con decine di visite settimanali.\n\nQuando calcoli il budget, considera anche i costi nascosti: moduli extra per calcolatori clinici avanzati, migrazione dati storici, personalizzazione template PDF, utenti aggiuntivi per segreteria o collaboratori. Un gestionale a 19€ al mese che richiede 15€ extra per i percentili fetali e 29€ una tantum per la migrazione costa di più di un software a 15€ con tutto incluso.\n\nCorioli adotta un modello di abbonamento trasparente: il Piano Specialista include cartella clinica elettronica illimitata, anagrafica pazienti cloud, refertazione PDF, backup giornaliero e conformità GDPR. Il canone è di 19€ al mese (o 15€/mese con fatturazione annuale). I calcolatori clinici avanzati — percentili, stime Hadlock, curve di crescita — sono disponibili come modulo opzionale a 15€/mese, con i primi 90 giorni inclusi nel periodo di prova. La migrazione dati storici da Word, Excel o altri gestionali costa 29€ una tantum. Non ci sono costi di attivazione né vincoli contrattuali: puoi provare Corioli gratuitamente per 90 giorni, senza carta di credito, e valutarlo nel tuo ambulatorio reale prima di decidere.",
      },
    ],
    faq: [
      {
        question: "Il gestionale funziona senza internet?",
        answer:
          "Corioli è un software cloud: per accedere alla cartella clinica, compilare le visite e generare i referti serve una connessione internet attiva. Questo garantisce backup automatici, sincronizzazione tra dispositivi e aggiornamenti sempre disponibili senza interventi manuali. Se lavori in zone con connettività instabile, valuta la qualità della rete in ambulatorio prima dell'adozione. A differenza di soluzioni desktop come Gynobase Portable, Corioli non offre una modalità offline completa: la scelta è deliberata, per garantire che i dati sanitari siano sempre protetti su server europei con crittografia e backup georeplicati, anziché su un singolo hard disk locale.",
      },
      {
        question: "Posso migrare i dati dal mio vecchio software?",
        answer:
          "Sì. Corioli include un servizio di migrazione dati storici che permette di trasferire l'archivio pazienti da Word, Excel, carta o altri gestionali medici. Il costo è di 29€ una tantum e copre l'importazione dell'anagrafica e dei dati clinici principali. Il team di Corioli ti guida nel processo: non devi fare da solo export manuali o conversioni di formato. Molti ginecologi che passano da Word o da software datati come Gynobase completano la migrazione in pochi giorni, continuando a lavorare in parallelo finché l'archivio non è completamente operativo nel nuovo gestionale.",
      },
      {
        question: "È conforme al GDPR?",
        answer:
          "Corioli è progettato per la conformità GDPR dei dati sanitari. I dati sono cifrati in transito (TLS) e a riposo (AES-256), con backup giornalieri su server europei certificati. Il software include log degli accessi auditabili, gestione granulare dei permessi utente e un Data Processing Agreement (DPA) precompilato che formalizza il rapporto tra il medico (titolare del trattamento) e Corioli (responsabile del trattamento). Il modulo di consenso informato digitale è integrato nativamente, eliminando archivi cartacei separati. Per approfondire le misure tecniche e organizzative adottate, consulta la pagina dedicata alla sicurezza e al GDPR sul sito Corioli.",
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
        body: "Un gestionale medico conforme al GDPR deve cifrare i dati sia durante la trasmissione (TLS) che a riposo (AES-256), effettuare backup automatici e georepliacati, mantenere log degli accessi auditabili e permettere una gestione granulare dei permessi utente. Soluzioni che archiviano dati in chiaro o su sistemi locali non aggiornati non soddisfano questi requisiti.",
      },
      {
        title: "Il Data Processing Agreement (DPA)",
        body: "Quando il medico usa un software cloud, il fornitore diventa responsabile del trattamento dei dati. Il GDPR richiede che questa relazione sia formalizzata in un contratto DPA. Senza questo documento, il medico è esposto a responsabilità. Verificare che il fornitore del gestionale offra un DPA conforme è uno dei primi passi nella valutazione.",
      },
      {
        title: "Come Corioli gestisce la conformità",
        body: "Corioli include crittografia completa, backup giornalieri su server europei certificati, log degli accessi e fornisce un DPA precompilato per i propri clienti. Il modulo di raccolta del consenso informato digitale è integrato nativamente nel software, eliminando la necessità di archivi cartacei separati.",
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
        body: "Sicurezza e conformità GDPR sono requisiti non negoziabili per i dati sanitari. Il software scelto deve garantire crittografia dei dati in transito e a riposo, backup automatici, log degli accessi e un contratto DPA che regolamenti il ruolo del fornitore come responsabile del trattamento. Soluzioni cloud su server europei sono preferibili per evitare complessità nei trasferimenti di dati extra-UE.",
      },
      {
        title: "Corioli come cartella clinica elettronica per specialisti",
        body: "Corioli è una cartella clinica elettronica cloud progettata per medici specialisti privati. Integra in un unico ambiente la gestione del paziente, l'anamnesi specializzata, i calcolatori clinici e la produzione di referti PDF. I dati sono protetti con crittografia, backup giornalieri e attenzione alla conformità GDPR.",
      },
    ],
  },
  {
    slug: "migliori-software-gestionali-medici-italia",
    title: "Migliori software gestionali per medici in Italia (2025)",
    description:
      "Guida ai migliori software gestionali per medici in Italia nel 2025: cosa valutare, differenze tra soluzioni generiche e verticali, e perché la specializzazione fa la differenza.",
    excerpt:
      "Cosa distingue un gestionale generico da uno verticale, cosa valutare prima di scegliere e perché il cloud cambia le regole del gioco.",
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
        title: "Il fattore cloud",
        body: "Un gestionale cloud elimina la necessità di server locali, aggiornamenti manuali e backup fai-da-te. I dati sono disponibili da qualsiasi dispositivo, protetti da crittografia e con backup automatici georepliacati. Per uno studio medico privato, questo si traduce in meno rischi operativi e più continuità.",
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
        body: "Corioli nasce come gestionale medico cloud per specialisti, con un modulo dedicato a ginecologia e ostetricia. L'obiettivo è portare in un unico ambiente cartella clinica elettronica, calcolatori clinici, refertazione e sicurezza GDPR.",
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
      "Cosa valutare nel 2025 quando si sceglie una cartella clinica elettronica per studio medico: sicurezza, GDPR, backup, accessi e software cloud.",
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
        body: "Corioli è progettato per studi specialistici che vogliono una cartella clinica elettronica cloud con referti, dati strutturati, sicurezza e attenzione alla conformità GDPR.",
      },
    ],
  },
];

export const postsBySlug: Record<string, BlogPost> = Object.fromEntries(
  posts.map((post) => [post.slug, post]),
);
