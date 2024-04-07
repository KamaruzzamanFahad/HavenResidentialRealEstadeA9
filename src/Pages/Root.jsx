import React from 'react';
import Navber from '../Component/Navber';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
const Root = () => {
    return (
        <div>
            <div className='px-[5%]'>
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;