import React, { useState } from 'react';
import './courses.css';

function TopSellingCourses() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const courses = [
    {
      title: "Advanced React Development",
      category: "Web Development",
      rating: 4.8,
      price: "$129.99",
      revenue: "$65,420",
      students: 1240,
      color: "#6366F1"
    },
    {
      title: "UI/UX Design Masterclass",
      category: "Design",
      rating: 4.8,
      price: "$149.99",
      revenue: "$58,743",
      students: 980,
      color: "#EC4899"
    },
    {
      title: "Digital Marketing Strategy",
      category: "Marketing",
      rating: 4.8,
      price: "$99.99",
      revenue: "$45,235",
      students: 1120,
      color: "#F59E0B"
    },
    {
      title: "Python for Data Science",
      category: "Data Science",
      rating: 4.8,
      price: "$179.99",
      revenue: "$72,156",
      students: 890,
      color: "#10B981"
    },
    {
      title: "Mobile App Development",
      category: "Mobile Dev",
      rating: 4.8,
      price: "$159.99",
      revenue: "$53,847",
      students: 760,
      color: "#8B5CF6"
    }
  ];

  const categories = ['all', 'Web Development', 'Design', 'Marketing', 'Data Science', 'Mobile Dev'];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <div className="courses-card">
      <div className="courses-header flex-between">
        <div>
          <h3>Top Selling Courses</h3>
          <p className="subtitle">Based on revenue performance</p>
        </div>
        <div className="view-only">View only</div>
      </div>
      
      <div className="courses-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category === 'all' ? 'All' : category}
          </button>
        ))}
      </div>
      
      <div className="courses-list">
        {filteredCourses.map((course, index) => (
          <div key={index} className="course-item">
            <div className="course-info">
              <div className="course-category" style={{ color: course.color }}>
                {course.category}
              </div>
              <div className="course-title">{course.title}</div>
              <div className="course-rating">
                <span className="stars">★★★★★</span>
                <span className="rating">{course.rating}</span>
              </div>
            </div>
            <div className="course-price">{course.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSellingCourses;