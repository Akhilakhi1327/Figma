import React from 'react';
import './EnrollmentTrends.css';

/**
 * Enrollment Trends Component
 * Exact dimensions: 520px × 280px
 * Shows monthly enrollment data with bar chart
 */
const EnrollmentTrends = ({ data, width = '520px', height = '280px' }) => {
  const defaultData = {
    total: 3025,
    completed: 1749,
    applications: 252,
    monthlyData: [
      { month: 'Jan', enrollments: 240 },
      { month: 'Feb', enrollments: 280 },
      { month: 'Mar', enrollments: 320 },
      { month: 'Apr', enrollments: 290 },
      { month: 'May', enrollments: 310 },
      { month: 'Jun', enrollments: 340 },
      { month: 'Jul', enrollments: 360 },
      { month: 'Aug', enrollments: 380 },
      { month: 'Sep', enrollments: 350 },
      { month: 'Oct', enrollments: 330 },
      { month: 'Nov', enrollments: 300 },
      { month: 'Dec', enrollments: 280 }
    ]
  };

  const displayData = data || defaultData;
  const maxEnrollment = Math.max(...displayData.monthlyData.map(m => m.enrollments));

  return (
    <div 
      className="enrollment-trends"
      style={{ 
        width: width,
        height: height
      }}
    >
      <div className="enrollment-header">
        <h3>Enrollment Trends (12 Months)</h3>
        <div className="enrollment-stats">
          <div className="stat-item">
            <span className="stat-label">Total Enrollments</span>
            <span className="stat-value">{displayData.total.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Completed</span>
            <span className="stat-value">{displayData.completed.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Applications</span>
            <span className="stat-value">{displayData.applications.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-bars">
          {displayData.monthlyData.map((monthData, index) => {
            const barHeight = (monthData.enrollments / maxEnrollment) * 120;
            return (
              <div key={index} className="bar-wrapper">
                <div 
                  className="chart-bar"
                  style={{ 
                    height: `${barHeight}px`,
                    background: `linear-gradient(to top, #3B82F6, #60A5FA)`
                  }}
                  title={`${monthData.month}: ${monthData.enrollments} enrollments`}
                >
                  <span className="bar-value">{monthData.enrollments}</span>
                </div>
                <span className="month-label">{monthData.month}</span>
              </div>
            );
          })}
        </div>
        
        <div className="chart-axis">
          <div className="y-axis">
            <span>{maxEnrollment}</span>
            <span>{Math.round(maxEnrollment / 2)}</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentTrends;