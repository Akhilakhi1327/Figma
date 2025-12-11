import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import DashboardCards from "./components/DashboardCards/DashboardCards";
import RevenueTrend from "./components/RevenueTrend/RevenueTrend";
import RevenueBreakdown from "./components/RevenueBreakdown/RevenueBreakdown";
import StudentDemographics from "./components/StudentDemographics/StudentDemographics";
import TopSellingCourses from "./components/TopSellingCourses/TopSellingCourses";
import ConversionFunnel from "./components/ConversionFunnel/ConversionFunnel";
import LessonTrends from "./components/LessonTrends/LessonTrends";
import DeviceUsage from "./components/DeviceUsage/DeviceUsage";
import DailyActiveLearners from "./components/DailyActiveLearners/DailyActiveLearners";
import RecentPurchases from "./components/RecentPurchases/RecentPurchases";
import GeographicDistribution from "./components/GeographicDistribution/GeographicDistribution";

import "./styles/common.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 992 : true
  );

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);

      if (desktop) setSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(s => !s);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={`app-container ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={sidebarOpen} isDesktop={isDesktop} onClose={closeSidebar} />

      <main className="main-content" role="main" aria-live="polite">
        <div className="content-inner">
          <Header onToggleSidebar={toggleSidebar} isDesktop={isDesktop} />

          <section className="row frame-1">
            <div className="col col--full">
              <DashboardCards />
            </div>
          </section>

          <section className="frame-2 full-width-section">
            <RevenueTrend />
          </section>

\          <section className="row frame-2b two-col-below">
            <div className="col col--flex col--below-left">
              <RevenueBreakdown />
            </div>

\            <div className="col col--aside col--below-right">
              <div className="summary-card">
                <div className="summary-header">TOTAL REVENUE</div>
                <div className="summary-amount">$243,400</div>
                <div className="summary-change">↑ 8.5% vs last year</div>

                <div className="summary-list">
                  <div className="summary-item">
                    <div className="summary-item-left">
                      <div className="dot blue" />
                      <div>Course Sales</div>
                    </div>
                    <div className="summary-item-right">
                      <div className="amount">$155,000</div>
                      <div className="percent">64%</div>
                    </div>
                  </div>

                  <div className="summary-item">
                    <div className="summary-item-left">
                      <div className="dot green" />
                      <div>Subscriptions</div>
                    </div>
                    <div className="summary-item-right">
                      <div className="amount">$53,500</div>
                      <div className="percent">22%</div>
                    </div>
                  </div>

                  <div className="summary-item">
                    <div className="summary-item-left">
                      <div className="dot orange" />
                      <div>Other</div>
                    </div>
                    <div className="summary-item-right">
                      <div className="amount">$34,900</div>
                      <div className="percent">14%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="row frame-3">
            <div className="col col--flex">
              <StudentDemographics />
            </div>
            <div className="col col--aside">
              <TopSellingCourses />
            </div>
          </section>

\          <section className="row frame-4">
            <div className="col col--full">
              <ConversionFunnel />
            </div>
          </section>

          <section className="row frame-5">
            <div className="col col--flex">
              <LessonTrends />
            </div>
            <div className="col col--aside">
              <DeviceUsage />
            </div>
          </section>

\          <section className="row frame-6">
            <div className="col col--full">
              <DailyActiveLearners />
            </div>
          </section>

          <section className="row frame-7">
            <div className="col col--full">
              <RecentPurchases />
            </div>
          </section>

          <section className="row frame-8">
            <div className="col col--full">
              <GeographicDistribution />
            </div>
          </section>
        </div>
      </main>

\      <div
        className={`overlay ${!isDesktop && sidebarOpen ? "overlay--visible" : ""}`}
        onClick={closeSidebar}
        aria-hidden={isDesktop || !sidebarOpen}
      />
    </div>
  );
}

export default App;
