import React from 'react';
import Banner from '../../components/Banner'
import FeatureTop from '../../components/FeatureTop';
import HomeAbout from '../../components/HomeAbout';
import WhyChoose from '../../components/WhyChoose';
import HomeCourse from '../../components/HomeCourse';
import HomeOverview from '../../components/HomeOverview';
import Collage from '../../components/Collage';
import Testimonial from '../../components/Testimonial';
import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
//import { Scrollbars } from 'react-custom-scrollbars';

const Home = () => {
    return (
        <>



            <Header></Header>

            <Banner></Banner>

            <FeatureTop></FeatureTop>

            <HomeAbout />

            <WhyChoose />

            <HomeCourse />

            <HomeOverview />

            <Collage />


            <Testimonial />


            <Awards />
            <Footer />


        </>
    );
};

export default Home;
