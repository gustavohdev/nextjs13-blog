import React from 'react'
import Image from 'next/image'

const CTACard = () => {
    return (
    <div className='relative px-6 py-10 overflow-hidden rounded-md bg-slate-100'>
        {/* Overlay */}
        <div className='absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70'></div>
        <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center" 
        src="https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxOHx8RWxlcGhhbnRzJTIwdGhhaWxhbmR8ZW58MHx8fHwxNjcwMzIyNzUx&ixlib=rb-4.0.3"
        />
        {/* Content Container */}
        <div className='relative z-20'>
            <div className='text-md font-medium'>#exploretheworld</div>
            <h3 className='mt-3 text-3xl font-semibold'>
                Explore the world with me
            </h3>
            <p className='max-w-lg mt-2 text-md'>
                Explore the world with me! I'm travelling around the world. I've visited
                most of the great cities of USA and currently I'm travelling in UE Join me!
            </p>
            {/* Form */}
            <form className='flex items-center gap-2 mt-6 w-full'>
                <input
                    placeholder='Write your email'
                    className='w-full md:w-auto px-3 py-2 text-base rounded-md outline-none placeholder:text-sm bg-white/80 focus:ring-2 ring-neutral-600'
                >
                </input>
                <button className='px-3 py-2 rounded-md bg-neutral-900 text-neutral-200 whitespace-nowrap'>
                    Sign Up
                </button>
            </form>
        </div>
    </div>
    )
}

export default CTACard