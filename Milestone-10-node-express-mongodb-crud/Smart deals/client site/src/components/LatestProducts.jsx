import React, { use } from 'react';
import RecentProduct from './RecentProduct';

const LatestProducts = ({latestProductPromise}) => {
    const products = use(latestProductPromise)
    return (
        <div>
            <h1 className='font-bold text-4xl text-center'>Recent <span className='text-primary'>Products</span></h1>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-10/12 mx-auto py-10'>
             {
                products.map(product=><RecentProduct key={product._id} product={product}></RecentProduct>)
            }
           </div>
        </div>
    );
};

export default LatestProducts;