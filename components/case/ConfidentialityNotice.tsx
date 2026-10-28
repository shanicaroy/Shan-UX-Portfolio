import type { ReactNode } from "react";

/**
 * NDA confidentiality notice, matched to the Figma final structure and the
 * Ben Roach composition: plain (no card background/border). The supplied red
 * alert-triangle icon sits inline with a "Confidentiality Notice" heading, and
 * the explanatory paragraph sits below it (width-capped for readability).
 * Placed directly after the hero illustration, before the project metadata, on
 * NDA case studies (VMware, Dell, EY). Wording is approved/reused.
 */
export default function ConfidentialityNotice({
  heading = "Confidentiality Notice",
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <aside aria-label="Confidentiality notice">
      <div className="flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
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
        <h2 className="font-sans text-[19px] font-medium tracking-[-0.01em] text-ink">{heading}</h2>
      </div>
      <p className="mt-3 max-w-[72ch] font-sans text-[14.5px] leading-[1.6] text-muted">{children}</p>
    </aside>
  );
}
