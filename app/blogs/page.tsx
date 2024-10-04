import blogs from '@/data/blogs.json'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
const Blogs = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-flex px-24 max-lg:px-10 max-sm:px-4 gap-4 pb-12">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl  font-semibold ">Blogs</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-center items-center">
        {blogs.map((blog) => (
          <Card key={blog.id} className='p-4'>
            <Link href={`/blog/${blog.id}`}>
              <CardHeader className=' relative w-full rounded-xl p-4  aspect-[16/9]' >
                <Image
                  src={blog.image}
                 fill
                  alt="blogs"
                  className="rounded-xl object-cover  "
                />
              </CardHeader>
              <CardContent className="flex flex-col  gap-4 mt-4">
                <CardTitle>{blog.title}</CardTitle>
                <p>{blog.description.slice(0, 38)}...</p>
                <p>{blog.date}</p>
                <p className="text-right text-primary">more...</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Blogs
