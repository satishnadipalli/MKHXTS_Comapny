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
    <>
    <div className="why-mktxs-container" >
      <img src="./whymktxss.png" style={{width:"auto"}}  data-aos="fade-in" alt="" /> 
    </div>
    {/* <div className="flow-container">
      <div className="left-section">
        {['Disease overview', 'Disease burden', 'Unmet needs', 'Treatment guidelines', 'Pipeline analysis', 'In-Market competitors', 'HTA assessments'].map((item, index) => (
          <div key={index} className="box left-box">{item}</div>
        ))}
      </div>

      <div className="middle-section">
        <div className="key-domains">Key domains</div>
        <div className="connector">MKTXS AI-generated Insight Books</div>
        <p className="description">“Due diligent data with auto-update function”</p>
        <div className="core-value">Core Value Proposition</div>
      </div>

      <div className="right-section">
        {['Holistic market understanding', 'Landscape analysis', 'Early-stage asset evaluation', 'Evidence generation strategy', 'Competitive intelligence'].map((item, index) => (
          <div key={index} className="box right-box">{item}</div>
        ))}
      </div>
    </div> */}
    </>
  );
};

export default WhyMktxs;
