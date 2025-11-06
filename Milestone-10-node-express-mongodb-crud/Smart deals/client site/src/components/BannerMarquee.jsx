import React from 'react';
import Marquee from 'react-fast-marquee';

const BannerMarquee = () => {
  return (
    <div className="w-full  py-2 overflow-hidden">
      <Marquee gradient={false} speed={80}>
        🔥 Hot Deals Available Now! &nbsp; 🔥 Don’t Miss Our Exclusive Offers! &nbsp; 🎉 Buy Now!
      </Marquee>
    </div>
  );
};

export default BannerMarquee;
