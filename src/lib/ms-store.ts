// Schede Microsoft Store delle due applicazioni. Ginecologia e cardiologia sono
// prodotti distinti sullo Store, con archivi separati: il link giusto dipende
// dalla specialita, quindi gli ID vivono qui e non vanno ripetuti nelle pagine.
export const MS_STORE_URL = {
  ginecologia: "https://apps.microsoft.com/store/detail/9P24WMFJW58N",
  cardiologia: "https://apps.microsoft.com/store/detail/9NM6RX4PNBDK",
} as const;

export type Edizione = keyof typeof MS_STORE_URL;

// Categorie del blog che appartengono a una specialita con la sua app: servono
// a preselezionare l'app giusta su /download a chi arriva da un articolo.
const EDIZIONE_PER_CATEGORIA: Record<string, Edizione> = {
  Cardiologia: "cardiologia",
  Ginecologia: "ginecologia",
  Ostetricia: "ginecologia",
};

export function edizioneDaCategoria(category: string): Edizione | null {
  return EDIZIONE_PER_CATEGORIA[category] ?? null;
}
