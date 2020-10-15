import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
  return (
    <section>
            <div  className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar/>
                </div>
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                    <h1>Make Admin</h1>
                </div>
                
            </div>
        </section>
  );
};

export default MakeAdmin;