import type { Metadata } from "next";
import { siteConfig } from "@/content/config";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.metaDescription,
};

const SERIF = '"Times New Roman", Times, Georgia, serif';
const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const GUTTER = "min(6.83vw, 118px)";
const fluid = (px: number, min: number) => `clamp(${min}px, ${((px / 1728) * 100).toFixed(3)}vw, ${px}px)`;

const BODY = [
  "I am a lead product designer based in Dubai. I started my career in visual design, moved into UI/UX, and now I find myself exploring what it means to design experiences where AI agents act on our behalf. Through these shifts, “product designer” has felt like the most natural description of what I do.",
  "Much of my experience has been in large enterprise environments, including work at EY on cloud platforms for VMware, logistics tools for Dell, and support experiences for Oracle. Working in these firms taught me to consider business priorities, technical constraints, and human needs together, and to make thoughtful decisions when they compete.",
  "My interest in psychology and neuroscience keeps me curious about how people understand information, make decisions, and develop trust. As the work changes, I keep revisiting my assumptions, sharpening my craft, and building things that challenge what I know.",
];

const FACTS = [
  { label: "Currently", value: "UX Design Lead, EY" },
  { label: "Previously", value: "Senior UX Designer, EY" },
  { label: "Expertise", value: "Enterprise SaaS, design systems and AI experiences" },
  { label: "Based in", value: "Dubai" },
];

export default function AboutPage() {
  return (
    <div style={{ paddingInline: GUTTER }}>
      {/* Intro: heading + body + facts on the left, photo on the right */}
      <section className="pt-10 sm:pt-14 lg:pt-16">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)] lg:gap-x-[min(5vw,86px)]">
          <Reveal className="order-2 lg:order-1">
            <h1
              className="font-normal text-[#42444d]"
              style={{ fontFamily: SERIF, fontSize: fluid(56, 34), lineHeight: 1.0, letterSpacing: "-0.02em" }}
            >
              About
            </h1>

            <div className="mt-7 flex flex-col gap-5" style={{ fontFamily: SERIF }}>
              {BODY.map((p, i) => (
                <p key={i} className="text-[#464646]" style={{ fontSize: fluid(26, 18), lineHeight: 1.42 }}>
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-10" style={{ fontFamily: ROBOTO }}>
              {FACTS.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-8 sm:py-0 sm:h-[70px] ${
                    i < FACTS.length - 1 ? "border-b-[0.5px] border-[#bfbdbd]" : ""
                  }`}
                >
                  <dt
                    className="shrink-0 text-[#6e707b] sm:w-[190px]"
                    style={{ fontSize: fluid(22, 15), letterSpacing: "-0.02em" }}
                  >
                    {f.label}
                  </dt>
                  <dd className="text-[#4f4f4f]" style={{ fontSize: fluid(24, 16), letterSpacing: "-0.02em" }}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={90} className="order-1 lg:order-2">
            {/* Workspace photo. Placeholder stand-in until the final asset is supplied. */}
            <div
              className="w-full overflow-hidden rounded-[2px] bg-[#ededed]"
              style={{ aspectRatio: "682 / 732" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero/shanica.png"
                alt="Shanica Roy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* IN Perspective — the podcast */}
      <Reveal as="section" className="mt-16 border-t border-[#ededed] pt-12 sm:mt-20 lg:mt-24 lg:pt-16">
        <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-x-[min(5vw,80px)]">
          <div
            className="flex w-full items-center justify-center rounded-[4px] bg-[#ededed] text-[#9a9a9a]"
            style={{ aspectRatio: "1 / 1" }}
          >
            <span className="inline-flex items-center gap-2" style={{ fontFamily: ROBOTO }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
                <rect x="9" y="2.5" width="6" height="11" rx="3" />
                <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" />
              </svg>
              <span className="text-[15px]">Podcast cover art</span>
            </span>
          </div>

          <div>
            <h2
              className="font-normal text-[#1a1a1d]"
              style={{ fontFamily: SERIF, fontSize: fluid(48, 32), lineHeight: 1.04, letterSpacing: "-0.02em" }}
            >
              IN Perspective
            </h2>
            <p className="mt-3 text-[#1a1a1d]" style={{ fontFamily: ROBOTO, fontSize: fluid(20, 16) }}>
              Founder and host
            </p>
            <p
              className="mt-5 max-w-[46ch] text-[#6d6d72]"
              style={{ fontFamily: ROBOTO, fontSize: fluid(20, 16), lineHeight: 1.5 }}
            >
              Conversations with designers and product leaders about how they think, decide and build their
              careers.
            </p>
            <a
              href="#"
              className="group mt-7 inline-flex items-center gap-2 border-b-2 border-[#1a1a1d] pb-1 font-semibold text-[#1a1a1d] transition-colors hover:border-accent hover:text-accent"
              style={{ fontFamily: ROBOTO, fontSize: fluid(20, 16) }}
            >
              Listen to the podcast
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
