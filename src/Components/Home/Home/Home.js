import React from 'react';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      
    </div>
  );
};

export default Home;