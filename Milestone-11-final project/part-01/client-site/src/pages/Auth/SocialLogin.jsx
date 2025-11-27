import React from "react";
import useAuth from "../../hooks/useAuth";

import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";

const SocialLogin = () => {
  const loacation = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
   
    const {googleSignIn}= useAuth()
    const handleGoodleSignIn=()=>{
          googleSignIn()
          .then(res=>{
          console.log(res.user)
         
            //  create user in the database
        const userInfo = {
          email:res.user.email,
          displayName:res.user.displayName,
           photoURL:res.user.photoURL

        }

      axiosSecure.post('/users',userInfo)
      .then(res=>{
        console.log('user data has been stored',res.data);
       navigate(loacation?.state || '/')
        
      })
          
        
         }) 
         .catch(err=>{
            console.log(err); 
          })
    }
  return (
    <div>
      <p>Or</p>

      <button onClick={handleGoodleSignIn} class="btn bg-white text-black border-[#e5e5e5]">
       <FcGoogle size={30}/>
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
