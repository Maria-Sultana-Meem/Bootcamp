import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div>
            <Header></Header>
           <div className='flex gap-4'>
            <SideBar></SideBar>
             <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Root;