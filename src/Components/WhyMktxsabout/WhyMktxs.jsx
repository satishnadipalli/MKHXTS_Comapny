import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './WhyMktxs.css';
import Aos from 'aos';
import "aos/dist/aos.css"



const WhyMktxs = () => {


    useEffect(()=>{
      Aos.init({duration:2000});
    },[])
  
  return (
    <div className="why-mktxs-container" >
      <img src="./whymktxs.svg" style={{mixBlendMode:'multiply'}}  data-aos="fade-in" alt="" /> 
    </div>
  );
};

export default WhyMktxs;
