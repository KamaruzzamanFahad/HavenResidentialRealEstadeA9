import React from 'react';
import Navber from '../Component/Navber';
import { Outlet } from "react-router-dom";
import Footer from '../Component/Footer';
import { ToastContainer, toast } from 'react-toastify';
const Root = () => {
    return (
        <div>
            <div className='px-[5%]'>
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;