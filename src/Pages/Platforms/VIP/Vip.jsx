import React, { useEffect } from 'react';
import "./styles/Vip.css";
import flex from "./assets/flexibility.png"
import stateofart from "./assets/stateofart.png"
import sustained from "./assets/sustaied.png"
import synergic from "./assets/synergic.png"
import valid from "./assets/valild.png"
import velocity from "./assets/velocity.png"
import Background from "./assets/vipbackground.jpg"
import Aos from 'aos';
import "aos/dist/aos.css";

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
        img:flex,
        points:["Customized to client specific needs", "Value messages can be tested, refined, and re-tested almost real-time"]
    },
    {
        img:velocity,
        points:["Delivery of results in ONE WEEK from start to finish", "Check the Reviews of us to have a understanding"]
    },        {
        img:sustained,
        points:["Approach based on Harvard Based Negotiations framework ", "Effectiveness of each message is tested individually and wholistically"]
    },        {
        img:valid,
        points:["Insight Dashboard provides analytics in real-time to allow for holistic ", "understanding of payer mindset / movement and VM effectiveness"]
    },
    // {
    //     img:synergic,
    //     points:["Option to upload value messages / points of evidence ", "Option to select country scope / payer archetype "]
    // }
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
      <div className='mktxs_back' data-aos="fade">
        <div className='background'></div>
         <h2 className='main-head'>VIP™</h2>
         <span className='head-2 main-head'>Value Message Testing, Analysis, & Validation</span>
      </div>
      <div className='sec_2'>
      <p className='head-34' data-aos="fade-left">Value Insights Platform (VIP™) for Value Message Testing, Analysis, & Validation</p>
      <p className='head-common' data-aos="fade-right">VIP is a state-of-the-art digital application for real-time value message testing, analysis, and validation</p>
      <div className='rounded_info' data-aos="fade-left">
        <img src={stateofart} className='plat-logo' alt="" />
        <div className='info_holder'>
            <ul>
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
                        <div className='stack_holder' data-aos="fade-right">
                            <img className='cardd' src={item.img} alt="" />
                            <ul>
                                {
                                    item.points.map((ele)=>{
                                        return(
                                            <li className='infor'>{ele}</li>
                                        )
                                    })
                                }
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

{/* <p className='head-4'>MVAP™ Allows For</p> */}
// <div className='info_holder'>
//             <ul>
//                 {
//                     allowanceData.map((item)=>{
//                         return(
//                             <>
//                             <li className='infor'>{item.question}</li>
//                             <li>  {item.answer}</li>
//                             </>
//                         )
//                     })
//                 }
//             </ul>
//             <img className='output-img' src={outputs} alt="" />
//         </div>