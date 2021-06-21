import React from 'react';
import Brands from './Brands/Brands';
import Carousels from './Carousels/Carousels';
import ClientsFeedback from './ClientsFeedback/ClientsFeedback';
import './Home.css'
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import Services from './Services/Services';

const Home = () => {

   
    return (
        <div>
            <HomeHeader/>
            <Brands/>
            <Services/>
            <Carousels/>
            <ClientsFeedback/>
            <HomeFooter/>
        </div>
    );
};

export default Home;