import React from 'react';
import '../styles/demographics.css';

function StudentDemographics() {
  const ageData = [
    { range: "18-24", count: 842, percentage: 30 },
    { range: "25-34", count: 1123, percentage: 39 },
    { range: "35-44", count: 562, percentage: 20 },
    { range: "45+", count: 320, percentage: 11 }
  ];

  const genderData = [
    { gender: "Male", count: 1654, percentage: 58 },
    { gender: "Female", count: 1023, percentage: 36 },
    { gender: "Others", count: 170, percentage: 6 }
  ];

  return (
    <div className="demographics-card">
      <div className="card-header flex-between">
        <div>
          <h3>Student Demographics</h3>
          <p className="subtitle">Age, gender & experience level</p>
        </div>
      </div>
      
      <div className="age-section">
        <h4 className="section-title">AGE DISTRIBUTION</h4>
        <div className="age-content">
          <div className="pie-chart-box">
            <div className="pie-placeholder">
              <div className="pie-center">
                <div>2,847</div>
                <div className="center-label">Total</div>
              </div>
            </div>
          </div>
          
          <div className="age-labels">
            {ageData.map((item, index) => (
              <div key={index} className="age-item">
                <div className="age-range">{item.range}</div>
                <div className="age-count">{item.count} ({item.percentage}%)</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="gender-section">
        <h4 className="section-title">GENDER DISTRIBUTION</h4>
        <div className="gender-bars">
          {genderData.map((item, index) => (
            <div key={index} className="gender-item">
              <div className="gender-header flex-between">
                <div className="gender-name">{item.gender}</div>
                <div className="gender-percentage">{item.percentage}%</div>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${item.percentage}%`,
                    backgroundColor: index === 0 ? 'var(--primary-green)' : 
                                   index === 1 ? 'var(--blue)' : 'var(--green)'
                  }}
                ></div>
              </div>
              <div className="gender-count">{item.count} students</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDemographics;