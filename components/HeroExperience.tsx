import { siteConfig } from "@/content/config";
import { experience } from "@/content/experience";
import Shell from "./Shell";

/**
 * Hero and experience share one row from `lg` up: the headline holds the left
 * eight columns, the experience list the right three. The side-by-side
 * relationship is the point of the composition, so the headline steps down a
 * size at `lg` to keep its first line inside its own column rather than
 * letting the split break.
 */
export default function HeroExperience() {
  return (
    <Shell as="section" className="grid grid-cols-12 gap-x-8 gap-y-20 pb-28 pt-28 sm:pt-36 lg:pb-40 lg:pt-44">
      {/* Left — headline. From `sm` up, line one is held on a single line so the
          break before "who develops." is the only one; on the narrowest screens
          it wraps naturally rather than overflowing. Sizes step so that line
          never outgrows its column once the split kicks in at `lg`. */}
      <div className="col-span-12 lg:col-span-8">
        <h1 className="display text-[2.25rem] font-medium leading-[1.04] text-ink sm:text-[2.75rem] lg:text-[2.875rem] xl:text-[4rem]">
          <span className="block sm:whitespace-nowrap">{siteConfig.hero.headlineLineOne}</span>
          <span className="block">{siteConfig.hero.headlineLineTwo}</span>
        </h1>

        <p className="mt-10 text-[11px] uppercase tracking-label text-muted">{siteConfig.role}</p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {siteConfig.hero.statement}
        </p>
      </div>

      {/* Right — experience */}
      <div className="col-span-12 lg:col-span-3 lg:col-start-10">
        <h2 className="text-[11px] uppercase tracking-label text-muted">Experience</h2>

        <ul className="mt-8 border-t border-rule">
          {experience.map((entry) => (
            <li
              key={`${entry.year}-${entry.company}`}
              className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-rule py-4"
            >
              <span className="text-[11px] uppercase tracking-label text-muted tabular-nums">
                {entry.year}
              </span>
              <span className="text-base text-ink">{entry.company}</span>
              <span className="col-start-2 text-sm text-muted">{entry.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
