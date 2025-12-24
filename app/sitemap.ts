import type { MetadataRoute } from "next"

const BASE_URL = "https://olivier-riviere-web.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
