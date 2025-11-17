import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../assets/brands/amazon.png'
import amazonVector from '../assets/brands/amazon_vector.png'
import casio from '../assets/brands/casio.png'
import moonstar from '../assets/brands/moonstar.png'
import ranstad from '../assets/brands/randstad.png'
import star from '../assets/brands/star.png'
import starPeople from '../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';
const Brands = () => {
    return (
       <div className='mt-10'>
        <h1 className='py-5 font-bold text-4xl'>We've helped thousands of sales teams</h1>

        <Swiper 
          slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
       >

        <SwiperSlide><img src={amazon} alt="" /></SwiperSlide>
        <SwiperSlide><img src={amazonVector} alt="" /></SwiperSlide>
        <SwiperSlide><img src={casio} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moonstar} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ranstad} alt="" /></SwiperSlide>
        <SwiperSlide><img src={star} alt="" /></SwiperSlide>
        <SwiperSlide><img src={starPeople} alt="" /></SwiperSlide>
       
       </Swiper>
       </div>
    );
};

export default Brands;