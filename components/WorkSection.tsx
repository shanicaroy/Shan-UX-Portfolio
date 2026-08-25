import { projects } from "@/content/projects";
import Shell from "./Shell";
import ProjectCard from "./ProjectCard";

/**
 * The published work layout: two columns starting level, projects alternating
 * between them, staggered by their covers' differing aspect ratios. No visible
 * section heading — the covers carry the section.
 */
const GRID_ORDER = [
  "vmware-cloud-provider-portal",
  "customer-lifecycle-management",
  "virtubox-kiosk",
  "dell-portal-redesign",
];

export default function WorkSection() {
  const ordered = GRID_ORDER.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);
  const columns = [ordered.filter((_, i) => i % 2 === 0), ordered.filter((_, i) => i % 2 === 1)];

  return (
    <Shell as="section" id="work" className="scroll-mt-16 pt-20 lg:pt-28">
      <h2 className="sr-only">Selected Work</h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        {columns.map((column, col) => (
          <div key={col} className="flex flex-col gap-10 lg:gap-12">
            {column.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
        ))}
      </div>
    </Shell>
  );
}
