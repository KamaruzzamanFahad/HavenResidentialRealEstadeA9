import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    const { email, displayName, phoneNumber, photoURL } = user;
    console.log(email)
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-8'>Profilel</h1>
            <img src={photoURL} alt="" />
            <form className='w-full md:w-[50%]' action="">
                <p className='mt-8 mb-0'>Your Name</p>
                <input value={displayName} className='w-full p-3 border-2 mt-2' placeholder="Name" type='text' required/>
                <p className='mt-4 mb-0'>Your Email</p>
                <input value={email} className='w-full p-3 border-2 mt-2' placeholder="Email" type='email' required/>
                <p className='mt-4 mb-0'>Phone</p>
                <input value={phoneNumber} className='w-full p-3 border-2 mt-2' placeholder="Phone" type='tel'/>
                <p className='mt-4 mb-0'>photoURL</p>
                <input value={photoURL} className='w-full p-3 border-2 mt-2' placeholder="Photo URL" type='url' required/>
                <button className='btn w-full bg-blue-500 text-white mt-5 mb-20'>Update Information</button>
            </form>
        </div>
    );
};

export default Profile;