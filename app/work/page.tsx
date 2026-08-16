import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
};

export default function WorkIndex() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <SectionLabel>Work — FIG. 01</SectionLabel>
      <h1 className="max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
        Full index of shipped work
      </h1>
      <p className="mt-6 max-w-lg text-ink-soft">
        {projects.length} case studies, spanning research, interaction design, and design
        systems work. Each one is measured against a real outcome, not a mood board.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
