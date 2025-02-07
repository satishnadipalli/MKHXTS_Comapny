import React, { useEffect } from 'react';
import "./styles/Mvap.css";
import background from "./assets/mvapbackgroundImage.jpg"
import mvapplogo from "./assets/mvapplatformlogo.png"
import outputs from "./assets/mvapoutputs.jpg"
import flower from "./assets/mvapproductvalue.png"
import Aos from "aos";
import "aos/dist/aos.css";


const allowanceData = ["Indication prioritization",
    "Product development strategy conceptualization", 
    "Alignment of medical, HEOR, commercial, and product development teams", 
    "Indication-specific pricing",
    "Comparative positioning"]

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
      <div className='mktxs_backss' data-aos="fade">
        <div className='background'></div>
         <h2 className='main-head'>MVAP</h2>
         <span className='head-0' data-aos="fade-left">MKTXS Value Assessment Platform (MVAP™)</span>
      </div>
      <div className='section_2' >
      <p className='head-34' >MKTXS Value Assessment Platform (MVAP™) aids in developing optimal market access strategies</p>
      <div className='rounded_info' data-aos="fade">
        <img src={mvapplogo} className='plat-logos' alt="" />
        <p className='infor'>Proprietary clinical and commercial value assessment tool which quantifies product(s) value based on published literature and internal intelligence, to help assess the clinical and commercial opportunities within/across indications and competitive landscape</p>
      </div>
      <div className='rounded_inf'>
        <p className='head-4'>MVAP™ Allows For</p>
        <div className='info_holder'data-aos="fade">
            <ul>
                {
                    allowanceData.map((item)=>{
                        return(
                            <li className='infor'>{item}</li>
                        )
                    })
                }
            </ul>
            <img className='output-img'  src={outputs} alt=""  />
        </div>
      </div>
      <p style={{marginTop:"70px"}} className='head-3'>MKTXS value assessment platform focuses on all fundamental factors that drive product value from payer perspective</p>
      <div  className='rounded_infoss'> 
        <img src={flower} alt="" className='flower-img' data-aos="fade-right"/>
        
        <div className='info_holders'>
        <p className='head-4' style={{marginTop:"-30px"}} data-aos="fade">The MVAP™ output results will culminate in the Value Story while providing rationale grounded in evidence</p>
            <ul>
                {
                    productValueData.map((item)=>{
                        return(
                            <li className='infor' data-aos="fade">{item}</li>
                        )
                    })
                }
            </ul>
            
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Mvap
