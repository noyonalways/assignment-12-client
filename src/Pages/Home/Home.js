import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Shared/Footer/Footer';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}/>
            <HomeBanner/>
            <Footer/>
        </div>
    );
};

export default Home;