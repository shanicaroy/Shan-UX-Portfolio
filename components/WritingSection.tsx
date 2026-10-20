import { homeEssays } from "@/content/writing";
import Shell from "./Shell";

const SERIF = '"Times New Roman", Times, Georgia, serif';
const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const INTER = '"Inter", "Helvetica Neue", Arial, sans-serif';

/**
 * Writing section, matching the Figma: the "Writing my mind" serif heading, a
 * rationale line, then the essay index — a number, a category eyebrow, and a
 * large Times title that turns purple on hover, with a long arrow on the right.
 */
export default function WritingSection() {
  return (
    <Shell as="section" id="writing" className="scroll-mt-[var(--nav-height)] pb-20 pt-8 lg:pt-10">
      <h2
        className="font-serif font-normal text-[#42444d]"
        style={{ fontFamily: SERIF, fontSize: "clamp(34px, 4.17vw, 72px)", lineHeight: 0.94, letterSpacing: "-0.04em" }}
      >
        Writing my mind
      </h2>
      <p
        className="mt-6 max-w-[1295px] text-[#171714]"
        style={{ fontFamily: ROBOTO, fontSize: "clamp(17px, 1.44vw, 24.794px)", lineHeight: 1.41 }}
      >
        If I weren&rsquo;t a designer, I would have been a writer. Writing is an essential part of my
        work in general. Most of my client work is under NDA, these essays are where my thinking goes
        on the record.
      </p>

      <ul className="mt-6">
        {homeEssays.map((essay, i) => (
          <li key={essay.title}>
            <a
              href={essay.href}
              className={`group flex items-center gap-4 sm:gap-8 ${i > 0 ? "border-t border-[#e2e2e2]" : ""}`}
              style={{ minHeight: "clamp(104px, 8.3vw, 144px)" }}
            >
              <span
                className="shrink-0 text-[#797979]"
                style={{ fontFamily: INTER, fontSize: "clamp(16px, 1.27vw, 22px)", letterSpacing: "0.05em", width: "clamp(44px, 4.6vw, 80px)" }}
              >
                0{i + 1}
              </span>
              <span className="flex min-w-0 flex-1 items-center justify-between gap-6">
                <span className="flex min-w-0 flex-col gap-4">
                  <span
                    className="uppercase text-[#797979]"
                    style={{ fontFamily: INTER, fontSize: "13px", lineHeight: "16px" }}
                  >
                    {essay.eyebrow}
                  </span>
                  <span
                    className="text-[#202022] transition-colors duration-200 group-hover:text-[#7a5ab2]"
                    style={{ fontFamily: SERIF, fontSize: "clamp(26px, 3.01vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
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
                  className="h-auto shrink-0 text-[#202022] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:text-[#7a5ab2]"
                  style={{ width: "clamp(34px, 3vw, 53px)" }}
                >
                  <path d="M2 18.5H50M37 7l13 11.5L37 30" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
