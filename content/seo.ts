import type { Metadata } from "next";
import { siteConfig } from "@/content/config";

// ---------------------------------------------------------------------------
// SEO HELPERS
// One place for per-page metadata so every page gets the same treatment:
// a canonical URL, a share card with that page's own title and description,
// and an optional "don't index" flag for password-gated or unpublished pages.
// ---------------------------------------------------------------------------

/** Public pages that belong in the sitemap and in search results. */
export const INDEXED_PATHS = [
  "/",
  "/about",
  "/work/customer-lifecycle-management",
  "/work/dell-portal-redesign",
  "/work/orbit-design-system",
  "/work/virtubox-kiosk",
] as const;

type PageSeo = {
  /** Page title without the suffix; the root layout appends " - Shanica Roy UX Portfolio". */
  title: string;
  description: string;
  /** Path from the site root, e.g. "/work/virtubox-kiosk". */
  path: string;
  /**
   * Keep the page out of search results. Used for password-gated case
   * studies, the unlock pages and sections hidden from the nav for launch.
   */
  noindex?: boolean;
};

/**
 * The share card image (app/opengraph-image.png). Listed explicitly because a
 * page that sets its own openGraph block replaces the root one, image included.
 */
const SHARE_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Shanica Roy, UX Design Portfolio",
};

export function pageMetadata({ title, description, path, noindex }: PageSeo): Metadata {
  const fullTitle = `${title} - ${siteConfig.seo.titleSuffix}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: `${siteConfig.name} UX Design Portfolio`,
      title: fullTitle,
      description,
      url: path,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@ShanicaRoy",
      images: [SHARE_IMAGE],
    },
    ...(noindex
      ? { robots: { index: false, follow: false, googleBot: { index: false, follow: false } } }
      : {}),
  };
}

/**
 * Structured data for the home page (schema.org JSON-LD). It tells search
 * engines this site is the portfolio of a person named Shanica Roy, links her
 * profiles, and lists the names people search for it by.
 */
export function homeJsonLd() {
  const url = siteConfig.url;
  const sameAs = [siteConfig.social.linkedin, siteConfig.social.x, siteConfig.social.github].filter(
    (link) => link && !link.includes("["),
  );

  const person = {
    "@type": "Person",
    "@id": `${url}/#person`,
    name: siteConfig.name,
    url,
    image: `${url}/hero/shanica.png`,
    jobTitle: siteConfig.seo.jobTitle,
    description: `${siteConfig.name} is a ${siteConfig.seo.jobTitle} working on enterprise and SaaS product design.`,
    knowsAbout: [...siteConfig.seo.knowsAbout],
    sameAs,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: `${siteConfig.name} UX Design Portfolio`,
        alternateName: [...siteConfig.seo.alternateNames],
        description: siteConfig.metaDescription,
        inLanguage: "en",
        author: { "@id": `${url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}/#profilepage`,
        url,
        name: siteConfig.metaTitle,
        isPartOf: { "@id": `${url}/#website` },
        mainEntity: { "@id": `${url}/#person` },
      },
      person,
    ],
  };
}
