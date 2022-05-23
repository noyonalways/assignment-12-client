import React from 'react';
import ripple from '../../Assets/loader/ripple.svg'

const LoadingRipple = () => {
    return (
        <div className='max-w-[12rem] m-auto'>
            <img className='w-full' src={ripple} alt="" />
        </div>
    );
};

export default LoadingRipple;