import CTACard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import { createDirectus, readItems, rest, staticToken } from "@directus/sdk";
import axios from "axios";
import { notFound } from "next/navigation";
import { cache } from "react";

export const generateStaticParams = async () => {
  const posts = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/items/post`, {
      headers: {
        Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
    .then((data) => {
      return data.data.data;
    });

  const params = posts.map((post: any) => {
    return {
      slug: post.slug as string,
    };
  });

  return params || [];
};

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const post = await getPostData(slug);

  return {
    title: post[0]?.title,
    descrition: post[0]?.description,
    openGraph: {
      title: post[0]?.title,
      description: post[0]?.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      siteName: post[0]?.title,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/${post[0].image}?key=optimised`,
          width: 1280,
          height: 500,
        },
      ],
      type: "website",
    },
  };
};

const getPostData = cache(async (postSlug: string) => {
  try {
    const client = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
      .with(staticToken(process.env.ADMIN_TOKEN as string))
      .with(rest());

    const post: any = await client.request(
      readItems("post", {
        filter: {
          slug: {
            _eq: postSlug,
          },
        },
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

    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching post: ");
  }
});

const Page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const postSlug = params.slug;

  const post = await getPostData(postSlug);

  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero post={post[0]} />
        {/* Post body and Social Share */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="relative">
            <div className="sticky top-20 flex gap-5 md:flex-col items-center">
              <div className="font-medium md:hidden">Share this content:</div>
              <SocialLink
                isSharedUrl
                plataform="facebook"
                link={`https://www.facebook.com/sharer/sharer.php?u=
                                ${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post[0].slug}`}`}
              />
              {/* have to use the link for twitter share */}
              <SocialLink
                isSharedUrl
                plataform="twitter"
                link={`https://twitter.com/intent/tweet?url=
                                ${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post[0].slug}`}`}
              />
              {/* have to use the link for linkedin share */}
              <SocialLink
                isSharedUrl
                plataform="linkedin"
                link={`https://www.linkedin.com/shareArticle?mini=true&url=
                                ${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post[0].slug}`}`}
              />
              {/* have to use the link for whatts app share */}
              <SocialLink
                isSharedUrl
                plataform="whatsapp"
                link={`https://api.whatsapp.com/send?text=
                                ${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post[0].slug}`}`}
              />
            </div>
          </div>
          <PostBody body={post[0].body} />
        </div>
        <CTACard />
      </div>
    </PaddingContainer>
  );
};

export default Page;
