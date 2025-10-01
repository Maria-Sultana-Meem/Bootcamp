import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav >
                <NavLink  to={'/'}>Home</NavLink>
                <NavLink  to={'/about'}>About</NavLink>
                <NavLink  to={'/users'}>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;