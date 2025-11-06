import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllProducts = () => {
  const data = useLoaderData()
  const [models, setModels] = useState(data)
  const [loading,setLoading]=useState(false)
  const handleSearch=(e)=>{
    e.preventDefault()
    const search_Text = e.target.search.value
    setLoading(true)
    fetch(`http://localhost:3000/search?search=${search_Text}`)
    .then(res=>res.json())
    .then(data=>{
       setModels(data)
      setLoading(false)
    })

  }

  return (
    <div className="w-10/12 mx-auto pt-30 pb-10">
      <div>
         <form onSubmit={handleSearch} className=" pb-10 flex gap-2 justify-center">
       <label className="input rounded-full ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input name="search" type="search"  placeholder="Search" />
      </label>
      <button className="btn btn-secondary  rounded-full">{loading ? "Searching...." : "Search"}</button>
     </form>

      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {models.map((d) => (
        <div  key={d._id}>
          <div data-aos="zoom-in-up" className="card bg-[#f4349e9f] hover:scale-105 transition ease-in-out  shadow-sm">
            <figure className="px-10 pt-10">
              <img src={d.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary text-2xl font-bold">
                {d.title}
              </h2>
              <p className="font-semibold">
                Price:{" "}
                <span className="text-red-500">
                  {d.price_min}$-{d.price_max}$
                </span>
              </p>
              <div className="card-actions ">
                <Link
                  to={`/productDetails/${d._id}`}
                  className="btn btn-primary w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AllProducts;
