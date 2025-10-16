import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links =<>
    <li className='m-2'>
      <NavLink to="/" className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>Home</NavLink>
      </li> 
    <li className='m-2'>
      <NavLink to="/about" className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>About</NavLink>
    </li>
    <li className='m-2'>
      <NavLink to="/readList" className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>ReadList</NavLink>
    </li>
    </> 

    return (
        <div className='bg-base-100 shadow-sm'>
          <div className="navbar max-w-6xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#23BE0A] text-white mr-5">Sign in</a>
    <a className="btn bg-[#59C6D2] text-white">Sign up</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;