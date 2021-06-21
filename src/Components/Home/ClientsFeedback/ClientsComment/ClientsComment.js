import React from 'react';
const ClientsComment = ({ data }) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 mb-4 ">
            <div className="card h-100">
                <div className="row">
                    <div className="col-md-5 col-sm-5 col-5">
                    <img className="comment-img card-img-top round-img" src={data.userImg} alt={data._id}/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                        <h4 className="mt-5">{data.name}</h4>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{data.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientsComment;