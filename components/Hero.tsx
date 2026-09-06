import { siteConfig } from "@/content/config";
import { experience } from "@/content/experience";
import Shell from "./Shell";

/**
 * Hero: eyebrow with a lime separator dot, the four-line headline, the lead,
 * two CTAs — and the unchanged experience ladder on the right. Roughly 60/40
 * on desktop, stacked on mobile with the ladder below the CTAs.
 */
export default function Hero() {
  const { hero } = siteConfig;

  return (
    <Shell
      as="section"
      id="top"
      className="grid grid-cols-12 items-start gap-y-12 pt-14 sm:pt-16 lg:gap-x-8 lg:pt-20"
    >
      <div className="col-span-12 lg:col-span-7">
        <p className="type-eyebrow text-ink">
          {hero.eyebrow.lead}
          <span aria-hidden className="mx-2 text-lime">
            &bull;
          </span>
          {hero.eyebrow.tail}
        </p>
        <h1 className="type-hero mt-6 max-w-[17ch] text-ink">{hero.headline}</h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.support}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[15px] font-medium text-ground transition-opacity duration-200 hover:opacity-85"
          >
            {hero.primaryCta.label}
            <span aria-hidden>&#8600;</span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="text-[15px] font-medium text-ink underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
          >
            {hero.secondaryCta.label} <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Right — the experience ladder, content and layout unchanged */}
      <aside className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-2">
        <h2 className="sr-only">Experience</h2>
        <ul>
          {experience.map((entry) => (
            <li
              key={`${entry.period}-${entry.company}-${entry.role}`}
              className="grid grid-cols-[4rem_1fr] items-baseline gap-x-4 py-2 sm:grid-cols-[4.5rem_1.1fr_1fr] sm:gap-x-6"
            >
              <span className="type-eyebrow font-normal text-muted tabular-nums">
                {entry.period.slice(0, 4)}
              </span>
              <span className="text-[15px] font-medium text-ink">{entry.company}</span>
              <span className="col-start-2 text-sm text-muted sm:col-start-3">{entry.role}</span>
            </li>
          ))}
        </ul>
      </aside>
    </Shell>
  );
}
