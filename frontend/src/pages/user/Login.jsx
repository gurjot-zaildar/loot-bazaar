
import {useForm} from "react-hook-form"
import {nanoid} from "nanoid"
import { Link, useNavigate } from 'react-router-dom'
import { asyncloginuser } from "../../store/actions/userActions";
import { useDispatch } from 'react-redux'

const Login = () => {
const dispatch = useDispatch()
  const{register,handleSubmit} = useForm();
  const navigate=useNavigate()

  const loginhandler =(user)=>{
   dispatch(asyncloginuser(user));
  
  }

  return (
    <div>
      login

      <form
      onSubmit={handleSubmit(loginhandler)}
      className='flex flex-col'>
        <input
        {...register("email")}
         type="email" 
         placeholder='email' />
        <input
        {...register("password")} 
        type="password" 
        placeholder='password' />
        <button>submit </button>
        <p>dont have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  )
}

export default Login
