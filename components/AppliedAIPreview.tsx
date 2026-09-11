import Link from "next/link";
import { appliedAI } from "@/content/applied-ai";
import Shell from "./Shell";

/**
 * The home page keeps only the initiation of Case Check: eyebrow, heading,
 * intro, and the status strip. The full practice (product contract, six-step
 * flow, failure states, evaluation, current limit) lives on /ai-lab.
 */
export default function AppliedAIPreview() {
  return (
    <section id="applied-ai" className="scroll-mt-[var(--nav-height)] border-t border-rule-dark bg-navy">
      <Shell className="py-20 lg:py-28">
        <p className="type-eyebrow text-lime">{appliedAI.eyebrow}</p>
        <div className="mt-8 grid grid-cols-12 gap-y-8 lg:gap-x-8">
          <h2 className="type-hero col-span-12 max-w-[16ch] text-ground lg:col-span-7">
            {appliedAI.heading}
          </h2>
          <p className="col-span-12 self-end text-base leading-relaxed text-muted-dark lg:col-span-5 lg:col-start-8">
            {appliedAI.intro}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px border border-rule-dark bg-rule-dark sm:grid-cols-2 lg:grid-cols-4">
          {appliedAI.status.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-2.5 bg-navy px-5 py-5 text-sm text-ground"
            >
              {i === 0 && <span aria-hidden className="text-lime">&#9679;</span>}
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/ai-lab"
          className="mt-12 inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-[15px] font-medium text-ground transition-opacity duration-200 hover:opacity-85"
        >
          Enter the AI lab <span aria-hidden>&rarr;</span>
        </Link>
      </Shell>
    </section>
  );
}
