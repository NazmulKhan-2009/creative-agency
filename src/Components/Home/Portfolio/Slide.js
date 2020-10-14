import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-4.png'
import carousel4 from '../../../images/carousel-5.png'

const Slide=()=> {
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <img src={carousel1} alt="" width="400px"/>
          </div>
          <div>
          <img src={carousel2} alt="" width="400px"/>
          </div>
          <div>
          <img src={carousel3} alt="" width="400px"/>
          </div>     
          <div>
          <img src={carousel4} alt="" width="400px"/>
          </div>
        </Slider>
      </div>
    );
  
}
export default Slide