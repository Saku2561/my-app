import React from 'react';
import './styles/AnatomySection.css';
import anatomyImage from '../assets/anatomy.jpg';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="image-container">
        <img src={anatomyImage} alt="Anatomy" className="anatomy-image" />
        <div className="label heart">❤️ Healthy Heart</div>
        <div className="label leg">🦵 Healthy Leg</div>
      </div>
    </div>
  );
};

export default AnatomySection;
