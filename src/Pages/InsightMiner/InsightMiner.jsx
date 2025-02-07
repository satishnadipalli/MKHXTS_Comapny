// import React from 'react'

// const InsightMiner = () => {
//   return (
//     <div>
//       <div className='about' style={{marginBottom:"50px"}}>
//         <div className='background'></div>
//         <div className='about-text'>
//             <h1 className='about-main-head'>Our Services</h1>
//             <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p>
//         </div>
//     </div> 
//     </div>
//   )
// }

// export default InsightMiner
import React, { useEffect } from 'react';
import './InsightMiner.css';

const InsightMiner = () => {


  
    useEffect(()=>{
      window.scrollTo({behavior:"smooth",top:0})
    },[])



  return (
    <div>
        <div>
           <div className='about' style={{marginBottom:"50px"}}>
             <div className='background'></div>
             <div className='about-text'>
                 <h1 className='about-main-head'>Our Services</h1>
                 <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p>
             </div>
         </div> 
         </div>
         <div className="insight-miner-container">
      <h1 className="main-heading">
        Integrating vast data sources, Insight Miner allows for deep dive into complex business questions
      </h1>

      <div className="dotted-line">
        <p className="custom-analysis">
          Custom and detailed analysis across new product development, clinical and commercialization functions built on continuously updated datasets and customizable sources
        </p>
      </div>

      <h2 className="platform-highlight">
        Our platform makes it easy to analyze vast data, and allows for a real-time tracking of evidence
      </h2>

      <div className="insight-content">
        <div className="insight-miner-section">
          <div className="title-box">Insight Miner</div>
          <ul>
            <li>Natural Language Queries</li>
            <li>Pre-built, Templatized Modules</li>
            <li>Custom built Modules</li>
          </ul>
        </div>

        <div className="process-flow">
          <span>Triangulation, Filters, Business Rules, Analysis</span>
          <div className="arrow">&#x27A1;</div>
          <span>Custom Queries & Visualization</span>
        </div>

        <div className="outputs-section sre">
          <div className="title-box">Outputs</div>
          <img src="./minerright.png" alt="" />
        </div>
      </div>

      <p className="insight-description">
        Insight Miner incorporates business relationships, domain ontologies, scientific methodologies, and data context. It is built on continuously updated and customizable datasets.
      </p>

      <h3 className="footer-highlight">
        Ensuring Accuracy, Robustness, Scalability
      </h3>
    </div>

    <style>
        
    </style>
    </div>

  );
};

export default InsightMiner;
