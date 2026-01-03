import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userActions';


const UserProfile = () => {
  const users = useSelector((state) => state.userReducer.users);

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (users) {
      reset({
        username: users.username,
        email: users.email,
        password: users.password,
      })
    }
  }, [users, reset])

  const UpdateUserHandler = (data) => {
    dispatch(asyncupdateuser(users.id,data));
    navigate('/products');
  }

  if (!users) return <div>Loading...</div>; 

  const logoutuserhandler=()=>{
    dispatch(asynclogoutuser())
    navigate("/login")
  }

  const deletehandler=()=>{
    dispatch(asyncdeleteuser(users.id))
    navigate("/login")
  }
  return users ? (
    <div>
      <h1 className='font-thin text-5xl'>{users.username}</h1>
      <h1 className='font-thin text-3xl'>{users.email}</h1>
      <hr className='my-10' />
       <form
          onSubmit={handleSubmit(UpdateUserHandler)}
          className='flex w-full flex-col justify-start items-start'>
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
          <button type='submit'>update user</button>
          <button type='button' onClick={logoutuserhandler}>logout user</button>
        <button type='button' onClick={deletehandler}>delete user</button>
        </form>
    </div>
  ): "loading..."
}

export default UserProfile
