import React from 'react'
import Header from '../../Components/Header/Header'
import "./styles/About.css"

const About = () => {
  return (
    <>
      <div className='about-div'>
        <Header/>
        <div className='about'>
          <div>
            <div className='about-text'>
              <h1 className='about-main-head'>ABOUT US</h1>
              <p className='about-para'>Springworks is the embodiment of our vision and ambition to revolutionise the HR landscape with products that serve businesses in the most human way.</p>
              <p className='about-para'>We are leading the world to the future of HR which should have been ours already.</p>
            </div>
            <div className='about-btn-div about-btn-div-lg'>
              <button className='about-btn'>JOIN OUR TEAM</button>
            </div>
          </div>
          <div className='about-img'>
            <img src="https://cdn.prod.website-files.com/5d7f260f28eccad078dcb101/634d3b73453d98d5e6bc553b_about-img.jpeg"/>
          </div>
          <div className='about-btn-div about-btn-div-sm'>
              <button className='about-btn'>JOIN OUR TEAM</button>
            </div>
        </div>
      </div>
      <div className='who-we-are-div'>
        <h1 className='who-we-are-main-head'>WHO WE ARE</h1>
        <p className='who-we-are-para'>We are bringing together technology, intelligence and human emotion.We are changing the way we work. We are Springworks</p>
      </div>
    </> 

  )
}

export default About