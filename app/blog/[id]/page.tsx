import blogs from '@/data/blogs.json'
import Image from 'next/image'


const BlogId = ({params}:{params:{id:string}}) => {
    const blog= blogs.find((blog) => blog.id === +params.id)
    if (!blog) {
        return (
          <div className="text-center text-3xl font-semibold text-red-500 mt-10">
            Blog not found
          </div>
        )
      }
   
  return (
    <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 justify-start items-center  min-h-[calc(100vh-64px)]  px-24 max-lg:px-4 gap-4">
        <div><Image src={blog.image} alt="blog" width={400} height={400} className="rounded-xl" priority/></div>
        <div>
            <h1 className='text-xl font-semibold'>{blog.title}</h1>
            <p>{blog.description}</p>
            <h1>{blog.date}</h1>
        </div>
    </div>
  )
}

export default BlogId