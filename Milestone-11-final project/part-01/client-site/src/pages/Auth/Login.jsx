import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const loacation = useLocation()
    const navigate = useNavigate()
   
    const { signInUser}=useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
     signInUser(data.email,data.password)
      .then(res=>{
          console.log(res.user)
          navigate(loacation?.state || '/')
        
         }) 
         .catch(err=>{
            console.log(err); 
          })

  };
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h3 className="text-4xl  text-[#b9eb24] font-bold">Welcome Back</h3>
            <p className="text-3xl ">Please login</p>
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                {...register("email", { required: true })}
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                {...register("password", { required: true ,minLength:6,pattern:/^[A-Za-z]+$/i})}
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password is must be 6 character or longer
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password is must be uppercase and lowercase
                </p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary text-black mt-4">Login</button>
            </fieldset>
            <p>New to Zap Shift please <Link state={loacation.state} to='/register' className="text-blue-400 hover:text-blue-900">Register</Link> </p>
          </form>
          <SocialLogin></SocialLogin>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
