import React from "react";
import img from '.././assets/m.png'
import 'animate.css';
import BannerMarquee from "./BannerMarquee";

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto pt-30 pb-10">
        <BannerMarquee></BannerMarquee>
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center md:justify-between gap-6">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={img}
          alt="Exclusive Model"
          className="rounded-xl shadow-lg  animate__animated animate__zoomIn animate__infinite animate__slow  object-cover w-[400px] h-full"
          
        />
      </div>

      {/* Right side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeInDown animate__infinite animate__slow">Here My Exclusive Model</h1>
        <p className="text-lg">
          All of this character's body parts are carefully crafted, so you can buy with confidence.
        </p>
        
      </div>
    </div>
    </div>
  );
};

export default Banner;
