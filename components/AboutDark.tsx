import Link from "next/link";
import { aboutDark, leadershipModel } from "@/content/leadership";
import Shell from "./Shell";

/**
 * Full-bleed charcoal About block: heading left, support right, a hairline,
 * the oversized statement, then the existing five-step working model restyled
 * for the dark ground, closing with the leadership page link.
 */
export default function AboutDark() {
  return (
    <section id="about" className="scroll-mt-[var(--nav-height)] bg-charcoal">
      <Shell className="py-20 lg:py-28">
        <p className="type-eyebrow text-lime">{aboutDark.eyebrow}</p>

        <div className="mt-8 grid grid-cols-12 gap-y-6 lg:gap-x-8">
          <h2 className="type-section col-span-12 text-ground lg:col-span-5">
            {aboutDark.heading}
          </h2>
          <p className="col-span-12 self-end text-base leading-relaxed text-muted-dark lg:col-span-6 lg:col-start-7">
            {aboutDark.support}
          </p>
        </div>

        <hr className="mt-10 border-0 border-t border-rule-dark lg:mt-12" />

        <p className="type-statement mt-10 max-w-4xl text-ground lg:mt-12">
          {aboutDark.statement}
        </p>

        {/* The five-step working model, unchanged in content */}
        <ol className="mt-14 grid grid-cols-1 border-t border-rule-dark sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {leadershipModel.steps.map((step, i) => (
            <li
              key={step}
              className="border-b border-rule-dark px-0 py-5 sm:pr-8 lg:border-b-0 lg:border-r lg:py-6 lg:pl-5 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="type-eyebrow block text-muted-dark tabular-nums">
                0{i + 1}
              </span>
              <span className="mt-2 block text-[15px] font-medium text-ground">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted-dark">
          {leadershipModel.footnote}
        </p>

        <Link
          href={aboutDark.link.href}
          className="mt-10 inline-block text-[15px] font-medium text-ground underline-offset-4 transition-opacity duration-200 hover:underline hover:opacity-80"
        >
          {aboutDark.link.label} <span aria-hidden>&rarr;</span>
        </Link>
      </Shell>
    </section>
  );
}
