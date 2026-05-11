"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const nome = String(fd.get("nome") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const specializzazione = String(fd.get("specializzazione") ?? "").trim();
    const messaggio = String(fd.get("messaggio") ?? "").trim();

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, specializzazione, messaggio }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        const errorMsg = data.error ?? "Invio non riuscito. Riprova tra poco.";
        setSendError(errorMsg);
        posthog.capture("demo_request_failed", {
          error: errorMsg,
          specializzazione,
        });
        return;
      }
      posthog.capture("demo_request_submitted", {
        specializzazione,
        has_note: Boolean(messaggio),
      });
      posthog.identify(email, { name: nome, specializzazione });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      posthog.captureException(err);
      setSendError("Errore di rete. Controlla la connessione e riprova.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6 w-fit">
            <MessageSquare size={16} /> Parla con noi
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Il primo passo per un <span className="text-brand-600">ambulatorio più efficiente.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Prenota una demo di 15 minuti con il nostro team. Scoprirai come Corioli elimina le inefficienze amministrative del tuo studio.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 text-sm">info@corioli.it</p>
                <p className="text-xs text-gray-500 mt-1">Rispondiamo entro 24h</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Telefono</h3>
                <p className="text-gray-600 text-sm">+39 393 800 1284</p>
                <p className="text-xs text-gray-500 mt-1">Lun - Ven, 09:00 - 18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sede Legale</h3>
                <p className="text-gray-600 text-sm">Sesto Fiorentino, Firenze (FI)<br/>Italia</p>
              </div>
            </div>          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-gray-100 relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-[80px] -z-0 opacity-60"></div>
             
             <div className="relative z-10">
               {submitted ? (
                 <div className="h-full flex flex-col items-center justify-center text-center py-16">
                   <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                     </svg>
                   </div>
                   <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">Richiesta inviata!</h3>
                   <p className="text-gray-600 max-w-sm">Grazie per il tuo interesse. Un nostro consulente ti contatterà a breve all'indirizzo email indicato.</p>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                   <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Richiedi una Demo Gratuita</h3>

                   {sendError ? (
                     <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3" role="alert">
                       {sendError}
                     </p>
                   ) : null}
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-2">
                       <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome e Cognome *</label>
                       <input type="text" id="nome" name="nome" required disabled={sending} className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all text-sm disabled:opacity-60" />
                     </div>
                     <div className="flex flex-col gap-2">
                       <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Professionale *</label>
                       <input type="email" id="email" name="email" required disabled={sending} className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all text-sm disabled:opacity-60" />
                     </div>
                   </div>

                   <div className="flex flex-col gap-3">
                     <label className="text-sm font-medium text-gray-700">Specializzazione *</label>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <label className="relative">
                          <input type="radio" name="specializzazione" value="ginecologia" required disabled={sending} className="peer sr-only" />
                          <div className="p-3 text-sm text-center font-medium text-gray-600 border border-gray-200 rounded-xl cursor-pointer peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-700 hover:bg-gray-50 transition-all">
                             Ginecologia
                          </div>
                        </label>
                        <label className="relative">
                          <input type="radio" name="specializzazione" value="pediatria" required disabled={sending} className="peer sr-only" />
                          <div className="p-3 text-sm text-center font-medium text-gray-600 border border-gray-200 rounded-xl cursor-pointer peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-700 hover:bg-gray-50 transition-all">
                             Pediatria
                          </div>
                        </label>
                        <label className="relative">
                          <input type="radio" name="specializzazione" value="altro" required disabled={sending} className="peer sr-only" />
                          <div className="p-3 text-sm text-center font-medium text-gray-600 border border-gray-200 rounded-xl cursor-pointer peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-700 hover:bg-gray-50 transition-all">
                             Altro
                          </div>
                        </label>
                     </div>
                   </div>

                   <div className="flex flex-col gap-2">
                     <label htmlFor="messaggio" className="text-sm font-medium text-gray-700">Note Aggiuntive</label>
                     <textarea id="messaggio" name="messaggio" rows={3} disabled={sending} className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all resize-none text-sm disabled:opacity-60" placeholder="Es. Utilizzo attualmente Word, vorrei capire come importare i dati storici..."></textarea>
                   </div>

                   <div className="flex items-start gap-3 mt-2">
                     <input type="checkbox" id="privacy" name="privacy" required disabled={sending} className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 disabled:opacity-60" />
                     <label htmlFor="privacy" className="text-sm text-gray-500 leading-snug">
                       Acconsento al trattamento dei dati personali ai sensi del GDPR. Leggi la nostra <Link href="/privacy-policy" className="text-brand-600 hover:underline">Privacy Policy</Link>.
                     </label>
                   </div>

                   <button type="submit" disabled={sending} className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg mt-2 disabled:opacity-60 disabled:pointer-events-none">
                     {sending ? "Invio in corso…" : "Invia Richiesta"}
                   </button>
                 </form>
               )}
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
