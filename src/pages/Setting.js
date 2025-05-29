// src/pages/Setting.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/setting.css';

const Setting = () => {
  return (
    <div className="setting-page">
      <div className="setting-section">
        <div className="setting-tabs">
          <NavLink
            to="edit-profile"
            className={({ isActive }) => `tab-button ${isActive ? 'active' : ''}`}
          >
            Edit Profile
          </NavLink>
          <NavLink
            to="preferences"
            className={({ isActive }) => `tab-button ${isActive ? 'active' : ''}`}
          >
            Preferences
          </NavLink>
          <NavLink
            to="security"
            className={({ isActive }) => `tab-button ${isActive ? 'active' : ''}`}
          >
            Security
          </NavLink>
        </div>
        <div className="tab-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Setting;
