
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
                         <div className='about-text'>
                    <h1 className='about-main-head' style={{textDecoration:"underline"}}>MVAP</h1>
                    {/* <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p> */}
                </div>
      </div>
      <div className='section__2'  >
        <div style={{width:"70%",backgroundColor:"#076BB2"}}>
          <h3 style={{color:"white",fontFamily:"Manrope-SemiBold"}}>MKTXS Value Assessment Platform (MVAP™)</h3>
          <p style={{color:"white",fontFamily:"Manrope-SemiBold"}}>Platform for Access Strategy Building</p>
        </div>
        <div style={{backgroundColor:"#1BAD99",width:"30%",}}>
          <img src="./mvap-computer.png" alt="" />
        </div>
      </div>
      <div style={{width:"80%",margin:"auto",marginBottom:50}}>
        <h3 style={{marginTop:"40px",textAlign:"center",fontFamily:"Manrope-SemiBold"}}>The MKTXS Value Assessment Platform (MVAP™) aids in developing optimal market access strategies</h3>
        <div className='viewss' style={{}}>
          <div>
            <img src="./mvap-round.png"  style={{width:350}} alt="" />
          </div>
          <div>
            <p style={{color:"",fontFamily:"Manrope-Regular",fontSize:13}}>
              Proprietary clinical and commercial value assessment tool which quantifies product(s) value based on published literature and internal intelligence, to help assess the clinical and commercial opportunities within/across indications and competitive landscape
            </p>
          </div>
        </div>
      </div>
      <div className='viewss' style={{}}>
        <div style={{marginLeft:20,marginTop:70,}}>
          <h5 style={{fontFamily:"Manrope-SemiBold"}}>MVAP™ allows for:</h5>
          <ul style={{marginLeft:29}}>
            <li style={{fontFamily:"Manrope-Regular",fontSize:"14px"}}>Indication prioritization</li>
            <li style={{fontFamily:"Manrope-Regular",fontSize:"14px"}}>Product development strategy conceptualization </li>
            <li style={{fontFamily:"Manrope-Regular",fontSize:"14px"}}>Alignment of medical, HEOR, commercial, and product development teams </li>
            <li style={{fontFamily:"Manrope-Regular",fontSize:"14px"}}>Indication-specific pricing</li>
            <li style={{fontFamily:"Manrope-Regular",fontSize:"14px"}}>Comparative positioning</li>
          </ul>
        </div>
        <div>
          <img src={outputs} style={{width:500,}} alt="" />
        </div>
      </div>
      <div  style={{width:"80%",margin:"auto",marginTop:"50px"}}>
         <h3 style={{paddingTop:"50px",textAlign:"center",fontFamily:"Manrope-SemiBold",marginBottom:30}}>MKTXS value assessment platform focuses on all fundamental factors that drive product value from payer perspective</h3>
         <div className='viewss'>
         <div  style={{marginBottom:30}}>
            <img src="./mvap-circle.png"  style={{width:400}} alt="" />
         </div>
         <div>
            <ValueStory/>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Mvap


const ValueStory = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#4a4a4a",
          color: "white",
          padding: "16px",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        The MVAP
        <span style={{ fontSize: "10px", verticalAlign: "super" }}>TM</span> output results will culminate in the Value Story while providing rationale grounded in evidence
      </div>

      {/* Box 1 */}
      <div
        style={{
          border: "1px solid #000",
          padding: "12px",
          marginTop: "10px",
          fontSize: "14px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <strong>
          The perception of value varies across countries (Cost/QALY in UK, Patient benefits in DE, BI/costs off sets in USA)
        </strong>
        <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
          <li>
            Considers the varying importance of different factors (MoA importance in USA is different than in EU or in JAP)
          </li>
        </ul>
      </div>

      {/* Box 2 */}
      <div
        style={{
          border: "1px solid #000",
          padding: "12px",
          marginTop: "10px",
          fontSize: "14px",
          backgroundColor: "#f9f9f9",
        }}
      >
        The value assessment platform considers all the key factors of value from payer standpoint
      </div>

      {/* Box 3 */}
      <div
        style={{
          border: "1px solid #000",
          padding: "12px",
          marginTop: "10px",
          fontSize: "14px",
          backgroundColor: "#f9f9f9",
        }}
      >
        Product value from payer perspective captures not only products’ clinical benefits, but also inherent economic benefits
      </div>
    </div>
  );
};

// export default ValueStory;
