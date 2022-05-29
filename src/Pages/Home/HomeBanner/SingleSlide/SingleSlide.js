import React from 'react';

const SingleSlide = ({ item }) => {
    const {name, description, img} = item;
    
    return (
        <div data-aos="fade-up"
        data-aos-duration="1500" className="hero min-h-screen" style={{ background: `url(${img}) no-repeat center center / cover`, }}>
            <div className="hero-overlay bg-slate-500 bg-opacity-80 "></div>
            <div data-aos="fade-up"
                        data-aos-duration="1500" className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                    <p className="mb-5">{description.length > 100 ? description.slice(0, 100) + '...': description}</p>
                    <a href='#products' className="btn btn-secondary text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default SingleSlide;

