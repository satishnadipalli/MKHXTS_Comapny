import React, { useEffect } from 'react';
import "./styles/Carve.css";
// import background from "./assets/mvapbackgroundImage.jpg"
// import mvapplogo from "./assets/mvapplatformlogo.png"
// import outputs from "./assets/mvapoutputs.jpg"
import earth from "./assets/img/environment.jpg"
import offerings from "./assets/img/carveofferings.png"
import lastImage from "./assets/img/lastImage.png"
import Aos from "aos";
import "aos/dist/aos.css";

const allowanceData = ["CARVE™ generates real-world evidence to support product’s clinical and/or economic benefits to enhance value / support price",
    "CARVE™ is a platform which assesses existing Payer value drivers and needs, product(s) positioning, and evidence repository (product and competitors) to support existing contracting strategies", 
    "Best ROI strategies to modify existing evidence generation strategies and/or contracting models", 
    "Supports needs for alternative contracting models which align with Payer needs while supporting EvGen plans for executing and monitoring"]

    const productValueData = ["The perception of value varies across countries (Cost/QALY in UK, Patient benefits in DE, BI/costs off sets in USA)",
        "Considers the varying importance of different factors (MoA importance in USA is different than in EU or in JAP)",
        "The value assessment platform considers all the key factors of value from payer standpoint ", 
        "Product value from payer perspective captures not only products’ clinical benefits, but also inherent economic benefits", 
]

const Mvap = () => {

  useEffect(()=>{
    window.scroll({top:0,behavior:"smooth"})
  },[]);
  
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className='mvap_main_div'>
      <div className='mktxs_back' data-aos="fade">
        <div className='background'></div>
         <h2 className='main-head'>CARVE™</h2>
         <span className='head-0' data-aos="fade-left">Continued Access Reinforced</span>
      </div>
      <div className='section_2' >
      <p className='head-34' >CARVE™: Continued Access Reinforced by Value Evidence</p>
      <div className='rounded_infos' data-aos="fade">
        <p className='infor'>Proprietary strategic platform developed to address the increasing payer needs for evidence-based access (such as pay for performance, outcomes-based contracting), and provides contracting strategies to optimize or maintain access</p>
      </div>
      <p className='head-4'>CARVE™ Will Make Promise these Points</p>
      <div className='rounded_infos'>
        
        <div className='info_holder'data-aos="fade-up">
            <ul>
                {
                    allowanceData.map((item)=>{
                        return(
                            <li className='infors'>{item}</li>
                        )
                    })
                }
            </ul>
            <img src={earth} style={{mixBlendMode:"multiply"}} className='plat-logo' alt="" />
        </div>
      </div>
      <p style={{marginTop:"70px"}} className='head-3'>How Can CARVE™ Help?</p>
       <div className='big-img-holder'>
            <img src={offerings} className='carve_offerings' alt="" />
            <ul style={{marginTop:"-20px",}}>
                <li className='inforss'>Carve is part of MarketAxess' suite of electronic trading solutions, providing greater trading efficiency and cost savings</li>
                <li className='inforss'>The platform offers access to a diversified pool of liquidity, making it easier for users to trade fixed-income securities with various market participants</li>
                <li className='inforss'>Carve integrates with MarketAxess' award-winning Open Trading® marketplace, which is a widely regarded all-to-all trading solution in global credit markets</li>
                <li className='inforss'>The platform supports the entire trading lifecycle, including automated trading solutions, intelligent data products,</li>
                <li className='inforss'>Carve connects over 2,000 firms, leveraging patented technology to facilitate efficient and effective trading in the fixed-income market</li>
            </ul>
       </div>
       <p style={{marginTop:"70px"}} className='head-3'>The CARVE™ tool helps a manufacturer manage alternative access contracts given market forces such as Payer evaluation </p>
      <div  className='rounded_infossss'> 
            
            <ul style={{marginTop:"-20px",}}>
                <li className='inforss desss'>Carve is part of MarketAxess' suite of electronic trading solutions, providing greater trading efficiency and cost savings</li>
                <li className='inforss desss'>The platform offers access to a diversified pool of liquidity, making it easier for users to trade fixed-income securities with various market participants</li>
                <li className='inforss desss'>Carve integrates with MarketAxess' award-winning Open Trading® marketplace, which is a widely regarded all-to-all trading solution in global credit markets</li>
                <li className='inforss desss'>The platform supports the entire trading lifecycle, including automated trading solutions, intelligent data products,</li>
                <li className='inforss desss'>Carve connects over 2,000 firms, leveraging patented technology to facilitate efficient and effective trading in the fixed-income market</li>
            </ul>
            <img src={lastImage} className='our-skills' alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default Mvap
