import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/Services.css'
const ServiceDetail = ({ service }) => {
    const {img,serviceName,detail,key}=service
    return (
        <div className="col-md-3  mx-auto text-center service-style p-3">
            <Link to={`/order/${key}`}><img style={{height: '50px'}} src={img} alt="" /></Link>
            <h5 className="mt-3 mb-3">{serviceName}</h5>
            <p className="text-secondary">{detail}</p>
        </div>
    );
};

export default ServiceDetail;