import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
   <nav className='flex gap-10 justify-center '>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/products"} >Products</NavLink>
    <NavLink to={"/login"}>Login</NavLink>
   </nav>
  )
}

export default Nav
