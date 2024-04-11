import React, { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";


import { AuthContext } from '../Authprovider';

const Protect = ({ children }) => {
    const { user, looding } = useContext(AuthContext)

    if (looding) {
        return <span className="loading loading-spinner text-error"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Protect;