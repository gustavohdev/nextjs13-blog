import { DUMMY_POSTS } from "@/DUMMY_DATA";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
    return DUMMY_POSTS.map((post) => {
        return {
            slug: post.slug
        }
    })
}


const Page = ({params}:{
    params:{
        slug:string;
    }
}) => {
    const post = DUMMY_POSTS.find((post) => {
        return post.slug === params.slug
    })

    if(!post) {
        notFound()
    }
  return (
    <div>{post?.title}</div>
  )
}

export default Page