import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {asyncupdateuser}from "../../store/actions/userActions";

const Products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.userReducer.users);
  const products = useSelector((state)=> state.productReducer.products);
  
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
  }

  const renderproduct= products.map((product) => {
    return <div className='w-[33%] mr-3 mb-3 border shadow' key={product.id}>
      <img className="w-full h-[30vh] object-cover" src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <small>{product.description?.slice(0,100)}....</small>
      <div className='mt-3 p-3  flex justify-between items-center '>
        <p>{product.price}</p>
        <button type='button' onClick={()=>AddtoCartHandler(product)}>add to cart</button>
      </div>
      <Link to= {`/product/${product.id}`}>more  info</Link>
    </div>
  })

  return products.length > 0 ? <div className=" overflow-auto flex flex-wrap"> {renderproduct}</div> : <div>Loading...</div>;
  
};

export default Products
