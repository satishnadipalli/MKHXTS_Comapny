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
import { WiSmallCraftAdvisory } from "react-icons/wi";
import { FaCode } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";

const servicesList = [
  {id: 1,serviceText: "Evidence Generation", icon: <IoMdSettings size={"100%"} />},
  {id: 2,serviceText: "Strategic market access", icon: <PiStrategy size={"100%"}/>},
  {id: 3,serviceText: "GVDs",icon: <GrNotes size={"100%"}/>},
  {id: 4,serviceText: "Contracting& payer strategy", icon: <FaPeopleGroup size={"100%"}/>},
  {id: 5,serviceText: "Real World Evidence", icon: <IoGlobeOutline size={"100%"}/>},
  {id: 6,serviceText: "Value Message Testing", icon: <FaBugSlash size={"100%"}/>},
  {id: 7,serviceText: "Pricing & reimbursement strategy", icon: <GiPriceTag size={"100%"}/>},
  {id: 8,serviceText: "Launch sequencing assessment", icon: <MdOutlineAssessment size={"100%"}/>},
  {id: 9,serviceText: "Analog Case Studies & Analysis", icon: <MdOutlineContentPasteSearch size={"100%"}/>},
  {id: 10,serviceText: "Advisory Boards / Panels (PRISM)", icon: <WiSmallCraftAdvisory size={"100%"}/>},
  {id: 11,serviceText: "Proprietary Technologies", icon: <FaCode size={"100%"}/>},
  {id: 12,serviceText: "Systematic / Targeted Literature Reviews", icon: <PiTargetBold size={"100%"}/>}
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
    whyChooseUsImg: "",
    style: "active-grid"
  },
  {
    id: 3,
    whyChooseUsText: "MKTXS principal has priced countless assets over 30+ years in the industry",
    whyChooseUsImg: "",
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
    whyChooseUsImg: "",
    style: "active-grid"
  },
  {
    id: 6,
    whyChooseUsText: "Prestigious reputation for providing high-quality deliverables over 17+ years",
    whyChooseUsImg: "",
    style: "active-grid"
  },
  {
    id: 7,
    whyChooseUsText: "360-degree integration of various internal expertise for optimal strategy development",
    whyChooseUsImg: "",
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
    whyChooseUsImg: "",
    style: "active-grid"
  },
  {
    id: 10,
    whyChooseUsText: "Prestigious reputation for providing high-quality deliverables over 17+ years",
    whyChooseUsImg: "",
    style: "active-grid"
  },
  {
    id: 11,
    whyChooseUsText: "",
    whyChooseUsImg: undefined,
    style: "dummy-grid-right"
  },
]

const About = () => {
  return (
    <>
      <div className='about-div'>
        <Header/>
        <div className='about'>
          <div className='about-text'>
            <h1 className='about-main-head'>About Our Company</h1>
            <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p>
          </div>
        </div>
      </div>

      {/* <div className='our-services'>
        <
      </div> */}

      <div className='our-services'>
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
      </div>

      <div className='development-pahes'>
        <h1 className='development-pahes-main-head'>Development Phase</h1>
        <ul className='phases-list'>{developmentPhaseList.map(eachPhase => (
          <li key={eachPhase.id} className={`each-phase  ${eachPhase.cardColor}`}>
           {/* <li key={eachPhase.id} className='each-phase'> */}
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

      <div className='ceo-div'>
        <div className='ceo'>
          <div className='ceo-image'>
            <img src="https://mktxs.com/wp-content/uploads/2023/03/Untitled.png" alt="CEO" className='ceo-img'/>
          </div>
          <div className='ceo-about'>
            <h1 className='ceo-main-head'>Sandip Shah</h1>
            <p className='ceo-main-para'>President & CEO</p>
            <p className='ceo-text'>The Founder and CEO of Market Access Solutions (MKTXS), Sandip Shah, is a seasoned and experienced pricing strategist with 30+ years of experience in the healthcare sector, including 23 years in Global PRMA.</p>
            <p className='ceo-text'>Sandip is now focused on providing global strategic guidance in pricing and reimbursement at all phases of pharmaceutical and medical/surgical product development through to customer segment contracting and has led countless initiatives managing and providing global market access strategies to Fortune 500 clients in numerous therapeutic areas for the last two decades.</p>
            <p className='ceo-text'>Prior to starting the company, Sandip was with the Johnson and Johnson family of companies from 1994-2004, where he developed optimal Price and Reimbursement strategies for the pharmaceutical, medical and surgical sectors and worked with local operating companies globally to implement recommendations. Before his time at Johnson and Johnson, Sandip oversaw inline product pricing and contracting at Glaxo Pharmaceuticals. Sandip has also managed sales/marketing services departments including compensation and forecasting.</p>
            <p className='ceo-text'>He holds an MBA from Duke and a Bachelor’s in Chemical Engineering from Purdue University.</p>
            <p className='ceo-text'>Recognized authority in Global Pricing and Market Access for healthcare technology innovations</p>
          </div>
        </div>
      </div>

      <div className='why-choose-us-div'>
        <div className='why-choose-us'>
          <h1 className='why-choose-us-main-head'>WHY CHOOSE US?</h1>
          <ul className='why-choose-us-cards'>{whyChooseUsData.map(eachRes => (
            <li key={eachRes.id} className={`why-choose-us-each-list ${eachRes.style}`}>
              {eachRes.whyChooseUsImg !== undefined ? <div className='why-choose-us-img'></div> : null}
              <p className='why-choose-us-each-para'>{eachRes.whyChooseUsText}</p>
            </li>
          ))}</ul>
        </div>
      </div>

    </> 

  )
}

export default About