import { getReadingTime, getRelativeDate } from "@/lib/helper";
import { ImageResponse } from "next/og";
import { getPostData } from "@/lib/api";
export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Gustavo | Blog";
export const contentType = "image/png";

export default async function og({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostData(slug);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1 object-cover w-full h-full object-center"
            alt={post[0]?.title!!}
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${post[0]?.image}`}
            width={size.width}
            height={size.height}
          ></img>
          <div tw="absolute flex inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-[60px]">{post[0]?.title}</div>
          {/* Description */}
          <div tw="text-2xl max-w-4xl">{post[0]?.description}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-xl text-neutral-200">
            <div
              tw={`font-medium ${post[0]?.category.title === "Cities" ? "text-emerald-600" : "text-indigo-600"}`}
            >
              {post[0]?.category.title}
            </div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{`${post[0]?.author.first_name} ${post[0]?.author.last_name}`}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{getReadingTime(post[0]?.body!!)}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{getRelativeDate(post[0]?.date_created!!)}</div>
          </div>
        </div>
      </div>
    )
  );
}
