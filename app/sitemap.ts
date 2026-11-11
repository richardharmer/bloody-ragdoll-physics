import type { MetadataRoute } from "next";
import { weapons } from "@/lib/data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/weapons/",
    "/syringes/",
    "/guides/",
    "/sandbox/",
    "/sources/",
    ...weapons.map((w) => `/weapons/${w.slug}/`),
  ].map((path) => ({
    url: `https://bloody-ragdoll-physics.pages.dev${path}`,
    lastModified: "2026-11-11",
  }));
}
