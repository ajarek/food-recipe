'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import recipes from '@/data/data.json'
import Link from 'next/link'
import type { Recipe} from '@/type/type'
import { Beef, Drumstick, ListCheck, Martini, Pizza, Salad, Soup } from 'lucide-react'

const Recipes = () => {
  const [search, setSearch] = React.useState('')
  const [filterRecipes, setFilterRecipes] = React.useState('')
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLLIElement
    setFilterRecipes(target.dataset.name || '')
  }

  return (
    <div className="flex flex-col justify-start items-center h-screen w-flex px-24 max-lg:px-10 max-sm:px-4 gap-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl  font-semibold ">Recipes</h1>
        <div className="max-w-[250px] w-full">
          <Input
            placeholder="🔍Search Recipes and more... "
            className=" rounded-2xl"
            value={search}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="relative w-full grid grid-cols-[1fr_4fr] max-sm:grid-cols-1 gap-4 pb-10 ">
        <div className=" w-full flex flex-col items-start gap-4 p-8 max-sm:flex-row max-sm:flex-wrap max-sm:gap-2">
          <Button
            onClick={handleButton}
            className="w-full flex gap-2 focus:bg-primary/70 max-lg:w-32"
            data-name="Pasta"
          >
            <Soup/> Pasta
          </Button>
          <Button
            onClick={handleButton}
            className="w-full flex gap-2 focus:bg-primary/70 max-lg:w-32"
            data-name="Pizza"
          >
            <Pizza/>Pizza
          </Button>
          <Button
            onClick={handleButton}
            className="w-full flex gap-2 focus:bg-primary/70 max-lg:w-32"
            data-name="Chicken"
          >
            <Drumstick/>Chicken
          </Button>
          <Button
            onClick={handleButton}
            className="w-full flex gap-2 focus:bg-primary/70 max-lg:w-32"
            data-name="Salad"
          >
           <Salad /> Salad
          </Button>
          <Button
            onClick={handleButton}
            className="w-full flex gap-2 focus:bg-primary/70 max-lg:w-32"
            data-name="Beef"
          >
           <Beef /> Beef
          </Button>
          <Button
            onClick={handleButton}
            className="w-full flex gap-2 focus:bg-primary/70 max-lg:w-32"
            data-name="Drink"
          >
            <Martini /> Drink
          </Button>
          <Button
            onClick={handleButton}
            className="w-full flex gap-2 focus:bg-primary/70 max-lg:w-32"
            data-name="All"
          >
            <ListCheck/> All
          </Button>
        </div>
        <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {recipes
            .filter(
              (el: Recipe) =>
                el.tags.includes(filterRecipes) ||
                filterRecipes === '' ||
                filterRecipes === 'All'
            )
            .filter((el: Recipe) =>
              el.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((el: Recipe) => (
              <Card key={el.id} className='p-4'>
                <Link href={`/recipe/${el.id}`}>
                  <CardHeader className=' relative w-full rounded-xl aspect-[1/1] bg-red-300 '>
                    <Image
                      src={el.image}
                      fill
                      alt="recipe"
                      className=" object-cover rounded-xl "
                      priority
                    />
                  </CardHeader>
                  <CardContent className='mt-4'>
                    <CardTitle>{el.name}</CardTitle>
                    <p>
                      <span className="text-gray-500">prep time minutes</span>:{' '}
                      {el.prepTimeMinutes}{' '}
                    </p>
                    <p>
                      <span className="text-gray-500">cook time minutes</span>:{' '}
                      {el.cookTimeMinutes}{' '}
                    </p>
                    <p>
                      <span className="text-gray-500">cuisine</span>:{' '}
                      {el.cuisine}{' '}
                    </p>
                    <p>
                      <span className="text-gray-500">meal type</span>:{' '}
                      {el.mealType.join(', ')}{' '}
                    </p>
                    <p className="text-right text-primary">more...</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Recipes
