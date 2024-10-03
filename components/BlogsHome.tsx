import blogs from '@/data/blogs.json'
import Image from 'next/image'
import Link from 'next/link'

const BlogsHome = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <h1 className="text-2xl font-semibold pb-2">
        Our <span className="text-primary">Blog</span>
      </h1>

      <div className="w-full grid grid-cols-2 max-lg:grid-cols-1  place-items-center gap-8">
        {blogs
          .filter((el, index) => index < 2)
          .map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-4"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={400}
                className="rounded-[40px]"
                priority
              />
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-300">
                {blog.description.slice(0, 50)}...
              </p>
              <Link href={`/blog/${blog.id}`} className="border-2 border-b-blue-500 hover:border-b-violet-600 w-fit tracking-wider font-semibold">
                Read More
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default BlogsHome
