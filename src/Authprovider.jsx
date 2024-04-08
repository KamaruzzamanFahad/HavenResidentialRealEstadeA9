import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {


    const [user,setuser] = useState(null)


    const login = () =>{
        console.log('login request')
    }
    const register = () =>{
        console.log('register request')
    }

    const authinfo = {
        user,
        login,
        register,
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;