import React from 'react';
import DashboardOverview from './DashboardOverview.js';
import CalendarView from './CalendarView.js';
import UpcomingSchedule from './UpcomingSchedule.js';
import ActivityFeed from './activityFeed.js';
import './styles/dashboardContaint.css'; // Add styling as required


const DashboardMainContent = () => {  
  return (
    <main className="dashboard-main-content">
      <DashboardOverview />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
};

export default DashboardMainContent;
