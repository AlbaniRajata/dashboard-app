import React from 'react';
import './AddNewCard.css';

export default function AddNewCard() {
  return (
    <div className="add-new-card-section">
      <h2 className="section-title">Add New Card</h2>
      <div className="add-card-container">
        <div className="card-description">
          Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Card Type</label>
            <div className="form-input read-only">Classic</div>
          </div>

          <div className="form-group">
            <label className="form-label">Name On Card</label>
            <div className="form-input read-only">My Cards</div>
          </div>

          <div className="form-group">
            <label className="form-label">Card Number</label>
            <div className="form-input read-only">**** **** **** ****</div>
          </div>

          <div className="form-group">
            <label className="form-label">Expiration Date</label>
            <div className="form-input read-only">25 January 2025</div>
          </div>
        </div>

        <button className="add-card-button">Add Card</button>
      </div>
    </div>
  );
}
