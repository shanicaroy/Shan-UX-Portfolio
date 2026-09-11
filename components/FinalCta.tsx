import { finalCta } from "@/content/leadership";
import { siteConfig } from "@/content/config";
import Shell from "./Shell";

/** Closing statement — positioning, not a generic contact plea. */
export default function FinalCta() {
  return (
    <Shell as="section" className="pb-16 pt-14 lg:pb-20 lg:pt-20">
      <div className="border-t border-rule pt-8 lg:pt-10">
        <h2 className="display max-w-3xl text-[2rem] leading-[1.12] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
          {finalCta.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {finalCta.support}
        </p>
        <div className="mt-9 flex flex-wrap gap-x-5 gap-y-4">
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[15px] font-medium text-ground transition-opacity duration-200 hover:opacity-85"
          >
            View résumé <span aria-hidden>↗</span>
          </a>
          <a
            href={siteConfig.social.email}
            className="inline-flex items-center gap-3 border border-ink px-6 py-3.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-ground"
          >
            Get in touch <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </Shell>
  );
}
