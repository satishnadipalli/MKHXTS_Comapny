import React from 'react';
import './KnolenSLR.css'; // Importing the CSS file

const KnolensSLR = () => {
  return (
    <div className="slr-container">
      <h1>Knolens SLR: A fully automated SLR at your fingertips</h1>
      <div style={{display:"grid",gap:"20px"}}>
      <div className='first-sections'>
        <div>
            <p>Design efficiency</p>
            <img src="" alt="" />
            <p>
                Explore a wide range of scenarios and alternative search criteria, 
                accelerating the optimization of study design and fine-tune strategies
            </p>
        </div> 
        <div className='second-sections'>
            <div>
                <p>95% Accuracy</p>
                <img src="" alt="" />
            </div>
            <div>
                <p>Minimal Bias</p>
                <img src="" alt="" />
            </div>
        </div>
        <div>
            <p>Accelerate your data extraction time</p>
            <img src="" alt="" />
            <p>
                Provides researchers with immediate EXTRACTION of the data for each investigation
            </p>
        </div> 
        <div className='second-sections'>
            <div>
                <p>Cost savings</p>
                <img src="" alt="" />
            </div>
            <div>
                <p>Flexibility</p>
                <img src="" alt="" />
            </div>
        </div>
        <div>
            <p>Comprehensive search</p>
            <img src="" alt="" />
            <p>
                Access to a vast pool of data, ensuring comprehensive and exhaustive outputs for evidence-based decision-making
            </p>
        </div> 
      </div>
      <div style={{display:"flex",width:"100%",gap:"20px"}}>
        <div className='first-sections' style={{width:"50%",height:"90px",display:'f',backgroundColor:'green'}}>
            Accurately predicts and verifies the sources of your studies, ensuring explainability and citability
        </div>
        <div className='first-sections' style={{width:"50%",height:"90px",display:'f',backgroundColor:'green'}}>
            Trace the origin of every data point down to the finest details. Ensuring transparency and explainability having highest confidence in the results
        </div>
      </div>   
      </div>
    </div>
  );
};

export default KnolensSLR;