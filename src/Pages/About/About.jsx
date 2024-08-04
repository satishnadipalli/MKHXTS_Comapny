import React from 'react'
import Header from '../../Components/Header/Header'
import "./styles/About.css"

const servicesList = [
  {id: 1,serviceText: "Evidence Generation"},
  {id: 2,serviceText: "Strategic market access"},
  {id: 3,serviceText: "GVDs"},
  {id: 4,serviceText: "Contracting& payer strategy"},
  {id: 5,serviceText: "Real World Evidence"},
  {id: 6,serviceText: "Value Message Testing"},
  {id: 7,serviceText: "Pricing & reimbursement strategy"},
  {id: 8,serviceText: "Launch sequencing assessment"},
  {id: 9,serviceText: "Analog Case Studies & Analysis"},
  {id: 10,serviceText: "Advisory Boards / Panels (PRISM)"},
  {id: 11,serviceText: "Proprietary Technologies"},
  {id: 12,serviceText: "Systematic / Targeted Literature Reviews"}
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

      <div className='our-services'>
        <h1 className='our-services-main-head'>OUR SERVICES</h1>
        <div className='servies'>
          <ul className='services-list'>{servicesList.map(eachService => (
            <li className='service-card' key={eachService.id}>
              <div className='service-img'></div>
              <p className='service-name'>{eachService.serviceText}</p>
            </li>
          ))}</ul>
        </div>
      </div>

      <div className='development-pahes'>
        <h1 className='development-pahes-main-head'>Development Phase</h1>
        <ul className='phases-list'>{developmentPhaseList.map(eachPhase => (
          // <li key={eachPhase.id} className={`each-phase  ${eachPhase.cardColor}`}>
          <li key={eachPhase.id} className='each-phase'>
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
          <div className='ceo-upper'>
            <div className='ceo-image'>
              <img src="https://mktxs.com/wp-content/uploads/2023/03/Untitled.png" alt="CEO" className='ceo-img'/>
            </div>
            <div className='ceo-about'>
              <h1 className='ceo-main-head'>Sandip Shah</h1>
              <p className='ceo-main-para'>President & CEO</p>
              <p className='ceo-text'>The Founder and CEO of Market Access Solutions (MKTXS), Sandip Shah, is a seasoned and experienced pricing strategist with 30+ years of experience in the healthcare sector, including 23 years in Global PRMA.</p>
              <p className='ceo-text'>Sandip is now focused on providing global strategic guidance in pricing and reimbursement at all phases of pharmaceutical and medical/surgical product development through to customer segment contracting and has led countless initiatives managing and providing global market access strategies to Fortune 500 clients in numerous therapeutic areas for the last two decades.</p>
            </div>
          </div>
          <div className='ceo-lower'>
            <p className='ceo-text'>Prior to starting the company, Sandip was with the Johnson and Johnson family of companies from 1994-2004, where he developed optimal Price and Reimbursement strategies for the pharmaceutical, medical and surgical sectors and worked with local operating companies globally to implement recommendations. Before his time at Johnson and Johnson, Sandip oversaw inline product pricing and contracting at Glaxo Pharmaceuticals. Sandip has also managed sales/marketing services departments including compensation and forecasting.</p>
            <p className='ceo-text'>He holds an MBA from Duke and a Bachelor’s in Chemical Engineering from Purdue University.</p>
          </div>
        </div>
      </div>

    </> 

  )
}

export default About