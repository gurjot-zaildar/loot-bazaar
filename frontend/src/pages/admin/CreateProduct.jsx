import React from 'react'
import {useForm} from "react-hook-form"
import {nanoid} from "nanoid"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { asyncregisteruser } from "../../store/actions/userActions";
import { asynccreateproduct } from '../../store/actions/productAction';
import { toast } from 'react-toastify';

const CreateProduct = () => {
   const{register,handleSubmit} = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const CreateProductHandler =(product)=>{
    product.id=nanoid();
    console.log(product)
   dispatch(asynccreateproduct(product))
    toast.success("Product Created successfully")
   navigate("/")
  }

  return (
    <div>
     Register

      <form
      onSubmit={handleSubmit(CreateProductHandler)}
      className='flex flex-col'>
        <input
        {...register("title")}
         type="text"
        placeholder="title" />
        <input
        {...register("price")}
         type="number" 
         placeholder='price' />

        <textarea
          {...register("description")}
          placeholder='description'
        ></textarea>

        <input
        {...register("image")} 
        type="url" 
        placeholder='image url' />

         <input
        {...register("category")} 
        type="text" 
        placeholder='category' />
        <button>Create product </button>
      </form>
    </div>
  )
}

export default CreateProduct
