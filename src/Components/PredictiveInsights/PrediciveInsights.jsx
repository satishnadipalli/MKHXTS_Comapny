import React from "react";
import "./PredictiveInsights.css";

const PredictiveInsights = () => {
  return (
    <div className="predictive-insights-container" style={{width:"100%"}}>
      <h2 className="title">Predictive insights on outcomes acceptance</h2>
      
      <div className="insights-content" style={{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-around"}}>
        <ul className="insights-list">
          <li>Regulatory/HTA endpoint mapping</li>
          <li>Derisk your clinical trial design</li>
          <li>Improve HTA submission success</li>
          <li>Indication-specific insights on endpoint acceptance</li>
        </ul>
        <div className="graph-placeholder">
          <img src="./graph.png" style={{width:"300px"}} alt="Graph Placeholder" />
          <p>Likelihood of acceptance vs Endpoint</p>
        </div>
      </div>

    <div style={{display:"flex",alignItems:"center",flexWrap:'wrap',width:"100%",justifyContent:"space-around",gap:"50px"}}>
    <div className="benchmarking-table" style={{gap:"50px"}}>
        <h3>Comparative Benchmarking</h3>
        <table>
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>FDA</th>
              <th>EMA</th>
              <th>PMDA</th>
              <th>MHRA</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Endpoint 1</td><td>Primary</td><td>Primary</td><td>Primary</td><td>Primary</td></tr>
            <tr><td>Endpoint 2</td><td>Secondary</td><td>Secondary</td><td>Secondary</td><td>Secondary</td></tr>
            <tr><td>Endpoint 3</td><td>Co-primary</td><td>Secondary</td><td>Secondary</td><td>Exploratory</td></tr>
            <tr><td>Endpoint 4</td><td>Secondary</td><td>Exploratory</td><td>Exploratory</td><td>Secondary</td></tr>
            <tr><td>Endpoint 5</td><td>Exploratory</td><td>Secondary</td><td>Secondary</td><td>Exploratory</td></tr>
          </tbody>
        </table>
      </div>
      
      <div className="acceptance-table">
        <h3>Endpoint acceptance by region</h3>
        <img src="./colorcountry.png" style={{height:"250px"}} alt="" />
      </div>
    </div>
    </div>
  );
};

export default PredictiveInsights;
