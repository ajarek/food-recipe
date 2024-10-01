import recipes from '@/data/data.json'
import Image from 'next/image'

const RecipeId = ({ params }: { params: { id: string } }) => {
  const recipe = recipes.find((el) => el.id === +params.id)
  if (!recipe) {
    return (
      <div className="text-center text-3xl font-semibold text-red-500 mt-10">
        Recipe not found
      </div>
    )
  }
  return (
    <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 justify-start items-center  min-h-[calc(100vh-64px)]  px-24 max-lg:px-4 gap-4">
      <div className="flex justify-center items-center">
        <Image
          src={recipe.image}
          alt="recipe"
          width={400}
          height={400}
          className="rounded-xl"
          priority
        />
      </div>
      <div className="h-full flex flex-col justify-center items-start  gap-4 p-4 max-lg:px-0">
        <h1 className="text-2xl  font-semibold ">{recipe.name}</h1>
        <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-4 ">
          <ul>
            Ingredients:
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="text-gray-500"
              >
                {ingredient}
              </li>
            ))}
            <li>
              Prep Time Minutes:{' '}
              <span className="text-gray-500">{recipe.prepTimeMinutes}</span>{' '}
            </li>
            <li>
              Servings: <span className="text-gray-500">{recipe.servings}</span>
            </li>
            <li className="text-gray-500">
              Rating: {Array(Math.round(recipe.rating)).fill('⭐')}
            </li>
          </ul>
          <ul>
            Instructions:
            {recipe.instructions.map((instruction, index) => (
              <li
                key={index}
                className="text-gray-500"
              >
                {instruction}
              </li>
            ))}
            <li>
              Cook Time Minutes:{' '}
              <span className="text-gray-500">{recipe.cookTimeMinutes}</span>
            </li>
            <li>
              Difficulty:{' '}
              <span className="text-gray-500">{recipe.difficulty}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeId
