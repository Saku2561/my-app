import React from 'react';
import './styles/UpcomingSchedule.css';

const SimpleAppointmentCard = ({ title, emoji, time }) => {
  return (
    <div className="appointment-card">
      <h5 className="appointment-title">{title} <span className="emoji">{emoji}</span></h5>
      <p className="appointment-time">{time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
