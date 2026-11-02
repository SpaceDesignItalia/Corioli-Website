# Registro del lavoro SEO e GEO

Una voce per giro, la più recente in fondo.

## 2 novembre 2026

**Problema segnalato da Pablo.** ChatGPT, alla domanda "consigliami un gestionale
per specialisti privati ginecologico", mette Corioli al primo posto ma con due
errori: il logo è quello di Corilus (corilus.be, software house belga per medici
di base, nome quasi uguale) e il prezzo è quello del listino vecchio ("da 15
€/mese, calcolatori avanzati opzionali").

- Causa del logo: per le ricerche sul marchio, Bing e gli altri motori associano
  "Corioli" a Corilus, che è un'entità molto più forte. Il sito dichiarava il
  logo solo come `logo_short.png`, un nome di file senza marchio.
- Causa del prezzo: il sito online non ha più il listino vecchio (controllato).
  ChatGPT usa una copia vecchia delle pagine; in più l'articolo sui gestionali per
  ginecologi aveva "fascia utile tra 15€ e 50€" a poche righe da "moduli extra per
  calcolatori clinici avanzati".

**Modifiche (da pubblicare):**
- `public/corioli-logo.png`, copia del logo con il marchio nel nome.
- `src/app/layout.tsx`: Organization con logo `ImageObject`, `alternateName` e
  `disambiguatingDescription` che dice che Corioli non è Corilus; il
  SoftwareApplication generale punta allo stesso logo.
- `llms.txt`: sezione "Identita" (logo, sede, app sullo Store, distinzione da
  Corilus) e nota che il listino in vigore è dal 22/9/2026. Stesse due note in
  `llms-full.txt`.
- Articolo `gestionale-per-ginecologi-cosa-cercare`: tolta la fascia "15€-50€".
- IndexNow: chiave in `public/b3bee3fbcf84431fa3ce4b72bde1a1f1.txt` e script
  `seo/indexnow.mjs`.

**Articolo nuovo:** `cambiare-gestionale-medico-migrazione-dati` (Gestione
Studio). Query: "cambiare gestionale medico senza perdere i dati". Porta al
modulo contatti per il preventivo di migrazione. Fonti: GDPR artt. 20, 28, 30,
32 (testo verificato) e linee guida EDPB 07/2020. Claim sull'import verificati in
`CsvImportService.ts` di entrambe le app: CSV pazienti + appuntamenti con
tracciato fisso, annullati saltati, doppioni per codice fiscale o
nome+cognome+nascita, nessuna sovrascrittura (tranne il codice fiscale
nell'import Doctolib), visite non duplicate. Il backup automatico pre-import
vale solo per l'import del backup JSON, non per il CSV: nell'articolo c'è il
consiglio del backup manuale.
Glossario: la voce "Migrazione dei dati" ora porta al nuovo articolo.

**Da fare per Pablo:** pubblicare il sito, poi `node seo/indexnow.mjs`; Bing
Webmaster Tools; scheda Store.

### Secondo giro, stesso giorno: "c'è altro da migliorare?"

**Controllo da telefono (360px) di tutte le pagine principali:** home,
ginecologia, cardiologia, prezzi, download, contatti, funzionalità,
specializzazioni, GDPR, chi siamo, blog, glossario, articoli. Nessuna pagina
esce dallo schermo, niente testo sotto gli 11px. Unico problema: le voci
dell'indice "In questo articolo" erano alte 19px, difficili da toccare.
Corrette in `src/app/blog/[slug]/page.tsx`: ora sono alte 34px o più.

**Controllo SEO di 56 URL:** title, description, canonical, H1, og:image.
- 21 description di articoli (più quella della categoria Normativa) superavano
  i 160 caratteri: accorciate senza cambiarne il contenuto.
- `/lp/ginecologia` risponde 404: la cartella in `src/app/lp/ginecologia` è
  vuota. Non è linkata da nessuna parte; segnalato, non toccato.

**Link interni negli articoli.** Prima il testo degli articoli non poteva
contenere link: l'unico invito era il riquadro finale. Ora il body accetta
`[testo](/percorso)` (helper `LINK_INTERNO`, `parseLinkInterno`, `bodyInTesto`
in `posts.ts`); `llms-full.txt` li scrive con l'URL completo, il tempo di
lettura li ignora. Aggiunti 28 link: il paragrafo su Corioli di ogni articolo
clinico porta a `/cardiologia` o `/ginecologia`, gli altri a `/prezzi`, `/gdpr`,
`/funzionalita`, `/download`, `/contatti?richiesta=migrazione`.

**Claim falsi trovati e corretti negli articoli vecchi:**
- `percentili-crescita-pediatrici-oms-guida`: diceva che il modulo pediatrico
  "include" percentili OMS, target genetico e grafici, anche nella FAQ ("Sì").
  La pediatria è in sviluppo: ora lo dice.
- `calcolo-eta-gestazionale-settimane-gravidanza`: "datazione" fra i calcolatori
  e "una volta stabilita la datazione". Ora: età gestazionale e data presunta
  del parto dall'ultima mestruazione (280 giorni), verificato in `AddVisit.tsx`.
- `fse-2-0-obbligo-studi-privati-cosa-fare`: "i dati storici si importano anche
  da Word ed Excel" → servizio di migrazione su preventivo; aggiunto che Corioli
  non invia al FSE.
- `gestionale-per-ginecologi-cosa-cercare`: "include tutti gli strumenti elencati
  sopra" comprendeva la gestione del consenso informato (non c'è); "un'ora e
  mezza in meno al giorno" senza fonte; FAQ con "software datati come Gynobase"
  e "molti ginecologi in pochi giorni". Tutto tolto o riscritto; la sezione su
  Corioli ora elenca solo funzioni verificate.
- `come-sostituire-word-excel-studio-medico`: "due ore al giorno recuperate"
  senza fonte, tolto.
- `migliori-software-gestionali-medici-italia`: "datazione" → "età gestazionale".

**Articoli portati allo standard (secondo giro):** `gestionale-per-ginecologi-cosa-cercare`
(lead, keyPoints, fonti Hadlock 1984/1985/1991 e FMF 2019 con DOI verificati su
Crossref) e `come-sostituire-word-excel-studio-medico` (riscritto: 5 sezioni,
keyPoints, 4 FAQ, fonte GDPR). Data di aggiornamento 2/11/2026 su questi due e
sui tre corretti sopra.

### Terzo giro, stesso giorno: navbar di /download e dati di Search Console

**Navbar.** Su `/download` il pulsante "Inizia la prova gratuita" (e "Inizia ora"
nella pillola dopo lo scroll, "Inizia la prova" nel menu da telefono) portava
alla pagina stessa, sopra al suo "Scarica Corioli": tolto solo lì
(`showTrialCta` in `src/components/Header.tsx`). Sulle altre pagine resta.

**Search Console (ultimi 28 giorni, letti da Pablo il 2/11/2026).** 85 clic
(+39%), 4.350 impressioni (−5%). Pagine con più clic: home 18,
`conservazione-cartella-clinica-studio-privato` 17 (+143%),
`stima-peso-fetale-hadlock-guida-pratica` 9 (−36%),
`superammortamento-2026-medici-centri-medici` 7 (prima 0),
`egfr-ckd-epi-cockcroft-gault-doac` 5 (+67%, impressioni +197%). Query: "corioli"
14 clic, "studio medico privato" 1. Ricerca immagini: 3 clic.

**Cosa ne ho fatto:**
- `conservazione-cartella-clinica-studio-privato`: lead che risponde subito,
  keyPoints, sezione "Cosa scrivere nell'informativa", spiegazione dei dieci anni
  con la legge Gelli-Bianco (art. 7: libero professionista con rapporto
  contrattuale → prescrizione ordinaria di 10 anni, art. 2946 c.c.), link a GDPR,
  backup e Corioli, FAQ sull'informativa, 4 fonti (Garante provv. n. 55 del
  7/3/2019, GDPR artt. 5 e 13, L. 24/2017 art. 7, c.c. artt. 2946-2947).
- `stima-peso-fetale-hadlock-guida-pratica`: tabella con le quattro formule di
  Hadlock 1985 (coefficienti verificati sui codici LOINC 11751-5, 11735-8,
  11746-5, 11732-5), esempio di calcolo, errore reale dallo studio FMF
  (Hammami 2018: HC-AC-FL entro il 10% del peso alla nascita nell'80% di 5.163
  gravidanze), avviso che i software numerano le formule in modo diverso, claim
  su Corioli allineati all'app, 4 fonti con DOI. Voce di glossario allineata.

**Da segnalare all'app (non al sito):** in `Desktop\Corioli\src\utils\fetalWeightUtils.ts`
la formula BPD-AC-FL (che l'app chiama Hadlock I) usa 0,162 per FL; il
coefficiente pubblicato è 0,1623. Differenza piccola (circa 0,5% sul peso con FL
di 7 cm), ma va corretta. Nell'app la numerazione è I = BPD-AC-FL, II = HC-AC-FL,
III = AC-FL, IV = tutte e quattro: altri calcolatori numerano diversamente.

**Prossimi candidati dai dati:** `egfr-ckd-epi-cockcroft-gault-doac` ha molte più
impressioni ma pochi clic: per lavorare sul titolo servono le query di quella
pagina (Search Console → Rendimento → filtro Pagina → Query).

**Correzione nell'app fatta (2/11/2026, su richiesta di Pablo).** In
`Desktop\Corioli\src\utils\fetalWeightUtils.ts` il coefficiente di FL della
formula BPD-AC-FL ora è 0,1623. Aggiunto in `fetalWeightUtils.test.ts` un test a
valore fisso: BPD 90, AC 340, FL 70 mm → 3163 g (con 0,162 erano 3148 g).
Tutti i 174 test dell'app e `tsc` passano. Non committato: arriva ai medici
con la prossima release sul Microsoft Store.

### Quarto giro, stesso giorno: "solo 1 articolo? non c'è altro di utile?"

**Tre articoli nuovi**, uno per area, scelti anche sui dati di Search Console
(gli articoli normativi e quelli con formule e soglie sono quelli che portano
clic):
- `holter-pressorio-valori-normali-calo-notturno` (Cardiologia). Soglie della
  tabella 5 delle linee guida ESC 2024 (letta sul testo), validità della
  registrazione (70%, ≥27 letture, intervalli), dipper >10% e cause del calo
  assente dalle ESC/ESH 2018. La soglia del 20% per il calo "estremo" non l'ho
  trovata su una fonte primaria: non è scritta. Claim sull'app verificati in
  `CorioliGenerale` (`HolterPressorioData`, calo calcolato dalle medie
  sistoliche, il PDF stampa quello dell'apparecchio se c'è).
- `biometria-fetale-bpd-hc-ac-fl` (Ostetricia). Criteri di qualità, ellisse,
  definizioni SGA/LGA, intervallo di 3 settimane ed errore della stima dal testo
  della linea guida ISUOG 2019 (PDF letto). Percentili Hadlock 1984 14-40
  settimane verificati in `biometryCentiles.ts`.
- `informativa-privacy-studio-medico-modello` (Normativa). Elementi dell'art. 13
  GDPR, consenso non necessario per la cura, casi in cui serve, DPO e registro
  dal provvedimento del Garante n. 55/2019. Contiene un modello da adattare.

Glossario: nuove voci "Monitoraggio pressorio delle 24 ore" e "Informativa
privacy"; la voce "Biometria fetale" ora porta all'articolo. `llms.txt`: cinque
query nuove.

**Tabelle da telefono.** Tutte le tabelle degli articoli avevano una larghezza
minima di 560px, quindi da telefono si scorrevano di lato anche quelle a due
colonne. Ora la larghezza minima vale solo da tre colonne in su: le tabelle a due
colonne (informativa, formule di Hadlock) stanno nello schermo a 360px.

**Proposto per il prossimo giro:** "Aprire uno studio medico privato: cosa
serve" (la query "studio medico privato" arriva già su Search Console), da
verificare Regione per Regione.
