import React, { useEffect, useState } from 'react';
import "./styles/Home.css";
import "./subcomponents/Testimonials/styles/Testimonials.css"
import Header from '../../Components/Header/Header';

import thanks from "./Assets/thanks.png";
import thanks2 from "./Assets/thanks2.png";
import thanks3 from "./Assets/thanks3.png";
// import thanks2 from "./Assets/thanks2.png";

import One from "../../assets/clients/1.png";
import Two from "../../assets/clients/2.png";
import Three from "../../assets/clients/3.png";
import Four from "../../assets/clients/4.jpg";
import Five from "../../assets/clients/5.png";
import Six from "../../assets/clients/6.jpg";
import Seven from "../../assets/clients/7.png";
import Eight from "../../assets/clients/8.jpg";
import Nine from "../../assets/clients/10.png";
import Ten from "../../assets/clients/11.png";
import Eleven from "../../assets/clients/12.png";
import Twelve from "../../assets/clients/13.jpg";
import Thirteen from "../../assets/clients/14.png";
import Fourteen from "../../assets/clients/15.png";
import Fifteen from "../../assets/clients/16.png";
import Sixteen from "../../assets/clients/17.png";
import Eighteen from "../../assets/clients/18.jpg";
import Nineteen from "../../assets/clients/19.jpg";
import Twenty from "../../assets/clients/20.png";
import TwentyOne from "../../assets/clients/21.jpg";
import TwentyThree from "../../assets/clients/23.jpg";
import TwentyFour from "../../assets/clients/24.png";
import TwentyFive from "../../assets/clients/25.png";
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
import { BsGenderTrans } from "react-icons/bs";
import { MdBugReport } from 'react-icons/md';
import { TbDeviceMobileMessage } from "react-icons/tb";
import { MdGroups2 } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { useNavigate } from 'react-router';
import About from '../About/About';
import ClientsTrust from '../../Components/ClientsTrust/ClientsTrust';
SwiperCore.use([Pagination, Autoplay]);

const clientImages = [
  One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
  Eleven, Thirteen, Fourteen, Fifteen, Sixteen, Eighteen, 
  Nineteen, Twenty, TwentyOne, TwentyThree, TwentyFour, 
  TwentyFive, TwentySix
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

const cards=[
  {image:"https://images.squarespace-cdn.com/content/v1/61377b87e3ca872480d39a2b/1631204741937-LGVLOLP9MS5ELVXCF2Z2/windrose-img-home-1-leader.png?format=750w",title:"Active leadership. Strategic guidance. Global experience.",desc:"When you work with Windrose, you get an experienced team dedicated to helping you succeed.  "},
  {image:"https://images.squarespace-cdn.com/content/v1/61377b87e3ca872480d39a2b/1631204779732-4HIZN1B0Q2REPE778F1Z/windrose-img-home-2-guideclients.png?format=750w",title:"Active leadership. Strategic guidance. Global experience.",desc:"When you work with Windrose, you get an experienced team dedicated to helping you succeed.  "},
  {image:"https://images.squarespace-cdn.com/content/v1/61377b87e3ca872480d39a2b/1631204807214-TDC7QXTYCH13HX3QU2ID/windrose-img-home-3-team.png?format=750w",title:"Active leadership. Strategic guidance. Global experience.",desc:"When you work with Windrose, you get an experienced team dedicated to helping you succeed.  "}
]

const Home = () => {

  const navigate = useNavigate();
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


  const images = [
    { src: "./leadership.jpg", alt: "Active Leadership", text: "MKTXS boasts a dynamic leadership team comprised of experienced industry veterans" },
    { src: "./stratagic.jpg", alt: "Strategic Planning", text: "Partnering to meet the unique needs of our clients" },
    { src: "./global.jpg", alt: "Global Presence", text: "A global footprint, with industry experts in all key markets for valuable insights" },
    { src: "./solution.jpg", alt: "Pragmatic Solutions", text: " Innovative to maximize product value and enhance patient access." },
  ]

  return (
    <>
      <div className='main-main-home' style={{position:"relative",}}>
        <div  className='main-home'>
          <div className='backgrounds'></div>
          <div className='Two_divs'   style={{zIndex:17}}>
              <div className='sec_1' style={{zIndex:17}} >
                  <p className='head_2 ' data-aos="fade-up">Discover the world of an integrated global consultancy</p>
                  <p className='head_9' style={{fontStyle:"italic"}} data-aos="fade-up" >
                    Meeting your needs. Surpassing your expectations
                  </p>
                  <div className='buttons-div'>
                    <button className='subi' onClick={()=>navigate("/services")}>Services</button> 
                  </div>
              </div>
          </div>
        </div>
        <div className='home_sec2'>
          {/* <div className='backgrounded'>

          </div> */}
          <p className='home_partner'>
            Market Access Solutions (MKTXS) is a boutique global consultancy that collaborates with life science companies to produce customized, integrated, and evidence-based strategies to optimize product value and patient access. 
          </p>
        </div>

        <ClientsTrust images={images}/>

        <div>
          
        </div>

        {/* Compnay Slides Swiper */}
        {  
          <>
            <span className='head-4'>Our Clients</span>
            <div className='clients-list-div'>
              {
                clientImages?.map((element,index)=>{
                  return(
                    <img style={{width:`${(index > 9 && index <=14 && index != 12) && "80px" || index == 12 && "100px" }`}} key={index} src={element} alt={element}/>
                  )
                })
              }
            </div>
          </>
         }
        
        
        <About />
        </div>
        <Testimonial />
        <div>
      </div>
    </>
  );
};

export default Home;
