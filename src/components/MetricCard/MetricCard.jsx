import React from 'react';
import './MetricCard.css';

const MetricCard = ({ 
  title, 
  value, 
  change, 
  period,
  width = '240px',
  height = '120px',
  color = 'blue'
}) => {
  const colorMap = {
    blue: '#3B82F6',
    green: '#10B981',
    orange: '#F59E0B',
    purple: '#8B5CF6'
  };

  const cardColor = colorMap[color] || color;

  return (
    <div 
      className="metric-card"
      style={{ 
        width: width,
        height: height,
        borderLeft: `4px solid ${cardColor}`
      }}
    >
      <div className="metric-header">
        <h4 className="metric-title">{title}</h4>
        <span className="metric-period">{period}</span>
      </div>
      
      <div className="metric-content">
        <div className="metric-value">{value}</div>
        {change && (
          <div className="metric-change">
            <span className={`change-indicator ${change.startsWith('+') ? 'positive' : 'negative'}`}>
              {change.startsWith('+') ? '↗' : '↘'}
            </span>
            <span className={`change-value ${change.startsWith('+') ? 'positive' : 'negative'}`}>
              {change}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;