import { siteConfig } from "@/content/config";
import { experience } from "@/content/experience";
import Shell from "./Shell";

/**
 * Hero and experience share one row from `lg` up: the serif headline holds the
 * left seven columns, the experience list the right five, both starting level.
 * The reference composition is exactly these two blocks — no role line, no
 * statement, no visible "Experience" heading — with the work grid beginning
 * just below.
 */
export default function HeroExperience() {
  return (
    <Shell as="section" className="grid grid-cols-12 items-start gap-x-8 gap-y-16 pb-14 pt-28 sm:pt-36 lg:pb-16 lg:pt-48 xl:pt-56">
      {/* Left — headline. From `sm` up, line one is held on a single line so the
          break before the emphasised close is the only one; on the narrowest
          screens it wraps naturally rather than overflowing. */}
      <div className="col-span-12 lg:col-span-7">
        <h1 className="display text-[2.5rem] leading-[1.08] text-ink sm:text-[3rem] xl:text-[4rem]">
          <span className="block sm:whitespace-nowrap">{siteConfig.hero.headlineLineOne}</span>
          <span className="block">
            {siteConfig.hero.headlineLineTwo}{" "}
            <em>{siteConfig.hero.headlineEmphasis}</em>
          </span>
        </h1>
      </div>

      {/* Right — experience, a quiet unruled table of year / company / role */}
      <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-3">
        <h2 className="sr-only">Experience</h2>

        <ul>
          {experience.map((entry) => (
            <li
              key={`${entry.year}-${entry.company}`}
              className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 gap-y-0.5 py-2 sm:grid-cols-[4.5rem_1.1fr_1fr] sm:gap-x-6"
            >
              <span className="font-mono text-[12px] uppercase tracking-label text-muted tabular-nums">
                {entry.year}
              </span>
              <span className="text-[15px] font-medium text-ink">{entry.company}</span>
              <span className="col-start-2 text-sm text-muted sm:col-start-3">{entry.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
