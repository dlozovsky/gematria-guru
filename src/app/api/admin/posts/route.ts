import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/admin-auth";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function POST(request: Request) {
  // Auth check
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const password = process.env.ADMIN_PASSWORD ?? "";
  if (!token || !password || !(await verifyToken(token, password))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getServiceClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "SUPABASE_SERVICE_ROLE_KEY not configured" },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { title, slug, excerpt, content, author, published_at, read_time, category, image_url } = body;

  if (!title || !slug || !content) {
    return NextResponse.json({ error: "title, slug and content are required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .upsert(
      {
        title,
        slug,
        excerpt: excerpt ?? "",
        content,
        author: author ?? "Gematria Guru Team",
        published_at: published_at ?? new Date().toISOString(),
        read_time: read_time ?? "5 min read",
        category: category ?? "General",
        image_url: image_url || null,
      },
      { onConflict: "slug" }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/sitemap.xml");
  revalidatePath("/blog");
  revalidatePath(`/blog/${data.slug}`);

  return NextResponse.json({ ok: true, post: data });
}
