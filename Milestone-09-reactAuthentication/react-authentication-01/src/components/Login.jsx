import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";
const gooleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, gooleProvider)
      .then((result) => {
        // console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn=()=>{
  signInWithPopup(auth,githubProvider)
  .then((result) => {
        // console.log(result);
        const logged = result.user
        if (!logged.email) {
            if (logged.providerData) {
                const gitProvider = logged.providerData.find(p=>p.providerId==="github.com")
                 if (gitProvider && gitProvider.email) {
                logged.email=gitProvider.email
                
            }
            }
           
        }
        setUser(logged);
      })
      .catch((error) => {
        console.log(error);
      });

  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <h1>Login here</h1>
      {/* <button onClick={handleGoogleSignIn} className="btn">
        Sign in with google
      </button>
      <button onClick={handleSignOut} className="btn">
        Sign out
      </button> */}
      {user ? (
        <button onClick={handleSignOut} className="btn">
          Sign out
        </button>
      ) : <>
      (
        <button onClick={handleGoogleSignIn} className="btn">
          Sign in with google
        </button>
        <button onClick={handleGithubSignIn} className="btn">
          Sign in with Github
        </button>
      )
      
      </>}
      {user && (
        <div>
          <h1>Name:{user.displayName}</h1>
          <p>Email:{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
