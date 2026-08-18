import { experience } from "@/content/experience";
import Shell from "./Shell";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <Shell as="section" className="pb-24 sm:pb-32">
      <SectionHeading>Experience</SectionHeading>

      <ul className="mt-10">
        {experience.map((entry) => (
          <li
            key={`${entry.year}-${entry.company}-${entry.role}`}
            className="grid grid-cols-[5.5rem_1fr] gap-x-6 gap-y-1 border-b border-rule py-5 sm:grid-cols-[8rem_1fr_1fr] sm:items-baseline sm:gap-x-10"
          >
            <span className="font-sans text-xs uppercase tracking-label text-muted tabular-nums">
              {entry.year}
            </span>
            <span className="font-serif text-xl text-ink sm:text-2xl">{entry.company}</span>
            <span className="col-start-2 font-sans text-sm text-muted sm:col-start-3 sm:text-right">
              {entry.role}
            </span>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
