import React, { useEffect, useState } from 'react'
import collection from '@/appwrite_service/collection_service';



function CommentSection({setopenCS,postid,commentername}) {
  const [comment,setComment]=useState('')
  const  [comments,setComments]=useState(null)
  const [Loading,setLoading]=useState(false)
    async function  postcomment(){
     await collection.createComment(postid,comment,commentername)
  }
  async function getcomments(){
    const com=await collection.getCommentsList(postid)
    setComments(com)
    console.log(com)
  }
  useEffect(()=>{
     getcomments()   
  },[])
  return (
       <>
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
  <div className="bg-white rounded-lg shadow-md w-full max-w-2xl p-6 flex flex-col h-5/6">
    {/* Close Button */}
    <div className="flex justify-end">
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={()=> setopenCS(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    {/* Comments Header */}
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>

    {/* Scrollable Comments List */}
    <div className="overflow-y-auto flex-1 pr-2 space-y-4">
      
      {comments?.documents.map(((comment)=>(
      <div className="flex space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://via.placeholder.com/40"
          alt="Commenter Profile Picture"
        />
        <div className="bg-gray-100 rounded-lg p-3 flex-1">
          <h5 className="font-semibold text-gray-800">{comment?.commentername}</h5>
          <p className="text-gray-600">{comment?.comment}</p>
        </div>
      </div>
      )))}
  
      {/* Repeat the above div block for each comment */}
    </div>
    {/* Comment Form - Fixed at Bottom */}
    <div className="mt-4 flex space-x-2">
      <input
        type="text"
        className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a comment..."
        onChange={(e)=>{setComment(e.target.value)}}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600" onClick={()=>{postcomment()}}>
        Post
      </button>
    </div>
  </div>
</div>






        </>
      );
    };
    
    export default CommentSection;
    
  
