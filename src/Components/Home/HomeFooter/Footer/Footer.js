import React from 'react';

const Footer = () => {
    return (
        <div  className="d-flex justify-content-center">
        <div className="container row">
            <div className="col-md-6 col-sm-6 col-xl-6 col-12">
                <h2 className="text-center">Let us handle your <br />project, professionally.</h2>
                <p className="text-center">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                <br/><br/>
            </div>
            <div className="col-md-6 col-sm-6 col-xl-6 col-12">
                <form>
                    <div className="mb-3">
                        <input type="email" placeholder="Your email address" className="form-control-lg" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Your name/Company's name" className="form-control-lg" />
                    </div>
                    <div className="mb-5">
                        <textarea className="form-control" placeholder="Your message" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Send</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Footer;