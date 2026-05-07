"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login network request
    setTimeout(() => {
      setIsLoading(false);
      // alert or redirect in a real app
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      
      {/* Left Column: Visual/Brand */}
      <div className="hidden md:flex md:w-1/2 bg-brand-900 relative overflow-hidden flex-col justify-between p-12">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-800/50 to-brand-950/80"></div>
        
        <div className="relative z-10">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
               <span className="text-white text-lg leading-none">C</span>
            </div>
            Corioli
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
             Accesso Sicuro
          </div>
          <h1 className="font-heading text-4xl font-bold text-white mb-6 leading-tight">
             Bentornato nel tuo ambulatorio digitale.
          </h1>
          <p className="text-brand-100 text-lg leading-relaxed mb-8">
             Accedi per gestire i tuoi pazienti, refertare le visite e consultare il calendario clinico in totale sicurezza.
          </p>
          <div className="flex items-center gap-3 text-sm text-brand-200">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-brand-700 border-2 border-brand-900"></div>
                <div className="w-8 h-8 rounded-full bg-brand-600 border-2 border-brand-900"></div>
                <div className="w-8 h-8 rounded-full bg-brand-500 border-2 border-brand-900 flex items-center justify-center text-xs font-bold text-white">+2k</div>
             </div>
             <span>Medici italiani connessi</span>
          </div>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 bg-white relative">
        <Link href="/" className="md:hidden font-heading text-2xl font-bold tracking-tight text-brand-900 flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
             <span className="text-white text-lg leading-none">C</span>
          </div>
          Corioli
        </Link>

        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">Accedi all'account</h2>
            <p className="text-gray-500">Inserisci le tue credenziali per continuare.</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">Email Professionale</label>
              <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                 </div>
                 <input 
                   type="email" 
                   required 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all text-sm" 
                   placeholder="dottore@studio.it"
                 />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                 <label className="text-sm font-medium text-gray-700">Password</label>
                 <Link href="/recupera-password" className="text-xs font-medium text-brand-600 hover:text-brand-700">Password dimenticata?</Link>
              </div>
              <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <KeyRound size={18} />
                 </div>
                 <input 
                   type="password" 
                   required 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all text-sm" 
                   placeholder="••••••••"
                 />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Ricorda questo dispositivo
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-brand-600 text-white py-3.5 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg mt-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "Accedi in sicurezza"}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Non hai ancora un account?{" "}
              <Link href="/contatti" className="font-medium text-brand-600 hover:text-brand-700">
                Richiedi una Demo
              </Link>
            </p>
          </div>

        </div>

        <Link href="/" className="hidden md:flex absolute top-8 right-8 items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowLeft size={16} /> Torna al sito
        </Link>
      </div>

    </div>
  );
}
