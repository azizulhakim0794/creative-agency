import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const AdminAList = ({ data, removeCoAdmin}) => {
    const [admin , setAdmin] = useState(false)
    const [loggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://obscure-castle-94167.herokuapp.com/mainLeader',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setAdmin(data))
        .catch(error =>
            console.log(error))
    },[loggedInUser.email])
    // console.log(admin)
    return (
        <>
            
                <nav className="navbar navbar-light bg-light m-2 col-12" id={`removeItem${data._id}`}  role="alert">
                    <div className="container-fluid">
                        <p className="navbar-brand"> {data.name}</p>
                        {admin && <form className="d-flex">
                            <button type="button" onClick={() =>removeCoAdmin(data._id)} className="btn btn-success btn-sm left-btn" data-bs-dismiss="alert">remove</button>
                        </form>}
                    </div>
                </nav>
          



        </>
    );
};

export default AdminAList;