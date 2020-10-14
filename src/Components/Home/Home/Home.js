import React from 'react';
import Contact from '../Contact/Contact';
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
      <Contact/>
      
    </div>
  );
};

export default Home;