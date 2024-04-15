import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './Utility/config';

export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const [user, setuser] = useState(null)
    const [looding, setlooding] = useState(true)


    const login = (email, password) => {
        // setlooding(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const loginwithgoogle = () => {
       return signInWithPopup(auth,provider);
    }
    const loginwithgithub = () =>{
        return signInWithPopup(auth,githubprovider)
    }
    const registerempass = (email, password) => {
        // setlooding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    onAuthStateChanged(auth, user => {
        if (user) {
            setuser(user)
            setlooding(false);
        } else {
            setuser(null)
            setlooding(false);
        }
    })
    
    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth, user =>{
    //     setuser(user);
    //     setlooding(false)
    //     })
    //     return() =>{
    //         unSubscribe();
    //     }
    // },[])



    // const updateuserinfo = (name, photourl) => {
    //     // setlooding(true);
    //     return 
    // }
    
   
    const logout = () => {
        signOut(auth);
    }



    const authinfo = {
        auth,
        user,
        login,
        registerempass,
        looding,
        logout,
        loginwithgoogle,
        loginwithgithub,
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;