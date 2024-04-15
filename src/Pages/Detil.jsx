import React from 'react';
import { useLocation } from 'react-router-dom';


import { useMap } from 'react-leaflet/hooks'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuCalendarCheck } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { BiArea } from "react-icons/bi";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Detil = () => {

    const locationdata = useLocation();
    const { Image,
        estate_title,
        id,
        description,
        price,
        Status,
        Area,
        location,
        facilities,
        category, } = locationdata.state;
    const position = [23.684994, 90.356331]

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
            <Helmet>
                <title>Estade Detils</title>
            </Helmet>
            <div className='w-full md:w-[65%] pr-5'>
                <div className='relative'>
                    <p className='absolute bg-[#fdb61b] bottom-0 p-2 px-5 text-2xl font-semibold'>{Status}</p>
                    <p className='absolute bg-[#fdb61b] bottom-0 right-0 p-2 px-5 text-2xl font-semibold'>{price}</p>
                    <img src={Image} width={'100%'} alt="" />
                </div>
                <div className='bg-[#00000009]'>
                    <ul className='flex flex-wrap gap-8 justify-center p-3'>
                        <div className='flex gap-1 items-center'>
                            <BiArea className='text-blue-500 ' />
                            <li className='font-semibold'>{Area}</li>
                        </div>
                        {
                            facilities.map((item, i) => (
                                <div key={i} className='flex gap-1 items-center'>
                                    <FaCheck className='text-green-500 ' />
                                    <li className='font-semibold'>{item}</li>
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <h1 className='text-4xl font-extrabold py-3'>{estate_title}</h1>
                <p className='font-bold'>{category}</p>
                <p className='mb-20'>{description}</p>

                <p className='font-bold'>Location: {location}</p>
                <div  className='w-[95%] h-[500px] bg-red-500 mb-20'>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-[500px]'>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                This is the popup content. You can customize it!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <div className='w-full md:w-[35%] bg-white p-4 rounded-sm'>
                <div className='flex'>
                    <LuCalendarCheck className='text-4xl' />
                    <h2 className='text-3xl ml-2'>Request A Viewing</h2>
                </div>
                <form className='flex flex-col gap-0 ' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <p className='mt-8 mb-0'>Your First Name *</p>
                    <input className='w-full p-3 border-2 mt-2' {...register("firstName")} placeholder="First name" />
                    <p className='mt-4 mb-0'>Your Last Name *</p>
                    <input className='w-full p-3 border-2 mt-2' {...register("firstName")} placeholder="Last name" />
                    <p className='mt-4 mb-0'>Your Email *</p>
                    <input className='w-full p-3 border-2 mt-2' {...register("firstName")} placeholder="Email" />
                    <p className='mt-4 mb-0'>Phone *</p>
                    <input className='w-full p-3 border-2 mt-2' {...register("firstName")} placeholder="Phone" />
                    <p className='mt-4 mb-0'>Contact Preference</p>
                    <select className='w-full p-3 border-2 mt-2' {...register("category", { required: true })}>
                        <option value="">Chose Contact Preference...</option>
                        <option value="A">Email</option>
                        <option value="B">Phone</option>
                    </select>
                    <p className='mt-4 mb-0'>Special Requests or Comments *</p>
                    <textarea className='w-full p-3 border-2 mt-2' {...register("aboutYou")} placeholder="About you" />
                    <p className='hidden'>{data}</p>
                    <input className='w-full p-3 bg-blue-500 mt-3 text-white' type="submit" value={'Submit Request'} />
                </form>
            </div>

        </div>
    );
};

export default Detil;