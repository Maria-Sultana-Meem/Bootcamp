import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [error, setError] = useState("");
  const [succes, setSucces] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked
    console.log("cliked", email, password,terms);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }
    // reset error
    setError("");
    setSucces(false);
    if (!terms) {
     setError("Please accept our terms and condiltion")
     return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSucces(true);
        e.target.reset();
        sendEmailVerification(result.user)
        .then(()=>alert('please verify'))
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <>
      
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleClick}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input"
                      name="password"
                      placeholder="Password"
                    />
                    <button
                      onClick={handleShowPassword}
                      className="btn btn-xs absolute top-2 right-5"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <div>
                    <label className="label">
                      <input
                        type="checkbox"
                        // defaultChecked
                        name="terms"
                        className="checkbox"
                      />
                      Accept our terms and condition
                    </label>
                  </div>
              
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                {succes && (
                  <p className="text-green-600">Account created succesfully</p>
                )}
                {error && <p className="text-red-600">{error}</p>}
              </form>
              <p>Already have an accout? <Link className="text-blue-500 underline" to="/login">Please Login</Link></p>
            </div>
          </div>
      
    </>
  );
};

export default Register;
