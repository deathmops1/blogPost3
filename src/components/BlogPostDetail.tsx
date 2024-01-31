import { useParams,Link } from 'react-router-dom';
import useBlogs from './useBlogs';
import React, { useEffect } from 'react';

const BlogPostDetail = () => {
  const { id } = useParams();

  if (!id) {
    return <p>Blog post not found.</p>;
  }

  const { isLoading, error, data } = useBlogs();

  useEffect(() => {
    const { id } = useParams();

    if (!id) {
      return;
    }

    const post = data.find((post) => post.id === parseInt(id));

    if (!post) {
      return;
    }

    document.title = post.title;
  }, [id, data, isLoading, error]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const post = data.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  const index = data.findIndex((post) => post.id === parseInt(id));

  const previousBlogPost = data[index -1];

  return (
    <div className="container px-8 mx-auto">
      <div className="flex flex-col md:flex-row lg:flex-row ">
        <div className="w-full lg:w-1/2">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover object-center h-[400px] w-full"
          />
        </div>
        <div className="flex flex-col justify-around px-6 py-4 lg:w-1/2 items-left">
          <h1 className="text-4xl font-bold text-blue-600">{post.title}</h1>
          <p className="mt-2 text-base text-gray-700 md:text-xl">
            {post.desc}
          </p>
          <div className="pt-4 mt-4 border-t border-black">
            <p className="text-sm text-gray-500">Erstellt am: {post.date}</p>
          </div>
          {previousBlogPost && (
            <Link to={`/blog/${previousBlogPost.id}`} className="p-2 px-4 text-lg font-bold text-white bg-blue-600 hover:underline">
              Vorheriger Beitrag
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;