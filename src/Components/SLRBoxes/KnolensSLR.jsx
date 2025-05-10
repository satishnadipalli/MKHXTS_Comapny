import React from 'react';
import './KnolenSLR.css'; // Importing the CSS file

const KnolensSLR = () => {
  return (
    <div className="slr-container">
      <h1>A fully automated SLR platform at your fingertips</h1>
      <div style={{display:"grid",gap:"20px",placeItems:"center"}}>
      {/* <div className='first-sections'>
        <div style={{backgroundColor:"rgb(7, 107,178)"}}>
            <p>Design efficiency</p>
            <img src="" alt="" />
            <p>
                Explore a wide range of scenarios and alternative search criteria, 
                accelerating the optimization of study design and fine-tune strategies
            </p>
        </div> 
        <div className='second-sections'>
            <div style={{backgroundColor:"rgb(27,173 ,153)"}}>
                <p>95% Accuracy</p>
                <img src="" alt="" />
            </div>
            <div style={{backgroundColor:"rgb(75, 80, 88)"}}>
                <p>Minimal Bias</p>
                <img src="" alt="" />
            </div>
        </div>
        <div style={{backgroundColor:"rgb(52, 59, 91)"}}>
            <p>Accelerate your data extraction time</p>
            <img src="" alt="" />
            <p>
                Provides researchers with immediate EXTRACTION of the data for each investigation
            </p>
        </div> 
        <div className='second-sections'>
            <div style={{backgroundColor:"rgb(75, 80, 88)"}}>
                <p>Cost savings</p>
                <img src="" alt="" />
            </div>
            <div style={{backgroundColor:"rgb(27,173 ,153)"}}>
                <p>Flexibility</p>
                <img src="" alt="" />
            </div>
        </div>
        <div style={{backgroundColor:"rgb(7, 107,178)"}}>
            <p>Comprehensive search</p>
            <img src="" alt="" />
            <p>
                Access to a vast pool of data, ensuring comprehensive and exhaustive outputs for evidence-based decision-making
            </p>
        </div> 
      </div> */}
       {/* <div style={{display:"flex",width:"100%",gap:"10px",margin:"auto",justifyContent:"center"}}>
        <div className='first-sections' style={{width:"42%",padding:"10px",height:"90px",display:'flex',alignItems:"center",justifyContent:"center",backgroundColor:"rgb(27,173 ,153)"}}>
            Accurately predicts and verifies the sources of your studies, ensuring explainability and citability
        </div>
        <div className='first-sections' style={{width:"42%",padding:"10px",height:"90px",display:'flex',alignItems:"center",justifyContent:"center",backgroundColor:"rgb(75, 80, 88)"}}>
            Trace the origin of every data point down to the finest details. Ensuring transparency and explainability having highest confidence in the results
        </div>
      </div>    */}
      <img src="./customslr.png"  style={{minWidth:"300px",minHeight:"300px",marginTop:"50px",marginBottom:"20px"}} alt="" />
     
      </div>
    </div>
  );
};

export default KnolensSLR;