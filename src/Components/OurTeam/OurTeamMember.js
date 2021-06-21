import React from 'react';

const OurTeamMember = ({data}) => {
    return (

            <div className="col-md-4 col-sm-6 col-12 mb-4 text-center">
                    <img  src={data.img} className="card-img-top round-img1" alt="..."/>
                        <h4 className="mt-2">{data.name}</h4>
                        <h5 className="mt-3">{data.work}</h5>
                <div className="card-body ">
                    <p className="card-text">{data.details}</p>
                </div>
        </div>
 
    );
};

export default OurTeamMember;