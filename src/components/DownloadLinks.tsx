"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { useEffect } from "react";
import { MS_STORE_URL, type Edizione } from "@/lib/ms-store";

// Ultima specialita vista nella sessione. I "Prova gratis" di header e footer
// portano a /download senza hash: senza questo un cardiologo che arriva da
// /cardiologia troverebbe preselezionata la ginecologia e scaricherebbe l'app
// sbagliata. sessionStorage e solo una comodita: se non c'e, vale il default.
const CHIAVE_EDIZIONE = "corioli-edizione";

export function RicordaEdizione({ edizione }: { edizione: Edizione }) {
  useEffect(() => {
    try {
      sessionStorage.setItem(CHIAVE_EDIZIONE, edizione);
    } catch {}
  }, [edizione]);
  return null;
}

export function leggiEdizioneRicordata(): Edizione | null {
  try {
    const valore = sessionStorage.getItem(CHIAVE_EDIZIONE);
    return valore && valore in MS_STORE_URL ? (valore as Edizione) : null;
  } catch {
    return null;
  }
}

// Link di download condivisi da /download e dalle pagine di specialita. Gli
// eventi portano l'edizione e la pagina di partenza: con due app sullo Store,
// un "program_downloaded" senza edizione non dice piu quale e stata scaricata.

type DownloadLinkProps = {
  edizione: Edizione;
  location: string;
  className?: string;
  children: React.ReactNode;
};

export function StoreLink({ edizione, location, className, children }: DownloadLinkProps) {
  return (
    <a
      href={MS_STORE_URL[edizione]}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        posthog.capture("program_downloaded", {
          os: "windows",
          source: "ms_store",
          edition: edizione,
          location,
        })
      }
      className={className}
    >
      {children}
    </a>
  );
}

// Su Mac non c'e un download diretto: l'evento traccia la richiesta di
// installazione assistita, non un'installazione avvenuta. L'edizione e
// facoltativa perche alcuni inviti a prenotare valgono per entrambe: in quel
// caso la specialita arriva dal modulo contatti.
export function MacRequestLink({
  edizione,
  location,
  className,
  children,
}: Omit<DownloadLinkProps, "edizione"> & { edizione?: Edizione }) {
  return (
    <Link
      href="/contatti"
      onClick={() =>
        posthog.capture("mac_install_requested", {
          os: "macos",
          source: location,
          edition: edizione,
        })
      }
      className={className}
    >
      {children}
    </Link>
  );
}
