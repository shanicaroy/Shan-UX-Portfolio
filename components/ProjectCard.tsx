"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/content/projects";
import { siteConfig } from "@/content/config";
import ProjectCanvas from "./ProjectCanvas";

/**
 * One card component for all projects: cover on top, then name with the arrow
 * on the same row, the one-line descriptor, and the company-or-type eyebrow.
 *
 * Three behaviours: open projects link straight through; locked projects
 * render unlinked with the lock tag; protected projects open a password
 * prompt before navigating (a client-side curtain, not real security).
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [askPassword, setAskPassword] = useState(false);

  const body = (
    <>
      <CoverBox project={project} index={index} />
      <div className="mt-5 flex items-start justify-between gap-6">
        <h3 className="text-[1.3rem] font-medium leading-[1.3] tracking-[-0.01em] text-ink transition-opacity duration-200 group-hover:opacity-70">
          {project.title}
        </h3>
        {project.locked ? (
          <span className="type-eyebrow inline-flex shrink-0 items-center gap-1.5 pt-1.5 text-muted">
            <svg aria-hidden width="10" height="12" viewBox="0 0 10 12" className="shrink-0">
              <rect x="0.5" y="4.5" width="9" height="7" fill="none" stroke="currentColor" />
              <path d="M2.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5" fill="none" stroke="currentColor" />
            </svg>
            Locked
          </span>
        ) : (
          <span
            aria-hidden
            className="shrink-0 pt-1 text-xl leading-none text-muted transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-ink"
          >
            &rarr;
          </span>
        )}
      </div>
      <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>
      <p className="type-eyebrow mt-3 text-muted">{project.positioning}</p>
    </>
  );

  if (project.locked) {
    return <article aria-label={`${project.title} (locked)`}>{body}</article>;
  }

  if (project.protected) {
    return (
      <article>
        <button
          type="button"
          onClick={() => setAskPassword(true)}
          className="group block w-full text-left"
          aria-haspopup="dialog"
        >
          {body}
        </button>
        {askPassword && (
          <PasswordDialog
            title={project.title}
            href={`/work/${project.slug}`}
            onClose={() => setAskPassword(false)}
          />
        )}
      </article>
    );
  }

  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        {body}
      </Link>
    </article>
  );
}

function PasswordDialog({
  title,
  href,
  onClose,
}: {
  title: string;
  href: string;
  onClose: () => void;
}) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value === siteConfig.projectPassword) {
      router.push(href);
    } else {
      setError(true);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} is password protected`}
        className="w-full max-w-sm border border-rule bg-ground p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="type-eyebrow text-muted">Password protected</p>
        <h4 className="mt-3 text-lg font-medium leading-snug text-ink">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Enter the password to view the project.
        </p>
        <form onSubmit={submit} className="mt-6">
          <label htmlFor="project-password" className="sr-only">
            Password
          </label>
          <input
            ref={inputRef}
            id="project-password"
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            className="w-full border border-rule bg-ground px-4 py-3 text-[15px] text-ink outline-none focus:border-ink"
            placeholder="Password"
          />
          {error && (
            <p role="alert" className="mt-2 text-sm text-accent">
              Incorrect password.
            </p>
          )}
          <div className="mt-5 flex items-center gap-6">
            <button
              type="submit"
              className="bg-ink px-5 py-2.5 text-[14px] font-medium text-ground transition-opacity duration-200 hover:opacity-85"
            >
              View project
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-[14px] text-muted transition-colors duration-200 hover:text-ink"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CoverBox({ project, index }: { project: Project; index: number }) {
  return (
    <div className="aspect-[3/2] w-full overflow-hidden border border-rule">
      {project.video ? (
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title}, case study cover`}
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.01]"
        />
      ) : project.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.photo}
          alt={`${project.title}, case study cover`}
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.01]"
        />
      ) : (
        <ProjectCanvas index={index} alt={`${project.title}, case study cover`} />
      )}
    </div>
  );
}
