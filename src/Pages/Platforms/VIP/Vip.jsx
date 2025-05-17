import React, { useEffect } from 'react';
import "./styles/Vip.css";

// import flex from ""
// import vocalitic from ""
// import valid from "./assets/velocity-1.jpg"
// import velocity from ""
// import insights from "./insights-1.png"


import stateofart from "./assets/stateofart.png"
import Background from "./assets/vipbackground.jpg"
import Aos from 'aos';
import "aos/dist/aos.css";
import GlobalPayerNetwork from '../../../Components/GlobalPlayerNetwork/GlobalPlayerNetwork';

const allowanceData = [
    {
        question:"Value Message Philosophy / Why VIP?",
        answer :"Value messages play an integral role in shaping the mindsets of stakeholders and are a critical component for the evidence generation strategy of a novel therapy "
    },
    {
        question:"Traditional value message testing processes are lengthy, inefficient, and rigid   ",
        answer:"With tenured experience and careful deliberation, MKTXS has revolutionized the approach to test and optimize value messages, launching the Value Insights Platform (VIP™)"
    }
]

const benifitsData = [
    {
        img:"./insights-1.png",
        points:"Actionable, Refined, and Globally validated"
    },
    {
        img:"./velocity-1.png",
        points:"ONE WEEK from start to finish"
    },
    {
        img:"./vocalties-1.png",
        points:"True resonance:  Assess the words and the perceptions (emotions, patterns, and cues) to gauge the value of the story "
    },
    {
        img:"./mind-1.png",
        points:"Real-time Payer mindset movement toward optimal value"
    },
           {
        img:"./flex-1.png",
        points:"Customized to assess individual messages as well as overall value story"
    },  
 

]

const Vip = () => {
    useEffect(()=>{
        window.scroll({top:0,behavior:"smooth"})
      },[]);
      
    useEffect(()=>{
        Aos.init({duration:1700});
    });
  
    return (
    <div className='mvap_main_div'>
      <div className='mktxs_backs' data-aos="fade">
        <div className='background'></div>
         <div className='mobility'>
         <h2 className='main-head ' style={{fontSize:"50px",fontFamily:"Manrope-Semibold"}}>VIP™</h2>
         {/* <span className='head-2 main-head'>Value Message Testing, Analysis, & Validation</span> */}
         </div>
      </div>
      <div className='section_2'>
        <h2 className='title' style={{width:"90%",textAlign:"center",marginTop:"40px",marginBottom:"30px"}}>
            VIP provides actionable insights of a qualitative interview with the significance and speed of a quant survey
        </h2>
      <div style={{margin:"auto",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src="./vipmain.jpg" style={{height:"400px",minWidth:"500px",margin:"auto"}} alt="" />
      </div>

      <GlobalPayerNetwork/>
      <h3 className='' style={{textAlign:"center",marginTop:"40px",marginBottom:"40px"}}>
        VIP offers real-time feedback and assessment for your TPP assumptions and Value Story 
      </h3>
      <div className="rounded_infosss">
            {benifitsData.map((item, index) => (
                <>
                <div key={index} className="stack_holder">
                <img className="cardd" src={item.img} alt="" />
                <ul>
                    <li className="infor">
                    <span style={{ color: "rgb(27,173,153)", fontWeight: "bold" }}>
                        {item.points.split(" ")[0]} {/* First word in bold green */}
                    </span>{" "}
                    {item.points.substring(item.points.indexOf(" ") + 1)} {/* Rest of the sentence */}
                    </li>
                </ul>
                
                </div>
                <img src="./dotted.png" alt="" />
                </>
            ))}
            </div>

      </div>
      
    </div>
  )
}

export default Vip

