# Piano editoriale SEO e GEO di Corioli

File di lavoro del giro settimanale su SEO, GEO e blog, che Pablo chiede a
Claude ogni settimana (le attività programmate create il 2/11/2026 sono in
pausa). Non è servito dal sito: sta fuori da `src/` e `public/`. Ogni giro lo
legge, lo aggiorna e annota cosa ha fatto in `seo/registro.md`.

Dopo ogni pubblicazione del sito: `node seo/indexnow.mjs` avvisa Bing (e
quindi ChatGPT e Copilot) delle pagine cambiate.

## Obiettivo

Ogni contenuto deve portare un medico verso una di due azioni:

1. **Scaricare l'app** (pulsante "Scarica Corioli" → Microsoft Store, evento
   PostHog `program_downloaded`), passando da `/ginecologia` o `/cardiologia`.
2. **Scriverci dal modulo** di `/contatti` (demo) o
   `/contatti?richiesta=migrazione` (preventivo per la migrazione dei dati).

Il percorso tipo è: ricerca su Google/Bing o domanda a un assistente IA →
articolo che risponde subito e cita le fonti → riquadro finale dell'articolo
(che propone l'app giusta in base alla categoria) → pagina della specialità →
download o modulo.

## Regole che valgono per tutti gli articoli

- Una query principale per articolo, nel titolo e nelle prime due frasi del lead.
- `keyPoints`: 3-5 frasi autosufficienti con i numeri. È il blocco che i motori
  di risposta estraggono per primo.
- Una tabella quando ci sono soglie, categorie o confronti.
- `faq`: 4-5 domande scritte come le cercherebbe un medico.
- `sources`: fonti primarie, ogni DOI aperto e controllato prima di scriverlo.
- Il body è testo semplice: paragrafi separati da `\n\n`, niente markdown.
  Unica eccezione, dal 2/11/2026: i link interni `[testo](/percorso)`, da
  mettere nel paragrafo che parla di Corioli verso `/ginecologia`,
  `/cardiologia`, `/prezzi` o `/contatti?richiesta=migrazione`, e verso altri
  articoli quando servono. Non funzionano in lead, keyPoints e FAQ.
- `description` sotto i 160 caratteri: oltre, Google la taglia.
- L'ultima sezione collega il tema a Corioli solo con funzioni verificate nel
  codice dell'app (`Desktop\Corioli` per ginecologia/ostetricia,
  `Desktop\CorioliGenerale` per cardiologia). Se non è verificabile, non si scrive.
- Vincoli dalle memorie del progetto: mai "cloud" riferito a Corioli; niente
  SCORE2, datazione dal CRL/formula di Robinson, FSE, consenso digitale, massa
  VS, E/e', prezzo multi-utente, numeri di versione, nomi di medici; prezzo
  30€/mese tutto incluso, prova 30 giorni, migrazione su preventivo.
- Mai cambiare lo slug di un articolo pubblicato.

## Prossimo giro (scelto da Claude, 2/11/2026)

Pablo lascia a Claude la scelta dei temi. Per il prossimo giro:

1. **Aprire uno studio medico privato: cosa serve** (Normativa/Gestione Studio).
   La query "studio medico privato" arriva già su Search Console e chi apre
   uno studio cerca anche un gestionale: è il tema con più intento commerciale.
   Regole regionali da verificare una per una; fonti primarie nazionali per
   Ordine, partita IVA, ENPAM, assicurazione (L. 24/2017), POS, Sistema TS.
2. **Stenosi aortica all'ecocardiogramma: velocità, gradiente medio e area
   valvolare** (Cardiologia). Tabella di gradi di severità dalle linee guida
   ESC/EACTS sulle valvulopatie più recenti; nell'app ci sono gradienti aortici
   e area valvolare aortica (da riverificare in `CorioliGenerale`).
3. **HOMA-IR: come si calcola e come si interpreta** (Ginecologia, utile anche
   in cardiologia). È calcolato in entrambe le app; formula di Matthews 1985;
   le soglie cambiano da popolazione a popolazione: dirlo, non inventarne una.
4. **Aggiornamenti:** `migliori-software-gestionali-medici-italia` (prezzi dei
   concorrenti "consultati ad agosto 2026" da riverificare sui siti ufficiali)
   e `cos-e-cartella-clinica-elettronica-come-sceglierla`.

## Coda degli aggiornamenti (giovedì)

In ordine di priorità: prima gli articoli ad alto intento commerciale, che sono
quelli che portano download e richieste. Spuntare quando fatto, con la data.

- [ ] `migliori-software-gestionali-medici-italia` — confronto: verificare ogni
      claim sui concorrenti sui loro siti ufficiali, togliere ciò che non regge;
      aggiungere keyPoints, tabella, fonti, FAQ.
- [x] `gestionale-per-ginecologi-cosa-cercare` — fatto il 2/11/2026 (keyPoints,
      fonti Hadlock/FMF, claim allineati all'app). Restano da riverificare i
      prezzi dei concorrenti, "consultati ad agosto 2026".
- [ ] `cos-e-cartella-clinica-elettronica-come-sceglierla` — keyPoints, fonti, FAQ.
- [x] `come-sostituire-word-excel-studio-medico` — fatto il 2/11/2026 (riscritto,
      keyPoints, FAQ, link alla migrazione su preventivo).
- [ ] `cartella-clinica-elettronica-obbligatoria-2025` — slug vecchio: aggiornare
      i fatti al 2026 senza cambiare lo slug.
- [ ] `gestionale-medico-gdpr-cosa-deve-avere` — keyPoints, fonti (GDPR, Garante).
- [ ] `gestionale-medico-vs-word-ginecologi` — keyPoints, FAQ.
- [ ] `come-digitalizzare-lo-studio-ginecologico` — keyPoints, FAQ.
- [x] `stima-peso-fetale-hadlock-guida-pratica` — fatto il 2/11/2026 (formule,
      errore da Hammami 2018, fonti con DOI).
- [x] `conservazione-cartella-clinica-studio-privato` — fatto il 2/11/2026
      (era in crescita su Search Console: +143% di clic).
- [ ] `calcolo-eta-gestazionale-settimane-gravidanza` — keyPoints, fonti; niente
      datazione dal CRL finché il bug dell'app non è corretto.
- [ ] `percentili-crescita-pediatrici-oms-guida` — keyPoints, fonti.
- [ ] `fse-2-0-obbligo-studi-privati-cosa-fare` — fatti normativi aggiornati,
      fonti; Corioli non invia al FSE.
- [ ] `sistema-tessera-sanitaria-invio-dati-annuale` — keyPoints, fonti.
- [ ] `backup-studio-medico-regola-3-2-1` — keyPoints, fonti.
- [ ] `miomi-uterini-storia-clinica-completa` — keyPoints, fonti.
- [ ] `gestionale-per-cardiologi-cosa-cercare` — fonti.
- [ ] `corioli-cardiologia-disponibile` — fonti non necessarie; ricontrollare i
      claim con il README di CorioliGenerale.
- **Da gennaio 2027:** `superammortamento-2026-medici-centri-medici` va
      ricontrollato contro la legge di bilancio 2027 (estensione ai professionisti).

## Backlog dei nuovi articoli (lunedì)

Rotazione delle categorie: ginecologia/ostetricia → cardiologia → gestione dello
studio/normativa (intento commerciale, riquadro verso `/contatti`). Ogni voce
riporta cosa verificare nell'app prima di scrivere l'ultima sezione.

### Ginecologia e ostetricia
- [x] Biometria fetale (BPD, HC, AC, FL): fatto il 2/11/2026,
      `biometria-fetale-bpd-hc-ac-fl` (fonti ISUOG 2019, Hadlock 1984/1991, INTERGROWTH-21st).
- [ ] HOMA-IR: come si calcola, soglie e limiti, uso nella PCOS. Verificare il
      calcolo HOMA-IR nell'app.
- [ ] Aumento di peso in gravidanza in base al BMI pregravidico. Verificare BMI
      con fasce OMS nell'app; non promettere un grafico del peso se non c'è.
- [ ] Referto dell'ecografia ostetrica del secondo trimestre: cosa scrivere
      secondo le linee guida SIEOG. Verificare cosa stampa `PdfService.ts`.
- [ ] Sindrome dell'ovaio policistico: criteri diagnostici delle linee guida
      internazionali 2023.

### Cardiologia
- [ ] Stenosi aortica all'ecocardiogramma: gradiente medio, velocità, area
      valvolare e gradi di severità. Verificare i campi nel README di
      CorioliGenerale (gradienti e area valvolare aortica ci sono).
- [x] Holter pressorio: fatto il 2/11/2026,
      `holter-pressorio-valori-normali-calo-notturno` (ESC 2024 tabella 5, ESC/ESH 2018 per il dipping).
- [ ] Holter ECG: cosa riportare nel referto. Verificare il modulo Holter.
- [ ] Frazione di eiezione e classificazione dello scompenso (HFrEF, HFmrEF,
      HFpEF). Verificare il modulo scompenso.
- Escluso finché l'app usa Friedewald: articolo sul calcolo dell'LDL.
- Escluso: SCORE2 e SCORE2-OP (disattivati nell'app).

### Gestione dello studio e normativa (commerciale)
- [x] Informativa privacy dello studio medico con modello: fatto il 2/11/2026,
      `informativa-privacy-studio-medico-modello` (GDPR art. 13, Garante provv. 55/2019).
- [ ] Aprire uno studio medico privato: cosa serve (Ordine, partita IVA, ENPAM,
      assicurazione, autorizzazioni regionali, privacy, POS, Sistema TS). Su
      Search Console arriva già la query "studio medico privato". Molte regole
      cambiano da Regione a Regione: verificare tutto sulle fonti primarie.
- [x] Come cambiare gestionale medico senza perdere i dati: export, CSV, import
      da Doctolib. Fatto il 2/11/2026: `cambiare-gestionale-medico-migrazione-dati`.
- [ ] Certificato medico e ricetta bianca: cosa devono contenere. Verificare i
      PDF di ricetta e certificato nell'app.
- [ ] Software per ginecologi con Windows: requisiti, installazione, prova.
      Pagina di atterraggio dal blog verso `/ginecologia`.

## Query da monitorare (venerdì)

Commerciali: gestionale per ginecologi · software ginecologia ostetricia ·
cartella clinica ostetrica elettronica · gestionale per cardiologi · software
ambulatorio cardiologico · gestionale medico dati in locale · migliori software
gestionali per medici.

Informative: calcolo QTc Bazett · CHA2DS2-VA calcolo · calcium score fasce
Agatston · stima peso fetale Hadlock · flussimetria arteria ombelicale
percentili · ipotensione ortostatica come si misura · GDPR medico libero
professionista · superammortamento medici 2026.
