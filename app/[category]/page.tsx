import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-lists";

export const generateStaticParams = async () => {
    return DUMMY_CATEGORIES.map((category) => {
        return {
            category: category.slug
        }
    }
    )
}


const Page = ({
    params,
}: {
    params: {
        category: string;
    };
}) => {
    console.log(params)
    const posts = DUMMY_POSTS.filter(
        (post) => post.category.title.toLocaleLowerCase() === params.category
    )
    //console.log(posts)
    // return <div>{params.category}</div>
    // return <div>{JSON.stringify(posts)} </div>
    return (
        <PaddingContainer>
            <PostList posts={posts} />
        </PaddingContainer>
    )
}

export default Page