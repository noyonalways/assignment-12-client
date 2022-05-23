import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SingleSlide from './SingleSlide/SingleSlide';
import './HomeBanner.css'
import axios from 'axios';
import LoadingCircle from '../../../Components/LoadingCircle/LoadingCircle';


const HomeBanner = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await axios.get('http://localhost:5000/home-slider');
            setBanners(data.data);
            setLoading(false);
        })();
    }, []);



    return (
        <div>
            {
                loading ? <div className='py-5 h-screen flex items-center'><LoadingCircle /></div> : <Swiper pagination={{ dynamicBullets: true, grabCursor: true, }} modules={[Pagination]} className="mySwiper">
                    {
                        banners.map((item) => <SwiperSlide key={item._id}> <SingleSlide item={item} /></SwiperSlide>)
                    }
                </Swiper>
            }
        </div>
    );
};

export default HomeBanner;