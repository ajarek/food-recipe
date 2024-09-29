import { Input } from '@/components/ui/input'
import React from 'react'

const Recipes = () => {
  return (
    <div className='flex flex-col justify-start items-center h-screen w-flex px-24'>
      <div className='w-full flex justify-between items-center'>
      <h1 className='text-2xl  font-semibold '>Recipes</h1>
      <div className='max-w-[250px] w-full'>

       <Input placeholder='🔍Search Recipes and more... ' className=' rounded-2xl'/>
      </div>
      </div>
    </div>
  )
}

export default Recipes