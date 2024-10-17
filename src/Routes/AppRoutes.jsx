import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login"
import Main from "../components/Main"
import App from "../App"
import About from "../components/About"
export const router=createBrowserRouter([
  {path:"/",
  element:<App/>,
  children:[{path:"",element:<Main/>},
            {path:"/login",element:<Login/>},
            {path:"/about",element:<About/>}
            
  ]

  }
])
