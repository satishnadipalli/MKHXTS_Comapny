import React from "react";
import "./GlobalPlayerNetwork.css";

const GlobalPayerNetwork = () => {
  return (
    <div className="global-container " style={{marginTop:"40px"}}>
      <h1 className="title">
        MKTXS has a vast global payer network, which includes relevant payer archetypes within each market
      </h1>
      <div className="map-container">
        <img src="/worldmap.png" alt="World Map with Markers" className="world-map" />
      </div>
      <div className="info-box">
        <h2 className="info-title">MKTXS has "feet on the ground" partners across global markets including US, UK and EU</h2>
        <p className="info-text">We have global partners that are experts in markets across their specific region of expertise, and currently span:</p>
        <div className="country-grid" style={{placeItems:"center"}}>
          <div>
            <p>US</p>
            <p>UK</p>
            <p>France</p>
            <p>Germany</p>
            <p>Spain</p>
            <p>Italy</p>
          </div>
          <div>
            <p>Austria</p>
            <p>Belgium</p>
            <p>Luxembourg</p>
            <p>Switzerland</p>
            <p>Sweden</p>
            <p>Russia</p>
          </div>
          <div>
            <p>Canada</p>
            <p>Australia</p>
            <p>India</p>
            <p>Indonesia</p>
            <p>Japan</p>
            <p>Thailand</p>
          </div>
          <div>
            <p>Argentina</p>
            <p>Brazil</p>
            <p>Mexico</p>
            <p>Egypt/MeNa</p>
            <p>Taiwan</p>
          </div>
        </div>
      </div>
      
      <div className="footer-box">
        <p className="footer-text">
          Our worldwide partnerships are supplemented by a high-quality, relevant global Payer network and in-house market
          knowledge acquired through research and training.
        </p>
      </div>
    </div>
  );
};

export default GlobalPayerNetwork;
