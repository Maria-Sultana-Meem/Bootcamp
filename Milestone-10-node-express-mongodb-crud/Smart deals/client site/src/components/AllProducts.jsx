import React, { use } from "react";
import { Link } from "react-router";
const productPromise = fetch("https://smart-deals-psi.vercel.app/products").then((res) =>
  res.json()
);

const AllProducts = () => {
  const data = use(productPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {data.map((d) => (
        <div  key={d._id}>
          <div className="card bg-base-100 hover:scale-105 transition ease-in-out  shadow-sm">
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
  );
};

export default AllProducts;
