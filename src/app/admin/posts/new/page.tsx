"use client";

import { useState, useCallback } from "react";
import { marked } from "marked";

// ─── helpers ────────────────────────────────────────────────────────────────

function isMarkdown(text: string) {
  return /^#{1,6}\s/.test(text) || /\*\*|__|\[.+\]\(.+\)|^\s*[-*+]\s/m.test(text);
}

async function toHtml(text: string): Promise<string> {
  if (isMarkdown(text)) {
    return (await marked.parse(text)) as string;
  }
  return text; // already HTML
}

function extractTitle(html: string): string {
  const m = html.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/i);
  if (m) return m[1].replace(/<[^>]+>/g, "").trim();
  return "";
}

function extractExcerpt(html: string): string {
  // Use non-s-flag compatible approach: match opening tag, content, closing tag
  const m = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (!m) return "";
  const text = m[1].replace(/<[^>]+>/g, "").trim();
  return text.length > 300 ? text.slice(0, 297) + "…" : text;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function calcReadTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

// ─── component ──────────────────────────────────────────────────────────────

const AUTHORS = [
  "Gematria Guru Team",
  "Sarah Cohen",
  "Michael David",
  "Benjamin Wolf",
  "Dr. Lisa Roberts",
  "Rabbi Jonathan Stone",
];

const CATEGORIES = [
  "Beginner",
  "Reference",
  "Spiritual",
  "Mystical",
  "Advanced",
  "Modern",
  "General",
];

const defaultPublishAt = () => {
  const d = new Date();
  d.setMinutes(0, 0, 0);
  // local datetime-local input format: YYYY-MM-DDTHH:MM
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:00`;
};

export default function NewPostPage() {
  const [raw, setRaw] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(AUTHORS[0]);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [readTime, setReadTime] = useState("5 min read");
  const [imageUrl, setImageUrl] = useState("");
  const [publishAt, setPublishAt] = useState(defaultPublishAt());
  const [slugManual, setSlugManual] = useState(false);

  const [processing, setProcessing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

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
    setError("");
    setSaved(false);
    if (!title || !slug || !content) {
      setError("Title, slug and content are required.");
      return;
    }
    setSaving(true);
    try {
      // Convert local datetime to UTC ISO string
      const publishedAt = new Date(publishAt).toISOString();

      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          author,
          category,
          read_time: readTime,
          image_url: imageUrl || null,
          published_at: publishedAt,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Save failed");

      setSaved(true);
      // Reset after 3 s so they can post another
      setTimeout(() => {
        setSaved(false);
        setRaw(""); setTitle(""); setSlug(""); setExcerpt("");
        setContent(""); setImageUrl(""); setSlugManual(false);
        setPublishAt(defaultPublishAt());
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setSaving(false);
    }
  }

  const isFuture = new Date(publishAt) > new Date();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">New Post</h1>
          <a href="/blog" className="text-sm text-muted-foreground hover:underline">
            ← Blog
          </a>
        </div>

        {/* ── Step 1: Paste content ─────────────────────────────────────── */}
        <section className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Paste your article (Markdown or HTML)
          </label>
          <textarea
            rows={12}
            value={raw}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="Paste markdown or HTML here — all fields below will fill in automatically…"
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          />
          {processing && (
            <p className="text-xs text-muted-foreground mt-1">Parsing content…</p>
          )}
        </section>

        {/* ── Auto-filled fields ────────────────────────────────────────── */}
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Auto-extracted from first heading"
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
                placeholder="auto-generated-from-title"
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
            </p>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-1">Excerpt</label>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Auto-extracted from first paragraph"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          {/* Author + Category + Read time row */}
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

          {/* Image URL (optional) */}
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

        {/* ── HTML preview (collapsible) ────────────────────────────────── */}
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

        {/* ── Save ─────────────────────────────────────────────────────── */}
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving || saved}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving…" : saved ? "Saved!" : isFuture ? "Schedule post" : "Publish post"}
          </button>
          {saved && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Post saved — resetting form in 3 s…
            </p>
          )}
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        {/* ── Setup note ───────────────────────────────────────────────── */}
        {!process.env.NEXT_PUBLIC_SUPABASE_URL && (
          <p className="mt-6 text-xs text-muted-foreground border border-border rounded p-3">
            <strong>Setup:</strong> add <code>ADMIN_PASSWORD</code> and{" "}
            <code>SUPABASE_SERVICE_ROLE_KEY</code> to your environment variables to enable saving.
          </p>
        )}
      </div>
    </div>
  );
}
