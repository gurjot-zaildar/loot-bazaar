import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {asyncupdateuser} from "../store/actions/userActions"

 import { ToastContainer, toast } from 'react-toastify';
 import "../style/ProductTemplate.css"

const ProductTemplate = ({product}) => {

  const dispatch = useDispatch();
const users = useSelector((state)=> state.userReducer.users);
const navigate=useNavigate()

    const AddtoCartHandler =(product)=>{
        const copyuser= {...users , cart:[...users.cart]};
        const x = copyuser.cart.findIndex((c)=>c?.product?.id==product.id);
        if(x== -1){
          copyuser.cart.push({product ,quantity :1});
        }else{
          copyuser.cart[x]={
            product,
            quantity:copyuser.cart[x].quantity+1,
          }
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser))
        
        toast.success("Added to cart 🛒");
        navigate("/cart")
      
      }
    

  return (
  <div className='product' key={product.id}>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <small>{product.description?.slice(0,100)}....</small>
        <div className='info'>
        <Link to= {`/product/${product.id}`}>more  info</Link>  
        </div>
        <div className='box-1'>
          <p>{product.price}</p>
          <button type='button' onClick={()=>AddtoCartHandler(product)}>add to cart</button>
        </div>
      </div>
  )
}

export default ProductTemplate
