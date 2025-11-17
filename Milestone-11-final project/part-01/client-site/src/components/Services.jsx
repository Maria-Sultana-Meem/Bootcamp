import React from "react";
import servicesImg from '../assets/service.png'
const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    highlight: false
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
    highlight: false
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    highlight: false
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    highlight: false
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    highlight: false
  }
];

const Services = () => {
  return (
    <div className="bg-[#003c46] py-16 mt-10 px-6 md:px-12 lg:px-20 rounded-3xl">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-white">
        Our Services
      </h2>

      <p className="text-center text-gray-200 max-w-2xl mx-auto mt-3 mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl shadow-sm text-center transition border 
              ${
                item.highlight
                  ? "bg-lime-200 border-lime-300 shadow-md"
                  : "bg-white border-gray-200"
              }
            `}
          >
            <div className="flex justify-center mb-4">
              <img
                src={servicesImg}
                alt="icon"
                className="w-16 h-16 opacity-90"
              />
            </div>

            <h3
              className={`text-lg font-semibold mb-2 ${
                item.highlight ? "text-[#003c46]" : "text-[#003c46]"
              }`}
            >
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
