import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Sidebar from './Sidebar';
import HeaderBar from './HeaderBar';

const { Content } = Layout;

export default function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar 
        isMobile={isMobile} 
        visible={sidebarVisible} 
        onClose={() => setSidebarVisible(false)} 
      />
      <Layout className="site-layout">
        <HeaderBar 
          isMobile={isMobile} 
          onMenuClick={toggleSidebar}
        />
        <Content className={`layout-content ${isMobile ? 'mobile' : ''}`}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}