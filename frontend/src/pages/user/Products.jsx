import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Products = () => {
  const products = useSelector((state)=> state.productReducer.products) || [];
  console.log(products);

  const renderproduct= products.map((product) => {
    return <div className='w-[33%] mr-3 mb-3 border shadow' key={product.id}>
      <img className="w-full h-[30vh] object-cover" src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <small>{product.description?.slice(0,100)}....</small>
      <div className='mt-3 p-3  flex justify-between items-center '>
        <p>{product.price}</p>
        <button>add to cart</button>
      </div>
      <Link to= {`/product/${product.id}`}>more  info</Link>
    </div>
  })

  return products.length > 0 ? <div className=" overflow-auto flex flex-wrap"> {renderproduct}</div> : <div>Loading...</div>;
  
};

export default Products
