import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// Define the Post interface
interface Post {
  _id: string;
  message: string;
  name: string;
  createdAt: string; // Adjust if needed
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Use the Post interface

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/get-messages'); // Adjust the API endpoint as necessary
        const data = await response.json();
        if (data.success) {
          setPosts(data.data); // Assuming data.data contains the array of posts
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='flex lg:px-40 sm:mx-20 md:mx-20 mt-10 flex-col'>
      <div>
        <div className='flex flex-row justify-evenly'>
          <div>
            <h1 className='font-extrabold text-3xl text-gray-900'>What’s on Everyone’s Mind?</h1>
            <h4 className='font-semibold mt-4'>See what others are saying and add your voice to the mix. Your thoughts matter!</h4>
          </div>
          <div>
            <Link href='/'><button className='bg-black text-white px-4 py-2 rounded shadow-lg'>
              Home
            </button></Link>
          </div>
        </div>
        <hr className='mt-4 border-t border-gray-500' />
      </div>
      <div className='flex items-center justify-center my-10 flex-col gap-5'>
        {posts.map((post) => (
          <div key={post._id} className='border outline-1 outline-slate-400 shadow-lg rounded-3xl shadow-slate-700 p-5 w-7/12'>
            <p className='text-gray-800 font-bold'>{post.message}</p>
            <hr className='mt-4 border-t border-gray-500' />
            <div className='flex justify-between'>
              <span className='text-gray-600 font-semibold'>{post.name}</span>
              <span className='text-gray-600'>{new Date(post.createdAt).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
