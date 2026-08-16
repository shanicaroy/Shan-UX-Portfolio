import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: `UX in Action — ${site.fullName}`,
};

export default function WorkIndex() {
  return (
    <section className="px-6 pb-32 pt-20 sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-6xl px-0 sm:px-2">
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.15] tracking-tight text-chalk sm:text-6xl">
          UX in <span className="neon-glow">Action</span>
        </h1>
        <p className="mt-6 max-w-lg text-ash">
          {projects.length} case {projects.length === 1 ? "study" : "studies"} spanning research,
          interaction design, and product experience work.
        </p>
      </div>

      <div className="mt-20">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
