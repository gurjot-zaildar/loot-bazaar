import React from 'react'
import {useSelector} from "react-redux";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  
const user = useSelector((state)=> state.userReducer.users);
console.log(user);
  return (
   <nav className='flex gap-10 justify-center '>

    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/products"} >Products</NavLink>
    {user ? (<>
      <NavLink to={"/admin/create-product"}>create product</NavLink>
    </>):(<>
      <NavLink to={"/login"}>Login</NavLink>
    </>)}

    
   </nav>
  )
}

export default Nav
