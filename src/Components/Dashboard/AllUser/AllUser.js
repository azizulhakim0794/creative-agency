import React, {useContext, useEffect, useState } from 'react';
import './AllUser.css'
import axios from 'axios';
import Sidenav from '../../CommonComponent/Sidenav/Sidenav';
import Loading from '../../CommonComponent/Loading/Loading';
import { Navigation, UserContext } from '../../../App';
import AllUserTem from './AllUserTem';

const AllUser = () => {
    const [allUserData, setAllUserData] = useState([])
    const [loggedInUser] = useContext(UserContext)
     const [nav] = useContext(Navigation)
    useEffect(()=>{
        axios.get('https://obscure-castle-94167.herokuapp.com/dashboard/allUserOrder')
        .then(response => setAllUserData(response.data))
    },[allUserData])
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
                                <h1 className="text-center">All Users Orders</h1><br />
                            </div>
                                {
                                    allUserData.length ? (allUserData.map(data => <AllUserTem data={data} key={data._id} />)) : <Loading />
                                }
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUser;