import React, { useEffect } from 'react';
import { FiGlobe, FiPhone, FiMail } from 'react-icons/fi';
import './Contactus.css';
import Aos from 'aos';
import "aos/dist/aos.css"


const ContactUs = () => {



    useEffect(()=>{
        Aos.init({duration:1000});
        },[])


  return (
    <div className="contact-wrapper">
      <section className="about">
        <div className='background'></div>
        <div className="about-text" data-aos="fade-up">
          <h1 className="about-main-head">Our Services</h1>
          <p className="about-main-para">
            MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies 
            to resolve key market access concerns and enhance product value.
          </p>
        </div>
      </section>

      <div className="contact-container">
        <h1 className="contact-header">
          Unlock the future of <span>Pricing and Market Access</span> with MKTXS — 
          <br /> reach out today to <span>supercharge your team's efficiency!</span>
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
                <p>+1 908-391-3398</p>
              </div>
            </div>

            <div className="info-item">
              <FiMail className="icon" size={40} />
              <div>
                <strong>Email</strong>
                <div className='enomis'>
                  <p><a href="mailto:sshah@mktxs.com">sshah@mktxs.com</a></p>
                  {/* <br /> */}
                  <p><a href="mailto:kpatel@mktxs.com">kpatel@mktxs.com</a></p>
                  {/* <br /> */}
                  <p><a href="mailto:tsabbi@mktxs.com">tsabbi@mktxs.com</a></p>
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

            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" required />
              <button type="submit">Submit</button>
            </form>
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
