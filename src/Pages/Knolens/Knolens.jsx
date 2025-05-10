import React, { useEffect } from 'react'
import "./Knolens.css"
import KnolensSLR from '../../Components/SLRBoxes/KnolensSLR'
const Knolens = () => {


  const slr = [
    "Validate the availability of data prior to strategy development",
    "Ability to select appropriate study parameters before thorough HTA submission",
    "Velocity in publication/ communication strategy",
    "In-depth Protocol development",
    "Thorough Indirect Competitive Assessment"
  ]


  
    useEffect(()=>{
      window.scrollTo({behavior:"smooth",top:0})
    },[])



  return (
    <div className='colun-main'>
        <div className='about' style={{marginBottom:"50px"}}>
            <div className='background'></div>
            <div className='about-text'>
                <h1 className='about-main-head'>Our Services</h1>
                <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p>
            </div>
        </div> 
       <KnolensSLR/>
        
    </div>
  )
}

export default Knolens
