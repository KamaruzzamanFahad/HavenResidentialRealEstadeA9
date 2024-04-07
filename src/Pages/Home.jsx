
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
const Home = () => {



    return (
        <div>
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
                <div>
                    <input type="text" placeholder='Location' name="" id="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Home;