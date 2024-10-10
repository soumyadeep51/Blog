import { useEffect, useReducer, useState } from 'react'
import Register from './components/Register'
import { authservice } from './appwrite_service/auth_service'
import { useDispatch, useSelector } from 'react-redux' 
import { login,logout } from './store/authSlice'
import Header from './components/Header'
import { Outlet, redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
    //const loggedin=useSelector((state)=>state.auth.status)
    const [log,setlog]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        authservice.getcurrentuser().then(
          (data)=>{setlog(data)
                if (!data) {
                  return navigate("/login")
                }      
    })
    },[navigate])
  
    //collection.listallposts().then(data=>console.log(data))
  return (
    <>
      <Header/>
      <Outlet/>
    
    </>
  )
}

export default App
