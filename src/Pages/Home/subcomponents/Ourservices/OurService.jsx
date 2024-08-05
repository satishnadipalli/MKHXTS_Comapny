import React, { useEffect } from 'react'
import "./styles/OurService.css"
import { 
  FaInstagram,
  FaFacebook,
  FaGlobe,
  FaLaptopCode
 } from 'react-icons/fa';
 import { BsGenderTrans } from "react-icons/bs";
 import { MdBugReport } from 'react-icons/md';
 import { TbDeviceMobileMessage } from "react-icons/tb";
 import { MdGroups2 } from "react-icons/md";
 import { FaLayerGroup } from "react-icons/fa";
const Carve =  "./assets/Img/carve.svg"
const emAp =  "./assets/Img/EmAP.svg"
const FAP  =  "./assets/Img/FAP.svg"
const MVAP =  "./assets/Img/MVAP.svg"
const VIP  =  "./assets/Img/VIP.svg"
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

 const serviceTools = [
  {
    icon : <BsGenderTrans size={40} className='linku'/>,
    title : "Evidence Generation"
  },
  {
    icon : <FaGlobe size={40}  className='linku' />,
    title : "Strategic market access"
  },
  {
    icon : <FaLaptopCode size={40} className='linku'/>,
    title : "Value Message Testing"
  },
  {
    icon : <MdGroups2 size={40}  className='linku'/>,
    title : "Contracting& payer strategy"
  },
  {
    icon : <MdBugReport size={40} className='linku'/>,
    title : "Evidence Generation"
  },
  {
    icon : <FaInstagram size={40}  className='linku'/>,
    title : "Strategic market access"
  },
  {
    icon : <TbDeviceMobileMessage size={40}  className='linku'/>,
    title : "Value Message Testing"
  },
  {
    icon : <FaLayerGroup  size={40}  className='linku'/>,
    title : "Contracting& payer strategy"
  },
 ]

 const Platforms = [
    {
      svg: "https://valueinsightsplatform-dev.accentureanalytics.com/assets/images/landing%20page%20Financial.svg",
      ttile:"VIP",
      desc:"For Testing Value Message/Proposition",
      link:"/vip"
    },
    ,
    {
      svg: "https://valueinsightsplatform-dev.accentureanalytics.com/assets/images/landing%20page%20Sustainability.svg",
      ttile:"Carve",
      desc:"Oputunity Assesment & Stakeholder engagement",
      link:"/carve"
    },
    {
      svg: "https://valueinsightsplatform-dev.accentureanalytics.com/assets/images/landing%20page%20Industry.svg",
      ttile:"EMAP",
      desc:"To assess the value perception vis-a-vis",
      link:""
    },
    {
      svg: "https://valueinsightsplatform-dev.accentureanalytics.com/assets/images/landing%20page%20Strategic.svg",
      ttile:"MVAP",
      desc:"For evidence mapping to assess the disease and needs",
      link:"./mvap"
    }
 ]
const OurService = () => {

  
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  return (
    <>
      <div className='main_service_main_div'>
          <p className='service_head'>Our Services</p>
            <div className='serce_card_holder'>
              {
                serviceTools.map((item,index)=>{
                  return(
                    <div key={index} className='service_card' data-aos="fade" data-aos-delay={`${index}0`}>
                      {item.icon}
                      <div>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div style={{width:"100%",display:'flex',alignItems:"center",justifyContent:"Center",marginTop:"40px"}}>
              <button className='more-button' data-aos="fade-down">View More</button>
            </div>
        </div>
        {/* Platforms Component */}
        <div className='Platforms'>
          <p className='service_head' style={{marginTop:"120px",color:" rgb(7 ,107 ,178)"}}>Plaforms that we are offering</p>
          <p className='value-story'>Value Story Development and Message Testing</p>
          <div className='platforms_holder'>
              {
                Platforms.map((item,i)=>{
                  return(
                    <Link to={item.link} key={i} >
                      <div key={i} className='hold' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                          <div  class="platform_card">
                            <img src={item.svg} alt="not found" class="plt-img" />
                            <div class="card_info">{item.desc}</div>
                          </div>
                          <p style={{color:"black",marginTop:"-40px"}} >{item.ttile}</p>
                        </div>
                    </Link>
                  )
                })
              }
          </div>
        </div>

    </>
  )
}

export default OurService
