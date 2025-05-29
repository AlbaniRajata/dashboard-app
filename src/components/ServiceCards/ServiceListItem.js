import React from 'react';
import './ServiceListItem.css';

const ServiceListItem = ({ icon, title, description, color, details }) => {
  return (
    <div className="service-list-item">
      <div className="service-item-info">
        <div className="service-item-icon" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div className="service-item-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      
      <div className="service-details-grid">
        {details.map((text, idx) => (
          <div key={idx} className="detail-column">
            <h5>Lorem Ipsum</h5>
            <p>Many publishing</p>
          </div>
        ))}
      </div>
      
      <button className="service-item-button">View Details</button>
    </div>
  );
};

export default ServiceListItem;