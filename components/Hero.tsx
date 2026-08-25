import { siteConfig } from "@/content/config";
import { experience } from "@/content/experience";
import Shell from "./Shell";

/**
 * Lean hero: headline and support left, the compact career list right — the
 * original portfolio's experience treatment, restoring immediate credibility
 * without a separate homepage Experience section.
 */
export default function Hero() {
  return (
    <Shell as="section" className="grid grid-cols-12 items-start gap-x-8 gap-y-12 pt-20 sm:pt-24 lg:pt-28">
      <div className="col-span-12 lg:col-span-7">
        <h1 className="display max-w-[16ch] text-[2.5rem] leading-[1.06] text-ink sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]">
          {siteConfig.hero.headline}
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {siteConfig.hero.support}
        </p>
      </div>

      {/* Right — compact experience, quiet and unruled */}
      <aside className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-2">
        <h2 className="sr-only">Experience</h2>
        <ul>
          {experience.map((entry) => (
            <li
              key={`${entry.period}-${entry.company}-${entry.role}`}
              className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-4 py-2 sm:grid-cols-[7.5rem_1.1fr_1fr] sm:gap-x-6"
            >
              <span className="text-[13px] uppercase tracking-label text-muted tabular-nums">
                {entry.period}
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
