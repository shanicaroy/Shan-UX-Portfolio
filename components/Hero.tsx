import { siteConfig } from "@/content/config";
import Shell from "./Shell";

/**
 * Role-agnostic leadership hero: a short H1, the positioning paragraph, the
 * conceptual anchor line, and a credential strip. No photograph by design.
 */
export default function Hero() {
  return (
    <Shell as="section" className="pt-20 sm:pt-24 lg:pt-28">
      <h1 className="display max-w-[18ch] text-[2.75rem] leading-[1.05] text-ink sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[5rem]">
        {siteConfig.hero.headline}
      </h1>
      <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {siteConfig.hero.support}
      </p>

      {/* The conceptual anchor — prominent, but well below the H1. */}
      <p className="display mt-10 max-w-3xl text-xl leading-snug text-ink sm:text-2xl">
        {siteConfig.hero.positioning}
      </p>

      {/* Credential strip */}
      <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-rule pt-5">
        {siteConfig.hero.credentials.map((c) => (
          <li key={c} className="text-[13px] text-muted">
            {c}
          </li>
        ))}
      </ul>
    </Shell>
  );
}
