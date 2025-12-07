import React from 'react';
import '../styles/revenue.css';

function RevenueBreakdown() {
  const sources = [
    { name: "Course Sales", percentage: 67, amount: "$170,000", color: "var(--blue)" },
    { name: "Live Classes & Workshops", percentage: 23, amount: "$53,743", color: "var(--green)" },
    { name: "One-on-one Mentorship", percentage: 10, amount: "$23,235", color: "var(--orange)" }
  ];

  return (
    <div className="revenue-breakdown-card">
      <div className="revenue-header">
        <div>
          <h3>Revenue Breakdown</h3>
          <p className="subtitle">By revenue source</p>
        </div>
      </div>
      
      <div className="total-revenue-box">
        <div className="total-label">TOTAL REVENUE</div>
        <div className="total-amount">₹2,53,962</div>
        <div className="revenue-change">
          <span className="change-up">↑ 23%</span>
          <span>this quarter</span>
        </div>
      </div>
      
      <div className="sources-list">
        {sources.map((source, index) => (
          <div key={index} className="source-item">
            <div className="source-header">
              <div className="source-name">{source.name}</div>
              <div className="source-percentage">{source.percentage}%</div>
            </div>
            <div className="source-amount">{source.amount}</div>
            <div className="source-label">{source.percentage}% of total</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevenueBreakdown;