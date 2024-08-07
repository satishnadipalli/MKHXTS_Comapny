import React from 'react'
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
    whyChooseUsImg: <MdLiveTv size={50} color="#3C5B6F"/>,
    style: "active-grid"
  },
  {
    id: 3,
    whyChooseUsText: "MKTXS principal has priced countless assets over 30+ years in the industry",
    whyChooseUsImg:<LiaIndustrySolid size={50} color="#3C5B6F"/>,
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
    whyChooseUsImg: <TbNetwork size={50} color="#3C5B6F"/>,
    style: "active-grid"
  },
  {
    id: 6,
    whyChooseUsText: "Prestigious reputation for providing high-quality deliverables over 17+ years",
    whyChooseUsImg: <MdOutlineHighQuality size={50} color="#3C5B6F"/>,
    style: "active-grid"
  },
  {
    id: 7,
    whyChooseUsText: "360-degree integration of various internal expertise for optimal strategy development",
    whyChooseUsImg: <TbView360Number size={50} color="#3C5B6F"/>,
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
    whyChooseUsImg: <WiSmallCraftAdvisory size={50} color="#3C5B6F"/>,
    style: "active-grid"
  },
  {
    id: 10,
    whyChooseUsText: "Prestigious reputation for providing high-quality deliverables over 17+ years",
    whyChooseUsImg: <FaInnosoft size={50} color="#3C5B6F"/>,
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
    image: <svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m33.3 27.532-6.332-1.809v-1.964a7.82 7.82 0 0 0 2.547-3.93c1.758-.21 3.13-1.693 3.13-3.506v-5.64a2.456 2.456 0 0 1 1.092-2.042l2.265-1.51-1.37-1.028a9.293 9.293 0 0 0-4.184-1.744 5.856 5.856 0 0 1 2.42-1.557l2.021-.673-3.267-1.09a8.323 8.323 0 0 0-6.066.3l-.71-.355A9.36 9.36 0 0 0 20.676 0c-5.14 0-9.321 4.182-9.321 9.322v7c0 1.814 1.372 3.297 3.13 3.506a7.82 7.82 0 0 0 2.547 3.93v1.965L10.7 27.532a4.988 4.988 0 0 0-3.603 4.776V44h29.806V32.308a4.988 4.988 0 0 0-3.603-4.776Zm-3.523-9.202c.014-.195.03-.39.03-.588v-3.418a2.126 2.126 0 0 1 1.419 1.999c0 .934-.61 1.722-1.45 2.007Zm-9.1-16.91c1.22 0 2.442.288 3.534.834l1.337.668.318-.159a6.899 6.899 0 0 1 4.89-.502 7.265 7.265 0 0 0-2.075 2.051l-.911 1.365h1.327c1.58 0 3.146.492 4.444 1.39l-.59.393a3.879 3.879 0 0 0-1.725 3.222v2.82a3.513 3.513 0 0 0-1.42-.656V9.392l-1.52.912a20.1 20.1 0 0 1-5.124 2.178 6.76 6.76 0 0 0 .257-1.837V9.392l-1.075.645a14.234 14.234 0 0 1-6.731 2.015v-1.407h-1.42v2.2a3.523 3.523 0 0 0-1.419.657v-4.18c0-4.358 3.545-7.903 7.902-7.903Zm-7.903 14.903c0-.924.596-1.705 1.42-1.999v3.418c0 .199.014.393.03.588a2.125 2.125 0 0 1-1.45-2.007Zm2.839 1.419v-4.27a15.663 15.663 0 0 0 6.23-1.553c-.093.379-.228.748-.403 1.097l-.724 1.448 1.423-.285a21.551 21.551 0 0 0 6.248-2.295v5.858A6.395 6.395 0 0 1 22 24.129a6.395 6.395 0 0 1-6.387-6.387ZM22 25.548a7.755 7.755 0 0 0 3.548-.861v1.467c-.121.369-.866 2.233-3.548 2.233-2.674 0-3.42-1.846-3.549-2.234v-1.466a7.755 7.755 0 0 0 3.549.861Zm-10.91 3.35 6.223-1.78c.581 1.183 2.007 2.688 4.687 2.688s4.105-1.506 4.686-2.688l6.224 1.78a3.562 3.562 0 0 1 2.574 3.41v4.595h-3.549v-4.258h-1.419v9.936H13.484v-9.936h-1.42v4.258H8.516v-4.595a3.562 3.562 0 0 1 2.573-3.41Zm-2.574 9.425h3.548v4.258H8.516v-4.258Zm23.42 4.258v-4.258h3.548v4.258h-3.549Z" fill="#718096"/><path d="M18.451 16.323a.71.71 0 1 0 0-1.42.71.71 0 0 0 0 1.42ZM25.549 16.323a.71.71 0 1 0 0-1.42.71.71 0 0 0 0 1.42ZM22 22a2.842 2.842 0 0 0 2.839-2.839h-1.42a1.42 1.42 0 0 1-1.42 1.42 1.42 1.42 0 0 1-1.418-1.42h-1.42A2.842 2.842 0 0 0 22 22.001ZM15.613 37.613h1.42v-4.968h-2.13v1.42h.71v3.548ZM19.161 37.613h1.42v-4.968h-2.13v1.42h.71v3.548Z" fill="#718096"/></svg>,
    title: "Patients",
    members: 16121213,
    desc: "Difficult patients are unavoidable and dealing with them often leads to increased stress levels within your practice."
  },
  {
    image: clients,
    title: "Publications",
    members: 989,
    desc: "Healthcare costs are paid for by private payers or public payers. Private payers are insurance companies."
  },
  {
    image: recruit,
    title: "Payers",
    members: 389,
    desc: "Subscription and open-access journals from SAGE Publishing, the world’s leading independent academic publisher."
  }
];

const About = () => {
  return (
    <>
      <div className='about-div'>
        <Header/>
        <div className='about'>
          <div className='background'></div>
          <div className='about-text'>
            <h1 className='about-main-head'>About Our Company</h1>
            <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p>
          </div>
        </div>
      </div>



      {/* <div className='our-services'>
        <h1 className='our-services-main-head'>OUR SERVICES</h1>
        <div className='servies'>
          <ul className='services-list'>{servicesList.map(eachService => (
            <li className='service-card' key={eachService.id}>
              <div className='service-img'>
                {eachService.icon}
              </div>
              <p className='service-name'>{eachService.serviceText}</p>
            </li>
          ))}</ul>
        </div>
      </div> */}

      <div className='development-pahes' style={{backgroundColor:"#f7f9fd"}}>
        <h1 className='development-pahes-main-head'>Development Phase</h1>
        <ul className='phases-list'>{developmentPhaseList.map(eachPhase => (
          <li key={eachPhase.id} className={`each-phase `}>
            <h1 className='phase-head'>{eachPhase.phase}</h1>
            <h1 className='challenge-title'>Challenges</h1>
            <p className='phase-challenges'>{eachPhase.challenge}</p>
            <h1 className='offerings-title'>MKTXS Offerings</h1>
            <ul className='offer-list'>{eachPhase.offerings.map(eachOffer => (
              <li className='each-offer' key={eachOffer}>
                <p className='offer'>{eachOffer}</p>
              </li>
            ))}</ul>
          </li>
        ))}</ul>
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

      <div className='client_list'>
          {

            boradingData.map((item,index)=>{
              return(
                <div key={index} className='rect_divs' data-aos="fade-up" > 
                <div className='icon_wraper'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='info_wraper'>
                  <span className='head_10'>{item.members}+</span>
                  <span className='head_3'>{item.title}</span>    
                </div>
              </div>
              )
            })
 
          }
        </div>

      <div className='why-choose-us-div'>
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

      <div className='ceo-div'>
        <div className='ceo'>
          <div className='ceo-about'>
            <h1 className='ceo-main-head'>Sandip Shah</h1>
            <p className='ceo-main-para'>President & CEO</p>
            <p className='ceo-text'>The Founder and CEO of Market Access Solutions (MKTXS), Sandip Shah, is a seasoned and experienced pricing strategist with 30+ years of experience in the healthcare sector, including 23 years in Global PRMA.</p>
            <p className='ceo-text'>Sandip is now focused on providing global strategic guidance in pricing and reimbursement at all phases of pharmaceutical and medical/surgical product development through to customer segment contracting and has led countless initiatives managing and providing global market access strategies to Fortune 500 clients in numerous therapeutic areas for the last two decades.</p>
            <p className='ceo-text'>Prior to starting the company, Sandip was with the Johnson and Johnson family of companies from 1994-2004, where he developed optimal Price and Reimbursement strategies for the pharmaceutical, medical and surgical sectors and worked with local operating companies globally to implement recommendations. Before his time at Johnson and Johnson, Sandip oversaw inline product pricing and contracting at Glaxo Pharmaceuticals. Sandip has also managed sales/marketing services departments including compensation and forecasting.</p>
            <p className='ceo-text'>He holds an MBA from Duke and a Bachelor’s in Chemical Engineering from Purdue University.</p>
            <p className='ceo-text'>Recognized authority in Global Pricing and Market Access for healthcare technology innovations</p>
          </div>
          <div className='ceo-image'>
            <img src="https://mktxs.com/wp-content/uploads/2023/03/Untitled.png" alt="CEO" className='ceo-img'/>
          </div>
        </div>
      </div>

      <div className='experience-div'>
          <h1 className='experince-main-head'>We Brighout These to your Sights</h1>
          <div className='card-holders'>
            {
              experience.map((element)=>{
                return(
                  <div className='exp-card'>
                    {element.icon}
                    <h1 className='exp-title'>{element.head}</h1>
                    <p className='exp-desc'>covering 70% of the global population</p>
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