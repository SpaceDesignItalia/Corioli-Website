import type { CSSProperties, ReactNode } from "react";

// I pezzi del film demo. Tutto è una funzione del tempo `t` (ms dall'inizio
// della scena): niente animazioni con un orologio proprio, così la pausa ferma
// davvero tutto e in sviluppo si può fermare il film su un fotogramma esatto.
//
// Le misure sono in pixel della tela del film (360 x 600), che il lettore
// scala per stare nello schermo: da telefono la scala è circa 1, quindi un
// testo da 14 qui si legge a 14 anche sul telefono.

export const TELA = { w: 360, h: 600 };

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
export const seg = (t: number, da: number, durata: number) => clamp((t - da) / durata);
export const esci = (x: number) => 1 - Math.pow(1 - x, 3);
export const morbido = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
// Uscita esponenziale: parte decisa e si posa lenta, il movimento dei film di prodotto.
export const espo = (x: number) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x));
export const rimbalzo = (x: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

// Un elemento che entra salendo e schiarendosi.
export function entra(t: number, da: number, durata = 450, salita = 16): CSSProperties {
  const p = esci(seg(t, da, durata));
  return { opacity: p, transform: `translateY(${(1 - p) * salita}px)` };
}

export const digitato = (testo: string, t: number, da: number, msPerCarattere = 70) =>
  testo.slice(0, Math.max(0, Math.floor((t - da) / msPerCarattere)));

export const conta = (t: number, da: number, durata: number, a: number) =>
  Math.round(a * esci(seg(t, da, durata)));

// Le parole tra asterischi sono quelle in evidenza: "inizia il *secondo lavoro*".
function parole(testo: string) {
  let dentro = false;
  return testo.split(" ").map((p) => {
    const apre = p.startsWith("*");
    if (apre) dentro = true;
    const forte = dentro;
    if (p.replace(/[.,:;!?]+$/, "").endsWith("*")) dentro = false;
    return { p: p.replace(/\*/g, ""), forte };
  });
}

// La didascalia del film: grande, parola per parola, come i sottotitoli dei
// video brevi. `fino` la fa uscire, per cambiarla con un'altra nello stesso posto.
export function Didascalia({
  t,
  testo,
  da = 0,
  fino,
  dim = 32,
  scuro = false,
  className = "",
}: {
  t: number;
  testo: string;
  da?: number;
  fino?: number;
  dim?: number;
  scuro?: boolean;
  className?: string;
}) {
  if (t < da - 20 || (fino !== undefined && t > fino)) return null;
  const uscita = fino === undefined ? 0 : seg(t, fino - 200, 200);
  const elenco = parole(testo);
  return (
    <p
      className={`font-heading font-bold tracking-tight ${scuro ? "text-white" : "text-gray-900"} ${className}`}
      style={{
        fontSize: dim,
        lineHeight: 1.1,
        opacity: 1 - uscita,
        transform: `translateY(${-uscita * 12}px)`,
      }}
    >
      {elenco.map((w, i) => {
        const p = esci(seg(t, da + i * 70, 420));
        const evid = esci(seg(t, da + i * 70 + 260, 380));
        return (
          <span
            key={i}
            className="inline-block"
            style={{
              marginRight: i < elenco.length - 1 ? "0.24em" : 0,
              opacity: p,
              transform: `translateY(${(1 - p) * 0.45}em) scale(${0.92 + 0.08 * p})`,
              filter: p < 1 ? `blur(${(1 - p) * 5}px)` : undefined,
            }}
          >
            {w.forte ? (
              <span
                className={scuro ? "text-brand-200" : "text-brand-700"}
                style={{
                  backgroundImage: `linear-gradient(transparent 62%, ${scuro ? "rgba(91,166,166,0.45)" : "rgba(140,199,199,0.55)"} 62%)`,
                  backgroundSize: `${evid * 100}% 100%`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                {w.p}
              </span>
            ) : (
              w.p
            )}
          </span>
        );
      })}
    </p>
  );
}

// Il dito che tocca lo schermo: chi guarda è al telefono, un puntatore del
// mouse non gli direbbe nulla. Le tappe sono punti della tela nel tempo.
export function Dito({
  t,
  tappe,
  discreto = false,
}: {
  t: number;
  tappe: { t: number; x: number; y: number; tocco?: boolean }[];
  // Più piccolo e leggero, per il film della ginecologia.
  discreto?: boolean;
}) {
  const primo = tappe[0];
  const ultimo = tappe[tappe.length - 1];
  const vis = seg(t, primo.t - 250, 250) * (1 - seg(t, ultimo.t + 350, 250));
  if (vis <= 0) return null;
  let x = primo.x;
  let y = primo.y;
  for (let k = 1; k < tappe.length; k++) {
    const a = tappe[k - 1];
    const b = tappe[k];
    if (t >= a.t) {
      const p = morbido(seg(t, a.t, Math.max(1, b.t - a.t)));
      x = a.x + (b.x - a.x) * p;
      y = a.y + (b.y - a.y) * p;
    }
  }
  let premuto = false;
  const onde: number[] = [];
  for (const tp of tappe) {
    if (!tp.tocco) continue;
    const d = t - tp.t;
    if (d > -90 && d < 150) premuto = true;
    if (d >= 0 && d < 650) onde.push(d / 650);
  }
  return (
    <div
      aria-hidden="true"
      className="absolute z-40 pointer-events-none"
      style={{ left: x, top: y, opacity: vis }}
    >
      {onde.map((r, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${discreto ? "border-2 border-brand-400" : "border-[3px] border-brand-500"}`}
          style={{
            left: -32,
            top: -32,
            width: 64,
            height: 64,
            opacity: (1 - r) * (discreto ? 0.8 : 1),
            transform: `scale(${0.35 + 1.1 * r})`,
          }}
        />
      ))}
      <span
        className={`absolute rounded-full ${
          discreto
            ? "bg-white/90 ring-1 ring-black/10 shadow-[0_4px_14px_rgba(16,37,37,0.25)]"
            : "bg-white/75 ring-[3px] ring-gray-900/25 shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
        }`}
        style={
          discreto
            ? { left: -16, top: -16, width: 32, height: 32, transform: `scale(${premuto ? 0.8 : 1})` }
            : { left: -22, top: -22, width: 44, height: 44, transform: `scale(${premuto ? 0.78 : 1})` }
        }
      />
    </div>
  );
}

export function Caret({ visibile = true }: { visibile?: boolean }) {
  if (!visibile) return null;
  return <span className="inline-block w-[2px] h-[1.05em] -mb-[0.15em] ml-px bg-brand-600 animate-pulse" />;
}

// Una scheda bianca come quelle dell'app.
export function Scheda({
  titolo,
  icona,
  style,
  children,
}: {
  titolo: string;
  icona?: ReactNode;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      className="absolute rounded-2xl bg-white border border-gray-200 shadow-[0_18px_50px_-18px_rgba(16,37,37,0.35)]"
      style={style}
    >
      <p className="flex items-center gap-1.5 px-4 pt-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-gray-500">
        {icona}
        {titolo}
      </p>
      {children}
    </div>
  );
}

// Un campo dell'app: etichetta, casella, e sotto una riga facoltativa.
export function Campo({
  x,
  y,
  w,
  etichetta,
  valore,
  unita,
  attivo,
  scrivendo,
  sotto,
}: {
  x: number;
  y: number;
  w: number;
  etichetta: string;
  valore: string;
  unita?: string;
  attivo?: boolean;
  scrivendo?: boolean;
  sotto?: ReactNode;
}) {
  return (
    <div className="absolute" style={{ left: x, top: y, width: w }}>
      <p className="text-[12px] text-gray-500 mb-1">{etichetta}</p>
      <div
        className={`h-10 rounded-lg border px-3 flex items-center justify-between bg-white transition-shadow ${
          attivo ? "border-brand-500 ring-[3px] ring-brand-100" : "border-gray-200"
        }`}
      >
        <span className="text-[17px] font-semibold text-gray-900 tabular-nums">
          {valore}
          <Caret visibile={scrivendo} />
        </span>
        {unita && <span className="text-[12px] text-gray-400">{unita}</span>}
      </div>
      {sotto}
    </div>
  );
}

// La linea del percentile sotto un campo, con il rombo che scorre al suo posto.
export function Percentile({ p, valore }: { p: number; valore: number }) {
  const pos = (valore / 100) * p;
  return (
    <div className="relative mt-2 h-4" style={{ opacity: p > 0 ? 1 : 0 }}>
      <span className="absolute left-0 right-9 top-1/2 h-px bg-gray-300" />
      <span
        className="absolute top-1/2 w-2.5 h-2.5 -mt-[5px] -ml-[5px] rotate-45 bg-gray-700"
        style={{ left: `calc((100% - 36px) * ${pos / 100})` }}
      />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] font-semibold text-brand-700 tabular-nums">
        {Math.round(valore * p)}°
      </span>
    </div>
  );
}

// Un alone che pulsa attorno a un elemento appena calcolato.
export function alone(t: number, da: number): CSSProperties {
  const p = seg(t, da, 700);
  if (p <= 0) return {};
  const a = Math.sin(p * Math.PI);
  return {
    boxShadow: `0 0 0 ${3 + 6 * a}px rgba(61,138,138,${0.18 + 0.25 * a})`,
    borderColor: "#3d8a8a",
  };
}

// Il titolo raffinato: ogni parola sale da una maschera, senza sfocature, e
// all'uscita (`fino`) sale via verso l'alto mentre il titolo dopo arriva da
// sotto. Le parole tra asterischi prendono il colore del marchio.
export function Titolo({
  t,
  testo,
  da = 0,
  fino,
  occhiello,
  dim = 28,
  scuro = false,
  centrato = false,
}: {
  t: number;
  testo: string;
  da?: number;
  fino?: number;
  occhiello?: string;
  dim?: number;
  scuro?: boolean;
  centrato?: boolean;
}) {
  if (t < da - 20 || (fino !== undefined && t > fino + 1100)) return null;
  const elenco = parole(testo);
  const esce = (ritardo: number) => (fino === undefined ? 0 : espo(seg(t, fino + ritardo, 500)));
  return (
    <div className={`absolute inset-x-0 top-0 ${centrato ? "text-center" : ""}`}>
      {occhiello && (
        <p
          className={`text-[12px] font-semibold uppercase tracking-[0.22em] mb-2.5 ${scuro ? "text-brand-300" : "text-brand-600"}`}
          style={{ opacity: espo(seg(t, da, 600)) * (1 - esce(0)) }}
        >
          {occhiello}
        </p>
      )}
      <p
        className={`font-heading font-semibold tracking-[-0.02em] ${scuro ? "text-white" : "text-gray-900"}`}
        style={{ fontSize: dim, lineHeight: 1.14 }}
      >
        {elenco.map((w, i) => {
          const p = espo(seg(t, da + 80 + i * 55, 750));
          return (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
              style={{ marginRight: i < elenco.length - 1 ? "0.24em" : 0 }}
            >
              <span
                className={`inline-block ${w.forte ? (scuro ? "text-brand-200" : "text-brand-600") : ""}`}
                style={{ transform: `translateY(${(1 - p) * 110 - esce(i * 25) * 110}%)` }}
              >
                {w.p}
              </span>
            </span>
          );
        })}
      </p>
    </div>
  );
}

// La finestra dell'app che resta ferma mentre cambia quello che c'è dentro:
// le funzioni si susseguono senza tagli. `etichetta` è la vista aperta.
export const FINESTRA = { x: 16, y: 150, w: 328, h: 430, testata: 46 };

export function Finestra({
  t,
  etichetta,
  entrata = false,
  durata,
}: {
  t: number;
  etichetta: string;
  // Solo la prima scena della serie fa entrare la finestra.
  entrata?: boolean;
  durata: number;
}) {
  const p = entrata ? espo(seg(t, 0, 900)) : 1;
  const nome = espo(seg(t, entrata ? 400 : 0, 500)) * (1 - seg(t, durata - 350, 300));
  return (
    <div
      className="absolute rounded-[22px] bg-white ring-1 ring-black/[0.06] shadow-[0_30px_70px_-28px_rgba(16,37,37,0.45)]"
      style={{
        left: FINESTRA.x,
        top: FINESTRA.y,
        width: FINESTRA.w,
        height: FINESTRA.h,
        opacity: p,
        transform: `translateY(${(1 - p) * 40}px) scale(${0.97 + 0.03 * p})`,
      }}
    >
      <div className="flex items-center justify-between h-[46px] px-4 border-b border-gray-100">
        <span className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/corioli-logo-short.svg" alt="" className="h-[18px] w-auto" />
          <span className="text-[13px] font-semibold text-gray-800">Corioli</span>
        </span>
        <span className="text-[12px] font-medium text-gray-500" style={{ opacity: nome }}>
          {etichetta}
        </span>
      </div>
    </div>
  );
}

// Il contenuto di una scena collegata: entra dopo la finestra ed esce prima
// che la scena dopo prenda il suo posto.
export function contenuto(t: number, durata: number, da = 150): CSSProperties {
  const dentro = espo(seg(t, da, 600));
  const fuori = seg(t, durata - 380, 330);
  return {
    opacity: dentro * (1 - fuori),
    transform: `translateY(${(1 - dentro) * 14 - fuori * 10}px)`,
  };
}
