import React from 'react';
import './Footer.css';

const solutions = [
    "Opportunity Assessment",
    "Evidence Generation",
    "Value Story Development and Message Testing",
    "Pricing, Reimbursement, & Access Strategy",
    "Lifecycle Planning",
    "Stakeholder Engagement",
    "Technical Support",
    "Secondary Research and Publications",
];

const ourOffices = [
    {
        country: "US",
        place: "8 Sentinel Drive, Basking Ridge, NJ 07920"
    },
    {
        country: "UK",
        place: "Market Access Solutions LTDRMR, Vyman House104 College Road Harrow (London), HA1 1BQ"
    },
    {
        country: "India  ",
        place: "IN MKTXS Biopharma Solutions LLP Suite D902 Bhadralok Towers OP Road Vadodara 390001 Gujurat / India"
    }
];

const Footer = () => {
    return (
        <footer>
            <div className='back-top'>
                Back To Top
            </div>
            <div className='foot_holder'>
                <div className='foot-wraper'>
                    <h2 className='main-head'>Our Offices</h2>
                    <div className='office-div'>
                        {ourOffices.map((item, index) => (
                            <div key={index} className='office-item'>
                                <h3 className='country'>{item.country}</h3>
                                <p className='items'>{item.place}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p style={{color:"lightgray"}}>&copy; 2024 Developed by GitaSphere Techonologies and Innovations.</p>
            </div>
        </footer>
    );
};

export default Footer;
