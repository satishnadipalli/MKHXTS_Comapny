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
         <h2 className='main-head'>Pharma AI</h2>
      </div>
      <div className='section_2' >
      <h2 style={{fontWeight:'bold',textAlign:"center",marginTop:"40px"}}>Pharma AI™ aids in developing optimal market access strategies</h2>
      <p style={{fontWeight:"bold",fontSize:"20px",backgroundColor:"rgb(72, 77, 82)",margin:"auto",display:"flex",alignItems:'center',justifyContent:"center",textAlign:"center",marginTop:"50px",color:"white"}}>
        Pharma AI output results will culminate in the Value Story while providing rationale grounded in evidence 
      </p>
      <div style={{width:"100%",display:"flex",alignItems:'center',justifyContent:"center",marginTop:"40px"}}>
        < img src="./pharma.png"  style={{height:"450px",minWidth:"400px",margin:"auto"}} alt="" />
      </div>
      {/* This will be removed from this point */}
      <h3 style={{fontWeight:'bold',marginTop:"60px",textAlign:"center"}}>
      Pharma AI conducts future asset valuation by considering product core clinical and economic attributes
      </h3>
      <p style={{fontWeight:"bold",fontSize:"20px",backgroundColor:"rgb(7, 107, 178)",margin:"auto",display:"flex",alignItems:'center',justifyContent:"center",textAlign:"center",marginTop:"50px",color:"white"}}>
      The IDEAL value assessment of pipeline products incorporates competitors and future dynamics
      </p>
      <div style={{display:"flex",gap:"30px",alignItems:"center",width:"80%",justifyContent:"space-around",margin:"auto",marginTop:"50px",flexWrap:"wrap"}}>
        <img src="./pharma2.png" style={{minWidth:"250px",minHeight:"250px"}} alt="" />
        <img src="./pharam1.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Mvap
