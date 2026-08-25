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
  /**
   * Structured facts. "My contribution" is what Shanica personally did;
   * "My leadership" is what she led, aligned, or enabled — every card must
   * carry both so craft and leadership stay in balance. [X] until verified.
   */
  details: readonly { label: string; value: string }[];
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
    slug: "dell-portal-redesign",
    title: "Dell Portal Redesign",
    positioning: "Enterprise product · Information architecture",
    description:
      "Reframing a complex enterprise portal around clearer information architecture, workflows, and user decision-making.",
    details: [
      { label: "Role", value: "Senior UX Designer" },
      { label: "Team", value: "[X]" },
      { label: "Scope", value: "[X]" },
      {
        label: "My contribution",
        value:
          "User research, design, and delivery to engineering for a C2C logistics template-builder platform.",
      },
      { label: "My leadership", value: "[X]" },
      { label: "Outcome", value: "[X] · [verified result]" },
    ],
    confidential: true,
    confidentialLabel: "Confidential · Enterprise Product",
    size: "medium",
    cta: "View confidential case study",
    image: "/projects/project-05.jpg",
    video: "/projects/dell.mp4",
    aspect: "4/3",
  },
  {
    slug: "vmware-cloud-provider-portal",
    title: "VMware Cloud Provider Portal",
    positioning: "Enterprise · SaaS · Cloud",
    description:
      "Leading UX across a complex cloud platform where multiple users, workflows, and technical constraints had to work as one coherent experience.",
    details: [
      { label: "Role", value: "Product / UX Designer" },
      { label: "Team", value: "[X]" },
      { label: "Scope", value: "Cloud Provider portal + connected service portals" },
      {
        label: "My contribution",
        value:
          "Platform research, portal redesign in Clarity, a composed component for three-level drill-down, responsive cost-summary design.",
      },
      {
        label: "My leadership",
        value:
          "Aligned engineering on composing from existing Clarity parts instead of a custom build; held the quality bar at minimum widths.",
      },
      { label: "Outcome", value: "[X] · [verified result]" },
    ],
    size: "large",
    cta: "Read case study",
    image: "/projects/project-01.jpg",
    video: "/projects/vmware.mp4",
    aspect: "16/9",
  },
  {
    slug: "virtubox-kiosk",
    title: "VirtuBox Kiosk Design",
    positioning: "0→1 · Service Experience",
    description:
      "Designing a physical-digital experience where usability, operational constraints, business requirements, and real-world behavior had to converge.",
    details: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Team", value: "[X]" },
      {
        label: "My contribution",
        value:
          "Designed an interactive shopping kiosk and enterprise dashboard solutions for a SaaS kiosk-building platform.",
      },
      { label: "My leadership", value: "[X]" },
      { label: "Outcome", value: "[X] · [verified result]" },
    ],
    size: "medium",
    cta: "Read case study",
    image: "/projects/project-03.jpg",
    video: "/projects/kiosk.mp4",
    aspect: "4/3",
  },
  {
    slug: "customer-lifecycle-management",
    title: "Customer Lifecycle Management SaaS Web Tool",
    positioning: "Enterprise workflow · UX · Systems",
    description:
      "A complex enterprise SaaS experience involving multiple users, workflows, business rules, and operational constraints.",
    details: [
      { label: "Role", value: "UX Designer" },
      { label: "Team", value: "[X]" },
      { label: "Scope", value: "[X]" },
      {
        label: "My contribution",
        value:
          "Designed the internal lifecycle tooling end to end: admin console, communication platform, batch allocation, dashboards.",
      },
      { label: "My leadership", value: "[X]" },
      { label: "Outcome", value: "[X] · [verified result]" },
    ],
    confidential: true,
    confidentialLabel: "Confidential · Enterprise SaaS",
    size: "large",
    cta: "View confidential case study",
    image: "/projects/project-02.jpg",
    video: "/projects/clm.mp4",
    aspect: "3/2",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
