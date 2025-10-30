import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex  items-center gap-5 bg-base-200 p-4'>
          <p className='bg-secondary text-base-200 px-4 py-2'>Latest</p>  
          <Marquee className='flex gap-5 ' pauseOnHover={true} speed={60}>
            <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          </Marquee>
          
        </div>
    );
};

export default LatestNews;