import React from 'react';
import './MyCards.css';

function MyCards() {
  return (
    <div className="my-cards-section">
      <h2 className="section-title">My Cards</h2>
      <div className="card-group">
        {/* CARD 1 */}
        <div className="credit-card card-blue">
          <div className="card-header">
            <div>
              <div className="card-info-label">Balance</div>
              <div className="card-balance">$5,756</div>
            </div>
            <img src="/assets/chipcard.png" alt="Chip" className="card-chip-icon" />
          </div>
          <div className="card-middle">
            <div>
              <div className="card-info-label">Card Holder</div>
              <div className="card-info-value">Eddy Cusuma</div>
            </div>
            <div>
              <div className="card-info-label">Valid Thru</div>
              <div className="card-info-value">12/22</div>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-number">3778 **** **** 1234</div>
            <img src="/assets/mastercard.png" alt="Mastercard" className="card-brand-logo" />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="credit-card card-purple">
          <div className="card-header">
            <div>
              <div className="card-info-label">Balance</div>
              <div className="card-balance">$5,756</div>
            </div>
            <img src="/assets/chipcard.png" alt="Chip" className="card-chip-icon" />
          </div>
          <div className="card-middle">
            <div>
              <div className="card-info-label">Card Holder</div>
              <div className="card-info-value">Eddy Cusuma</div>
            </div>
            <div>
              <div className="card-info-label">Valid Thru</div>
              <div className="card-info-value">12/22</div>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-number">3778 **** **** 1234</div>
            <img src="/assets/mastercard.png" alt="Mastercard" className="card-brand-logo" />
          </div>
        </div>

        {/* CARD 3 */}
        <div className="credit-card card-white">
          <div className="card-header">
            <div>
              <div className="card-info-label">Balance</div>
              <div className="card-balance">$5,756</div>
            </div>
            <img src="/assets/chipcard.png" alt="Chip" className="card-chip-icon" style={{ filter: 'brightness(0.7)' }} />
          </div>
          <div className="card-middle">
            <div>
              <div className="card-info-label">Card Holder</div>
              <div className="card-info-value">Eddy Cusuma</div>
            </div>
            <div>
              <div className="card-info-label">Valid Thru</div>
              <div className="card-info-value">12/22</div>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-number" style={{ color: '#2d3a4b' }}>3778 **** **** 1234</div>
            <img src="/assets/mastercard.png" alt="Mastercard" className="card-brand-logo" style={{ filter: 'brightness(0.7)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCards;