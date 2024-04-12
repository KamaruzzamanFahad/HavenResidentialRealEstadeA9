import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navber = () => {

    const links = [
        <>
            <NavLink activeClassName="active" key="home" to={'/'}><li><a className='font-semibold text-blue-900'>Home</a></li></NavLink>

            <NavLink activeClassName="active" key="profile" to={'/profile'}><li><a className='font-semibold text-blue-900'>Update Profile</a></li></NavLink>

            <NavLink activeClassName="active" key="profile" to={'/contact'}><li><a className='font-semibold text-blue-900'>Contact Us</a></li></NavLink>

        </>
    ]


    const { user, logout } = useContext(AuthContext)
    return (
        <div className="navbar py-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Haven Residential</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>

                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`${user.displayName}`}
                            data-tooltip-place="left"
                        >
                            <img src={user.photoURL} width={'40px'} alt="" />
                        </a>
                        <a onClick={logout} className="btn">Log Out</a>
                    </>
                        : <Link to={'/login'}><a className="btn">Log In</a></Link>
                }
                <Tooltip id="my-tooltip" />


            </div>
        </div>
    );
};

export default Navber;