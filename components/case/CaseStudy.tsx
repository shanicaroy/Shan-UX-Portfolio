import type { CSSProperties } from "react";
import Footer from "@/components/Footer";
import CaseRail from "@/components/case/CaseRail";
import { caseStudyCss } from "@/content/case-study-styles";

/**
 * Shared case-study template, a 1:1 port of Figma frame 2699:4272. One layout
 * for every case study: the left rail (breadcrumb + sticky section nav) is built
 * from the section list; NDA pages pass a `notice`; stats render only when a
 * project supplies figures. All geometry/type lives in `caseStudyCss` (scoped
 * `.cs`), which is exact at >=1728 and scales responsively below. Copy is the
 * project's own; nothing here is invented.
 */

export type CaseBlock = { k: "p" | "h3"; text: string };
export type CaseStudySection = { id: string; label: string; heading: string; blocks: readonly CaseBlock[] };
export type CaseMetaField = { label: string; value: string; scope?: boolean };
export type CaseStat = { n: string; c: string };

export type CaseStudyProps = {
  breadcrumb: string;
  logo?: { src: string; w: number; h: number };
  title: string;
  hero: { src: string; kind: "img" | "video" };
  notice?: string;
  meta: readonly CaseMetaField[];
  sections: readonly CaseStudySection[];
  stats?: readonly CaseStat[];
};

// Group a section's blocks so consecutive paragraphs share one <div.cs-body>
// (for the paragraph-to-paragraph spacing) and each h3 stands on its own.
function groupBlocks(blocks: readonly CaseBlock[]) {
  const groups: Array<{ type: "body"; items: string[] } | { type: "h3"; text: string }> = [];
  for (const b of blocks) {
    if (b.k === "h3") {
      groups.push({ type: "h3", text: b.text });
    } else {
      const last = groups[groups.length - 1];
      if (last && last.type === "body") last.items.push(b.text);
      else groups.push({ type: "body", items: [b.text] });
    }
  }
  return groups;
}

export default function CaseStudy({ breadcrumb, logo, title, hero, notice, meta, sections, stats }: CaseStudyProps) {
  const railSections = sections.map((s) => ({ id: s.id, label: s.label }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: caseStudyCss }} />
      <main className="cs" id="main">
        <div className="cs-canvas">
          <div className="cs-grid">
            <CaseRail breadcrumb={breadcrumb} sections={railSections} />

            <div className="cs-content">
              {logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="cs-logo"
                  src={logo.src}
                  alt={breadcrumb}
                  width={logo.w}
                  height={logo.h}
                  style={{ "--logo-w": String(logo.w) } as CSSProperties}
                />
              ) : null}

              <h1 className="cs-h1">{title}</h1>

              {hero.kind === "video" ? (
                <video className="cs-hero" src={hero.src} autoPlay muted loop playsInline aria-hidden />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="cs-hero" src={hero.src} alt="" />
              )}

              {notice ? (
                <>
                  <div className="cs-notice">
                    <div className="cs-notice-head">
                      <svg className="cs-notice-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M10.2888 3.85923L1.8188 17.9992C1.64417 18.3017 1.55177 18.6445 1.55079 18.9937C1.54981 19.343 1.64029 19.6864 1.81323 19.9898C1.98616 20.2931 2.23553 20.546 2.53651 20.7231C2.83749 20.9002 3.1796 20.9954 3.5288 20.9992H20.4688C20.818 20.9954 21.1601 20.9002 21.4611 20.7231C21.7621 20.546 22.0114 20.2931 22.1844 19.9898C22.3573 19.6864 22.4478 19.343 22.4468 18.9937C22.4458 18.6445 22.3534 18.3017 22.1788 17.9992L13.7088 3.85923C13.5305 3.56533 13.2795 3.32235 12.98 3.15371C12.6805 2.98508 12.3425 2.89648 11.9988 2.89648C11.6551 2.89648 11.3171 2.98508 11.0176 3.15371C10.7181 3.32235 10.4671 3.56533 10.2888 3.85923Z"
                          stroke="#E04545"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M12 9V13" stroke="#E04545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 17H12.01" stroke="#E04545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="cs-notice-title">Confidentiality Notice</span>
                    </div>
                    <p className="cs-notice-body">{notice}</p>
                  </div>
                  <hr className="cs-div cs-div-notice" />
                </>
              ) : (
                <hr className="cs-div cs-div-hero" />
              )}

              <div className="cs-meta">
                {meta.map((m) => (
                  <div key={m.label} className={`cs-meta-item${m.scope ? " scope" : ""}`}>
                    <div className="cs-meta-label">{m.label}</div>
                    <div className="cs-meta-value">{m.value}</div>
                  </div>
                ))}
              </div>

              <hr className="cs-div cs-div-meta" />

              <div className="cs-sections">
                {sections.map((s) => (
                  <section key={s.id} id={s.id} className="cs-section">
                    <h2 className="cs-h2">{s.heading}</h2>
                    {groupBlocks(s.blocks).map((g, i) =>
                      g.type === "h3" ? (
                        <h3 key={i} className="cs-h3">
                          {g.text}
                        </h3>
                      ) : (
                        <div key={i} className="cs-body">
                          {g.items.map((t, j) => (
                            <p key={j}>{t}</p>
                          ))}
                        </div>
                      )
                    )}
                  </section>
                ))}

                {stats && stats.length > 0 ? (
                  <div className="cs-stats">
                    {stats.map((s) => (
                      <div key={s.n + s.c}>
                        <div className="cs-stat-n">{s.n}</div>
                        <div className="cs-stat-c">{s.c}</div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="cs-footerwrap">
          <Footer />
        </div>
      </main>
    </>
  );
}
