import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  // Dimensioni reali del PNG: servono a next/image per riservare lo spazio.
  width: number;
  height: number;
};

// Uno screenshot dell'app in una cornice da finestra. Pensato per i ritagli in
// public/screenshots/funzionalita-*.png: le schermate intere, ridotte a mezza
// colonna, diventano illeggibili e pesano fino a 1,3 MB.
export default function ScreenshotFrame({ src, alt, width, height }: ScreenshotFrameProps) {
  return (
    <figure className="rounded-2xl border border-gray-200 bg-white shadow-card overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50/80" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 1024px) 100vw, 700px"
        className="w-full h-auto"
      />
    </figure>
  );
}
