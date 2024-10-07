import { useEffect, useReducer, useState } from 'react'
import Register from './components/Register'
import { authservice } from './appwrite_service/auth_service'
import { useDispatch, useSelector } from 'react-redux' 
import { login,logout } from './store/authSlice'
import Header from './components/Header'
function App() {
  /*const dispatch=useDispatch()
   const {isloggedin,userdata}=useSelector((state)=>state.auth)

  useEffect(()=>{async function getuser(){
    const user=await authservice.getcurrentuser();

    if (user){
      dispatch(login({user}))
    }
    
    

 }getuser()
  
   
},[])
 console.log(userdata);
 */
  return (
    <>
     <Header></Header>
      
    </>
  )
}

export default App
