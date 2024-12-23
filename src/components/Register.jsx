import React, { useEffect, useState } from 'react'
import {authservice} from '../appwrite_service/auth_service.js'
import { useDispatch } from 'react-redux'

function Register() {
    const [loggedinuser ,setLoggedinuser]=useState(null)
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    async function login(email, password){
      const user=await authservice.login(email,password)
      dispatch
        
    }
  return (
    <div>
      {loggedinuser?(<>Logged in as {loggedinuser.name}</>):(<>not logged in</>)}
      <form action="">
        <input type="text" name="name" id="" value={name} placeholder="name" onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" name="email" value={email} placeholder="email" id="" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" name='password' value={ password} placeholder='password'onChange={(e)=>{setPassword(e.target.value)}} />
        <button type="button" onClick={async()=>{ await authservice.login(email,password)
            setLoggedinuser(await authservice.getcurrentuser())
                                                               
        
          
        }}>Login</button>
        <button type="button" onClick={()=>authservice.createuser(email,password,name) }>Register</button>
        <button type="button" onClick={()=>{ authservice.logout()
            setLoggedinuser(null)
        }}>Logout</button>
      </form>
      
    </div>
  )
}

export default Register
