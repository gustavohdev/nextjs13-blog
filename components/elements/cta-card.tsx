import React from "react";
import Image from "next/image";
import directus from "@/lib/directus";
import axios from "axios";
import { revalidateTag } from "next/cache";
import siteConfig from "@/config/site";

const CTACard = async () => {
  const formAction = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email");
      console.log("EMAIL", email);
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/items/subscribers
      `,
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      revalidateTag("subscribers-count");
      // await directus.items("subscribers").createOne({
      //     email,
      // })
    } catch (error) {
      console.log(error);
    }
  };

  //   const subscribersCount = await axios
  //     .get(
  //       `${process.env.NEXT_PUBLIC_API_URL}/items/subscribers?meta=total_count
  //   `,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
  //           "Content-Type": "application/json",
  //         },
  //         next: {
  //           tags: ["subscribers-count"],
  //         },
  //       }
  //     )
  //     .then((data) => {
  //       //   console.log("MY SUBS", data.data.meta.total_count);
  //       //   //data.meta.total_count;
  //       return data.data.meta.total_count;
  //     })
  //     .catch((err) => console.log(err));

  const subscribersCount = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/subscribers?meta=total_count`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: {
        tags: ["subscribers-count"], // optional, depending on where you manage revalidation
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch subscribers count");
      }
      return response.json();
    })
    .then((data) => {
      return data.meta.total_count;
    })
    .catch((error) => {
      console.error(error);
      return 0; // fallback in case of error
    });

  return (
    <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70"></div>
      <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/f0dcf9e5-f440-4b27-9613-c1801be37f24?key=optimised`}
      />
      {/* Content Container */}
      <div className="relative z-20">
        <div className="text-md font-medium">{siteConfig.hash}</div>
        <h3 className="mt-3 text-3xl font-semibold">
          Explore the world with me...
        </h3>
        <p className="max-w-lg mt-2 text-md">
          I'm travelling between Frontend, Backend and DevOps, steering through
          projects and charting novelty and fundamentals your way. Discover new
          insights and sharpen your skills with each step of the journey.
        </p>
        {/* Form */}
        <form
          key={subscribersCount + "subscribers-form"}
          action={formAction}
          className="flex items-center gap-2 mt-6 w-full"
        >
          <input
            type="email"
            name="email"
            placeholder="Write your email"
            className="w-full md:w-auto px-3 py-2 text-base rounded-md outline-none placeholder:text-sm bg-white/80 focus:ring-2 ring-neutral-600"
          ></input>
          <button className="px-3 py-2 rounded-md bg-neutral-900 text-neutral-200 whitespace-nowrap">
            Sign Up
          </button>
        </form>

        {/* Subscribers */}
        <div className="mt-5 text-neutral-600">
          Join our{" "}
          <span className="px-2 py-1 text-xs rounded-md bg-neutral-700 text-neutral-100">
            {subscribersCount}
          </span>{" "}
          subscribers now !
        </div>
      </div>
    </div>
  );
};

export default CTACard;
