import type { MetadataRoute } from "next";
import { getAllPosts } from "./page";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

  //Get Posts
  const posts = await getAllPosts();

  const postLinks = posts?.map((post: any) => {
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

  const dynamicLinks = [...postLinks].flat();

  console.log([...postLinks]);
  console.log([...postLinks].flat());

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
