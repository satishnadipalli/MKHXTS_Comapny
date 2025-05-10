import React, { useEffect, useState } from 'react';
import "./styles/Home.css";
import "./subcomponents/Testimonials/styles/Testimonials.css";
import Header from '../../Components/Header/Header';

import thanks from "./Assets/thanks.png";
import thanks2 from "./Assets/thanks2.png";
import thanks3 from "./Assets/thanks3.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useNavigate } from 'react-router';
import About from '../About/About';
import ClientsTrust from '../../Components/ClientsTrust/ClientsTrust';
import Testimonial from './subcomponents/Testimonials/Testimonials';

import One from '../../assets/clients/1.png';
import Two from '../../assets/clients/2.png';
import Three from '../../assets/clients/3.png';
import Four from '../../assets/clients/4.png';
import Five from '../../assets/clients/5.png';
import Six from '../../assets/clients/6.png';
import Seven from '../../assets/clients/7.png';
import Eight from '../../assets/clients/8.png';
import Nine from '../../assets/clients/9.png';
import Ten from '../../assets/clients/10.png';
import Eleven from '../../assets/clients/11.png';
import Twelve from '../../assets/clients/12.png';
import Thirteen from '../../assets/clients/13.png';
import Fourteen from '../../assets/clients/14.png';
import Fifteen from '../../assets/clients/15.png';
import Sixteen from '../../assets/clients/16.png';
import Seventeen from '../../assets/clients/17.png';
import Eighteen from '../../assets/clients/18.png';
import Nineteen from '../../assets/clients/19.png';
import Twenty from '../../assets/clients/20.png';
import TwentyOne from '../../assets/clients/21.png';
import TwentyTwo from '../../assets/clients/22.png';
import TwentyThree from '../../assets/clients/23.png';
import TwentyFour from '../../assets/clients/24.png';
import TwentyFive from '../../assets/clients/25.png';
import TwentySix from '../../assets/clients/26.png';
import TwentySeven from '../../assets/clients/27.png';
import TwentyEight from '../../assets/clients/28.png';
import TwentyNine from '../../assets/clients/29.png';
import Thirty from '../../assets/clients/30.png';

SwiperCore.use([Pagination, Autoplay]);

const clientImages = [
  One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
  Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen,
  Eighteen, Nineteen, Twenty, TwentyOne, TwentyTwo, TwentyThree,
  TwentyFour, TwentyFive, TwentySix, TwentySeven, TwentyEight,
  TwentyNine, Thirty,
];

const serviceData = [
  { image: thanks2, title: "Systematic Approach" },
  { image: thanks, title: "Comprehensive Service" },
  { image: thanks, title: "Innovative & Pragmatic Solutions" },
  { image: thanks3, title: "Extended Communication & Support" }
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, []);

  return (
    <>
      <div className='main-main-home' style={{ position: "relative" }}>
        <div className='main-home'>
          <div className='backgrounds'></div>
          <div className='Two_divs' style={{ zIndex: 17 }}>
            <div className='sec_1' style={{ zIndex: 17 }}>
              <p className='head_2' data-aos="fade-up">Discover the world of an integrated global consultancy</p>
              <p className='head_9' style={{ fontStyle: "italic" }} data-aos="fade-up">
                Meeting your needs. Surpassing your expectations
              </p>
              <div className='buttons-div'>
                <button className='subi' onClick={() => navigate("/services")}>Services</button>
              </div>
            </div>
          </div>
        </div>

        <div className='home_sec2'>
          <p className='home_partner'>
            Market Access Solutions (MKTXS) is a boutique global consultancy that collaborates with life science companies to produce customized, integrated, and evidence-based strategies to optimize product value and patient access.
          </p>
        </div>

        <ClientsTrust images={clientImages} />

        {/* Clients List Section */}
        <div className='our-clients-wrapper' style={{}}>
          <span className='head-4'>Our Clients</span>
          <div className='clients-list-div'>
            {clientImages.map((element, index) => (
              <img key={index} src={element} style={{width:"120px"}} alt={`client-${index}`} />
            ))}
          </div>
        </div>

        <About />
      </div>

      {/* Testimonial Section */}
      <Testimonial />
    </>
  );
};

export default Home;
