import React from 'react';
import Footer from './Footer/Footer';
import './HomeFooter.css'

const HomeFooter = () => {
    return (
        <div className="full-footer mt-5">
            <br/><br/><br/><br/><br/>
            <Footer/>
            <br/>
            <br/><br/>
           <p  className="text-center"> <small>Copyright by Tamzid in {new Date().getFullYear()}</small></p>
           <br/>
           
        </div>
    );
};

export default HomeFooter;