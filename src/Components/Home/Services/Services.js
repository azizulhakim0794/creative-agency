import React, {useEffect, useState } from 'react';
import ServicesForm from './ServicesForm/ServicesForm';
import './Services.css'
import InlineLoading from '../../CommonComponent/InlineLoading/InlineLoading';

const Services = () => {
    // const [handleData , setHandleData] = useState()


    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://obscure-castle-94167.herokuapp.com/allServices',)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="container top-margin">
            <h2 className="text-center">Ous Services</h2>
            <br /><br />
            <div className="row m-auto m-1"  >
                {
                   services.length ? (services.map(data => <ServicesForm data={data} key={data._id}></ServicesForm>)) : <InlineLoading/>
                }
            </div>
        </div>
    );
};

export default Services;