import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Nabvar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("sign out succesfull");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-red-500 btn" : "text-black"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allProducts"
        className={({ isActive }) =>
          isActive ? "bg-red-500 btn" : "text-black"
        }
      >
        AllProducts
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/myProducts"
            className={({ isActive }) =>
              isActive ? "bg-red-500 btn" : "text-black"
            }
          >
            My Products
          </NavLink>
          <NavLink
            to="/myBids"
            className={({ isActive }) =>
              isActive ? "bg-red-500 btn" : "text-black"
            }
          >
            My Bids
          </NavLink>
        </>
      )}
    </>
  );
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Smart Deals</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex justify-center items-center gap-3 menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary:hover btn-primary"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/register" className="btn btn-primary:hover btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nabvar;
