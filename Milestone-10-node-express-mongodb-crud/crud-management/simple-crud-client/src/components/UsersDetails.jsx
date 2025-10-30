import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetails = () => {
    const loader = useLoaderData()
    console.log(loader);
    
    return (
        <div>
            <h3>User Details</h3>
        </div>
    );
};

export default UsersDetails;