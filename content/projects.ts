// ---------------------------------------------------------------------------
// PROJECTS
// Titles, clients, disciplines and years are real — taken from the existing
// Webflow portfolio. Case-study body copy is PLACEHOLDER until the real
// write-ups are supplied.
//
// `layout` drives the editorial composition on the homepage:
//   featured  — full width, widest crop, opens the section
//   standard  — 8 of 12 columns, left-aligned
//   offset    — 8 of 12 columns, pushed right
//   wide      — full width, cinematic crop
//
// `image` points at /public/projects/*. When a file is missing the card falls
// back to a clearly-marked placeholder rather than inventing artwork.
// ---------------------------------------------------------------------------

export type ProjectLayout = "featured" | "standard" | "offset" | "wide";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  client?: string;
  image: string;
  layout: ProjectLayout;
};

export const projects: Project[] = [
  {
    slug: "multi-cloud-finops-platform",
    title: "AI based Multi Cloud FinOps & DevOps SaaS Platform",
    description:
      "Turning sprawling multi-cloud billing data into decisions a DevOps team can act on.",
    category: "Product Design · UX Research",
    year: "2023",
    client: "Uniskai by Profisea Labs",
    image: "/projects/multi-cloud-finops-platform.jpg",
    layout: "featured",
  },
  {
    slug: "customer-lifecycle-management",
    title: "Customer Lifecycle Management SaaS Web Tool",
    description:
      "One view of every account, replacing three dashboards the team was stitching together by hand.",
    category: "UX Design · Research",
    year: "2023",
    client: "Bhanzu",
    image: "/projects/customer-lifecycle-management.jpg",
    layout: "standard",
  },
  {
    slug: "virtubox-kiosk",
    title: "VirtuBox Kiosk Design",
    description:
      "A self-service kiosk for first-time users — no manual, no login, no second attempt.",
    category: "PX Design",
    year: "2022",
    client: "Profisea Labs",
    image: "/projects/virtubox-kiosk.jpg",
    layout: "offset",
  },
  {
    slug: "fintech-mobile-app",
    title: "Fintech Mobile App Design",
    description:
      "Research-led design for a fintech app, where trust matters more than any single screen.",
    category: "UX Research",
    year: "2022",
    client: "Profisea Labs",
    image: "/projects/fintech-mobile-app.jpg",
    layout: "wide",
  },
  {
    slug: "design-system-1-0",
    title: "Design System 1.0",
    description:
      "A shared component library built to be the source of truth, not one more file teams quietly fork.",
    category: "Design Systems",
    year: "2022",
    client: "Profisea Labs",
    image: "/projects/design-system-1-0.jpg",
    layout: "standard",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
