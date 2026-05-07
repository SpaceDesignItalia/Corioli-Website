"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookies
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      // Show the banner if no consent is found
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 bg-white p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 z-50 text-sm transform transition-transform translate-y-full md:translate-y-0" style={{animation: 'slideUp 0.5s forwards 0.5s'}}>
      <h4 className="font-heading font-semibold text-gray-900 mb-2">Informativa Cookie</h4>
      <p className="text-gray-500 mb-4 leading-relaxed">
        Utilizziamo i cookie per offrirti la migliore esperienza sul nostro sito e migliorare i nostri servizi clinici digitali.
      </p>
      <div className="flex gap-3">
        <button 
          onClick={acceptCookies}
          className="flex-1 bg-brand-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-brand-700 transition-colors"
        >
          Accetto
        </button>
        <button 
          onClick={declineCookies}
          className="flex-1 bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Solo Necessari
        </button>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
