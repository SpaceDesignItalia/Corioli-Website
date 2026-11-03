import { Check, HeartPulse, Printer } from "lucide-react";
import { Aggancio, AppVera, Caos, Finale, Passaggio, fogliIcone, type Scena } from "./comuni";
import { Campo, Didascalia, Dito, Scheda, alone, conta, digitato, entra, esci, morbido, seg } from "./parti";

// Il film di /cardiologia. Valori e nomi vengono dall'archivio demo delle
// schermate (visita di Giorgio Martelli del 12/10/2026): QTc con le quattro
// formule, CHA2DS2-VASc 5 e HAS-BLED 2, pazienti a rischio rispetto
// all'obiettivo di LDL. SCORE2 e i percentili MESA non compaiono: sono spenti.

const casella = (i: number) => ({ x: 32 + (i % 2) * 156, y: 184 + Math.floor(i / 2) * 92 });

const ecg = [
  { etichetta: "F.C. (bpm)", valore: "78", prec: "prec. 76 · 01/10/25" },
  { etichetta: "PR (ms)", valore: "180", prec: "prec. 180 · 01/10/25" },
  { etichetta: "QRS (ms)", valore: "96", prec: "prec. 96 · 01/10/25" },
  { etichetta: "QT (ms)", valore: "384", prec: "prec. 398 ▼ −14" },
];
const qtc = [
  { formula: "Bazett", valore: 438 },
  { formula: "Fridericia", valore: 419 },
  { formula: "Framingham", valore: 420 },
  { formula: "Hodges", valore: 416 },
];

function Ecg({ t }: { t: number }) {
  const inizio = (i: number) => 700 + i * 560;
  const calcolo = 3300;
  return (
    <>
      <div className="absolute top-11 left-6 right-6">
        <Didascalia t={t} testo="Scrivi le misure dell'ECG." da={100} fino={3200} dim={34} />
        <Didascalia t={t} testo="Il QTc è già lì, con *quattro formule*." da={3250} dim={34} />
      </div>
      <Scheda
        titolo="Elettrocardiogramma"
        icona={<HeartPulse size={14} className="text-brand-600" aria-hidden="true" />}
        style={{ left: 16, top: 140, width: 328, height: 382, ...entra(t, 0, 500, 30) }}
      />
      {ecg.map((m, i) => {
        const c = casella(i);
        const finito = t > inizio(i) + m.valore.length * 85;
        return (
          <div key={m.etichetta} style={entra(t, 150 + i * 60, 400)}>
            <Campo
              x={c.x}
              y={c.y}
              w={140}
              etichetta={m.etichetta}
              valore={digitato(m.valore, t, inizio(i), 85)}
              attivo={t > inizio(i) - 120 && t < inizio(i) + 560}
              scrivendo={t > inizio(i) - 120 && !finito}
              sotto={
                <p className="mt-1 text-[12px] text-gray-500 tabular-nums" style={{ opacity: esci(seg(t, inizio(i) + 300, 350)) }}>
                  {m.prec}
                </p>
              }
            />
          </div>
        );
      })}
      {qtc.map((q, i) => (
        <div
          key={q.formula}
          className="absolute w-[140px] h-[56px] rounded-xl border border-gray-200 bg-gray-50 px-3 py-2"
          style={{
            left: 32 + (i % 2) * 156,
            top: 380 + Math.floor(i / 2) * 66,
            ...entra(t, calcolo + i * 120, 400),
            ...alone(t, calcolo + 700 + i * 120),
          }}
        >
          <p className="text-[12px] text-gray-500">QTc ({q.formula})</p>
          <p className="text-[19px] font-bold text-gray-900 tabular-nums leading-tight">
            {conta(t, calcolo + i * 120, 800, q.valore)} <span className="text-[12px] font-medium text-gray-500">ms</span>
          </p>
        </div>
      ))}
      <Dito
        t={t}
        tappe={ecg.flatMap((_, i) => {
          const c = casella(i);
          return [
            { t: inizio(i) - 300, x: c.x + 70, y: c.y + 38 },
            { t: inizio(i) - 120, x: c.x + 70, y: c.y + 38, tocco: true },
          ];
        })}
      />
    </>
  );
}

const fattori = [
  { nome: "Età ≥ 75 anni", punti: 2, nota: "dalla scheda del paziente", auto: 500 },
  { nome: "Ipertensione arteriosa", punti: 1, nota: "dai fattori di rischio", auto: 850 },
  { nome: "Scompenso cardiaco o disfunzione VS", punti: 1, tocco: 1700 },
  { nome: "Malattia vascolare", punti: 1, nota: "infarto pregresso, placca aortica", tocco: 2500 },
  { nome: "Pregresso ictus, TIA o embolia", punti: 2 },
  { nome: "Diabete mellito", punti: 1, nota: "dai fattori di rischio" },
];

function Cha2ds2vasc({ t }: { t: number }) {
  const quando = (f: (typeof fattori)[number]) => f.auto ?? f.tocco ?? Infinity;
  const punteggio = fattori.reduce((s, f) => s + (t >= quando(f) ? f.punti : 0), 0);
  const ultimo = Math.max(...fattori.map((f) => (t >= quando(f) ? quando(f) : 0)));
  const scatto = Math.sin(seg(t, ultimo, 300) * Math.PI);
  const hasBled = seg(t, 3500, 400);
  return (
    <>
      <div className="absolute top-11 left-6 right-6">
        <Didascalia t={t} testo="Spunti solo quello che manca." da={100} fino={3300} dim={34} />
        <Didascalia t={t} testo="CHA₂DS₂-VASc: *calcolato*." da={3350} dim={34} />
      </div>
      <Scheda titolo="Fibrillazione atriale" style={{ left: 16, top: 136, width: 328, height: 430, ...entra(t, 0, 500, 30) }} />
      {fattori.map((f, i) => {
        const fatto = t >= quando(f);
        const y = 176 + i * 50;
        return (
          <div key={f.nome} className="absolute left-8 w-[296px] flex items-start gap-2.5" style={{ top: y, ...entra(t, 150 + i * 70, 400) }}>
            <span
              className={`mt-0.5 w-5 h-5 shrink-0 rounded-md flex items-center justify-center border-2 ${
                fatto ? (f.auto ? "bg-gray-500 border-gray-500" : "bg-brand-700 border-brand-700") : "border-gray-300 bg-white"
              }`}
            >
              {fatto && <Check size={13} strokeWidth={3.5} className="text-white" aria-hidden="true" />}
            </span>
            <div className="flex-1 min-w-0">
              <p className={`text-[14px] leading-tight ${fatto ? "text-gray-900 font-semibold" : "text-gray-600"}`}>{f.nome}</p>
              {f.nota && <p className="text-[12px] text-gray-400 truncate">{f.nota}</p>}
            </div>
            <span className="text-[13px] font-semibold text-gray-400 tabular-nums">+{f.punti}</span>
          </div>
        );
      })}
      <div
        className="absolute left-8 w-[296px] top-[482px] rounded-xl bg-gray-50 border border-gray-200 px-4 py-2.5 flex items-center justify-between"
        style={{ ...entra(t, 300, 450), ...alone(t, 3300) }}
      >
        <div>
          <p className="text-[13px] font-semibold text-gray-600">CHA₂DS₂-VASc</p>
          <p className="text-[12px] text-gray-500" style={{ opacity: hasBled, transform: `translateX(${(1 - hasBled) * -10}px)` }}>
            HAS-BLED <span className="font-bold text-gray-800">2</span> / 9
          </p>
        </div>
        <p className="font-heading text-[34px] font-bold text-gray-900 leading-none tabular-nums" style={{ transform: `scale(${1 + 0.18 * scatto})` }}>
          {punteggio}
          <span className="text-[16px] font-semibold text-gray-400"> / 9</span>
        </p>
      </div>
      <Dito
        t={t}
        tappe={[
          { t: 1300, x: 120, y: 300 },
          { t: 1700, x: 42, y: 238, tocco: true },
          { t: 2250, x: 42, y: 288 },
          { t: 2500, x: 42, y: 288, tocco: true },
        ]}
      />
    </>
  );
}

const aRischio = [
  { nome: "MARTELLI Giorgio", ldl: 132, obiettivo: 55, classe: "molto alto" },
  { nome: "MARCHETTI Elena", ldl: 118, obiettivo: 70, classe: "alto" },
  { nome: "VALENTINI Teresa", ldl: 88, obiettivo: 55, classe: "molto alto" },
  { nome: "DE ANGELIS Roberto", ldl: 72, obiettivo: 55, classe: "molto alto" },
];

function Ldl({ t }: { t: number }) {
  return (
    <>
      <div className="absolute top-11 left-6 right-6">
        <Didascalia t={t} testo="Sopra l'obiettivo di LDL? *Subito.*" da={100} dim={34} />
      </div>
      <Scheda titolo="Pazienti a rischio" style={{ left: 16, top: 150, width: 328, height: 380, ...entra(t, 0, 500, 30) }} />
      {aRischio.map((p, i) => {
        const da = 400 + i * 260;
        const sopra = p.ldl - p.obiettivo;
        const riempi = esci(seg(t, da + 150, 900));
        const quota = p.obiettivo / 140;
        const fine = p.ldl / 140;
        const colore = p.classe === "alto" ? "#f59e0b" : "#ef4444";
        return (
          <div key={p.nome} className="absolute left-8 w-[296px]" style={{ top: 192 + i * 82, ...entra(t, da, 450) }}>
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-semibold text-gray-900">{p.nome}</p>
              <p className="text-[16px] font-bold tabular-nums" style={{ color: colore }}>
                +{conta(t, da + 150, 900, sopra)}
              </p>
            </div>
            <div className="relative h-[6px] mt-2 rounded-full bg-gray-100">
              <span className="absolute inset-y-0 left-0 rounded-full bg-gray-300" style={{ width: `${quota * 100 * Math.min(1, riempi * 2)}%` }} />
              <span
                className="absolute inset-y-0 rounded-full"
                style={{ left: `${quota * 100}%`, width: `${(fine - quota) * 100 * riempi}%`, background: colore }}
              />
              <span className="absolute -top-1 -bottom-1 w-[2px] bg-gray-700" style={{ left: `${quota * 100}%` }} />
            </div>
            <p className="mt-1.5 text-[12px] text-gray-500">
              LDL ≈{p.ldl} · obiettivo {p.obiettivo} · {p.classe}
            </p>
          </div>
        );
      })}
    </>
  );
}

function Stampa({ t, avviato }: { t: number; avviato: boolean }) {
  const tocco = 750;
  const esce = morbido(seg(t, tocco + 150, 750));
  const timbro = seg(t, 2100, 350);
  return (
    <>
      <div className="absolute top-11 left-6 right-6">
        <Didascalia t={t} testo="Un tocco: *referto pronto*." da={100} dim={34} />
      </div>
      <div className="absolute inset-x-0 top-[150px] flex justify-center">
        <span
          className="inline-flex items-center gap-2 rounded-xl bg-brand-800 px-6 py-3 text-[16px] font-bold text-white shadow-lg"
          style={{ ...entra(t, 150), ...(t > tocco - 80 && t < tocco + 150 ? { filter: "brightness(1.25)" } : {}) }}
        >
          <Printer size={18} aria-hidden="true" /> Stampa
        </span>
      </div>
      <div
        className="absolute left-[30px] w-[300px] h-[420px] rounded-md bg-white shadow-[0_24px_60px_-12px_rgba(16,37,37,0.45)] overflow-hidden"
        style={{ top: 620 - esce * 400, opacity: esce > 0 ? 1 : 0 }}
      >
        {/* La prima pagina vera del referto stampato dall'app. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avviato ? "/video/2026-11/cardio-referto.webp" : undefined}
          alt="Prima pagina del referto PDF della visita cardiologica stampato da Corioli"
          className="block w-[340px] max-w-none -ml-5 -mt-2"
          draggable={false}
        />
      </div>
      <span
        className="absolute left-[262px] top-[210px] z-10 inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1.5 text-[14px] font-bold text-white shadow-lg"
        style={{ opacity: timbro, transform: `scale(${0.5 + 0.5 * timbro}) rotate(-8deg)` }}
      >
        <Check size={15} strokeWidth={3} aria-hidden="true" /> PDF
      </span>
      <Dito t={t} tappe={[{ t: 350, x: 230, y: 230 }, { t: tocco, x: 186, y: 174, tocco: true }]} />
    </>
  );
}

export function filmCardiologia(): Scena[] {
  return [
    {
      durata: 2900,
      fondo: "scuro",
      capitolo: "Il problema",
      disegna: (t) => <Aggancio t={t} prima="Finita la visita," poi="inizia *il referto*." />,
    },
    {
      durata: 3500,
      fondo: "scuro",
      disegna: (t) => (
        <Caos
          t={t}
          frase="Copia. Calcola. *Ricopia.*"
          fogli={[
            { icona: fogliIcone.word, titolo: "Referto_Martelli.docx", riga: "QTc: ____ ms" },
            { icona: fogliIcone.pdf, titolo: "Calcolatore online", riga: "CHA₂DS₂-VASc = ?" },
            { icona: fogliIcone.excel, titolo: "esami_settembre.xlsx", riga: "eGFR ?   LDL ?" },
            { icona: fogliIcone.copia, titolo: "Vecchio referto", riga: "Ctrl+C  Ctrl+V" },
          ]}
        />
      ),
    },
    { durata: 1500, fondo: "scuro", disegna: (t) => <Passaggio t={t} /> },
    { durata: 6400, fondo: "chiaro", capitolo: "ECG e QTc", disegna: (t) => <Ecg t={t} /> },
    { durata: 6000, fondo: "chiaro", capitolo: "CHA₂DS₂-VASc e HAS-BLED", disegna: (t) => <Cha2ds2vasc t={t} /> },
    { durata: 4300, fondo: "chiaro", capitolo: "Pazienti a rischio", disegna: (t) => <Ldl t={t} /> },
    { durata: 4000, fondo: "chiaro", capitolo: "Referto PDF", disegna: (t, ctx) => <Stampa t={t} avviato={ctx.avviato} /> },
    {
      durata: 3000,
      fondo: "scuro",
      capitolo: "L'app vera",
      disegna: (t, ctx) => (
        <AppVera
          t={t}
          avviato={ctx.avviato}
          immagini={[
            { src: "/video/2026-11/cardio-laboratorio.webp", alt: "Esami di laboratorio di Corioli Cardiologia con il valore precedente" },
            { src: "/video/2026-11/cardio-ecg.webp", alt: "Visita cardiologica di Corioli con il modulo ECG" },
            { src: "/video/2026-11/cardio-dashboard.webp", alt: "Dashboard di Corioli Cardiologia con i pazienti a rischio" },
          ]}
        />
      ),
    },
    {
      durata: 6000,
      fondo: "scuro",
      capitolo: "Provalo gratis",
      disegna: (t, ctx) => <Finale t={t} titolo="Prova Corioli Cardiologia *gratis* per 30 giorni." ctx={ctx} />,
    },
  ];
}
