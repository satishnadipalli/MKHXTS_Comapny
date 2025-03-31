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
            <h1 className='about-main-head'>About Our Company</h1>
            <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p>
          </div>
        </div>
        <h3 className='title' style={{textAlign:"center"}}>
            Insight Books – A 360° View for Smarter Market Access
        </h3>
        <div style={{width:"100%",marginTop:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img data-aos="fade-up" src="./insightbooks.png" style={{width:"700px",minWidth:"500px",margin:"auto"}} alt="" />
        </div>
        <h3 style={{textAlign:"center",width:"80%",margin:"auto",marginTop:"80px",}} className='retro'>
            Insight Books Module Empower Rapid de-risk and Optimal Decision-making for NBD opportunities
        </h3>
        <div className='insights-container'>
            <img src="./insightlogo.png" alt="No iamge found" className='ins_logo'/>
            {
                curse?.map((element)=>{
                    return(
                        <img src={element} alt="" style={{width:"180px"}} />
                    )
                })
            }
        </div>

        <div className='sec-insight-container'>
            <div className='main_ins_head'>
                KEY DOMAINS
            </div>
            <div className='over-maper'>
                {
                    overview?.map((element,i)=>{
                        return(
                            <div className='overmap'>{element}</div>
                        )
                    })
                }
            </div>
        </div>

        <div className='sec-insight-container'>
            <div className='main_ins_head'>
                KEY INSIGHTS
            </div>
            <div className='over-maper'>
                {
                    insights?.map((element,i)=>{
                        return(
                            <div>{element}</div>
                        )
                    })
                }
            </div>
        </div>

        <h3 style={{textAlign:"center",width:"80%",margin:"auto",marginTop:"80px",fontSize:"18px"}} className='retro'>
            Insight Books Module Empower Rapid de-risk and Optimal Decision-making for NBD opportunities
        </h3>
    </div>
  )
}

export default InsightsBooks