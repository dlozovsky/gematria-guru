"use client";

import { useState, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import { marked } from "marked";
import Link from "next/link";

function isMarkdown(text: string) {
  return /^#{1,6}\s/.test(text) || /\*\*|__|\[.+\]\(.+\)|^\s*[-*+]\s/m.test(text);
}

async function toHtml(text: string): Promise<string> {
  if (isMarkdown(text)) return (await marked.parse(text)) as string;
  return text;
}

function extractTitle(html: string): string {
  const m = html.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/i);
  if (m) return m[1].replace(/<[^>]+>/g, "").trim();
  return "";
}

function extractExcerpt(html: string): string {
  const m = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (!m) return "";
  const text = m[1].replace(/<[^>]+>/g, "").trim();
  return text.length > 300 ? text.slice(0, 297) + "…" : text;
}

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}

function calcReadTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function toLocalDatetime(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

const AUTHORS = [
  "Gematria Guru Team", "Sarah Cohen", "Michael David",
  "Benjamin Wolf", "Dr. Lisa Roberts", "Rabbi Jonathan Stone",
];

const CATEGORIES = ["Beginner", "Reference", "Spiritual", "Mystical", "Advanced", "Modern", "General"];

export default function EditPostPage() {
  const { slug: originalSlug } = useParams<{ slug: string }>();

  const [loadError, setLoadError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [raw, setRaw] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(AUTHORS[0]);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [readTime, setReadTime] = useState("5 min read");
  const [imageUrl, setImageUrl] = useState("");
  const [publishAt, setPublishAt] = useState("");
  const [slugManual, setSlugManual] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/posts/${originalSlug}`)
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error);
        const p = json.post;
        setTitle(p.title ?? "");
        setSlug(p.slug ?? "");
        setExcerpt(p.excerpt ?? "");
        setContent(p.content ?? "");
        setRaw(p.content ?? "");
        setAuthor(p.author ?? AUTHORS[0]);
        setCategory(p.category ?? CATEGORIES[0]);
        setReadTime(p.read_time ?? "5 min read");
        setImageUrl(p.image_url ?? "");
        setPublishAt(toLocalDatetime(p.published_at));
        setLoaded(true);
      })
      .catch((e) => setLoadError(e.message));
  }, [originalSlug]);

  const handleContentChange = useCallback(async (value: string) => {
    setRaw(value);
    if (!value.trim()) return;
    setProcessing(true);
    try {
      const html = await toHtml(value);
      setContent(html);
      const detectedTitle = extractTitle(html);
      if (detectedTitle) {
        setTitle(detectedTitle);
        if (!slugManual) setSlug(slugify(detectedTitle));
      }
      setExcerpt(extractExcerpt(html));
      setReadTime(calcReadTime(html));
    } finally {
      setProcessing(false);
    }
  }, [slugManual]);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugManual) setSlug(slugify(value));
  };

  const handleSlugChange = (value: string) => {
    setSlug(slugify(value));
    setSlugManual(true);
  };

  async function handleSave() {
    setSaveError("");
    setSaved(false);
    if (!title || !slug || !content) {
      setSaveError("Title, slug and content are required.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title, slug, excerpt, content, author, category,
          read_time: readTime,
          image_url: imageUrl || null,
          published_at: new Date(publishAt).toISOString(),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Save failed");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setSaving(false);
    }
  }

  const isFuture = publishAt ? new Date(publishAt) > new Date() : false;

  if (loadError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive text-sm">{loadError}</p>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading post…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Edit Post</h1>
          <div className="flex items-center gap-3">
            <Link href="/admin/posts" className="text-sm text-muted-foreground hover:underline">
              ← All posts
            </Link>
            <a
              href={`/blog/${originalSlug}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:underline"
            >
              View live ↗
            </a>
          </div>
        </div>

        {/* Content */}
        <section className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Article content (Markdown or HTML)
          </label>
          <textarea
            rows={12}
            value={raw}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="Paste markdown or HTML here…"
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          />
          {processing && <p className="text-xs text-muted-foreground mt-1">Parsing content…</p>}
        </section>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {slugManual && (
                <button
                  type="button"
                  onClick={() => { setSlug(slugify(title)); setSlugManual(false); }}
                  className="text-xs text-muted-foreground underline whitespace-nowrap"
                >
                  Reset
                </button>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              gematriaguru.com/blog/<span className="font-mono">{slug || "…"}</span>
              {slug !== originalSlug && (
                <span className="ml-2 text-amber-600 dark:text-amber-400">
                  ⚠ Changing the slug will create a new post, not rename the existing one
                </span>
              )}
            </p>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-1">Excerpt</label>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          {/* Author + Category + Read time */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Author</label>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {AUTHORS.map((a) => <option key={a}>{a}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Read time</label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Publish date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Publish date{" "}
              {isFuture && (
                <span className="ml-2 text-xs font-normal text-amber-600 dark:text-amber-400">
                  Scheduled — will go live at this date
                </span>
              )}
            </label>
            <input
              type="datetime-local"
              value={publishAt}
              onChange={(e) => setPublishAt(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://…"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* HTML preview */}
        {content && (
          <details className="mt-6 border border-border rounded-md">
            <summary className="px-4 py-2 text-sm font-medium cursor-pointer select-none">
              Preview HTML output
            </summary>
            <div
              className="prose prose-sm dark:prose-invert max-w-none px-4 py-4 border-t border-border"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </details>
        )}

        {/* Save */}
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving || saved}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving…" : saved ? "Saved!" : "Save changes"}
          </button>
          {saved && (
            <p className="text-sm text-green-600 dark:text-green-400">Changes saved.</p>
          )}
          {saveError && <p className="text-sm text-destructive">{saveError}</p>}
        </div>
      </div>
    </div>
  );
}
