import React, { useEffect } from 'react';
import { FiGlobe, FiPhone, FiMail, FiLinkedin } from 'react-icons/fi';
import './Contactus.css';
import Aos from 'aos';
import "aos/dist/aos.css"


const ContactUs = () => {



    useEffect(()=>{
        Aos.init({duration:1000});
        },[])


  return (
    <div className="contact-wrapper">
      <div className='mktxs_backs' data-aos="fade">
        <div className='background'></div>
         <div className='mobilitys'>
         <h2 className='main-head'>CONTACT US</h2>
         
         </div>
      </div>

      <div className="contact-container" style={{marginTop:50}}>
        <h1 className="contact-header">
        Unlock the future of Pricing and Market Access with MKTXS - reach out today to supercharge your team's efficiency! 
        </h1>

        <div className="contact-content">
          {/* Left Section */}
          <div className="contact-info">
            <h2>Contact</h2>
            <div className="divider"></div>

            <div className="info-item">
              <FiGlobe className="icon" size={40} />
              <div>
                <strong>Web</strong>
                <p><a href="https://www.mktxs.com" target="_blank" rel="noopener noreferrer">www.MKTXS.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <FiPhone className="icon" size={40} />
              <div>
                <strong>Phone</strong>
                <p>+1 908-391-3398                </p>
              </div>
            </div>

            <div className="info-item">
              <FiMail className="icon" size={40} />
              <div>
                <strong>Email</strong>
                <div className='enomis'>
                  <p><a href="mailto:sshah@mktxs.com">sshah@mktxs.com</a></p>
                  {/* <br /> */}
                </div>
              </div>
            </div>

            <div className="info-item">
              <FiLinkedin className="icon" size={40} />
              <div>
                <strong>Linkedin</strong>
                <div className='enomis'>
                  <p><a href="mailto:sshah@mktxs.com">https://www.linkedin.com/company/mktxs                  </a></p>
                  {/* <br /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="qr-form-section">
            <div className="qr-code-placeholder">
              <img src="./qrcode.jpg" alt="" style={{width:"170px"}} />
            </div>
            <p className="qr-caption" style={{marginTop:"30px"}}>Scan to book an appointment today</p>

          </div>
        </div>

        {/* <footer className="footer">
          <p>Contact Us</p>
          <p>16</p> */}
        {/* </footer> */}
      </div>
    </div>
  );
};

export default ContactUs;
