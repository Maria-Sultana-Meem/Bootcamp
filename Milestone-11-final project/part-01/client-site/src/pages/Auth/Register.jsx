import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {
  const location = useLocation()
    const navigate = useNavigate()
   const axiosSecure = useAxiosSecure()
  const {registerUser,updateUserProfile,}=useAuth()
    const {register,handleSubmit,formState:{errors}}= useForm()
    const handleRegistration=(data)=>{
          
          const profileImg = data.photo[0]
         registerUser(data.email,data.password)
         .then(()=>{
         
          const formData = new FormData()
          formData.append('image',profileImg)
          const image_Api = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host_key}`
           axios.post(image_Api,formData)
           .then(res=>{
            const photoURL =res.data.data.url
           
        //  create user in the database
        const userInfo = {
          email:data.email,
          displayName:data.name,
           photoURL:photoURL

        }
           axiosSecure.post('/users',userInfo)
           .then(res=>{
                  if (res.data.insertedId) {
                    console.log('user created in the database');
                    
                  }
           })

            // update profile in the firebase
            const userProfile={
                displayName : data.name,
                photoURL:photoURL
            }
            updateUserProfile(userProfile)
            .then(()=>{
              console.log('user profile updated done');
              navigate(location?.state || '/')
              
            })
            .catch(err=>console.log(err))
           })
         }) 
         .catch(err=>{
            console.log(err); 
          })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h3 className="text-4xl text-left  text-[#b9eb24] font-bold">Welcome to Zap shift</h3>
        <p className='text-3xl text-left  font-semibold'>Create an Account</p>
        <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset">
              {/* name */}
          <label className="label">Name</label>
          <input type="text" {...register('name',{required:true})} className="input" placeholder="Your name" />
          {errors.email?.type === "required" && (
        <p className='text-red-500'>Name is required</p>
      )}
      {/* photo */}
          <label className="label">Photo</label>
          
          <input type="file" {...register('photo',{required:true})} className="file-input" placeholder="Your photo" />
          {errors.email?.type === "required" && (
        <p className='text-red-500'>Photo is required</p>
      )}
              {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {errors.email?.type === "required" && (
        <p className='text-red-500'>Email is required</p>
      )}
      {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength:6,pattern:/^[A-Za-z]+$/i})} className="input" placeholder="Password" />
          {errors.password?.type === "required" && (
        <p className='text-red-500'>Password is required</p>
      )}
          {errors.password?.type === "minLength" && (
        <p className='text-red-500'>Password is must be 6 character or longer</p>
      )}
          {errors.password?.type === "pattern" && (
        <p className='text-red-500'>Password is must be 6 character or longer</p>
      )}
          
         
          <button className="btn bg-primary mt-4">Register</button>
        </fieldset>
         <p>Already have an account? <Link state={location.state} to='/login' className="text-blue-400 hover:text-blue-900">Login</Link> </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
        </div>
    );
};

export default Register;