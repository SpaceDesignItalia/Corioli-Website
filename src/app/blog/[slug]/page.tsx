import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors mb-12">
          <ArrowLeft size={16} /> Torna agli articoli
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">Articolo</span>
            <span className="text-sm text-gray-500 font-medium">24 Maggio 2024</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h1>
        </div>

        <div className="prose prose-lg prose-brand max-w-none text-gray-700 leading-relaxed">
          <p className="lead text-xl text-gray-600 mb-8 font-medium">
            Questo è un articolo di esempio per la pagina del blog. La digitalizzazione dello studio medico è un processo fondamentale per ottimizzare il tempo e migliorare l'esperienza del paziente.
          </p>
          
          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-gray-900">Il problema di Word ed Excel</h2>
          <p className="mb-6">
            Molti specialisti utilizzano ancora software generici non pensati per la pratica clinica. Questo comporta un enorme spreco di tempo in copia-incolla, formattazione e ricerca di dati storici. La mancanza di un sistema strutturato aumenta inoltre il rischio di errori.
          </p>

          <div className="my-10 p-8 bg-brand-50 rounded-2xl border border-brand-100">
            <p className="italic text-brand-900 font-heading text-xl mb-0">
              "Il 40% dei medici italiani usa ancora la carta. Chi usa il PC spesso usa Word, che equivale a una macchina da scrivere digitale, non a un database clinico."
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-gray-900">I vantaggi di una soluzione nativa</h2>
          <p className="mb-6">
            Un gestionale nato per la specializzazione medica cambia le regole del gioco. L'anamnesi diventa strutturata, i calcolatori (come quelli per l'ostetricia) sono integrati e i referti si generano automaticamente in PDF perfetti. Il tempo risparmiato può essere finalmente dedicato alla paziente.
          </p>

          <h3 className="font-heading text-xl font-bold mt-10 mb-4 text-gray-900">Conclusioni</h3>
          <p className="mb-6">
            Scegliere il software giusto non è una spesa, ma un investimento sulla qualità del proprio lavoro e sulla serenità mentale a fine giornata.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
           <div className="bg-brand-900 rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-2xl text-white mb-3">Pronto a trasformare il tuo ambulatorio?</h4>
                <p className="text-brand-100 text-sm mb-8 max-w-md mx-auto">Scopri come Corioli può farti risparmiare ore di lavoro amministrativo con una demo gratuita di 15 minuti.</p>
                <Link href="/contatti" className="bg-white text-brand-900 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors inline-block text-sm shadow-md">
                  Richiedi una Demo
                </Link>
              </div>
           </div>
        </div>
      </div>
    </article>
  );
}
