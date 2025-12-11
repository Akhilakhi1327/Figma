import React from 'react';
import './StudentDemographics.css';

/**
 * Student Demographics Component
 * Exact dimensions: 380px × 320px
 * Shows age distribution with exact measurements
 */
const StudentDemographics = ({ data, width = '380px', height = '320px' }) => {
  const defaultData = {
    ageGroups: [
      { range: '18-24', count: 850, percentage: 28, color: '#3B82F6' },
      { range: '25-34', count: 1200, percentage: 40, color: '#10B981' },
      { range: '35-44', count: 650, percentage: 21, color: '#F59E0B' },
      { range: '45+', count: 325, percentage: 11, color: '#8B5CF6' }
    ],
    total: 3025
  };

  const displayData = data || defaultData;

  return (
    <div 
      className="student-demographics"
      style={{ 
        width: width,
        height: height
      }}
    >
      <div className="demographics-header">
        <h3>Student Demographics</h3>
        <p className="subtitle">Age, gender & experience level</p>
      </div>
      
      <div className="demographics-content">
        <div className="age-distribution">
          <h4>Age Distribution</h4>
          {displayData.ageGroups.map((group, index) => (
            <div key={index} className="age-group">
              <div className="age-info">
                <span className="age-range">{group.range}</span>
                <span className="age-count">{group.count.toLocaleString()}</span>
              </div>
              <div className="age-bar-container">
                <div className="age-bar-background">
                  <div 
                    className="age-bar-fill"
                    style={{ 
                      width: `${group.percentage}%`,
                      backgroundColor: group.color
                    }}
                  ></div>
                </div>
                <span className="age-percentage">{group.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="demographics-summary">
          <div className="total-students">
            <span className="total-label">Total Students</span>
            <span className="total-value">{displayData.total.toLocaleString()}</span>
          </div>
          
          <div className="gender-distribution">
            <h4>Gender Ratio</h4>
            <div className="gender-bars">
              <div className="gender-bar male">
                <div className="bar-fill" style={{ width: '58%' }}></div>
                <span className="gender-label">Male: 58%</span>
              </div>
              <div className="gender-bar female">
                <div className="bar-fill" style={{ width: '42%' }}></div>
                <span className="gender-label">Female: 42%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDemographics;