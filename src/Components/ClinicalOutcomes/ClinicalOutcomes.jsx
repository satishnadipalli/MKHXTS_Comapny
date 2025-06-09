import React from "react";
import "./ClinicalOutcomes.css";

const ClinicalOutcomes = () => {
  return (
        <div className="clinical-outcomes-container">
      <h2 className="title">
        Clinical Outcomes Navigator empowers asset development strategies with actionable insights into regulatory trends, competitive landscapes, and clinically relevant outcomes
      </h2>
      
      <div className="pyramid">
        <div className="pyramid-row">
          <div className="pyramid-content">
            <div className="pyramid-level dark">
              <p>Feedback / Validation on Clinical Outcomes</p>
            </div>
            <div className="arrow">➡</div>
            <div className="description aligned">Understanding which clinical outcomes have been successful or rejected by HTA/ Payers</div>
          </div>
        </div>

        <div className="pyramid-row">
          <div className="pyramid-content">
            <div className="pyramid-level green">
              <p>Outcome Assessment Type <br />(Primary, Secondary, Exploratory, or Co-Primary)</p>
            </div>
            <div className="arrow">➡</div>
            <div className="description aligned">Reveals endpoint pattern that guides benchmarking against competitor strategies</div>
          </div>
        </div>

        <div className="pyramid-row">
          <div className="pyramid-content">
            <div className="pyramid-level gray">
              <p>Clinical outcomes used in the assessment report by product</p>
            </div>
            <div className="arrow">➡</div>
            <div className="description aligned">Tracks in-market therapy outcomes</div>
          </div>
        </div>

        <div className="pyramid-row">
          <div className="pyramid-content">
            <div className="pyramid-level blue">
              <div className="regulators" >
                <div>
                  <span>FDA</span> <span>EMA</span> <span>MHRA</span> <span>PMDA</span> <span>NMPA</span>
                </div>
                <div>
                  <span>GBA</span> <span>HAS</span> <span>NICE</span> <span>ICER</span> <span>C2H</span>
                </div>
              </div>
            </div>
            <div className="arrow">➡</div>
            <div className="description aligned" style={{minWidth:300}}>
              Accurate data with references, ensuring reliability and transparency <br />
              Customizable based on business needs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalOutcomes;


// import React from "react";
// import "./ClinicalOutcomes.css";

// const ClinicalOutcomes = () => {
//   return (
//     <div className="clinical-outcomes-container">
//       <h2 className="title">
//         Clinical Outcomes Navigator empowers asset development strategies with actionable insights into regulatory trends, competitive landscapes, and clinically relevant outcomes
//       </h2>
      
//       <div className="pyramid">
//         <div className="pyramid-row">
//           <div className="pyramid-content">
//             <div className="pyramid-level dark">
//               <p>Feedback / Validation on Clinical Outcomes</p>
//             </div>
//             <div className="arrow">➡</div>
//             <div className="description aligned">Provides insight into how clinical outcomes are validated</div>
//           </div>
//         </div>

//         <div className="pyramid-row">
//           <div className="pyramid-content">
//             <div className="pyramid-level green">
//               <p>Outcome Assessment Type <br />(Primary, Secondary, Exploratory, or Co-Primary)</p>
//             </div>
//             <div className="arrow">➡</div>
//             <div className="description aligned">Defines assessment types used for regulatory and market approval</div>
//           </div>
//         </div>

//         <div className="pyramid-row">
//           <div className="pyramid-content">
//             <div className="pyramid-level gray">
//               <p>Clinical outcomes used in the assessment report by product</p>
//             </div>
//             <div className="arrow">➡</div>
//             <div className="description aligned">Tracks clinical outcome measures by product</div>
//           </div>
//         </div>

//         <div className="pyramid-row">
//           <div className="pyramid-content">
//             <div className="pyramid-level blue">
//               <div className="regulators">
//                 <span>FDA</span> <span>EMA</span> <span>MHRA</span> <span>PMDA</span> <span>NMPA</span>
//                 <span>GBA</span> <span>HAS</span> <span>NICE</span> <span>ICER</span> <span>C2H</span>
//               </div>
//             </div>
//             <div className="arrow">➡</div>
//             <div className="description aligned">Key regulators monitoring clinical outcomes</div>
//           </div>
//         </div>
//       </div>
      
//       <div className="info-section">
//         <div className="info-item">
//           <span className="bullet">&#8226;</span> Understanding which clinical outcomes have been successful or rejected by HTA/Payers
//         </div>
//         <div className="info-item">
//           <span className="bullet">&#8226;</span> Reveals endpoint pattern that guides benchmarking against competitor strategies
//         </div>
//         <div className="info-item">
//           <span className="bullet">&#8226;</span> Tracks in-market therapy outcomes
//         </div>
//         <div className="info-item">
//           <span className="bullet">&#8226;</span> Accurate data with references, ensuring reliability and transparency
//         </div>
//         <div className="info-item">
//           <span className="bullet">&#8226;</span> Customizable based on business needs
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClinicalOutcomes;