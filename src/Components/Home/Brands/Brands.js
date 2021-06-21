import React from 'react';
import './Brands.css'
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'

const Brands = () => {
    return (
       <div className="d-flex justify-content-center">
            <div className="container row d-flex justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-4 col-6"><img className="brands-img" src={airbnb} alt=""/></div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-6"><img className="brands-img" src={google} alt=""/></div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-6"><img className="brands-img" src={uber} alt=""/></div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6"><img className="brands-img" src={netflix} alt=""/></div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6"><img className="brands-img" src={slack} alt=""/></div>
        </div>
       </div>
    );
}; 

export default Brands;