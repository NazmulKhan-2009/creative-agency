import React from 'react';

const Testimonial = (props) => {
    const {quote,name,designation ,img} = props.testimonial;
    return (
      
        <div className="card col-md-4">
            <div className=" d-flex  align-items-center">
              <img className="mx-4" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{designation}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            
       </div>
       
      
    );
};

export default Testimonial;