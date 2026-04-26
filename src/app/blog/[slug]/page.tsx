import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Tag, RefreshCw } from "lucide-react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import { supabase, type BlogPost } from "@/lib/supabase";
import { blogFallbackPosts } from "@/lib/blogFallbackPosts";

export const revalidate = 60;

const EDITORIAL_BIO =
  "Written by the Gematria Guru editorial team, specializing in Hebrew and English cipher systems and their modern applications.";

async function getPost(slug: string): Promise<BlogPost | null> {
  const fallbackPost = blogFallbackPosts.find((post) => post.slug === slug) ?? null;

  if (!supabase) return fallbackPost;
  try {
    const { data } = await supabase.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
    return data ?? fallbackPost;
  } catch {
    return fallbackPost;
  }
}

async function getRelatedPosts(current: BlogPost, limit = 3): Promise<BlogPost[]> {
  const fallbackRelated = blogFallbackPosts
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => {
      const sameCatA = a.category === current.category ? 0 : 1;
      const sameCatB = b.category === current.category ? 0 : 1;
      if (sameCatA !== sameCatB) return sameCatA - sameCatB;
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    })
    .slice(0, limit);

  if (!supabase) return fallbackRelated;
  try {
    const { data: sameCategory } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("category", current.category)
      .neq("slug", current.slug)
      .order("published_at", { ascending: false })
      .limit(limit);

    const results: BlogPost[] = sameCategory ?? [];
    if (results.length < limit) {
      const { data: filler } = await supabase
        .from("blog_posts")
        .select("*")
        .neq("slug", current.slug)
        .order("published_at", { ascending: false })
        .limit(limit + results.length);
      for (const post of filler ?? []) {
        if (results.length >= limit) break;
        if (!results.some((r) => r.slug === post.slug)) results.push(post);
      }
    }
    return results.length > 0 ? results : fallbackRelated;
  } catch {
    return fallbackRelated;
  }
}

export async function generateStaticParams() {
  if (!supabase) return blogFallbackPosts.map((post) => ({ slug: post.slug }));
  try {
    const { data } = await supabase.from("blog_posts").select("slug");
    if (!data || data.length === 0) return blogFallbackPosts.map((post) => ({ slug: post.slug }));
    return data.map((p) => ({ slug: p.slug }));
  } catch {
    return blogFallbackPosts.map((post) => ({ slug: post.slug }));
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Article Not Found" };
  const modifiedTime = post.updated_at ?? post.created_at ?? post.published_at;
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://gematriaguru.com/blog/${post.slug}`,
      publishedTime: post.published_at,
      modifiedTime,
    },
  };
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post);
  const modifiedTime = post.updated_at ?? post.created_at ?? post.published_at;
  const wasUpdated =
    !!post.updated_at && new Date(post.updated_at).getTime() > new Date(post.published_at).getTime();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Gematria Guru", url: "https://gematriaguru.com" },
    datePublished: post.published_at,
    dateModified: modifiedTime,
    url: `https://gematriaguru.com/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen flex flex-col">
        <NavHeader />
        <main className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Knowledge Center
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Tag className="h-4 w-4" />
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b">
                <div className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                </div>
                {wasUpdated && (
                  <div className="flex items-center gap-1.5">
                    <RefreshCw className="h-4 w-4" />
                    <span>
                      Updated <time dateTime={post.updated_at}>{formatDate(post.updated_at as string)}</time>
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.read_time}</div>
              </div>
            </header>

            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <aside className="mt-10 p-5 border border-border rounded-xl bg-muted/40 flex gap-4 items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">{post.author}</p>
                <p className="text-sm text-muted-foreground">{EDITORIAL_BIO}</p>
              </div>
            </aside>
          </article>

          {relatedPosts.length > 0 && (
            <section className="mt-12 pt-8 border-t">
              <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="border border-border rounded-xl p-4 hover:border-primary/40 transition-colors flex flex-col"
                  >
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium self-start mb-2">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-semibold leading-snug mb-2 line-clamp-2">{rel.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">{rel.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 pt-8 border-t">
            <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/learning" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">Learning Modules</Link>
              <Link href="/" className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm">Try the Calculator</Link>
              <Link href="/blog" className="px-4 py-2 border border-border text-muted-foreground rounded-lg hover:bg-muted transition-colors text-sm">More Articles</Link>
            </div>
          </div>
        </main>
        <NavFooter />
      </div>
    </>
  );
}
