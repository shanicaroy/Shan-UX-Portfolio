import { leadershipModel } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** The progression from craft to organizational impact, as a horizontal flow. */
export default function LeadershipModel() {
  return (
    <Shell as="section" className="pt-14 lg:pt-20">
      <SectionIntro label={leadershipModel.label} heading={leadershipModel.heading} />

      <ol className="mt-8 flex flex-col gap-4 lg:mt-10 lg:flex-row lg:items-center lg:gap-6">
        {leadershipModel.steps.map((step, i) => (
          <li key={step} className="flex items-center gap-4 lg:gap-6">
            <span className="text-lg text-ink sm:text-xl">{step}</span>
            {i < leadershipModel.steps.length - 1 && (
              <span aria-hidden className="hidden text-muted lg:inline">
                &rarr;
              </span>
            )}
            {i < leadershipModel.steps.length - 1 && (
              <span aria-hidden className="text-muted lg:hidden">
                &darr;
              </span>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted">
        {leadershipModel.footnote}
      </p>
    </Shell>
  );
}
