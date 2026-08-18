// ---------------------------------------------------------------------------
// PROJECTS
// Titles, clients, disciplines and years are real — taken from the existing
// portfolio. Case-study body copy is PLACEHOLDER until real write-ups exist.
//
// `image` points at /public/projects/*. Until those files are added, a designed
// canvas stands in — the layout does not change when real images land, so
// dropping the files in is the only step required.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  company?: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "multi-cloud-finops-platform",
    title: "AI based Multi Cloud FinOps & DevOps SaaS Platform",
    description:
      "Turning sprawling multi-cloud billing data into decisions a DevOps team can act on.",
    category: "Product Design · UX Research",
    year: "2023",
    company: "Uniskai by Profisea Labs",
    image: "/projects/project-01.jpg",
  },
  {
    slug: "customer-lifecycle-management",
    title: "Customer Lifecycle Management SaaS Web Tool",
    description:
      "One view of every account, replacing three dashboards the team was stitching together by hand.",
    category: "UX Design · Research",
    year: "2023",
    company: "Bhanzu",
    image: "/projects/project-02.jpg",
  },
  {
    slug: "virtubox-kiosk",
    title: "VirtuBox Kiosk Design",
    description:
      "A self-service kiosk for first-time users — no manual, no login, no second attempt.",
    category: "PX Design",
    year: "2022",
    company: "Profisea Labs",
    image: "/projects/project-03.jpg",
  },
  {
    slug: "fintech-mobile-app",
    title: "Fintech Mobile App Design",
    description:
      "Research-led design for a fintech app, where trust matters more than any single screen.",
    category: "UX Research",
    year: "2022",
    company: "Profisea Labs",
    image: "/projects/project-04.jpg",
  },
  {
    slug: "design-system-1-0",
    title: "Design System 1.0",
    description:
      "A shared component library built to be the source of truth, not one more file teams quietly fork.",
    category: "Design Systems",
    year: "2022",
    company: "Profisea Labs",
    image: "/projects/project-05.jpg",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
