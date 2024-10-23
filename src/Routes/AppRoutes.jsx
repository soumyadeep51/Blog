import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login"
import Main from "../components/Main"
import App from "../App"
import Userpage from "../components/Userpage";
import AddPost from "../components/AddPost";
import Card_Post from "../components/Card_Post";
export const router=createBrowserRouter([
  {path:"/",
  element:<App/>,
  children:[{path:"",element:<Main/>},
            {path:"/login",element:<Login/>},
        
            {path:"/:id",element:<Userpage/>},
            {path:"/createpost",element:<AddPost/>},
            {path:"/card",element:<Card_Post/>}
            
  ]

  }
])
