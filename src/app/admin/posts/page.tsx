"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Tag, User, Edit, Plus } from "lucide-react";

type PostSummary = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  published_at: string;
  read_time: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error);
        setPosts(json.posts);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const now = new Date();
  const scheduled = posts.filter((p) => new Date(p.published_at) > now);
  const published = posts.filter((p) => new Date(p.published_at) <= now);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">All Posts</h1>
          <div className="flex items-center gap-3">
            <Link href="/blog" className="text-sm text-muted-foreground hover:underline">
              ← Blog
            </Link>
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              New post
            </Link>
          </div>
        </div>

        {loading && <p className="text-muted-foreground text-sm">Loading…</p>}
        {error && <p className="text-destructive text-sm">{error}</p>}

        {!loading && !error && (
          <>
            {/* Scheduled */}
            {scheduled.length > 0 && (
              <section className="mb-10">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-3">
                  Scheduled ({scheduled.length})
                </h2>
                <div className="space-y-2">
                  {scheduled
                    .sort((a, b) => new Date(a.published_at).getTime() - new Date(b.published_at).getTime())
                    .map((post) => (
                      <PostRow key={post.id} post={post} badge="scheduled" />
                    ))}
                </div>
              </section>
            )}

            {/* Published */}
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Published ({published.length})
              </h2>
              {published.length === 0 ? (
                <p className="text-sm text-muted-foreground">No published posts yet.</p>
              ) : (
                <div className="space-y-2">
                  {published.map((post) => (
                    <PostRow key={post.id} post={post} badge="published" />
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}

function PostRow({ post, badge }: { post: PostSummary; badge: "scheduled" | "published" }) {
  return (
    <div className="flex items-start justify-between gap-4 border border-border rounded-lg px-4 py-3 hover:border-primary/40 transition-colors">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-sm leading-snug truncate">{post.title}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.read_time}
          </span>
          <span className={`flex items-center gap-1 ${badge === "scheduled" ? "text-amber-600 dark:text-amber-400 font-medium" : ""}`}>
            <Calendar className="h-3 w-3" />
            {badge === "scheduled" ? "Goes live " : ""}
            {formatDate(post.published_at)}
          </span>
        </div>
      </div>
      <Link
        href={`/admin/posts/${post.slug}/edit`}
        className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-border rounded-md hover:border-primary hover:text-primary transition-colors"
      >
        <Edit className="h-3 w-3" />
        Edit
      </Link>
    </div>
  );
}
