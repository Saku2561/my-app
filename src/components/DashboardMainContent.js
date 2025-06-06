import React from 'react';
import CalendarView from './CalendarView.js';
import HealthStatusCards from './HealthStatusCards.js';
import AnatomySection from './AnatomySection.js';
import ActivityFeed from './activityFeed.js';
import Sidebar from './Sidebar';
import './styles/dashboardContaint.css';
import { FaSearch, FaBell } from 'react-icons/fa';
import { Box, Paper, Grid, Stack } from '@mui/material';
import Header from './Header.js';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main-content">
      <Box className="dashboard-container" sx={{ padding: 2 }}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            padding: 2,
          }}
        >
          <Grid container spacing={1}>
            {/* Sidebar - Full height on left */}
            <Grid item xs={12} md={2}>
              <Header />
              <Sidebar />
            </Grid>

        
        {/* Middle Section: Anatomy + Health Cards (side by side), then Activity below */}
<Grid item xs={12} md={6}>
   <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
        <div className="notification-icon">
          <FaBell />
        </div>
      </div>

      <h3>Dashboard</h3>
  <Stack spacing={3}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <AnatomySection />
      </Grid>
      <Grid item xs={12} md={6}>
        <HealthStatusCards />
      </Grid>
    </Grid>
    <ActivityFeed />
  </Stack>
</Grid>


            {/* Right Section: CalendarView & Upcoming Schedule */}
            <Grid item xs={12} md={4}>
              <CalendarView />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </main>
  );
};

export default DashboardMainContent;
