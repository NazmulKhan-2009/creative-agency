import React from 'react';

import webDesign from '../../../images/icons/service1.png'
import graphicDesign from '../../../images/icons/service2.png'
import webDev from '../../../images/icons/service3.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        key:1,
        serviceName: 'Web & Mobile design',
        img: webDesign,
        detail:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {   
        key:2,
        serviceName: 'Graphic design',
        img: graphicDesign,
        detail:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        key:3,
        serviceName: 'Web development',
        img: webDev,
        detail:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5 pt-5">
            <div className="text-center">
                
                <h1>Provide awesome <span style={{color: '#7AB259'}}>services</span> </h1>
            </div>
            <div className="d-flex justify-content-center container">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.key}/>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;