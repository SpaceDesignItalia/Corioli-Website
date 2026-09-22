import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type FaqItem = { question: string; answer: string };

type FaqListProps = {
  items: FaqItem[];
  // "white" su sfondo grigio della pagina, "muted" dentro sezioni bianche.
  variant?: "white" | "muted";
  className?: string;
};

// Elenco FAQ sempre aperto, su due colonne da tablet in su. Le colonne CSS
// (non una griglia) evitano i buchi fra schede di altezza diversa: le risposte
// vanno da due righe a un paragrafo. L'ordine di lettura resta dall'alto in
// basso, prima la colonna di sinistra e poi quella di destra.
//
// Le stesse domande vanno replicate nella FAQPage della pagina: Google accetta
// il markup solo se domande e risposte sono visibili.
export default function FaqList({ items, variant = "white", className }: FaqListProps) {
  return (
    <dl className={twMerge("md:columns-2 md:gap-6", className)}>
      {items.map((item) => (
        <div
          key={item.question}
          className={clsx(
            "break-inside-avoid mb-4 md:mb-6 rounded-2xl border border-gray-100 p-6",
            variant === "white" ? "bg-white shadow-soft" : "bg-gray-50",
          )}
        >
          <dt className="font-heading font-bold text-lg text-gray-900 mb-2">
            {item.question}
          </dt>
          <dd className="text-gray-600 leading-relaxed text-sm md:text-base">
            {item.answer}
          </dd>
        </div>
      ))}
    </dl>
  );
}
