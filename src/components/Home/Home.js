import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ContactUs from '../ContactUs/ContactUs';
import ToolsParts from '../Tools&Parts/ToolsParts';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <ToolsParts></ToolsParts>
            <AboutUs></AboutUs>
            <BusinessSummary></BusinessSummary>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;