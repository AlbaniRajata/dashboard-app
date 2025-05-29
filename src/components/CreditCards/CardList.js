import React from 'react';
import './CardList.css';

  const cardData = [
    {
      id: 1,
      cardType: 'Secondary',
      bank: 'DBL Bank',
      cardNumber: '**** 5600',
      cardHolder: 'William',
      icon: '/assets/creditcard.png',
      bgColor: 'rgba(99, 102, 241, 0.1)'
    },
    {
      id: 2,
      cardType: 'Secondary',
      bank: 'BRC Bank',
      cardNumber: '**** 4300',
      cardHolder: 'Michel',
      icon: '/assets/creditcard2.png',
      bgColor: 'rgba(236, 72, 153, 0.1)'
    },
    {
      id: 3,
      cardType: 'Secondary',
      bank: 'ABM Bank',
      cardNumber: '**** 7560',
      cardHolder: 'Edward',
      icon: '/assets/creditcard3.png',
      bgColor: 'rgba(245, 158, 11, 0.1)'
    }
  ];


  export default function CardList() {
  return (
    <div className="card-list-section">
      <h2 className="section-title">Card List</h2>
      <div className="card-list-container">
        {cardData.map((card) => (
          <div key={card.id} className="card-item">
            <div className="card-icon" style={{ backgroundColor: card.bgColor }}>
              <img src={card.icon} alt="card icon" className="card-icon-img" />
            </div>
            <div className="card-details">
              <div className="card-info-row">
                <div className="card-info-group">
                  <span className="card-label">Card Type</span>
                  <span className="card-value card-type">{card.cardType}</span>
                </div>
                <div className="card-info-group">
                  <span className="card-label">Bank</span>
                  <span className="card-value">{card.bank}</span>
                </div>
                <div className="card-info-group card-number-group">
                  <span className="card-label">Card Number</span>
                  <span className="card-value card-number">{card.cardNumber}</span>
                </div>
                <div className="card-info-group card-holder-group">
                  <span className="card-label">Namain Card</span>
                  <span className="card-value">{card.cardHolder}</span>
                </div>
                <div className="card-info-group">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
