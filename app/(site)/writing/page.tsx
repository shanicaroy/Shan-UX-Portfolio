import type { Metadata } from "next";
import { beyondTheProduct } from "@/content/leadership";
import { writing } from "@/content/writing";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  title: "Writing",
  description: beyondTheProduct.support,
};

/** All writing lives here; the homepage shows the intro with a Read all link. */
export default function WritingPage() {
  return (
    <Shell as="section" className="pb-24 pt-20 sm:pt-24 lg:pb-32 lg:pt-28">
      <p className="text-[12px] uppercase tracking-label text-muted">Writing</p>
      <h1 className="display mt-8 max-w-3xl text-[2rem] leading-[1.12] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
        {beyondTheProduct.heading}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {beyondTheProduct.support}
      </p>

      {writing.length === 0 ? (
        <p className="mt-14 border-t border-rule pt-8 text-base text-muted">
          Pieces in progress — articles will appear here as they're published.
        </p>
      ) : (
        <ul className="mt-14 border-t border-rule">
          {writing.map((article, i) => (
            <li key={`${article.year}-${i}`}>
              <a
                href={article.href}
                className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-rule py-5 sm:grid-cols-[7rem_1fr_12rem] sm:gap-x-10"
              >
                <span className="text-[13px] text-muted tabular-nums">{article.year}</span>
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
    </Shell>
  );
}
