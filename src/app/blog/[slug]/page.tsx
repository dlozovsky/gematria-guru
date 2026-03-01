import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import { supabase, type BlogPost } from "@/lib/supabase";

async function getPost(slug: string): Promise<BlogPost | null> {
  if (!supabase) return null;
  try {
    const { data } = await supabase.from("blog_posts").select("*").eq("slug", slug).maybeSingle();
    return data ?? null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  if (!supabase) return [];
  try {
    const { data } = await supabase.from("blog_posts").select("slug");
    return (data ?? []).map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Article Not Found" };
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
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Gematria Guru", url: "https://gematriaguru.com" },
    datePublished: post.published_at,
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
                  <time dateTime={post.published_at}>
                    {new Date(post.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.read_time}</div>
              </div>
            </header>

            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

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
