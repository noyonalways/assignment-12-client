import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import {  Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import SingleReview from './SingleReview/SingleReview';
import './ReviewSection.css'

const ReviewSection = () => {
    const { data, isLoading } = useQuery('allReview', async () => await axios.get('http://localhost:5000/review'));
    const reviews = data?.data.data;

    console.log(reviews);

    return (
        <section className='py-8'>
            <div className='text-center py-3 mb-10'>
                <p className='text-lg'>Reviews</p>
                <h2 className="text-3xl  font-bold">What our client's says</h2>
            </div>
            {
                isLoading ? <LoadingRipple /> : <div className='container mx-auto'>
                    <>
                        <Swiper
                        autoplay={true}
                        
                        slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="rewiewSwiper"
                        >
                            {
                                reviews.map(review => <SwiperSlide key={review._id} ><SingleReview review={review} /></SwiperSlide>)
                            }
                        </Swiper>
                    </>
                </div>
            }
        </section>
    );
};

export default ReviewSection;

