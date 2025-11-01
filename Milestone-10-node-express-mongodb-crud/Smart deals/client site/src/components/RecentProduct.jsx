import React from 'react';
import { Link } from 'react-router';

const RecentProduct = ({product}) => {
    const {_id,title,price_min,price_max,image}=product
  
    
    return (
        <div className="card bg-base-100 hover:scale-105 transition ease-in-out  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-primary text-2xl font-bold">{title}</h2>
    <p className='font-semibold'>Price: <span className='text-red-500'>{price_min}$-{price_max}$</span></p>
    <div className="card-actions ">
      <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default RecentProduct;