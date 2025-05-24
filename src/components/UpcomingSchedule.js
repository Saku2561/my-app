import React from 'react';
import SimpleAppointmentCard from './simpleAppointmentCard';
import './styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-heading">The Upcoming Schedule</h3>
      <div className="day-schedule">
        <h4 className="day-heading">On Thursday</h4>
        <div className="card-row">
          <SimpleAppointmentCard title="Health checkup complete" emoji="💉" time="11:00 AM" />
          <SimpleAppointmentCard title="Ophthalmologist" emoji="👁️" time="14:00 PM" />
        </div>

        <h4 className="day-heading">On Saturday</h4>
        <div className="card-row">
          <SimpleAppointmentCard title="Cardiologist" emoji="❤️" time="12:00 AM" />
          <SimpleAppointmentCard title="Neurologist" emoji="🧠" time="16:00 PM" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
