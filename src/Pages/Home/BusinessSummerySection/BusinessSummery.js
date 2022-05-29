import React from 'react';
import { AiOutlineFlag } from 'react-icons/ai';
import { MdPendingActions } from 'react-icons/md'
import { AiTwotoneLike } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'

const BusinessSummery = () => {
    return (
        <section className='py-10'>
            <div className="container mx-auto px-3">
                <div className='text-center mb-8'>
                    <h2 className="text-4xl font-bold text-secondary">MILLIONS BUSINESS TRUST US</h2>
                    <p className="text-xl">TRY TO FULFIL USER EXPECTATION</p>
                </div>
                <div className="grid lg:grid-cols-4 gap-10 w-[95%] mx-auto">
                    <div data-aos="fade-up"
                        data-aos-duration="500" className='text-center bg-base px-24 py-16 shadow-md hover:shadow-lg duration-150 rounded'>
                        <div className='text-5xl inline-flex mb-3 text-secondary'>
                            <AiOutlineFlag className='skew-x-12 -rotate-180' />
                            <AiOutlineFlag className='skew-x-12' />
                        </div>
                        <h2 className="text-3xl font-bold">22</h2>
                        <p className="text-base text-secondary">Countries</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='text-center bg-base px-24 py-16 shadow-md hover:shadow-lg duration-150 rounded gap-6 lg:gap-0'>
                        <div className='text-5xl inline-block mb-3 text-secondary'>
                            <MdPendingActions className='' />
                        </div>
                        <h2 className="text-3xl font-bold">5</h2>
                        <p className="text-base text-secondary">Pending Orders</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="1500" className='text-center bg-base px-24 py-16 shadow-md hover:shadow-lg duration-150 rounded gap-6 lg:gap-0'>
                        <div className='text-5xl inline-block mb-3 text-secondary'>
                            <BsCheckCircleFill />
                        </div>
                        <h2 className="text-3xl font-bold">220+</h2>
                        <p className="text-base text-secondary">Complete Orders</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="2000" className='text-center bg-base px-24 py-16 shadow-md hover:shadow-lg duration-150 rounded gap-6 lg:gap-0'>
                        <div className='text-5xl inline-block mb-3 text-secondary'>
                            <AiTwotoneLike />
                        </div>
                        <h2 className="text-3xl font-bold">200+</h2>
                        <p className="text-base text-secondary">Feedbacks</p>
                    </div>
                </div>

                <div data-aos="fade-up"
                        data-aos-duration="2000" className='w-[95%] shadow-md mx-auto mt-4 p-4 rounded flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-0'>
                    <div >
                        <h2 className="text-3xl font-semibold text-secondary">Have any questions ?</h2>
                        <p className='text-lg'>We complete 220+ order, 100M+ Annual revenue, 13K+ Reviews, 30+ tool parts.</p>
                    </div>
                    <div className='self-end space-x-4'>
                        <a href='#reviews' className='btn btn-secondary text-white'>Check Reviews</a>
                        <a href='#contact' className='btn btn-primary'>Contact US</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummery;