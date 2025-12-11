import React from 'react';
import './lesson.css';

function LessonTrends() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const startedData = [1400, 1500, 1650, 1800, 1950, 2100, 2300];
  const completedData = [1200, 1300, 1450, 1600, 1750, 1900, 2100];
  
  const maxValue = Math.max(...startedData, ...completedData);

  return (
    <div className="lesson-card">
      <div className="lesson-header flex-between">
        <div>
          <h3>Lesson Completion Trends</h3>
          <p className="subtitle">Monthly progress tracking</p>
        </div>
        
        <div className="lesson-stats">
          <div className="stat-item">
            <div className="stat-value">2,631</div>
            <div className="stat-label">Total Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">86%</div>
            <div className="stat-label">Completion Rate</div>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-placeholder">
          <div className="chart-title">Lesson Completion Chart</div>
          
          <div className="chart-bars">
            {months.map((month, index) => {
              const startedHeight = (startedData[index] / maxValue) * 100;
              const completedHeight = (completedData[index] / maxValue) * 100;
              
              return (
                <div key={index} className="bar-group">
                  <div className="bar-container">
                    <div 
                      className="bar started" 
                      style={{ height: `${startedHeight}%` }}
                      title={`Started: ${startedData[index]}`}
                    ></div>
                    <div 
                      className="bar completed" 
                      style={{ height: `${completedHeight}%` }}
                      title={`Completed: ${completedData[index]}`}
                    ></div>
                  </div>
                  <div className="month-label">{month}</div>
                </div>
              );
            })}
          </div>
          
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color started"></div>
              <span>Lessons Started</span>
            </div>
            <div className="legend-item">
              <div className="legend-color completed"></div>
              <span>Lessons Completed</span>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default LessonTrends;