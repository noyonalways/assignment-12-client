import React from 'react';
import empty from '../../Assets/Image/empty.png'

const NoData = () => {
    return (
        <div className='text-center'>
            <div className='w-32 mx-auto'>
                <img className='w-full' src={empty} alt="" />
            </div>
            <h2 className='text-2xl'>No Data found</h2>
        </div>
    );
};

export default NoData;