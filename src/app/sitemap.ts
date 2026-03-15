import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.gematriaguru.com/", changeFrequency: "daily", priority: 1.0 },
    { url: "https://www.gematriaguru.com/about", changeFrequency: "monthly", priority: 0.5 },
    { url: "https://www.gematriaguru.com/blog", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://www.gematriaguru.com/learning", changeFrequency: "weekly", priority: 0.7 },
    { url: "https://www.gematriaguru.com/number-maps", changeFrequency: "monthly", priority: 0.6 },
  ];
}
