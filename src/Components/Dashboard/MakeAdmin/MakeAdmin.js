import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Navigation, UserContext } from '../../../App';
import Sidenav from '../../CommonComponent/Sidenav/Sidenav';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [info, setInfo] = useState()
    const [loggedInUser ] = useContext(UserContext)
    const [admin , setAdmin]= useState(false)
    const history = useHistory()
    const [nav] = useContext(Navigation)
    
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleAdmin = (e)=>{
        fetch('https://obscure-castle-94167.herokuapp.com/makeAdmin',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({email:info.email, name:info.name})
        })
        .then(response => response.json())
            .then(data => {
                if(data){
                    history.push('/dashboard/adminList')
                }
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault()
    }

    useEffect(()=>{
        fetch('https://obscure-castle-94167.herokuapp.com/mainLeader',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
        .then(res => res.json())
        .then(data => setAdmin(data))
        .catch(error =>
            console.log(error))
    },[ loggedInUser.email])

    return (
       <div>
            {admin && <div className="container-fluid">
            <div className="row">
            <div className="col-md-3">
                <Sidenav />
            </div>
            <div className={`container ${nav.show}`} id="content">
                <div className="d-flex justify-content-center">
                <div className="col-md-8 mt-5">
                    <h1 className="text-center">Make Co-leader</h1>
                <form onSubmit={handleAdmin}>
                    <div className="mb-4">
                        <label className="form-label">Enter Name</label>
                        <input type="text" name="name" onBlur={handleBlur} className="form-control"  required />
                        
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email" name="email" onBlur={handleBlur} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">This Email Address's person  will be a Co-leader of this Web-site</div>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
                </div>
            </div>
            </div>
        </div>}
        {!loggedInUser.isSignedIn && <div className="text-center margin-0"><p>This page is not Available </p><h3>404</h3></div>}
       </div>
    );

};

export default MakeAdmin;