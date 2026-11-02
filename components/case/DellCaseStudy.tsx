import type { CSSProperties } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CaseRail from "@/components/case/CaseRail";
import { caseStudyCss } from "@/content/case-study-styles";

/**
 * Dell Inventory Pipeline Tool - NDA case study, approved overview.
 *
 * Reuses the shared case-study template verbatim: the same frozen stylesheet
 * (`caseStudyCss`), the same `CaseRail`, the same DOM shell, the same sticky
 * breadcrumb, sticky left section nav, horizontal meta row and mobile rules.
 * Only the content and a small additive page-local stylesheet (`dellExtrasCss`,
 * subtitle + body lists) live here; no shared template rule is overridden, so
 * the body font, sizes and spacing stay exactly the template's. Copy is
 * Shanica's approved overview text, used as supplied. No images, screenshots,
 * diagrams or placeholders are added - this is an NDA project.
 *
 * Content model follows the customer-lifecycle-management page's pattern: a
 * META array drives the horizontal meta row and a SECTIONS array drives the
 * left nav and the body, each section holding typed content blocks.
 */

// ---------------------------------------------------------------------------
// Content model (same shape as the CLM page, trimmed to what this page needs)
// ---------------------------------------------------------------------------

type Block = { t: "p"; text: string } | { t: "h3"; text: string } | { t: "ul"; items: string[] };
type Section = { id: string; label: string; heading: string; blocks: Block[] };

// Horizontal meta row, filled from the approved project details.
const META: { label: string; value: string; scope?: boolean }[] = [
  { label: "Role", value: "Senior UX Designer" },
  { label: "Timeline", value: "Jan - May 2024" },
  { label: "Product", value: "Web, internal SaaS tool" },
  { label: "Scope", value: "Route setup, attribute mapping, pipeline preview, validation states, saving to a release", scope: true },
  { label: "Team", value: "3 designers, 3 product owners, engineering team", scope: true },
];

const SECTIONS: Section[] = [
  {
    id: "overview",
    label: "Overview",
    heading: "Overview",
    blocks: [
      {
        t: "p",
        text: "I led the design of the revamp of an internal Dell tool used to set up and validate inventory pipelines. A pipeline defines how parts move between sites, and the visibility of every shipment depends on it being set up correctly. Dell's client businesses, its internal logistics teams and customer support all rely on that visibility.",
      },
      { t: "h3", text: "My contribution" },
      {
        t: "ul",
        items: [
          "Led the design of the revamp as the Senior UX Designer, working on-site at Dell.",
          "Led two designers on the project.",
          "Ran discovery with the engineering manager and the three product owners, who owned the APIs, the system build and what went into each release.",
          "Worked closely with the engineers through design and delivery.",
          "Led the design of the new flow: route setup, attribute mapping, the pipeline preview, its validation states and saving to a release.",
        ],
      },
    ],
  },
  {
    id: "context",
    label: "Context",
    heading: "Context",
    blocks: [
      {
        t: "p",
        text: "Dell already had an internal tool for setting up inventory pipelines. This was a revamp. The tool had an existing structure, and I built the new design on top of it.",
      },
      {
        t: "p",
        text: "When a pipeline is set up wrong, the data is wrong. Nobody can see how many shipments are happening, when they happen, what is breaking or how to fix it.",
      },
      {
        t: "p",
        text: "I worked on-site at Dell, inside the Dell team, as a consultant through EY. The project ran from January to May 2024.",
      },
    ],
  },
  {
    id: "team-and-discovery",
    label: "Team and discovery",
    heading: "Team and discovery",
    blocks: [
      {
        t: "p",
        text: "I led two designers and worked with three product owners, the engineering team and Dell stakeholders. I worked most closely with the engineers.",
      },
      {
        t: "p",
        text: "Discovery ran mainly with the engineering manager and the product owners. Between them, they owned the APIs, the system build and what went into each release.",
      },
    ],
  },
  {
    id: "the-redesign",
    label: "The redesign",
    heading: "The redesign",
    blocks: [
      {
        t: "p",
        text: "The new flow takes a user from setting up a route to saving a validated pipeline.",
      },
      {
        t: "p",
        text: "The user first sets the route: where the shipment comes from and where it goes, by region, country and site. Source and destination attributes are then mapped side by side.",
      },
      {
        t: "p",
        text: "The pipeline preview shows each part type as its own lane, running across the sites it passes through, with the steps between sites marked on the line. A table view shows the same pipeline as rows.",
      },
      {
        t: "p",
        text: "Validation sits on the preview. A pipeline either passes or fails, and a failed pipeline marks both the sites and the part where it broke, so it shows where the pipeline broke. The preview also covers the relief case, where the pipeline runs through to the customer.",
      },
      {
        t: "p",
        text: "A validated pipeline is saved against a release target and a project name.",
      },
      {
        t: "p",
        text: "This page is an approved overview under NDA. I'm happy to walk through the work in more detail in conversation.",
      },
    ],
  },
];

// Confidentiality Notice - kept exactly as the shared template renders it, with
// the same wording the Dell page already used.
const NOTICE =
  "This case study is shared under NDA. Every visual is an original schematic with placeholder data: no customer names, account figures, or confidential details appear. Please don't redistribute.";

function renderBlock(b: Block, key: number) {
  switch (b.t) {
    case "p":
      return (
        <div key={key} className="cs-body">
          <p>{b.text}</p>
        </div>
      );
    case "h3":
      return (
        <h3 key={key} className="cs-h3">
          {b.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={key} className="cs-ul">
          {b.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function DellCaseStudy() {
  const railSections = SECTIONS.map((s) => ({ id: s.id, label: s.label }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: caseStudyCss }} />
      <style dangerouslySetInnerHTML={{ __html: dellExtrasCss }} />
      <main className="cs" id="main">
        <div className="cs-page">
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/#work" className="cs-bc-link">
              <svg className="cs-bc-arrow" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M19 12H5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Work
            </Link>
            <span className="cs-bc-sep" aria-hidden>
              /
            </span>
            <span className="cs-bc-current">Dell</span>
          </nav>

          <CaseRail sections={railSections} />

          <div className="cs-content">
            {/* Project logo - same component, size and position as the other case studies */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="cs-logo"
              src="/hero/dell-v2.svg"
              alt="Dell"
              width={40}
              height={40}
              style={{ "--logo-w": "40" } as CSSProperties}
            />

            <h1 className="cs-h1">Dell Inventory Pipeline Tool</h1>
            <p className="cs-subtitle">An internal SaaS tool for setting up and validating inventory pipelines</p>

            <video className="cs-hero" src="/projects/dell.mp4" autoPlay muted loop playsInline aria-hidden />

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
              <p className="cs-notice-body">{NOTICE}</p>
            </div>
            <hr className="cs-div cs-div-notice" />

            <div className="cs-meta">
              {META.map((m) => (
                <div key={m.label} className={`cs-meta-item${m.scope ? " scope" : ""}`}>
                  <div className="cs-meta-label">{m.label}</div>
                  <div className="cs-meta-value">{m.value}</div>
                </div>
              ))}
            </div>

            <hr className="cs-div cs-div-meta" />

            <div className="cs-sections">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="cs-section">
                  <h2 className="cs-h2">{s.heading}</h2>
                  {s.blocks.map((b, i) => renderBlock(b, i))}
                </section>
              ))}
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

// ---------------------------------------------------------------------------
// Page-local additive styles. New `.cs-*` classes only; nothing here overrides
// a shared template rule or affects any other case study. The subtitle matches
// the CLM subtitle; the body lists match the CLM list styling (same font token,
// size, line height and spacing as body paragraphs). The body font is left at
// the template default - it is not overridden here.
// ---------------------------------------------------------------------------

const dellExtrasCss = `
.cs-subtitle{ margin:12px 0 0; font-family:var(--inter); font-weight:400; font-size:18px; line-height:1.5; color:#8c8c8c; max-width:var(--col); }

/* ---- body lists (share the body column's left edge) ---- */
.cs-ul{ margin:16px 0 0; padding-left:0; max-width:var(--col); font-family:var(--body); font-size:16px; line-height:1.33; letter-spacing:normal; color:#464646; list-style-position:inside; list-style-type:disc; }
.cs-ul li{ margin:0; padding-left:0; }
.cs-ul li::marker{ color:#b4a4d2; }
.cs-ul li + li{ margin-top:8px; }
.cs-ul strong, .cs-ul b{ font-weight:600; }
`;
