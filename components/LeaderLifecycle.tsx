import { leaderLifecycle } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** Define → Discover → Direct → Design → Align → Develop → Scale. */
export default function LeaderLifecycle() {
  return (
    <Shell as="section" className="pt-14 lg:pt-20">
      <SectionIntro label={leaderLifecycle.label} heading={leaderLifecycle.heading} />

      <ol className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 xl:grid-cols-7">
        {leaderLifecycle.steps.map((step, i) => (
          <li key={step.title}>
            <p className="text-[13px] text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-[17px] font-medium text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Shell>
  );
}
