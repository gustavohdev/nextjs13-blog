import { DUMMY_POSTS } from "@/DUMMY_DATA";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostHero from "@/components/post/post-hero";
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
    <PaddingContainer>
        <PostHero post={post}/>
        <div className="flex gap-10 mt-10">
            <div className="relative">
                <div className="sticky top-20 flex flex-col gap-5">
                    <SocialLink isSharedUrl plataform="facebook"
                        link={`https://www.facebook.com/sharer/sharer.php?u=
                        ${'http://localhost:3000' + `/post/${post.slug}`}`
                    }
                    />
                    {/* have to use the link for twitter share */}
                    <SocialLink isSharedUrl plataform="twitter"
                        link={`https://twitter.com/intent/tweet?url=
                        ${'http://localhost:3000' + `/post/${post.slug}`}`
                    }
                    />
                    {/* have to use the link for linkedin share */}
                    <SocialLink isSharedUrl plataform="linkedin"
                        link={`https://www.linkedin.com/shareArticle?mini=true&url=
                        ${'http://localhost:3000' + `/post/${post.slug}`}`
                    }
                    />
                    {/* have to use the link for whatts app share */}
                    <SocialLink isSharedUrl plataform="whatsapp"
                        link={`https://api.whatsapp.com/send?text=
                        ${'http://localhost:3000' + `/post/${post.slug}`}`
                    }
                />
                </div>
            </div>
            <div className="h-[1200px] bg-slate-200 w-full">Post Body</div>

        </div>
    </PaddingContainer>
  )
}

export default Page