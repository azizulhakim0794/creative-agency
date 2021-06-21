import React from 'react';

const Orders = ({ data, handleCancel }) => {
    return (
        <div className="card mb-3 orderItems" id={`order${data._id}`}>
            <div className="row g-0 border">
                <div className="col-md-4">
                    <img src={`data:image/png;base64,${data.image}`} className="order-item" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.details}</p>
                        <button className="btn btn-success" onClick={() => handleCancel(data._id)}>Cancel</button>
                        <br/><br/>
                        <p className="h6 text-center">After 24 hours your order will confirm</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Orders;