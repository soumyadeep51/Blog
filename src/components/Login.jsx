import React, { useState } from 'react'
import { authservice } from '../appwrite_service/auth_service'
import { redirect, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
function Login() {

  const [log,setlogin]=useState({email:null,password:null})
  const navigate=useNavigate()
  const dispatch=useDispatch()
  async function handleLogin(){
   try {
    const user=await authservice.login(log)
    const loggedinuser=await authservice.getcurrentuser()
    try {
      dispatch(login({userdata:loggedinuser}))
      
    } catch (error) {
      console.log("could not store in store",error)
    }
    
    //console.log(data.name);
    navigate('/')
    
   } catch (error) {
    console.log('couldnt login')
   }
}
  
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-sm">
    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Login</h2>
    
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your email"
          required
          onChange={(e)=>{
            setlogin((prev)=>(
              {...prev,email:e.target.value}
            ))}}/>
        </div>
        <div className="mb-6">
        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your password"
          required
          onChange={e=>setlogin(
            (prev)=>({...prev, password:e.target.value}))}
          />
        </div>
        <button
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
        onClick={handleLogin}
      >
        Sign In
      </button>
      <p className="text-center text-gray-500 text-sm mt-4">
        Don't have an account?
        <a href="#" className="text-blue-500 hover:underline">Sign up</a>
      </p>
    
   </div>
</div>




  )
}


export default Login
