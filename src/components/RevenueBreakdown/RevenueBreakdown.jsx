import React from 'react';
import './RevenueBreakdown.css';

/**
 * Revenue Breakdown Component
 * Exact dimensions from Figma: 520px × 320px
 * Position: Top 128px, Left 274px
 */
const RevenueBreakdown = ({ data, total, width = '520px', height = '320px', top = '128px', left = '274px' }) => {
  const defaultData = [
    { source: 'Course Sales', amount: 163962, percentage: 64, color: '#3B82F6' },
    { source: 'Live Classes & Workshops', amount: 53743, percentage: 21, color: '#10B981' },
    { source: 'One on one mentorship', amount: 23235, percentage: 9, color: '#F59E0B' },
    { source: 'Other', amount: 13022, percentage: 5, color: '#8B5CF6' }
  ];

  const displayData = data || defaultData;

  return (
    <div 
      className="revenue-breakdown"
      style={{ 
        width: width,
        height: height,
        marginTop: top,
        marginLeft: left
      }}
    >
      <div className="revenue-header">
        <div className="header-left">
          <h3>Revenue Breakdown</h3>
          <p className="subtitle">By revenue source</p>
        </div>
        <div className="header-right">
          <span className="total-label">TOTAL REVENUE</span>
          <span className="total-amount">{total || '$253,962'}</span>
        </div>
      </div>
      
      <div className="revenue-content">
        {displayData.map((item, index) => (
          <div key={index} className="revenue-item" style={{ borderLeftColor: item.color }}>
            <div className="item-left">
              <div className="color-indicator" style={{ backgroundColor: item.color }}></div>
              <span className="source-name">{item.source}</span>
            </div>
            <div className="item-right">
              <span className="source-amount">${item.amount.toLocaleString()}</span>
              <span className="source-percentage">{item.percentage}% of total</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="revenue-footer">
        <div className="percentage-bar">
          {displayData.map((item, index) => (
            <div 
              key={index}
              className="percentage-segment"
              style={{ 
                width: `${item.percentage}%`,
                backgroundColor: item.color
              }}
            ></div>
          ))}
        </div>
        <div className="percentage-labels">
          {displayData.map((item, index) => (
            <span key={index} className="percentage-label">
              {item.percentage}%
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueBreakdown;