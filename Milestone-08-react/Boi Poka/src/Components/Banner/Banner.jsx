import React from 'react';
import bookImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen max-w-6xl mx-auto m-10 rounded-lg p-6">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImg}
      className=" rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold font">Books to freshen up your bookshelf</h1>
     
      <button className="btn bg-[#23BE0A] mt-5">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;