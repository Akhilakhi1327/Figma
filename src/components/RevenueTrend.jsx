import React from 'react';
import '../styles/revenue.css';

function RevenueTrend() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const revenueData = [18, 19.5, 21, 19, 22, 24, 23, 25, 26, 28, 27, 29];
  const maxRevenue = Math.max(...revenueData);
  
 
  const normalizedData = revenueData.map(value => (value / maxRevenue) * 100);
  
  const createCurvePath = () => {
    const width = 800; 
    const height = 200; 
    const pointWidth = width / (normalizedData.length - 1);
    
    let path = `M 0 ${height - (normalizedData[0] / 100) * height}`;
    
    for (let i = 1; i < normalizedData.length; i++) {
      const x = i * pointWidth;
      const y = height - (normalizedData[i] / 100) * height;
      const prevX = (i - 1) * pointWidth;
      const prevY = height - (normalizedData[i - 1] / 100) * height;
      
      const cp1x = prevX + pointWidth * 0.5;
      const cp1y = prevY;
      const cp2x = x - pointWidth * 0.5;
      const cp2y = y;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
    }
    
    return path;
  };

  return (
    <div className="revenue-section">
      <div className="revenue-trend-card">
        <div className="revenue-header flex-between">
          <div>
            <h3>Revenue Trend (12 Months)</h3>
            <p className="subtitle">Monthly revenue performance</p>
          </div>
          <div className="revenue-stats">
            <div className="total">$243.4K</div>
            <div className="monthly">$20.3K/month</div>
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-placeholder">
            <div className="chart-title">Revenue Chart Area</div>
            <div className="chart-grid">
            
              <div className="y-axis">
                <div>$30K</div>
                <div>$25K</div>
                <div>$20K</div>
                <div>$15K</div>
                <div>$10K</div>
                <div>$5K</div>
                <div>$0</div>
              </div>
              
          
              <div className="line-graph-container">
                <svg width="100%" height="100%" viewBox="0 0 850 250" preserveAspectRatio="none">
                 
                  <line x1="0" y1="0" x2="850" y2="0" stroke="var(--light-gray)" strokeWidth="1" />
                  <line x1="0" y1="50" x2="850" y2="50" stroke="var(--light-gray)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1="100" x2="850" y2="100" stroke="var(--light-gray)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1="150" x2="850" y2="150" stroke="var(--light-gray)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1="200" x2="850" y2="200" stroke="var(--light-gray)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1="250" x2="850" y2="250" stroke="var(--light-gray)" strokeWidth="1" />
                  
                  <path 
                    d={createCurvePath() + ` L 850 250 L 0 250 Z`}
                    fill="url(#area-gradient)"
                    opacity="0.2"
                  />
                  
                  <path 
                    d={createCurvePath()}
                    fill="none"
                    stroke="var(--primary-green)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                
                  {normalizedData.map((value, index) => {
                    const x = (index / (normalizedData.length - 1)) * 850;
                    const y = 250 - (value / 100) * 250;
                    
                    return (
                      <g key={index}>
                        <circle 
                          cx={x} 
                          cy={y} 
                          r="6" 
                          fill={index === normalizedData.length - 1 ? "var(--primary-green)" : "var(--primary-green)"}
                          stroke="white"
                          strokeWidth="2"
                          opacity={index === normalizedData.length - 1 ? 1 : 0.8}
                        />
                        
                       
                        <g className="data-point">
                          <circle 
                            cx={x} 
                            cy={y} 
                            r="10" 
                            fill="transparent"
                            className="tooltip-area"
                          />
                          
                         
                          <text 
                            x={x} 
                            y={y - 20} 
                            textAnchor="middle"
                            fill="var(--black)"
                            fontSize="12"
                            fontWeight="600"
                            className="value-label"
                          >
                            ${revenueData[index]}K
                          </text>
                        </g>
                      </g>
                    );
                  })}
                  
                 
                  <defs>
                    <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary-green)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--primary-green)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
      
                <div className="month-labels">
                  {months.map((month, index) => (
                    <div key={index} className="month-label" style={{ 
                      left: `${(index / (months.length - 1)) * 100}%`,
                      transform: 'translateX(-50%)'
                    }}>
                      {month}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueTrend;