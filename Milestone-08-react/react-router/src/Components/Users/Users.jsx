import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
   
   const users= useLoaderData()
    return (
        <div>
            <p>this is users page</p>
            <div className='grid grid-cols-3 gap-5'>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;