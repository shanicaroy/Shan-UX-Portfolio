import { siteConfig, socialLinks } from "@/content/config";
import Shell from "./Shell";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <Shell className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between lg:py-7">
        <p className="text-base text-muted sm:text-[17px]">{siteConfig.footer.signature}</p>

        <nav aria-label="Social">
          <ul className="flex flex-wrap gap-x-10 gap-y-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-muted underline-offset-[6px] transition-colors duration-200 hover:text-ink hover:underline sm:text-[17px]"
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
