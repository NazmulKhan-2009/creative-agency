import React from 'react';

const Testimonial = ({testimonial}) => {
    const {name, coname, description , img} = testimonial;
    return (
      
        <div className="card col-md-4">
            <div className=" d-flex  align-items-center">
              <img className="mx-4" src={`http://localhost:4000/${testimonial.img}`} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{coname}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
            
       </div>
       
      
    );
};

export default Testimonial;