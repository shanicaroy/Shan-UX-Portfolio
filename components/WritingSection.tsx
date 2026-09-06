import Link from "next/link";
import { writing } from "@/content/writing";
import Shell from "./Shell";

/**
 * The published writing treatment: label, lede, then the year / title /
 * category list — plus a Read all link through to /writing.
 */
export default function WritingSection() {
  return (
    <Shell as="section" id="writing" className="scroll-mt-16 pt-14 lg:pt-20">
      <h2 className="border-t border-rule pt-5 text-[13px] uppercase tracking-label text-muted">
        Writing
      </h2>

      <div className="mt-6 grid grid-cols-12 gap-x-8">
        <p className="col-span-12 max-w-xl text-lg leading-relaxed text-muted lg:col-span-7">
          Notes on UX and product design, and on the psychology and behaviour underneath
          them.
        </p>
      </div>

      {writing.length === 0 ? (
        <p className="mt-8 border-t border-rule pt-5 text-base text-muted">
          Pieces in progress.
        </p>
      ) : (
        <ul className="mt-8 border-t border-rule">
          {writing.map((article, i) => (
            <li key={`${article.year}-${i}`}>
              <a
                href={article.href}
                className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-rule py-5 sm:grid-cols-[7rem_1fr_12rem] sm:gap-x-10"
              >
                <span className="text-[12px] uppercase tracking-label text-muted tabular-nums">
                  {article.year}
                </span>
                <span className="text-lg text-ink transition-opacity duration-200 group-hover:opacity-60 sm:text-xl">
                  {article.title}
                </span>
                <span className="col-start-2 text-[12px] uppercase tracking-label text-muted sm:col-start-3 sm:text-right">
                  {article.category}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/writing"
        className="mt-8 inline-block text-sm text-ink underline-offset-4 transition-colors duration-200 hover:underline"
      >
        Read all <span aria-hidden>↗</span>
      </Link>
    </Shell>
  );
}
