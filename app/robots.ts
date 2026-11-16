import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/config";

// Served at /robots.txt. The whole site is crawlable. Password pages and gated
// case studies are kept out of search results with a "noindex" tag on the page
// itself rather than blocked here: a blocked page's URL can still show up in
// results, because the crawler never gets to read its noindex tag.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
