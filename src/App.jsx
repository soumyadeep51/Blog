import { useEffect, useState } from 'react'
import Register from './components/Register'
import { authservice } from './appwrite_service/auth_service'
import { useDispatch, useSelector } from 'react-redux' 
import { login,logout } from './store/authSlice'
import Header from './components/Header'
import { Outlet, } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Spinner from './components/Spinner'
import checkloggedin from "./general_services/naviagtetologin"

function App() {
    //const loggedin=useSelector((state)=>state.auth.status)
    const [loading,setloading]=useState(true)
    const [log,setlog]=useState(null)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    async function getuserandupdatestore(){
                 const user=await authservice.getcurrentuser()
                 if (user) {
                    dispatch(login({userdata:user}))
                    setloading(false)
                 }else{
                     navigate("/login")
                     setloading(false)
                  }   
            }
            useEffect(()=>{
              getuserandupdatestore()
            },[])
           if (loading) {
               return <div><Spinner/></div>
           }
            
          return (
            <>
              <Header/>
             
              <Outlet/>
            
            </>
          )
        }
        
        export default App

    /*async function updatestore(){
          dispatch(login({userdata:log}))
    }*/
   
