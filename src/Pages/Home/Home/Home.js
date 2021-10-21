import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Unique from '../Unique/Unique';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Unique></Unique>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;