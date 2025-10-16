import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }
  const signOutUser =()=>{
     setLoading(true)
  return signOut(auth)
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current state", currentUser);
      setUser(currentUser)
      setLoading(false)

    });
    return ()=>{
        unsubscribe()
    }
  }, []);

  const authInfo = {
    user: user,
    loading:loading,
    createUser: createUser,
    signInUser: signInUser,
    signInWithGoogle:signInWithGoogle,
    signOutUser:signOutUser,
  };
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
