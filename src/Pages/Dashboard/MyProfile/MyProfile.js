import React from 'react';
import PageTitle from '../../../Components/PageTitle/PageTitle';

const MyProfile = () => {
    return (
        <div>
            <PageTitle title={'My Profile'}/>
            <div className="text-2xl">This is my profile info</div>
        </div>
    );
};

export default MyProfile;