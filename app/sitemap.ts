import type { MetadataRoute } from "next";

const BASE_URL = "https://olivier-riviere-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1, lastModified: now },
    { url: `${BASE_URL}/portfolio`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/faq`, changeFrequency: "yearly", priority: 0.6, lastModified: now },
  ];
}
