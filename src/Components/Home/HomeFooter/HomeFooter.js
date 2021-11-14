import React from 'react';
import Footer from './Footer/Footer';
const HomeFooter = () => {
    return (
        <div className="full-footer mt-5">
            <br/><br/><br/><br/><br/>
            <Footer/>
            <br/>
            <br/><br/>
           <p  className="text-center"> <small>Copyright by <a href="https://azizulhakim.netlify.app" target="blank">Tamzid</a> in {new Date().getFullYear()}</small></p>
           <br/>
           
        </div>
    );
};

export default HomeFooter;