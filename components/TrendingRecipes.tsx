import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import recipes from '@/data/data.json'
import Image from 'next/image'
import Link from 'next/link'

const TrendingRecipes = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-4 ">
      <h1 className="text-2xl font-semibold">
        Trending <span className="text-primary">Recipes</span>
      </h1>
      <Carousel className="w-full max-w-5xl max-sm:max-w-sm max-md:max-w-md max-lg:max-w-lg">
        <CarouselContent className="-ml-1">
          {recipes.map((recipe, index) => (
            <CarouselItem
              key={index}
              className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <div className="p-1">
                <Card>
                  <Link href={`/recipe/${recipe.id}`}>
                    <CardContent className="relative flex aspect-square items-center justify-center p-6">
                      <Image
                        src={recipe.image}
                        alt="recipe"
                        fill
                        className="rounded-xl object-cover "
                        priority
                      />
                    </CardContent>
                    <CardFooter className="h-20 p-1 text-primary">
                      {recipe.name}
                    </CardFooter>
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default TrendingRecipes
