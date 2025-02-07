import React, { useEffect, useState, useContext, useRef } from "react";
// import UserContext from "../userContext/userContext";
// import Preloader from "../components/preloader";
// import Confetti from 'react-confetti';
// import Image from "next/image";
import './connect.css';

const Connect = () => {
  const [feedBack, setFeedBack] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    subject: "",
    message: ""
  });

  const [iisLoading, setiIsLoading] = useState(false);

  const handleFeedBack = (e) => {
    const { name, value } = e.target;
    setFeedBack((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setiIsLoading(true);
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedBack),
      });

      if (response.ok) {
        setTimeout(() => {
          setiIsLoading(false);
        }, 2000);
      } else {
        setiIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setiIsLoading(false);
    }
  };

  // if (isLoading) {
  //   return <Preloader />;
  // }

  console.log(iisLoading);
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_contact" id="contact">
        <div className="container">
          <div className="dizme_tm_main_title" >
            <span className="head-4 hd" >We can Help You</span>
            <p className="head-10" style={{textAlign:"center",color:"gray"}}>
              Please fill out the form on this section to contact with Us. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left" >
              { (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="fas fa-location orangeText" />
                      </div>
                      <div className="short">
                        <h3 className="mobile">Address</h3>
                        <a style={{whiteSpace:"nowrap"}}>Visakhapatnam, AndhraPradesh, India</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="fas fa-envelope greenText" />
                      </div>
                      <div className="short">
                        <h3 className="mobile">Email</h3>
                        <span>
                          <a href="#">satishnadipalli1@gmail.com</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                      <i className="fas fa-phone purpleText"></i> 
                      </div>
                      <div className="short">
                        <h3 className="mobile">Phone</h3>
                        <span>+91 7993724192</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" >
              <div className="fields" style={{paddingRight:"50px",paddingLeft:"-30px"}}>
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          name="userName"
                          onChange={handleFeedBack}
                          value={feedBack.userName}
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="userEmail"
                          onChange={handleFeedBack}
                          value={feedBack.userEmail}
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="number"
                          placeholder="Your Phone"
                          name="userPhone"
                          onChange={handleFeedBack}
                          value={feedBack.userPhone}
                        />
                      </li>
                      <li>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          onChange={handleFeedBack}
                          value={feedBack.subject}
                        />
                      </li>
                    </ul>
                  </div>
                    <input style={{width:"93%",marginLeft:"120px"}} className="textareas"
                      id="message"
                      placeholder="Write your message here"
                      name="message"
                      onChange={handleFeedBack}
                      value={feedBack.message}
                    />
                  <button style={{width:"94%",marginLeft:"50px"}} type="submit" className="sub">
                    <span>Submit Now</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
