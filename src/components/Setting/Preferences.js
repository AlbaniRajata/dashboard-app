import React, { useState } from 'react';
import './Preferences.css';

const Preferences = () => {
  const [currency] = useState('USD');
  const [timezone] = useState('(GMT-12:00) International Date Line West');
  const [notifications, setNotifications] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  });

  const handleToggle = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  return (
    <div className="preferences">
      <div className="form-row">
        <div className="form-group">
          <label>Currency</label>
          <div className="form-input read-only">{currency}</div>
        </div>
        <div className="form-group">
          <label>Time Zone</label>
          <div className="form-input read-only">{timezone}</div>
        </div>
      </div>

      <div className="notification-section">
        <label className="section-label">Notification</label>
        <div className="toggle-row">
          <div className="toggle-item">
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.digitalCurrency}
                onChange={() => handleToggle('digitalCurrency')}
              />
              <span className="slider round"></span>
            </label>
            <span>I send or receive digital currency</span>
          </div>

          <div className="toggle-item">
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.merchantOrder}
                onChange={() => handleToggle('merchantOrder')}
              />
              <span className="slider round"></span>
            </label>
            <span>I receive merchant order</span>
          </div>

          <div className="toggle-item">
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.recommendations}
                onChange={() => handleToggle('recommendations')}
              />
              <span className="slider round"></span>
            </label>
            <span>There are recommendations for my account</span>
          </div>
        </div>
      </div>

      <button className="save-button">Save</button>
    </div>
  );
};

export default Preferences;
