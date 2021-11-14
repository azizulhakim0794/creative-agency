import React from 'react';
import NavBar from '../../CommonComponent/NavBar/NavBar';
import Header from './Header/Header';

const HomeHeader = () => {
    return (
        <div className="home-header-bg">
            <NavBar></NavBar>
            <Header/>
            <br />
        </div>
    );
};

export default HomeHeader;