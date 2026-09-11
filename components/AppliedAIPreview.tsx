import Link from "next/link";
import { appliedAI } from "@/content/applied-ai";
import Shell from "./Shell";

/**
 * The home page keeps only the initiation of Case Check: eyebrow, heading,
 * intro, and the status strip, on the shared white ground. The full practice
 * lives on /ai-lab, reached through a plain text link.
 */
export default function AppliedAIPreview() {
  return (
    <section id="applied-ai" className="scroll-mt-[var(--nav-height)] border-t border-rule bg-ground">
      <Shell className="py-20 lg:py-28">
        <p className="type-eyebrow text-accent">{appliedAI.eyebrow}</p>
        <div className="mt-8 grid grid-cols-12 gap-y-8 lg:gap-x-8">
          <h2 className="type-hero col-span-12 max-w-[16ch] text-ink lg:col-span-7">
            {appliedAI.heading}
          </h2>
          <p className="col-span-12 self-end text-base leading-relaxed text-muted lg:col-span-5 lg:col-start-8">
            {appliedAI.intro}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {appliedAI.status.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-2.5 bg-ground px-5 py-5 text-sm text-ink"
            >
              {i === 0 && <span aria-hidden className="text-accent">&#9679;</span>}
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/ai-lab"
          className="mt-12 inline-block text-[15px] font-medium text-ink underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
        >
          Enter the AI lab <span aria-hidden>&rarr;</span>
        </Link>
      </Shell>
    </section>
  );
}
