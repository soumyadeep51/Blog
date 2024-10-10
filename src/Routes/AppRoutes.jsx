import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login"
import Main from "../components/Main"
import App from "../App"
export const router=createBrowserRouter([
  {path:"/",
  element:<App/>,
  children:[{path:"",element:<Main/>},
            {path:"/login",element:<Login/>}
            
  ]

  }
])
