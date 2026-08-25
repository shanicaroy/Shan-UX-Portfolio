// ---------------------------------------------------------------------------
// EXPERIENCE
// Taken from Shanica's resume. EY appears twice because of the June 2025
// promotion from Senior UX Designer to UX Lead. Every [X] and [bracketed
// line] is a placeholder for verified content — nothing here may be invented.
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  tags: string;
  description: string;
  /** Only used when accurate — e.g. the EY promotion. */
  note?: string;
  /** Labelled facets showing the design × product × leadership intersection. */
  facets?: readonly { label: string; value: string }[];
  /** Compact scope line under senior roles. */
  scopeLine?: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "EY",
    role: "UX Lead",
    period: "2025 — Present",
    tags: "UX Leadership · Enterprise Product Design · Strategy",
    description:
      "Leading product and UX work across complex enterprise systems, connecting customer needs, product strategy, design quality, and cross-functional execution.",
    facets: [
      { label: "Design", value: "[Hands-on UX responsibilities]" },
      { label: "Product", value: "[Product strategy / discovery / roadmap influence]" },
      { label: "Leadership", value: "[Team leadership / mentorship / stakeholder leadership]" },
      { label: "Scale", value: "[Systems / processes / design standards]" },
    ],
    scopeLine: "[X] designers · [X] teams · [X] products · [X] stakeholders",
  },
  {
    company: "EY",
    role: "Senior UX Designer",
    period: "2023 — 2025",
    tags: "Enterprise UX · Research · Product Design",
    description:
      "Designing complex enterprise experiences for clients including VMware, P44 Logistics, and Dell, while partnering closely with Product, Engineering, and business stakeholders.",
    note: "Progressed from hands-on enterprise UX execution into broader product and design leadership.",
    facets: [
      { label: "Design", value: "[X]" },
      { label: "Product", value: "[X]" },
      { label: "Influence", value: "[X]" },
    ],
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
      "Developed emerging designers through structured teaching, critique, feedback, and practical project work.",
    facets: [{ label: "Teaching", value: "5,000+ people taught and mentored" }],
  },
];
