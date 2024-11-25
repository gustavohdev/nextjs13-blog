import { createDirectus, readItems, rest, staticToken } from "@directus/sdk";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

  //Get Posts
  const getAllPosts = async () => {
    try {
      const client = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
        .with(staticToken(process.env.ADMIN_TOKEN as string))
        .with(rest());

      const posts = await client.request(readItems("post"));

      return posts.filter((item: any) => item.status === "published");
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  const postLinks = posts?.map((post) => {
    return [
      {
        url: `${baseUrl}/post/${post.slug}`,
        lastModified: new Date(post.date_updated),
      },
    ];
  });

  //Get Categories
  // Not implemented yet
  // @TODO:

  //Concat Links ( with Langs or No)
  const dynamicLinks = [...postLinks].flat();

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    ...dynamicLinks,
    // {
    //   url: `${baseUrl}`,
    //   lastModified: new Date(),
    // },
    // {
    //   url: `${baseUrl}`,
    //   lastModified: new Date(),
    // },
  ];
}
