import { experience } from "@/content/experience";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/**
 * Career timeline. Senior roles carry labelled facets showing the
 * design × product × leadership intersection.
 */
export default function ExperienceSection() {
  return (
    <Shell as="section" className="pt-24 lg:pt-32">
      <SectionIntro label="Experience" heading="Where the judgment comes from." />

      <ol className="mt-12 flex flex-col lg:mt-16">
        {experience.map((entry) => (
          <li
            key={`${entry.period}-${entry.company}-${entry.role}`}
            className="grid grid-cols-12 gap-x-8 gap-y-5 border-t border-rule py-9"
          >
            <div className="col-span-12 lg:col-span-4">
              <h3 className="text-[17px] font-medium text-ink">
                {entry.company} — {entry.role}
              </h3>
              <p className="mt-1.5 text-[13px] text-muted tabular-nums">{entry.period}</p>
              <p className="mt-3 text-[12px] uppercase tracking-label text-muted">{entry.tags}</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              {entry.note && <p className="mb-3 text-[15px] italic text-ink/75">{entry.note}</p>}
              <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{entry.description}</p>
              {entry.facets && (
                <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  {entry.facets.map((f) => (
                    <div key={f.label}>
                      <dt className="text-[12px] uppercase tracking-label text-muted">{f.label}</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-ink/80">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {entry.scopeLine && (
                <p className="mt-6 text-[13px] text-muted">{entry.scopeLine}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Shell>
  );
}
