import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/admin-auth";
import { blogFallbackPosts } from "@/lib/blogFallbackPosts";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const password = process.env.ADMIN_PASSWORD ?? "";
  if (!token || !password || !(await verifyToken(token, password))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json({
      source: "fallback",
      reason: "Supabase env vars missing",
      posts: blogFallbackPosts.map((p) => ({ slug: p.slug, published_at: p.published_at })),
    });
  }

  try {
    const supabase = createClient(url, key);
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug, published_at")
      .lte("published_at", now)
      .order("published_at", { ascending: false });

    if (error) {
      return NextResponse.json({
        source: "fallback",
        reason: `Supabase error: ${error.message}`,
        posts: blogFallbackPosts.map((p) => ({ slug: p.slug, published_at: p.published_at })),
      });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({
        source: "fallback",
        reason: "Supabase returned empty data",
        posts: blogFallbackPosts.map((p) => ({ slug: p.slug, published_at: p.published_at })),
      });
    }

    // Also force-revalidate the sitemap while we're here
    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      source: "supabase",
      count: data.length,
      now,
      posts: data,
    });
  } catch (err) {
    return NextResponse.json({
      source: "fallback",
      reason: `Exception: ${String(err)}`,
      posts: blogFallbackPosts.map((p) => ({ slug: p.slug, published_at: p.published_at })),
    });
  }
}
