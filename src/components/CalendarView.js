import React from 'react';
import './styles/calenderView.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const dates = ['25', '26', '27', '28', '29', '30', '31'];

const timeSlots = [
  ['10:00', '08:00', '12:00', '10:00', '14:00', '12:00', '09:00'],
  ['-', '09:00', '-', '-', '-', '14:00', '10:00'],
  ['12:00', '10:00', '13:00', '-', '-', '15:00', '11:00'],
];

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="header">
        <button className="nav-btn">‹</button>
        <h3>October 2021</h3>
        <button className="nav-btn">›</button>
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => (
          <div className="calendar-day" key={index}>
            <div className="day-name">{day}</div>
            <div className="day-date">{dates[index]}</div>
            {timeSlots.map((row, i) => (
              <div
                key={i}
                className={`time-slot ${row[index] === '09:00' ? 'highlight' : ''}`}
              >
                {row[index]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="appointment dentist">
          <h4>🦷 Dentist</h4>
          <p>09:00 - 11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className="appointment physio">
          <h4>💪 Physiotherapy Appointment</h4>
          <p>11:00 - 12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
