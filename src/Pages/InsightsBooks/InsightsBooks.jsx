import React, { useEffect } from 'react'
import "./InsightBooks.css"
import Aos from 'aos';
import "aos/dist/aos.css"



const InsightsBooks = () => {


    
  useEffect(()=>{
    Aos.init({duration:2000});
    },[])


  const curse = [
    "./disease.png",
    "./burden.png",
    "./landscape.png",
    "./performance.png"
  ]

  const overview = [
    "Disease Overview ",
    "Epidemiology & Disease Burden ",
    "Unmet Needs ",
    "HTA Assessments/ Therapeutic Performance",
    "Pipeline Landscape",
    "Current Treatment Guidelines"
  ];

  const insights = [
    "Opportunities for novel therapies in sub-segments with high unmet needs",
    "Outline evidence generation strategies for asset(s) under development",
    "Map potential impact of future entrants in therapeutic area(s) of interest"
  ];


  useEffect(()=>{
    window.scrollTo({behavior:"smooth",top:0})
  },[])
  return (
    <div className='insights-main'>
        <div className='about'>
          <div className='background'></div>
          <div className='about-text'>
            <h1 className='about-main-head' style={{fontSize:"50px",fontFamily:"Manrope-Semibold",textDecoration:"underline"}}>
                Insight Books
            </h1>
            {/* <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p> */}
          </div>
        </div>
        <h3 className='title' style={{textAlign:"center"}}>
            Insight Books – A 360º View for Smarter Market Access Strategy
        </h3>
        <div style={{width:"100%",marginTop:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img data-aos="fade-up" src="./insight-books.png" style={{height:"500px",mixBlendMode:"multiply",minWidth:"500px",margin:"auto"}} alt="" />
        </div>
        <h3 style={{textAlign:"center",width:"80%",margin:"auto",marginTop:"80px",fontSize:"20px",fontStyle:"italic",fontFamily:"Manrope-Bold",color:"rgb(7,107,178)"}} className='retros'>
            "Insight Books aligns the cross-functional team and serves as a valuable reference for powering decision-making
Disease-level P&R Landscape, including in-line and pipeline products"
        </h3>
    </div>
  )
}

export default InsightsBooks