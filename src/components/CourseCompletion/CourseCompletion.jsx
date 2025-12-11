import React from 'react';
import './CourseCompletion.css';

/**
 * Course Completion Status Component
 * Exact dimensions: 380px × 280px
 * Shows progress bars for different courses
 */
const CourseCompletion = ({ width = '380px', height = '280px' }) => {
  const courses = [
    { name: 'Web Development', enrolled: 850, completed: 680, progress: 80, color: '#3B82F6' },
    { name: 'Data Science', enrolled: 720, completed: 540, progress: 75, color: '#10B981' },
    { name: 'UI/UX Design', enrolled: 620, completed: 465, progress: 75, color: '#F59E0B' },
    { name: 'Mobile Development', enrolled: 480, completed: 336, progress: 70, color: '#8B5CF6' },
    { name: 'DevOps', enrolled: 355, completed: 284, progress: 80, color: '#EC4899' }
  ];

  return (
    <div 
      className="course-completion"
      style={{ 
        width: width,
        height: height
      }}
    >
      <div className="completion-header">
        <h3>Course Completion Status</h3>
        <p className="subtitle">Overall student progress</p>
      </div>
      
      <div className="completion-content">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <div className="course-info">
              <span className="course-name">{course.name}</span>
              <span className="course-stats">
                {course.completed.toLocaleString()}/{course.enrolled.toLocaleString()} completed
              </span>
            </div>
            
            <div className="progress-container">
              <div className="progress-background">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${course.progress}%`,
                    backgroundColor: course.color
                  }}
                ></div>
              </div>
              <span className="progress-percentage">{course.progress}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="completion-summary">
        <div className="summary-item">
          <span className="summary-label">Overall Completion</span>
          <span className="summary-value">76%</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Avg. Progress</span>
          <span className="summary-value">76%</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Active Learners</span>
          <span className="summary-value">1,305</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCompletion;