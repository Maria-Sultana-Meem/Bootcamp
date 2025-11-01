import React from 'react';
import Nabvar from '../components/Nabvar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;