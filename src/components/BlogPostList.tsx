import React from "react";
import { Link } from "react-router-dom";
import useBlogs from './useBlogs';



const BlogPostList = () => {
  const { isLoading, error, data } = useBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="flex max-w-full px-8 mx-auto">
        <div
          className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition duration-200 ease-in-out sm:h-[300px] md:h-[400px] lg:h-[500px]"
        >
          <div className="flex flex-col md:flex-row lg:flex-row ">
            <div className="w-full lg:w-1/2">
              <img
                src={data[0].image}
                alt={data[0].title}
                className="object-cover object-center h-[200px] w-full md:h-full lg:h-full"
              />
            </div>
            <div className="px-6 py-4 lg:w-1/2 flex flex-col items-left justify-around sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <h3 className="text-xl font-bold text-blue-600 transition duration-200 ease-in-out md:text-5xl">
                <Link to={`/blog/${data[0].id}`}>{data[0].title}</Link>
              </h3>
              <p className="mt-2 text-base text-gray-700 md:text-xl">
                {data[0].desc}
              </p>
              <div className="flex items-center justify-start mt-4">
                <Link to={`/blog/${data[0].id}`} className="p-2 px-4 text-lg font-bold text-white bg-blue-600 hover:underline">
                  Mehr erfahren
                </Link>
              </div>
              <div className="pt-4 mt-4 border-t border-black">
                <p className="text-sm text-gray-500">Erstellt am: {data[0].date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="grid grid-cols-1 gap-8 px-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(1).map((post) => (
          <div
            key={post.id}
            className="relative col-span-1 overflow-hidden transition duration-200 ease-in-out bg-white shadow-lg group hover:shadow-xl"
          >
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover object-center w-full h-64"
                />
              </div>
              <div className="flex-grow w-full px-6 py-4 bg-slate-200">
                <h3 className="text-3xl font-extrabold text-blue-600 transition duration-200 ease-in-out group-hover:text-blue-500">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {post.desc}
                </p>
                </div>
                <div className="flex items-center justify-start mt-4">
                  <Link to={`/blog/${post.id}`} className="p-2 px-4 text-lg font-bold text-white bg-blue-600 hover:underline">
                    Mehr erfahren
                  </Link>
                </div>
                <div className="pt-4 mt-4 border-t border-black">
                  <p className="text-sm text-gray-500">Erstellt am: {post.date}</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default BlogPostList;