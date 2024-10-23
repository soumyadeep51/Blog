import React, { useEffect } from 'react'
import imageservice from '../appwrite_service/BucketService'
function PostFeed({posts}) {

  return (
    <>
    
  <div className="max-w-3xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts</h2>
     {posts.documents.map((post)=>(
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-start">
        <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48" alt="Profile Picture"/>
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <span className="text-gray-500 text-sm">2h ago</span>
          </div>
          <p className="text-gray-700 mt-1">{post.title}</p>
          <h10>{post.Content}</h10>
          <div className="mt-2">
            <img className="rounded-lg w-full" src="https://via.placeholder.com/600x300" alt="Post Image"/>
          </div>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <button className="flex items-center hover:text-blue-500 transition">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2m4-3v12m-6 0v2m12-2v2m-6-2h.01"></path>
              </svg>
              Like
            </button>
            <button className="flex items-center hover:text-blue-500 transition">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h6"></path>
              </svg>
              Comment
            </button>
            <button className="flex items-center hover:text-blue-500 transition">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2m4-3v12m-6 0v2m12-2v2m-6-2h.01"></path>
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  )
}

export default PostFeed
