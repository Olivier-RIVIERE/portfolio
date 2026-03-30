import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";

const BASE_URL = "https://portfolio-olivier-riviere.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projectPages = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: now,
  }));

  return [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1, lastModified: now },
    ...projectPages,
  ];
}