import Image from 'next/image'
import React from 'react'
import { ExternalLink } from 'lucide-react'
import { AnimatedTooltipPreview } from '@/components/AnimatedTooltip'
import Link from 'next/link'
import ImageMotion from './ImageMotion'

const Header = () => {
  return (
    <header className=" relative w-full h-[400px] max-sm:h-[550px]  bg-background  text-white rounded-3xl overflow-hidden ">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 max-lg:hidden ">
       <ImageMotion/>
      </div>

      <div className=" absolute top-0  w-full h-[250px] max-sm:h-[400px]  bg-gray-800  p-4 overflow-hidden rounded-e-3xl ">
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-4 '>
            <div className="text-2xl font-semibold">
              <h1>Discover Simple</h1>
              <h1>Delicious, And</h1>
              <h1 className="text-primary">Fast Recipes!</h1>
            </div>
            <div className="text-sm font-normal text-gray-200  ">
              <p>A recipe is soulless. The essence of the </p>
              <p>must comme from, the cook.</p>
            </div>
            <Link href='/blogs' className="w-fit flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-primary font-xl font-semibold hover:text-white hover:bg-primary transition-all delay-200 ">
              Read More <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className='flex flex-col gap-4 '>
            <div className="text-xl font-semibold">
              <h1>Top Recipes</h1>             
            </div>
            <div className="text-sm font-normal text-gray-200  ">
              <p>A recipe is soulless. The essence of the </p>
              <p>must comme from, the cook.</p>
            </div>

            <Link href='/recipes' className="w-fit flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-primary font-xl font-semibold hover:text-white hover:bg-primary transition-all delay-200 ">
              Check Our Recipe <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-0 left-0 w-3/4 h-[150px]  bg-gray-800 rounded-b-3xl  p-4">
        <AnimatedTooltipPreview />
      </div>

      <div className=" absolute bottom-0 right-0 w-1/4 h-[150px] bg-gray-800 rounded-e-3xl rounded-b-3xl  ">
        <div className="w-full h-full rounded-3xl border-t-[6px] border-l-[6px] border-background">
          <Image
            src={'/images/woman-cooking.jpg'}
            width={640}
            height={426}
            alt={'logo'}
            className="object-cover  w-full h-full rounded-3xl"
            priority
          />
        </div>
      </div>
    </header>
  )
}

export default Header
