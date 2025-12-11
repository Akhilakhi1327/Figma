import React from 'react';
import './DashboardHeader.css';


const DashboardHeader = ({ title, timeframe, onTimeframeChange }) => {
  const timeOptions = [
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '12m', label: 'Last 12 Months' }
  ];

  return (
    <div className="dashboard-header">
      <div className="header-left">
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">Automation Insights Dashboard</p>
      </div>
      
      <div className="header-right">
        <div className="timeframe-selector">
          <label>Time Period:</label>
          <select
            value={timeframe}
            onChange={(e) => onTimeframeChange(e.target.value)}
          >
            {timeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <button className="refresh-button">
          <span>↻</span>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;