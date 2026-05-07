"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Funzionalità", href: "/funzionalita" },
    { name: "Specializzazioni", href: "/specializzazioni" },
    { name: "Prezzi", href: "/prezzi" },
    { name: "Chi siamo", href: "/chi-siamo" },
  ];

  return (
    <header className={clsx(
      "fixed top-0 w-full z-40 transition-all duration-300",
      isScrolled ? "glass py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-brand-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
             <span className="text-white text-lg leading-none">C</span>
          </div>
          Corioli
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-gray-200/50 shadow-sm">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
            Accedi
          </Link>
          <Link href="/contatti" className="bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors shadow-soft hover:shadow-card">
            Richiedi Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-card">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/login" className="text-center py-3 rounded-lg border border-gray-200 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Accedi
            </Link>
            <Link href="/contatti" className="text-center py-3 rounded-lg bg-brand-600 text-white font-medium shadow-soft" onClick={() => setMobileMenuOpen(false)}>
              Richiedi Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
