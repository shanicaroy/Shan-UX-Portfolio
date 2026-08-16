// ---------------------------------------------------------------------------
// PROJECTS — names and metadata taken from shans-ux-folio.webflow.io.
// Case-study body copy is still PLACEHOLDER; replace `sections` and `metrics`
// with the real write-ups. Covers are generated SVGs (components/
// CaseStudyCover.tsx) until real artwork is dropped in.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  /** Full case-study heading, used on the grid and the detail page. */
  title: string;
  /** Client / product line shown under the title. */
  client: string;
  /** Discipline chip, e.g. "UX Design & Research". */
  discipline: string;
  status: "Shipped" | "Concept" | "Ongoing";
  /** Cover aspect ratio — varying these staggers the grid. */
  aspect: "16/9" | "3/2" | "4/3" | "1/1";
  summary: string;
  role: string;
  duration: string;
  year: string;
  tags: string[];
  cover: "flow" | "grid" | "signal";
  metrics: { label: string; value: string }[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "uniskai-finops-platform",
    title: "AI based Multi Cloud FinOps & DevOps SaaS Platform",
    client: "Uniskai by Profisea Labs",
    discipline: "UX Design & Research",
    status: "Shipped",
    aspect: "4/3",
    year: "2021 – 2023",
    role: "UX Designer",
    duration: "2 years",
    tags: ["SaaS", "FinOps", "Research"],
    cover: "grid",
    summary:
      "A multi-cloud cost and operations platform that turns sprawling AWS, Azure and GCP billing data into decisions a DevOps team can act on.",
    metrics: [
      { label: "Cloud providers unified", value: "3" },
      { label: "Time on platform", value: "2 years" },
      { label: "Role", value: "UX + Research" },
    ],
    sections: [
      {
        heading: "The constraint",
        body: [
          "PLACEHOLDER — replace with the real write-up. Describe the problem Uniskai was solving and the constraint that shaped the design.",
        ],
      },
      {
        heading: "Process",
        body: [
          "PLACEHOLDER — how you approached the research and design work.",
        ],
      },
      {
        heading: "Outcome",
        body: ["PLACEHOLDER — what shipped and what changed as a result."],
      },
    ],
  },
  {
    slug: "virtubox-kiosk",
    title: "VirtuBox Kiosk Design",
    client: "Uniskai by Profisea Labs",
    discipline: "PX Design",
    status: "Shipped",
    aspect: "3/2",
    year: "2021 – 2023",
    role: "Product Experience Designer",
    duration: "—",
    tags: ["Kiosk", "PX Design", "Hardware"],
    cover: "flow",
    summary:
      "A self-service kiosk experience designed for first-time users — where every interaction has to work without a manual, a login, or a second attempt.",
    metrics: [
      { label: "Surface", value: "Kiosk" },
      { label: "Discipline", value: "PX Design" },
      { label: "Year", value: "2021 – 2023" },
    ],
    sections: [
      {
        heading: "The constraint",
        body: [
          "PLACEHOLDER — replace with the real write-up for VirtuBox.",
        ],
      },
      {
        heading: "Process",
        body: ["PLACEHOLDER — your approach to the kiosk design."],
      },
      {
        heading: "Outcome",
        body: ["PLACEHOLDER — what shipped and how it performed."],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
