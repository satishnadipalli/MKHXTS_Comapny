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
        <div className='two-wraper'>
            <h3 className='kno-head' style={{textAlign:"center",marginBottom:"50px"}}>MKTXS Knolens SLR will disrupt the industry by providing ability to conduct in-depth assessment faster and efficient</h3>
            <div className='sub-colun'>
                <img className='card-img' src="./knolen.png" alt="" />
                <div className='seconde-card'>
                    <p style={{textAlign:"center"}}>
                        Knolens SLR provides efficiency, and cost reductions with velocity and accuracy
                    </p>
                    <div className='first-box'>
                        {
                            slr?.map((element,i)=>{
                                return(
                                    <div key={i} className='bbox'>
                                        {element}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Knolens
