import { testimonials } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** Renders nothing until real testimonials exist — quotes are never invented. */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Shell as="section" className="pt-24 lg:pt-32">
      <SectionIntro
        label="What people say"
        heading="Leadership is best understood through the people I've worked with."
      />

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:mt-16 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name}>
            <blockquote className="text-base leading-relaxed text-ink/85">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted">
              {t.name} · {t.role}
              {t.company ? ` · ${t.company}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </Shell>
  );
}
