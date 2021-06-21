import React, { useEffect, useState } from 'react';

const ReviewItem = ({ data , handleReview}) => {
    const [item , setItem] = useState([])
    useEffect(() => {
        fetch('https://obscure-castle-94167.herokuapp.com/reviewFind',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({id:data._id})
        })
        .then(res => res.json())
        .then(data => setItem(data))
    },[data._id])
    // console.log(item)
    return (
        <>
        {!item && <div className="card mb-3 orderItems" id={`order${data._id}`}>
            <div className="row g-0 border">
                <div className="col-md-4">
                    <img src={`data:image/png;base64,${data.image}`} className="order-item" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.details}</p>
                        <button className="btn btn-success" onClick={() => handleReview(data._id)}>Review</button>
                    </div>
                </div>
            </div>   
        </div>}
        </>
    );
};

export default ReviewItem;