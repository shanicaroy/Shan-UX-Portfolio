import { projects } from "@/content/projects";
import Shell from "./Shell";
import ProjectCard from "./ProjectCard";

/** Display order from the redesign brief — six projects, two even columns. */
const GRID_ORDER = [
  "vmware-cloud-provider-portal",
  "customer-lifecycle-management",
  "virtubox-kiosk",
  "dell-portal-redesign",
  "uxpective",
  "case-check",
];

export default function WorkSection() {
  const ordered = GRID_ORDER.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <Shell as="section" id="work" className="scroll-mt-[var(--nav-height)] pt-20 lg:pt-28">
      <p className="type-eyebrow text-muted">01 / Selected Work</p>
      <h2 className="sr-only">Selected Work</h2>

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-2 lg:gap-y-16">
        {ordered.map((project) => (
          <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />
        ))}
      </div>
    </Shell>
  );
}
