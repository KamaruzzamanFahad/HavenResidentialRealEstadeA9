import React from 'react';
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
    return (
        <div>
            <img src="contact.jpg" className='w-full h-60' alt="" />

            <div className='flex flex-col md:flex-row justify-between items-start mb-20 mt-16 gap-7'>
                <div className='w-[100%] md:w-[40%]'>
                    <h1>Contact Details</h1>
                    <p className='text-sm mt-2'>If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit our office.</p>
                    <div className='mt-12 mb-6'>
                        <p>Client Support:</p>
                        <div className='flex justify-start items-center gap-3 mt-3'>
                            <IoCallSharp className='text-3xl text-blue-500' />
                            <h2 className='text-2xl'>01000-005-364</h2>
                        </div>
                    </div>
                    <hr  />
                    <div className='mt-6 mb-6'>
                        <p>E-mail:</p>
                        <div className='flex justify-start items-center gap-3 mt-3'>
                            <MdOutlineEmail  className='text-3xl text-blue-500' />
                            <h2 className='text-2xl'>info@havanhomes.org</h2>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-6 mb-6'>
                        <p>Main Office:</p>
                        <div className='flex justify-start items-center gap-3 mt-3'>
                            <FaLocationDot className='text-3xl text-blue-500' />
                            <h2 className='text-2xl'>4035 Grand Ave, narikal
                            <br />
                            Uganda,Nsa Way, FL 13345</h2>
                        </div>
                    </div>
                </div>

                <hr className='border-[1px] border-[#e6e6e6] h-[500px] hidden md:inline' />

                <div className='w-[100%] md:w-[40%]'>
                    <h1 className='mb-5'>Get in Touch</h1>
                    <input type="text" name="name" placeholder='Your Name' id="" className='w-full p-3 bg-[#e9e9e9] mb-5' />
                    <input type="email" name="email" placeholder='E-mail' id="" className='w-full p-3 bg-[#e9e9e9] mb-5' />
                    <input type="tel" name="Phone" placeholder='Phone' id="" className='w-full p-3 bg-[#e9e9e9] mb-5' />
                    <textarea className='w-full p-3 bg-[#e9e9e9] mb-5' name="Message" placeholder='Message' id="" cols="30" rows="5"></textarea>
                    <button className='bg-blue-500 text-white font-semibold rounded-none'>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;