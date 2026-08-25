import { testimonials, testimonialsIntro } from "@/content/leadership";
import Shell from "./Shell";
import SectionIntro from "./SectionIntro";

/** Renders nothing until real testimonials exist — quotes are never invented. */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Shell as="section" className="pt-14 lg:pt-20">
      <SectionIntro label={testimonialsIntro.label} heading={testimonialsIntro.heading} />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 lg:mt-10 lg:grid-cols-3">
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
