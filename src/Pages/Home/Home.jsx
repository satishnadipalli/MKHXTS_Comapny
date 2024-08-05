import React, { useEffect, useState } from 'react';
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
import OurService from './subcomponents/Ourservices/OurService';
import Aos from 'aos';
import "aos/dist/aos.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';
import  { Pagination, Autoplay } from 'swiper/modules';
import FAQSection from './subcomponents/FaqSection/FaqSection';
import Connect from './subcomponents/Connect/connect';

SwiperCore.use([Pagination, Autoplay]);

const clientImages = [
  One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
  Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Eighteen, 
  Nineteen, Twenty, TwentyOne, TwentyTwo, TwentyThree, TwentyFour, 
  TwentyFive, TwentySix, TwentySeven, TwentyEight,One, Two, Three,
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
    image:thanks2,
    title:"Systematic Approach"
  },
  {
    image:thanks,
    title:"Comprehensive Service"

  },
  {
    image:thanks,
    title:"Innovative & Pragmatic Solutions"

  },
  {  
    image:thanks3,
    title:"Extended Communication & Support"
  }
]

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleWidth = () => {
          setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWidth);

      // Cleanup listener on unmount
      return () => window.removeEventListener('resize', handleWidth);
  }, []);

  return (
    <>
      <div className='main-main-home'>
        <div  className='main-home'>
          <div className='background'></div>
          <div className='Two_divs'   style={{zIndex:17}}>
              <div className='sec_1' style={{zIndex:17}} data-aos="fade-up">
                  <p className='head_2'>Bluid your audiance and sale more</p>
                  <p className='head_9'>
                    Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.
                  </p>
                  <div className='buttons-div'>
                    <button className='sub2'>Get Started</button>
                  </div>
              </div>
              <div className='sec_2' style={{zIndex:17}} data-aos="slide-left">
              <form action="" className="form-container">
                <span className='form-p'>
                  Book a Free Consultation Appointment
                </span>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
                
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="Enter your phone number" />
                
                <button type="submit" className='sub'>Book Appointment</button>
              </form>

              </div>
          </div>
        </div>

        {/* All the client Numbers */}
        <div className='client_list'>
          {
            boradingData.map((item, index) => (
              <div key={index} className='rect_div' data-aos="fade-up" > 
              {/* data-aos-delay={`${4-index}00`} */}
                <div className='icon_wraper'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='info_wraper'>
                  <span className='head_10'>{item.members}+</span>
                  <span className='head_3'>{item.title}</span>    
                </div>
              </div>
            ))
          }
        </div>

        {/* Trust Us component */}
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
                    {/* {id == 2 && <div className='thins'></div>} */}
                  { id != 3 &&  <div  className='thin'></div> }
                  </div>
                )
              })
            }
          </div>
        </div>
          
        <div>
          
        </div>

        {/* Compnay Slides Swiper */}
        {  
          <>
            <span className='head-4'>Our Clients</span>
            <Swiper
              spaceBetween={5}
              slidesPerView={width < 600 ? 3 : 5}
              slidesPerGroup={width < 600 ? 3 : 5}  // Scrolls 5 images at a time
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              className="scrolling-content"
              style={{paddingTop:"20px"}}
            >
              {clientImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} className='compan' alt={`client-${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
         }


        <div className='Our_services'>
            <OurService />
        </div>
        <Testimonial/>
        <div>
          <FAQSection/>
        </div>
        <div>
          <Connect/>
        </div>
      </div>
    </>
  );
};

export default Home;
