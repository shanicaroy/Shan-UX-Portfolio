import { finalCta } from "@/content/leadership";
import { siteConfig } from "@/content/config";
import Shell from "./Shell";

/** Closing statement — positioning, not a generic contact plea. */
export default function FinalCta() {
  return (
    <Shell as="section" className="pb-24 pt-24 lg:pb-32 lg:pt-32">
      <div className="border-t border-rule pt-12 lg:pt-16">
        <h2 className="display max-w-3xl text-[2rem] leading-[1.12] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
          {finalCta.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {finalCta.support}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-ink underline-offset-4 transition-colors duration-200 hover:underline"
          >
            View résumé <span aria-hidden>↗</span>
          </a>
          <a
            href={siteConfig.social.email}
            className="text-base text-ink underline-offset-4 transition-colors duration-200 hover:underline"
          >
            Get in touch <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </Shell>
  );
}
