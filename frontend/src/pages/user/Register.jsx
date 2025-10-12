
import {useForm} from "react-hook-form"
import {nanoid} from "nanoid"
import { Link } from 'react-router-dom'

const Register = () => {

  const{register,handleSubmit} = useForm();

  const registerhandler =(user)=>{
    user.id=nanoid();
    console.log(user)
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
