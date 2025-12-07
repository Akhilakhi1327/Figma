import React from 'react';
import '../styles/dailyLearners.css';

function DailyActiveLearners() {
  const weeklyData = [
    { day: 'Mon', count: 1200 },
    { day: 'Tue', count: 1800 },
    { day: 'Wed', count: 1650 },
    { day: 'Thu', count: 2100 },
    { day: 'Fri', count: 1950 },
    { day: 'Sat', count: 1350 },
    { day: 'Sun', count: 900 }
  ];

  // Y-axis values
  const yAxisValues = [0, 450, 900, 1350, 1800, 2250];

  // Generate SVG path for curve
  const generateCurvePath = () => {
    const points = weeklyData.map((item, index) => {
      const x = 50 + (index * 100); // Spacing
      const y = 250 - (item.count / 2250 * 200); // Scale to fit height
      return `${x},${y}`;
    });

    // Create smooth curve using C commands
    let path = `M ${points[0]}`;
    
    for (let i = 1; i < points.length; i++) {
      const prevX = parseInt(points[i-1].split(',')[0]);
      const prevY = parseInt(points[i-1].split(',')[1]);
      const currX = parseInt(points[i].split(',')[0]);
      const currY = parseInt(points[i].split(',')[1]);
      
      const control1X = prevX + 30;
      const control1Y = prevY;
      const control2X = currX - 30;
      const control2Y = currY;
      
      path += ` C ${control1X},${control1Y} ${control2X},${control2Y} ${currX},${currY}`;
    }
    
    return path;
  };

  return (
    <div className="daily-learners-container">
      {/* Outer Box */}
      <div className="daily-learners-outer-box">
        
        {/* Header Section */}
        <div className="learners-header">
          <div className="header-left">
            <h3 className="learners-title">Daily Active Learners</h3>
            <p className="learners-period">This Week</p>
          </div>
          <div className="header-right">
            <div className="total-count">
              <span className="count-value">9,359</span>
              <span className="count-label">Active Now 1,842</span>
            </div>
            <div className="new-today">
              <span className="new-value">327</span>
              <span className="new-label">New Today</span>
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="learners-graph-box">
          {/* Y-axis Labels */}
          <div className="y-axis">
            {yAxisValues.map((value) => (
              <div key={value} className="y-label">
                {value}
              </div>
            ))}
          </div>

          {/* Graph Area */}
          <div className="graph-area">
            {/* Grid Lines */}
            <div className="grid-lines">
              {yAxisValues.map((_, index) => (
                <div key={index} className="grid-line"></div>
              ))}
            </div>

            {/* SVG Curve Graph */}
            <div className="curve-graph">
              <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="none">
                {/* Grid Lines */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line 
                    key={`grid-${i}`}
                    x1="50" 
                    y1={50 + (i * 40)} 
                    x2="750" 
                    y2={50 + (i * 40)} 
                    stroke="#E5E7EB" 
                    strokeWidth="1"
                    strokeDasharray="4,2"
                  />
                ))}

                {/* X-axis */}
                <line 
                  x1="50" 
                  y1="250" 
                  x2="750" 
                  y2="250" 
                  stroke="#374151" 
                  strokeWidth="2"
                />

                {/* Y-axis */}
                <line 
                  x1="50" 
                  y1="50" 
                  x2="50" 
                  y2="250" 
                  stroke="#374151" 
                  strokeWidth="2"
                />

                {/* Main Curve */}
                <path 
                  d={generateCurvePath()}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  className="main-curve-line"
                />

                {/* Data Points */}
                {weeklyData.map((item, index) => {
                  const x = 50 + (index * 100);
                  const y = 250 - (item.count / 2250 * 200);
                  return (
                    <g key={`point-${index}`}>
                      <circle 
                        cx={x} 
                        cy={y} 
                        r="4" 
                        fill="#10B981"
                        className="data-point"
                      />
                      <circle 
                        cx={x} 
                        cy={y} 
                        r="8" 
                        fill="#10B981"
                        fillOpacity="0.2"
                        className="data-point-glow"
                      />
                    </g>
                  );
                })}

                {/* Area under curve */}
                <path 
                  d={`${generateCurvePath()} L 750,250 L 50,250 Z`}
                  fill="url(#areaGradient)"
                  fillOpacity="0.1"
                  className="curve-area"
                />
              </svg>

              {/* Gradient for area under curve */}
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>
            </div>

            {/* X-axis Labels (Week Days) */}
            <div className="x-axis">
              {weeklyData.map((item) => (
                <div key={item.day} className="x-label">
                  {item.day}
                </div>
              ))}
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
}

export default DailyActiveLearners;