import React from 'react';

const Contact = () => {
    return (
       <section className="contact my-5 py-5" style={{background:'#FBD062'}}>
           <div className="container">
               
               <div className="row mx-auto">
               <div className="col-md-6 ">
                <h1>Let us handle your <br/> project, professionally.</h1>
                <p className="col-md-8"><small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small> </p>

               </div> 

               <div className="col-md-6 mb-5">
                   <form action="">
                       <div className="form-group p-2">
                           <input type="text" className="form-control " placeholder="Your Email Address "/>
                       </div>
                       <div className="form-group p-2">
                           <input type="text" className="form-control" placeholder="Your name/company's name"/>
                       </div>
                       <div className="form-group p-2">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                       </div>
                       <div className="form-group p-2">
                           <button type="button" className="btn btn-dark"> Send </button>
                       </div>
                   </form>
               </div>
               <p className='text-center mt-5'>Copyright @ Creative Agency {(new Date()).getFullYear()} </p>
               </div>
           </div>
       </section>
    );
};

export default Contact;