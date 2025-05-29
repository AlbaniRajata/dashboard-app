import React from 'react';
import '../styles/services.css';
import { FaShieldAlt, FaShoppingBag, FaHeart, FaWallet, FaPiggyBank, FaCreditCard, FaHandHoldingUsd } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCards/ServiceCard';
import ServiceListItem from '../components/ServiceCards/ServiceListItem';

const Services = () => {
  const quickServices = [
    {
      icon: <FaShieldAlt color="#3b82f6" />,
      title: 'Life Insurance',
      description: 'Unlimited protection',
      bgColor: '#e0ecff',
    },
    {
      icon: <FaShoppingBag color="#fbbf24" />,
      title: 'Shopping',
      description: 'Buy. Think. Grow.',
      bgColor: '#fef3c7',
    },
    {
      icon: <FaHeart color="#34d399" />,
      title: 'Safety',
      description: 'We are your allies',
      bgColor: '#ccfbf1',
    },
  ];

  const serviceList = [
    {
      icon: <FaHandHoldingUsd color="#ec4899" />,
      title: 'Business loans',
      description: 'It is a long established',
      color: '#fde2e4',
      details: ['Lorem Ipsum', 'Many publishing', 'Many publishing'],
    },
    {
      icon: <FaWallet color="#facc15" />,
      title: 'Checking accounts',
      description: 'It is a long established',
      color: '#fef9c3',
      details: ['Lorem Ipsum', 'Many publishing', 'Many publishing'],
    },
    {
      icon: <FaPiggyBank color="#f472b6" />,
      title: 'Savings accounts',
      description: 'It is a long established',
      color: '#fde2e4',
      details: ['Lorem Ipsum', 'Many publishing', 'Many publishing'],
    },
    {
      icon: <FaCreditCard color="#3b82f6" />,
      title: 'Debit and credit cards',
      description: 'It is a long established',
      color: '#e0ecff',
      details: ['Lorem Ipsum', 'Many publishing', 'Many publishing'],
    },
    {
      icon: <FaShieldAlt color="#10b981" />,
      title: 'Life Insurance',
      description: 'It is a long established',
      color: '#ccfbf1',
      details: ['Lorem Ipsum', 'Many publishing', 'Many publishing'],
    },
    {
      icon: <FaHandHoldingUsd color="#ec4899" />,
      title: 'Business loans',
      description: 'It is a long established',
      color: '#fde2e4',
      details: ['Lorem Ipsum', 'Many publishing', 'Many publishing'],
    },
  ];

  return (
    <div className="services-page">
      <div className="quick-services">
        {quickServices.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>
      <h3 className="list-title">Bank Services List</h3>
      <div className="services-list">
        {serviceList.map((item, index) => (
          <ServiceListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
