"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Shield, Zap, LayoutDashboard, Clock, Calculator, Baby, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'ostetricia' | 'pediatria'>('ostetricia');
  const [savedHours, setSavedHours] = useState(0);

  // Load active tab from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('corioli_dashboard_tab');
    if (saved === 'ostetricia' || saved === 'pediatria') {
      setActiveTab(saved);
    }
  }, []);

  // Save active tab to localStorage
  useEffect(() => {
    localStorage.setItem('corioli_dashboard_tab', activeTab);
  }, [activeTab]);

  // Animate saved hours counter
  useEffect(() => {
    let start = 0;
    const end = 240;
    const duration = 2200;
    const incrementTime = (duration / end);

    const timer = setInterval(() => {
      start += 1;
      setSavedHours(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  const [gestationalWeeks, setGestationalWeeks] = useState(12);
  const [gestationalDays, setGestationalDays] = useState(3);
  const [percentile, setPercentile] = useState(45);
  const [bmi, setBmi] = useState(22.4);
  const [barHeights, setBarHeights] = useState([20, 35, 55, 75, 95]);
  const [bmiGraph, setBmiGraph] = useState([20, 25, 40, 65, 85]);

  // Typewriter state
  const toolsOst = [
    "Calcolo Età Gestazionale (LMP)...",
    "Stima Peso Fetale (Hadlock)...",
    "Percentili Biometria Fetale...",
    "Calcolo BMI e Delta Peso...",
    "Flussimetria Arteria Ombelicale...",
    "Grafico Crescita Fetale...",
  ];
  const toolsPed = [
    "Percentili Peso e Altezza (OMS)...",
    "Target Genetico (Altezza da genitori)...",
    "Grafico Andamento Altezza...",
    "Calcolo BMI Pediatrico...",
  ];
  const currentTools = activeTab === 'ostetricia' ? toolsOst : toolsPed;

  const [currentToolIndex, setCurrentToolIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Dashboard live animations
  useEffect(() => {
    const interval = setInterval(() => {
      setGestationalDays(prev => {
        if (prev === 6) {
          setGestationalWeeks(w => w >= 40 ? 12 : w + 1);
          return 0;
        }
        return prev + 1;
      });

      setPercentile(prev => {
        let diff = Math.floor(Math.random() * 5) - 2; // -2 to +2
        let next = prev + diff;
        if (next < 5) next = 5;
        if (next > 95) next = 95;
        return next;
      });

      setBmi(prev => {
        let diff = (Math.random() * 0.2) - 0.1; // -0.1 to +0.1
        let next = prev + diff;
        if (next < 18) next = 18;
        if (next > 28) next = 28;
        return parseFloat(next.toFixed(1));
      });

      setBarHeights(prev => prev.map((h, i) => {
        const bases = [20, 35, 55, 75, 95];
        let diff = Math.floor(Math.random() * 5) - 2; // Jitter around realistic ascending curve
        return bases[i] + diff;
      }));

      setBmiGraph(prev => prev.map((h, i) => {
        const bases = [20, 25, 40, 65, 85];
        let diff = Math.floor(Math.random() * 3) - 1; // Tiny jitter
        return bases[i] + diff;
      }));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const bmiStatus = bmi < 18.5 ? { label: "Sottopeso", color: "text-blue-300", bg: "bg-blue-500/20", border: "border-blue-500/30" } : 
                    bmi < 25 ? { label: "Normopeso", color: "text-green-300", bg: "bg-green-500/20", border: "border-green-500/30" } : 
                    { label: "Sovrappeso", color: "text-orange-300", bg: "bg-orange-500/20", border: "border-orange-500/30" };

  const percStatus = percentile < 10 ? { label: "Sottopeso", color: "text-blue-300", bg: "bg-blue-500/20", border: "border-blue-500/30" } :
                     percentile > 90 ? { label: "Sovrappeso", color: "text-orange-300", bg: "bg-orange-500/20", border: "border-orange-500/30" } :
                     { label: "Normopeso", color: "text-green-300", bg: "bg-green-500/20", border: "border-green-500/30" };

  // Typewriter effect
  useEffect(() => {
    // ensure we don't go out of bounds if switching tabs
    const validIndex = currentToolIndex % currentTools.length;
    const currentString = currentTools[validIndex];
    let typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && typedText === currentString) {
      typingSpeed = 2000; // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentToolIndex((prev) => (prev + 1) % currentTools.length);
      typingSpeed = 500; // Pause before typing next
      const timeout = setTimeout(() => {}, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setTypedText(currentString.substring(0, typedText.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText, isDeleting, currentToolIndex]);

  // Derived Pediatric Values
  const p = (gestationalWeeks - 12) / 28; // 0 to 1
  const pedMonths = Math.floor(p * 36);
  const pedHeight = 50 + 46 * Math.pow(p, 0.7);
  const pedWeight = 3.3 + 11 * Math.pow(p, 0.6);
  const pedLeft = Math.pow(1-p, 2)*10 + 2*(1-p)*p*40 + Math.pow(p, 2)*90;
  const pedBottom = 100 - (Math.pow(1-p, 2)*80 + 2*(1-p)*p*30 + Math.pow(p, 2)*15);

  return (
    <div className="pt-32 pb-16">
      
      {/* Refined Two-Column Hero */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-16 pb-32 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="text-brand-700 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-8 font-sans">
              SOFTWARE GESTIONALE MEDICO
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-950 leading-[1.0] mb-10 tracking-tight">
              <span className="font-newsreader italic font-normal">La gestione clinica</span> <br />
              <span className="relative">
                che rispetta
              </span> <br />
              <span className="font-newsreader italic font-normal">il tuo tempo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-sans max-w-[90%]">
              L'unico gestionale costruito nativamente per la specializzazione medica. Non adattato, non generico. Pensato per come lavori davvero.
            </p>
            
            <ul className="flex flex-col gap-4 mb-12">
               {[
                 "Cartella clinica elettronica specializzata",
                 "Agenda intelligente e promemoria automatici",
                 "Fatturazione integrata e conforme"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-base md:text-lg">
                   <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                     <CheckCircle2 size={18} className="text-brand-600" />
                   </div>
                   {item}
                 </li>
               ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <Link href="/contatti" className="w-full sm:w-auto bg-brand-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-950 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-lg">
                Inizia la prova gratuita <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/funzionalita" className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all hover:border-gray-300 flex items-center justify-center text-lg shadow-sm">
                Scopri le funzionalità
              </Link>
            </div>
            <p className="text-sm text-gray-400 font-medium">
              Nessuna carta di credito richiesta &bull; Prova gratuita di 14 giorni
            </p>
          </div>

          {/* Right Content - Abstract UI */}
          <div className="relative flex justify-center lg:justify-center">
             {/* Concentric Circles Background */}
             <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border border-gray-100 rounded-full scale-[1.0]"></div>
                <div className="absolute inset-0 border border-gray-100 rounded-full scale-[0.8] opacity-60"></div>
                <div className="absolute inset-0 border border-gray-100 rounded-full scale-[0.6] opacity-30"></div>
                
                {/* Main Logo Sphere */}
                <div className="relative w-56 h-56 md:w-64 md:h-64 bg-[#E6EFED] rounded-full flex items-center justify-center shadow-inner border border-brand-100/20 overflow-hidden">
                   <div className="w-40 h-40 md:w-48 md:h-48 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card border border-white/50">
                      <span className="text-[10rem] md:text-[12rem] font-heading font-black text-[#1B4332] opacity-[0.08] select-none leading-none -translate-y-2">C</span>
                   </div>
                   {/* Inner center circle - LOGO SWIRL */}
                   <div className="absolute w-32 h-32 md:w-36 md:h-36 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                     <Image src="/logo-icon.png" alt="Corioli" width={96} height={96} className="w-24 h-24" />
                   </div>
                </div>

                {/* Floating Badge - Stats ONLY */}
                <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 bg-white rounded-2xl shadow-card border border-gray-100 px-6 py-5 animate-float">
                   <div className="text-3xl font-black text-brand-800 leading-none">10.000+</div>
                   <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mt-1.5">Pazienti gestiti</div>
                </div>
             </div>
          </div>

        </div>
      </section>


      {/* Value Props Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Progettato per la pratica clinica
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ogni funzionalità è stata studiata osservando il lavoro quotidiano dei medici, per eliminare clic inutili e frizioni amministrative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Interfaccia Intuitiva</h3>
            <p className="text-gray-600 leading-relaxed">
              Design pulito e reattivo che riduce il carico cognitivo. Trova le informazioni del paziente in una frazione del tempo.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Refertazione Rapida</h3>
            <p className="text-gray-600 leading-relaxed">
              Genera PDF impeccabili con un clic. I template precompilati si adattano al tuo stile di scrittura e alla tua specializzazione.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-card transition-shadow">
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <Shield size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Sicurezza Dati (GDPR)</h3>
            <p className="text-gray-600 leading-relaxed">
              Infrastruttura cloud europea, crittografia avanzata e gestione del consenso integrata nativamente nel workflow.
            </p>
          </div>

        </div>
      </section>

      {/* Feature Highlight - Interactive Calcolo Datazione */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
               <Calculator size={14} /> Strumenti Integrati
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Calcolo Datazione<br/>preciso in un istante.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I medici italiani perdono molto tempo in data-entry ripetitivo. Corioli può restituirti fino a 240 ore l&apos;anno grazie a calcolatori integrati che si aggiornano in tempo reale.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Tempo risparmiato</div>
                  <div className="text-3xl font-bold text-brand-600">{savedHours}h<span className="text-lg font-normal text-brand-400">/anno</span></div>
               </div>
               <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Aggiornamento</div>
                  <div className="text-2xl font-bold text-brand-600 mt-1">In tempo reale</div>
               </div>
            </div>
            <div className="mt-8">
               <Link href="/contatti" className="text-brand-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Scopri tutti i calcolatori <ArrowRight size={18} />
               </Link>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            {/* Visual Interactive Element - Dashboard Mockup */}
            <div className="aspect-square bg-brand-900 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col shadow-2xl">
               <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-800 rounded-full blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/3"></div>
               
               {/* Dashboard Navigation Tabs */}
               <div className="relative z-20 flex bg-brand-950 p-1 rounded-xl mb-4 border border-brand-800 shadow-inner">
                  <button 
                     onClick={() => setActiveTab('ostetricia')} 
                     className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${activeTab === 'ostetricia' ? 'bg-brand-600 text-white shadow-md' : 'text-brand-400 hover:text-brand-200'}`}
                  >
                     Ostetricia
                  </button>
                  <button 
                     onClick={() => setActiveTab('pediatria')} 
                     className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${activeTab === 'pediatria' ? 'bg-brand-600 text-white shadow-md' : 'text-brand-400 hover:text-brand-200'}`}
                  >
                     Pediatria
                  </button>
               </div>
               
               {/* Terminal/Search Header */}
               <div className="relative z-10 w-full bg-brand-950 rounded-xl p-4 mb-6 border border-brand-800 shadow-inner flex items-center gap-3">
                  <div className="text-brand-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <div className="font-mono text-brand-100 text-sm md:text-base flex-1 flex items-center">
                     <span className="opacity-50 mr-2">&gt;</span>
                     <span>{typedText}</span>
                     <span className="inline-block w-2 h-4 bg-brand-400 ml-1 animate-pulse"></span>
                  </div>
               </div>

               {/* Calculators Grid */}
               <div className="relative z-10 flex-1 grid grid-cols-2 gap-4">
                  {activeTab === 'ostetricia' ? (
                     <>
                        {/* Calc 1 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 flex flex-col justify-center">
                           <div className="text-brand-100 text-xs font-bold uppercase tracking-wider mb-2">Datazione</div>
                           <div className="text-3xl font-bold text-white mb-1">{gestationalWeeks}<span className="text-lg text-brand-300 font-normal">w</span> +{gestationalDays}<span className="text-lg text-brand-300 font-normal">d</span></div>
                           <div className="text-[11px] text-brand-300">DPP: 12 Giu 2024</div>
                        </div>
                  
                  {/* Calc 2 - Graph with Growing Fetus */}
                  <div className="bg-white rounded-xl p-5 shadow-card flex flex-col justify-between col-span-2 sm:col-span-1 row-span-2 relative overflow-hidden">
                     <div className="relative z-10 flex justify-between items-start">
                        <div>
                           <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">Stima Crescita (Hadlock)</div>
                           <div className="text-2xl font-bold text-gray-900 transition-all duration-300">
                             {Math.floor(Math.pow(gestationalWeeks / 40, 3) * 3400 + 50)}<span className="text-sm text-gray-500 font-normal">g</span>
                           </div>
                           <div className="text-xs text-brand-600 font-semibold mt-1">
                              a {gestationalWeeks} settimane
                           </div>
                        </div>
                     </div>
                     
                     {/* Graph with Fetus */}
                     <div className="w-full flex-1 min-h-[140px] mt-6 relative z-10 border-l-2 border-b-2 border-gray-100">
                        {/* Graph Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between opacity-40">
                           <div className="w-full h-px bg-gray-200"></div>
                           <div className="w-full h-px bg-gray-200"></div>
                           <div className="w-full h-px bg-gray-200"></div>
                        </div>
                        <div className="absolute inset-0 flex justify-between opacity-40">
                           <div className="h-full w-px bg-gray-200"></div>
                           <div className="h-full w-px bg-gray-200"></div>
                           <div className="h-full w-px bg-gray-200"></div>
                           <div className="h-full w-px bg-gray-200"></div>
                        </div>

                        {/* Percentile Curves */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                           {/* 95th Percentile */}
                           <path d="M 0,100 Q 40,80 100,10" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4"/>
                           {/* 50th Percentile (Median Growth) */}
                           <path d="M 0,100 Q 60,90 100,30" fill="none" stroke="#14b8a6" strokeWidth="3" className="opacity-60"/>
                           {/* 5th Percentile */}
                           <path d="M 0,100 Q 80,95 100,50" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4"/>
                        </svg>

                        {/* Moving and Scaling Fetus Icon exactly tracking the median curve */}
                        {(() => {
                           const t = (gestationalWeeks - 12) / 28;
                           const left = 120 * t - 20 * t * t;
                           const bottom = 50 * t * t + 20 * t;
                           return (
                              <div 
                                 className="absolute transition-all duration-700 ease-out flex items-center justify-center shadow-md bg-white rounded-full border-2 border-brand-300 z-20 overflow-hidden"
                                 style={{
                                    left: `calc(${left}% - 16px)`, 
                                    bottom: `calc(${bottom}% - 16px)`,
                                    width: `${24 + t * 24}px`,
                                    height: `${24 + t * 24}px`,
                                 }}
                              >
                                 {/* Fetus silhouette colored via CSS mask */}
                                 <div 
                                    className="w-[75%] h-[75%] bg-brand-600" 
                                    style={{
                                       WebkitMaskImage: 'url(/feto.png)',
                                       WebkitMaskSize: 'contain',
                                       WebkitMaskRepeat: 'no-repeat',
                                       WebkitMaskPosition: 'center',
                                       maskImage: 'url(/feto.png)',
                                       maskSize: 'contain',
                                       maskRepeat: 'no-repeat',
                                       maskPosition: 'center',
                                    }}
                                 ></div>
                              </div>
                           );
                        })()}
                     </div>
                  </div>

                  {/* Calc 3 */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 flex flex-col justify-center relative overflow-hidden group">
                     <div className="text-brand-100 text-xs font-bold uppercase tracking-wider mb-2 relative z-10">BMI & Delta Peso</div>
                     <div className="flex items-end gap-2 mb-2 relative z-10">
                        <div className="text-2xl font-bold text-white transition-all duration-300">{bmi.toFixed(1)} <span className="text-sm font-normal text-brand-300">kg/m²</span></div>
                        <div className="text-xs font-bold text-brand-300 transition-all duration-300 mb-1.5">+{((bmi - 18) * 1.5).toFixed(1)} kg</div>
                     </div>
                     <div className={`relative z-10 inline-flex px-2 py-0.5 rounded-full ${bmiStatus.bg} ${bmiStatus.color} text-[10px] font-bold w-fit border ${bmiStatus.border} transition-colors duration-300`}>{bmiStatus.label}</div>
                     
                     {/* Background mini sparkline graph for weight */}
                     <svg className="absolute bottom-0 left-0 w-full h-16 opacity-20 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path 
                           d={`M 0,${100 - bmiGraph[0]} L 25,${100 - bmiGraph[1]} L 50,${100 - bmiGraph[2]} L 75,${100 - bmiGraph[3]} L 100,${100 - bmiGraph[4]}`} 
                           fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                           style={{ transition: 'd 0.7s ease-out' }}
                        />
                     </svg>
                  </div>
                  </>
                  ) : (
                  <>
                        {/* Pediatric Calc 1 - Target Genetico */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 flex flex-col justify-center relative overflow-hidden group">
                           <div className="text-brand-100 text-xs font-bold uppercase tracking-wider mb-2 relative z-10">Target Genetico</div>
                           <div className="flex items-end gap-2 mb-2 relative z-10">
                              <div className="text-3xl font-bold text-white transition-all duration-300">178<span className="text-lg font-normal text-brand-300">.5 cm</span></div>
                           </div>
                           <div className="text-[11px] text-brand-300 relative z-10 flex items-center gap-1">
                              Formula di Tanner
                           </div>
                        </div>
                        
                        {/* Pediatric Calc 2 - Graph */}
                        <div className="bg-white rounded-xl p-5 shadow-card flex flex-col justify-between col-span-2 sm:col-span-1 row-span-2 relative overflow-hidden">
                           <div className="relative z-10 flex justify-between items-start">
                              <div>
                                 <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">Andamento Altezza</div>
                                 <div className="text-2xl font-bold text-gray-900 transition-all duration-300">
                                   {pedHeight.toFixed(1)}<span className="text-sm text-gray-500 font-normal">cm</span>
                                 </div>
                                 <div className="text-xs text-brand-600 font-semibold mt-1">
                                    a {pedMonths} Mesi
                                 </div>
                              </div>
                           </div>
                           
                           {/* Graph */}
                           <div className="w-full flex-1 min-h-[140px] mt-6 relative z-10 border-l-2 border-b-2 border-gray-100">
                              <div className="absolute inset-0 flex flex-col justify-between opacity-40">
                                 <div className="w-full h-px bg-gray-200"></div>
                                 <div className="w-full h-px bg-gray-200"></div>
                                 <div className="w-full h-px bg-gray-200"></div>
                              </div>
                              <div className="absolute inset-0 flex justify-between opacity-40">
                                 <div className="h-full w-px bg-gray-200"></div>
                                 <div className="h-full w-px bg-gray-200"></div>
                                 <div className="h-full w-px bg-gray-200"></div>
                              </div>

                              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                 <path d="M 0,90 Q 50,50 100,10" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4"/>
                                 <path d="M 10,80 Q 40,30 90,15" fill="none" stroke="#14b8a6" strokeWidth="3" className="opacity-60"/>
                              </svg>

                              {/* Plotting points - Previous Visits */}
                              {/* Historical point 1 (p=0.1) */}
                              <div className="absolute w-2 h-2 rounded-full bg-brand-300 -translate-x-1/2 translate-y-1/2" style={{ left: '16.1%', bottom: '28.3%' }}></div>
                              {/* Historical point 2 (p=0.3) */}
                              <div className="absolute w-2 h-2 rounded-full bg-brand-400 -translate-x-1/2 translate-y-1/2" style={{ left: '29.8%', bottom: '43.2%' }}></div>
                              {/* Historical point 3 (p=0.6) */}
                              <div className="absolute w-2 h-2 rounded-full bg-brand-500 -translate-x-1/2 translate-y-1/2" style={{ left: '53.2%', bottom: '63.4%' }}></div>
                              
                              {/* Current Animated Dot tracking exactly the green bezier curve (M 10,80 Q 40,30 90,15) */}
                              <div 
                                 className="absolute w-3 h-3 rounded-full bg-brand-600 ring-4 ring-brand-100 transition-all duration-700 ease-out z-20"
                                 style={{
                                    left: `${pedLeft}%`, 
                                    bottom: `${pedBottom}%`,
                                    transform: 'translate(-50%, 50%)'
                                 }}
                              ></div>
                           </div>
                        </div>

                        {/* Pediatric Calc 3 - Peso OMS with Sparkline */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 flex flex-col justify-center relative overflow-hidden group">
                           <div className="text-brand-100 text-xs font-bold uppercase tracking-wider mb-2 relative z-10">Peso (OMS)</div>
                           <div className="flex items-end gap-2 mb-2 relative z-10">
                              <div className="text-2xl font-bold text-white transition-all duration-300">{pedWeight.toFixed(1)} <span className="text-sm font-normal text-brand-300">kg</span></div>
                              <div className="text-xs font-bold text-brand-300 transition-all duration-300 mb-1.5">{percentile}° perc.</div>
                           </div>
                           <div className={`relative z-10 inline-flex px-2 py-0.5 rounded-full ${percStatus.bg} ${percStatus.color} text-[10px] font-bold w-fit border ${percStatus.border} transition-colors duration-300`}>{percStatus.label}</div>
                           
                           {/* Mini animated chart background */}
                           <svg className="absolute bottom-0 left-0 w-full h-16 opacity-20 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                              <path 
                                 d={`M 0,${100 - bmiGraph[0]} L 25,${100 - bmiGraph[1]} L 50,${100 - bmiGraph[2]} L 75,${100 - bmiGraph[3]} L 100,${100 - bmiGraph[4]}`} 
                                 fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                                 style={{ transition: 'd 0.7s ease-out' }}
                              />
                           </svg>
                        </div>
                  </>
                  )}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-brand-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
               <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                 Pronto ad aggiornare il tuo studio?
               </h2>
               <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
                 Unisciti ai professionisti che hanno già scelto la semplicità e la sicurezza di Corioli per la loro pratica quotidiana.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/contatti" className="bg-white text-brand-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg">
                   Richiedi Demo Gratuita
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
