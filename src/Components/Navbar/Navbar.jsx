import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import { CgProfile } from 'react-icons/cg'

export default function Navbar() {
  const {user,logOut}=useContext(AuthContext)
const items=<>

 <li><NavLink to="/">Home</NavLink></li>
 <li><NavLink to="/treatment">AllTreatments</NavLink></li>
 <li><NavLink to="/appointment">MyAppoinments</NavLink></li>
 <li><NavLink to="/profile">profile</NavLink></li>

 
        
        

</>

  return (
    <div className="navbar bg-red-600 text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    {items}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {items}
      </ul>
    </div>
    {/* <div>{user&& user?.email}</div> */}
   <div>
   {user && user.email ? (
          <div className="flex items-center gap-2">
            <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />
            <span>{user.displayName}</span>
           
          </div>
        ) : (
          < CgProfile></CgProfile>
        )}
   </div>
    
    <div className="navbar-end">
      {user && user?.email? <button className="btn" onClick={logOut}>Logout</button> :  <Link to="/login"><button className="btn">Login</button> </Link>}
    
    </div>
  </div>
  )
}

