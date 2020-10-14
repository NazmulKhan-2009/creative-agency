import React from 'react';
import Slide from './Slide';
import './Portfolio.css'
const Portfolio = () => {
  return (
    <div className='container-fluid mt-5 pt-5 portfolio-style'>
      <div className='row mx-auto'>
        <h1 className="text-center p-4 mb-5 text-white">Here are some of <span style={{color:"#7AB259"}}>our works</span> </h1>
        <Slide/>
      </div>        
    </div>
  );
};

export default Portfolio;