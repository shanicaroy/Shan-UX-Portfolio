import { whatILead } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** 2×2 editorial grid — quadrants of a page, not bordered cards. */
export default function WhatILead() {
  return (
    <Shell as="section" className="pt-20 lg:pt-28">
      <SectionIntro label={whatILead.label} heading={whatILead.heading} />

      <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-14 lg:mt-16 lg:grid-cols-2">
        {whatILead.quadrants.map((q) => (
          <div key={q.title}>
            <h3 className="display text-2xl leading-tight text-ink sm:text-[1.75rem]">{q.title}</h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{q.body}</p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {q.list.map((item) => (
                <li key={item} className="text-[13px] text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Shell>
  );
}
