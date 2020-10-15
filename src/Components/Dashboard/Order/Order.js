import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
// import { Link, useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../../App';

import webDesign from '../../../images/icons/service1.png'
import graphicDesign from '../../../images/icons/service2.png'
import webDev from '../../../images/icons/service3.png'
import { useHistory, useParams } from 'react-router-dom';

const serviceData = [
  {
      serviceName: 'Web & Mobile design',
      img: webDesign,
      detail:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
  },
  {
      serviceName: 'Graphic design',
      img: graphicDesign,
      detail:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
  },
  {
      serviceName: 'Web development',
      img: webDev,
      detail:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
  }
]

const Order = () => {
  const {productKey}=useParams()
  console.log( productKey)
  // const [product, setProduct]=useEffect([])
  const [sidenav, setSidenav]=useState(true)
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  const [service, setService]=useState({})
console.log( service)
  
  useEffect(()=>{
   setService(serviceData[productKey-1])


  },[productKey])

    
  let history = useHistory();

  const onSubmit=()=>{
    history.push("/service");
    // const details={
    //   email:loggedInuser.email,
    //   name:loggedInuser.name,
    //   date:data.date,
    //   title:data.Event,
    //   task:data.Task,
    //   // image:events.image
    // }
    // console.log( details)

    // setProduct(serviceData)

    
  }


  return (
      


        <div className="row">
        
          <div className="col-md-2" style={!sidenav ? {display:"none"}:{display:"block"}}>
            <Sidebar/>
          </div>
        
          <div className="col-md-8  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            
             
            

            {/* <div className="form-group p-2">
              <input type="text" name='name' className="form-control" defaultValue={loggedInuser.name} ref={register({ required: true })}/>
            </div>   */}

              <label>
                <span>Your Name & Company's name</span>
                <input type="text" name="name" className="form-control " defaultValue={loggedInuser.name} ref={register({ required: true })}/>
              </label>          
                      
              <label>
                <span>Your email</span>
                <input type="email" name="email" className="form-control" defaultValue={loggedInuser.email}  ref={register({ required: true })}/>
              </label>

              <label>
                
                <input type="text" name="Event" className="form-control" defaultValue={service.serviceName} ref={register({ required: true })}/>
              </label>

               <label>
                 
                <textarea name="text" className="form-control" id="" cols="10" rows="2" placeholder="Project Details"></textarea>
              </label>
            

              <div className="row">
               <div className="col-md-5">
                <input type="text" className="form-control"  name="price" placeholder="Price"  />
               </div>

               <div className="col-md-7">
               
                <input type="File" className="form-control" name="file" />
              
               </div> 
               </div>
               
              
              <button className="btn btn-dark mt-5" type="submit" value="Send">Send</button>
              
              
            </form>
         


          </div>
        </div>
          
          


         
          
            
        
  );
};

export default Order;