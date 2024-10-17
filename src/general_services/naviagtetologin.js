import { useEffect } from "react";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
export default function useCheckLoggedin(){
    const isloggedin=useSelector(state=>state.auth.isloggedin)
    const navigate=useNavigate()
    useEffect(()=>{
    if (!isloggedin) {
        navigate("/login")
    }
},[isloggedin])
}