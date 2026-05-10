export const calculateAge = (birthDate: Date | string): number => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const m = today.getMonth() - birthDateObj.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

export const calculateGestationalAgeFromLMP = (
  visitDate: Date | string,
  lmpDate: Date | string
): { weeks: number; days: number; totalDays: number; edd: Date } => {
  const visit = new Date(visitDate);
  const lmp = new Date(lmpDate);
  const diffTime = Math.abs(visit.getTime() - lmp.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diffDays / 7);
  const days = diffDays % 7;
  
  // EDD = LMP + 280 days (Naegele)
  const edd = new Date(lmp.getTime());
  edd.setDate(edd.getDate() + 280);

  return { weeks, days, totalDays: diffDays, edd };
};

export const formatGestationalAge = (weeks: number, days: number): string => {
  return `${weeks}+${days}`;
};
