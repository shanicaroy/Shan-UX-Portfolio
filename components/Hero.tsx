import { siteConfig } from "@/content/config";
import Shell from "./Shell";

export default function Hero() {
  return (
    <Shell as="section" className="py-24 sm:py-32 lg:py-44">
      <h1 className="max-w-[19ch] font-serif text-[2.75rem] leading-[1.02] tracking-[-0.015em] text-ink sm:text-[4.5rem] lg:text-[6.5rem]">
        {siteConfig.hero.headline}
      </h1>

      <p className="mt-10 font-sans text-xs uppercase tracking-label text-muted">
        {siteConfig.role}
      </p>

      <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted sm:text-lg">
        {siteConfig.hero.statement}
      </p>
    </Shell>
  );
}
