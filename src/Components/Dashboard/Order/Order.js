import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
// import { Link, useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../../App';

import { useHistory, useParams } from 'react-router-dom';



const Order = () => {
  const {productKey}=useParams()
  console.log( productKey)
  
  // const [product, setProduct]=useEffect([])
  const [sidenav, setSidenav]=useState(true)
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  const [getService, setGetService]=useState({})
console.log(getService.name )
//   const selectedService=getService[productKey]
// console.log(selectedService)

  // const selectedService=getService.find(service=>service.name===productKey)
  // console.log(selectedService);

  
  
useEffect(()=>{
  fetch('http://localhost:4000/services')
  .then(res=>res.json())
  .then(data=>setGetService(data[productKey]))


},[productKey])

    

 

  // let history = useHistory();

  const onSubmit=(data)=>{
    
    
    const details={
      email:loggedInuser.email,
      name:loggedInuser.name,      
      service:data.service,
      description:data.details,
      price:data.price,
      image:getService.img
    }
    console.log( details)

    fetch("http://localhost:4000/serviceAdd",{
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(details)
  })
  .then(res=>res.json())
  .then(data=>{ console.log(data)
    if(data){
      console.log( "data grabbed")
      // processOrder()
      //   alert("Your Order is succesfully")
    }
  })

    // history.push("/dashboard");
    
      
    
    
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
                
                <input type="text" name="service" className="form-control" defaultValue={getService.name} ref={register({ required: true })}/>
              </label>

               <label>
                 
                <textarea type="text" name='details' className="form-control" defaultValue={getService.description} id="" cols="10" rows="2" placeholder="Project Details" ref={register({ required: true })}></textarea>
              </label>
            

              
               
                <input type="number" className="form-control w-50 "  name="price" placeholder="Price" ref={register({ required: true })} />
               

              
               
               
              
              <button className="btn btn-dark mt-5" type="submit" value="Send">Send</button>
              
              
            </form>
         


          </div>
        </div>
          
          


         
          
            
        
  );
};

export default Order;