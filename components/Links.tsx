'use client'

import Image from 'next/image'
import Link from 'next/link'


const Links = () => {
 
  return (
    <div className='max-lg:hidden w-full flex items-center justify-between   '>
      <Link
        href='/'
        className='relative flex items-center gap-2 max-sm-gap-1'
      >
        <Image
          src={'/images/book-recipe.png'}
          width={32}
          height={32}
          alt={'recipe book'}
        />
        <h1 className='font-bold text-primary text-xl  uppercase tracking-wide hover:text-primary/80 '>
        Delicious dishes - recipes
        </h1>
      </Link>

      <div className='flex items-center gap-8 mr-4 '>
        <Link
          href='/'
          className={`flex items-center gap-2  text-xl hover:text-primary `}
        >
          
          <h4 className='tracking-wider'>Home</h4>
        </Link>

        <Link
          href='/recipe'
          className={`flex items-center gap-2  text-xl hover:text-primary `}
        >
         
         <h4 className='tracking-wider'>Recipe</h4>
        </Link>
        <Link
          href='/blogs'
          className={`flex items-center gap-2  text-xl hover:text-primary `}
        >
         
         <h4 className='tracking-wider'>Blogs</h4>
        </Link>
        <Link
          href='/gallery'
          className={`flex items-center gap-2  text-xl hover:text-primary `}
        >
         
         <h4 className='tracking-wider'>Gallery</h4>
        </Link>
       

        
      </div>
    </div>
  )
}

export default Links
