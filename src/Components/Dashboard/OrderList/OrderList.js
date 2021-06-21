import React, { useContext, useEffect, useState } from 'react';
import { Navigation, UserContext } from '../../../App';
import Orders from './Orders';
import './OrderList.css'
import Loading from '../../CommonComponent/Loading/Loading';
import Sidenav from '../../CommonComponent/Sidenav/Sidenav';
import PleaseLogin from '../../CommonComponent/PleaseLogin/PleaseLogin';

const OrderList = () => {
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
            .catch(ex => console.error(ex))
    }, [loggedInUser.email, loggedInUser.uid])
    const handleCancel = (e) => {
        document.getElementById(`order${e}`).style.display = "none";
        fetch('https://obscure-castle-94167.herokuapp.com/orderDelete/', {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ deleteId: e })
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error =>
                console.log(error))
    }
    return (

        <div className="container-fluid" >
            <div className="row">
                <div className="col-md-3 ">
                    <Sidenav />
                </div>
                <div className={`container ${nav.show}`} id="content" onClick={nav.handleNavigationOff}>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-8 col-sm-6 col-6 mt-5" >
                            {loggedInUser.isSignedIn && <div>
                                <h1 className="text-center">Your Order Details</h1><br /><div>
                                    {
                                        order.length ? (order.map(data => <Orders data={data} handleCancel={handleCancel} key={data._id}></Orders>)) :<Loading />   
                                    }
                                </div>
                            </div>}
                            <PleaseLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrderList;