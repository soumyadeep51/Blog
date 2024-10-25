import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import store from '../store/store'
import {logout} from "../store/authSlice"
import { authservice } from '../appwrite_service/auth_service'
import { useNavigate } from 'react-router-dom'
import PostFeed from './PostFeed'
import collection from '@/appwrite_service/collection_service'
function Main() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(state=>state.auth.userdata)
  const isloggedin=useSelector(state=>state.auth.isloggedin)
  const [post,setPost]=useState(null)
  async function getposts(){
    const posts=await collection.listallposts()
    setPost(posts)
  }
  
  useEffect(()=>{
    if (!isloggedin) {
      navigate("/login")
    }else{
      getposts()
      console.log("from main",post)  
    }
  },[])
  return (
    <div>
     
      
      {(user)?(<h1>Welcome {user.name}</h1>):(<></>)}
     
       <button onClick={async()=>{
        await authservice.logout()
        dispatch(logout())
        //navigate("/login")
       }}>Logout</button>
       {(post)?(<PostFeed posts={post} userdata={user}/>):(<></>)}
       
    </div>
  )
}

export default Main
