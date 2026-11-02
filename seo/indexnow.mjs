// Avvisa Bing (e gli altri motori IndexNow) che le pagine del sito sono
// cambiate, cosi le ricontrolla in giorni invece che in settimane. Conta per
// ChatGPT e Copilot, che cercano sull'indice di Bing.
//
// Si lancia DOPO aver pubblicato il sito, non prima: Bing scarica subito le
// pagine e la chiave deve essere gia online.
//
//   node seo/indexnow.mjs            tutte le pagine della sitemap
//   node seo/indexnow.mjs /prezzi /  solo i percorsi indicati

const HOST = "corioli.it";
const KEY = "b3bee3fbcf84431fa3ce4b72bde1a1f1";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function urlDallaSitemap() {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const percorsi = process.argv.slice(2);
const urlList = percorsi.length
  ? percorsi.map((p) => `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`)
  : await urlDallaSitemap();

const chiaveOnline = await fetch(KEY_LOCATION).then((r) => (r.ok ? r.text() : ""));
if (chiaveOnline.trim() !== KEY) {
  console.error(`La chiave non e online su ${KEY_LOCATION}: pubblica prima il sito.`);
  process.exit(1);
}

const risposta = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// 200 e 202 sono entrambi un si: 202 vuol dire che la chiave e ancora in verifica.
console.log(`IndexNow: ${risposta.status} ${risposta.statusText}, ${urlList.length} URL inviati.`);
if (!risposta.ok) process.exit(1);
