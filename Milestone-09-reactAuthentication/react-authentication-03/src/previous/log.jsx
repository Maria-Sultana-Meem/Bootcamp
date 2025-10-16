import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.init";

const Login = () => {
  const [error,setError]=useState('')
  const emailRef = useRef()
  const handleForgetPasseord=()=>{
   const email=emailRef.current.value
   console.log("forgot password",email);
   sendPasswordResetEmail(auth,email)
   .then(()=>alert("please check your email"))
  }
  const handleLogin=(e)=>{
   e.preventDefault()
   const email = e.target.email.value;
    const password = e.target.password.value;
    setError('')
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      console.log(result.user);
      if (!result.user.emailVerified) {
        alert("please verify your email address")
      }
      
    })
    .catch(error=>{
      console.log(error.message);
      setError(error.message)
      
    })

  }
  return (
    <div>
     
          
          <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email"
                ref={emailRef}
                 className="input" name="email" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  
                  placeholder="Password"
                />
                <div onClick={handleForgetPasseord}>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              {
                error && <p className="text-red-500">{error}</p>
              }
              </form>
               <p>New to account? <Link className="text-blue-500 underline" to="/register">Register account</Link></p>
            
            </div>
          </div>
        </div>
      
  );
};

export default Login;
