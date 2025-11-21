import React from "react";

const AboutUS = () => {
  return (
    <div className="mt-20">
        <div className="max-w-6xl text-left bg-white mx-auto px-4 py-16 rounded-md">
      <h2 className="text-4xl font-bold mb-2">About Us</h2>
      <p className="text-gray-600 max-w-2xl mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-8 text-lg font-semibold">
        <button className="text-[#8DC63F] border-b-2 border-[#8DC63F] pb-2">
          Story
        </button>
        <button className="text-gray-500 hover:text-black pb-2">Mission</button>
        <button className="text-gray-500 hover:text-black pb-2">Success</button>
        <button className="text-gray-500 hover:text-black pb-2">
          Team & Others
        </button>
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it’s a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>

        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it’s a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>

        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it’s a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUS;
