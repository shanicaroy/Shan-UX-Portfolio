import { designQuality } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** The craft side of the intersection, stated plainly. */
export default function DesignQuality() {
  return (
    <Shell as="section" className="pt-24 lg:pt-32">
      <SectionIntro
        label={designQuality.label}
        heading={designQuality.heading}
        support={designQuality.support}
      />
      <ul className="mt-10 flex max-w-3xl flex-wrap gap-x-10 gap-y-3">
        {designQuality.areas.map((a) => (
          <li key={a} className="text-[15px] text-ink/85">
            {a}
          </li>
        ))}
      </ul>
    </Shell>
  );
}
