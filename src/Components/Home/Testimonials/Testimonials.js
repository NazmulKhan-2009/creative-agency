import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import NashPatrik from '../../../images/customer-1.png'
import MiriamBarron from  '../../../images/customer-2.png'
import BriaMalone from '../../../images/customer-3.png'

const testimonialData = [
    {
        quote : 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        name : 'Nash Patrik',
        designation : 'CEO, Manpol',
        img : NashPatrik
    },
    {
        quote : 'Amazing flyers, social media posts and brand representations that would make your brand stand out. ',
        name : 'Miriam Barron',
        designation : 'CEO, Manpo',
        img : MiriamBarron
    },
    {
        quote : 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general. ',
        name : 'Bria Malone',
        designation : 'CEO, Manpol',
        img : BriaMalone
    }
]

const Testimonials = () => {
    return (
       <section className=" my-5 py-5">
           <div className="container">
               <div className="">
                   
                   <h1 style={{textAlign: 'center'}}>Clients <span style={{color:'#7AB259'}}>Feedback</span></h1>
               </div>
               
               <div className=" row mt-5">
                   
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                  
                </div> 
                
           </div>
       </section>
    );
};

export default Testimonials;