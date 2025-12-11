import React from 'react';
import './RevenueChart.css';

const RevenueChart = ({ data, timeframe }) => {
  if (!data || data.length === 0) {
    return (
      <div className="revenue-chart">
        <h3>Revenue Breakdown</h3>
        <p>No revenue data available</p>
      </div>
    );
  }

  return (
    <div className="revenue-chart">
      <div className="chart-header">
        <h3>Revenue Breakdown</h3>
        <span>{timeframe}</span>
      </div>
      
      <div className="chart-content">
        {data.map((item, index) => (
          <div key={index} className="revenue-item">
            <div className="revenue-source">
              <span className="source-color" style={{ backgroundColor: item.color }}></span>
              <span>{item.source}</span>
            </div>
            <div className="revenue-details">
              <span>${item.amount.toLocaleString()}</span>
              <span>{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;