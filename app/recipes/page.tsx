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

const Recipes = () => {
  const [search, setSearch] = React.useState('')
  const [filterRecipes, setFilterRecipes] = React.useState('')
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLLIElement
    setFilterRecipes(target.textContent || '')
  }

  return (
    <div className="flex flex-col justify-start items-center h-screen w-flex px-24 gap-4">
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
      <div className="relative w-full grid grid-cols-[1fr_4fr] gap-4 pb-10 ">
        <div className=" w-full flex flex-col items-start gap-4 p-8">
          <Button
            onClick={handleButton}
            className="w-full"
          >
            Pasta
          </Button>
          <Button
            onClick={handleButton}
            className="w-full"
          >
            Pizza
          </Button>
          <Button
            onClick={handleButton}
            className="w-full"
          >
            Chicken
          </Button>
          <Button
            onClick={handleButton}
            className="w-full"
          >
            Salad
          </Button>
          <Button
            onClick={handleButton}
            className="w-full"
          >
            Beef
          </Button>
          <Button
            onClick={handleButton}
            className="w-full"
          >
            Drink
          </Button>
          <Button
            onClick={handleButton}
            className="w-full"
          >
            All
          </Button>
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
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
              <Card key={el.id}>
                <Link href={`/recipe/${el.id}`}>
                  <CardHeader>
                    <Image
                      src={el.image}
                      height={300}
                      width={300}
                      alt="recipe"
                      className="rounded-xl"
                    />
                  </CardHeader>
                  <CardContent>
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
