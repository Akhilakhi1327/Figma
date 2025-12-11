import React from 'react';
import "./geographicdistribution.css";  

const GeographicDistribution = () => {
  const statesData = [
    {
      id: 1,
      name: "Andhra Pradesh",
      percentage: "30%",
      students: "847 students",
      colorClass: "andhra-pradesh"
    },
    {
      id: 2,
      name: "Telangana",
      percentage: "30%",
      students: "847 students",
      colorClass: "telangana"
    },
    {
      id: 3,
      name: "Kerala",
      percentage: "05%",
      students: "847 students",
      colorClass: "kerala"
    },
    {
      id: 4,
      name: "Maharashtra",
      percentage: "10%",
      students: "847 students",
      colorClass: "maharashtra"
    },
    {
      id: 5,
      name: "Tamilnadu",
      percentage: "15%",
      students: "847 students",
      colorClass: "tamilnadu"
    },
    {
      id: 6,
      name: "Karnataka",
      percentage: "10%",
      students: "847 students",
      colorClass: "karnataka"
    }
  ];

  return (
    <div className="geographic-distribution-container">

      <div className="geographic-distribution-header">
        <h2 className="geographic-distribution-title">Geographic Distribution</h2>
        <p className="geographic-distribution-subtitle">Students by states</p>
      </div>


      <div className="total-students-card">
        <h3 className="total-students-title">TOTAL STUDENTS ACROSS INDIA</h3>
        <div className="total-students-value">2,847</div>
        <div className="total-students-growth">
          <span className="growth-value">↗ 23%</span>
          <span className="growth-label">this quarter</span>
        </div>
      </div>

      {/* States Grid */}
      <div className="states-grid">
        {statesData.map((state) => (
          <div key={state.id} className={`state-card ${state.colorClass}`}>
            <div className="state-header">
              <h4 className="state-name">{state.name}</h4>
              <span className="state-percentage">{state.percentage}</span>
            </div>
            <div className="state-content">
              <p className="student-count">{state.students}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: state.percentage }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GeographicDistribution;