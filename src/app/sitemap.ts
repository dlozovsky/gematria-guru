import type { MetadataRoute } from "next";
import { supabase, type BlogPost } from "@/lib/supabase";
import { blogFallbackPosts } from "@/lib/blogFallbackPosts";

const BASE_URL = "https://www.gematriaguru.com";

const LEARNING_MODULES = [
  "intro",
  "hebrew-alphabet",
  "systems",
  "advanced",
  "torah-gematria",
  "name-gematria",
  "number-mysticism",
  "practical-applications",
];

async function getBlogPosts(): Promise<Pick<BlogPost, "slug" | "published_at" | "updated_at">[]> {
  if (!supabase) return blogFallbackPosts;
  try {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug, published_at, updated_at")
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false });
    if (!data || data.length === 0) return blogFallbackPosts;
    return data;
  } catch {
    return blogFallbackPosts;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/gematria-calculator-online`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/english-gematria-calculator`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/hebrew-gematria-calculator`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/learning`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/number-maps`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const learningEntries: MetadataRoute.Sitemap = LEARNING_MODULES.map((slug) => ({
    url: `${BASE_URL}/learning/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const posts = await getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : new Date(post.published_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...learningEntries, ...blogEntries];
}
