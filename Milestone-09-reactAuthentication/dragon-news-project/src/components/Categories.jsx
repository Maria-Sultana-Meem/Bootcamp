import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res=>res.json())
const Categories = () => {
    const categories = use(categoryPromise)
    
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
            <div className='grid grid-cols-1 gap-3 my-3'>
                {
             categories.map(category=><NavLink to={`/category/${category.id}`} key={category.id}
             className='bg-base-100 border-0 btn hover:bg-base-200 font-semibold text-accent'>{category.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default Categories;