import type { MetadataRoute } from "next";
import { docsNav } from "@/lib/docs";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-19");
  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}${site.tape}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...docsNav.map((item) => ({
      url: `${site.url}${item.href}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: item.href === "/docs" ? 0.8 : 0.6,
    })),
  ];
}
