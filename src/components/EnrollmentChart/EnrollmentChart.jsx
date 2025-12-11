import React from 'react';
import './EnrollmentChart.css';

const EnrollmentChart = ({ data, timeframe }) => {
  if (!data) {
    return (
      <div className="enrollment-chart">
        <h3>Enrollment Trends</h3>
        <p>No enrollment data available</p>
      </div>
    );
  }

  return (
    <div className="enrollment-chart">
      <h3>Enrollment Trends ({timeframe})</h3>
      
      <div className="enrollment-stats">
        <div className="stat-item">
          <span>Total Enrollments</span>
          <span>{data.total.toLocaleString()}</span>
        </div>
        
        <div className="stat-item">
          <span>Completed</span>
          <span>{data.completed.toLocaleString()}</span>
        </div>
        
        <div className="stat-item">
          <span>Applications</span>
          <span>{data.applications.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentChart;