import React from 'react';
import { MdCreditCard, MdLockOutline } from 'react-icons/md';
import { FaGoogle, FaApple } from 'react-icons/fa';
import './CardSettings.css';

const settingsData = [
  {
    icon: <MdCreditCard className="setting-icon" style={{ backgroundColor: '#FFEACC', color: '#FFAE1F' }} />,
    title: 'Block Card',
    description: 'Instantly block your card',
  },
  {
    icon: <MdLockOutline className="setting-icon" style={{ backgroundColor: '#E7EDFF', color: '#5570F1' }} />,
    title: 'Change Pin Code',
    description: 'Choose another pin code',
  },
  {
    icon: <FaGoogle className="setting-icon" style={{ backgroundColor: '#FFECEF', color: '#F5317F' }} />,
    title: 'Add to Google Pay',
    description: 'Withdraw without any card',
  },
  {
    icon: <FaApple className="setting-icon" style={{ backgroundColor: '#DDF7E3', color: '#28C76F' }} />,
    title: 'Add to Apple Pay',
    description: 'Withdraw without any card',
  },
  {
    icon: <FaApple className="setting-icon" style={{ backgroundColor: '#DDF7E3', color: '#28C76F' }} />,
    title: 'Add to Apple Store',
    description: 'Withdraw without any card',
  },
];

export default function CardSettings() {
  return (
    <div className="card-settings-section">
      <h2 className="section-title">Card Setting</h2>
      <div className="settings-container">
        {settingsData.map((item, index) => (
          <div className="setting-item" key={index}>
            {item.icon}
            <div className="setting-text">
              <div className="setting-title">{item.title}</div>
              <div className="setting-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
