import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/authContext/AuthContext";

const Navbar = () => {
  const {user,signOutUser}= use(AuthContext)
  const handleSignOut=()=>{
    signOutUser()
    .then(result=>{
      console.log(result.user);
      
    })
    .catch(error=>{
      console.log(error);
      
    })
  }
    const links =<>
       <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 bg-green-400 p-2 rounded-md "
                    : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 bg-green-400 p-2 rounded-md "
                    : "text-black"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 bg-green-400 p-2 rounded-md "
                    : "text-black"
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 bg-green-400 p-2 rounded-md "
                    : "text-black"
                }
              >
                DashBoard
              </NavLink>
            </li>
            {
              user && <>
              <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 bg-green-400 p-2 rounded-md "
                    : "text-black"
                }
              >
               Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 bg-green-400 p-2 rounded-md "
                    : "text-black"
                }
              >
                Profile
              </NavLink>
            </li>
              </>
            }
    
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 ml-5  shadow"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
       {
        user? <a onClick={handleSignOut} className="btn">Sign Out</a>:<Link className="btn" to='/login'>Login</Link>
       }
      </div>
    </div>
  );
};

export default Navbar;
