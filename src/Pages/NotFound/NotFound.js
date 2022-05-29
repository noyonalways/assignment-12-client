import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="container mx-auto px-4 lg:px-0">
            <div className="flex flex-col md:flex-row items-center justify-center h-screen">
                <div class="mb-24 md:mb-0">
                    <div class="text-7xl text-secondary font-dark font-extrabold mb-8"> 404</div>
                    <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                        Sorry we couldn't find the page you're looking for
                    </p>
                    <Link to='/' href="#" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none btn-secondary">Back to homepage</Link>
                </div>
                <div class="max-w-2xl">
                    <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;