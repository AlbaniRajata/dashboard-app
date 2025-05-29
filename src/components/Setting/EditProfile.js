import React from 'react';
import { Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './EditProfile.css';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <div className="profile-avatar">
        <Avatar 
          src="https://i.pravatar.cc/150?img=3" 
          size={100} 
        />
        <div className="edit-icon">
          <EditOutlined />
        </div>
      </div>
      <form className="profile-form">
        <div className="form-row read">
          <div className="form-group">
            <label>Your Name</label>
            <div className="form-input read-only">Charlene Reed</div>
          </div>
          <div className="form-group">
            <label>User Name</label>
            <div className="form-input read-only">Charlene Reed</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <div className="form-input read-only">charlenereed@gmail.com</div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="form-input read-only">********</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth</label>
            <div className="form-input read-only">25 January 1990</div>
          </div>
          <div className="form-group">
            <label>Present Address</label>
            <div className="form-input read-only">San Jose, California, USA</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Permanent Address</label>
            <div className="form-input read-only">San Jose, California, USA</div>
          </div>
          <div className="form-group">
            <label>City</label>
            <div className="form-input read-only">San Jose</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Postal Code</label>
            <div className="form-input read-only">45962</div>
          </div>
          <div className="form-group">
            <label>Country</label>
            <div className="form-input read-only">USA</div>
          </div>
        </div>
        <button type="submit" className="save-button" disabled>Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
