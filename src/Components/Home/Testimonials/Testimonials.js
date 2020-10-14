import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import NashPatrik from '../../../images/customer-1.png'
import MiriamBarron from  '../../../images/customer-2.png'
import BriaMalone from '../../../images/customer-3.png'

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Nash Patrik',
        designation : 'CEO, Manpol',
        img : NashPatrik
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Miriam Barron',
        designation : 'CEO, Manpo',
        img : MiriamBarron
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
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