import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center p-2">
            <div  className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#3A4256',fontWeight:"700"}}>Let’s Grow Your <br></br>Brand To The<br></br> Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/appointment" className="btn btn-dark">Hire Us</Link>
            </div>
            <div className="col-md-7 col-sm-6 col-12">
                <img src={frame} alt="" className="img-fluid" width="624px" height="422px"/>
            </div>
        </main>
    );
};

export default HeaderMain;