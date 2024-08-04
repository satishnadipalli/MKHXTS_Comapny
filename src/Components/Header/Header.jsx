import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './Assets/logo.png';
import { Hamberger, IntoMark } from '../../HeroIcons';
import { FaGithub, FaInstagram,FaFacebook } from 'react-icons/fa';



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
                            <span className='route_names'>Home</span>
                            <span className='route_names'>About us</span>
                            <span className='route_names'>Services</span>
                            <span className='route_names'>Blogs</span>
                            <span className='route_names'>Platforms</span>
                            <span className='route_names'>Contact Us</span>
                        </div>
                        <div className='route_links'>
                            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={21} color='white' className='linku'/>
                            </a>
                            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={21} color='white' className='linku'/>
                            </a>
                            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
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
                            {/* <p className='quotes'>Meeting your expectations surpassing your needs</p> */}
                        </div>
                        <div className='hamberger_div' onClick={() => setIsOpen(prev => !prev)}>
                            {isOpen ? <IntoMark /> : <Hamberger />}
                        </div>
                    </div>
                )}
            </header>
            {width <= 728 && (
                <div  className={`drop_down_menu ${isOpen ? 'open' : ''}`}>
                    <a href='#' className='anchor'>About</a>
                    <a href='#' className='anchor'>Products</a>
                    <a href='#' className='anchor'>Contact Us</a> 
                    <a href='#' className='anchor'>Solutions</a> 
                    <a href='#' className='anchor'>Insits</a> 
                </div>
            )}
        </>
    );
};

export default Header;
