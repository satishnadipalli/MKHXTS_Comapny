import React, { useState, useEffect } from "react";
import "./Capabilities.css";
import { Link } from "react-router-dom";

const Capabilities = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="capabilities-container"  style={{position:"relative"}}>
      {width >= 900 && (
        <div className="hexagon center">
          <div className="hex-content">MKTXS <br /> Capabilities</div>
        </div>
      )}

      {/* Left and Right Sections */}
      <div className="capability-sections">
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

        <div className="right">
          <CapabilityItem
            link="/iemap"
            number="4"
            title="IEMAP"
            text="Mapping competitive integrated evidence chronologically across indications (clinical trials, HE models, RWE, etc.)."
          />
          <CapabilityItem
            link="/mvap"
            number="5"
            title="Pharma.AI"
            text="Assessment of a product’s value against its competitors across indications based on robust clinical and economic data."
          />
          <CapabilityItem
            link="/insight-miner"
            number="6"
            title="Outcome Navigator"
            text="Optimize clinical development and market access strategies based on historical regulatory and HTA assessments of endpoints"
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Capability Item Component
const CapabilityItem = ({ number, title, text, link }) => {
  return (
    <Link to={link} className="capability-link">
      <div className="capability-item">
        <div className="capability-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Capabilities;
