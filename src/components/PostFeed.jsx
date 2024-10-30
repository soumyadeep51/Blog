import React, { useEffect, useState } from 'react'
import imageservice from '../appwrite_service/BucketService'
import { useSelector } from 'react-redux'
import collectionservice from '@/appwrite_service/collection_service'
import useCheckLoggedin from '@/general_services/naviagtetologin'
import CommentSection from './CommentSection'
function PostFeed({posts,userdata}) {
  //useCheckLoggedin()
  //console.log(posts)
  const [openCS,setopenCS]=useState(false)
  const [commentpostid,setCommentPostid]=useState()
  const [userid,setUserid]=useState(userdata?.$id)
  const [statepost,setStatepost]=useState(posts.documents)
  async function deletepost(postid){
      await collectionservice.deletePost(postid)
      setStatepost(statepost.filter(posts=>posts.$id!=postid))
  }
  useEffect(()=>{
           
  },[statepost,openCS])  
  return (
      <>
    <div className="max-w-3xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts</h2>
     {statepost.map((post)=>(
    <>
     <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-start">
        <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48" alt="Profile Picture"/>
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">{post.owner_name}</h3>
            <span className="text-gray-500 text-sm">2h ago</span>
          </div>
          <p className="text-gray-700 mt-1">{post.title}</p>
          <h10>{post.Content}</h10>
          <div className="mt-2">
            <img className="rounded-lg w-full" src={imageservice.getImage(post.featuredimage)} alt="Post Image"/>
          </div>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <button className="flex items-center hover:text-blue-500 transition">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2m4-3v12m-6 0v2m12-2v2m-6-2h.01"></path>
              </svg>
              Like
            </button>
            <button className="flex items-center hover:text-blue-500 transition" onClick={()=>{setopenCS(true)
              setCommentPostid(post?.$id)
            }}>
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h6"></path>
              </svg>
              Comment
            </button>
              

            <button className="flex items-center hover:text-blue-500 transition" >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2m4-3v12m-6 0v2m12-2v2m-6-2h.01"></path>
              </svg>
              Share
            </button>
            {(post.user_id==userid)?(
            <button class="text-gray-500 hover:text-red-500" onClick={()=>deletepost(post.$id)}>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M3 6h18"></path>
                    <path d="M19 6l-1 14H6L5 6"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                </svg>
                </button>
            ):(<></>)}
          </div>
        </div>
      </div>
      {(openCS)?(<><CommentSection setopenCS={setopenCS} commentername={userdata?.name} postid={commentpostid}/>   </>):(<></>)}
     
    </div>
  
  </>
  
  ))}
</div>


   </>  
)}

export default PostFeed
