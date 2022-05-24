import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Shared/Footer/Footer';
import HomeBanner from './HomeBanner/HomeBanner';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}/>
            <HomeBanner/>
            <ReviewSection/>
            <Footer/>
        </div>
    );
};

export default Home;