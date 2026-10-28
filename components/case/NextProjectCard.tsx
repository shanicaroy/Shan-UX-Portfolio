import Link from "next/link";

/**
 * Next-project navigation card at the foot of a case study. Composition follows
 * the Tyler Berg "Pockets" reference (the "Found: Desktop Platform Refresh"
 * card): a quiet "Next project" label, the project meta line, a prominent
 * serif title, and an arrow that advances on hover. The whole surface is one
 * clickable, keyboard-focusable link. Rendered in the site's own brand system.
 */
export default function NextProjectCard({
  href,
  title,
  meta,
}: {
  href: string;
  title: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-rule px-7 py-8 transition-colors duration-300 ease-editorial hover:border-[#cbb8ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-9 sm:py-10"
    >
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
        Next project
      </span>
      <div className="mt-3 flex items-end justify-between gap-6">
        <div className="min-w-0">
          {meta ? <p className="font-sans text-[13.5px] text-muted">{meta}</p> : null}
          <p className="mt-1 font-serif text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.12] tracking-[-0.01em] text-ink">
            {title}
          </p>
        </div>
        <span
          aria-hidden
          className="mb-1 shrink-0 text-[26px] leading-none text-[#b9b9b9] transition-all duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent"
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
