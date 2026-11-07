import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Check,
  HeartPulse,
  MonitorPlay,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Le demo sono due app complete, pubblicate come file statici in public/demo.
// Aggiungere una specialità = aggiungere una voce qui e una cartella lì.
// Le schede ricalcano SpecialtyCards (home e /download), con la dashboard vera.
const DEMO: {
  nome: string;
  descrizione: string;
  punti: string[];
  href: string;
  immagine: string;
  /** Ingrandimento dell'anteprima, perché le due app escano alla stessa scala. */
  zoom: number;
  Icona: LucideIcon;
}[] = [
  {
    nome: "Ginecologia e ostetricia",
    descrizione:
      "Visite ginecologiche, pediatriche e ostetriche, gravidanze in corso, biometria fetale, referti e ricette.",
    punti: ["Gravidanze in corso, dal primo al terzo trimestre", "Ecografie, biometria e flussimetria"],
    href: "/demo/ginecologia/",
    immagine: "/screenshots/dashboard.png",
    zoom: 1.17,
    Icona: Baby,
  },
  {
    nome: "Cardiologia",
    descrizione:
      "Visita con ECG ed ecocardiogramma, Holter, test da sforzo, laboratorio e rischio cardiovascolare.",
    punti: ["Pazienti a rischio e andamento degli esami", "Holter, scompenso e fibrillazione atriale"],
    href: "/demo/cardiologia/",
    immagine: "/screenshots/cardiologia/2026-10/dashboard.png",
    zoom: 1,
    Icona: HeartPulse,
  },
];

const garanzie = ["Si apre nel browser", "Pazienti di prova già inseriti", "Niente viene salvato"];

export default function LoginPage() {
  return (
    <div className="pt-32 md:pt-44 pb-20 md:pb-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="inline-flex items-center gap-2 text-brand-700 font-semibold mb-4">
            <MonitorPlay size={20} aria-hidden="true" />
            Demo interattiva
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Prova Corioli, <br className="sm:hidden" />adesso.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Scegli la specialità: si apre l&apos;app completa, con un archivio di
            pazienti già pronto. Inserisci visite, stampa referti, modifica quello
            che vuoi. Chiudendo la pagina si riparte da zero.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
            {garanzie.map((g) => (
              <span key={g} className="inline-flex items-center gap-1.5">
                <Check size={16} className="text-brand-600" aria-hidden="true" /> {g}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEMO.map(({ nome, descrizione, punti, href, immagine, zoom, Icona }) => (
            // Link normale e non next/link: la demo è un'altra applicazione.
            <a
              key={href}
              href={href}
              className="group flex flex-col bg-white border border-gray-100 shadow-card rounded-3xl overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
            >
              <div className="relative aspect-[16/10] bg-gray-50 border-b border-gray-100 overflow-hidden">
                <div className="absolute inset-0 origin-top" style={{ transform: `scale(${zoom})` }}>
                  <Image
                    src={immagine}
                    alt={`Dashboard di Corioli per ${nome.toLowerCase()}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-6 sm:p-8 flex-1">
                <h2 className="flex items-center gap-3 font-heading text-xl sm:text-2xl font-bold text-gray-900">
                  <Icona size={24} className="text-brand-600 shrink-0" aria-hidden="true" />
                  {nome}
                </h2>
                <p className="text-gray-600 leading-relaxed">{descrizione}</p>
                <ul className="flex flex-col gap-2 text-sm text-gray-700">
                  {punti.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check size={16} className="text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-base font-bold text-white shadow-soft group-hover:bg-brand-700 transition-colors">
                    Apri la demo
                    <ArrowRight size={18} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 rounded-3xl border border-dashed border-gray-200 bg-white/60 p-6 sm:p-8">
            <Sparkles size={24} className="text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="font-heading text-lg font-bold text-gray-900 mb-1">Altre specialità in arrivo</h2>
              <p className="text-gray-600 leading-relaxed">
                Lavori in un&apos;altra branca?{" "}
                <Link href="/contatti" className="font-semibold text-brand-700 hover:text-brand-900 underline underline-offset-4">
                  Scrivici
                </Link>
                : ci aiuta a decidere quale fare prima.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-3xl bg-brand-50 border border-brand-100 p-6 sm:p-8">
            <div className="flex-1">
              <h2 className="font-heading text-lg font-bold text-gray-900 mb-1">Ti convince?</h2>
              <p className="text-gray-600 leading-relaxed">
                Installalo nel tuo studio: 30 giorni gratis, senza carta di credito.
              </p>
            </div>
            <Link
              href="/download"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-white border border-brand-200 px-5 py-3 font-bold text-brand-700 hover:border-brand-400 hover:text-brand-900 transition-colors"
            >
              Scarica Corioli
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
