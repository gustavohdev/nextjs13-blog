import { Post } from "@/types/collection"
import Image from "next/image"
import Link from "next/link"
import PostContent from "./post-content"
import { DUMMY_POSTS } from "@/DUMMY_DATA"

interface PostProps {
    post: Post
    layout?: "vertical" | "horizontal"
}

const PostCard = ({post, layout = "horizontal"}: PostProps) => {
  return (
    <Link className="grid grid-cols-2 gap-10" href={`/post/${post.slug}`}>
        {/* Post Image  */}
    <Image className="rounded-md w-full object-cover object-center max-h-[300px]" alt={post.title} src={post.image} width={600} height={300} />
        {/* Post Content */}
        <PostContent post={post}/>

    {/* <div>{post.title}</div> */}
    </Link>
  )
}

export default PostCard