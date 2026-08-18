/**
 * Project visual.
 *
 * No real case-study artwork exists in the repo yet, so this renders a clearly
 * marked placeholder naming the file it expects rather than inventing imagery.
 *
 * When real artwork lands in /public/projects, replace the placeholder body
 * with next/image and delete the label markup:
 *
 *   <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 66vw"
 *          className="object-cover transition-transform duration-500
 *                     ease-editorial group-hover:scale-[1.015]" />
 */
export default function ProjectMedia({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#191A16] px-6 text-center transition-transform duration-500 ease-editorial group-hover:scale-[1.015]"
    >
      <span className="font-sans text-[10px] uppercase tracking-label text-muted/45">
        Image placeholder
      </span>
      <span className="max-w-full truncate font-sans text-[10px] tracking-wide text-muted/25">
        {src}
      </span>
    </div>
  );
}
