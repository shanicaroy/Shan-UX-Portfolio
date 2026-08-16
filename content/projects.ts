// ---------------------------------------------------------------------------
// PROJECTS — names, clients and disciplines taken from
// shans-ux-folio.webflow.io. Case-study body copy (`sections`) and `metrics`
// are still PLACEHOLDER; replace with the real write-ups. Covers are generated
// SVGs (components/CaseStudyCover.tsx) until real artwork is dropped in.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  /** Full case-study heading, used on the grid and the detail page. */
  title: string;
  /** Client / product line shown under the title. */
  client: string;
  /** Discipline chip, e.g. "UX Design & Research". */
  discipline: string;
  /** Cover aspect ratio — varying these staggers the grid. */
  aspect: "16/9" | "3/2" | "4/3" | "1/1";
  summary: string;
  role: string;
  year: string;
  tags: string[];
  cover: "flow" | "grid" | "signal";
  metrics: { label: string; value: string }[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

const placeholderSections = (name: string) => [
  {
    heading: "The constraint",
    body: [`PLACEHOLDER — the problem ${name} set out to solve, and the constraint that shaped the design.`],
  },
  {
    heading: "Process",
    body: ["PLACEHOLDER — how you approached the research and design work."],
  },
  {
    heading: "Outcome",
    body: ["PLACEHOLDER — what shipped, and what changed as a result."],
  },
];

export const projects: Project[] = [
  {
    slug: "uniskai-finops-platform",
    title: "AI based Multi Cloud FinOps & DevOps SaaS Platform",
    client: "Uniskai by Profisea Labs",
    discipline: "UX Design & Research",
    aspect: "4/3",
    year: "2021 – 2023",
    role: "UX Design & Research",
    tags: ["SaaS", "FinOps", "Research"],
    cover: "grid",
    summary:
      "A multi-cloud cost and operations platform that turns sprawling AWS, Azure and GCP billing data into decisions a DevOps team can act on.",
    metrics: [
      { label: "Client", value: "Profisea Labs" },
      { label: "Discipline", value: "UX + Research" },
    ],
    sections: placeholderSections("Uniskai"),
  },
  {
    slug: "virtubox-kiosk",
    title: "VirtuBox Kiosk Design",
    client: "Uniskai by Profisea Labs",
    discipline: "PX Design",
    aspect: "3/2",
    year: "2021 – 2023",
    role: "PX Design",
    tags: ["Kiosk", "PX Design", "Hardware"],
    cover: "flow",
    summary:
      "A self-service kiosk experience designed for first-time users — where every interaction has to work without a manual, a login, or a second attempt.",
    metrics: [
      { label: "Surface", value: "Kiosk" },
      { label: "Discipline", value: "PX Design" },
    ],
    sections: placeholderSections("VirtuBox"),
  },
  {
    slug: "customer-lifecycle-management",
    title: "Customer Lifecycle Management SaaS Web Tool",
    client: "Bhanzu",
    discipline: "UX Design & Research",
    aspect: "16/9",
    year: "2021 – 2023",
    role: "UX Design & Research",
    tags: ["SaaS", "CRM", "Research"],
    cover: "signal",
    summary:
      "A web tool for managing the full customer lifecycle — built so the team could see where every account stood without stitching together three dashboards.",
    metrics: [
      { label: "Client", value: "Bhanzu" },
      { label: "Discipline", value: "UX + Research" },
    ],
    sections: placeholderSections("the Bhanzu CLM tool"),
  },
  {
    slug: "fintech-mobile-app",
    title: "Fintech Mobile App Design",
    client: "Uniskai by Profisea Labs",
    discipline: "UX Research",
    aspect: "1/1",
    year: "2021 – 2023",
    role: "UX Research",
    tags: ["Fintech", "Mobile", "Research"],
    cover: "flow",
    summary:
      "Research-led design for a fintech mobile app, where trust and clarity matter more than any individual screen.",
    metrics: [
      { label: "Surface", value: "Mobile" },
      { label: "Discipline", value: "UX Research" },
    ],
    sections: placeholderSections("the fintech app"),
  },
  {
    slug: "design-system-1-0",
    title: "Design System 1.0",
    client: "Uniskai by Profisea Labs",
    discipline: "Design System Design",
    aspect: "3/2",
    year: "2021 – 2023",
    role: "Design System Design",
    tags: ["Design Systems", "Components", "Documentation"],
    cover: "grid",
    summary:
      "The first version of a shared component library — built to be the source of truth rather than one more file teams quietly fork.",
    metrics: [
      { label: "Version", value: "1.0" },
      { label: "Discipline", value: "Design Systems" },
    ],
    sections: placeholderSections("Design System 1.0"),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
