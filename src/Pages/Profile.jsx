import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authprovider';

const Profile = () => {
    const { user, updateuserinfo } = useContext(AuthContext);

    const { email, displayName, photoURL } = user;
    
    const updatehandle = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateuserinfo(name,photo)
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-8'>Profilel</h1>
            <img src={photoURL} alt="" />
            <form onSubmit={updatehandle} className='w-full md:w-[50%]' action="">
                <p className='mt-4 mb-0'>Your Email</p>
                <input readOnly value={email} className='w-full p-3 border-2 mt-2' placeholder="Email" name='email' type='email' required />
                <p className='mt-8 mb-0'>Your Name</p>
                <input value={displayName} className='w-full p-3 border-2 mt-2' placeholder="Name" name='name' type='text' required />
                <p className='mt-4 mb-0'>photoURL</p>
                <input name='photo' value={photoURL} className='w-full p-3 border-2 mt-2' placeholder="Photo URL" type='url' required />
                <button className='btn w-full bg-blue-500 text-white mt-5 mb-20'>Update Information</button>
            </form>
        </div>
    );
};

export default Profile;