import { socialLinks } from "@/content/config";

const ROBOTO = '"Roboto", "Helvetica Neue", Arial, sans-serif';
const fluid = (px: number, min: number) => `clamp(${min}px, ${((px / 1728) * 100).toFixed(3)}vw, ${px}px)`;

/**
 * Footer, matching the Figma: a full-bleed line, then the copyright on the left
 * and the social links on the right. Unlike the rest of the page this band has
 * only a small edge padding (52/1728), not the main content gutter.
 */
export default function Footer() {
  return (
    <footer className="border-t border-[#e2e2e2]" style={{ color: "#6d707c" }}>
      <div
        className="flex flex-col items-start gap-6 py-9 sm:flex-row sm:items-center sm:justify-between"
        style={{ paddingInline: "min(3vw, 52px)", fontFamily: ROBOTO }}
      >
        <p style={{ fontSize: fluid(27.597, 15) }}>&copy; Shanica Roy 2026</p>

        <nav aria-label="Social">
          <ul className="flex flex-wrap items-center" style={{ columnGap: "clamp(18px, 2.5vw, 43px)", rowGap: "12px" }}>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="underline-offset-[6px] transition-colors duration-200 hover:text-accent hover:underline"
                  style={{ fontSize: fluid(31.714, 16) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
