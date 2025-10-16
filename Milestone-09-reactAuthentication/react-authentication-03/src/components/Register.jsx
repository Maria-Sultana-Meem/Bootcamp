// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/authContext/AuthContext';
// import { auth } from '../firebase/firebase.init';

const Register = () => {

  const {createUser}=use(AuthContext)
const handleRegister =(e)=>{
  e.preventDefault()
  //  const name = e.target.name.value;
   const email = e.target.email.value;
    const password = e.target.password.value
    createUser(email,password)
    .then((result) => {
            console.log(result.user);
            
          })
          .catch((error) => {
            console.log(error.message);
            
          });
}
// const handleRegister =(e)=>{
//   e.preventDefault()
//   //  const name = e.target.name.value;
//    const email = e.target.email.value;
//     const password = e.target.password.value;
//      createUserWithEmailAndPassword(auth, email, password)
//           .then((result) => {
//             console.log(result.user);
            
//           })
//           .catch((error) => {
//             console.log(error.message);
            
//           });

// }

  return (
  
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name */}
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Name" />
          <label className="label">Password</label>
          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          {/* password */}
          <input type="password" className="input" name='password' placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
        <p>Already have an account?Please <Link to='/login' className='text-blue-500 underline hover:text-blue-900'>Login</Link></p>
      </div>
    </div>

  );
};

export default Register;
