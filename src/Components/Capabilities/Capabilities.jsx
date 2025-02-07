import React from "react";
import "./Capabilities.css"
import { Link } from "react-router-dom";

const Capabilities = () => {
  return (
    <div className="capabilities-container">
      {/* Center Hexagon */}
      <div className="hexagon center">
        <div className="hex-content">MKTXS <br /> Capabilities</div>
      </div>

      {/* Left Items */}
      <div className="left">
        <CapabilityItem
          link="/vip"
          number="1"
          title="VIP"
          text="Qualitative and quantitative Payer assessment platform for real-time TPP / Value Story testing, analysis, and validation."
        />
        <CapabilityItem
          link="/insights"
          number="2"
          title="Insight Books"
          text="Disease-level P&R Landscape, including inline and pipeline products."
        />
        <CapabilityItem
          link="/knolens"
          number="3"
          title="Knolens SLR"
          text="Accelerated data generation via in-depth targeted literature review, including SLRs."
        />
      </div>

      {/* Right Items */}
      <div className="right">
        <CapabilityItem
          link="/insight-miner"
          number="4"
          title="Insight Miner"
          text="An interactive module designed for analytical deep dive by mapping information from various data sources including HTA."
        />
        <CapabilityItem
          link="/mvap"
          number="5"
          title="Pharma.AI"
          text="Assessment of a product’s value against its competitors across indications based on robust clinical and economic data."
        />
        <CapabilityItem
          link="/iemap"
          number="6"
          title="IEMAP"
          text="Mapping competitive integrated evidence chronologically across indications (clinical trials, HE models, RWE, etc.)."
        />
      </div>
    </div>
  );
};

// Reusable Capability Item Component
const CapabilityItem = ({ number, title, text , link}) => {
  return (
    <Link to={link}>
      <div className="capability-item">
      <div className="hexagon small">
        <div className="hex-content">{number}</div>
      </div>
      <div className="capability-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
    </Link>
  );
};

export default Capabilities;
