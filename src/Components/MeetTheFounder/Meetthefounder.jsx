import React from 'react';
import './Meetthefounder.css';
import SandipShah from "../../Pages/About/Assets/SandipShah.jpeg"

const MeetTheFounder = () => {
  return (
    <div className="founder-container">
      <h2 className="founder-title">Meet the founder</h2>
      <div className="founder-content">
        <div className="founder-image-section">
          <img src={SandipShah} alt="Sandip Shah" className="founder-image" />
          <div className="founder-info">
            <h3>Sandip Shah</h3>
            <p>President & CEO</p>
          </div>
        </div>
        <div className="founder-description">
          <p>Sandip Shah, the founder of Market Access Solutions (MKTXS), is an experienced pricing strategist and industry veteran with over 45 years of experience in the healthcare sector, including sales, in-line marketing, forecasting, and market access.</p>
          <p>He holds an MBA from Duke and a Bachelor’s in Chemical Engineering from Purdue University. Before starting the company, Sandip was with the Johnson and Johnson family of companies from 1994-2004, where he developed optimal pricing and reimbursement strategies for the pharmaceutical, medical, and surgical sectors. He also worked with local operating companies globally to implement recommendations. Before his time at Johnson and Johnson, Sandip oversaw inline product pricing and contracting at Glaxo Pharmaceuticals.</p>
          <p>As President/CEO of Market Access Solutions, Sandip has led countless initiatives, managing and providing global market access strategies to Fortune 500 clients in numerous therapeutic areas for the last two decades.</p>
          <p>Sandip is now focused on providing global strategic guidance in pricing and reimbursement in pharmaceutical and medical/surgical product development through customer segment contracting.</p>
          <div className="expertise-section">
            <div className='bookmark'>
                <div style={{color:'white',textAlign:'center',fontWeight:"bold"}}>Areas of Expertise</div>
                <div className='in-bookmark'></div>
            </div>
            <h4 style={{marginTop:"40px"}}>Areas of Expertise</h4>
            <ul className='upper-wraper'>
              <div className='inner-elements'>
                <li>Strategic Pricing</li>
                <li>Value Optimizing Asset Development Strategy</li>
                <li>Global Pricing and Market Access (PMA) Systems, including HTAs</li>
                <li>Competitive Assessment</li>
              </div>
              <div className='inner-elements'>
                <li>Life-Cycle Value Optimization</li>
                <li>Opportunity Assessments</li>
                <li>Rare / Orphan Disease Expertise</li>
                <li>Executive and C-suite Communications</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheFounder;
