import React from 'react';
// import NavBar from '../CommonComponent/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './ConnectUs.css'
import NavBar from '../CommonComponent/NavBar/NavBar';

const ConnectUs = () => {
    // const imgURL = 
    return (
        <div className="connectUs">
            <NavBar />
            <br /><br />
            <div className="container">
                <h1 className="text-center">Connect <span className="text-success">with us</span></h1><br /><br />
                <div className="row text-center">
                    <div className="col-sm-6">
                        <div className="card mt-4">
                            <div className="card-body ">
                                <h1><FontAwesomeIcon icon={faPhoneAlt} /></h1>
                                <p><b>Contact With Us</b></p>

                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <p className="text-success">+8801760690793</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h1><FontAwesomeIcon icon={faComments} /></h1>
                                <p><b>Contact Customer Support</b></p>

                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Support</button>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">

                                            <div className="modal-body">
                                                <h3 className="text-center">You can call <span className="text-success">only Our Admin</span></h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
            </div>
            <div className="text-center main-bg"><br/>
                <h1>We are always With you</h1>
                <br/>
                <span className="text-white"><small>Copyright by Tamzid in {new Date().getFullYear()}</small></span>
                <br/>
                <br/>
            </div>
        </div>
    );
};

export default ConnectUs;