import React from 'react'
import ClinicalOutcomes from '../../../Components/ClinicalOutcomes/ClinicalOutcomes'
import PredictiveInsights from '../../../Components/PredictiveInsights/PrediciveInsights'

const ClinicalOutComes = () => {
  return (
    <div>
      <div className='about' style={{marginBottom:"50px"}}>
        <div className='background'></div>
        <div className='about-text'>
            <h1 className='about-main-head'>Outcomes</h1>
            <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p>
        </div>
    </div>
      <ClinicalOutcomes/>
      <PredictiveInsights/>
    </div>
  )
}

export default ClinicalOutComes
