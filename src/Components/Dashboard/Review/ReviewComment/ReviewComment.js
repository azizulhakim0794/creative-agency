import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Navigation, UserContext } from '../../../../App';
import Sidenav from '../../../CommonComponent/Sidenav/Sidenav';
import NoMatch from '../../../NoMatch/NoMatch';
const ReviewComment = () => {
    const [loggedInUser] = useContext(UserContext)
    const [data, setData] = useState({})
    const [nav] = useContext(Navigation)
    const [info, setInfo] = useState({
        details: ''
    })
    const { id } = useParams()
    // console.log(loggedInUser , info.details)
    useEffect(() => {
        fetch(`https://obscure-castle-94167.herokuapp.com/dashboard/orderReview/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setData(data))
    }, [id])
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleSubmit = (e) => {

        fetch('https://obscure-castle-94167.herokuapp.com/reviewComment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ googleImg: loggedInUser.photo, userName: loggedInUser.name, details: info.details, email: loggedInUser.email, orderName: data.name, id: data._id })
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()


    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidenav />
                </div>
               {loggedInUser.isSignedIn ?<div className={`container ${nav.show}`} id="content">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-8">
                            <h4>Your are Reviewing about <span className="text-success">{data.name}</span></h4>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email address Address</label>
                                    <input type="email" value={data.email} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Review</label>
                                    <input className="form-control" onBlur={handleBlur} name="details" placeholder="Type whats your opinion" required />
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div> : <NoMatch/>}
            </div>
        </div>
    );
};

export default ReviewComment;