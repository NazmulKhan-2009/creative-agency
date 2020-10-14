import React from 'react';
import BusinessTag from '../CompanyWithUs/BusinessTag';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
  return (
    <div>

    
      <div className="header-style" >
        <Navbar/>
        <HeaderMain/>
      </div>

      <BusinessTag/>
    </div>
  );
};

export default Header;