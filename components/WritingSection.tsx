import { writing } from "@/content/writing";
import Shell from "./Shell";

export default function WritingSection() {
  return (
    <Shell as="section" id="writing" className="scroll-mt-16 pb-20 lg:pb-28">
      <h2 className="border-t border-rule pt-5 font-mono text-[13px] uppercase tracking-label text-muted">
        Writing
      </h2>

      <div className="mt-8 grid grid-cols-12 gap-x-8">
        <p className="col-span-12 max-w-xl text-lg leading-relaxed text-muted lg:col-span-7">
          Notes on UX and product design, and on the psychology and behaviour underneath
          them.
        </p>
      </div>

      {writing.length === 0 ? (
        <p className="mt-10 border-t border-rule pt-6 text-base text-muted">
          Pieces in progress.
        </p>
      ) : (
      <ul className="mt-10 border-t border-rule">
        {writing.map((article, i) => (
          <li key={`${article.year}-${i}`}>
            <a
              href={article.href}
              className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-rule py-5 sm:grid-cols-[7rem_1fr_12rem] sm:gap-x-10"
            >
              <span className="font-mono text-[12px] uppercase tracking-label text-muted tabular-nums">
                {article.year}
              </span>
              <span className="text-lg text-ink transition-opacity duration-200 group-hover:opacity-60 sm:text-xl">
                {article.title}
              </span>
              <span className="col-start-2 font-mono text-[12px] uppercase tracking-label text-muted sm:col-start-3 sm:text-right">
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
