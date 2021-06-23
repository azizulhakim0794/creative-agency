import React from 'react';
import NavBar from '../CommonComponent/NavBar/NavBar';
import './WebOverview.css'
import login from '../../images/webOverview/login1.png'
import service1 from '../../images/webOverview/service1.png'
import buyAService from '../../images/webOverview/buyAService.png'
import dashboard from '../../images/webOverview/normalUser.png'
import dashboard2 from '../../images/webOverview/dashboard.png'
import review from '../../images/webOverview/review.png'
const WebOverview = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <p className="mt-5 lead">
                    This website is mainly helps you to get standard your website.Here is the question is how? basically here we are provide you some services which you want you for your website.Our <b>First service is we are develop a website for our client with great design with clean code , Second service is If you get our User Information service then we will provide your the information you need for your website user and this information will help you to get extra information about your user and Last Our design for your website is not Only friendly in computer but also in mobile and tablets this way your user is also liked your website.</b> This type of service we provide an user for get easier handle their website and their service is also standard for an user
                </p>
                <div className="mt-5">
                    <p><b>1. First to get Service you have to login first</b></p>
                    <img src={login} alt="login" />
                </div>
                <div className="mt-5">
                    <p><b>2. then choose your service that what you need</b></p>
                    <img src={service1} alt="service1" />
                </div>
                <div className="mt-5">
                    <p><b>3. Then try this code 4242-4242-4242-4242 to buy your service and date must be a future date</b></p>
                    <img src={buyAService} alt="buyAService" />
                </div>
                <div className="mt-5">
                    <p><b>4.The special things is if you are buy a product you can also share your opinion about this product from your dashboard.</b></p>
                    
                    <div className="row">
                        <div className="col-md-6"><img src={dashboard} alt="dashboard" /></div>
                        <div className="col-md-6"><img src={review} alt="review" /></div>
                    </div>
                </div>
                <div className="mt-5">
                    <p><b>5.The main thing of this website is here is an admin who can control all over the website and he can also set a co-leader for the website and remove him at any time. The Leaders can Add any service and also can remove it, the co-leader is also can do this.</b></p>
                    <img src={dashboard2} alt="dashboard2" />
                </div>
                
            </div>
            <div className="text-center main-bg"><br/>
                <span><small>©Copyright by Tamzid in {new Date().getFullYear()}</small></span>
                <br/>
                <br/>
            </div>
        </div>
    );
};

export default WebOverview;