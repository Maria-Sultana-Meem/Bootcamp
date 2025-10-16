import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({fetchPricing}) => {

    const pricingData= use(fetchPricing)
   
    
    return (
        <div className='text-5xl container mx-auto'>
            <h2>Get Our Membership</h2>
            <div className='grid grid-cols-3 gap-8'>

                {
                  pricingData.map(pricing=><PricingCard
                    key={pricing.id}
                    pricing={pricing}></PricingCard>)
                }
               
            </div>
        </div>
    );
};

export default PricingOptions;