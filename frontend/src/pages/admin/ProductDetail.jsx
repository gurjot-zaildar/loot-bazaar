import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { asyncdeleteproduct, asyncupdateproduct } from '../../store/actions/productAction';
import { toast } from 'react-toastify';
import "../../style/ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products) || [];
  const users = useSelector((state) => state.userReducer.users);
  const product = products.find((p) => p.id == id);

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      })
    }
  }, [product, reset])

  const UpdateProductHandler = (data) => {
    const updatedProduct = { id, ...data };
    dispatch(asyncupdateproduct(updatedProduct));
    toast.success("Updated Successfully")
    navigate('/');
  }

  if (!product) return <div>Loading...</div>;


  const deletehandler=()=>{
    dispatch(asyncdeleteproduct(id));
     toast.success("Deleted Successfully")
    navigate("/")
  }

  return (
    <>
      <div className='main'>
        <img src={product.image} alt={product.title} />

        <div className='box-1'>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <button>add to cart</button>
        </div>
      </div>

      <div>
        <hr />

      {users && users?.isAdmin &&

        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className='form'>
          <input
            {...register("title")}
            type="text"
            placeholder="title" 
            className='title'/>
          <input
            {...register("price")}
            type="number"
            placeholder='price' 
            className='price'/>

          <textarea
            {...register("description")}
            placeholder='description'
            className='desc'
          ></textarea>

          <input
            {...register("image")}
            type="url"
            placeholder='image url' 
            className='url'/>

          <input
            {...register("category")}
            type="text"
            placeholder='category' 
            className='cat'/>
          <button className='update-btn' type='submit'>update product</button>
        <button className='del-btn' type='button' onClick={deletehandler}>delete product</button>
        </form>
}
      </div>
    </>
  )
}

export default ProductDetail
