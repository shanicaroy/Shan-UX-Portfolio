import { peopleDevelopment } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** Three horizontal blocks: mentorship, teaching, community. */
export default function PeopleDevelopment() {
  return (
    <Shell as="section" className="pt-24 lg:pt-32">
      <SectionIntro
        label={peopleDevelopment.label}
        heading={peopleDevelopment.heading}
        support={peopleDevelopment.support}
      />

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:mt-16 lg:grid-cols-3">
        {peopleDevelopment.blocks.map((block) => (
          <div key={block.title}>
            <p className="text-[12px] uppercase tracking-label text-muted">{block.title}</p>
            <p className="mt-4 text-[2.5rem] font-semibold leading-none text-ink">{block.metric}</p>
            <p className="mt-2 text-sm text-muted">{block.metricNote}</p>
            <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-muted">{block.body}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}
