import React from "react";

// Fixed import paths - assuming your folder structure
import Sidebar from "./components/Sidebar/Sidebar";                      
import Header from "./components/Header/Header";
import DashboardCards from "./components/DashboardCards/DashboardCards"; // Fixed
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
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="frame-1">
          <DashboardCards />
        </div>

        <div className="frame-2">
          <RevenueTrend />
          <RevenueBreakdown />
        </div>

        <div className="frame-3">
          <StudentDemographics />
          <TopSellingCourses />
        </div>

        <div className="frame-4">
          <ConversionFunnel />
        </div>

        <div className="frame-5">
          <LessonTrends />
          <DeviceUsage />
        </div>

        <div className="frame-6">
          <DailyActiveLearners />
        </div>

        <div className="frame-7">
          <RecentPurchases />
        </div>

        <div className="frame-8">
          <GeographicDistribution />
        </div>
      </div>
    </div>
  );
}

export default App;