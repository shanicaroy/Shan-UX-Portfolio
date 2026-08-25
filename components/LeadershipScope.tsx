import { leadershipScope } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** Four-column scope grid. Metrics stay [X] until verified — never invented. */
export default function LeadershipScope() {
  return (
    <Shell as="section" className="pt-14 lg:pt-20">
      <SectionIntro label={leadershipScope.label} heading={leadershipScope.heading} />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {leadershipScope.columns.map((col) => (
          <div key={col.label}>
            <p className="text-[12px] uppercase tracking-label text-muted">{col.label}</p>
            <p className="mt-4 text-[2.5rem] font-semibold leading-none text-ink">{col.metric}</p>
            <p className="mt-2 text-sm text-muted">{col.metricNote}</p>
            <p className="mt-4 max-w-[32ch] text-[15px] leading-relaxed text-muted">{col.body}</p>
          </div>
        ))}
      </div>
    </Shell>
  );
}
