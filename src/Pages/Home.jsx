import env from "react-dotenv";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BiArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData,useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {


    const navigate = useNavigate();

    const data = useLoaderData();
    const [estade, setestade] = useState(data)


    const selected = (s) => {
        const selecta = s.target.value;
        const filterlist = data.filter(item => item.category == selecta);
        setestade(filterlist)
    }


    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

           
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div id="slide1" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid1.jpg" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid2.jpg" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid3.jpg" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide1" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid4.jpg" className="w-full" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div>
                <div className='flex flex-col md:flex-row justify-center items-center py-10 gap-5'>
                    <input type="text" placeholder='Location' name="" id="" className=' border border-solid border-[#0000004e] p-[11px] rounded-lg outline-none w-full md:w-auto' />
                    <select onChange={selected} className="select select-bordered w-full md:w-auto">
                        <option disabled selected>Chose Catagorys</option>
                        <option>Single-family homes</option>
                        <option>Townhouses</option>
                        <option>Apartments</option>
                        <option>Student housing</option>
                        <option>Senior living communities</option>
                        <option>Vacation rentals</option>
                    </select>
                    <button className='outline-none w-full md:w-40 bg-slate-400'>Search</button>
                </div>

                <div className='grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
                    {
                        estade.map((item, i) => (
                            <div key={i} className='bg-[#ffffff] p-4 pb-6 rounded-lg'>
                                <div className='relative'>
                                    <p className='absolute bg-[#fdb61b] bottom-0 p-1'>{item.Status}</p>
                                    <p className='absolute bg-[#fdb61b] bottom-0 right-0 p-1'>{item.price}</p>
                                    <img src={item.Image} width={'100%'} alt="" />
                                </div>
                                <p className='text-blue-500 font-semibold text-lg py-3'>{item.estate_title}</p>
                                <hr className='border-1 border-[#00000031]' />
                                <div className='flex justify-between items-center mt-3 mb-4'>
                                    <div className='flex items-center'>
                                        <BiArea />
                                        <p className='ml-1'>{item.Area}</p>
                                    </div>
                                    <div className='flex items-center' >
                                        <FaLocationDot />
                                        <p className='ml-1'>{item.location}</p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <p>Facilities:</p>
                                    <ul className='list-disc ml-8'>
                                        {
                                            item.facilities.map((ita, i) => (
                                                <li key={i}>{ita}</li>
                                            ))
                                        }
                                        {
                                            item.facilities.length > 4 ? '' : <li>more</li>
                                        }
                                    </ul>
                                </div>
                                <button onClick={ ()=> navigate('/detils', {state: item})} className='w-full bg-blue-500 text-white'>View Property</button>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;