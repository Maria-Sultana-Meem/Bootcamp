import React from 'react';
import Navbar from '../pages/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/footer/Footer';

const RootLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;