import { lazy, Suspense, useEffect, useState } from 'react';
import axios from '../../api/axoisconfig';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import {loadlazyproduct} from "../../store/reducers/productSlice"
const ProductTemplate= lazy( ()=>import('../../components/ProductTemplate'));


const Products = () => {
  const dispatch=useDispatch();
const {products} = useSelector((state)=>state.productReducer)
const [hasMore, sethasMore] = useState(true)

const fetchproducts = async()=>{
  try{
      const {data} = await axios.get(`/products?_limit=6&_start=${products.length}`)
      if(data.length === 0){
        sethasMore(false)
      }else{
        sethasMore(true)
        dispatch(loadlazyproduct(data))
      }
  }catch(error){
    console.log(error)
  }
}

useEffect(()=>{
  fetchproducts()
},[]);

  
  return <InfiniteScroll
   dataLength={products.length}
   next={fetchproducts}
   hasMore={hasMore}
   loader={<h1>loading...</h1>}
   endMessage={
     <p><b>you have seen iy all.</b></p>
   }
   >
     <div className=" flex flex-wrap">
     { products.map((product) =>(
       <Suspense fallback={<h1>loading...</h1>}>
       <ProductTemplate key={product.id} product={product}/>
      </Suspense>
      ))}

   </div>
   </InfiniteScroll>
  
};

export default Products
