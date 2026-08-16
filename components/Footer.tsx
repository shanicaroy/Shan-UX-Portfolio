import { site } from "@/content/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Behance", href: site.social.behance },
  { label: "Dribbble", href: site.social.dribbble },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-void">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon">
          {site.contact.eyebrow}
        </span>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-chalk sm:text-5xl">
          {site.contact.heading}
        </h2>
        <p className="mt-6 max-w-md text-ash">{site.contact.body}</p>

        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex items-center gap-3 rounded-lg border border-neon px-6 py-4 text-base text-chalk shadow-neon-sm transition-shadow hover:shadow-neon"
        >
          {site.email}
          <span aria-hidden>&rarr;</span>
        </a>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ash">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-neon">
                {link.label}
              </a>
            ))}
          </div>
          <span className="font-mono text-xs text-ash/60">
            &copy; {new Date().getFullYear()} {site.fullName}
          </span>
        </div>
      </div>
    </footer>
  );
}
