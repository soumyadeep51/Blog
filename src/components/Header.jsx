import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
function Header() {
    const userdata=useSelector((state)=>state.auth.userdata)
    const authStatus=useSelector((state)=>state.auth.authstatus)
    let username=null
    if (userdata) {
      username=userdata.name
    }
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
     
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: username,
        slug: username,
        active: authStatus,
    },
    {
      name:"create Post",
      slug:"/createpost",
      active:authStatus,
    }
    ]
  return (
  <>
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-blue-600">MyWebsite</a>
        </div>
        <div className="flex space-x-4 items-center">
          {navItems.map((navitem)=>(
            <Link to={navitem.slug} className="text-gray-600 hover:text-blue-500 transition">{navitem.name}</Link>
          ))}
          
         
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Header
