import React from 'react';
import { Link} from 'react-router';

const User = ({user}) => {
   

   const { name,id,email,phone}=user
   
    return (
        <div className='border p-6 border-amber-400 rounded-2xl'>
           <h1>{name}</h1> 
           <p>{email}</p>
           <small>{phone}</small>
           <Link to={`/users/${id}`}>Show details</Link>
        </div>
    );
};

export default User;