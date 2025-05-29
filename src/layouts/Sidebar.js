import { Layout, Menu, Drawer } from 'antd';
import {
  HomeFilled,
  SwapOutlined,
  CreditCardFilled,
  SettingFilled,
  CrownFilled,
  StockOutlined
} from '@ant-design/icons';
import './Sidebar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdPerson2 } from 'react-icons/md';
import { FaHandHoldingUsd, FaTools } from 'react-icons/fa';

const { Sider } = Layout;

export default function Sidebar({ isMobile, visible, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { key: '/dashboard', icon: <HomeFilled />, label: 'Dashboard' },
    { key: '/transactions', icon: <SwapOutlined />, label: 'Transactions' },
    { key: '/accounts', icon: <MdPerson2 />, label: 'Accounts' },
    { key: '/investments', icon: <StockOutlined />, label: 'Investments' },
    { key: '/credit-cards', icon: <CreditCardFilled />, label: 'Credit Cards' },
    { key: '/loans', icon: <FaHandHoldingUsd />, label: 'Loans' },
    { key: '/services', icon: <FaTools />, label: 'Services' },
    { key: '/privileges', icon: <CrownFilled />, label: 'My Privileges' },
    { key: '/setting', icon: <SettingFilled />, label: 'Setting' },
  ];

  const getSelectedKey = (path) => {
    if (path.startsWith('/setting')) return '/setting';
    return items.find(item => path === item.key)?.key || '';
  };

  const sidebarContent = (
    <div>
      <div className="sidebar-logo">
        <img src="/assets/logo.png" alt="Logo BankDash" />
        <h3>{location.pathname.startsWith('/setting') ? 'Bankku.' : 'BankDash.'}</h3>
      </div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[getSelectedKey(location.pathname)]}
        onClick={({ key }) => {
          navigate(key);
          if (isMobile) onClose();
        }}
        items={items}
      />
    </div>
  );

  if (isMobile) {
    return (
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
        width={250}
        bodyStyle={{ padding: 0 }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <Sider width={250} className="sidebar-responsive">
      {sidebarContent}
    </Sider>
  );
}
