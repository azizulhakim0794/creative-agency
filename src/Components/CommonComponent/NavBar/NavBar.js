import React, { useContext } from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
import brand from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';
const NavBar = ({ handleNavbar }) => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" onClick={handleNavbar} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded={'false'} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <img className="navbar-img" src={brand} alt="brand" />
            <div className="collapse nav-right navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mx-5 mb-2 mb-lg-0 h6">
                    <li className="nav-item mx-3 d-flex justify-content-center">
                        <Link to="/home" className="nav-link " aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item mx-3 d-flex justify-content-center">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item mx-3 d-flex justify-content-center">
                        <Link to="/ourTeam" className="nav-link" >Our Team</Link>
                    </li>
                    <li className="nav-item mx-3 d-flex justify-content-center">
                        <Link to="/connectUs" className="nav-link" >Connect Us</Link>
                    </li>
                    <li className="nav-item mx-3 d-flex justify-content-center">
                        <Link to="/webOverview" className="nav-link" >Website Overview</Link>
                    </li>
                </ul>
                {!loggedInUser.isSignedIn && <div className="d-flex justify-content-center">
                    <Link to="/login" className="btn btn-dark" >Login</Link>
                </div>}
            </div>
        </nav>
    );
};

export default NavBar;