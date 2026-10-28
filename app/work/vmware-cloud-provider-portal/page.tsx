import type { Metadata } from "next";
import CaseLayout from "@/components/case/CaseLayout";

export const metadata: Metadata = {
  title: "VCCP - Customer Connect Cloud Service Portal Revamp",
  description:
    "VMware Customer Connect Portal (VCCP), a Clarity-based cloud service platform revamp. An NDA case study shared as an approved overview.",
};

/**
 * VMware (VCCP) — NDA case study, rendered through the shared CaseLayout that
 * is a pixel-exact port of Figma frame 2606:1537. Content is the live copy;
 * NDA adds the confidentiality notice and limits the left nav to Overview.
 */

const INTER = "Inter, 'Helvetica Neue', Arial, sans-serif";

const NAV = [{ id: "overview", label: "Overview" }] as const;

const META = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2023 Jun - Nov" },
  { label: "System", value: "Clarity DS" },
  {
    label: "Scope",
    value:
      "Revamp of the VCCP Configurator and its four purchasing flows (new, add-on, renewal, upgrade), plus the connected subscription service pages",
  },
] as const;

const OVERVIEW = [
  "I was asked to redesign the Cloud Provider purchasing portals and apply Clarity to them. On paper that reads like a restyle. It was not.",
  "The platform sold cloud infrastructure to businesses through one of the most layered commercial models I have worked with. A single line item could carry eight kinds of cost at once, sit inside a three-level nested table, and change behaviour by region and currency. The real work was understanding that model before changing a single screen, then making design decisions that protected the system instead of adding to its weight.",
] as const;

const STATS = [
  { n: "8", c: "cost dimensions a single service line could carry at once" },
  { n: "3", c: "levels of drill-down the core table had to support" },
  { n: "4", c: "purchasing flows sharing one configurator" },
  { n: "0", c: "Clarity components that solved the core table out of the box" },
] as const;

const Notice = (
  <div>
    <div style={{ display: "flex", alignItems: "center", gap: 7.5 }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flex: "none" }}>
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
      <span style={{ fontFamily: INTER, fontWeight: 500, fontSize: 30, lineHeight: "37px", color: "#464646" }}>
        Confidentiality Notice
      </span>
    </div>
    <p style={{ margin: 0, marginTop: 26, maxWidth: 849, fontFamily: INTER, fontWeight: 400, fontSize: 18, lineHeight: "24px", color: "#8c8c8c" }}>
      This case study is shared under NDA. Every visual is an original schematic with placeholder data: no
      customer names, entitlement numbers, or account-tied figures appear. Clarity&rsquo;s own documentation is
      public. Please don&rsquo;t redistribute.
    </p>
  </div>
);

export default function VmwareCaseStudy() {
  return (
    <CaseLayout
      breadcrumbTitle="VMware"
      nav={NAV}
      logo={{ src: "/hero/vmware-wordmark.png", w: 103, h: 16 }}
      title="VCCP - Customer Connect Cloud Service Portal Revamp"
      illustrationSrc="/projects/vmware-cloud-illustration.png"
      notice={Notice}
      meta={META}
      overview={OVERVIEW}
      stats={STATS}
    />
  );
}
