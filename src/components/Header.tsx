"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  // Il logo è diviso in due file allineati: il segno (corioli-logo-short.svg)
  // e la scritta (corioli-logo-testo.svg), che affiancati ridanno il logo
  // intero. Dopo lo scroll, solo da desktop dove la pillola esiste, il segno
  // passa nel menu e la scritta sfuma sul posto. logoRef punta al segno
  // visibile; logoPrima è la sua posizione appena prima del cambio.
  const logoRef = useRef<HTMLSpanElement>(null);
  const logoPrima = useRef<DOMRect | null>(null);
  const scrolledRef = useRef(false);
  const logoNelMenu = isScrolled && isDesktop;

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled === scrolledRef.current) return;
      scrolledRef.current = scrolled;
      if (desktop.matches) logoPrima.current = logoRef.current?.getBoundingClientRect() ?? null;
      setIsScrolled(scrolled);
    };
    const handleDesktop = () => setIsDesktop(desktop.matches);
    handleDesktop();
    // Anche al caricamento: chi ricarica a metà pagina vede subito il menu compatto.
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, []);

  // Il logo "scivola" dalla sua posizione a quella nuova invece di sparire e
  // ricomparire (Pablo, 2/11/2026): dopo il cambio si misura dove è finito e lo
  // si riporta visivamente al punto di partenza, poi lo si lascia arrivare. Dura
  // quanto le transizioni CSS della pillola, così finisce insieme a loro.
  useLayoutEffect(() => {
    const prima = logoPrima.current;
    logoPrima.current = null;
    const el = logoRef.current;
    if (!prima || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dopo = el.getBoundingClientRect();
    if (!dopo.height) return;
    const dx = prima.left - dopo.left;
    const dy = prima.top - dopo.top;
    const scala = prima.height / dopo.height;
    el.animate(
      [
        { transformOrigin: "top left", transform: `translate(${dx}px, ${dy}px) scale(${scala})` },
        { transformOrigin: "top left", transform: "none" },
      ],
      { duration: 500, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
  }, [logoNelMenu]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Via DOM perché i tipi di React 18 del progetto non conoscono `inert`.
    if (mobileMenuRef.current) mobileMenuRef.current.inert = !mobileMenuOpen;
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Il blog resta nel footer: Pablo non lo vuole nel menu (21/10/2026).
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Funzionalità", href: "/funzionalita" },
    { name: "Specializzazioni", href: "/specializzazioni" },
    { name: "Prezzi", href: "/prezzi" },
    { name: "Chi siamo", href: "/chi-siamo" },
    { name: "Contatti", href: "/contatti" },
  ];

  // Attivo anche sulle pagine figlie.
  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  // Su /download i pulsanti della prova portano alla pagina stessa, sopra al
  // suo "Scarica Corioli": due inviti diversi per la stessa azione confondono
  // (Pablo, 2/11/2026), quindi lì non si mostrano.
  const showTrialCta = pathname !== "/download";

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "py-4 pointer-events-none" : "py-5 pointer-events-auto",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Logo. Da telefono, dopo lo scroll, sparisce verso l'alto come
            prima; da desktop passa nella pillola del menu. Il contenitore
            tiene l'altezza della riga (h-20/h-24) anche quando è vuoto. */}
        <div
          className={clsx(
            "flex items-center h-20 md:h-24 transition-all duration-500",
            isScrolled && !isDesktop
              ? "opacity-0 -translate-y-4"
              : "opacity-100 translate-y-0",
            // Dopo lo scroll qui non si vede niente da cliccare, né da telefono né da desktop.
            isScrolled ? "pointer-events-none" : "pointer-events-auto",
          )}
        >
          <Link
            href="/"
            aria-label="Corioli"
            aria-hidden={logoNelMenu || undefined}
            tabIndex={logoNelMenu ? -1 : undefined}
            className="flex items-center"
          >
            {/* Quando il segno è nel menu, qui resta il suo posto vuoto: la
                scritta non deve spostarsi mentre sfuma. */}
            {logoNelMenu ? (
              <span className="block h-10 w-10 md:h-12 md:w-12" />
            ) : (
              <span ref={logoRef} className="block">
                <Image
                  src="/corioli-logo-short.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="h-10 md:h-12 w-auto"
                  unoptimized
                  priority
                />
              </span>
            )}
            <Image
              src="/corioli-logo-testo.svg"
              alt=""
              width={275}
              height={120}
              className={clsx(
                "h-10 md:h-12 w-auto transition-opacity",
                // Risalendo, la scritta ricompare quando il segno è quasi arrivato.
                logoNelMenu ? "opacity-0 duration-200" : "opacity-100 duration-300 delay-200",
              )}
              unoptimized
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav - Centered. w-max: senza, il contenitore assoluto si
            restringe a metà riga e, con il logo dentro, schiacciava "Inizia ora". */}
        <div className="absolute left-1/2 -translate-x-1/2 w-max z-50 pointer-events-auto">
          <nav className={clsx(
            "hidden lg:flex items-center backdrop-blur-md p-1.5 rounded-full border shadow-sm transition-all duration-500",
            // Niente gap sulla pillola: lo spazio fra logo, voci e pulsante lo
            // danno i margini, che si chiudono quando il pulsante è nascosto.
            // Con il gap restavano 24px vuoti a destra di "Contatti".
            isScrolled
              ? clsx("bg-white/95 border-gray-200/80 shadow-md pl-3", showTrialCta ? "pr-1.5" : "pr-6")
              : "bg-white/40 border-gray-200/30 px-6 py-2.5"
          )}>
            {logoNelMenu && (
              <Link href="/" aria-label="Corioli" className="flex shrink-0 items-center mr-6">
                <span ref={logoRef} className="block">
                  <Image
                    src="/corioli-logo-short.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="h-8 w-auto"
                    unoptimized
                  />
                </span>
              </Link>
            )}
            <div className={clsx("flex items-center transition-all duration-500", isScrolled ? "gap-4 xl:gap-6" : "gap-6 xl:gap-8")}>
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <Link key={link.name} href={link.href} className={clsx(
                    "text-sm font-medium transition-colors whitespace-nowrap",
                    isActive ? "text-brand-600" : "text-gray-800 hover:text-brand-700"
                  )}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
            {/* Integrated Button */}
            {showTrialCta && (
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-500 flex items-center",
                  isScrolled ? "max-w-[200px] opacity-100 ml-6" : "max-w-0 opacity-0 ml-0",
                )}
              >
                <Link
                  href="/download"
                  className="bg-brand-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-900 transition-colors whitespace-nowrap shadow-sm"
                >
                  Inizia ora
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/* Desktop Standalone Button */}
        {showTrialCta && (
          <div
            className={clsx(
              "hidden lg:flex items-center gap-4 transition-all duration-500",
              // Invisibile ma ancora cliccabile, finiva sopra la pillola allargata dal logo.
              isScrolled
                ? "opacity-0 -translate-y-4 pointer-events-none"
                : "opacity-100 translate-y-0 pointer-events-auto",
            )}
          >
            <Link
              href="/download"
              className="bg-brand-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-900 transition-all shadow-sm hover:shadow-md flex items-center gap-2 group"
            >
              {/* Fra 1024 e 1280px la scritta lunga finiva sotto la pillola del
                  menu, che è centrata e la copriva di quasi 50px. */}
              <span className="xl:hidden">Prova gratuita</span>
              <span className="hidden xl:inline">Inizia la prova gratuita</span>
              <span className="group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </div>
        )}

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="menu-mobile"
          className={clsx(
            "lg:hidden text-gray-700 transition-all duration-500 pointer-events-auto bg-white/80 p-2 rounded-full shadow-sm backdrop-blur-md border border-gray-200/50",
            isScrolled ? "translate-y-0" : "",
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav - Floating centered panel. Da chiuso è solo trasparente:
          inert (impostato nell'effetto sopra) lo toglie anche dal tab e dai
          lettori di schermo. */}
      <div ref={mobileMenuRef} className={clsx(
        "lg:hidden fixed inset-0 z-40 flex items-center justify-center px-6 transition-all duration-300 pointer-events-none",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div 
          className={clsx(
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav
          id="menu-mobile"
          aria-label="Menu principale"
          className={clsx(
          "relative bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/80 shadow-2xl p-8 w-full max-w-sm flex flex-col items-center gap-3 transition-all duration-300",
          mobileMenuOpen ? "scale-100 translate-y-0 pointer-events-auto" : "scale-95 -translate-y-4 pointer-events-none"
        )}>
          <button
            type="button"
            aria-label="Chiudi il menu"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <Link key={link.name} href={link.href} className={clsx(
                "text-lg font-medium py-2.5 px-4 rounded-xl w-full text-center transition-colors",
                isActive ? "text-brand-600 bg-brand-50" : "text-gray-700 hover:bg-gray-50"
              )} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            );
          })}
          {showTrialCta && (
            <div className="w-full border-t border-gray-100 mt-3 pt-5 flex flex-col gap-3">
              <Link href="/download" className="text-center py-3 rounded-xl bg-brand-700 text-white font-semibold shadow-md hover:bg-brand-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Inizia la prova
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
