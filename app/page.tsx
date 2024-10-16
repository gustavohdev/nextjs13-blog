import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostList from "@/components/post/post-lists";
import { createDirectus, readItems, rest, staticToken } from "@directus/sdk";
import { notFound } from "next/navigation";

export default async function Home() {
  const getAllPosts: any = async () => {
    try {
      const client = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
        .with(staticToken(process.env.ADMIN_TOKEN as string))
        .with(rest());

      const posts = await client.request(
        readItems("post", {
          fields: [
            "*",
            "author.id",
            "author.first_name",
            "author.last_name",
            "category.id",
            "category.title",
          ],
        })
      );

      return posts.filter((item: any) => item.status === "published");
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  if (!posts) {
    notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} />
        <PostList
          posts={posts.filter(
            (post: any, index: any) => index > 0 && index < 3
          )}
        />
        <CTACard />
        {/* <PostCard post={posts[3]} reverse={true} />
        <PostList
          posts={posts.filter(
            (post: any, index: any) => index > 3 && index < 6
          )}
        /> */}
      </main>
    </PaddingContainer>
  );
}
