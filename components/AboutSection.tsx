import { siteConfig } from "@/content/config";
import Shell from "./Shell";

/** Slim by design — the leadership sections carry most of the narrative. */
export default function AboutSection() {
  return (
    <Shell as="section" id="about" className="scroll-mt-16 pt-24 lg:pt-32">
      <p className="border-t border-rule pt-5 text-[12px] uppercase tracking-label text-muted">
        About
      </p>
      <div className="mt-8 grid grid-cols-12 gap-x-8">
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-7">
          {siteConfig.about.body.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink/85 sm:text-xl">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Shell>
  );
}
