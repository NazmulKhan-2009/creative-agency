import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';



const ServiceList = () => {
    const [loggedInuser, setloggedInUser]=useContext(userContext)
    const [service, setService]=useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/servicelist?email="+loggedInuser.email)
        .then(res=>res.json())
        // .then(data=>console.log(data[3]))
        .then(data=>setService(data))
        },[loggedInuser.email])



  return (
    <section>
        <div  className="row">
            <div className="col-md-4 col-sm-3 ">
            <p>{loggedInuser.name}</p>
            <Sidebar></Sidebar>
            </div>
   
            <div className='col-sm-9 col-md-7'>
                {
                service.map(eventList=>
                

                <div className="card mb-3 col-sm-10 col-md-5  ml-5 mt-5" >
                    <div className="row g-0 ">
                    <div className="col-md-6">
                        <img src={`http://localhost:4000/${eventList.image}`}  alt="" className="w-50"/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                        <button className="btn btn-dark">Pending</button>
                        <h5 className="card-title">{eventList.service}</h5>
                        <p className="card-text">{eventList.description}</p>
                        {/* <button onClick={()=>cancel(`${eventList._id}`)} className="btn btn-dark mt-5">Cancel</button> */}
                        </div>
                    </div>
                    </div>
                </div>
              
              
              )
            }      
          </div>
        
      </div>
                
            
        </section>
  );
};

export default ServiceList;