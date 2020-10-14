import React from 'react';
import '../Services/Services.css'
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-3  mx-auto text-center service-style p-3">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.detail}</p>
        </div>
    );
};

export default ServiceDetail;