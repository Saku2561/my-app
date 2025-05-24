import React from 'react';
import './styles/ActivityFeed.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const barData = [
  [60, 20, 40, 10],
  [50, 30, 10, 25],
  [20, 40, 15, 35],
  [35, 50, 25, 30],
  [60, 80, 30, 20],
  [30, 50, 20, 10],
  [40, 35, 15, 25],
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments on this week</p>
      </div>

      <div className="bar-chart">
        {barData.map((bars, index) => (
          <div className="bar-group" key={index}>
            <div className="bar-row">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar bar-${i}`}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <div className="day-label">{days[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
