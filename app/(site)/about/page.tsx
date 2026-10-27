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

// Two-column collage from the Figma. `src` is left empty until the real photos
// are supplied; each slot keeps its aspect ratio so the layout is final.
const GALLERY_LEFT = [
  { src: "", alt: "Shanica at an event", ratio: "805 / 566" },
  { src: "", alt: "One-on-one session", ratio: "589 / 753" },
  { src: "", alt: "Team group photo", ratio: "886 / 610" },
];
const GALLERY_RIGHT = [
  { src: "", alt: "At the Maze booth", ratio: "656 / 682" },
  { src: "", alt: "Workshop in progress", ratio: "823 / 599" },
  { src: "", alt: "Design review at the desk", ratio: "559 / 639" },
];

function Photo({ src, alt, ratio }: { src: string; alt: string; ratio: string }) {
  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden rounded-[8px] bg-[#ececec] text-[#bdbdbd]"
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="10" r="1.6" />
          <path d="m4 17 5-4 4 3 3-2 4 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

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
              <img src="/hero/shanica.png" alt="Shanica Roy" className="h-full w-full object-cover object-top" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo gallery — a two-column collage */}
      <Reveal as="section" className="mt-14 pb-20 sm:mt-20 lg:mt-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {GALLERY_LEFT.map((p, i) => (
              <Photo key={i} {...p} />
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {GALLERY_RIGHT.map((p, i) => (
              <Photo key={i} {...p} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
