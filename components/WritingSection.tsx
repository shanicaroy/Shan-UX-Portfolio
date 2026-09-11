import Link from "next/link";
import { homeEssays } from "@/content/writing";
import Shell from "./Shell";

/**
 * The writing section as an editorial index: heading left, rationale right,
 * then numbered hairlined rows — index, category-and-read-time eyebrow, large
 * title, and a square outlined arrow button that turns lime on hover.
 */
export default function WritingSection() {
  return (
    <Shell as="section" id="writing" className="scroll-mt-[var(--nav-height)] pt-20 lg:pt-28">
      <p className="type-eyebrow text-muted">04 / My Writing</p>

      <div className="mt-8 grid grid-cols-12 gap-y-6 lg:gap-x-8">
        <h2 className="type-section col-span-12 text-ink lg:col-span-5">
          Ideas I&rsquo;m working through
        </h2>
        <p className="col-span-12 self-end text-base leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
          For NDA-heavy work, original thinking becomes part of the evidence. These essays
          should make a specific, technically credible argument, not repeat AI headlines.
        </p>
      </div>

      <ul className="mt-12 border-t border-rule">
        {homeEssays.map((essay, i) => (
          <li key={essay.title}>
            <a
              href={essay.href}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-x-4 border-b border-rule py-7 sm:gap-x-8"
            >
              <span className="type-eyebrow self-start pt-1 text-muted tabular-nums">
                0{i + 1}
              </span>
              <span>
                <span className="type-eyebrow block text-muted">{essay.eyebrow}</span>
                <span className="mt-2 block text-xl font-medium leading-snug text-ink transition-colors duration-200 group-hover:text-accent sm:text-2xl">
                  {essay.title}
                </span>
              </span>
              <span
                aria-hidden
                className="text-lg text-muted transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent"
              >
                &rarr;
              </span>
            </a>
          </li>
        ))}
      </ul>

      <Link
        href="/writing"
        className="mt-10 inline-block text-[15px] font-medium text-ink underline-offset-4 transition-colors duration-200 hover:underline"
      >
        Read all <span aria-hidden>&rarr;</span>
      </Link>
    </Shell>
  );
}
