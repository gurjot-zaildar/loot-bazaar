
import {useForm} from "react-hook-form"
import {nanoid} from "nanoid"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { asyncregisteruser } from "../../store/actions/userActions";

const Register = () => {

  const{register,handleSubmit} = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const registerhandler =(user)=>{
    user.id=nanoid();
    user.isAdmin = false;
    console.log(user)
    dispatch(asyncregisteruser(user))
    navigate("/login");
  }

  return (
    <div>
     Register

      <form
      onSubmit={handleSubmit(registerhandler)}
      className='flex flex-col'>
        <input
        {...register("username")}
         type="text"
        placeholder="username" />
        <input
        {...register("email")}
         type="email" 
         placeholder='email' />
        <input
        {...register("password")} 
        type="password" 
        placeholder='password' />
        <button>register user </button>
        <p>already have an account? <Link to="/login">login</Link></p>
      </form>
    </div>
  )
}

export default Register
