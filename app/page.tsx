import { DUMMY_POSTS } from '@/DUMMY_DATA'
import PaddingContainer from '@/components/layout/padding-container'
import PostCard from '@/components/post/post-card'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <PaddingContainer>
      <main className='h-auto space-y-10'>
        <PostCard post={DUMMY_POSTS[0]}/>
        <PostCard layout="vertical" post={DUMMY_POSTS[5]}/>
      </main>
    </PaddingContainer>
  )
}
