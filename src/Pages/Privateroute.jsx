import { useContext } from "react";
import { AuthContext } from "../Authprovider";
import { Navigate,useLocation } from "react-router-dom";

const Privateroute = ({children}) => {
    const { user, looding } = useContext(AuthContext);

    if(!user){
        return children;
    }
    return <Navigate to={'/'}></Navigate>
};

export default Privateroute;