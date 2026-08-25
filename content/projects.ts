// ---------------------------------------------------------------------------
// PROJECTS
// Titles, clients, and roles are real. Every [X] is a placeholder for a
// verified figure — nothing here may be invented. Confidential projects are
// presented as case-study previews (sanitized screens and abstracted
// diagrams), never as locked cards.
//
// `image` points at /public/projects/*. `video` and `photo` are real cover
// media; when neither exists a designed canvas stands in.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  /** Positioning line under the title, e.g. "Enterprise SaaS · UX Leadership". */
  positioning: string;
  description: string;
  /** Metadata lines: role, team, timeline, scope. [X] until verified. */
  meta: readonly string[];
  /** Impact / outcome block. [X] until verified. */
  impact?: {
    label: string;
    items: readonly string[];
  };
  /** NDA work presented as a confidential preview. */
  confidential?: boolean;
  confidentialLabel?: string;
  /** Editorial rhythm: large rows breathe, medium rows sit beside their text. */
  size: "large" | "medium";
  cta: string;
  image: string;
  video?: string;
  photo?: string;
  aspect: "16/9" | "3/2" | "4/3" | "1/1";
};

export const projects: Project[] = [
  {
    slug: "vmware-cloud-provider-portal",
    title: "VMware Cloud Provider Portal",
    positioning: "Enterprise SaaS · Product Strategy · UX Leadership",
    description:
      "Leading the experience across a complex cloud platform where multiple users, workflows, and technical constraints had to work as one coherent system.",
    meta: [
      "Role: Product / UX Designer",
      "Team: [X]",
      "Timeline: 2023",
      "Scope: Cloud Provider portal + connected service portals",
    ],
    impact: {
      label: "Impact",
      items: ["[X]% — [verified outcome]", "[X] — [verified outcome]"],
    },
    size: "large",
    cta: "Read case study",
    image: "/projects/project-01.jpg",
    video: "/projects/vmware.mp4",
    aspect: "16/9",
  },
  {
    slug: "virtubox-kiosk",
    title: "VirtuBox Kiosk Design",
    positioning: "0→1 · Service Experience · Interaction Design",
    description:
      "Designing a physical-digital experience where usability, business requirements, operational constraints, and real-world behavior had to converge.",
    meta: ["Role: UI/UX Designer", "Team: [X]", "Timeline: 2021"],
    impact: {
      label: "Outcome",
      items: ["[X] — [verified outcome]"],
    },
    size: "medium",
    cta: "Read case study",
    image: "/projects/project-03.jpg",
    photo: "/projects/virtubox.svg",
    aspect: "4/3",
  },
  {
    slug: "customer-lifecycle-management",
    title: "Customer Lifecycle Management SaaS Web Tool",
    positioning: "Enterprise workflow · UX · Systems",
    description:
      "Leading UX across a complex enterprise workflow involving multiple users, business rules, and operational constraints.",
    meta: ["Role: UX Designer", "Team: [X]", "Scope: [X]", "Timeline: 2021 — 2023"],
    impact: {
      label: "Leadership scope",
      items: ["[X] designers · [X] product partners · [X] engineers · [X] stakeholders"],
    },
    confidential: true,
    confidentialLabel: "Confidential · Enterprise SaaS",
    size: "large",
    cta: "View confidential case study",
    image: "/projects/project-02.jpg",
    photo: "/projects/clm.svg",
    aspect: "3/2",
  },
  {
    slug: "dell-portal-redesign",
    title: "Dell Portal Redesign",
    positioning: "Enterprise product · Information architecture",
    description:
      "Reframing a complex enterprise portal around clearer information architecture, workflows, and user decision-making.",
    meta: ["Role: Senior UX Designer", "Team: [X]", "Scope: [X]", "Timeline: [X]"],
    impact: {
      label: "Leadership scope",
      items: ["[X] designers · [X] PMs · [X] engineers · [X] stakeholders"],
    },
    confidential: true,
    confidentialLabel: "Confidential · Enterprise Product",
    size: "medium",
    cta: "View confidential case study",
    image: "/projects/project-05.jpg",
    video: "/projects/dell.mp4",
    aspect: "4/3",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
