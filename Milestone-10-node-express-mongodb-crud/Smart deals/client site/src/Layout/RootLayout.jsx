import React from 'react';
import Nabvar from '../components/Nabvar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const RootLayout = () => {
    useEffect(() => {
    AOS.init({
      duration: 3000, 
      once: true,     
    });
  }, []);
    return (
        <div>
            <Nabvar></Nabvar>
           <div className='bg-[#f4349e31]'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;