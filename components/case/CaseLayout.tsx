"use client";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/gelasio/400.css";
import "@fontsource/gelasio/500.css";
import "@fontsource/tinos/400.css";
import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

/**
 * Shared case-study layout, ported pixel-exact from Figma frame 2606:1537.
 * The whole page is a fixed 1728px design frame with the frame's exact px
 * geometry and type; a scaler uniformly scales it by min(1, viewport/1728)
 * — pixel-exact at 1728, capped and centred above, proportionally smaller
 * below (the 1440/1280 behaviour). One layout for every case study: NDA
 * passes a `notice` and a single nav item; non-NDA omits the notice and lists
 * its sections. Fonts: Georgia (H1 / Overview heading / stat numbers), Times
 * New Roman (Overview body), Inter (breadcrumb / nav / notice / meta labels),
 * Roboto (meta values / stat captions). Gelasio + Tinos are metric-compatible
 * fallbacks so non-Georgia/Times environments still render the right metrics.
 */

export type NavItem = { id: string; label: string };
export type MetaItem = { label: string; value: string };
export type StatItem = { n: string; c: string };

const GEORGIA = "Georgia, Gelasio, 'Times New Roman', serif";
const TIMES = "'Times New Roman', Tinos, Times, serif";
const INTER = "Inter, 'Helvetica Neue', Arial, sans-serif";
const ROBOTO = "Roboto, 'Helvetica Neue', Arial, sans-serif";
const DIVIDER = "#e4e4e4";

export default function CaseLayout({
  breadcrumbTitle,
  nav,
  logo,
  eyebrow,
  title,
  illustrationSrc,
  notice,
  meta,
  overviewHeading = "Overview",
  overview,
  stats,
}: {
  breadcrumbTitle: string;
  nav: readonly NavItem[];
  logo?: { src: string; w: number; h: number };
  eyebrow?: string;
  title: string;
  illustrationSrc: string;
  notice?: ReactNode;
  meta: readonly MetaItem[];
  overviewHeading?: string;
  overview: readonly string[];
  stats?: readonly StatItem[];
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const wrap = wrapRef.current;
    if (!frame || !wrap) return;
    const fit = () => {
      const vw = document.documentElement.clientWidth;
      const s = Math.min(1, vw / 1728);
      const tx = Math.max(0, (vw - 1728) / 2);
      frame.style.transform = `translateX(${tx}px) scale(${s})`;
      wrap.style.height = frame.offsetHeight * s + "px";
    };
    fit();
    window.addEventListener("resize", fit);
    if (document.fonts?.ready) document.fonts.ready.then(fit).catch(() => {});
    const t = setTimeout(fit, 400);
    return () => {
      window.removeEventListener("resize", fit);
      clearTimeout(t);
    };
  }, []);

  return (
    <main id="main" style={{ background: "#fff" }}>
      <div ref={wrapRef} style={{ width: "100%", overflow: "hidden" }}>
        <div
          ref={frameRef}
          style={{ width: 1728, transformOrigin: "top left", position: "relative", background: "#fff" }}
        >
          {/* Breadcrumb — left 99, top 120, Inter 20px */}
          <div style={{ position: "absolute", left: 99, top: 120, fontFamily: INTER, fontSize: 20, lineHeight: "33px", whiteSpace: "nowrap" }}>
            <Link href="/#work" style={{ color: "#a2a2a2", textDecoration: "none" }}>
              <span aria-hidden>&larr;</span> Work
            </Link>
            <span style={{ color: "#cccccc", margin: "0 12px" }}>/</span>
            <span style={{ color: "#202124" }}>{breadcrumbTitle}</span>
          </div>

          {/* Left nav — left 103, top 337, 95 wide, Inter Medium 21px, 24px between links */}
          <nav aria-label="Case study sections" style={{ position: "absolute", left: 103, top: 337, width: 95 }}>
            {nav.map((n, i) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                style={{
                  display: "block",
                  marginTop: i === 0 ? 0 : 24,
                  fontFamily: INTER,
                  fontWeight: 500,
                  fontSize: 21,
                  lineHeight: "25px",
                  textDecoration: "none",
                  color: i === 0 ? "#7a5ab2" : "#acacac",
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Content column — left 369, top 321, width 1058 */}
          <div style={{ marginLeft: 369, paddingTop: 321, width: 1058 }}>
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo.src} alt={breadcrumbTitle} width={logo.w} height={logo.h} style={{ display: "block", width: logo.w, height: logo.h }} />
            ) : eyebrow ? (
              <p style={{ fontFamily: INTER, fontWeight: 500, fontSize: 17, letterSpacing: "0.87px", textTransform: "uppercase", color: "#969696", height: 16 }}>{eyebrow}</p>
            ) : null}

            {/* H1 — Georgia 70px / 1.13 / -1.4px / #42444d, 34px below logo */}
            <h1 style={{ margin: 0, marginTop: 34, fontFamily: GEORGIA, fontWeight: 400, fontSize: 70, lineHeight: 1.13, letterSpacing: "-1.4px", color: "#42444d" }}>
              {title}
            </h1>

            {/* Hero illustration 1058x607, 40px below H1 */}
            <div style={{ marginTop: 40, width: 1058, height: 607, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={illustrationSrc} alt="" width={1058} height={607} style={{ display: "block", width: 1058, height: 607, objectFit: "cover" }} />
            </div>

            {notice ? (
              <>
                {/* Confidentiality notice, 38px below hero */}
                <div style={{ marginTop: 38 }}>{notice}</div>
                {/* Divider, 39px below notice */}
                <div style={{ marginTop: 39, height: 1, background: DIVIDER }} />
              </>
            ) : (
              <div style={{ marginTop: 38, height: 1, background: DIVIDER }} />
            )}

            {/* Metadata row — 52px below divider; cols 188/164/106/331, 90px gap */}
            <div style={{ marginTop: 52, display: "flex", gap: 90 }}>
              {meta.map((m, i) => {
                const isLast = i === meta.length - 1; // Scope wraps; the rest stay one line (overflowing into the gap, as in the frame)
                return (
                  <div key={m.label} style={{ width: [188, 164, 106, 331][i] ?? 164, flex: "none" }}>
                    <div style={{ fontFamily: INTER, fontWeight: 500, fontSize: 17, letterSpacing: "0.87px", textTransform: "uppercase", color: "#969696", lineHeight: "21px" }}>{m.label}</div>
                    <div style={{ marginTop: 14, fontFamily: ROBOTO, fontWeight: 400, fontSize: 25, lineHeight: "30px", color: "#4f4f4f", whiteSpace: isLast ? "normal" : "nowrap" }}>{m.value}</div>
                  </div>
                );
              })}
            </div>

            {/* Divider, 44px below metadata */}
            <div style={{ marginTop: 44, height: 1, background: DIVIDER }} />

            {/* Overview — heading Georgia 50px, 45px below divider; body Times 24px, 35px below heading */}
            <section id="overview" style={{ marginTop: 45, scrollMarginTop: 24 }}>
              <h2 style={{ margin: 0, fontFamily: GEORGIA, fontWeight: 400, fontSize: 50, lineHeight: 1.1, color: "#42444d" }}>{overviewHeading}</h2>
              <div style={{ marginTop: 35, fontFamily: TIMES, fontSize: 24, lineHeight: "33px", color: "#464646" }}>
                {overview.map((p, i) => (
                  <p key={i} style={{ margin: i === 0 ? 0 : "20px 0 0" }}>{p}</p>
                ))}
              </div>
            </section>

            {stats && stats.length > 0 ? (
              <div style={{ marginTop: 52, display: "flex", gap: 31 }}>
                {stats.map((s) => (
                  <div key={s.n + s.c} style={{ width: 246, flex: "none" }}>
                    <div style={{ fontFamily: GEORGIA, fontWeight: 400, fontSize: 64, lineHeight: 1, color: "#353535" }}>{s.n}</div>
                    <div style={{ marginTop: 9, fontFamily: ROBOTO, fontSize: 16, lineHeight: "19px", color: "#939393", maxWidth: 223 }}>{s.c}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* Footer — left 59, width 1610, 120px below content */}
          <footer style={{ marginLeft: 59, marginTop: 120, width: 1610, display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 29, fontFamily: ROBOTO, fontSize: 21, color: "#6d707c" }}>
            <span>&copy; Shanica Roy 2026</span>
            <nav aria-label="Social" style={{ display: "flex", gap: 33 }}>
              {["LinkedIn", "Email", "X", "Medium", "Github"].map((l) => (
                <span key={l}>{l}</span>
              ))}
            </nav>
          </footer>
        </div>
      </div>
    </main>
  );
}
