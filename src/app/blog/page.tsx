import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, User, Tag } from "lucide-react";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import { supabase, type BlogPost } from "@/lib/supabase";
import { blogFallbackPosts } from "@/lib/blogFallbackPosts";
import NewsletterSignup from "./NewsletterSignup";

export const metadata: Metadata = {
  title: { absolute: "Gematria Blog | Guides, Meanings & Calculator Tips" },
  description:
    "Explore gematria guides, number meanings, and tips for using our free Hebrew and English gematria calculator.",
  keywords: ["gematria articles", "numerology blog", "kabbalah guide", "biblical numerology"],
  openGraph: { title: "Gematria Blog | Guides, Meanings & Calculator Tips", description: "Explore gematria guides, number meanings, and tips for using our free Hebrew and English gematria calculator.", url: "https://www.gematriaguru.com/blog" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Gematria Knowledge Center",
  url: "https://gematriaguru.com/blog",
  publisher: { "@type": "Organization", name: "Gematria Guru" },
};

async function getPosts(category?: string): Promise<BlogPost[]> {
  const fallbackPosts = category
    ? blogFallbackPosts.filter((post) => post.category === category)
    : blogFallbackPosts;

  if (!supabase) return fallbackPosts;

  try {
    let query = supabase.from("blog_posts").select("*").order("published_at", { ascending: false });
    if (category) query = query.eq("category", category);
    const { data } = await query;

    if (!data || data.length === 0) return fallbackPosts;
    return data;
  } catch {
    return fallbackPosts;
  }
}

const categories = ["All", "Beginner", "Advanced", "Reference", "Spiritual", "Modern", "Mystical"];

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams.category ?? "";
  const posts = await getPosts(activeCategory || undefined);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen flex flex-col">
        <NavHeader />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3">Gematria Knowledge Center</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore articles, guides, and insights about gematria, numerology, and the mystical significance of numbers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  (cat === "All" && !activeCategory) || cat === activeCategory
                    ? "bg-primary text-white border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg mb-2">No articles found.</p>
              <p className="text-sm">Check back soon for new content about gematria and numerology.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.id} className="border border-border rounded-xl p-5 hover:border-primary/40 transition-colors flex flex-col">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                    <Tag className="h-3.5 w-3.5" />
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                  </div>
                  <h2 className="text-base font-semibold leading-snug mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
                    <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />{post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.read_time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1.5 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <time dateTime={post.published_at}>
                      {new Date(post.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                    Read Article &rarr;
                  </Link>
                </article>
              ))}
            </div>
          )}

          <NewsletterSignup />
        </main>
        <NavFooter />
      </div>
    </>
  );
}
