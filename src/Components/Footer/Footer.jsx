import React from 'react';
import './Footer.css';

const solutions = [
  "Opportunity Assessment",
  "Evidence Generation",
  "Value Story Development and Message Testing",
  "Pricing, Reimbursement, & Access Strategy",
  "Lifecycle Planning",
  "Stakeholder Engagement",
  "Technical Support",
  "Secondary Research and Publications",
];

const ourOffices = [
  {
    country: "US",
    place: [
      "8 Sentinel Drive",
      "Basking Ridge, NJ 07920"
    ]
  },
  {
    country: "UK",
    place: [
      "Market Access Solutions ",
      "LTD RMR Vyman House",
      "104 College Road",
      "Harrow (London), HA1 1BQ"
    ]
  },
  {
    country: "India",
    place: [
      "MKTXS for BioPharm Solutions LLP",
      "Bhadralok Towers, Suite D902",
      "OP Road, Vadodara",
      "Gujarat, India",
      "390020"
    ]
  }
];

const Footer = () => {
  function handleTop() {
    window.scrollTo({ top: "top", behavior: "smooth" });
  }

  return (
    <footer>
      <div className='back-top' onClick={handleTop}>
        Back To Top
      </div>

      <div className='foot_holder'>
        <div className='foot-wraper'>
          <h2 className='main-head'>Our Offices</h2>
          <div className='office-div'>
            {ourOffices.map((item, index) => (
              <div key={index} className='office-item'>
                <h3 className='country'>{item.country}</h3>
                <div className='items'>
                  {item.place.map((line, i) => (
                    <div key={i} style={{ whiteSpace: 'nowrap' }}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p style={{ color: "lightgray" }}>Market Access Solutions © All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
