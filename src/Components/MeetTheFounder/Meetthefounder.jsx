// import React from 'react';
// import './Meetthefounder.css';
// import SandipShah from "../../Pages/About/Assets/SandipShah.jpeg"

// const MeetTheFounder = () => {
//   return (
//     <div className="founder-container">
//       <h2 className="founder-title">Meet the founder</h2>
//       <div className="founder-content">
//         <div className="founder-image-section">
//           <img src={SandipShah} alt="Sandip Shah" className="founder-image" />
//           <div className="founder-info">
//             <h3>Sandip Shah</h3>
//             <p>President & CEO</p>
//           </div>
//         </div>
//         <div className="founder-description">
//           <p>Sandip Shah, the founder of Market Access Solutions (MKTXS), is an experienced pricing strategist and industry veteran with over 45 years of experience in the healthcare sector, including sales, in-line marketing, forecasting, and market access.</p>
//           <p>He holds an MBA from Duke and a Bachelor’s in Chemical Engineering from Purdue University. Before starting the company, Sandip was with the Johnson and Johnson family of companies from 1994-2004, where he developed optimal pricing and reimbursement strategies for the pharmaceutical, medical, and surgical sectors. He also worked with local operating companies globally to implement recommendations. Before his time at Johnson and Johnson, Sandip oversaw inline product pricing and contracting at Glaxo Pharmaceuticals.</p>
//           <p>As President/CEO of Market Access Solutions, Sandip has led countless initiatives, managing and providing global market access strategies to Fortune 500 clients in numerous therapeutic areas for the last two decades.</p>
//           <p>Sandip is now focused on providing global strategic guidance in pricing and reimbursement in pharmaceutical and medical/surgical product development through customer segment contracting.</p>
//           <div className="expertise-section">
//             <div className='bookmark'>
//                 <div style={{color:'white',textAlign:'center',fontWeight:"bold"}}>Areas of Expertise</div>
//                 <div className='in-bookmark'></div>
//             </div>
//             <h4 style={{marginTop:"40px"}}>Areas of Expertise</h4>
//             <ul className='upper-wraper'>
//               <div className='inner-elements'>
//                 <li>Strategic Pricing</li>
//                 <li>Value Optimizing Asset Development Strategy</li>
//                 <li>Global Pricing and Market Access (PMA) Systems, including HTAs</li>
//                 <li>Competitive Assessment</li>
//               </div>
//               <div className='inner-elements'>
//                 <li>Life-Cycle Value Optimization</li>
//                 <li>Opportunity Assessments</li>
//                 <li>Rare / Orphan Disease Expertise</li>
//                 <li>Executive and C-suite Communications</li>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeetTheFounder;


import React from 'react';
import './Meetthefounder.css';
import SandipShah from "../../Pages/About/Assets/SandipShah.jpeg";

const MeetTheFounder = () => {
  return (
    <div className="founder-wrapper">
      <h3 style={{ textAlign: "center", marginBottom: 30 }}>Our Team</h3>
      <div className="profile-card">
        <div className="profile-image-container">
          <img src={SandipShah} alt="Sandip Shah" className="profile-image" />
        </div>
        <div className="profile-name">
          <span>Koen Torfs</span>
        </div>
        <div className="divider-line"></div>
        <div className="profile-title">President & CEO</div>

      </div>

      <div className="bio-section">
        <p>Sandip Shah, the founder of Market Access Solutions (MKTXS), is an experienced pricing strategist and industry veteran with over 45 years of experience in the healthcare sector, including sales, in-line marketing, forecasting, and market access.</p>
        <p>He holds an MBA from Duke and a Bachelor’s in Chemical Engineering from Purdue University. Before starting the company, Sandip was with the Johnson and Johnson family of companies from 1994-2004, where he developed optimal pricing and reimbursement strategies for the pharmaceutical, medical, and surgical sectors. He also worked with local operating companies globally to implement recommendations. Before his time at Johnson and Johnson, Sandip oversaw in-line product pricing and contracting at Glaxo Pharmaceuticals.
        </p>
        <p>As President & CEO of Market Access Solutions, Sandip has led countless initiatives, managing and providing global market access strategies to Fortune 500 clients in numerous therapeutic areas for the last two decades.
        </p>
        <p>Sandip is now focused on providing global strategic guidance for pricing and reimbursement in the development of pharmaceutical, medical, and surgical products through customer segment contracting.
        </p>
      </div>
      <div className="profile-card" style={{ marginTop: "80px" }}>
        <div className="profile-image-container">
          <img src={"./koen.png"} alt="Sandip Shah" className="profile-image" />
        </div>
        <div className="profile-name">
          <span>Sandip Shah</span>
        </div>
        <div className="divider-line" ></div>
        <div className="profile-title">Senior Advisor</div>

      </div>

      <div className="bio-section">
        <p>With more than four decades of leadership in global health economics, pricing, and market access, Koen Torfs brings unparalleled expertise and strategic foresight. Koen’s experience spans from hands-on economic modeling and HTA engagement to executive-level strategic planning for global product launches.
        </p>
        <p>Koen has held senior roles at Johnson & Johnson in both the pharmaceutical and medtech divisions. Most recently, he was Head of Health Economics & Market Access for J&J MedTech in EMEA, developing access strategies for over 25 countries. His previous roles include VP Global Reimbursement and Real-World Evidence, VP Market Access & Pricing for EMEA, and Therapeutic Area Market Access Lead at Janssen. Koen has successfully aligned scientific value with payer expectations, guiding complex assets through launch readiness, pricing negotiations, and lifecycle optimization, particularly in areas like rare diseases, cardiovascular, and metabolic conditions.
        </p>
        <p>Koen previously worked at Janssen-Cilag Germany, EORTC, and SGS Life Science Services. As a senior advisor at MKTXS, he now provides pricing solutions for pharmaceutical and medtech clients.
        </p>
      </div>

      <div className="expertise-section">
        <div className='bookmark'>
          <div style={{ color: 'white', textAlign: 'center', fontWeight: "bold" }}>Areas of Expertise</div>
          <div className='in-bookmark'></div>
        </div>
        <ul className='upper-wraper' style={{marginTop:30}}>
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
  );
};

export default MeetTheFounder;


