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
  /**
   * Cover crop. The two columns start level, so varying these is what makes
   * the grid stagger — keep a mix of tall and wide when adding projects.
   */
  aspect: "16/9" | "3/2" | "4/3" | "1/1";
  /** NDA work: rendered as a non-clickable card with a lock, no case study. */
  locked?: boolean;
  /** Optional looping cover video; when set it replaces the cover art. */
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "vmware-cloud-provider-portal",
    title: "VMware Cloud Provider Portal",
    description:
      "Redesigning VMware's Cloud Provider purchasing portals in Clarity — understanding the platform before touching a screen.",
    category: "Product Design · Enterprise Cloud",
    year: "2023",
    company: "VMware",
    image: "/projects/project-01.jpg",
    video: "/projects/vmware.mp4",
    aspect: "16/9",
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
    aspect: "3/2",
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
    aspect: "4/3",
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
    aspect: "16/9",
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
    aspect: "3/2",
  },
  {
    slug: "ey-client-work",
    title: "EY & EY Client Work",
    description: "A combined body of work for EY and EY clients — under NDA.",
    category: "Client Engagements",
    year: "Present",
    company: "EY",
    image: "/projects/project-06.jpg",
    aspect: "3/2",
    locked: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
