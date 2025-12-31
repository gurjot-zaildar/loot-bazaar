import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';


const Nav = () => {
  
const user = useSelector((state)=> state.userReducer.users);



  return (
   <nav className='flex gap-10 justify-center '>

    <NavLink to={"/"}>Home</NavLink>
    {user ? (<>
    {user && user?.isAdmin && (
      <NavLink to={"/admin/create-product"}>create product</NavLink>
     )}
      <NavLink to={"/admin/user-profile"}>setting</NavLink>
  
    </>):(<>
      <NavLink to={"/login"}>Login</NavLink>
    </>)}

    
   </nav>
  )
}

export default Nav
