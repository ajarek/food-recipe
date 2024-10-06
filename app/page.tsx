import BlogsHome from '@/components/BlogsHome'
import Header from '@/components/Header'
import TrendingRecipes from '@/components/TrendingRecipes'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-12 max-sm:px-4 gap-4">
      <Header />
      <TrendingRecipes />
      <BlogsHome />
    </main>
  )
}
