import React from 'react';
import './KnolenSLR.css'; // Importing the CSS file

const KnolensSLR = () => {
  return (
    <div className="slr-container">
      <h1>A powerful platform for rapid and reliable literature reviews at your fingertips</h1>
      <div style={{display:"grid",gap:"20px",placeItems:"center"}}>
      <img src="./newone2.png"  style={{minWidth:"300px",minHeight:"300px",marginTop:"50px",marginBottom:"20px"}} alt="" />
      <h3 style={{fontFamily:"Manrope-SemiBold",marginTop:"30px",marginBottom:40}}>A thorough literature review will be conducted to include literature from credible databases</h3>
      <p style={{backgroundColor:"#076BB2",width:"70%",padding:10,textAlign:"center",color:"white"}}>Our Evidence generation approach (1/2)</p>
      <img src="./slr1.png" alt="" />
      <EvidenceGenerationTable/>
      </div>

    </div>
  );
};

export default KnolensSLR;


const EvidenceGenerationTable = () => {
  return (
    <>
      <style>{`
        .evidence-container {
          max-width: 1200px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          background: white;
          margin-top:50px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .header {
          background: linear-gradient(135deg, #1e5f99 0%, #2980b9 100%);
          color: white;
          text-align: center;
          padding: 16px 20px;
          margin-bottom: 0;
        }

        .header h1 {
          margin: 0;
          font-size: 1.3rem;
          font-weight: bold;
          letter-spacing: 0.5px;
        }

        .table-container {
          overflow-x: auto;
          background: white;
        }

        .evidence-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }

        .evidence-table thead th {
          background: #ffffff;
          padding: 20px 15px;
          text-align: center;
          font-weight: bold;
          color: #1e5f99;
          border-bottom: 3px solid #e0e0e0;
          font-size: 1.1rem;
          position: relative;
        }

        .process-column {
          width: 15%;
          background: white !important;
          border-right: 2px solid #e0e0e0;
        }

        .mktxs-column {
          width: 20%;
          border-right: 2px solid #e0e0e0;
        }

        .reviewer-column {
          width: 20%;
          border-right: 2px solid #e0e0e0;
        }

        .reconciliator-column {
          width: 25%;
          color: #2d9d8f !important;
          text-decoration: underline;
          text-decoration-color: #2d9d8f;
          text-underline-offset: 3px;
        }

        .table-row {
          border-bottom: 2px solid #e0e0e0;
          transition: background-color 0.2s ease;
        }

        .table-row:hover {
          background-color: #f8f9fa;
        }

        .table-row:last-child {
          border-bottom: 3px solid #e0e0e0;
        }

        .process-cell {
          background: #f8f9fa;
          padding: 25px 20px;
          text-align: left;
          vertical-align: middle;
          font-weight: 600;
          color: #555;
        }

        .process-label {
          font-size: 1rem;
          line-height: 1.4;
          color: #666;
        }

        .content-cell {
          padding: 25px 15px;
          text-align: center;
          vertical-align: middle;
          position: relative;
          background: white;
        }

        .content-cell:last-child {
          border-right: none;
        }

        .empty-cell {
          background: white;
        }

        .ai-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 12px;
        }

        .chip-container {
          width: 55px;
          height: 55px;
          border: 2px solid #333;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: white;
          margin-bottom: 8px;
          position: relative;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .chip-container::before {
          content: "";
          position: absolute;
          top: -3px;
          left: 8px;
          right: 8px;
          height: 2px;
          background: repeating-linear-gradient(
            to right,
            #333 0px,
            #333 3px,
            transparent 3px,
            transparent 6px
          );
        }

        .chip-container::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 8px;
          right: 8px;
          height: 2px;
          background: repeating-linear-gradient(
            to right,
            #333 0px,
            #333 3px,
            transparent 3px,
            transparent 6px
          );
        }

        .chip-side-pins {
          position: absolute;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: repeating-linear-gradient(
            to bottom,
            #333 0px,
            #333 3px,
            transparent 3px,
            transparent 6px
          );
        }

        .chip-side-pins.left {
          left: -3px;
        }

        .chip-side-pins.right {
          right: -3px;
        }

        .chip-top {
          font-weight: bold;
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 2px;
        }

        .chip-dots {
          display: flex;
          gap: 3px;
          font-size: 0.7rem;
          color: #666;
        }

        .person-icon {
          width: 55px;
          height: 55px;
          margin: 0 auto 12px;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .person-head {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
        }

        .person-body {
          width: 35px;
          height: 28px;
          border-radius: 18px 18px 0 0;
          position: absolute;
          bottom: 0;
        }

        .reviewer .person-head,
        .reviewer .person-body {
          background: #4a4a4a;
        }

        .reconciliator .person-head,
        .reconciliator .person-body {
          background: #2d9d8f;
        }

        .description {
          font-size: 0.9rem;
          color: #333;
          display: block;
          margin: 0 auto;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .evidence-container {
            margin: 0 10px;
          }

          .header h1 {
            font-size: 1.2rem;
          }

          .evidence-table thead th {
            padding: 15px 10px;
            font-size: 1rem;
          }

          .content-cell {
            padding: 20px 12px;
          }

          .description {
            font-size: 0.85rem;
            max-width: 130px;
          }

          .chip-container {
            width: 50px;
            height: 50px;
          }

          .person-icon {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .table-container {
            overflow-x: scroll;
          }

          .evidence-table {
            min-width: 750px;
          }

          .header h1 {
            font-size: 1.1rem;
            padding: 12px;
          }

          .evidence-table thead th {
            padding: 12px 8px;
            font-size: 0.9rem;
          }

          .content-cell {
            padding: 15px 10px;
          }

          .chip-container {
            width: 45px;
            height: 45px;
          }

          .person-icon {
            width: 45px;
            height: 45px;
          }

          .person-head {
            width: 16px;
            height: 16px;
            top: 6px;
          }

          .person-body {
            width: 30px;
            height: 24px;
          }

          .description {
            font-size: 0.8rem;
            max-width: 110px;
          }

          .process-cell {
            padding: 18px 15px;
          }

          .process-label {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .evidence-container {
            margin: 0 5px;
          }

          .evidence-table {
            min-width: 650px;
          }

          .header {
            padding: 10px 15px;
          }

          .header h1 {
            font-size: 1rem;
          }

          .evidence-table thead th {
            padding: 10px 6px;
            font-size: 0.85rem;
          }

          .content-cell {
            padding: 12px 8px;
          }

          .chip-container {
            width: 40px;
            height: 40px;
          }

          .chip-top {
            font-size: 1rem;
          }

          .chip-dots {
            font-size: 0.6rem;
            gap: 2px;
          }

          .person-icon {
            width: 40px;
            height: 40px;
          }

          .person-head {
            width: 14px;
            height: 14px;
            top: 5px;
          }

          .person-body {
            width: 26px;
            height: 20px;
          }

          .description {
            font-size: 0.75rem;
            max-width: 90px;
          }
        }
      `}</style>

      <div className="evidence-container">
        {/* Header */}
        <div className="header">
          <h1>Our Evidence generation approach (2/2)</h1>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="evidence-table">
            <thead>
              <tr>
                <th className="process-column"></th>
                <th className="mktxs-column">MKTXS SLR</th>
                <th className="reviewer-column">Reviewer₁</th>
                <th className="reviewer-column">Reviewer₂</th>
                <th className="reconciliator-column">Reconciliator</th>
              </tr>
            </thead>
            <tbody>
              {/* Lit Search Row */}
              <tr className="table-row">
                <td className="process-cell">
                  <span className="process-label">Lit Search</span>
                </td>
                <td className="content-cell">
                  <div className="ai-icon">
                    <div className="chip-container">
                      <div className="chip-side-pins left"></div>
                      <div className="chip-side-pins right"></div>
                      <div className="chip-top">AI</div>
                      <div className="chip-dots">
                        <span>•</span>
                        <span>•</span>
                        <span>•</span>
                        <span>•</span>
                      </div>
                    </div>
                  </div>
                  <span className="description">Automated literature search</span>
                </td>
                <td className="content-cell">
                  <div className="person-icon reviewer">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Manual literature search</span>
                </td>
                <td className="content-cell">
                  <div className="person-icon reviewer">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Manual literature search</span>
                </td>
                <td className="content-cell">
                  <div className="person-icon reconciliator">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Reconciliation</span>
                </td>
              </tr>

              {/* Screening Row */}
              <tr className="table-row">
                <td className="process-cell">
                  <span className="process-label">Screening</span>
                </td>
                <td className="content-cell">
                  <div className="ai-icon">
                    <div className="chip-container">
                      <div className="chip-side-pins left"></div>
                      <div className="chip-side-pins right"></div>
                      <div className="chip-top">AI</div>
                      <div className="chip-dots">
                        <span>•</span>
                        <span>•</span>
                        <span>•</span>
                        <span>•</span>
                      </div>
                    </div>
                  </div>
                  <span className="description">First-pass automated screening</span>
                </td>
                <td className="content-cell">
                  <div className="person-icon reviewer">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Second-pass manual screening</span>
                </td>
                <td className="content-cell">
                  <div className="person-icon reviewer">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Second-pass manual screening</span>
                </td>
                <td className="content-cell">
                  <div className="person-icon reconciliator">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Reconciliation</span>
                </td>
              </tr>

              {/* Extraction Row */}
              <tr className="table-row">
                <td className="process-cell">
                  <span className="process-label">Extraction</span>
                </td>
                <td className="content-cell">
                  <div className="ai-icon">
                    <div className="chip-container">
                      <div className="chip-side-pins left"></div>
                      <div className="chip-side-pins right"></div>
                      <div className="chip-top">AI</div>
                      <div className="chip-dots">
                        <span>•</span>
                        <span>•</span>
                        <span>•</span>
                        <span>•</span>
                      </div>
                    </div>
                  </div>
                  <span className="description">Automated extraction</span>
                </td>
                <td className="content-cell">
                  <div className="person-icon reviewer">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Manual Extraction</span>
                </td>
                <td className="content-cell">
                  <div className="person-icon reviewer">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Manual Extraction</span>
                </td>
                <td className="content-cell empty-cell"></td>
              </tr>

              {/* Extraction Validation Row */}
              <tr className="table-row">
                <td className="process-cell">
                  <span className="process-label">
                    Extraction
                    <br />
                    Validation
                  </span>
                </td>
                <td className="content-cell empty-cell"></td>
                <td className="content-cell empty-cell"></td>
                <td className="content-cell empty-cell"></td>
                <td className="content-cell">
                  <div className="person-icon reconciliator">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <span className="description">Manual validation</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

// export default EvidenceGenerationTable
