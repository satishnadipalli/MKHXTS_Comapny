import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import "./styles/About.css"
import { IoMdSettings } from "react-icons/io";
import { PiStrategy } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { FaBugSlash } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineAssessment } from "react-icons/md";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import Aos from 'aos';
import "aos/dist/aos.css"
import { MdLiveTv } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { TbNetwork } from "react-icons/tb";
import { MdOutlineHighQuality } from "react-icons/md";
import { FaInnosoft } from "react-icons/fa";
import { TbView360Number } from "react-icons/tb";
import { WiSmallCraftAdvisory } from "react-icons/wi";
import { FaCode } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";

import { PiGlobeStandFill } from "react-icons/pi";
import { GiHealthCapsule } from "react-icons/gi";
import { FaHospital } from "react-icons/fa";
import { SiExpertsexchange } from "react-icons/si";
import { TbStars } from "react-icons/tb";
import { MdOutlineGroups } from "react-icons/md";

import clients from "./Assets/clients.svg";
import Players from "./Assets/Players.svg";
import recruit from "./Assets/recruit.svg";
import Verification from "./Assets/Verification.svg";

import SandipShah from "./Assets/SandipShah.jpeg"
import { FaChevronRight } from "react-icons/fa";
import MeetTheFounder from '../../Components/MeetTheFounder/Meetthefounder';
import WhyMKTXS from '../../Components/WhyMktxsabout/WhyMktxs';
const servicesList = [
  {id: -3, gridClass: "dummy-1"},
  {id: -2, gridClass: "dummy-2"},
  {id: -1, gridClass: "dummy-3"},
  {id: 1,serviceText: "Evidence Generation", icon: <IoMdSettings size={"100%"} />,gridClass: "grid"},
  {id: 2,serviceText: "Strategic market access", icon: <PiStrategy size={"100%"}/> ,gridClass: "grid"},
  {id: 3,serviceText: "GVDs",icon: <GrNotes size={"100%"}/> ,gridClass: "grid"},
  {id: 4,serviceText: "Contracting& payer strategy", icon: <FaPeopleGroup size={"100%"}/> ,gridClass: "grid"},
  {id: 5,serviceText: "Real World Evidence", icon: <IoGlobeOutline size={"100%"}/> ,gridClass: "grid"},
  {id: 6,serviceText: "Value Message Testing", icon: <FaBugSlash size={"100%"}/> ,gridClass: "grid"},
  {id: 7,serviceText: "Pricing & reimbursement strategy", icon: <GiPriceTag size={"100%"}/> ,gridClass: "grid"},
  {id: 8,serviceText: "Launch sequencing assessment", icon: <MdOutlineAssessment size={"100%"}/> ,gridClass: "grid"},
  {id: 9,serviceText: "Analog Case Studies & Analysis", icon: <MdOutlineContentPasteSearch size={"100%"}/> ,gridClass: "grid"},
  {id: 10,serviceText: "Advisory Boards / Panels (PRISM)", icon: <WiSmallCraftAdvisory size={"100%"}/> ,gridClass: "grid"},
  {id: 11,serviceText: "Proprietary Technologies", icon: <FaCode size={"100%"}/>, gridClass: "grid"},
  {id: 0, gridClass: "dummy-4"},
  {id: 12,serviceText: "Systematic / Targeted Literature Reviews", icon: <PiTargetBold size={"100%"}/>, gridClass: "grid"}
]

const developmentPhaseList =[
  {
    id: 1,
    phase: "Phase I - Pre-clinical",
    challenge: "Opportunity Assessment",
    offerings:[
      "Disease/treatment landscape assessments",
      "Analog case studies",
      "Payer environment understanding",
      "Clinical outcomes evaluation",
      "Value driver ranking"
    ],
    cardColor: "color-1"
  },
  {
    id: 2,
    phase: "Phase II - Phase III",
    challenge: "Evidence / Trial Design Generation",
    offerings:[
      "Epidemiology and target patient population",
      "Value gap/driver analysis",
      "Qualitative pricing insights",
      "Trial design optimization",
      "HTA evaluation preparation",
      "PRO requirements",
      "Efficacy/safety performance",
      "Economic value optimization"
    ],
    cardColor: "color-2"
  },
  {
    id: 3,
    phase: "Phase III - Launch",
    challenge: "Value Proposition Development & Validation",
    offerings:[
      "Launch sequencing and indication anticipation",
      "Launch price strategy",
      "Price optimization",
      "IRP analysis",
      "Competitive landscape",
      "Payer negotiation strategy/training",
      "Stakeholder-specific value message development and testing",
      "Core budget impact and cost-effectiveness model development"
    ],
    cardColor: "color-3"
  },
  {
    id: 4,
    phase: "Phase IV - Patent Expiration",
    challenge: "Market Shaping / Revenue Optimization",
    offerings:[
      "Real-world evidence generation",
      "Utilization",
      "Safety and HRQoL",
      "Comparative effectiveness", 
      "Global economic models",
      "Market share optimization strategies upon patent expiration/generic entry",
      "Lifecycle Planning",
      "Differentiation among increased competition"
    ],
    cardColor: "color-4"
  },
]

const whyChooseUsData = [
  {
    id: 1,
    whyChooseUsText: "",
    whyChooseUsImg: undefined,
    style: "dummy-grid-left"
  },
  {
    id: 2,
    whyChooseUsText: "4000+ hours of interaction with payers/ payer influencers from around the world",
    whyChooseUsImg: <MdLiveTv size={50} color="#80C4E9"/>,
    style: "active-grid"
  },
  {
    id: 3,
    whyChooseUsText: "MKTXS principal has priced countless assets over 30+ years in the industry",
    whyChooseUsImg:<LiaIndustrySolid size={50} color="#80C4E9"/>,
    style: "active-grid"
  },
  {
    id: 4,
    whyChooseUsText: "",
    whyChooseUsImg: undefined,
    style: "dummy-grid-right"
  },
  {
    id: 5,
    whyChooseUsText: "Vast global payer network with relevant payer archetypes in each market",
    whyChooseUsImg: <TbNetwork size={50} color="#80C4E9"/>,
    style: "active-grid"
  },
  {
    id: 6,
    whyChooseUsText: "Prestigious reputation for providing high-quality deliverables over 17+ years",
    whyChooseUsImg: <MdOutlineHighQuality size={50} color="#80C4E9"/>,
    style: "active-grid"
  },
  {
    id: 7,
    whyChooseUsText: "360-degree integration of various internal expertise for optimal strategy development",
    whyChooseUsImg: <TbView360Number size={50} color="#80C4E9"/>,
    style: "active-grid"
  },
  {
    id: 8,
    whyChooseUsText: "",
    whyChooseUsImg: undefined,
    style: "dummy-grid-left"
  },
  {
    id: 9,
    whyChooseUsText: "Innovative, propriety platforms deliver efficient & effective solutions for optimal value",
    whyChooseUsImg: <WiSmallCraftAdvisory size={50} color="#80C4E9"/>,
    style: "active-grid"
  },
  {
    id: 10,
    whyChooseUsText: "Prestigious reputation for providing high-quality deliverables over 17+ years",
    whyChooseUsImg: <FaInnosoft size={50} color="#80C4E9"/>,
    style: "active-grid"
  },
  {
    id: 11,
    whyChooseUsText: "",
    whyChooseUsImg: undefined,
    style: "dummy-grid-right"
  },
]

const experience = [
  {
    id:1,
    icon:<PiGlobeStandFill size={70} color='#33325b'/>,
    head:"51 countries",
    desc:"covering 70% of the global population"
  },
  {
    id:2,
    icon:<GiHealthCapsule size={70} color='#33325b'/>,
    head:"~1,000 products",
    desc:"covering 70% of the global population"
  },
  {
    id:3,
    icon:<FaHospital size={70} color='#33325b'/>,
    head:"70+ disease areas",
    desc:"covering 70% of the global population"
  },
  {
    id:4,
    icon:<SiExpertsexchange size={70} color='#33325b'/>,
    head:">6000 external experts",
    desc:"payers, and KOLs within our database"
  },
  {
    id:5,
    icon:<TbStars size={70} color='#33325b'/>,
    head:"4.7 / 5 rating",
    desc:"by clients interviewed on Windrose quality and experience "
  },
  {
    id:6,
    icon:<MdOutlineGroups size={70} color='#33325b'/>,
    head:"92% repeat business rate",
    desc:"covering 70% of the global population"
  }
]

const boradingData = [
  {
    image: Players,
    title: "Physicians",
    members: 4120357,
    desc: "Around the world, the term physician refers to a specialist in internal medicine or one of its many sub-specialties."
  },
  {
    image: Verification,
    title: "Patients",
    members: 16121213,
    desc: "Difficult patients are unavoidable and dealing with them often leads to increased stress levels within your practice."
  },
  {
    image: clients,
    title: "Publications",
    members: 989,
    desc: "Healthcare services costs are paid for by private payers or public payers. Private payers are insurance companies."
  },
  {
    image: recruit,
    title: "Payers",
    members: 389,
    desc: "Subscription and open-access journals from SAGE Publishing, the world’s leading independent academic publisher."
  }
];

const About = () => {

  const [isVisible, setIsVisible] = useState(window.innerWidth >= 720);


  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 720);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(()=>{
    window.scrollTo({behavior:"smooth",top:0})
  },[])

  useEffect(()=>{
      Aos.init({duration:1000});
      },[])


  return (
    <>
      <div className='about-div'>
        <div className='about' >
          <div className='background'></div>
          <div className='about-text' data-aos="fade-up">
            <h1 className='about-main-head'>About Our Company</h1>
            <p className='about-main-para'>
              MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value
            </p>
          </div>
        </div>
      </div>
      <div className='our-services'>
        <h1 className='our-services-main-head'>OUR SERVICES</h1>
        <div className='servies'>
          <ul className='services-list-new'>
            {servicesList.map(eachService => (
              <li className={`service-card-new ${eachService.gridClass}`} key={eachService.id}>
                <div className='service-img-new'>
                  {eachService.icon}
                </div>
                <p className='service-name-new'>{eachService.serviceText}</p>
              </li>
            ))}</ul>
        </div>
      </div>
    
      <div style={{marginBlock:"70px",height:"90vh"}}>
        <h2 className='clientListHead'>We can help you to grow your business</h2>
        <div className='client_list'>
            {

              boradingData.map((item,index)=>{
                return(
                  <div className='clients-list-inner-wraper'>
                    <div key={index} className='rect_divs' > 
                      <div className='icon_wraper'>
                        <img src={item.image} alt={item.title} />
                      </div>  
                      <div className='info_wraper'>
                        <span className='head_10'>{item.members}+</span>
                        <span className='head_3'>{item.title}</span>    
                      </div>
                    </div>
                    <p>{item?.desc}</p>
                  </div>
                )
              })
  
            }
          </div>
          
      </div>

      {
        isVisible 
        ?
        <div className='why-choose-us-div' style={{backgroundColor:"transparent"}}>
        <div className='why-choose-us'>
          <h1 className='why-choose-us-main-head'>WHY CHOOSE US?</h1>
          <WhyMKTXS/>
        </div>
      </div>
      :
      <div className='why-choose-us-div' style={{}}>
        <div className='why-choose-us'>
          <h1 className='why-choose-us-main-head'>WHY CHOOSE US?</h1>
          <ul className='why-choose-us-cards'>{whyChooseUsData.map(eachRes => (
            <li key={eachRes.id} className={`why-choose-us-each-list ${eachRes.style}`}>
              {eachRes.whyChooseUsImg !== undefined ? <div className='why-choose-us-img'>{eachRes.whyChooseUsImg}</div> : null}
              <p className='why-choose-us-each-para'>{eachRes.whyChooseUsText}</p>
            </li>
          ))}</ul>
        </div>
      </div>
      }

      
      <div style={{marginTop:"70px"}}>

      </div>
      <MeetTheFounder/>

      <div style={{marginTop:"50px"}}></div>
      <div className='experience-div'>
          <h1 className='experince-main-head'>We Brighout These to your Sights</h1>
          <div className='card-holders'>
            {
              experience.map((element)=>{
                return(
                  <div className='exp-card'>
                    {element.icon}
                    <h1 className='exp-title'>{element.head}</h1>
                    <p className='exp-desc'>{element?.desc}</p>
                  </div>
                )
              })
            }
          </div>
      </div>

    </> 

  )
}

export default About
      // <div className='why-choose-us-div' style={{}}>
      //   <div className='why-choose-us'>
      //     <h1 className='why-choose-us-main-head'>WHY CHOOSE US?</h1>
      //     <ul className='why-choose-us-cards'>{whyChooseUsData.map(eachRes => (
      //       <li key={eachRes.id} className={`why-choose-us-each-list ${eachRes.style}`}>
      //         {eachRes.whyChooseUsImg !== undefined ? <div className='why-choose-us-img'>{eachRes.whyChooseUsImg}</div> : null}
      //         <p className='why-choose-us-each-para'>{eachRes.whyChooseUsText}</p>
      //       </li>
      //     ))}</ul>
      //   </div>
      // </div>