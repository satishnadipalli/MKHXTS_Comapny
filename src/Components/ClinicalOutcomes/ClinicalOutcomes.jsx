import React from "react";
import "./ClinicalOutcomes.css";

const ClinicalOutcomes = () => {
  return (
    <div className="clinical-outcomes-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="main-title">Clinical Outcomes Navigator</h1>
        <p className="main-description">
          Empowers asset development strategies with actionable insights into regulatory trends, competitive landscapes,
          and clinically relevant outcomes
        </p>
      </div>

      {/* Pyramid Structure */}
      <div className="pyramid">
        {/* Level 1 - Feedback/Validation */}
        <div className="pyramid-row">
          <div className="pyramid-content">
            <div className="pyramid-level dark">
              <div className="level-header">
                <span className="icon">✓</span>
                <h3>Feedback & Validation</h3>
              </div>
              <p>Clinical Outcomes Assessment</p>
            </div>
            <div className="arrow">→</div>
            <div className="description blue-theme">
              <p>
                Understanding which clinical outcomes have been successful or rejected by HTA/Payers, providing critical
                insights for strategic decision-making
              </p>
            </div>
          </div>
        </div>

        {/* Level 2 - Outcome Assessment Type */}
        <div className="pyramid-row">
          <div className="pyramid-content">
            <div className="pyramid-level green">
              <div className="level-header">
                <span className="icon">🎯</span>
                <h3>Outcome Assessment</h3>
              </div>
              <p>Primary, Secondary, Exploratory, Co-Primary</p>
            </div>
            <div className="arrow">→</div>
            <div className="description green-theme">
              <p>
                Reveals endpoint patterns that guide benchmarking against competitor strategies, enabling informed
                competitive positioning
              </p>
            </div>
          </div>
        </div>

        {/* Level 3 - Clinical Outcomes by Product */}
        <div className="pyramid-row">
          <div className="pyramid-content">
            <div className="pyramid-level gray">
              <div className="level-header">
                <span className="icon">📊</span>
                <h3>Clinical Outcomes</h3>
              </div>
              <p>Assessment Reports by Product</p>
            </div>
            <div className="arrow">→</div>
            <div className="description gray-theme">
              <p>
                Comprehensive tracking of in-market therapy outcomes, providing real-world evidence and performance
                benchmarks
              </p>
            </div>
          </div>
        </div>

        {/* Level 4 - Regulatory Bodies */}
        <div className="pyramid-row">
          <div className="pyramid-content">
            <div className="pyramid-level blue">
              <div className="level-header">
                <span className="icon">🌐</span>
                <h3>Global Regulators</h3>
              </div>
              <div className="regulators">
                <span>FDA</span> <span>EMA</span> <span>MHRA</span> <span>PMDA</span> <span>NMPA</span>
                <span>GBA</span> <span>HAS</span> <span>NICE</span> <span>ICER</span> <span>C2H</span>
              </div>
            </div>
            <div className="arrow">→</div>
            <div className="description blue-theme">
              <div className="description-content">
                <p>
                  Accurate data with comprehensive references, ensuring reliability and transparency across all regulatory
                  jurisdictions
                </p>
                <div className="feature-highlight">
                  <span className="bullet">•</span>
                  <span>Customizable based on business needs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h3>Ready to Navigate Clinical Outcomes?</h3>
          <p>
            Transform your asset development strategy with comprehensive insights and data-driven decisions
          </p>
          {/* <button className="cta-button">Get Started Today</button> */}
        </div>
      </div>
    </div>
  );
};

export default ClinicalOutcomes;
