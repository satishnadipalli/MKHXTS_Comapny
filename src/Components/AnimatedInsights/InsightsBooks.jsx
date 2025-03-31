import React from 'react';
import './InsightsBooks.css';

const InsightBooks = () => {
    return (
        <div className="container">
            <div className="circle">
                <div className="text">MKTXS<br />AI-generated Insight Books</div>
            </div>
            <div className="item treatment">Treatment Guidelines</div>
            <div className="item pipeline">Pipeline Landscape</div>
            <div className="item hta">HTA Assessment & Therapeutic Performance</div>
            <div className="item unmet">Unmet Needs</div>
            <div className="item disease">Disease Overview</div>
            <div className="item epidemiology">Epidemiology & Disease Burden</div>
        </div>
    );
};

export default InsightBooks;