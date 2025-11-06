import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3000/myproducts`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Failed to load your products",
          text: err.message,
        });
      });
  }, [user]);

  if (loading) {
    return <p className="text-center mt-10 text-xl">Loading your products...</p>;
  }

  if (myProducts.length === 0) {
    return <p className="text-center mt-10 text-xl">You have no confirmed products yet.</p>;
  }

  return (
    <div className="pt-30 pb-10 w-10/12 mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Confirmed Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProducts.map((product) => (
          <div
            key={product._id}
            className="card bg-[#f4349e56] shadow-sm p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg mb-4 w-full  object-cover"
            />
            <h2 className="text-xl font-bold mb-2 text-primary">{product.title}</h2>
            <p className="font-semibold text-red-500">
              ${product.price_min} - ${product.price_max}
            </p>
            <p className="font-bold">By: <span className="text-red-500">{product.userId}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
