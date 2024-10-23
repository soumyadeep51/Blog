import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import store from '../store/store'
import {logout} from "../store/authSlice"
import { authservice } from '../appwrite_service/auth_service'
import { useNavigate } from 'react-router-dom'
import PostFeed from './PostFeed'

function Main() {
  const [name,setname]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(state=>state.auth.userdata)
  const isloggedin=useSelector(state=>state.auth.isloggedin)
   console.log(user)
  
  useEffect(()=>{
    if (!isloggedin) {
      navigate("/login")
    }
  },[isloggedin])
  return (
    <div>
     
      
      {(user)?(<h1>Welcome {user.name}</h1>):(<></>)}
     
       <button onClick={async()=>{
        await authservice.logout()
        dispatch(logout())
        //navigate("/login")
       }}>Logout</button>
    </div>
  )
}

export default Main
