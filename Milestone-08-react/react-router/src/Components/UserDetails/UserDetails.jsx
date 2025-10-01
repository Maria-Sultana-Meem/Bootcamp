import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    
    const user = useLoaderData()
    const {name,website}=user
    return (
        <div>
           <p>User Dewtails here</p> 
           <p>name:{name}</p>
           <p>website:{website}</p>
        </div>
    );
};

export default UserDetails;