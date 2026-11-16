import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo";
import { PRICE_MONTHLY, TRIAL_DAYS } from "../prezzi/faqs";

export const metadata: Metadata = {
  title: "Condizioni di abbonamento",
  description: `Condizioni di abbonamento a Corioli: prova gratuita di ${TRIAL_DAYS} giorni, ${PRICE_MONTHLY}€ al mese, disdetta in qualsiasi momento, dati sempre consultabili ed esportabili.`,
  alternates: {
    canonical: "/termini",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Condizioni di abbonamento | Corioli",
    description: "Le condizioni che accetti abbonandoti a Corioli, il gestionale medico locale per medici specialisti.",
    url: "https://corioli.it/termini",
  },
};

const h2 = "font-heading text-xl font-bold mt-10 mb-4 text-gray-900";
const link = "text-brand-600 hover:underline";

export default function TerminiPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-12 bg-background min-h-screen">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Condizioni di abbonamento</h1>
        <p className="text-gray-500 font-medium">Ultimo aggiornamento: 9 Novembre 2026</p>
      </div>

      <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
        <div className="prose prose-brand max-w-none text-gray-600 leading-relaxed">
          <p className="mb-8 text-lg">
            Queste condizioni regolano l&apos;uso del software <strong>Corioli</strong>{" "}in abbonamento. Le
            accetti quando attivi l&apos;abbonamento dalla pagina di pagamento.
          </p>

          <div className="p-6 bg-brand-50 border border-brand-100 rounded-2xl mb-8">
            <h2 className="font-heading text-lg font-bold text-brand-900 mb-2">In breve</h2>
            <ul className="list-disc pl-5 text-sm text-brand-800 flex flex-col gap-1">
              <li>{TRIAL_DAYS} giorni di prova gratuita, senza carta di credito.</li>
              <li>{PRICE_MONTHLY}€ al mese, addebitati in anticipo ogni mese tramite Stripe.</li>
              <li>Disdici quando vuoi: l&apos;abbonamento resta attivo fino alla fine del mese già pagato.</li>
              <li>Un abbonamento vale per lo stesso medico su un massimo di 3 computer.</li>
              <li>
                Se l&apos;abbonamento finisce, Corioli passa in sola lettura: i tuoi dati restano sul tuo computer, sempre
                consultabili, stampabili ed esportabili.
              </li>
            </ul>
          </div>

          <h2 className={h2}>1. Chi fornisce il servizio e a chi</h2>
          <p className="mb-6">
            Il software è fornito da <strong>Corioli</strong>, con sede in Sesto Fiorentino, Firenze (FI), Italia — P.IVA
            IT07420400488 (&quot;Corioli&quot;, &quot;noi&quot;). L&apos;abbonamento è riservato a medici e strutture
            sanitarie che lo usano nell&apos;ambito della propria attività professionale (&quot;Cliente&quot;, &quot;tu&quot;).
          </p>

          <h2 className={h2}>2. Cosa comprende l&apos;abbonamento</h2>
          <p className="mb-6">
            Con l&apos;abbonamento ottieni una licenza d&apos;uso personale, non esclusiva e non trasferibile di Corioli per
            tutta la sua durata: cartella clinica, visite, refertazione PDF con ricette e certificati, calcolatori clinici,
            backup automatici, tutti gli aggiornamenti e l&apos;assistenza tramite la chat dell&apos;app e via email. Il
            software resta di proprietà di Corioli: non è consentito copiarlo, modificarlo, decompilarlo o cederlo a terzi.
          </p>

          <h2 className={h2}>3. Prova gratuita</h2>
          <p className="mb-6">
            La prova dura {TRIAL_DAYS} giorni dalla prima installazione di Corioli e non richiede alcun metodo di pagamento:
            durante la prova non ti addebitiamo nulla. Alla fine della prova, se non ti sei abbonato, Corioli passa in sola
            lettura (punto 7).
          </p>

          <h2 className={h2}>4. Prezzo, pagamento e rinnovo</h2>
          <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
            <li>
              Il prezzo è di {PRICE_MONTHLY}€ al mese, come indicato su{" "}
              <Link href="/prezzi" className={link}>corioli.it/prezzi</Link> e nella pagina di pagamento, dove sono
              riportate anche le eventuali imposte.
            </li>
            <li>
              Il pagamento avviene con carta o con gli altri metodi offerti da <strong>Stripe</strong>, che gestisce i
              pagamenti per nostro conto. Corioli non vede né conserva i dati della tua carta.
            </li>
            <li>
              L&apos;abbonamento si rinnova automaticamente ogni mese e viene addebitato in anticipo. Se ti abboni durante la
              prova, il primo addebito avviene alla fine della prova.
            </li>
            <li>
              Fatture e ricevute sono disponibili nella sezione Impostazioni → Abbonamento di Corioli (&quot;Gestisci
              abbonamento&quot;) e ti vengono inviate per email.
            </li>
            <li>
              Se un addebito non va a buon fine, Stripe lo ritenta per alcuni giorni e Corioli ti avvisa: nel frattempo
              continui a lavorare normalmente. Se il pagamento non riesce, l&apos;abbonamento termina (punto 7).
            </li>
          </ul>

          <h2 className={h2}>5. Disdetta</h2>
          <p className="mb-6">
            Puoi disdire in qualsiasi momento, senza penali né motivazioni, da Impostazioni → Abbonamento → Gestisci
            abbonamento. L&apos;abbonamento resta attivo fino alla fine del periodo già pagato e non viene più rinnovato;
            per il periodo già iniziato non sono previsti rimborsi parziali. Puoi riattivarlo quando vuoi.
          </p>

          <h2 className={h2}>6. Computer collegati</h2>
          <p className="mb-6">
            L&apos;abbonamento è personale: vale per lo stesso medico su un massimo di 3 computer, collegati tramite un codice
            inviato all&apos;email dell&apos;abbonamento. Non può essere condiviso con altri medici. Puoi scollegare un
            computer in qualsiasi momento per collegarne un altro.
          </p>

          <h2 className={h2}>7. Fine della prova o dell&apos;abbonamento</h2>
          <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl mb-6">
            <p className="text-sm text-amber-800">
              Quando la prova o l&apos;abbonamento finiscono, <strong>Corioli non si blocca e non cancella nulla</strong>:
              passa in sola lettura. Puoi continuare a consultare, stampare ed esportare tutte le cartelle e i documenti
              inseriti; non puoi aggiungere pazienti e visite né modificare i dati finché non ti abboni di nuovo. I dati
              restano sul tuo computer, sotto il tuo controllo.
            </p>
          </div>

          <h2 className={h2}>8. Dati dei pazienti</h2>
          <p className="mb-6">
            Corioli salva i dati clinici esclusivamente sul tuo computer o sulla rete del tuo studio: noi non li riceviamo e
            non vi abbiamo accesso. Resti l&apos;unico titolare del trattamento dei dati dei tuoi pazienti e sei responsabile
            della sicurezza del computer e dei backup. I dati che trattiamo noi (dati del medico, abbonamento, statistiche di
            utilizzo senza dati clinici) sono descritti nella{" "}
            <Link href="/privacy-policy" className={link}>Privacy Policy</Link>.
          </p>

          <h2 className={h2}>9. Uso clinico</h2>
          <p className="mb-6">
            Corioli è uno strumento di supporto alla documentazione clinica. I calcoli e i valori di riferimento proposti
            dal software sono suggerimenti con l&apos;indicazione della fonte: le valutazioni cliniche, le diagnosi e il
            contenuto dei referti restano sempre di competenza e responsabilità del medico, che è tenuto a verificarli.
          </p>

          <h2 className={h2}>10. Disponibilità e aggiornamenti</h2>
          <p className="mb-6">
            Corioli funziona sul tuo computer anche senza connessione. I servizi online (verifica dell&apos;abbonamento,
            assistenza, aggiornamenti) possono avere brevi interruzioni per manutenzione o cause indipendenti da noi.
            Gli aggiornamenti sono inclusi nell&apos;abbonamento e possono modificare o migliorare le funzionalità.
          </p>

          <h2 className={h2}>11. Responsabilità</h2>
          <p className="mb-6">
            Nei limiti consentiti dalla legge, la responsabilità di Corioli per danni connessi all&apos;uso del software è
            limitata all&apos;importo pagato dal Cliente nei 12 mesi precedenti il fatto, salvo i casi di dolo o colpa
            grave. Corioli non risponde della perdita di dati dovuta alla mancanza di backup o a guasti del computer del
            Cliente.
          </p>

          <h2 className={h2}>12. Modifiche a condizioni e prezzo</h2>
          <p className="mb-6">
            Possiamo aggiornare queste condizioni o il prezzo dandotene comunicazione via email almeno 30 giorni prima.
            Se non sei d&apos;accordo, puoi disdire prima che le modifiche abbiano effetto.
          </p>

          <h2 className={h2}>13. Legge applicabile e foro</h2>
          <p className="mb-6">
            Queste condizioni sono regolate dalla legge italiana. Per ogni controversia è competente in via esclusiva il
            Foro di Firenze.
          </p>

          <h2 className={h2}>14. Contatti</h2>
          <p className="mb-6">
            Per domande sull&apos;abbonamento scrivi a{" "}
            <a href="mailto:info@corioli.it" className={link}>info@corioli.it</a> o usa la chat di assistenza in Corioli.
          </p>
        </div>
      </div>
    </div>
  );
}
