// ---------------------------------------------------------------------------
// EXPERIENCE
// Taken from Shanica's resume. EY appears twice because of the June 2025
// promotion from Senior UX Designer to UX Lead. Every [X] is a placeholder for
// a verified figure — nothing here may be invented.
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  tags: string;
  description: string;
  /** Small verified metrics shown under senior roles. */
  metrics?: readonly string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "EY",
    role: "UX Lead",
    period: "2025 — Present",
    tags: "UX Leadership · Enterprise Product Design · Strategy",
    description:
      "Leading product and UX work across complex enterprise systems, connecting customer needs, product strategy, design quality, and cross-functional execution.",
    metrics: ["[X] designers", "[X] teams", "[X] stakeholders", "[X] products"],
  },
  {
    company: "EY",
    role: "Senior UX Designer",
    period: "2023 — 2025",
    tags: "Enterprise UX · Research · Product Design",
    description:
      "Designing complex enterprise experiences while partnering closely with Product, Engineering, and business stakeholders.",
  },
  {
    company: "Bhanzu",
    role: "UX Designer",
    period: "2021 — 2023",
    tags: "Product Design · 0→1 · UX",
    description:
      "Designing an end-to-end customer-facing app alongside the internal platforms behind it — admin console, communication tools, and operations dashboards.",
  },
  {
    company: "VirtuBox Infotech",
    role: "UI/UX Designer",
    period: "2021",
    tags: "UI/UX · Kiosk · SaaS",
    description:
      "Designing kiosk experiences and enterprise dashboards for a SaaS kiosk-building platform, from interactive wayfinding to the website builder console.",
  },
  {
    company: "Unschool",
    role: "Senior Design Instructor",
    period: "2019 — 2021",
    tags: "Mentorship · Teaching · Design Development",
    description:
      "Teaching and mentoring emerging designers, developing practical design judgment through critique, structured feedback, and hands-on learning.",
    metrics: ["5,000+ learners mentored"],
  },
];
