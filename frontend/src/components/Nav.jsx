import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { asynclogoutuser } from '../store/actions/userActions';

const Nav = () => {
  const dispatch=useDispatch();
  const navigate= useNavigate()
const user = useSelector((state)=> state.userReducer.users);

const logouthandler=()=>{
  dispatch(asynclogoutuser());
  navigate("/");
}

  return (
   <nav className='flex gap-10 justify-center '>

    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/products"} >Products</NavLink>
    {user ? (<>
      <NavLink to={"/admin/create-product"}>create product</NavLink>
   <button onClick={logouthandler}>logout</button>
    </>):(<>
      <NavLink to={"/login"}>Login</NavLink>
    </>)}

    
   </nav>
  )
}

export default Nav
