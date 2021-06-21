import React from 'react';
import './Carousels.css'
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'


const Carousels = () => {
    return (
        <div className="carousel mt-5">
            <h2 className="text-white text-center">Here are some <span className="text-success"> of our works</span>
            </h2>
            <div className="mLeft-5">
            <h2 className="text-white"> Provide awesome services</h2>
            </div>
            
            <div className="container carousel-margin">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <div className="row d-flex">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <img style={{ height: '400px' }} src={carousel1} className="d-block w-100" alt="..." />

                                </div>
                                <div className="col-md-4 col-sm-4 col-4 ">
                                    <img style={{ height: '400px' }} src={carousel2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col-md-4 col-sm-4 col-4 ">
                                    <img style={{ height: '400px' }} src={carousel4} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img style={{ height: '400px' }} src={carousel1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <img style={{ height: '400px' }} src={carousel3} className="d-block w-100" alt="..." />
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <img style={{ height: '400px' }} src={carousel2} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <br/><br/>
        </div>
    );
};

export default Carousels;