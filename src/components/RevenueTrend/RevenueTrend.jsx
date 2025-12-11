import React, { useMemo, useState, useEffect } from 'react';
import './revenue.css';

function RevenueTrend() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const revenueData = [18,19.5,21,19,22,24,23,25,26,28,27,29];
  const maxRevenue = Math.max(...revenueData);

  const normalizedData = revenueData.map(v => (v / maxRevenue) * 100);

  const SVG_W = 850;
  const SVG_H = 250;

  const [isSmall, setIsSmall] = useState(typeof window !== 'undefined' ? window.innerWidth <= 520 : false);
  useEffect(() => {
    const onResize = () => setIsSmall(window.innerWidth <= 520);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const labelStep = useMemo(() => {
    if (isSmall) return 3;         
    if (window.innerWidth <= 768) return 2; 
    return 1; 
  }, [isSmall]);

  const createCurvePath = () => {
    const width = SVG_W;
    const height = SVG_H;
    const pointWidth = width / (normalizedData.length - 1);

    let path = `M 0 ${height - (normalizedData[0] / 100) * height}`;
    for (let i = 1; i < normalizedData.length; i++) {
      const x = i * pointWidth;
      const y = height - (normalizedData[i] / 100) * height;
      const prevX = (i - 1) * pointWidth;
      const prevY = height - (normalizedData[i - 1] / 100) * height;

      const cp1x = prevX + pointWidth * 0.5;
      const cp1y = prevY;
      const cp2x = x - pointWidth * 0.5;
      const cp2y = y;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
    }
    return path;
  };

  const areaPath = createCurvePath() + ` L ${SVG_W} ${SVG_H} L 0 ${SVG_H} Z`;
  const linePath = createCurvePath();

  return (
    <section className="revenue-section" aria-label="Revenue trend and breakdown">
      <article className="revenue-trend-card">
        <div className="revenue-header flex-between">
          <div>
            <h3>Revenue Trend (12 Months)</h3>
            <p className="subtitle">Monthly revenue performance</p>
          </div>
          <div className="revenue-stats">
            <div className="total">$243.4K</div>
            <div className="monthly">$20.3K/month</div>
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-placeholder">
            <div className="chart-title">Revenue Chart Area</div>

            <div className="chart-grid">
              <div className="y-axis" aria-hidden={isSmall}>
                <div>$30K</div>
                <div>$25K</div>
                <div>$20K</div>
                <div>$15K</div>
                <div>$10K</div>
                <div>$5K</div>
                <div>$0</div>
              </div>

              <div className="line-graph-container" role="img" aria-label="Revenue line chart">
                <svg
                  viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* grid lines */}
                  <line x1="0" y1="0" x2={SVG_W} y2="0" stroke="var(--light-gray)" strokeWidth="1" />
                  <line x1="0" y1={SVG_H * 0.2} x2={SVG_W} y2={SVG_H * 0.2} stroke="var(--light-gray)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1={SVG_H * 0.4} x2={SVG_W} y2={SVG_H * 0.4} stroke="var(--light-gray)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1={SVG_H * 0.6} x2={SVG_W} y2={SVG_H * 0.6} stroke="var(--light-gray)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1={SVG_H * 0.8} x2={SVG_W} y2={SVG_H * 0.8} stroke="var(--light-gray)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1={SVG_H} x2={SVG_W} y2={SVG_H} stroke="var(--light-gray)" strokeWidth="1" />

                  <path d={areaPath} fill="url(#area-gradient)" opacity="0.22" />
                  <path d={linePath} fill="none" stroke="var(--primary-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {normalizedData.map((value, idx) => {
                    const x = (idx / (normalizedData.length - 1)) * SVG_W;
                    const y = SVG_H - (value / 100) * SVG_H;
                    return (
                      <g key={idx} className="data-point" role="group" aria-label={`${months[idx]} ${revenueData[idx]}K`}>
                        <circle cx={x} cy={y} r="6" fill="var(--primary-green)" stroke="white" strokeWidth="2" />
                        <g>
                          <circle cx={x} cy={y} r="10" fill="transparent" className="tooltip-area" />
                          <text x={x} y={y - 18} textAnchor="middle" className="value-label">{`$${revenueData[idx]}K`}</text>
                        </g>
                      </g>
                    );
                  })}

                  <defs>
                    <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary-green)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--primary-green)" stopOpacity="0.08" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="month-labels" aria-hidden="true">
                  {months.map((m, i) => {
                    const show = (i % labelStep) === 0;
                    return (
                      <div
                        key={m}
                        className={`month-label ${show ? 'visible' : 'hidden'}`}
                        style={{ left: `${(i / (months.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}
                      >
                        {show ? m : ''}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <aside className="revenue-breakdown-card" aria-label="Revenue breakdown">
        <div className="total-revenue-box">
          <div className="total-label">Total Revenue</div>
          <div className="total-amount">$243,400</div>
          <div className="revenue-change">
            <div className="change-up">↑ 8.5%</div>
            <div className="total-label">vs last year</div>
          </div>
        </div>

        <div className="sources-list">
          <div className="source-item">
            <div className="source-header">
              <div className="source-name">Course Sales</div>
              <div className="source-percentage">64%</div>
            </div>
            <div className="source-amount">$155,000</div>
            <div className="source-label">Primary revenue stream</div>
          </div>

          <div className="source-item">
            <div className="source-header">
              <div className="source-name">Subscriptions</div>
              <div className="source-percentage">22%</div>
            </div>
            <div className="source-amount">$53,500</div>
            <div className="source-label">Recurring monthly</div>
          </div>

          <div className="source-item">
            <div className="source-header">
              <div className="source-name">Other</div>
              <div className="source-percentage">14%</div>
            </div>
            <div className="source-amount">$34,900</div>
            <div className="source-label">Affiliate & misc</div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default RevenueTrend;
