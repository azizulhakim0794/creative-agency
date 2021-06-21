import React, { useContext, useEffect, useState } from 'react';
import './Review.css'
import { Navigation, UserContext } from '../../../App';
import ReviewItem from './ReviewItem/ReviewItem';
import { useHistory } from 'react-router';
import Sidenav from '../../CommonComponent/Sidenav/Sidenav';
import Loading from '../../CommonComponent/Loading/Loading';
import PleaseLogin from '../../CommonComponent/PleaseLogin/PleaseLogin';

const Review = () => {
    const [loggedInUser] = useContext(UserContext)
    const [order, setOrder] = useState([])
    const [nav] = useContext(Navigation)
    useEffect(() => {
        fetch('https://obscure-castle-94167.herokuapp.com/myOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({ email: loggedInUser.email, uid: loggedInUser.uid })
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [loggedInUser.email, loggedInUser.uid])
    const history = useHistory()
    const handleReview = (e) => {
        history.push(`orderReview/${e}`)

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidenav />
                </div>
                <div className={`container ${nav.show} mt-5` } id="content">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-8 col-sm-6 col-6 mt-5">
                            {loggedInUser.isSignedIn && <div> <div>
                                <h1 className="text-center">Your Review Items</h1><br />
                            </div>
                                {
                                    order.length ? (order.map(data => <ReviewItem data={data} handleReview={handleReview} key={data._id} />)) : <Loading />
                                }
                            </div>
                            }
                            <PleaseLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;