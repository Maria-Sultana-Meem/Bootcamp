import React from "react";
import img1 from '../assets/live-tracking.png'
import img2 from '../assets/safe-delivery.png'
import img3 from '../assets/safe-delivery.png'

const features = [
  {
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: img1,
  },
  {
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: img2,
  },
  {
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: img3,
  },
];

const Features = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 mt-10">

      <div className="flex justify-center mb-8">
        <div className="border-t border-dashed border-gray-400 w-full"></div>
      </div>

      <div className="space-y-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 shadow-sm"
          >
            {/* Image */}
            <div className="flex justify-center md:justify-start w-full md:w-1/3">
              <img src={item.img} alt={item.title} className="w-48 md:w-56" />
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold text-[#003c46] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Features;
