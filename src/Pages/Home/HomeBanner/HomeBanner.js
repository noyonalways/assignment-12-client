import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SingleSlide from './SingleSlide/SingleSlide';
import './HomeBanner.css'
import axios from 'axios';


const HomeBanner = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('home.json');
            setBanners(data);
        })();
    }, [])

    return (
        <Swiper  pagination={{ dynamicBullets: true, grabCursor: true, }} modules={[Pagination]} className="mySwiper">
            {
                banners.map(item => <SwiperSlide > <SingleSlide item={item} /></SwiperSlide>)
            }
        </Swiper>
    );
};

export default HomeBanner;