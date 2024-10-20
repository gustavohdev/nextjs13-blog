import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token || token !== process.env.ADMIN_TOKEN)
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });

  //Revalidate All Posts
  revalidatePath(`/post/[slug]`);
  revalidatePath(`/[category]`);
  revalidatePath(`/`);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
