import { beyondTheProduct } from "@/content/leadership";
import { writing } from "@/content/writing";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/**
 * Writing and the strands around it. The article list renders only when real
 * pieces exist — no invented titles on the production homepage.
 */
export default function BeyondTheProduct() {
  return (
    <Shell as="section" id="writing" className="scroll-mt-16 pt-24 lg:pt-32">
      <SectionIntro
        label="Writing"
        heading={beyondTheProduct.heading}
        support={beyondTheProduct.support}
      />

      <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
        {beyondTheProduct.strands.map((s) => (
          <li key={s} className="text-[13px] uppercase tracking-label text-muted">
            {s}
          </li>
        ))}
      </ul>

      {writing.length > 0 && (
        <ul className="mt-10 border-t border-rule">
          {writing.slice(0, 4).map((article, i) => (
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
