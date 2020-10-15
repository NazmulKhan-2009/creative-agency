import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
  return (
    <section>
            <div  className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar/>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <h1>Review List</h1>
                </div>
                
            </div>
        </section>
  );
};

export default Review;