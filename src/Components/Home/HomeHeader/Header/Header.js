import React from 'react';
import './Header.css'
import headerPhoto from '../../../../images/logos/Frame.png'

const Header = () => {
    const handle = ()=>{
        alert(`Sorry!!! 
        We are Watching Billah Video.You can call me in "Connect us" page.`)
    }
    return (
        <div className="top-margin container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-5 col-xm-5 col-5">
                    <h1 className='text-black'>
                     Let’s Grow Your <br/> Brand To The <br/> Next Level
                    </h1>
                    <br/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo  ipsum <br/>duis laoreet maecenas. Feugiat
                    </p>
                    <br/>
                    <button className="btn btn-dark"  onClick={handle}>Hire Us</button>
                </div>
                <div className="col-md-5 col-sm-5 col-xm-5 col-5 header-png top-margin">
                    <img className="w-100" src={headerPhoto} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;