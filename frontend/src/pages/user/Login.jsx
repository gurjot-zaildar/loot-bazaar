
import {useForm} from "react-hook-form"
import {nanoid} from "nanoid"
import { Link } from 'react-router-dom'

const Login = () => {

  const{register,handleSubmit} = useForm();

  const loginhandler =(user)=>{
    
    console.log(user)
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
