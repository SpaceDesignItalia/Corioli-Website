import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type BlogSection = {
  title: string;
  body: string;
  variant?: "text" | "comparison-table";
};

type FaqItem = {
  question: string;
  answer: string;
};

type BlogPost = {
  title: string;
  description: string;
  date: string;
  category: string;
  lead: string;
  sections: BlogSection[];
  faq?: FaqItem[];
};

type ComparisonRow = {
  name: string;
  deployment: string;
  fetalCalculators: string;
  obstetricRecord: string;
  freeTrial: string;
  price: string;
  highlight?: boolean;
};

const gynecologySoftwareComparison: ComparisonRow[] = [
  {
    name: "Corioli",
    deployment: "Cloud",
    fetalCalculators: "Sì — Hadlock, biometria, percentili, età gestazionale",
    obstetricRecord: "Sì — cartella ostetrica e ginecologica completa",
    freeTrial: "90 giorni, senza carta di credito",
    price: "da 15€/mese (piano annuale)",
    highlight: true,
  },
  {
    name: "ArzaMed",
    deployment: "Cloud",
    fetalCalculators: "Limitati — focus su gestione amministrativa",
    obstetricRecord: "Sì — modulo ginecologia personalizzabile",
    freeTrial: "Demo gratuita su richiesta",
    price: "da 99€/mese (fino a 2 utenti)",
  },
  {
    name: "Gynobase",
    deployment: "Cloud + versione desktop offline",
    fetalCalculators: "Parziali — strumenti base, interfaccia datata",
    obstetricRecord: "Sì — visite in gravidanza e ginecologia",
    freeTrial: "Demo e registrazione",
    price: "Su richiesta",
  },
  {
    name: "WindDoctor",
    deployment: "Cloud",
    fetalCalculators: "Generici — non verticali per ostetricia",
    obstetricRecord: "Parziale — cartelle cliniche generiche",
    freeTrial: "Prova gratuita limitata (12 documenti/anno)",
    price: "da 10€/mese",
  },
];

const posts: Record<string, BlogPost> = {
  "come-digitalizzare-lo-studio-ginecologico": {
    title: "Come digitalizzare lo studio ginecologico: la guida definitiva",
    description:
      "Guida pratica per passare da carta, Word ed Excel a un gestionale medico per ginecologi con cartella clinica elettronica, referti e dati sicuri.",
    date: "24 Maggio 2024",
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
  "gestionale-medico-vs-word-ginecologi": {
    title: "Gestionale medico vs Word: perché i ginecologi cambiano",
    description:
      "Confronto tra Word, Excel e un gestionale medico per ginecologi: limiti dei documenti generici, rischi operativi e vantaggi della cartella clinica elettronica.",
    date: "12 Maggio 2024",
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
  "cartella-clinica-elettronica-obbligatoria-2025": {
    title: "Cartella clinica elettronica: cosa cambia nel 2025?",
    description:
      "Cosa valutare nel 2025 quando si sceglie una cartella clinica elettronica per studio medico: sicurezza, GDPR, backup, accessi e software cloud.",
    date: "3 Maggio 2024",
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
  "migliori-software-gestionali-medici-italia": {
    title: "Migliori software gestionali per medici in Italia (2025)",
    description:
      "Guida ai migliori software gestionali per medici in Italia nel 2025: cosa valutare, differenze tra soluzioni generiche e verticali, e perché la specializzazione fa la differenza.",
    date: "10 Gennaio 2025",
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
  "cos-e-cartella-clinica-elettronica-come-sceglierla": {
    title: "Cos'è la cartella clinica elettronica e come sceglierla",
    description:
      "Guida completa alla cartella clinica elettronica per studi medici: differenze con la carta, vantaggi, criteri di scelta e cosa deve offrire un buon software medico.",
    date: "15 Gennaio 2025",
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
  "gestionale-medico-gdpr-cosa-deve-avere": {
    title: "Gestionale medico e GDPR: cosa deve avere per essere conforme",
    description:
      "Guida pratica alla conformità GDPR per studi medici: cosa deve garantire un gestionale medico in termini di sicurezza, accessi, backup e contratti per proteggere i dati dei pazienti.",
    date: "20 Gennaio 2025",
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
  "come-sostituire-word-excel-studio-medico": {
    title: "Come sostituire Word e Excel nello studio medico",
    description:
      "Guida pratica per passare da Word ed Excel a un gestionale medico: come migrare i dati storici, eliminare la carta e migliorare il flusso clinico senza perdere nulla.",
    date: "28 Gennaio 2025",
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
  "gestionale-per-ginecologi-cosa-cercare": {
    title: "Gestionale per ginecologi: cosa cercare nel 2025",
    description:
      "Guida alla scelta del gestionale medico per ginecologi: funzionalità cliniche, calcolatori ostetrici, cartella ostetrica elettronica, GDPR e differenze rispetto ai software generici.",
    date: "5 Febbraio 2025",
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
        answer: "Corioli è un software cloud: per accedere alla cartella clinica, compilare le visite e generare i referti serve una connessione internet attiva. Questo garantisce backup automatici, sincronizzazione tra dispositivi e aggiornamenti sempre disponibili senza interventi manuali. Se lavori in zone con connettività instabile, valuta la qualità della rete in ambulatorio prima dell'adozione. A differenza di soluzioni desktop come Gynobase Portable, Corioli non offre una modalità offline completa: la scelta è deliberata, per garantire che i dati sanitari siano sempre protetti su server europei con crittografia e backup georeplicati, anziché su un singolo hard disk locale.",
      },
      {
        question: "Posso migrare i dati dal mio vecchio software?",
        answer: "Sì. Corioli include un servizio di migrazione dati storici che permette di trasferire l'archivio pazienti da Word, Excel, carta o altri gestionali medici. Il costo è di 29€ una tantum e copre l'importazione dell'anagrafica e dei dati clinici principali. Il team di Corioli ti guida nel processo: non devi fare da solo export manuali o conversioni di formato. Molti ginecologi che passano da Word o da software datati come Gynobase completano la migrazione in pochi giorni, continuando a lavorare in parallelo finché l'archivio non è completamente operativo nel nuovo gestionale.",
      },
      {
        question: "È conforme al GDPR?",
        answer: "Corioli è progettato per la conformità GDPR dei dati sanitari. I dati sono cifrati in transito (TLS) e a riposo (AES-256), con backup giornalieri su server europei certificati. Il software include log degli accessi auditabili, gestione granulare dei permessi utente e un Data Processing Agreement (DPA) precompilato che formalizza il rapporto tra il medico (titolare del trattamento) e Corioli (responsabile del trattamento). Il modulo di consenso informato digitale è integrato nativamente, eliminando archivi cartacei separati. Per approfondire le misure tecniche e organizzative adottate, consulta la pagina dedicata alla sicurezza e al GDPR sul sito Corioli.",
      },
      {
        question: "Quante pazienti posso gestire?",
        answer: "Con il Piano Specialista di Corioli non ci sono limiti al numero di pazienti gestibili: l'anagrafica e la cartella clinica elettronica sono illimitate. Puoi archiviare l'intero storico del tuo ambulatorio — visite ginecologiche, gravidanze in corso e concluse, referti, consensi — senza costi aggiuntivi legati al volume. A differenza di alcuni gestionali freemium che limitano i contatti in rubrica o i documenti annuali, Corioli è pensato per studi specialistici con flussi clinici intensi. Se lavori in team, puoi aggiungere collaboratori o segreteria con il modulo Multi-utente (+15€/mese per utente aggiuntivo).",
      },
      {
        question: "C'è assistenza in italiano?",
        answer: "Sì. Corioli offre supporto prioritario in italiano via chat ed email, con un team che conosce il contesto clinico della ginecologia e dell'ostetricia — non un call center generico. Durante la prova gratuita di 90 giorni hai accesso allo stesso livello di assistenza dei clienti attivi, così puoi risolvere dubbi operativi mentre valuti il software nel tuo ambulatorio. Per richieste di configurazione avanzata, personalizzazione template PDF o migrazione dati, il team è raggiungibile anche telefonicamente. Corioli ha sede in Italia (Sesto Fiorentino, FI) e sviluppa il software in collaborazione con ginecologi italiani.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Articolo non trovato",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://corioli.it/blog/${slug}`,
      publishedTime: "2024-05-24",
      authors: ["Corioli"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "it-IT",
        author: {
          "@type": "Organization",
          name: "Corioli",
          url: "https://corioli.it",
        },
        publisher: {
          "@type": "Organization",
          name: "Corioli",
          logo: {
            "@type": "ImageObject",
            url: "https://corioli.it/logo_short.png",
          },
        },
        mainEntityOfPage: `https://corioli.it/blog/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://corioli.it",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://corioli.it/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://corioli.it/blog/${slug}`,
          },
        ],
      },
      ...(post.faq
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Torna agli articoli
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 font-medium">
              {post.date}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-lg prose-brand max-w-none text-gray-700 leading-relaxed">
          <p className="lead text-xl text-gray-600 mb-8 font-medium">
            {post.lead}
          </p>

          <div className="my-10 p-8 bg-brand-50 rounded-2xl border border-brand-100">
            <p className="italic text-brand-900 font-heading text-xl mb-0">
              "Un gestionale medico utile non archivia soltanto dati: deve
              aiutare il medico a lavorare meglio durante la visita."
            </p>
          </div>

          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-gray-900">
                {section.title}
              </h2>
              {section.body.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-6">
                  {paragraph}
                </p>
              ))}
              {section.variant === "comparison-table" && (
                <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full min-w-[640px] text-sm text-left">
                    <thead>
                      <tr className="bg-brand-50 border-b border-brand-100">
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Nome
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Cloud/Desktop
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Calcolatori fetali
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Cartella ostetrica
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Prova gratuita
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Prezzo indicativo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {gynecologySoftwareComparison.map((row) => (
                        <tr
                          key={row.name}
                          className={
                            row.highlight
                              ? "bg-brand-50/60 border-b border-brand-100"
                              : "border-b border-gray-100 even:bg-gray-50/50"
                          }
                        >
                          <td className="px-4 py-3 font-semibold text-gray-900">
                            {row.name}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.deployment}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.fetalCalculators}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.obstetricRecord}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.freeTrial}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="px-4 py-3 text-xs text-gray-500 bg-gray-50 border-t border-gray-100">
                    * Prezzi e funzionalità basati su informazioni pubbliche
                    al 2025. Verificare sempre sul sito ufficiale del
                    fornitore.
                  </p>
                </div>
              )}
            </section>
          ))}

          {post.faq && post.faq.length > 0 && (
            <section>
              <h2 className="font-heading text-2xl font-bold mt-12 mb-6 text-gray-900">
                Domande frequenti
              </h2>
              <dl className="flex flex-col gap-6">
                {post.faq.map((item) => (
                  <div
                    key={item.question}
                    className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <dt className="font-heading font-bold text-lg text-gray-900 mb-3">
                      {item.question}
                    </dt>
                    <dd className="text-gray-700 leading-relaxed mb-0">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="bg-brand-900 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h4 className="font-heading font-bold text-2xl text-white mb-3">
                Pronto a trasformare il tuo ambulatorio?
              </h4>
              <p className="text-brand-100 text-sm mb-8 max-w-md mx-auto">
                Scopri come Corioli può farti risparmiare ore di lavoro
                amministrativo con una demo gratuita di 15 minuti.
              </p>
              <Link
                href="/contatti"
                className="bg-white text-brand-900 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors inline-block text-sm shadow-md"
              >
                Richiedi una Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
