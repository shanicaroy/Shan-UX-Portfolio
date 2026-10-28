import Link from "next/link";

/**
 * Case-study breadcrumb: ← Work / {Project}. Replaces the old fragmented
 * "Selected Work" + "Case Study" labels. The back arrow and "Work" navigate to
 * the home Selected Work section; the current project is a location indicator,
 * not a link. Composition follows the supplied "← Work / Notion" reference,
 * rendered in the site's own Inter + brand colours.
 */
export default function CaseBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="font-sans text-[13px]">
      <Link
        href="/#work"
        className="group inline-flex items-center gap-2 rounded-sm text-[#9a9a9a] transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span aria-hidden className="text-[15px] leading-none transition-transform group-hover:-translate-x-0.5">
          &larr;
        </span>
        <span className="font-medium">Work</span>
      </Link>
      <span aria-hidden className="mx-2 text-[#cfcfcf]">
        /
      </span>
      <span aria-current="page" className="font-medium text-ink">
        {title}
      </span>
    </nav>
  );
}
