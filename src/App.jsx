import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardCards from './components/DashboardCards';
import RevenueTrend from './components/RevenueTrend';
import RevenueBreakdown from './components/RevenueBreakdown';
import StudentDemographics from './components/StudentDemographics';
import TopSellingCourses from './components/TopSellingCourses';
import ConversionFunnel from './components/ConversionFunnel';
import LessonTrends from './components/LessonTrends';
import DeviceUsage from './components/DeviceUsage';
import DailyActiveLearners from './components/DailyActiveLearners';
import RecentPurchases from './components/RecentPurchases'; // Add this import
import GeographicDistribution from './components/GeographicDistribution';
import './styles/common.css';

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
        
        {/* Daily Active Learners */}
        <div className="frame-6">
          <DailyActiveLearners />
        </div>
        
        {/* Recent Purchases */}
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