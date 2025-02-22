import Home from './Home';
import { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { registerempass, updateuserinfo, looding, user,auth } = useContext(AuthContext);
    const navigate = useNavigate();


    const reginhandle = (e) => {
        e.preventDefault();
        const Name = e.target.Name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (regex.test(password)) {
            registerempass(email, password)
                .then(() => {
                    toast.success("Registration done, prifile updating please wait");
                    console.log('regi done ')
                    updateProfile(auth.currentUser, {
                        displayName: Name,
                        photoURL: photoURL,
                    })
                        .then(() => {
                            toast.success("LOGIN SUCCESSFUL")
                            console.log('log done ')
                        })
                        .catch((error) => {
                            toast.success(error.massage)
                        })
                })
                .catch(error => toast.error(error.message))
        } else {
            alert("passwords at least 8 characters long and contain a mix of uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and special characters (!@#$%^&*). Avoid using easily guessable information like your name, birthday, or common phrases!");
        }

    }

    const [type,settype] = useState('password')




    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            
            <div>
                <div className="hero mb-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 p-10  w-80 sm:w-96">
                            <h1 className='text-3xl mb-2 font-semibold'>Register New account</h1>
                            <form onSubmit={reginhandle} className="card-body mb-2 p-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='Name' type="text" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photoURL</span>
                                    </label>
                                    <input name='photoURL' type="url" placeholder="photoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='flex items-center input input-bordered'>
                                        <input name='password' type={type} placeholder="password" className="w-full" required />
                                       {
                                        type == "password" ? <FaEyeSlash onClick={()=> settype("text")} /> : <FaEye onClick={()=> settype("password")} />
                                       }  

                                    </div>
                                </div>
                                <div className="form-control mt-1">
                                    <button className="btn w-fu btn-primary bg-blue-500 text-white outline-none border-none">Register</button>
                                </div>
                            </form>
                            <p className="text-sm text-center">Already have an account? <Link to={'/login'}>Login</Link> </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;