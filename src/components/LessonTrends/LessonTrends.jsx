import React, { useEffect, useState } from "react";
import "./lesson.css";

function LessonTrends() {
  const months = ["W1", "W2", "W3", "W4", "W5", "W6", "W7"];

  const startedData = [450, 480, 520, 490, 600, 560, 580];
  const completedData = [320, 350, 460, 420, 520, 500, 470];

  const maxValue = Math.max(
    
    ...(startedData.length ? startedData : [0]),
    ...(completedData.length ? completedData : [0])
  );

  useEffect(() => {
    console.log("LessonTrends - months:", months);
    console.log("LessonTrends - startedData:", startedData);
    console.log("LessonTrends - completedData:", completedData);
    console.log("LessonTrends - maxValue:", maxValue);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  const totalCompleted = completedData.reduce((a, b) => a + b, 0);
  const totalStarted = startedData.reduce((a, b) => a + b, 0);
  const completionRate = totalStarted ? Math.round((totalCompleted / totalStarted) * 100) : 0;

  return (
    <div className="lesson-card debug-visible">
      <div className="lesson-header flex-between">
        <div>
          <h3>Lesson Completion Trends</h3>
          <p className="subtitle">Monthly progress tracking</p>
        </div>

        <div className="lesson-stats">
          <div className="stat-item">
            <div className="stat-value">{totalCompleted}</div>
            <div className="stat-label">Total Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{completionRate}%</div>
            <div className="stat-label">Completion Rate</div>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-placeholder debug-placeholder">
          <div className="chart-title">Lesson Completion Chart</div>

          <div className="chart-area">
            <div className="y-gutter" aria-hidden>
              {(() => {
                const ticks = 5;
                const step = Math.ceil(maxValue / ticks);
                const labels = [];
                for (let i = ticks; i >= 0; i--) labels.push(i * step);
                return labels.map((lbl, idx) => (
                  <div key={idx} className="label">
                    {lbl}
                  </div>
                ));
              })()}
            </div>

            <div className="chart-bars-wrapper">
              <div className="chart-bars">
                {months.map((month, index) => {
                 
                  const startedH = Math.round((startedData[index] / maxValue) * 100);
                  const completedH = Math.round((completedData[index] / maxValue) * 100);

                  
                  const startedHeightStyle = mounted ? `${Math.max(startedH, 4)}%` : "0%";
                  const completedHeightStyle = mounted ? `${Math.max(completedH, 6)}%` : "0%";

                  return (
                    <div key={index} className="bar-group">
                      <div className="bar-container">
                        <div
                          className="bar started"
                          style={{ height: startedHeightStyle }}
                          title={`Started: ${startedData[index]}`}
                        />
                        <div
                          className="bar completed"
                          style={{ height: completedHeightStyle }}
                          title={`Completed: ${completedData[index]}`}
                        />
                      </div>
                      <div className="month-label">{month}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color started" />
              <span>Lessons started</span>
            </div>
            <div className="legend-item">
              <div className="legend-color completed" />
              <span>Lessons completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonTrends;
