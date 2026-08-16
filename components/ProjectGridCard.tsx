import Link from "next/link";
import type { Project } from "@/content/projects";
import CaseStudyCover from "./CaseStudyCover";

const ASPECT_CLASS: Record<Project["aspect"], string> = {
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

export default function ProjectGridCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div
        className={`w-full overflow-hidden rounded-xl border border-white/5 ${ASPECT_CLASS[project.aspect]}`}
      >
        <CaseStudyCover
          variant={project.cover}
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-6">
        <h2 className="max-w-2xl font-display text-2xl font-medium leading-[1.15] tracking-tight text-chalk transition-colors group-hover:text-neon sm:text-3xl lg:text-4xl">
          {project.title}
        </h2>

        <p className="mt-3 text-base text-ash">
          {project.client} ({project.year})
        </p>

        <span className="mt-5 inline-block rounded-lg border border-neon px-4 py-2 text-sm text-chalk shadow-neon-sm transition-shadow group-hover:shadow-neon">
          {project.discipline}
        </span>

        <span className="mt-5 flex items-center justify-between rounded-lg bg-surface px-5 py-4 text-base text-chalk transition-colors group-hover:bg-surface-hi">
          View Case Study
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
