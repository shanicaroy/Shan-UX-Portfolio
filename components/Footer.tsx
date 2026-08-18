import { siteConfig, socialLinks } from "@/content/config";
import Shell from "./Shell";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <Shell className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-14">
        <p className="font-sans text-xs text-muted">{siteConfig.footer.signature}</p>

        <nav aria-label="Social">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-sans text-xs text-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Shell>
    </footer>
  );
}
