import React from 'react';
import AnatomySection from './AnatomySection.js';
import HealthStatusCards from './HealthStatusCards.js';

//import './DashboardOverview.css'; // Add styling as required

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
};

export default DashboardOverview;
