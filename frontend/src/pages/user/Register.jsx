
import {useForm} from "react-hook-form"
import {nanoid} from "nanoid"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { asyncregisteruser } from "../../store/actions/userActions";
import "../../style/register.css"

const Register = () => {

  const{register,handleSubmit} = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const registerhandler =(user)=>{
    user.id=nanoid();
    user.isAdmin = false;
    user.cart = [];
    console.log(user)
    dispatch(asyncregisteruser(user))
    navigate("/login");
  }

  return (
    <div className="main">
      <div className="box-1">
         <img src="https://imgs.search.brave.com/9c_BU2vte_BQCdy5anZ5m7fRLSkSZqLl8tW7OPChc5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/ODI1MTAyMi92ZWN0/b3IvcGFyY2VsLWJv/eGVzLW9yLWNhcmRi/b2FyZC1mbG9hdC1p/bnRvLXNob3BwaW5n/LWNhcnQtYW5kLWhh/dmUtYW4tb3JkZXIt/Y29uZmlybS1wb3At/dXAtaWNvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VFYt/YjhwNzA3SEtvR2NW/SWxHWkpPT1RtYzI1/WmJlLXQtRHZlOF9r/V2RDdz0" alt="" />
      </div>
    <div className="box-2">

    
    <h1>
      Register Page
      </h1> 

      <form
      onSubmit={handleSubmit(registerhandler)}
      className="form">
        <input
        {...register("username")}
         type="text"
        placeholder="username" 
        className="username"/>
        <input
        {...register("email")}
         type="email" 
         placeholder='email' 
         className="email"/>
        <input
        {...register("password")} 
        type="password" 
        placeholder='password'
        className="password" />
        <button>Register User </button>
        <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
      </form>
      </div>
    </div>
  )
}

export default Register
