import { experience } from "@/content/experience";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/**
 * Career timeline with scope statements — progression evidence, placed after
 * the leadership philosophy rather than leading the page.
 */
export default function ExperienceSection() {
  return (
    <Shell as="section" className="pt-24 lg:pt-32">
      <SectionIntro label="Experience" heading="Where the judgment comes from." />

      <ol className="mt-12 flex flex-col lg:mt-16">
        {experience.map((entry) => (
          <li
            key={`${entry.period}-${entry.company}-${entry.role}`}
            className="grid grid-cols-12 gap-x-8 gap-y-4 border-t border-rule py-8"
          >
            <div className="col-span-12 lg:col-span-4">
              <h3 className="text-[17px] font-medium text-ink">
                {entry.company} — {entry.role}
              </h3>
              <p className="mt-1.5 text-[13px] text-muted tabular-nums">{entry.period}</p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[12px] uppercase tracking-label text-muted">{entry.tags}</p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                {entry.description}
              </p>
            </div>
            {entry.metrics && (
              <ul className="col-span-12 flex flex-wrap gap-x-6 gap-y-1.5 lg:col-span-3 lg:flex-col">
                {entry.metrics.map((m) => (
                  <li key={m} className="text-[13px] text-muted">
                    {m}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Shell>
  );
}
