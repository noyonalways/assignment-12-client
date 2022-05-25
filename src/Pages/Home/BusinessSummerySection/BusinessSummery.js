import React from 'react';
import {AiOutlineFlag} from 'react-icons/ai';

const BusinessSummery = () => {
    return (
        <section className='py-6 bg-red-400'>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 content-center justify-items-center">
                    <div className='text-center bg-yellow-300 px-12 py-8'>
                        <div className='text-4xl flex'>
                            <AiOutlineFlag className='skew-x-12 -rotate-180'/>
                            <AiOutlineFlag className='skew-x-12'/>
                        </div>
                        <h2 className="text-3xl font-bold">22</h2>
                        <p className="text-base text-secondary">Countries</p>
                    </div>
                    <div className='text-center bg-yellow-300 px-12 py-8'>
                        <div className='text-4xl flex'>
                            <AiOutlineFlag className='skew-x-12 -rotate-180'/>
                            <AiOutlineFlag className='skew-x-12'/>
                        </div>
                        <h2 className="text-3xl font-bold">22</h2>
                        <p className="text-base text-secondary">Countries</p>
                    </div>
                    <div className='text-center bg-yellow-300 px-12 py-8'>
                        <div className='text-4xl flex'>
                            <AiOutlineFlag className='skew-x-12 -rotate-180'/>
                            <AiOutlineFlag className='skew-x-12'/>
                        </div>
                        <h2 className="text-3xl font-bold">22</h2>
                        <p className="text-base text-secondary">Countries</p>
                    </div>
                    <div className='text-center bg-yellow-300 px-12 py-8'>
                        <div className='text-4xl flex'>
                            <AiOutlineFlag className='skew-x-12 -rotate-180'/>
                            <AiOutlineFlag className='skew-x-12'/>
                        </div>
                        <h2 className="text-3xl font-bold">22</h2>
                        <p className="text-base text-secondary">Countries</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummery;