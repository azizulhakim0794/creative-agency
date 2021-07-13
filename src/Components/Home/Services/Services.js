import React, {useEffect, useState } from 'react';
import ServicesForm from './ServicesForm/ServicesForm';
import './Services.css'
import axios from 'axios';
import InlineLoading from '../../CommonComponent/InlineLoading/InlineLoading';

const Services = () => {
    // const [handleData , setHandleData] = useState()
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('https://obscure-castle-94167.herokuapp.com/services')
            .then(response => setServices(response.data))
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