import React from "react";
import { Truck, Package, HandCoins, Building2 } from "lucide-react";

const steps = [
  {
    icon: <Package className="w-12 h-12 text-[#003c46]" />,
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <HandCoins className="w-12 h-12 text-[#003c46]" />,
    title: "Cash On Delivery",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <Truck className="w-12 h-12 text-[#003c46]" />,
    title: "Delivery Hub",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <Building2 className="w-12 h-12 text-[#003c46]" />,
    title: "Booking SME & Corporate",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-14 mt-10 px-6 md:px-12 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#003c46] mb-10">
        How it Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#003c46] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
