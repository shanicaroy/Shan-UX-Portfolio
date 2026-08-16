import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-6 sm:px-10">
      <span className="font-mono text-xs uppercase tracking-wide text-signal">Error — FIG. 404</span>
      <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        This coordinate doesn&apos;t map to anything. The page may have moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-3 border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-signal hover:text-signal"
      >
        Back home
      </Link>
    </section>
  );
}
