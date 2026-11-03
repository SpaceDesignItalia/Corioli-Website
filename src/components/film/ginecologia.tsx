import { ArrowRight, Baby, BookOpen, Calculator, Check, ClipboardList, Copy, FileSpreadsheet, FileText, Printer, RotateCcw } from "lucide-react";
import type { ReactNode } from "react";
import { FONDI, type Contesto, type Scena } from "./comuni";
import {
  Campo,
  Dito,
  Finestra,
  Percentile,
  Titolo,
  alone,
  contenuto,
  conta,
  digitato,
  espo,
  seg,
} from "./parti";

// Il film di /ginecologia, versione "raffinata" (richiesta di Pablo,
// 3/11/2026): ritmo calmo, una sola finestra dell'app che resta ferma mentre
// le funzioni si susseguono, titoli che salgono da una maschera, un dito
// discreto. Valori, nomi e testi vengono dall'archivio demo delle schermate
// (visita ostetrica di Paola Palmeri a 28+5, modelli di testo delle
// impostazioni): niente funzioni che l'app non ha. Il CRL non compare: vedi
// le memorie sui claim.

const TITOLO = { left: 24, right: 24, top: 38 } as const;

function Apertura({ t }: { t: number }) {
  const luce = espo(seg(t, 0, 2200));
  return (
    <>
      <div
        className="absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(61,138,138,0.35),transparent)]"
        style={{ opacity: luce, transform: `translate(${t * 0.012}px, ${t * 0.01}px)` }}
      />
      <div className="absolute left-7 right-7 top-[200px]">
        <Titolo t={t} occhiello="Studio di ginecologia" testo="Finita l'ecografia, inizia il *secondo lavoro*." dim={40} scuro />
      </div>
    </>
  );
}

const strumenti = [
  { icona: FileText, testo: "Il referto in Word" },
  { icona: FileSpreadsheet, testo: "Le biometrie in Excel" },
  { icona: BookOpen, testo: "Le tabelle di Hadlock" },
  { icona: Calculator, testo: "La calcolatrice del telefono" },
  { icona: Copy, testo: "Copia e incolla" },
];

function Problema({ t, durata }: { t: number; durata: number }) {
  const barra = 3000;
  const apre = durata - 1000;
  const cerchio = espo(seg(t, apre, 950));
  return (
    <>
      <div className="absolute" style={TITOLO}>
        <Titolo t={t} occhiello="Oggi" testo="Ogni visita, *da capo*." da={1100} fino={2850} dim={32} scuro />
        <Titolo t={t} occhiello="Con Corioli" testo="Niente di tutto questo." da={3050} dim={32} scuro />
      </div>
      {strumenti.map((s, i) => {
        const p = espo(seg(t, 120 + i * 170, 700));
        const via = espo(seg(t, barra + i * 110, 450));
        const Icona = s.icona;
        return (
          <div
            key={s.testo}
            className="absolute left-7 right-7 flex items-center gap-3.5"
            style={{ top: 190 + i * 58, opacity: p * (1 - 0.6 * via), transform: `translateY(${(1 - p) * 14}px)` }}
          >
            <span className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center text-brand-200">
              <Icona size={19} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="relative text-[19px] text-white/90">
              {s.testo}
              <span className="absolute left-0 top-[55%] h-[2px] bg-white/70 rounded-full" style={{ width: `${via * 100}%` }} />
            </span>
          </div>
        );
      })}
      {/* La luce della scena dopo si apre dal centro: il passaggio a Corioli. */}
      <div
        className="absolute inset-0"
        style={{ background: FONDI.chiaro, clipPath: `circle(${cerchio * 120}% at 50% 62%)` }}
      />
    </>
  );
}

const misure = [
  { etichetta: "DBP (mm)", valore: "72", pct: 42 },
  { etichetta: "CC (mm)", valore: "261", pct: 47 },
  { etichetta: "CA (mm)", valore: "240", pct: 28 },
  { etichetta: "FL (mm)", valore: "54", pct: 57 },
];
// Le caselle in pixel della tela: servono anche al dito.
const casella = (i: number) => ({ x: 32 + (i % 2) * 156, y: 236 + Math.floor(i / 2) * 94 });

function Sezione({ y, children }: { y: number; children: ReactNode }) {
  return (
    <p className="absolute left-8 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400" style={{ top: y }}>
      {children}
    </p>
  );
}

function Biometria({ t, durata }: { t: number; durata: number }) {
  const inizio = (i: number) => 1150 + i * 480;
  const peso = 3250;
  return (
    <>
      <div className="absolute" style={TITOLO}>
        <Titolo t={t} occhiello="Biometria fetale" testo="Scrivi le misure." da={350} fino={3000} />
        <Titolo t={t} occhiello="Biometria fetale" testo="Percentili e peso fetale, *già calcolati*." da={3150} fino={durata - 500} />
      </div>
      <Finestra t={t} etichetta="Visita ostetrica" entrata durata={durata} />
      <div className="absolute inset-0" style={contenuto(t, durata, 500)}>
        <Sezione y={210}>Paola Palmeri · 28+5 settimane</Sezione>
        {misure.map((m, i) => {
          const c = casella(i);
          const fine = inizio(i) + m.valore.length * 80;
          return (
            <Campo
              key={m.etichetta}
              x={c.x}
              y={c.y}
              w={140}
              etichetta={m.etichetta}
              valore={digitato(m.valore, t, inizio(i), 80)}
              attivo={t > inizio(i) - 120 && t < inizio(i) + 480}
              scrivendo={t > inizio(i) - 120 && t < fine}
              sotto={<Percentile p={espo(seg(t, fine + 60, 700))} valore={m.pct} />}
            />
          );
        })}
        <div
          className="absolute left-8 w-[296px] rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3.5"
          style={{
            top: 432,
            opacity: espo(seg(t, peso - 300, 600)),
            transform: `translateY(${(1 - espo(seg(t, peso - 300, 600))) * 12}px)`,
            ...alone(t, peso + 950),
          }}
        >
          <p className="text-[13px] font-medium text-gray-600">
            Peso fetale stimato <span className="text-gray-400">· Hadlock IV</span>
          </p>
          <div className="flex items-end justify-between mt-1.5">
            <p className="font-heading text-[32px] font-semibold text-gray-900 tabular-nums leading-none tracking-tight">
              {conta(t, peso, 1000, 1227)}
              <span className="text-[16px] font-medium text-gray-400 ml-1">g</span>
            </p>
            <div className="w-[128px] pb-0.5">
              <Percentile p={espo(seg(t, peso + 600, 700))} valore={42} />
            </div>
          </div>
        </div>
      </div>
      <Dito
        discreto
        t={t}
        tappe={misure.flatMap((_, i) => {
          const c = casella(i);
          return [
            { t: inizio(i) - 300, x: c.x + 72, y: c.y + 40 },
            { t: inizio(i) - 120, x: c.x + 72, y: c.y + 40, tocco: true },
          ];
        })}
      />
    </>
  );
}

const modelli = ["Anamnesi Standard", "Standard Ginecologia", "Eco TV Standard", "Visita per Prolasso"];
const testoModello =
  "VISITA GINECOLOGICA: genitali esterni e vagina regolari. Spc: portio ben epitelizzata, non lesioni aggettanti, non leucorrea. Corpo uterino regolare per forma e dimensioni, campi annessiali apparentemente liberi.";

function Referto({ testo, y = 248, h = 300, attivo = false }: { testo: ReactNode; y?: number; h?: number; attivo?: boolean }) {
  return (
    <>
      <p className="absolute left-8 top-[212px] text-[14px] font-semibold text-gray-800">3. Visita / Ecografia</p>
      <div
        className="absolute left-8 w-[296px] rounded-xl border bg-white px-3.5 py-3 text-[14px] leading-[1.5] text-gray-700"
        style={{ top: y, height: h, borderColor: attivo ? "#5ba6a6" : "#e5e7eb" }}
      >
        {testo}
      </div>
    </>
  );
}

function Modelli({ t, durata }: { t: number; durata: number }) {
  const apri = 1300;
  const scegli = 2250;
  const scrivi = 2500;
  const menu = espo(seg(t, apri, 350)) * (1 - seg(t, scegli + 120, 200));
  const testo = digitato(testoModello, t, scrivi, 10);
  return (
    <>
      <div className="absolute" style={TITOLO}>
        <Titolo t={t} occhiello="Modelli di testo" testo="Le frasi di sempre," da={150} fino={2300} />
        <Titolo t={t} occhiello="Modelli di testo" testo="*un tocco* e sono nel referto." da={2450} fino={durata - 500} />
      </div>
      <Finestra t={t} etichetta="Visita ginecologica" durata={durata} />
      <div className="absolute inset-0" style={contenuto(t, durata)}>
        <Referto
          attivo={t > scrivi}
          testo={
            <>
              {testo}
              {t > scrivi && testo.length < testoModello.length && (
                <span className="inline-block w-[2px] h-[1em] -mb-[2px] bg-brand-600" />
              )}
            </>
          }
        />
        <span
          className="absolute top-[206px] left-[240px] inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] font-semibold text-gray-700 transition-colors"
          style={{ background: t > apri - 100 && t < scegli ? "#d9eeee" : "#f1f5f9" }}
        >
          <ClipboardList size={14} aria-hidden="true" /> Modello
        </span>
        {menu > 0 && (
          <div
            className="absolute left-[104px] top-[242px] w-[226px] rounded-xl bg-white p-1.5 shadow-[0_20px_45px_-12px_rgba(16,37,37,0.35)] ring-1 ring-black/[0.06] z-20"
            style={{ opacity: menu, transform: `translateY(${(1 - menu) * -6}px) scale(${0.98 + 0.02 * menu})`, transformOrigin: "top right" }}
          >
            {modelli.map((m, i) => (
              <p
                key={m}
                className={`h-[38px] flex items-center px-3 rounded-lg text-[14px] ${
                  i === 1 && t > 1900 ? "bg-brand-50 text-brand-800 font-medium" : "text-gray-600"
                }`}
              >
                {m}
              </p>
            ))}
          </div>
        )}
      </div>
      <Dito
        discreto
        t={t}
        tappe={[
          { t: 800, x: 300, y: 300 },
          { t: apri, x: 284, y: 221, tocco: true },
          { t: 1900, x: 210, y: 305 },
          { t: scegli, x: 210, y: 305, tocco: true },
        ]}
      />
    </>
  );
}

function Stampa({ t, durata }: { t: number; durata: number }) {
  const tocco = 900;
  const esce = espo(seg(t, tocco + 150, 1000));
  const timbro = espo(seg(t, 2050, 500));
  return (
    <>
      <div className="absolute" style={TITOLO}>
        <Titolo t={t} occhiello="Referto PDF" testo="E il referto è *pronto da consegnare*." da={150} fino={durata - 500} />
      </div>
      <Finestra t={t} etichetta="Visita ginecologica" durata={durata} />
      <div className="absolute inset-0" style={contenuto(t, durata, 0)}>
        <div style={{ opacity: 1 - 0.5 * esce }}>
          <Referto testo={testoModello} h={248} />
        </div>
        <span
          className="absolute right-8 top-[512px] inline-flex items-center gap-2 rounded-xl bg-brand-800 px-4 py-2.5 text-[14px] font-semibold text-white"
          style={{ filter: t > tocco - 80 && t < tocco + 160 ? "brightness(1.3)" : undefined }}
        >
          <Printer size={16} aria-hidden="true" /> Stampa PDF
        </span>
        <div
          className="absolute left-[32px] w-[296px] h-[430px] rounded-[6px] bg-white px-5 pt-5 overflow-hidden shadow-[0_30px_70px_-20px_rgba(16,37,37,0.5)] ring-1 ring-black/[0.04]"
          style={{
            top: 620 - esce * 412,
            opacity: esce > 0 ? 1 : 0,
            transform: `rotate(${(1 - esce) * -3}deg)`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-semibold text-gray-900">Dott. Andrea Rossi</p>
              <p className="text-[11px] text-gray-500">Ginecologia e Ostetricia</p>
            </div>
            <p className="text-[11px] text-gray-500 text-right">Studio Medico Verdi</p>
          </div>
          <div className="h-px bg-gray-900 mt-3 mb-3" />
          <p className="text-center text-[12px] font-semibold tracking-[0.25em] text-gray-800 bg-gray-100 py-1.5">
            VISITA GINECOLOGICA
          </p>
          <p className="mt-3 text-[12px] text-gray-600">
            Paziente <span className="font-semibold text-gray-900">Paola Palmeri</span>
          </p>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] text-gray-700 bg-gray-100 px-2 py-1">ESAME OBIETTIVO</p>
          <p className="mt-2 text-[12px] leading-[1.5] text-gray-800">{testoModello}</p>
        </div>
        <span
          className="absolute left-[252px] top-[194px] z-10 inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1.5 text-[13px] font-semibold text-white shadow-lg"
          style={{ opacity: timbro, transform: `scale(${0.7 + 0.3 * timbro})` }}
        >
          <Check size={14} strokeWidth={3} aria-hidden="true" /> PDF
        </span>
      </div>
      <Dito discreto t={t} tappe={[{ t: 450, x: 240, y: 470 }, { t: tocco, x: 270, y: 530, tocco: true }]} />
    </>
  );
}

// Oggi, nell'archivio demo, è il 28 maggio 2026: le date presunte del parto
// sono contate da lì (280 giorni).
const gravidanze = [
  { nome: "Paola Palmeri", sett: 30, giorni: 5, dpp: "1 ago 2026", mancano: 65 },
  { nome: "Maria Vecchi", sett: 22, giorni: 1, dpp: "30 set 2026", mancano: 125 },
  { nome: "Gianna Vecchi", sett: 13, giorni: 4, dpp: "29 nov 2026", mancano: 185 },
];

function Gravidanze({ t, durata }: { t: number; durata: number }) {
  return (
    <>
      <div className="absolute" style={TITOLO}>
        <Titolo t={t} occhiello="Dashboard" testo="Ogni gravidanza, *a colpo d'occhio*." da={150} fino={durata - 500} />
      </div>
      <Finestra t={t} etichetta="Dashboard" durata={durata} />
      <div className="absolute inset-0" style={contenuto(t, durata)}>
        <Sezione y={212}>
          <Baby size={14} className="text-brand-500" aria-hidden="true" /> Gravidanze in corso
        </Sezione>
        {gravidanze.map((g, i) => {
          const da = 450 + i * 300;
          const p = espo(seg(t, da, 700));
          const pieni = Math.round(g.sett * espo(seg(t, da + 200, 1400)));
          return (
            <div
              key={g.nome}
              className="absolute left-8 w-[296px]"
              style={{ top: 248 + i * 104, opacity: p, transform: `translateY(${(1 - p) * 12}px)` }}
            >
              <div className="flex items-center justify-between">
                <p className="text-[16px] font-semibold text-gray-900">{g.nome}</p>
                <span className="rounded-full bg-green-50 ring-1 ring-green-200 px-2.5 py-0.5 text-[13px] font-semibold text-green-700 tabular-nums">
                  {g.sett}+{g.giorni}
                </span>
              </div>
              <div className="flex gap-[3px] mt-2.5" aria-hidden="true">
                {Array.from({ length: 40 }).map((_, k) => (
                  <span key={k} className={`h-[5px] flex-1 rounded-full ${k < pieni ? "bg-green-600" : "bg-gray-200"}`} />
                ))}
              </div>
              <p className="mt-2 text-[12px] text-gray-500">
                DPP {g.dpp} · {g.mancano} giorni al parto
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

// L'app vera, su un portatile: la visita ostetrica scorre piano nello schermo.
function AppVera({ t, durata, avviato }: { t: number; durata: number; avviato: boolean }) {
  const p = espo(seg(t, 250, 1000));
  const scorre = seg(t, 900, durata - 900);
  return (
    <>
      <div className="absolute" style={TITOLO}>
        <Titolo t={t} occhiello="L'app vera" testo="Ed è proprio così, *sul computer dello studio*." da={150} />
      </div>
      <div
        className="absolute left-[6px] w-[348px] top-[196px]"
        style={{ opacity: p, transform: `translateY(${(1 - p) * 36}px) scale(${0.96 + 0.04 * p})` }}
      >
        <div className="mx-[12px] rounded-t-[14px] bg-gray-900 p-[7px] pb-[9px] shadow-[0_30px_60px_-25px_rgba(16,37,37,0.6)]">
          <div className="relative h-[216px] rounded-[4px] overflow-hidden bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avviato ? "/video/2026-11/gine-ostetrica.webp" : undefined}
              alt="Visita ostetrica in Corioli con biometria fetale, percentili di Hadlock e peso fetale stimato"
              className="absolute left-0 top-0 w-full max-w-none"
              style={{ transform: `translateY(${-espo(scorre) * 150}px)` }}
              draggable={false}
            />
          </div>
        </div>
        <div className="h-[12px] rounded-b-[12px] bg-gradient-to-b from-gray-300 to-gray-400 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.3)]">
          <div className="mx-auto w-14 h-[5px] rounded-b-md bg-gray-400/80" />
        </div>
        <p className="mt-7 text-center text-[13px] font-medium tracking-[0.12em] uppercase text-gray-400" style={{ opacity: espo(seg(t, 1200, 700)) }}>
          Per Windows e Mac
        </p>
      </div>
    </>
  );
}

function Finale({ t, ctx }: { t: number; ctx: Contesto }) {
  const logo = espo(seg(t, 0, 800));
  const resto = (da: number) => {
    const p = espo(seg(t, da, 700));
    return { opacity: p, transform: `translateY(${(1 - p) * 12}px)` };
  };
  return (
    <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_35%,#234949_0%,#0d1f1f_80%)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/corioli-logo-su-scuro.svg"
        alt="Corioli"
        className="absolute left-1/2 top-[120px] h-10 w-auto -translate-x-1/2"
        style={{ opacity: logo }}
      />
      <div className="absolute left-7 right-7 top-[196px]">
        <Titolo t={t} testo="Prova Corioli *gratis* per 30 giorni." da={300} dim={34} scuro centrato />
      </div>
      <p className="absolute inset-x-7 top-[300px] text-center text-[15px] leading-relaxed text-brand-100/75" style={resto(1100)}>
        Senza carta di credito.
        <br />I dati restano nel tuo studio.
      </p>
      <div className="absolute inset-x-0 top-[380px] flex flex-col items-center gap-1" style={resto(1400)}>
        <a
          href={ctx.cta.href}
          onClick={ctx.cta.onClick}
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[16px] font-semibold text-brand-800 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.6)]"
        >
          {ctx.cta.label} <ArrowRight size={18} aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={ctx.riguarda}
          className="inline-flex items-center gap-1.5 px-4 py-3 text-[14px] font-medium text-brand-100/80"
        >
          <RotateCcw size={14} aria-hidden="true" /> Riguarda
        </button>
      </div>
    </div>
  );
}

export function filmGinecologia(): Scena[] {
  return [
    { durata: 2900, fondo: "scuro", capitolo: "Il problema", disegna: (t) => <Apertura t={t} /> },
    { durata: 5200, fondo: "scuro", disegna: (t, ctx) => <Problema t={t} durata={ctx.durata} /> },
    {
      durata: 6000,
      fondo: "chiaro",
      legata: true,
      capitolo: "Biometria e peso fetale",
      disegna: (t, ctx) => <Biometria t={t} durata={ctx.durata} />,
    },
    {
      durata: 5600,
      fondo: "chiaro",
      legata: true,
      capitolo: "Modelli di testo",
      disegna: (t, ctx) => <Modelli t={t} durata={ctx.durata} />,
    },
    {
      durata: 4200,
      fondo: "chiaro",
      legata: true,
      capitolo: "Referto PDF",
      disegna: (t, ctx) => <Stampa t={t} durata={ctx.durata} />,
    },
    {
      durata: 4200,
      fondo: "chiaro",
      legata: true,
      capitolo: "Gravidanze in corso",
      disegna: (t, ctx) => <Gravidanze t={t} durata={ctx.durata} />,
    },
    {
      durata: 4000,
      fondo: "chiaro",
      capitolo: "L'app vera",
      disegna: (t, ctx) => <AppVera t={t} durata={ctx.durata} avviato={ctx.avviato} />,
    },
    { durata: 6000, fondo: "scuro", capitolo: "Provalo gratis", disegna: (t, ctx) => <Finale t={t} ctx={ctx} /> },
  ];
}
