import React from 'react';
import "./styles/Home.css";
import "./subcomponents/Testimonials/styles/Testimonials.css"
import Header from '../../Components/Header/Header';
import clients from "./Assets/clients.svg";
import Players from "./Assets/Players.svg";
import recruit from "./Assets/recruit.svg";
import Verification from "./Assets/Verification.svg";
import thanks from "./Assets/thanks.png";
import thanks2 from "./Assets/thanks2.png";
import thanks3 from "./Assets/thanks3.png";
// import thanks2 from "./Assets/thanks2.png";

import One from "../../assets/clients/1.png";
import Two from "../../assets/clients/2.png";
import Three from "../../assets/clients/3.png";
import Four from "../../assets/clients/4.png";
import Five from "../../assets/clients/5.png";
import Six from "../../assets/clients/7.png";
import Seven from "../../assets/clients/abbot.jpg";
import Eight from "../../assets/clients/baxter.jpg";
import Nine from "../../assets/clients/bayer.jpg";
import Ten from "../../assets/clients/biojen.jpg";
import Eleven from "../../assets/clients/bristol.jpg";
import Twelve from "../../assets/clients/electrocore.jpg";
import Thirteen from "../../assets/clients/emd.jpg";
import Fourteen from "../../assets/clients/endo.jpg";
import Fifteen from "../../assets/clients/incyte.jpg";
import Sixteen from "../../assets/clients/infinity.jpg";
import Eighteen from "../../assets/clients/janssen.jpg";
import Nineteen from "../../assets/clients/novartis.jpg";
import Twenty from "../../assets/clients/obseva.jpg";
import TwentyOne from "../../assets/clients/otsuka.jpg";
import TwentyTwo from "../../assets/clients/pfizer.jpg";
import TwentyThree from "../../assets/clients/Picture3.jpg";
import TwentyFour from "../../assets/clients/Picture4.jpg";
import TwentyFive from "../../assets/clients/sanofi.jpg";
import TwentySix from "../../assets/clients/shionogi.jpg";
import TwentySeven from "../../assets/clients/takeda.jpg";
import TwentyEight from "../../assets/clients/ucb.jpg"; // Adjusted to avoid duplicate key
import Testimonial from './subcomponents/Testimonials/Testimonials';

const clientImages = [
  One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
  Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Eighteen, 
  Nineteen, Twenty, TwentyOne, TwentyTwo, TwentyThree, TwentyFour, 
  TwentyFive, TwentySix, TwentySeven, TwentyEight
];

const boradingData = [
  {
    image: Players,
    title: "Physicians",
    members: 4120357,
    desc: "Around the world, the term physician refers to a specialist in internal medicine or one of its many sub-specialties."
  },
  {
    image: Verification,
    title: "Patients",
    members: 16121213,
    desc: "Difficult patients are unavoidable and dealing with them often leads to increased stress levels within your practice."
  },
  {
    image: clients,
    title: "Publications",
    members: 989,
    desc: "Healthcare costs are paid for by private payers or public payers. Private payers are insurance companies."
  },
  {
    image: recruit,
    title: "Payers",
    members: 389,
    desc: "Subscription and open-access journals from SAGE Publishing, the world’s leading independent academic publisher."
  }
];

const serviceData = [
  {
    image:thanks,
    title:"Comprehensive Service"

  },
  {  
    image:thanks2,
    title:"Systematic Approach"
  },
  {  
    image:thanks3,
    title:"Extended Communication & Support"
  },
  {
    image:thanks,
    title:"Innovative & Pragmatic Solutions"

  }
]

const Home = () => {
  return (
    <>
      <div className='main-main-home'>
        <div  className='main-home'>
          <div className='header_div'>
            <Header />
          </div>
          <div className='main-middle'>
            <span className='quote'>Welcome to MKTXS</span>
            <p className='quote-2'>Discover the world of an integrated global consultancy</p>
            <p className='quote-3'>
              Market Access Solutions (MKTXS) is a boutique global consultancy that collaborates with life science companies to produce customized, integrated, and evidence-based strategies to optimize product value and patient access.
            </p>
          </div>
        </div>

        <div className='client_list'>
          {
            boradingData.map((item, index) => (
              <div key={index} className='rect_div'>
                <div className='icon_wraper'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='info_wraper'>
                  <span className='head_2'>{item.members}+</span>
                  <span className='head_3'>{item.title}</span>
                </div>
              </div>
            ))
          }
        </div>

        <div style={{width:"100%"}}> 
          <p className='head-7' > Why Clients Trust Us</p>
          <div className='why-mk'>
            {
              serviceData.map((item,id)=>{
                return(
                  <div className='thin-divs'>
                    <div className='service'>
                      <img src={item.image} alt="No image found" />
                      <div className='info_div'>
                        <span>{item.title}</span>
                      </div>  
                    </div>
                  {id != 3 &&  <div className='thin'></div>}
                  </div>
                )
              })
            }
          </div>
        </div>
        <Testimonial/>
        <div className="scrolling-container">
        <span className='head-4'>Our Clients</span>
          <div className="scrolling-content">
            {clientImages.map((image, index) => (
              <img key={index} src={image} className='compan' alt={`client-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
