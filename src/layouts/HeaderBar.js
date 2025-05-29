import React from 'react';
import { Layout, Input, Space, Avatar } from 'antd';
import { 
  SettingOutlined, 
  BellOutlined, 
  SearchOutlined, 
  MenuOutlined 
} from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import './Header.css';

const { Header } = Layout;

export default function HeaderBar({ isMobile, onMenuClick }) {
  const location = useLocation();
  const pageTitles = {
    '/transactions': 'Transactions',
    '/accounts': 'Accounts',
    '/investments': 'Investments',
    '/credit-cards': 'Credit Cards',
    '/loans': 'Loans',
    '/services': 'Services',
    '/privileges': 'My Privileges',
    '/setting': 'Setting',
    '/dashboard': 'Dashboard'
  };

  const pageTitle = Object.entries(pageTitles).find(([key]) =>
    location.pathname.startsWith(key)
  )?.[1] || '';

  if (isMobile) {
    return (
      <div className="mobile-header-container">
        <div className="mobile-header-top">
          <div className="mobile-menu-icon" onClick={onMenuClick}>
            <MenuOutlined />
          </div>
          <h3 className="mobile-page-title">{pageTitle}</h3>
          <Avatar 
            src="https://i.pravatar.cc/150?img=3" 
            className="mobile-header-avatar"
          />
        </div>
        <div className="mobile-search-container">
          <Input
            placeholder="Search for something"
            prefix={<SearchOutlined />}
            className="mobile-header-search"
          />
        </div>
      </div>
    );
  }

  return (
    <Header className="header-container">
      <h3 className="page-title">{pageTitle}</h3>
      <div className="header-right">
        <Input
          placeholder="Search for something"
          prefix={<SearchOutlined />}
          className="header-search"
        />
        <Space size="middle" className="header-icons">
          <div className="circle-icon purple">
            <SettingOutlined />
          </div>
          <div className="circle-icon pink">
            <BellOutlined />
          </div>
          <Avatar 
            src="https://i.pravatar.cc/150?img=3" 
            className="header-avatar"
          />
        </Space>
      </div>
    </Header>
  );
}