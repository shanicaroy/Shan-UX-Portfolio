import { howILead } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** Four principles: direction, bar, ownership, scale. */
export default function HowILead() {
  return (
    <Shell as="section" className="pt-24 lg:pt-32">
      <SectionIntro label={howILead.label} heading={howILead.heading} support={howILead.support} />

      <ol className="mt-12 flex max-w-3xl flex-col lg:mt-16">
        {howILead.principles.map((p, i) => (
          <li
            key={p.title}
            className="grid grid-cols-[3rem_1fr] items-baseline gap-x-6 border-t border-rule py-8 first:border-t-0 sm:grid-cols-[4rem_1fr]"
          >
            <span className="text-[13px] text-muted tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[12px] uppercase tracking-label text-muted">{p.kicker}</p>
              <h3 className="display mt-2 text-xl leading-snug text-ink sm:text-2xl">{p.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Shell>
  );
}
