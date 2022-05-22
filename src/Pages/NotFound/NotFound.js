import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className='text-center'>
                <h2 className="text-8xl text-red-400">404</h2>
                <p>Go to <Link to='/'>Home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;