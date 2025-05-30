import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import TItle from './TItle';
import ProductItem from './ProductItem';

const LatestCollection = ()=> {
const{products} = useContext(ShopContext);
const[latestProducts, setLatestProducts] = useState([]);

 useEffect(() => {
   setLatestProducts(products.slice(0, 10));
 },[products]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <TItle text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>Discover our newest arrivals — curated styles, fresh trends, and timeless essentials all in one place</p>
        </div>
        {/* rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {
                latestProducts.map((item,index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div> 
  )
}

export default LatestCollection
