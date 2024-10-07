import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
function Header() {
    
    const authStatus=useSelector((state)=>state.auth.status)
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
    ]
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {navItems.map((navitem)=>(
           <li className="nav-item" key={navitem.name}>
            <Link className="nav-link active" to={navitem.name}>{navitem.name}</Link>
         </li>
       ))}
        
      
       </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
