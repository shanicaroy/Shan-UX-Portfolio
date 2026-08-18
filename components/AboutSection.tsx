import { siteConfig } from "@/content/config";
import Shell from "./Shell";

export default function AboutSection() {
  return (
    <Shell as="section" id="about" className="scroll-mt-16 pb-20 lg:pb-28">
      <h2 className="border-t border-rule pt-5 font-mono text-[13px] uppercase tracking-label text-muted">
        About
      </h2>

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
