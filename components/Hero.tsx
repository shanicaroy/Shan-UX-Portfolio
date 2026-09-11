import { siteConfig } from "@/content/config";
import { experience } from "@/content/experience";
import Shell from "./Shell";

/**
 * Hero, pared down by request: eyebrow with the accent separator dot and the
 * headline on the left, the unchanged experience ladder on the right. No
 * support paragraph, no CTAs.
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
          <span aria-hidden className="mx-2 text-accent">
            &bull;
          </span>
          {hero.eyebrow.tail}
        </p>
        <h1 className="type-hero mt-6 max-w-[17ch] text-ink">{hero.headline}</h1>
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
