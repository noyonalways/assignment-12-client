import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import SingleReview from './SingleReview/SingleReview';
import './ReviewSection.css'
import NoData from '../../../Components/NoData/NoData';

const ReviewSection = () => {
    const { data, isLoading } = useQuery('allReview', async () => await axios.get('http://localhost:5000/review'));
    const reviews = data?.data.data;

    return (
        <section id='reviews' className='py-8'>
            <div className='text-center py-3 mb-10'>
                <p className='text-lg'>Reviews</p>
                <h2 className="text-3xl  font-bold">What our client's says</h2>
            </div>
            {
                isLoading ? <div className="h-screen flex items-center"><LoadingRipple /> </div> : <div className='container mx-auto px-5 lg:px-0'>
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
                                reviews?.length ? reviews?.map(review => <SwiperSlide key={review._id} ><SingleReview review={review} /></SwiperSlide>) : <div className='h-screen flex items-center justify-center'><NoData /></div>
                            }
                        </Swiper>
                    </>
                </div>
            }
        </section>
    );
};

export default ReviewSection;

