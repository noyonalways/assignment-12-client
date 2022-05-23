import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnX33_4VZbPp_5QNEniJx_B8QsuI1hPwWhNg&usqp=CAU" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HomeBanner;