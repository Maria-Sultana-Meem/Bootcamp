import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const MyBids = () => {
    const {user}=use(AuthContext)
    const [bids,setBids]=useState([])
    useEffect(()=>{
     if (user?.email) {
        fetch(`http://localhost:3000/bids?email=${user.email}`,{
          headers:{
            authorization:`Bearer ${user.accessToken}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
            setBids(data)
            console.log(data);
            
        })
     }

    },[user])

    const handleDeleteBid=(_id)=>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

 fetch(`http://localhost:3000/bids/${_id}`,{
    method:"DELETE",
   
 })
 .then(res=>res.json())
 .then(data=>{
    if (data.deletedCount) {
        Swal.fire({
      title: "Deleted!",
      text: "Your bid has been deleted.",
      icon: "success"
    });
    const remaining = bids.filter(bid => bid._id !== _id);
   setBids(remaining);
    }
    
 })

    
  }
});
    }

    return (
        <div className='w-10/12 mx-auto mt-10'>
            <h1 className='font-bold text-2xl'>My Bids : <span className='text-red-500'>{bids.length}</span></h1>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>Seller</th>
                  <th>Product</th>
                  <th>Bid Price</th>
                  <th>Status</th>
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
                  <td>
                    <div className="badge badge-warning">{bid.status}</div>
                  </td>
                  <th>
                    <button onClick={()=>handleDeleteBid(bid._id)} className="btn btn-outline text-red-500  btn-sm">Remove Bid</button>
                  </th>
                </tr>
             )
                }
              
              </tbody>
            
            </table>
          </div>
        </div>
    );
};

export default MyBids;