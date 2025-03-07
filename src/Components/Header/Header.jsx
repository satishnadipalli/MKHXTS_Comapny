import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './Assets/logo.png';
import { Hamberger, IntoMark } from '../../HeroIcons';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [isLogoOpen,setIsLogoOpen] = useState(false);


    useEffect(() => {
        const handleWidth = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWidth);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleWidth);
    }, []);


    const navigatorOption = (path) =>{
        navigate(path);
        setIsOpen(false);
    }

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top (or add your desired action)
      };

    return (
        <>
            <header>
                {width > 728 ? (
                    <div className='head_wraper'>
                        <div className='logo_container'>
                            <img
                                src={logo}
                                alt='Logo not found'
                                className='company_logo'
                                onClick={()=>setIsLogoOpen(true)}
                            />
                        </div>
                        <div className='route_container'>
                            <Link to={"/"}>
                                <span className='route_names'>Home</span>
                            </Link>
                            <Link to={"/services"}>
                                <span className='route_names'>Services</span>
                            </Link>
                            <Link to={"/contactus"}>
                                <span className='route_names'>Contact Us</span>
                            </Link>
                        </div>
                        <div className='route_links'>
                            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={21} color='white' className='linku'/>
                            </a>
                            <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={21} color='white' className='linku'/>
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className='head_wraper'>
                        <div className='logo_container'>
                            <img
                                src={logo}
                                alt='Logo not found'
                                className='company_logo'
                                onClick={()=>{setIsLogoOpen(true)}}
                            />
                        </div>
                        <div>
                            <div className='route_links' style={{margin:"auto"}}>
                               
                                <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={22} color='rgb( 27 ,173 ,153)' className='linku'/>
                                </a>
                                <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={23} color='rgb(75, 80 ,88)' className='linku'/>
                                </a>
                            </div>
                        </div>
                        <div className='hamberger_div' onClick={() => setIsOpen(prev => !prev)}>
                            {isOpen ? <IntoMark /> : <Hamberger />}
                        </div>
                    </div>
                )}
            </header>
            {width <= 720 && (
            <button onClick={() => setIsOpen(!isOpen)} style={{ margin: "10px",}}>
            ☰ Menu
            </button>
        )}

      {isOpen && <div className={`overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}></div>}

      {width <= 720 && (
        <div className={`drop_down_menu ${isOpen ? "open" : ""}`}>
          <div style={{marginTop:"30px"}} onClick={() => setIsOpen(!isOpen)} >
            <IntoMark />
          </div>
          <div onClick={()=>{
            navigate("/");
            setIsOpen(false)
          }} style={{textDecoration:"none",whiteSpace:"nowrap"}}>
            <a href="#" className="anchor" >Home</a>
          </div>
          <div onClick={()=>{
            navigate("/contactus");
            setIsOpen(false)
          }} style={{textDecoration:"none",whiteSpace:"nowrap"}}>
            <a href="#" className="anchor">Contact Us</a>
          </div>
          <div onClick={()=>{
            navigate("/services");
            setIsOpen(false)
          }} style={{textDecoration:"none"}}>
          <a href="#" className="anchor">Services</a>
          </div>
          
        </div>
      )}

      { 
        isLogoOpen &&
        <div className="floating-overlay" onClick={()=>setIsLogoOpen(false)}>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </div>
      }
        </>
    );
};

export default Header;
