import { crossFunctional } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** The functions design has to move between, and the scale it happens at. */
export default function CrossFunctional() {
  return (
    <Shell as="section" className="pt-14 lg:pt-20">
      <SectionIntro
        label={crossFunctional.label}
        heading={crossFunctional.heading}
        support={crossFunctional.support}
      />

      <ol className="mt-8 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:items-center lg:gap-5">
        {crossFunctional.functions.map((fn, i) => (
          <li key={fn} className="flex items-center gap-3 lg:gap-5">
            <span className="text-lg text-ink sm:text-xl">{fn}</span>
            {i < crossFunctional.functions.length - 1 && (
              <span aria-hidden className="text-muted">
                &harr;
              </span>
            )}
          </li>
        ))}
      </ol>

      <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-rule pt-5">
        {crossFunctional.metrics.map((m) => (
          <li key={m} className="text-[13px] text-muted">
            {m}
          </li>
        ))}
      </ul>
    </Shell>
  );
}
