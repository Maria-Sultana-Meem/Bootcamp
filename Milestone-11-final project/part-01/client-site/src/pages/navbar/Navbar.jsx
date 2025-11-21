import React, {  useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from '../../assets/logo.png'
import useAuth from "../../hooks/useAuth";


const Nabvar = () => {
const {user,logOut}=useAuth()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
  
    useEffect(() => {
      const html = document.querySelector('html')
       html.setAttribute("data-theme", theme)
       localStorage.setItem("theme", theme)
    }, [theme])
  
  
    const handleTheme = (checked) => {
      setTheme(checked ? "dark": "light")
    }

//     signOutUser()
//       .then(() => {
//         alert("sign out succesfull");
//       })
//       .catch((e) => {
//         console.log(e.message);
//       });
//   };
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-[#c5fc21] btn text-white" : ""
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/coverage"
        className={({ isActive }) =>
          isActive ? "bg-[#c5fc21] btn text-white" : ""
        }
      >
       Coverage
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          isActive ? "bg-[#c5fc21] btn text-white" : ""
        }
      >
      About US
      </NavLink>
      <NavLink
        to="/sendParcel"
        className={({ isActive }) =>
          isActive ? "bg-[#c5fc21] btn text-white" : ""
        }
      >
      Send Parcel
      </NavLink>
        {
          user && <>
          <NavLink
        to="/dashboard/myParcel"
        className={({ isActive }) =>
          isActive ? "bg-[#c5fc21] btn text-white" : ""
        }
      >
     My Parcels
      </NavLink>
          
          </>
        } 
    </>

  );

const handleSignOut=()=>{
  logOut()
  .then()
  .catch(err=>{
    console.log(err);
    
  })
}

  
  return (
    <div className="bg-[#E4F5B2] shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="navbar w-10/12 mx-auto">
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
        <Link to="/" className=" text-2xl  font-bold flex justify-center items-end ">
         <img src={logo} alt="" />
         <p className="-ms-3">ZapShift</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex justify-center items-center gap-3 menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
            onChange={(e)=> handleTheme(e.target.checked)}
              type="checkbox"
              value="synthwave"
              defaultChecked={localStorage.getItem('theme') === "dark"}
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary:hover "
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary:hover ">
            Login
          </Link>
        )}
        
        <Link to="/rider" className="btn btn-primary:hover text-black btn-primary">
            Be a Rider
          </Link>
      </div>
    </div>
    </div>
  );
};

export default Nabvar;
