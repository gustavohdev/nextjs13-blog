import { getReadingTime, getRelativeDate } from "@/lib/helper";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";
import React from "react";

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
}

// TODO:
// try to comment the lines that needs deep nested --- WORKED
// try to show the data from the posts without the needed data --- WORKED

// after it works, try to change the object dynamically or try to use SDK correctly --- LATER
// SDK would be better, after it works will perform very nice in the flow the app --- LATER

//@TODO-NEXT
// It's missing the post.body, time to put it there, and watch the rest of the videos to where see if I missed something

const PostContent = ({ post, isPostPage = false }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div
        className={`${isPostPage ? "text-sm" : "text-xs @md:text-sm"} flex items-center flex-wrap gap-2 text-xs @md:text-sm text-neutral-400`}
      >
        <div
          className={`font-medium ${post.category.title === "Cities" ? "text-emerald-600" : "text-indigo-600"}`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      {/* Title */}
      <h2
        className={`${
          isPostPage
            ? "text-2xl md:text-3xl lg:text-4xl font-bold"
            : "@lg:text-3xl text-xl @md:text-2xl font-medium"
        }`}
      >
        {post.title}
      </h2>
      {/* Description */}
      <p className="text-base @lg:text-lg leading snug text-neutral-600">
        {post.description}
      </p>
      {/* Read More */}
      {!isPostPage && (
        <div className="flex items-center gap-2 pt-3">
          Read More <ArrowRight size="14" />
        </div>
      )}
    </div>
  );
};

export default PostContent;
