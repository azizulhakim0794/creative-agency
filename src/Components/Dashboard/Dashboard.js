import React, { useContext } from 'react';
import { Navigation, UserContext } from '../../App';
import Sidenav from '../CommonComponent/Sidenav/Sidenav';
import './Dashboard.css'

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext)
    const [nav] = useContext(Navigation)
    return (


        <div className="container-fluid" >
            <div className="row">
                <div className="col-md-3">
                    <Sidenav />
                </div>
                <div className={`container text-center ${nav.show}`} id="content" >
                    <div className="d-flex justify-content-center">
                        {loggedInUser.isSignedIn && <h2 className="text-center mt-5">Your Dashboard</h2>}
                        {!loggedInUser.isSignedIn && <div className="col-md-8">
                            <p className="mt-5">Please login and try again</p>
                        </div>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;