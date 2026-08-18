import { projects } from "@/content/projects";
import Shell from "./Shell";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <Shell as="section" id="work" className="scroll-mt-16 pb-32 lg:pb-44">
      <h2 className="border-t border-rule pt-6 text-[11px] uppercase tracking-label text-muted">
        Selected Work
      </h2>

      <div className="mt-16 flex flex-col gap-32 lg:mt-20 lg:gap-44">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Shell>
  );
}
