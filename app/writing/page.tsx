import type { Metadata } from "next";
import Link from "next/link";
import { writing } from "@/content/writing";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing on UX, product design, psychology and design leadership.",
};

export default function WritingPage() {
  return (
    <Shell as="section" className="py-24 sm:py-32">
      <h1 className="max-w-[14ch] font-serif text-[2.5rem] leading-[1.05] text-ink sm:text-6xl">
        Writing
      </h1>
      <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted">
        Notes on UX, product design, psychology and design leadership.
      </p>

      <ul className="mt-20 border-t border-rule">
        {writing.map((article, i) => (
          <li key={`${article.year}-${i}`}>
            <Link
              href={article.href}
              className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-rule py-6 sm:grid-cols-[6rem_1fr_10rem] sm:gap-x-10"
            >
              <span className="font-sans text-xs uppercase tracking-label text-muted tabular-nums">
                {article.year}
              </span>
              <span className="font-serif text-xl text-ink transition-colors duration-200 group-hover:text-copper sm:text-2xl">
                {article.title}
              </span>
              <span className="col-start-2 font-sans text-xs uppercase tracking-label text-muted sm:col-start-3 sm:text-right">
                {article.category}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 font-sans text-xs text-muted/60">
        Placeholder entries — replace them in <code>content/writing.ts</code>.
      </p>
    </Shell>
  );
}
