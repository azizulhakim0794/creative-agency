import React from 'react';
import { useHistory } from 'react-router';

const ServicesForm = ({ data }) => {
  const history = useHistory()


  const handleClickServices = (data) => {
    history.push(`/servicesSelect/${data}`)
  }

  return (
    <div className=" col-md-4 col-sm-6 col-12 mb-3" onClick={() => handleClickServices(data._id)}>
      <div className="rounded border border-2 col  card-hover h-100">
        <div className="card text-center border-0 m-2">
          <img src={`data:image/png;base64,${data.image.img}`} className="card-img-top-round mt-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-dark">{data.name}</h5>
            <p className="card-text text-dark">{data.details}</p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default ServicesForm;