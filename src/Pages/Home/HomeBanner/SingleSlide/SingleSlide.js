import React from 'react';

const SingleSlide = ({ item }) => {
    const {name, description, img} = item;

    return (
        <div class="hero min-h-screen" style={{ background: `url(${img}) no-repeat center center / cover`, }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">{name}</h1>
                    <p class="mb-5">{description}</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SingleSlide;

