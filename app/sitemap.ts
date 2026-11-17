import type { MetadataRoute } from "next";
import { weapons } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/weapons/",
    "/badges/",
    "/passes/",
    "/syringes/",
    "/guides/",
    "/guides/mobile/",
    "/sandbox/",
    "/codes/",
    "/sources/",
    ...weapons.map((w) => `/weapons/${w.slug}/`),
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: "2026-11-17",
  }));
}
