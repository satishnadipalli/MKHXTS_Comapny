import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./Services.css";

import Capabilities from '../../Components/Capabilities/Capabilities';

// ICON IMPORTS (Grouped for clarity)
import { IoMdSettings } from "react-icons/io";
import { PiStrategy, PiTargetBold, PiGlobeStandFill } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { FaPeopleGroup, FaBugSlash, FaCode, FaHospital } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { GiPriceTag, GiHealthCapsule } from "react-icons/gi";
import { MdOutlineAssessment, MdOutlineContentPasteSearch, MdLiveTv, MdOutlineGroups } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { TbNetwork, TbView360Number, TbStars } from "react-icons/tb";
import { WiSmallCraftAdvisory } from "react-icons/wi";
import { SiExpertsexchange } from "react-icons/si";

const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
        window.scrollTo({ behavior: "smooth", top: 0 });
    }, []);

    const servicesList = [
        { id: -3, gridClass: "dummy-1" },
        { id: -2, gridClass: "dummy-2" },
        { id: -1, gridClass: "dummy-3" },
        { id: 1, serviceText: "Evidence Generation", icon: <IoMdSettings size="100%" />, gridClass: "grid" },
        { id: 2, serviceText: "Strategic market access", icon: <PiStrategy size="100%" />, gridClass: "grid" },
        { id: 3, serviceText: "GVDs", icon: <GrNotes size="100%" />, gridClass: "grid" },
        { id: 4, serviceText: "Contracting& payer strategy", icon: <FaPeopleGroup size="100%" />, gridClass: "grid" },
        { id: 5, serviceText: "Real World Evidence", icon: <IoGlobeOutline size="100%" />, gridClass: "grid" },
        { id: 6, serviceText: "Value Message Testing", icon: <FaBugSlash size="100%" />, gridClass: "grid" },
        { id: 7, serviceText: "Pricing & reimbursement strategy", icon: <GiPriceTag size="100%" />, gridClass: "grid" },
        { id: 8, serviceText: "Launch sequencing assessment", icon: <MdOutlineAssessment size="100%" />, gridClass: "grid" },
        { id: 9, serviceText: "Analog Case Studies & Analysis", icon: <MdOutlineContentPasteSearch size="100%" />, gridClass: "grid" },
        { id: 10, serviceText: "Advisory Boards / Panels (PRISM)", icon: <WiSmallCraftAdvisory size="100%" />, gridClass: "grid" },
        { id: 11, serviceText: "Proprietary Technologies", icon: <FaCode size="100%" />, gridClass: "grid" },
        { id: 0, gridClass: "dummy-4" },
        { id: 12, serviceText: "Systematic / Targeted Literature Reviews", icon: <PiTargetBold size="100%" />, gridClass: "grid" }
    ];

    return (
        <div className='main-cont'>
            <div className='serv-back' style={{ marginBottom: 50, backgroundImage: 'url(./servicesback.jpg)' }}>
                <div className='background'></div>
                <div className='about-text'>
                    <h1 className='about-main-head' data-aos="fade-up">Our Services</h1>
                    <p className='about-main-para' data-aos="fade-up">
                        MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value
                    </p>
                </div>
            </div>

            <div className='our-services' style={{ backgroundColor: "white" }}>
                <h1 className='our-services-main-head' style={{ color: "black" }}>OUR SERVICES</h1>
                <div className="grid-wrapper">
                    {[
                        "Real World<br />Evidence (RWE)",
                        "Evidence<br />Generation",
                        "Strategic<br />Market Access",
                        "Contracting &<br />Payer strategy",
                        "Value Message<br />Testing",
                        "Launch Sequence<br />Assessment",
                        "Biomedical<br />Literature Reviews",
                        "Pricing &<br />Reimbursement Strategy",
                        "Analog Case<br />Studies & Analysis",
                        "Proprietary<br />Technologies",
                        "Advisory<br />Boards/Panels (PRISM)",
                        "Global Value<br />Dossiers (GVDs)"
                    ].map((text, i) => (
                        <div key={i} className="grid-box" dangerouslySetInnerHTML={{ __html: text }} />
                    ))}
                </div>
            </div>

            <h3 className='headingphase' style={{ marginTop: 50, textAlign: "center", width: "80%", margin: "auto", marginBottom: 60 }}>
                MKTXS provides integrated offerings across all stages of the product life-cycle to optimize price and access upon launch
            </h3>

            <div className="containers">
                {/* First row */}
                <div className="headerz">
                    <div className="header-box blue">Development Phase</div>
                    <div className="header-box green">Preclinical – Phase I (Discovery)</div>
                    <div className="header-box gray">Phase II – Phase III (Development)</div>
                    <div className="header-box dark-blue">Phase III/IV (Launch/Post-launch)</div>
                </div>

                {/* Row 1 - PMA/HEOR Impact */}
                <div className="row">
                    <div className="left-section">
                        <h3>PMA/HEOR Impact</h3>
                        <p>(Non-Exhaustive)</p>
                        <p><i>Functional areas and work streams</i></p>
                    </div>
                    <div className="content" style={{ color: "black" }}>
                        {[
                            [
                                "Risk and De-risk",
                                "Comprehensive Economic and Clinical Burden",
                                [
                                    "PMA landscape",
                                    "Price Analog Analysis",
                                    "Disease burden and HEOR analyses"
                                ]
                            ],
                            [
                                "CT design optimization",
                                "Patient Selection and recruiting",
                                "Enhanced endpoints",
                                [
                                    "Indication Sequencing",
                                    "Access stakeholder mapping",
                                    "Value story development",
                                    "Payer value mapping"
                                ]
                            ],
                            [
                                "Pricing Strategy Implementation",
                                "Risk assessment of Outcomes-Based Contracts",
                                "Enhanced RWE Analytics",
                                [
                                    "PMA Strategy Development",
                                    "Payer evidence Generation / HEOR",
                                    "Policy/advocacy strategy Analytics"
                                ]
                            ]
                        ].map((group, i) => (
                            <div key={i} className="box">
                                <ul>
                                    {group.slice(0, 3).map((item, j) => <li key={j}>{item}</li>)}
                                    <ul>
                                        {group[3].map((sub, k) => <li key={k}>{sub}</li>)}
                                    </ul>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Commercial Impact */}
                <div className="row">
                    <div className="left-section">
                        <h3>Commercial Impact</h3>
                    </div>
                    <div className="content">
                        {[
                            [
                                "Opportunity Assessment",
                                "P&L Development",
                                "M&A Opportunities"
                            ],
                            [
                                "Scientific Platform Development",
                                "KOL Profiling and Mapping",
                                "Patient flow Mapping",
                                "Value Prop / Positioning",
                                "Stakeholder segmentation"
                            ],
                            [
                                "Brand plan development and messaging",
                                "Patient support programs"
                            ]
                        ].map((group, i) => (
                            <div key={i} className="box">
                                <ul>
                                    {group.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='cap-main'>
                <h3 style={{ marginTop: 80, textAlign: "center", width: "80%", margin: "auto" }}>
                    MKTXS accelerated data availability for faster decision making and greater insights while saving costs
                </h3>
                <Capabilities />
            </div>
        </div>
    );
};

export default Services;
