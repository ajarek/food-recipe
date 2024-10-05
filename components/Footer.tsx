import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-8  border-t-2 border-primary  rounded-t-[50px] shadow-xl p-8">
      <Link
        href="/"
        className="relative flex items-center gap-2 max-sm-gap-1"
      >
        <Image
          src={'/images/book-recipe.png'}
          width={32}
          height={32}
          alt={'crypto logo'}
        />
        <h1 className="font-bold text-xl text-primary italic ">
          Delicious dishes - recipes
        </h1>
      </Link>
      <div className="flex flex-wrap items-center gap-8">
        <Link
          href="https://x.com/?lang=en"
          target="_blank"
        >
          <Image
            src={'/images/ixs.svg'}
            width={32}
            height={32}
            alt={'x logo'}
          />
        </Link>
        <Link
          href="https://www.youtube.com"
          target="_blank"
        >
          <Image
            src={'/images/tube.svg'}
            width={32}
            height={32}
            alt={'tube logo'}
          />
        </Link>
        <Link
          href="https://discord.com/"
          target="_blank"
        >
          <Image
            src={'/images/discord.svg'}
            width={32}
            height={32}
            alt={'discord logo'}
          />
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
        >
          <Image
            src={'/images/fc.svg'}
            width={32}
            height={32}
            alt={'fc logo'}
          />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
        >
          <Image
            src={'/images/ist.svg'}
            width={32}
            height={32}
            alt={'ist logo'}
          />
        </Link>
      </div>

      <div className="w-full text-center text-sm text-gray-500 border-t border-gray-500 py-4 mx-8">
        @2024 Ajarek, inc. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
