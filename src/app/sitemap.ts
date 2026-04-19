import type { MetadataRoute } from "next";
import { SITE, DECODAGES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/etude`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/equipe`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/decodages`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const decodagesPages: MetadataRoute.Sitemap = DECODAGES.map((d) => ({
    url: `${SITE.url}/decodages/${d.slug}`,
    lastModified: new Date(d.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...decodagesPages];
}
