type Recipe = {
  id: number
  name: string
  image: string
  prepTimeMinutes: number
  cookTimeMinutes: number
  cuisine: string
  mealType: string[]
  tags: string[]
}

export type { Recipe }