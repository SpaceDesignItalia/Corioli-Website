import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Baby, HeartPulse, type LucideIcon } from "lucide-react";
import type { Edizione } from "@/lib/ms-store";

// Una scheda per specialità, con la dashboard vera dell'app, che porta alla
// pagina della specialità (aperta dalla galleria delle schermate). La usano
// /download e la home: una galleria unica avrebbe mostrato l'app di una
// specialità sola anche a chi lavora nell'altra.
const anteprime: {
  id: Edizione;
  titolo: string;
  testo: string;
  href: string;
  immagine: string;
  /** Ingrandimento dell'anteprima, perche le due app escano alla stessa scala. */
  zoom: number;
  icona: LucideIcon;
}[] = [
  {
    id: "ginecologia",
    titolo: "Ginecologia e ostetricia",
    testo:
      "Visite ginecologica, pediatrica e ostetrica, biometria e peso fetale con Hadlock, flussimetria ombelicale e referti PDF.",
    href: "/ginecologia",
    // Catturata a finestra piu larga: l'app occupa il 77% dell'immagine
    // contro il 90% di quella della cardiologia.
    immagine: "/screenshots/dashboard.png",
    zoom: 1.17,
    icona: Baby,
  },
  {
    id: "cardiologia",
    titolo: "Cardiologia",
    testo:
      "Visita con ECG, ecocardiogramma, TC coronarica, Holter e laboratorio, indici calcolati, pazienti a rischio e referti PDF.",
    href: "/cardiologia",
    immagine: "/screenshots/cardiologia/2026-10/dashboard.png",
    zoom: 1,
    icona: HeartPulse,
  },
];

export default function SpecialtyCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      {anteprime.map(({ id, titolo, testo, href, immagine, zoom, icona: Icona }) => (
        <Link
          key={id}
          href={href}
          className="group flex flex-col bg-white border border-gray-100 shadow-card rounded-3xl overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
        >
          <div className="relative aspect-[16/10] bg-gray-50 border-b border-gray-100 overflow-hidden">
            <div className="absolute inset-0 origin-top" style={{ transform: `scale(${zoom})` }}>
              <Image
                src={immagine}
                alt={`Dashboard di Corioli per ${titolo.toLowerCase()}`}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6 sm:p-7 flex-1">
            <h3 className="flex items-center gap-3 font-heading text-xl sm:text-2xl font-bold text-gray-900">
              <Icona size={24} className="text-brand-600 shrink-0" aria-hidden="true" />
              {titolo}
            </h3>
            <p className="text-gray-600 leading-relaxed">{testo}</p>
            <span className="mt-auto pt-2 inline-flex items-center gap-2 text-base font-semibold text-brand-700 group-hover:text-brand-900 transition-colors">
              Guarda l&apos;interfaccia
              <ArrowRight size={18} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
