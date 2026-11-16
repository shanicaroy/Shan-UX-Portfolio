import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/config";
import { INDEXED_PATHS } from "@/content/seo";

// Served at /sitemap.xml. Lists only the public pages (see INDEXED_PATHS in
// content/seo.ts). When a new case study goes public, add its path there.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return INDEXED_PATHS.map((path) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/about" ? 0.8 : 0.9,
  }));
}
