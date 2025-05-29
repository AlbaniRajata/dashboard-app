import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className="service-card">
      <div className="service-icon" style={{ backgroundColor: bgColor }}>
        {icon}
      </div>
      <div className="text-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;