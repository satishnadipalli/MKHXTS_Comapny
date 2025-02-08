import React, { useEffect } from 'react';
import "./Services.css";
import Capabilities from '../../Components/Capabilities/Capabilities';
// import OurService from './subcomponents/Ourservices/OurService';
import Aos from 'aos';
import "aos/dist/aos.css"

const Services = () => {

    useEffect(()=>{
    Aos.init({duration:1000});
    },[])

    useEffect(()=>{
    window.scrollTo({behavior:"smooth",top:0})
    },[])


  return (
    <div className='main-cont'>
    <div className='serv-back' style={{marginBottom:"50px",backgroundImage: `url(${"./servicesback.jpg"})`}}>
        <div className='background'></div>
        <div className='about-text' >
            <h1 className='about-main-head' data-aos="fade-up">Our Services</h1>
            <p className='about-main-para' data-aos="fade-up">MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p>
        </div>
    </div> 
    <h3 className='headingphase' style={{marginTop:"50px",textAlign:"center",width:"80%",margin:"auto",marginBottom:"60px"}}>
            MKTXS provides integrated offerings across all stages of the product life-cycle to optimize price and access upon launch 
        </h3>  
    <div className="containers">
        
        <div className="headerz">
            <div className="header-box blue">Development Phase</div>
            <div className="header-box green">Preclinical – Phase I (Discovery)</div>
            <div className="header-box gray">Phase II – Phase III (Development)</div>
            <div className="header-box dark-blue">Phase III/IV (Launch/Post-launch)</div>
        </div>

        <div className="row">
            <div className="left-section">
                <h3>PMA/HEOR Impact</h3>
                <p>(Non-Exhaustive)</p>
                <p><i>Functional areas and work streams</i></p>
            </div>
            <div className="content">
                <div className="box">
                    <ul>
                        <li>Risk and De-risk</li>
                        <li>Comprehensive Economic and Clinical Burden</li>
                        <ul>
                            <li>PMA landscape</li>
                            <li>Price Analog Analysis</li>
                            <li>Disease burden and HEOR analyses</li>
                        </ul>
                    </ul>
                </div>
                <div className="box">
                    <ul>
                        <li>CT design optimization</li>
                        <li>Patient Selection and recruiting</li>
                        <li>Enhanced endpoints</li>
                        <ul>
                            <li>Indication Sequencing</li>
                            <li>Access stakeholder mapping and segmentation</li>
                            <li>Value story development</li>
                            <li>Payer value mapping</li>
                        </ul>
                    </ul>
                </div>
                <div className="box">
                    <ul>
                        <li>Pricing Strategy Implementation</li>
                        <li>Risk assessment of Outcomes-Based Contracts</li>
                        <li>Enhanced RWE Analytics</li>
                        <ul>
                            <li>PMA Strategy Development</li>
                            <li>Payer evidence Generation / HEOR</li>
                            <li>Policy/advocacy strategy Analytics</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="left-section">
                <h3>Commercial Impact</h3>
            </div>
            <div className="content">
                <div className="box">
                    <ul>
                        <li>Opportunity Assessment</li>
                        <li>P&L Development</li>
                        <li>M&A Opportunities</li>
                    </ul>
                </div>
                <div className="box">
                    <ul>
                        <li>Scientific Platform Development</li>
                        <li>KOL Profiling and Mapping</li>
                        <li>Patient flow Mapping</li>
                        <li>Value Prop / Positioning</li>
                        <li>Stakeholder segmentation</li>
                    </ul>
                </div>
                <div className="box">
                    <ul>
                        <li>Brand plan development and messaging</li>
                        <li>Patient support programs</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className='cap-main'>
        <h3 style={{marginTop:"80px",textAlign:"center",width:"80%",margin:"auto"}}>
            MKTXS accelerated data availability for faster decision making and greater insights while saving costs
        </h3>
    <Capabilities/>
    </div>
    </div>
  )
}

export default Services
