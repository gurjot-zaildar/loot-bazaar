import { lazy, Suspense } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import useInfinityProducts from '../../utils/useInfinityProducts';



const ProductTemplate= lazy( ()=>import('../../components/ProductTemplate'));


const Products = () => {

const {products,hasMore,fetchproducts}= useInfinityProducts()

  
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
