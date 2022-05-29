import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Shared/Footer/Footer';
import BusinessSummery from './BusinessSummerySection/BusinessSummery';
import ContactSection from './ContactSection/ContactSection';
import HomeBanner from './HomeBanner/HomeBanner';
import LetestNews from './LetestNews/LetestNews';
import ProductSection from './ProductSection/ProductSection';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}/>
            <HomeBanner/>
            <BusinessSummery/>
            <ProductSection/>
            <LetestNews/>
            <ReviewSection/>
            <ContactSection/>
            <Footer/>
        </div>
    );
};

export default Home;