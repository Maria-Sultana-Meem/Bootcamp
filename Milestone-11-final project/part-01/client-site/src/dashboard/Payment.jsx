import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../hooks/useAxiosSecure';
import axios from 'axios';

const Payment = () => {

const {parcelId} = useParams()
const axiosSecure = useAxiosSecure()
const {isLoading, data:parcel}=useQuery({
    queryKey:['parcels',parcelId],
    queryFn:async()=>{
       const res = await axiosSecure.get(`/parcels/${parcelId}`)
       return res.data


    }

})

const handlePayment=async()=>{
const paymentInfo={
    cost:parcel.cost,
    parcelId:parcel._id,
    senderEmail:parcel.senderEmail,
    parcelName:parcel.parcelName
}
const res = await axiosSecure.post('/create-checkout-session',paymentInfo)
console.log(res.data);
window.location.href=res.data.url;

}

if(isLoading){
    return <p>loading..........</p>
}
    return (
        <div className='text-left'>
            <h1 className='text-left'>Please pay ${parcel.cost} for:{parcel.parcelName}</h1>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;
