
import {useForm} from "react-hook-form"
import {nanoid} from "nanoid"
import { Link, useNavigate } from 'react-router-dom'
import { asyncloginuser } from "../../store/actions/userActions";
import { useDispatch } from 'react-redux'
import "../../style/login.css"

const Login = () => {
const dispatch = useDispatch()
  const{register,handleSubmit} = useForm();
  const navigate=useNavigate()

  const loginhandler =(user)=>{
   dispatch(asyncloginuser(user));
  
  }

  return (
    <div className="main">
      <div className="box-1">
     <img src="https://imgs.search.brave.com/9c_BU2vte_BQCdy5anZ5m7fRLSkSZqLl8tW7OPChc5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/ODI1MTAyMi92ZWN0/b3IvcGFyY2VsLWJv/eGVzLW9yLWNhcmRi/b2FyZC1mbG9hdC1p/bnRvLXNob3BwaW5n/LWNhcnQtYW5kLWhh/dmUtYW4tb3JkZXIt/Y29uZmlybS1wb3At/dXAtaWNvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VFYt/YjhwNzA3SEtvR2NW/SWxHWkpPT1RtYzI1/WmJlLXQtRHZlOF9r/V2RDdz0" alt="" />
      </div>
      <div className="box-2">

     <h1>
       LOGIN PAGE
      </h1>

      <form
      onSubmit={handleSubmit(loginhandler)}
      className="form">
        <input
        {...register("email")}
        type="email" 
        placeholder='email'
         className="email" />
        <input
        {...register("password")} 
        type="password" 
        placeholder='password'
        className="password" />
        <button>Login User </button>
        <p>Dont have an account?<span> <Link to="/register">Register</Link></span></p>
      </form>
        </div>
    </div>
  )
}

export default Login
