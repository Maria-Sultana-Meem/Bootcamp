import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

//    register
const registerUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
// sign in
const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// google sign in
const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
// logout
 const logOut=()=>{
    setLoading(true)
    return signOut(auth)
 }
//  update profile
const updateUserProfile=(profile)=>{

    return updateProfile(auth.currentUser,profile)
}
  
   // observe
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
     })
     return ()=>{
        unSubscribe()
   
     }
     

    },[setLoading,setUser])


    const authInfo={
    user,
    setUser,
    registerUser,
    signInUser,
    googleSignIn,
    loading,
    setLoading,
    logOut,
    updateUserProfile,



    }

   

    return (
       <AuthContext value={authInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;