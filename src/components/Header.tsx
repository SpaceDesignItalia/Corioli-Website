"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Funzionalità", href: "/funzionalita" },
    { name: "Specializzazioni", href: "/specializzazioni" },
    { name: "Prezzi", href: "/prezzi" },
    { name: "Chi siamo", href: "/chi-siamo" },
    { name: "Contatti", href: "/contatti" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "py-4 pointer-events-none" : "py-5 pointer-events-auto",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <div
          className={clsx(
            "flex items-center transition-all duration-500 pointer-events-auto",
            isScrolled
              ? "opacity-0 -translate-y-4"
              : "opacity-100 translate-y-0",
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_long.png"
              alt="Corioli Logo"
              width={280}
              height={80}
              className="h-20 md:h-24 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
          <nav className={clsx(
            "hidden lg:flex items-center backdrop-blur-md p-1.5 rounded-full border shadow-sm transition-all duration-500",
            isScrolled ? "bg-white/95 border-gray-200/80 shadow-md pr-1.5 pl-6 gap-6" : "bg-white/40 border-gray-200/30 px-6 py-2.5 gap-6 xl:gap-8"
          )}>
            <div className={clsx("flex items-center transition-all duration-500", isScrolled ? "gap-4 xl:gap-6" : "gap-6 xl:gap-8")}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
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
            <div
              className={clsx(
                "overflow-hidden transition-all duration-500 flex items-center",
                isScrolled ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0",
              )}
            >
              <Link
                href="/contatti"
                className="bg-brand-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-900 transition-colors whitespace-nowrap shadow-sm"
              >
                Inizia ora
              </Link>
            </div>
          </nav>
        </div>

        {/* Desktop Standalone Button */}
        <div
          className={clsx(
            "hidden lg:flex items-center gap-4 transition-all duration-500 pointer-events-auto",
            isScrolled
              ? "opacity-0 -translate-y-4"
              : "opacity-100 translate-y-0",
          )}
        >
          <Link
            href="/contatti"
            className="bg-brand-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-900 transition-all shadow-sm hover:shadow-md flex items-center gap-2 group"
          >
            Inizia la prova gratuita
            <span className="group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={clsx(
            "lg:hidden text-gray-700 transition-all duration-500 pointer-events-auto bg-white/80 p-2 rounded-full shadow-sm backdrop-blur-md border border-gray-200/50",
            isScrolled ? "translate-y-0" : "",
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav - Floating centered panel */}
      <div className={clsx(
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
        <div className={clsx(
          "relative bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/80 shadow-2xl p-8 w-full max-w-sm flex flex-col items-center gap-3 transition-all duration-300 pointer-events-auto",
          mobileMenuOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-4"
        )}>
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className={clsx(
                "text-lg font-medium py-2.5 px-4 rounded-xl w-full text-center transition-colors",
                isActive ? "text-brand-600 bg-brand-50" : "text-gray-700 hover:bg-gray-50"
              )} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            );
          })}
          <div className="w-full border-t border-gray-100 mt-3 pt-5 flex flex-col gap-3">
            <Link href="/login" className="text-center py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Accedi
            </Link>
            <Link href="/contatti" className="text-center py-3 rounded-xl bg-brand-700 text-white font-semibold shadow-md hover:bg-brand-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Richiedi Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
