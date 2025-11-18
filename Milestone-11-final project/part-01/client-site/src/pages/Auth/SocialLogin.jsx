import React from "react";
import useAuth from "../../hooks/useAuth";

import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const loacation = useLocation()
    const navigate = useNavigate()
   
    const {googleSignIn}= useAuth()
    const handleGoodleSignIn=()=>{
          googleSignIn()
          .then(res=>{
          console.log(res.user)
          navigate(loacation?.state || '/')
        
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
