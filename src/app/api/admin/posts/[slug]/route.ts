import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/admin-auth";
import { supabase } from "@/lib/supabase";

async function authCheck() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const password = process.env.ADMIN_PASSWORD ?? "";
  if (!token || !password || !(await verifyToken(token, password))) return false;
  return true;
}

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  if (!(await authCheck())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!supabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post: data });
}
