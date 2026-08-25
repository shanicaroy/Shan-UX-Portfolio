import { howIWork } from "@/content/leadership";
import Shell from "./Shell";

/** The homepage's single leadership-oriented section — concise by design. */
export default function HowIWork() {
  return (
    <Shell as="section" className="pt-20 lg:pt-28">
      <header>
        <p className="border-t border-rule pt-5 text-[12px] uppercase tracking-label text-muted">
          How I work
        </p>
        <h2 className="display mt-8 max-w-3xl text-[2rem] leading-[1.12] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
          {howIWork.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {howIWork.support}
        </p>
      </header>

      <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {howIWork.principles.map((p, i) => (
          <li key={p.title}>
            <p className="text-[13px] text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="display mt-3 text-xl leading-snug text-ink sm:text-[1.375rem]">
              {p.title}
            </h3>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-muted">{p.body}</p>
          </li>
        ))}
      </ol>
    </Shell>
  );
}
