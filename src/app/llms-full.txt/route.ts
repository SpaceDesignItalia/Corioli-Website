import { posts } from "../blog/posts";
import { glossaryGroups, glossaryTerms } from "../glossario/terms";

// llms-full.txt: il testo integrale del blog in un unico documento, pensato per
// gli assistenti conversazionali e i motori di risposta.
//
// A cosa serve, visto che gli articoli sono gia pubblici: un crawler che vuole
// il contenuto deve altrimenti scoprire diciotto URL, scaricarli e ripulirli
// dall'HTML. Qui trova tutto in una richiesta e in testo piano, quindi la
// probabilita che il contenuto venga letto per intero — e citato correttamente
// invece che riassunto da uno snippet — e molto piu alta.
//
// Il file e generato da posts.ts, la stessa fonte del blog e della sitemap:
// nessun testo va ricopiato a mano e non puo divergere dagli articoli.

export const dynamic = "force-static";

const BASE = "https://corioli.it";

const INTESTAZIONE = `# Corioli — testo integrale

Questo documento raccoglie in testo piano le informazioni sul prodotto Corioli,
il glossario clinico e normativo pubblicato su ${BASE}/glossario e il contenuto
completo degli articoli pubblicati su ${BASE}/blog.
La scheda di sintesi sta in ${BASE}/llms.txt.

Ultimo aggiornamento del documento: generato alla build del sito.
Licenza d'uso: contenuti di proprieta di Corioli, citabili con attribuzione e
link alla pagina di origine.

## Cos'e Corioli

Corioli e un gestionale medico desktop dedicato a dottori e studi specialistici
privati in Italia. Copre cartella clinica elettronica, anagrafica pazienti,
anamnesi strutturata, diario clinico, refertazione PDF e calcolatori clinici
integrati nella visita. I dati sanitari restano salvati in locale sul computer
dello studio: non esiste un archivio pazienti sui server del fornitore, che non
vi accede in alcun modo. Il medico resta unico titolare del trattamento.

Sistemi supportati. Su Windows 10 e Windows 11 l'installazione e autonoma e
passa dal Microsoft Store. Esiste anche una versione per macOS 10.13 o
superiore, che non passa dal Mac App Store: si richiede dalla pagina contatti e
viene installata insieme a un operatore Corioli in una breve call.

Moduli per specializzazione:

- Ginecologia e ostetricia — disponibile. Cartella ostetrica elettronica,
  calcolo dell'eta gestazionale e datazione, biometria fetale (BPD, HC, AC, FL)
  con percentili di Hadlock, stima del peso fetale con Hadlock I-IV, curve di
  crescita e flussimetria dell'arteria ombelicale (PI e IR con percentile per
  epoca gestazionale). Pagina: ${BASE}/ginecologia
- Cardiologia — rilascio pubblico a ottobre 2026. Ogni visita comprende
  variabili cliniche, anamnesi, motivo della visita, esami ematochimici,
  terapia in atto, pressione arteriosa, elettrocardiogramma (con QTc secondo
  Bazett), esame obiettivo, accertamenti e conclusioni; ecocardiogramma
  transtoracico, TC coronarica (calcium score Agatston, CAD-RADS), test
  ergometrico, Holter ECG, monitoraggio pressorio, Doppler dei tronchi
  sovraaortici, scompenso cardiaco e fibrillazione atriale (CHA2DS2-VASc e
  HAS-BLED) sono moduli che il medico attiva quando servono. Indici di
  laboratorio calcolati: LDL Friedewald, non-HDL, eGFR CKD-EPI 2021, HOMA-IR.
  Gli indici sono suggerimenti con la formula sempre in chiaro e non vengono
  scritti in automatico nel referto. Lo SCORE2 e implementato ma disattivato
  finche i coefficienti pubblicati non saranno verificati sulla fonte primaria.
  Corioli Cardiologia non e un dispositivo medico certificato.
  Pagina: ${BASE}/cardiologia
- Pediatria — in sviluppo, nessuna data annunciata.

Prezzi: 30 euro al mese, tutto incluso, senza moduli a pagamento ne costi di
attivazione; migrazione dei dati storici su preventivo; prova gratuita di 30
giorni senza carta di credito e senza vincoli.

Non disponibile oggi: sincronizzazione cloud multi-dispositivo, agenda,
fatturazione elettronica, invio al Sistema Tessera Sanitaria.

Contatti: info@corioli.it — +39 393 800 1284 — Sesto Fiorentino (FI), Italia —
P.IVA IT07420400488.

---
`;

function formattaArticolo(post: (typeof posts)[number]): string {
  const parti: string[] = [];

  parti.push(`## ${post.title}`);
  parti.push("");
  parti.push(`URL: ${BASE}/blog/${post.slug}`);
  parti.push(`Categoria: ${post.category}`);
  parti.push(`Pubblicato: ${post.isoDate}`);
  if (post.updatedIso) {
    parti.push(`Aggiornato: ${post.updatedIso}`);
  }
  parti.push("");
  parti.push(post.lead);
  parti.push("");

  if (post.keyPoints?.length) {
    parti.push("### In breve");
    parti.push("");
    for (const punto of post.keyPoints) parti.push(`- ${punto}`);
    parti.push("");
  }

  for (const sezione of post.sections) {
    parti.push(`### ${sezione.title}`);
    parti.push("");
    parti.push(sezione.body);
    parti.push("");
  }

  if (post.faq?.length) {
    parti.push("### Domande frequenti");
    parti.push("");
    for (const item of post.faq) {
      parti.push(`**${item.question}**`);
      parti.push("");
      parti.push(item.answer);
      parti.push("");
    }
  }

  if (post.sources?.length) {
    parti.push("### Fonti");
    parti.push("");
    for (const fonte of post.sources) {
      parti.push(fonte.url ? `- ${fonte.title} ${fonte.url}` : `- ${fonte.title}`);
    }
    parti.push("");
  }

  return parti.join("\n");
}

// Il glossario in testo piano. E la parte del sito con la resa migliore in
// questo formato: ogni voce e gia una risposta autoconclusiva, quindi puo
// essere citata cosi com'e, e l'URL con l'ancora dice da dove viene.
function formattaGlossario(): string {
  const parti: string[] = ["# Glossario", ""];
  parti.push(
    `Definizioni dei termini clinici, normativi e software ricorrenti nello studio medico specialistico. Pagina: ${BASE}/glossario`,
  );
  parti.push("");

  for (const gruppo of glossaryGroups) {
    const voci = glossaryTerms.filter((voce) => voce.group === gruppo.id);
    if (!voci.length) continue;

    parti.push(`## ${gruppo.title}`);
    parti.push("");

    for (const voce of voci) {
      parti.push(`### ${voce.term}`);
      parti.push("");
      parti.push(`URL: ${BASE}/glossario#${voce.slug}`);
      if (voce.aliases?.length) {
        parti.push(`Sinonimi: ${voce.aliases.join(", ")}`);
      }
      parti.push("");
      parti.push(voce.definition);
      parti.push("");
      if (voce.detail) {
        parti.push(voce.detail);
        parti.push("");
      }
    }
  }

  return parti.join("\n");
}

export function GET() {
  const corpo = posts.map(formattaArticolo).join("\n---\n\n");
  const body = `${INTESTAZIONE}\n${formattaGlossario()}\n---\n\n# Articoli\n\n${corpo}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
