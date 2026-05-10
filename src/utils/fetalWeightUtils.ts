export const calculateBMI = (weightKg: number, heightCm: number): { bmi: number; deltaWeight?: number } => {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return { bmi: parseFloat(bmi.toFixed(2)) };
};

export const calculateDeltaWeight = (prePregnancyWeight: number, currentWeight: number): number => {
  return parseFloat((currentWeight - prePregnancyWeight).toFixed(2));
};

export const calculateGAFromCRL = (
  crlMm: number,
  visitDate: Date | string
): { weeks: number; days: number; totalDays: number; edd: Date } => {
  // Formula Robinson: giorni gestazionali = 42 + 0.6 × CRL (mm)
  const totalDays = Math.round(42 + 0.6 * crlMm);
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;

  const visit = new Date(visitDate);
  const edd = new Date(visit.getTime());
  edd.setDate(edd.getDate() + (280 - totalDays));

  return { weeks, days, totalDays, edd };
};

/**
 * Tutte le misurazioni biometriche in input si intendono in millimetri (mm).
 * Vengono convertite in cm internamente per le formule di Hadlock, Shepard e Campbell.
 */

export const calculateStimePesoFetale = ({
  bpdMm,
  hcMm,
  acMm,
  flMm,
}: {
  bpdMm?: number;
  hcMm?: number;
  acMm?: number;
  flMm?: number;
}): Record<string, number | null> => {
  const bpd = bpdMm ? bpdMm / 10 : undefined; // cm
  const hc = hcMm ? hcMm / 10 : undefined; // cm
  const ac = acMm ? acMm / 10 : undefined; // cm
  const fl = flMm ? flMm / 10 : undefined; // cm

  const results: Record<string, number | null> = {
    hadlock1: null,
    hadlock2: null,
    hadlock3: null,
    hadlock4: null,
    shepard: null,
    campbell: null,
  };

  // Hadlock I: BPD, HC, AC, FL
  if (bpd && hc && ac && fl) {
    const log10W =
      1.3596 - 0.00386 * ac * fl + 0.0064 * hc + 0.00061 * bpd * ac + 0.0424 * ac + 0.174 * fl;
    results.hadlock1 = Math.pow(10, log10W);
  }

  // Hadlock II: BPD, AC, FL
  if (bpd && ac && fl) {
    const log10W = 1.335 - 0.0034 * ac * fl + 0.0316 * bpd + 0.0457 * ac + 0.1623 * fl;
    results.hadlock2 = Math.pow(10, log10W);
  }

  // Hadlock III: HC, AC, FL
  if (hc && ac && fl) {
    const log10W = 1.326 - 0.00326 * ac * fl + 0.0107 * hc + 0.0438 * ac + 0.158 * fl;
    results.hadlock3 = Math.pow(10, log10W);
  }

  // Hadlock IV: AC, FL
  if (ac && fl) {
    const log10W = 1.304 + 0.05281 * ac + 0.1938 * fl - 0.004 * ac * fl;
    results.hadlock4 = Math.pow(10, log10W);
  }

  // Shepard: BPD, AC
  if (bpd && ac) {
    const log10W = -1.7492 + 0.166 * bpd + 0.046 * ac - 0.002546 * ac * bpd;
    // Shepard formula usually gives log10(W) where W is in kg, let's convert to grams
    // Actually the standard formula: log10(EFW) = -1.7492 + 0.166(BPD) + 0.046(AC) - 0.002546(AC*BPD) gives kg.
    const efwKg = Math.pow(10, log10W);
    results.shepard = efwKg * 1000;
  }

  // Campbell: AC
  if (ac) {
    // Campbell formula: ln(EFW) = -4.564 + 0.282*AC - 0.00331*(AC^2) gives EFW in kg
    const lnW = -4.564 + 0.282 * ac - 0.00331 * ac * ac;
    const efwKg = Math.exp(lnW);
    results.campbell = efwKg * 1000;
  }

  // Arrotondamento finale a grammi interi
  Object.keys(results).forEach((key) => {
    if (results[key] !== null) {
      results[key] = Math.round(results[key] as number);
    }
  });

  return results;
};

// Funzione per il calcolo approssimativo dell'ERF
const erf = (x: number): number => {
  // Costanti
  const a1 =  0.254829592;
  const a2 = -0.284496736;
  const a3 =  1.421413741;
  const a4 = -1.453152027;
  const a5 =  1.061405429;
  const p  =  0.3275911;

  const sign = (x < 0) ? -1 : 1;
  x = Math.abs(x);

  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
};

// Funzione placeholder per i percentili di Hadlock 1991 e curve Hadlock 1984
export const getFetalWeightPercentile = (efwGrams: number, gaWeeks: number): { percentile: number; category: 'SGA' | 'AGA' | 'LGA' } => {
  // Semplificazione: logica reale richiederebbe tabelle di Hadlock
  // La media stimata per le settimane può essere calcolata come:
  // ln(EFW) = 0.578 + 0.332*GA - 0.00354*GA^2 (Hadlock 1991)
  const meanLnEFW = 0.578 + 0.332 * gaWeeks - 0.00354 * gaWeeks * gaWeeks;
  const meanEFW = Math.exp(meanLnEFW);
  
  // Assumiamo una SD fissa del 12% per semplicità nel codice placeholder
  const sd = meanEFW * 0.12; 
  
  // Calcolo approssimativo dello Z-score
  const zScore = (efwGrams - meanEFW) / sd;
  
  // Z-score a percentile (approssimato usando erf custom)
  const percentile = Math.max(0.1, Math.min(99.9, Math.round((0.5 * (1 + erf(zScore / Math.sqrt(2)))) * 100)));

  let category: 'SGA' | 'AGA' | 'LGA' = 'AGA';
  if (percentile < 10) category = 'SGA';
  if (percentile > 90) category = 'LGA';

  return { percentile, category };
};

// Flussimetria Arteria Ombelicale
export const evaluateUmbilicalArtery = (pi: number, gaWeeks: number): { status: 'Normale' | 'Alterato' } => {
  // Logica basata su curve indicative (Ciobanu / FMF) per PI
  // Placeholder: se PI è oltre 1.5 a termine, o se in generale alterato (Z-score > 95° pc)
  // Qui inseriamo una logica di base
  const upperLimit = 1.5 - (gaWeeks - 20) * 0.02; // Soglia placeholder che diminuisce con l'epoca gestazionale
  
  if (pi > upperLimit) {
    return { status: 'Alterato' };
  }
  return { status: 'Normale' };
};
