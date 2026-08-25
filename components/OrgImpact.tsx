import { orgImpact } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/**
 * Organizational leverage. Each area waits on a verified example in the
 * problem → change → adoption → outcome shape; nothing is invented here.
 */
export default function OrgImpact() {
  return (
    <Shell as="section" className="pt-14 lg:pt-20">
      <SectionIntro label={orgImpact.label} heading={orgImpact.heading} support={orgImpact.support} />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {orgImpact.areas.map((area) => (
          <div key={area.title}>
            <h3 className="text-[17px] font-medium text-ink">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{area.example}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}
