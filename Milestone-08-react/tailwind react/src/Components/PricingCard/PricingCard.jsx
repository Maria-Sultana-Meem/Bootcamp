import { ChartBarBigIcon } from 'lucide-react';
import React from 'react';

const PricingCard = ({pricing}) => {
    return (
        <div className='bg-pink-50 p-6 rounded-2xl'>
            <div>
                <h1 className="text-4xl">{pricing.plan}</h1>
                <h4 className="text-2xl">{pricing.price}</h4>
            </div>
             <div className='bg-pink-200 p-2 rounded-2xl'>
                    <p className='text-xl'>{pricing.description}</p>
                    <p className='text-xl'> {pricing.features}</p>
            </div>
            <button class="btn btn-outline btn-secondary w-full">Subscribe</button>
        </div>
    );
};

export default PricingCard;