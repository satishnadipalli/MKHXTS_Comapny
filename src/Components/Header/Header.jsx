import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './Assets/logo.png';
import { Hamberger, IntoMark } from '../../HeroIcons';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

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
            <header>
                {width > 728 ? (
                    <div className='head_wraper'>
                        <div className='logo_container'>
                            <img
                                src={logo}
                                alt='Logo not found'
                                className='company_logo'
                            />
                        </div>
                        <div className='route_container'>
                            <Link to={"/"}>
                                <span className='route_names'>Home</span>
                            </Link>
                            <Link to={"/aboutus"}>
                              <span className='route_names'>Aboutus</span>
                            </Link>
                            <Link to={"/services"}>
                                <span className='route_names'>Services</span>
                            </Link>
                            <Link to={"/contactus"}>
                                <span className='route_names'>Contact Us</span>
                            </Link>
                        </div>
                        <div className='route_links'>
                            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={21} color='white' className='linku'/>
                            </a>
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
                            />
                        </div>
                        <div>
                            <div className='route_links' style={{margin:"auto"}}>
                                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={22} color='rgb(7 ,107 ,178)' className='linku'/>
                                </a>
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
          <Link to={"/"} style={{textDecoration:"none",whiteSpace:"nowrap"}}>
            <a href="#" className="anchor" >Home</a>
          </Link>
          <Link to={"/aboutus"} style={{textDecoration:"none",whiteSpace:"nowrap"}}>
            <a href="#" className="anchor">About Us</a>
          </Link>
          <Link to={"/contactus"} style={{textDecoration:"none",whiteSpace:"nowrap"}}>
            <a href="#" className="anchor">Contact Us</a>
          </Link>
          <Link to={"/services"} style={{textDecoration:"none"}}>
          <a href="#" className="anchor">Services</a>
          </Link>
          
        </div>
      )}
        </>
    );
};

export default Header;
