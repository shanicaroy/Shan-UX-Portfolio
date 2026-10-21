import Reveal from "./Reveal";

const SERIF = '"Times New Roman", Times, Georgia, serif';
const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const INTER = '"Inter", "Helvetica Neue", Arial, sans-serif';

// Same side gutter as the hero and Selected Work (118/1728 of the width).
const GUTTER = "min(6.83vw, 118px)";

// Four identical essay placeholders, exactly as in the Figma.
const ESSAYS = Array.from({ length: 4 }, () => ({
  eyebrow: "AGENT EXPERIENCE · 8 MIN",
  title: "When products are used by people and agents",
  href: "/writing",
}));

const fluid = (px: number, min: number) => `clamp(${min}px, ${((px / 1728) * 100).toFixed(3)}vw, ${px}px)`;

/**
 * Writing section, matching the Figma: the "Writing my mind" serif heading, a
 * rationale line, then the essay index — a number, a category eyebrow, and a
 * large Times title that turns purple on hover, with a long arrow on the right.
 */
export default function WritingSection() {
  return (
    <section
      id="writing"
      className="scroll-mt-[var(--nav-height)]"
      style={{ paddingInline: GUTTER, paddingTop: "min(5.38vw, 93px)", paddingBottom: "min(3.47vw, 60px)" }}
    >
      <Reveal>
        <h2
          className="font-normal text-[#323338]"
          style={{ fontFamily: SERIF, fontSize: fluid(60, 32), lineHeight: 0.94, letterSpacing: "-0.04em" }}
        >
          Writing my mind <span className="font-bold text-[#7a5ab2]">. . .</span>
        </h2>
        <p
          className="max-w-[1295px] text-[#323338]"
          style={{ marginTop: "min(2.14vw, 37px)", fontFamily: ROBOTO, fontSize: fluid(24.794, 17), lineHeight: 1.41 }}
        >
          If I weren&rsquo;t a designer, I would have been a writer. Writing is an essential part of my
          work in general. Most of my client work is under NDA, these essays are where my thinking goes
          on the record.
        </p>
      </Reveal>

      <ul style={{ marginTop: "min(1.45vw, 25px)" }}>
        {ESSAYS.map((essay, i) => (
          <li key={i}>
            <Reveal as="a" delay={i * 70} href={essay.href}
              className="group flex items-center gap-4 border-b border-[#dbdbdb] sm:gap-8"
              style={{ minHeight: "clamp(108px, 8.68vw, 150px)" }}
            >
              <span
                className="shrink-0 text-[#797979]"
                style={{ fontFamily: INTER, fontSize: fluid(22, 16), letterSpacing: "0.05em", width: "clamp(44px, 4.6vw, 80px)" }}
              >
                0{i + 1}
              </span>
              <span className="flex min-w-0 flex-1 items-center justify-between gap-6">
                <span className="flex min-w-0 flex-col gap-4">
                  <span className="uppercase text-[#797979]" style={{ fontFamily: INTER, fontSize: "13px", lineHeight: "16px" }}>
                    {essay.eyebrow}
                  </span>
                  <span
                    className="text-[#323338] transition-colors duration-200 group-hover:text-[#7a5ab2]"
                    style={{ fontFamily: INTER, fontSize: fluid(38, 22), lineHeight: 1.0, letterSpacing: "-0.03em" }}
                  >
                    {essay.title}
                  </span>
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 53 37"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  className="h-auto shrink-0 text-[#323338] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:text-[#7a5ab2]"
                  style={{ width: "clamp(34px, 3vw, 53px)" }}
                >
                  <path d="M2 18.5H50M37 7l13 11.5L37 30" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
