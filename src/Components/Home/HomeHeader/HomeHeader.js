import React, { useState } from 'react';
import NavBar from '../../CommonComponent/NavBar/NavBar';
// import NavBar from '../NavBar/NavBar';
import Header from './Header/Header';

const HomeHeader = () => {

        const mainHeader = 'main-774'
        const miniHeader = 'mini-588'
        const [height , setHeight] = useState('main-588')
        const handleNavbar = () =>{
            setHeight(mainHeader)
            if(height===mainHeader){
                setHeight(miniHeader)
            }
        }
    return (
        <div className={`home-header-bg ${height}`}>
            <NavBar handleNavbar={handleNavbar}></NavBar>
            <Header/>
        </div>
    );
};

export default HomeHeader;