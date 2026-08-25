import { siteConfig } from "@/content/config";
import Shell from "./Shell";

const cred = siteConfig.hero.credibility;

/**
 * Leadership hero: the headline owns the left two-thirds, a quiet credibility
 * block sits low on the right third, and the positioning line closes the
 * composition under a hairline rule. No photograph by design — the page leads
 * with professional authority, not personal branding.
 */
export default function Hero() {
  return (
    <Shell as="section" className="grid grid-cols-12 items-end gap-x-8 gap-y-12 pt-20 sm:pt-24 lg:pt-28">
      <div className="col-span-12 lg:col-span-8">
        <h1 className="display max-w-[22ch] text-[2.5rem] leading-[1.06] text-ink sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.75rem]">
          {siteConfig.hero.headline}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {siteConfig.hero.support}
        </p>
      </div>

      {/* Credibility metadata, aligned toward the lower portion of the hero */}
      <aside className="col-span-12 flex flex-col gap-7 sm:flex-row sm:gap-16 lg:col-span-3 lg:col-start-10 lg:flex-col lg:gap-8">
        <div>
          <h2 className="text-[12px] uppercase tracking-label text-muted">Currently</h2>
          <ul className="mt-3 flex flex-col gap-1">
            {cred.currently.map((line) => (
              <li key={line} className="text-sm text-ink">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] uppercase tracking-label text-muted">Focus</h2>
          <ul className="mt-3 flex flex-col gap-1">
            {cred.focus.map((line) => (
              <li key={line} className="text-sm text-ink">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] uppercase tracking-label text-muted">Experience</h2>
          <p className="mt-3 text-sm text-ink">{cred.experience}</p>
        </div>
      </aside>

      {/* Positioning line under a hairline rule */}
      <div className="col-span-12 mt-4 border-t border-rule pt-5 lg:mt-8">
        <p className="text-sm text-ink sm:text-base">{siteConfig.hero.positioning}</p>
      </div>
    </Shell>
  );
}
