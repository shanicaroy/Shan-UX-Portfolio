import { projects } from "@/content/projects";
import Shell from "./Shell";
import ProjectCard from "./ProjectCard";

/**
 * Two-column project grid. Both columns begin at the same height and projects
 * alternate between them; the stagger comes entirely from covers of differing
 * aspect ratios, so each column packs to its own rhythm. Collapses to a single
 * column below `lg`.
 */
export default function WorkSection() {
  const columns: (typeof projects)[] = [
    projects.filter((_, i) => i % 2 === 0),
    projects.filter((_, i) => i % 2 === 1),
  ];

  return (
    <Shell as="section" id="work" className="scroll-mt-16 pb-32 lg:pb-44">
      <h2 className="border-t border-rule pt-6 text-[11px] uppercase tracking-label text-muted">
        Selected Work
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-24 lg:mt-20 lg:grid-cols-2">
        {columns.map((column, col) => (
          <div key={col} className="flex flex-col gap-24 lg:gap-32">
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
