import React, { useEffect, useState } from 'react';
import  './ClientsFeedback.css'

import ClientsComment from './ClientsComment/ClientsComment';


const ClientsFeedback = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://obscure-castle-94167.herokuapp.com/allComment',{
            method: 'GET',
        })
        .then(res => res.json())
        .then(data =>setData(data))
    },[])
    // console.log(data)
    return (
        <div className="container mt-5">
            <h2 className="text-center">Clients <span className="text-success">Feedback</span></h2>
            <div className="row mt-5">
                {
                    data.map(data => <ClientsComment data={data} key={data._id}></ClientsComment>)
                }
            </div>
        </div>
    );
};

export default ClientsFeedback;