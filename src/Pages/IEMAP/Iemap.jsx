import React, { useEffect } from 'react'
import "./Iemap.css"
const Iemap = () => {

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: 0 })
    }, [])
    return (
        <div>
            <div className='about' style={{ marginBottom: "50px" }}>
                <div className='background'></div>
                <div className='about-text'>
                    <h1 className='about-main-head'>IEMAP</h1>
                    {/* <p className='about-main-para'>MKTXS has the tools to help pharmaceutical/biotechnology companies build effective strategies to resolve key market access concerns and enhance product value</p> */}
                </div>
            </div>
            <h3 className='kno-head' style={{ textAlign: "center", marginBottom: "40px" }}>
                IEMAP effectively maps chronologically competitive evidence to support clinical development and access strategies
            </h3>

            <h2 style={{
                textAlign: "center",
                marginBottom: "30px",
                backgroundColor: "rgb(7,78,178)",
                margin: "10%",
                marginTop: 0,
                padding: 20,
                color: 'white',
                fontFamily: "Manrope-SemiBold",
                whiteSpace:"nowrap"
            }}>
                MKTXS Integrated Evidence Mapping Platform {" "}
                <span style={{ fontFamily: "Manrope-SemiBold", display: "inline" }}>
                    IEMAP
                    <span style={{ fontSize: '10px', verticalAlign: 'super' }}>TM</span>
                </span>
            </h2>

            <div style={{ display: "flex", alignContent: 'center', mixBlendMode: "multiply" }}>
                <img src="https://res.cloudinary.com/dlehbizfp/image/upload/v1749365559/Screenshot_2025-06-08_122220_svmgdn.png" alt="" style={{ margin: "auto", marginTop: -50 }} />
            </div>
            {/* <div className='mapped-div'>
            <img src="./iemap.png" alt="" />
            <table>
                <thead>
                    <tr>
                        <th>Evidence</th>
                        <th>Publication date</th>
                        <th>Type</th>
                        <th>Objective</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Efficacy & Safety</td>
                        <td>2014</td>
                        <td>RCT</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cost-effectiveness</td>
                        <td>2016</td>
                        <td>HEOR</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Drug utilization</td>
                        <td>2016</td>
                        <td>Observational</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Long-term safety</td>
                        <td>2017</td>
                        <td>RWE</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>QoL</td>
                        <td>2018</td>
                        <td>RWE</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
            <ul>
                <p style={{fontFamily:"Manrope-Bold"}}>IEMAP Supports in:</p>
                <li>Shaping your evidence strategy</li>
                <li>Recommendations for future research</li>
                <li>Enhance value proposition</li>
                <li>Considerations for resource requirements</li>
                <li>Developing short- and long-term business strategy, etc.</li>
                <li>Gap mitigation</li>
            </ul>
        </div> */}

            {/* <h3 className='kno-head' style={{textAlign:"center",marginBottom:"20px",fontSize:"19px",marginTop:'70px'}}>
        Chronology of competitive evidence mapping
        </h3>
        <div className="timeline-container"> */}
            {/* <div className="timeline">
            <div className="event">
                <div className="event-circle" style={{backgroundColor: "#0074a2"}}></div>
                <div className="event-content">
                    <div className="event-year">2014</div>
                    <div className="event-description">Ph3 placebo-controlled CT</div>
                </div>
            </div>

            <div className="event">
                <div className="event-circle" style={{backgroundColor:"#f47b20"}}></div>
                <div className="event-content">
                    <div className="event-year">2016</div>
                    <div className="event-description">Ph3 H2H CT</div>
                </div>
            </div>

            <div className="event">
                <div className="event-circle" style= {{backgroundColor:"#007a33"}}></div>
                <div className="event-content">
                    <div className="event-year">2016</div>
                    <div className="event-description">Cost-effectiveness analysis</div>
                </div>
            </div>

            <div className="event">
                <div className="event-circle" style={{backgroundColor:"#8bc34a"}}></div>
                <div className="event-content">
                    <div className="event-year">2017</div>
                    <div className="event-description">Long-term safety</div>
                </div>
            </div>

            <div className="event">
                <div className="event-circle" style={{backgroundColor:" #9c27b0"}}></div>
                <div className="event-content">
                    <div className="event-year">2018</div>
                    <div className="event-description">Real-world QoL</div>
                </div>
            </div>
        </div> */}

            {/* <h3 className='kno-head' style={{textAlign:"center",marginBottom:"20px",fontSize:"19px",marginTop:'70px'}}>
            EMAP helps in developing a targeted, efficient, and effective evidence-generation strategy that maximizes your product’s potential
        </h3> */}
            {/* </div> */}
        </div>
    )
}

export default Iemap
