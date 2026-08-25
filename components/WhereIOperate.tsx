import { whereIOperate } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** Three pillars: Design · Product · Leadership — the intersection itself. */
export default function WhereIOperate() {
  return (
    <Shell as="section" id="leadership" className="scroll-mt-16 pt-20 lg:pt-28">
      <SectionIntro
        label={whereIOperate.label}
        heading={whereIOperate.heading}
        support={whereIOperate.support}
      />

      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 lg:mt-16 lg:grid-cols-3">
        {whereIOperate.pillars.map((p) => (
          <div key={p.title}>
            <h3 className="display text-2xl leading-tight text-ink sm:text-[1.75rem]">{p.title}</h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{p.body}</p>
            <ul className="mt-6 flex flex-col gap-2 border-t border-rule pt-5">
              {p.list.map((item) => (
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
