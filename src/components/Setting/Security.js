import React, { useState } from 'react';
import './Security.css';

const Security = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const handleToggle2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('2FA status:', twoFactorEnabled);
  };

  return (
    <form className="security" onSubmit={handleSubmit}>
      {/* Two-factor Authentication */}
      <div className="form-group">
        <label className="section-label">Two-factor Authentication</label>
        <div className="toggle-item">
          <label className="switch">
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={handleToggle2FA}
            />
            <span className="slider round"></span>
          </label>
          <span>Enable or disable two factor authentication</span>
        </div>
      </div>

      {/* Change Password */}
      <div className="form-group">
        <label className="section-label">Change Password</label>
        <label className="input-label">Current Password</label>
        <div className="form-input read-only">********</div>

        <label className="input-label">New Password</label>
        <div className="form-input read-only">********</div>
      </div>

      <button type="submit" className="save-button">Save</button>
    </form>
  );
};

export default Security;
