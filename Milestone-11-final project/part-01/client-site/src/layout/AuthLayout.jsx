import React from 'react';
import logo from '../assets/logo.png'
import authimg from '../assets/authImage.png'
import { Link, Outlet } from 'react-router';
const AuthLayout = () => {
    return (
        <div>
            <div className='flex justify-items-start bg-[#E4F5B2] w-full p-4 fixed top-0 left-0 z-10'>
                <Link to="/" className=" text-2xl ml-20 font-bold flex hover:scale-105 justify-center items-end ">
         <img src={logo} alt="" />
         <p className="-ms-3">ZapShift</p>
        </Link>
            </div>
            <div className='py-20 flex items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;