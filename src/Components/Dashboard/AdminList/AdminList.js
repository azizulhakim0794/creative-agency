import React, { useContext, useEffect, useState } from 'react';
import { Navigation, UserContext } from '../../../App';
import Loading from '../../CommonComponent/Loading/Loading';
import Sidenav from '../../CommonComponent/Sidenav/Sidenav';
import AdminAList from './AdminAList';
import './AdminList.css'
const AdminList = () => {
    const [loggedInUser] = useContext(UserContext)
    const [nav] = useContext(Navigation)
    const [coLeader, setCoLeader] = useState([])
    useEffect(() => {
        fetch('https://obscure-castle-94167.herokuapp.com/AllCoLeader')
            .then(res => res.json())
            .then(data => setCoLeader(data))
    }, [])
    console.log(coLeader)
    const handleRemoveCoAdmin = (e) => {
        document.getElementById(`removeItem${e}`).style.display = "none";
        console.log(e)
        fetch('https://obscure-castle-94167.herokuapp.com/coAdminDelete', {
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
        <div className="container-fluid">
            { loggedInUser.isSignedIn && <div className="w-99 row">
                <div className="col-md-3">
                    <Sidenav />
                </div>

                <div className={`container ${nav.show}`} id="content">
                   <div className="d-flex justify-content-center">
                   <div className="col-md-8 mt-5 admin-list">
                    <p className="text-center"><b>All Co-leader name</b></p>
                    {
                        coLeader.length ? (coLeader.map(data => <AdminAList removeCoAdmin={handleRemoveCoAdmin} data={data} key={data._id} />)) : <Loading/>    
                    }
                </div>
                   </div>
               </div>
            </div>}

            {!loggedInUser.isSignedIn && <div className="text-center margin-0"><p>This page is not Available </p><h3>404</h3></div>}

        </div>
    );
};

export default AdminList;