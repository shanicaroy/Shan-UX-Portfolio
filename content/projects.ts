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
  /** Fully locked: card is not clickable and the case page is unreachable. */
  locked?: boolean;
  /** Editorial rhythm: large rows breathe, medium rows sit beside their text. */
  size: "large" | "medium";
  cta: string;
  image: string;
  video?: string;
  photo?: string;
  aspect: "16/9" | "3/2" | "4/3" | "1/1";
  /**
   * Real case-study copy for the scaffolded template. When present the
   * template renders these sections instead of its awaiting-write-up
   * placeholders. Nothing here may be invented.
   */
  sections?: readonly { heading: string; body: readonly string[] }[];
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
    locked: true,
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
      { label: "Role", value: "Design Lead" },
      { label: "Team", value: "[X] designers" },
      { label: "Scope", value: "IVR routing, CLM ticket workspace, role-based dashboards" },
      {
        label: "My contribution",
        value:
          "Set the design direction for the internal lifecycle tooling: IVR routing, ticket workspace, batch allocation, dashboards.",
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
  {
    // Placeholder case study — Shanica fills in the real content.
    slug: "uxpective",
    title: "UXPective",
    positioning: "[Company or type, to fill]",
    description: "[One-line descriptor, to fill]",
    details: [
      { label: "Role", value: "[X]" },
      { label: "Team", value: "[X]" },
      { label: "Scope", value: "[X]" },
      { label: "My contribution", value: "[X]" },
      { label: "My leadership", value: "[X]" },
      { label: "Outcome", value: "[X] · [verified result]" },
    ],
    size: "medium",
    cta: "Read case study",
    image: "/projects/project-04.jpg",
    aspect: "3/2",
  },
  {
    // Seeded from the Applied AI section so the page is not empty; the copy
    // below is the documented product/evaluation contract, not results.
    slug: "case-check",
    title: "Applied AI: Case Check",
    positioning: "Applied AI · Portfolio-review agent",
    description:
      "A narrow portfolio-review agent that makes its plan, evidence, uncertainty, and limits visible.",
    details: [
      { label: "Status", value: "Build in progress" },
      { label: "Product contract", value: "v0.1" },
      { label: "Evaluation protocol", value: "Locked" },
      { label: "Results", value: "Not yet published" },
    ],
    size: "medium",
    cta: "Read the study",
    image: "/projects/project-06.jpg",
    aspect: "3/2",
    sections: [
      {
        heading: "What it is",
        body: [
          "Case Check is a narrow portfolio-review agent that makes its plan, evidence, uncertainty, and limits visible. This page shows the decisions already documented, not invented performance.",
          "The build is in progress. The product contract is at v0.1, the evaluation protocol is locked, and results are not yet published.",
        ],
      },
      {
        heading: "The product contract",
        body: [
          "Find the weakest part of one case study, and the report says what it could not judge.",
          "It is for junior-to-mid UX designers preparing a portfolio. It is not for hiring decisions, deep visual critique, or accessibility and legal audits. The source of judgment is the UXPective case-study storytelling framework and my own review criteria.",
        ],
      },
      {
        heading: "The six-step review flow",
        body: [
          "Fetch reads the source. Classify resolves ambiguity. Plan shows checks first. Run checks combines text and vision. Self-verify rechecks every claim. Report returns one weakest part and one fix the designer can make.",
          "The final output is structured into weakest part, why it matters, one concrete fix, confidence, and what could not be judged. Secondary notes remain visibly secondary.",
        ],
      },
      {
        heading: "The evaluation",
        body: [
          "The evaluation is defined before the first score: 40 permitted cases and problem inputs, 7 scored dimensions at 0 to 2 points each with 14 maximum, and 7 hard failures logged separately from the score. The evaluation has not been published.",
          "No percentage will appear until the full run is graded. The write-up will include the distribution, disagreements, hard failures, the worst examples, the design change they caused, and the re-run.",
        ],
      },
      {
        heading: "Current limit",
        body: [
          "Case Check evaluates the narrative of a case study. It does not decide whether someone is hireable, and its first version will not claim deep visual-craft judgment. Full craft evaluation is deliberately deferred.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
