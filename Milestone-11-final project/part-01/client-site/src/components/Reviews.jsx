import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviewImg from '../assets/customer-top.png'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise)
    return (
       <div className='mt-10'>
        <div className='flex flex-col justify-center w-1/2 mx-auto space-y-5'>
            <img src={reviewImg} alt="" />
            <h1 className='text-3xl font-bold'>What our customers are sayings</h1>
            <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>

   
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
       
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:.75,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow,Autoplay, Pagination]}
        className="mySwiper"
      >
        {
            reviews.map((review)=><SwiperSlide key={review.id}>
         <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
        }
        
      </Swiper>



       </div>
    );
};

export default Reviews;