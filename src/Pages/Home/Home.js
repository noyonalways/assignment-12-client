import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Shared/Footer/Footer';
import BusinessSummery from './BusinessSummerySection/BusinessSummery';
import HomeBanner from './HomeBanner/HomeBanner';
import ProductSection from './ProductSection/ProductSection';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}/>
            <HomeBanner/>
            <BusinessSummery/>
            <ProductSection/>
            <ReviewSection/>
            <Footer/>
        </div>
    );
};

export default Home;