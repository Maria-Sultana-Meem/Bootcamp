import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav className="text-center py-10">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-red-500 bg-green-400 p-2 rounded-md mr-5" : "text-black")}
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-red-500 bg-green-400 p-2 rounded-md ml-5" : "text-black")}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
