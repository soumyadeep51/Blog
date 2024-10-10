import React, { useState } from 'react'
import { authservice } from '../appwrite_service/auth_service'
import { redirect, useNavigate } from 'react-router-dom'
function Login() {

  const [login,setlogin]=useState({email:null,password:null})
  const navigate=useNavigate()
  async function handleLogin(){
   try {
    const data=await authservice.login(login)
    console.log(data.name);
    navigate('/')
    
   } catch (error) {
    console.log('couldnt login')
   }
}
  
  return (
    <div>
       <label htmlFor="Email">Email:</label>
      <input type="email" name="" id="" placeholder="Email" onChange={(e)=>{
        setlogin((prev)=>(
          {...prev,email:e.target.value}
        ))}}/>
      <label htmlFor="password">Password:</label>
      <input type="password" name="" id="" placeholder='Password'  onChange={e=>setlogin(
        (prev)=>({...prev, password:e.target.value}))}/>
      <input type="button" value="submit" onClick={handleLogin} />    
    </div>
  )
}


export default Login
