import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";


const ProductDetails = () => {
  const product = useLoaderData();
  const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);

 
  useEffect(() => {
    fetch(`https://smart-deals-psi.vercel.app/products/bids/${product._id}`,{
       headers:{
            authorization:`Bearer ${user.accessToken}`
          }
    })
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
        console.log("bids for this product", data);
      });
  }, [product._id,user]);

  const handleBidModal = () => {
    bidModalRef.current.showModal();
  };

  const handleConfirm = () => {
  const confirmedProduct = {
    productId: product._id,
    title: product.title,
    image: product.image,
    price_min: product.price_min,
    price_max: product.price_max,
    userId: user?.uid,
  };
   fetch('https://smart-deals-psi.vercel.app/myproducts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${user.accessToken}`,
    },
    body: JSON.stringify(confirmedProduct),
  })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Product confirmed and added to My Products',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    })
    .catch(err => console.log(err));
};

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = parseFloat(e.target.bid.value)
    console.log(name, email, bid, product._id);
    const newbid = {
      product: product._id,
      buyer_name: name,
      buyer_email: email,
   
      buyer_image: user?.photoURL,
      bid_price: bid,
      status: "pending",
    };
    fetch("https://smart-deals-psi.vercel.app/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newbid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
        }
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your bid has been placed",
          showConfirmButton: false,
          timer: 2000,
        });
        newbid._id=data.insertedId
        const newBids = [...bids,newbid]
        newBids.sort((a,b)=>b.bid_price-a.bid_price)
        setBids(newBids)

        console.log("data after placing bid", data);
      });
  };

  return (
    <>
      <div className="pt-30 pb-10 w-10/12 mx-auto">
        <div className="p-6 w-1/2 mx-auto bg-[#f4349e56] shadow-sm space-y-5">
          <div className="flex justify-center">
            <img
              className="rounded-full w-[300px]"
              src={product.image}
              alt=""
            />
          </div>
          <p className="text-red-500 font-bold text-2xl">
            Title: <span className="text-primary">{product.title}</span>
          </p>
          <p className="font-bold text-xl">
            Price:{" "}
            <span className="text-red-500">
              ${product.price_min}-{product.price_max}
            </span>
          </p>
          <p>
            <span className="font-bold">Description:</span>Monirul Islam is an
            unusual person. I want to sell him to make some income, so I’ll sell
            each of his organs. He often hurts his girlfriend; when that happens
            she abandons all her work and just cries—she won’t eat or drink, she
            doesn’t study, and she sits all day feeling depressed because of
            him. But Monirul Islam doesn’t seem to realize that his girlfriend
            can get hurt; he should take care to keep her happy, but he doesn’t.
            So his girlfriend decided she will sell her boyfriend to make money,
            cutting out all his organs. If you want, confirm.
          </p>
          <div className="flex justify-between">
            <button onClick={handleBidModal} className="btn-primary btn w-full">
            I want to Buy This Product
          </button>
          <button onClick={handleConfirm} className="btn-primary btn w-full">
            Confirm
          </button>
          </div>

          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Give The Best Offer!</h3>
              <p className="py-4">Offer Something seller can not resist</p>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form onSubmit={handleBidSubmit}>
                    <fieldset className="fieldset">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        className="input"
                        name="name"
                        readOnly
                        defaultValue={user?.displayName}
                      />
                      <label className="label">Email</label>
                      <input
                        type="email"
                        className="input"
                        name="email"
                        readOnly
                        defaultValue={user?.email}
                      />
                      <label className="label">Bid</label>
                      <input
                        type="text"
                        className="input"
                        name="bid"
                        placeholder="your bid"
                      />

                      <button className="btn btn-neutral mt-4">
                        Please Your Bid
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {/* bids for product */}
        <div className="mt-5">
          <h1 className="text-3xl">
            Bids for this product{" "}
            <span className="text-red-500">{bids.length}</span>
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    SL NO.
                  </th>
                  <th>Buyer Name</th>
                  <th>Buyer Email</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                    bids.map((bid,index)=><tr key={bid._id}>
                  <th>
                   {index+1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={bid.buyer_image}
                            alt="Photo"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                {bid.buyer_email}
                 
                  </td>
                  <td>{bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
             )
                }
              
              </tbody>
            
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
