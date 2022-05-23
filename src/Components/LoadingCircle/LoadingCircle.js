import React from 'react';
import circle from '../../Assets/loader/dual-ball.svg'

const LoadingCircle = () => {
    return (
        <div className='max-w-[4rem] m-auto'>
            <img className='w-full' src={circle} alt="" />
        </div>
    );
};

export default LoadingCircle;