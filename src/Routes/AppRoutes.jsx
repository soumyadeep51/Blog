import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login"
import Main from "../components/Main"
import App from "../App"
import About from "../components/About"
import Userpage from "../components/Userpage";
import AddPost from "../components/AddPost";
export const router=createBrowserRouter([
  {path:"/",
  element:<App/>,
  children:[{path:"",element:<Main/>},
            {path:"/login",element:<Login/>},
            {path:"/about",element:<About/>},
            {path:"/:id",element:<Userpage/>},
            {path:"/createpost",element:<AddPost/>}
            
  ]

  }
])
