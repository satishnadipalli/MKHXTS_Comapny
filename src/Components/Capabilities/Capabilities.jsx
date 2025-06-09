
import React from "react";
import { Link } from "react-router-dom";
import "./Capabilities.css";
// import capabilitiesImg from "/mktxs-products.png"; // Ensure correct image path

const Capabilities = () => {
  return (
    <div className="capabilities-container" style={{border:"none"}}>
      <img style={{mixBlendMode:"multiply"}} src={"./mktxs-products.png"} alt="Capabilities"  styles={{border:"none"}} className="capabilities-image" />

      {/* Clickable Sections */}
      <Link to="/vip" className="click-area vip"></Link>
      <Link to="/insights" className="click-area insights"></Link>
      <Link to="/knolens" className="click-area knolens"></Link>
      <Link to="/iemap" className="click-area iemap"></Link>
      <Link to="/mvap" className="click-area mvap"></Link>
      <Link to="/outcomes" className="click-area outcome"></Link>
    </div>
  );
};

export default Capabilities;
