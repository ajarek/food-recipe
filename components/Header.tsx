import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className=" relative w-full h-[400px]  bg-background  text-white rounded-3xl overflow-hidden "  >
      <div className=" absolute top-0  w-full h-[250px] bg-gray-800  p-4 overflow-hidden rounded-e-3xl text-2xl font-semibold">
        <p>Discover Simple</p>
        <p>Delicious, And</p>
        <p className='text-primary'>Fast Recipes!</p>
      </div>
      <div className=" absolute bottom-0 left-0 w-3/4 h-[150px] bg-gray-800 rounded-b-3xl  p-4">div2</div>
      <div className=" absolute bottom-0 right-0 w-1/4 h-[150px] bg-gray-800 rounded-e-3xl rounded-b-3xl  ">
        <div className='w-full h-full rounded-3xl border-t-[6px] border-l-[6px] border-background'>
            <Image src={'/images/woman-cooking.jpg'} width={640} height={426} alt={'logo'} className='object-cover  w-full h-full rounded-3xl' />
        </div>
      </div>

    </header>
  )
}

export default Header
