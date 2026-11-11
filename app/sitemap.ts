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
    "/passes/",
    "/badges/",
    "/guides/mobile/",
    ...weapons.map((w) => `/weapons/${w.slug}/`),
  ].map((path) => ({
    url: `https://bloodyragdollphysics.com${path}`,
    lastModified: ["/sandbox/"].includes(path) ? "2026-11-11" : "2026-11-12",
  }));
}
