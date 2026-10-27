import type { Metadata } from "next";
import { siteConfig } from "@/content/config";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.metaDescription,
};

const SERIF = '"Times New Roman", Times, Georgia, serif';
const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const INTER = '"Inter", "Helvetica Neue", Arial, sans-serif';
const GUTTER = "min(6.83vw, 118px)";

// Exact px at the 1728 design width, scaling down proportionally below it.
const fluid = (px: number, min: number) =>
  `clamp(${min}px, ${((px / 1728) * 100).toFixed(3)}vw, ${px}px)`;

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

// Three gallery rows, two photos each — widths are the Figma's (as a % of the
// 1516px content box), so the pair fills the row with the design's gap. Each
// image is already cropped to its slot's aspect, so object-cover never shifts.
type Shot = { src: string; ratio: string; w: string; meta: string; title: string };
const GALLERY: { align: "start" | "end"; left: Shot; right: Shot }[] = [
  {
    align: "start",
    left: { src: "/about/01-vmware-portal.webp", ratio: "759 / 534", w: "50.07%", meta: "VMware - 2023", title: "Cloud Service Portal (Enterprise Saas Solution)" },
    right: { src: "/about/02-maze-booth.webp", ratio: "656 / 682", w: "43.27%", meta: "UXDX Berlin - 2023", title: "Maze Booth" },
  },
  {
    align: "end",
    left: { src: "/about/03-live-demo.webp", ratio: "589 / 753", w: "38.85%", meta: "Future Product Days - 2023", title: "Live demo design discussion" },
    right: { src: "/about/04-design-sprints.webp", ratio: "824 / 601", w: "54.35%", meta: "Bhanzu - 2023", title: "Facilitating UX Design Sprints" },
  },
  {
    align: "end",
    left: { src: "/about/05-roundtable.webp", ratio: "865 / 650", w: "57.06%", meta: "EY - 2023", title: "Roundtable discussion" },
    right: { src: "/about/06-desk.webp", ratio: "559 / 650", w: "36.87%", meta: "Bhanzu - 2023", title: "How my desk looks like" },
  },
];

const PILLARS = [
  { cat: "TALKS", impact: "15+", label: "Talks delivered", desc: "Mentoring designers across UX craft, product thinking, portfolios, career decisions, and professional growth." },
  { cat: "MENTORSHIP", impact: "5,000+", label: "people taught", desc: "Teaching design through structured programs, workshops, critique, and practical project work." },
  { cat: "COMMUNITY", impact: "49,000+", label: "LinkedIn", desc: "Building spaces where designers can learn from one another and develop stronger professional judgment." },
];

const PHILOSOPHY = [
  "My approach to design is greatly influenced by my background from earlier in my career as a front-end developer, which is to say that I leverage systems thinking wherever possible – and think about each design decision within the context of the rest of the product.",
  "I particularly excel where I can lead projects that impact multiple surfaces of the product or organization. Whether it’s helping shape product strategy, conducting research, prototyping interface, pairing directly with analysts or engineers, QAing the product, or simply iterating on feature releases: I enjoy working across the product lifecycle in whatever format is necessary for the team.",
  "I strive to create design that is backed in discovery, data, a strong understanding of technical constraints, and the priorities of the business.",
];

function Caption({ meta, title }: { meta: string; title: string }) {
  return (
    <div className="flex flex-col" style={{ marginTop: fluid(15, 12), gap: fluid(3.945, 4) }}>
      <p className="text-[#828282]" style={{ fontFamily: ROBOTO, fontSize: fluid(19.726, 13) }}>
        {meta}
      </p>
      <p
        className="font-medium text-[#42444d]"
        style={{ fontFamily: INTER, fontSize: fluid(25.644, 16), letterSpacing: "-0.03em", lineHeight: 1.1 }}
      >
        {title}
      </p>
    </div>
  );
}

function Figure({ shot, className }: { shot: Shot; className?: string }) {
  return (
    <div className={className}>
      <div className="w-full overflow-hidden bg-[#ececec]" style={{ aspectRatio: shot.ratio }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shot.src} alt={shot.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <Caption meta={shot.meta} title={shot.title} />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ paddingInline: GUTTER }}>
      {/* ─── Intro: heading, body + facts (left), workspace photo (right) ─── */}
      <section style={{ paddingTop: fluid(96, 44) }}>
        <Reveal
          as="h1"
          className="font-normal text-[#42444d]"
          style={{ fontFamily: SERIF, fontSize: fluid(70, 38), lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: fluid(34, 22) }}
        >
          About
        </Reveal>

        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[834fr_682fr] lg:gap-y-0">
          <Reveal className="order-2 lg:order-1">
            <div className="flex flex-col" style={{ gap: fluid(24, 16), maxWidth: "92.8%", fontFamily: SERIF }}>
              {BODY.map((p, i) => (
                <p key={i} className="max-w-none text-[#464646]" style={{ fontSize: fluid(26, 17), lineHeight: 1.42 }}>
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-10 lg:mt-[min(1.97vw,34px)]" style={{ fontFamily: ROBOTO, maxWidth: "98.08%" }}>
              {FACTS.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-0 sm:py-0 ${
                    i < FACTS.length - 1 ? "border-b-[0.5px] border-[#bfbdbd]" : ""
                  }`}
                  style={{ minHeight: "min(4.05vw, 70px)" }}
                >
                  <dt
                    className="shrink-0 text-[#6e707b]"
                    style={{ width: "min(11.69vw, 202px)", fontSize: fluid(22, 14), letterSpacing: "-0.02em" }}
                  >
                    {f.label}
                  </dt>
                  <dd className="text-[#4f4f4f]" style={{ fontSize: fluid(24, 15), letterSpacing: "-0.02em" }}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={90} className="order-1 lg:order-2 lg:justify-self-end">
            <div className="w-full overflow-hidden bg-[#ededed]" style={{ aspectRatio: "682 / 724" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about/intro.webp" alt="Shanica Roy at her desk" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Photo gallery — three rows of two ─── */}
      <section className="flex flex-col" style={{ marginTop: fluid(130, 64), gap: fluid(64, 44) }}>
        {GALLERY.map((row, i) => (
          <Reveal
            key={i}
            className={`flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0 ${
              row.align === "end" ? "lg:items-end" : "lg:items-start"
            }`}
          >
            <Figure shot={row.left} className="w-full" />
            <Figure shot={row.right} className="w-full" />
          </Reveal>
        ))}
      </section>

      {/* ─── People Leadership ─── */}
      <section style={{ marginTop: fluid(97, 60) }}>
        <Reveal>
          <h2
            className="text-[#1d1d1f]"
            style={{ fontFamily: SERIF, fontWeight: 400, fontSize: fluid(56.941, 30), lineHeight: 1.16, letterSpacing: "-0.01em" }}
          >
            People Leadership
          </h2>
          <p
            className="text-[#808080]"
            style={{ fontFamily: INTER, fontSize: fluid(20.499, 15), lineHeight: 1.556, marginTop: fluid(16, 12), maxWidth: fluid(911, 560) }}
          >
            Design leadership compounds when knowledge, judgment, and confidence move through a team.
          </p>
        </Reveal>

        <Reveal
          delay={90}
          className="mt-10 flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-0 lg:mt-[min(2.6vw,45px)]"
          style={{ fontFamily: INTER }}
        >
          {PILLARS.map((p) => (
            <div key={p.cat} className="sm:w-[30.05%] sm:flex-none">
              <p className="uppercase text-[#808080]" style={{ fontSize: fluid(13.666, 11), letterSpacing: "0.02em" }}>
                {p.cat}
              </p>
              <p
                className="font-semibold text-[#1d1d1f]"
                style={{ fontSize: fluid(45.553, 30), lineHeight: 1.2, marginTop: fluid(15, 10) }}
              >
                {p.impact}
              </p>
              <p className="text-[#808080]" style={{ fontSize: fluid(15.944, 12.5), marginTop: fluid(6, 5) }}>
                {p.label}
              </p>
              <p className="text-[#808080]" style={{ fontSize: fluid(17.082, 13), lineHeight: 1.6, marginTop: fluid(18, 14) }}>
                {p.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ─── My Design Philosophy ─── */}
      <section style={{ marginTop: fluid(110, 64), paddingBottom: fluid(160, 80) }}>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[808fr_702fr] lg:gap-y-0">
          <Reveal className="order-2 lg:order-1">
            <h2
              className="text-[#1d1d1f]"
              style={{ fontFamily: SERIF, fontWeight: 400, fontSize: fluid(56.941, 30), lineHeight: 1.16, letterSpacing: "-0.01em" }}
            >
              My Design Philosophy
            </h2>
            <div className="flex flex-col" style={{ gap: fluid(22, 16), marginTop: fluid(40, 24), maxWidth: "93.4%", fontFamily: SERIF }}>
              {PHILOSOPHY.map((p, i) => (
                <p key={i} className="text-[#464646]" style={{ fontSize: fluid(26, 17), lineHeight: 1.42 }}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90} className="order-1 lg:order-2 lg:justify-self-end">
            <div className="w-full overflow-hidden bg-[#ededed]" style={{ aspectRatio: "702 / 677" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about/philosophy.webp" alt="Shanica Roy working" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
