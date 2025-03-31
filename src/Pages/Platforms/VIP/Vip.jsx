import React, { useEffect } from 'react';
import "./styles/Vip.css";
import flex from "./assets/flexibility.png"
import stateofart from "./assets/stateofart.png"
import insights from "./assets/insights.png"
import vocalitic from "./assets/vocalists.jpg"
import valid from "./assets/mindset.jpg"
import velocity from "./assets/velocity.jpg"
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
        img:vocalitic,
        points:"True resonance:  Assess the words and the perceptions (emotions, patterns, and cues) to gauge value of the story "
    },  
    {
        img:flex,
        points:"Customized to assess individual messages as well as overall value story"
    },  
    {
        img:valid,
        points:"Real-time: Payer mindset movement toward optimal value"
    },    
    {
        img:insights,
        points:"Actionable, Refined, and Globally validated"
    },
    {
        img:velocity,
        points:"ONE WEEK from start to finish"
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
         <h2 className='main-head'>VIP™</h2>
         <span className='head-2 main-head'>Value Message Testing, Analysis, & Validation</span>
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
      <p className='head-34' >Value Insights Platform (VIP™) for Value Message Testing, Analysis, & Validation</p>
      <p className='head-common'>VIP is a state-of-the-art digital application for real-time value message testing, analysis, and validation</p>
      <div className='rounded_info' >
        <img src={stateofart} className='plat-logo' alt="" />
        <div className='info_holder'>
            <ul className='ul_holder'>
                {
                allowanceData.map((item)=>{
                    return(
                        <>
                        <li className='question'>{item.question}</li>
                        <p className='answer'>{item.answer}</p>
                        </>
                    )
                })
                }
            </ul>
        </div>
      </div>
      <p className='head-3'>Key Features & Benefits</p>
      <div  className='rounded_infosss'> 
            {
                benifitsData.map((item)=>{
                    return(
                        <div className='stack_holder'>
                            <img className='cardd' src={item.img} alt="" />
                            <ul>
                                <li className='infor'>{item.points}</li>
                            </ul>
                        </div>
                    )
                })
            }
      </div>
      </div>
      
    </div>
  )
}

export default Vip

