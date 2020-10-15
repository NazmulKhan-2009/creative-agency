import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/Services.css'
const ServiceDetail = ({ service , index}) => {
    console.log( index)
    const {name,description,} = service
    return (
        <div className="col-md-3  mx-auto text-center service-style p-3">
            <Link to={`/order/${index}`}><img style={{height: '50px'}} src={`http://localhost:4000/${service.img}`} alt="" /></Link>
            <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">{description}</p>
        </div>
    );
};

export default ServiceDetail;