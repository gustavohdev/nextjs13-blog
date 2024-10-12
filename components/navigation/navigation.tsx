import Link from "next/link";
import React from "react";
import PaddingContainer from "../layout/padding-container";
import Image from "next/image";
import siteConfig from "@/config/site";

export const Navigation = () => {
  return (
    <div className="border-b sticky top-0 z-[999] right-0 left-0 bg-white bg-opacity-50 backdrop-blur-md">
      {/* TODO: Put the top back kinda dark-grey maintaing the blur */}
      <PaddingContainer>
        <div className="flex items-start justify-start py-5">
          <Link
            href="/"
            className="flex gap-2 text-lg font-bold transition-transform duration-300 ease-in-out hover:scale-110"
          >
            {/* TODO: Put here a small circle with a photo of me */}
            <Image
              className="w-7 h-7 rounded-full object-cover"
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/5bbc7446-0572-4f21-82cf-47788842b68f.jpg`}
              alt="me"
              width={600}
              height={400}
            ></Image>
            <span>Gustavo's Blog</span>
          </Link>
          {/* <nav>
            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <Link href="/about">About Me</Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </PaddingContainer>
    </div>
  );
};
export default Navigation;
