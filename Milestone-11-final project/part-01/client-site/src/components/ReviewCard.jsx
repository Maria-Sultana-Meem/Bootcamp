import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    return (
        <div className='my-10'>
            <div className="card w-96 bg-white shadow-xl p-6 md:p-8 rounded-2xl border border-gray-100">
      <div className="card-body p-0"> 
        
        
        <div className="mb-4">
          <FaQuoteLeft className="text-5xl text-blue-300 opacity-70" /> {/* Larger icon, specific color */}
        </div>

      
        <p className="text-gray-700 text-lg font-bold leading-relaxed mb-6">
          {review.review}
        </p>

        
        <div className="border-t border-dashed border-gray-300 my-6"></div>

        
        <div className="flex items-center">
         
          <div className="avatar mr-4">
            <div className="w-14 h-14 rounded-full bg-[#0D3839] flex items-center justify-center text-white text-xl font-bold">
             <img src={review.user_photoURL} alt="" />
            </div>
          </div>
          
         
          <div>
            <h3 className="font-bold text-lg text-gray-800">{review.userName}</h3>
            <p className="text-gray-500 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ReviewCard;
