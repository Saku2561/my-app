import React from 'react';
import './styles/HealthCards.css';

const healthData = [
  {
    icon: '🫁',
    label: 'Lungs',
    date: '26 Okt 2021',
    progress: 80,
    color: '#e74c3c' // red
  },
  {
    icon: '🦷',
    label: 'Teeth',
    date: '26 Okt 2021',
    progress: 100,
    color: '#1abc9c' // green
  },
  {
    icon: '🦴',
    label: 'Bone',
    date: '26 Okt 2021',
    progress: 70,
    color: '#f39c12' // orange
  }
];

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <div className="health-card" key={index}>
          <div className="card-header">
            <span className="emoji">{item.icon}</span>
            <h3>{item.label}</h3>
          </div>
          <p className="card-date">Date: {item.date}</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${item.progress}%`, backgroundColor: item.color }}
            />
          </div>
        </div>
      ))}
      <div className="card-footer">
<button onClick={undefined} className="link-style-button">
 Details <span className="arrow">→</span> 
</button>
      </div>
    </div>
  );
};

export default HealthStatusCards;
