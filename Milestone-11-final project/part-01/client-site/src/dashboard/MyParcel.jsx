import React from 'react';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyParcel = () => {
    const {user}= useAuth()
    const axiosSecure =useAxiosSecure()
    const {data:parcels=[]} = useQuery({
        queryKey:['myParcels',user],
        queryFn:async()=>{
          const res = await axiosSecure.get(`/parcels?email=${user.email}`)  
          return res.data
        }
    })
    return (
        <div>
            <h2>All My parcels : {parcels.length}</h2>
        </div>
    );
};

export default MyParcel;