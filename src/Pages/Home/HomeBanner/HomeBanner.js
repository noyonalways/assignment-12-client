import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SingleSlide from './SingleSlide/SingleSlide';
import './HomeBanner.css'
import axios from 'axios';
import LoadingCircle from '../../../Components/LoadingCircle/LoadingCircle';
import { useQuery } from 'react-query';


const HomeBanner = () => {
    const { data, isLoading } = useQuery('banners', async () => await axios.get('http://localhost:5000/home-slider'));
    const banners = data?.data?.data ? data.data.data : [];


    return (
        <div>
            {
                isLoading ? <div className='py-5 h-screen flex items-center'><LoadingCircle /></div> : <Swiper pagination={{ dynamicBullets: true, grabCursor: true, }} modules={[Pagination]} className="mySwiper">
                    {
                        banners?.length ? banners?.map((item) => <SwiperSlide key={item._id}> <SingleSlide item={item} /></SwiperSlide>) : <div className='h-screen flex items-center justify-center'><h2 className="text-3xl font-semibold">Reload Slider</h2></div>
                    }
                </Swiper>
            }
        </div>
    );
};

export default HomeBanner;