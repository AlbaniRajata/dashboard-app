import React from 'react';
import '../styles/creditCard.css';
import MyCards from '../components/CreditCards/MyCards';
import CardStatistics from '../components/CreditCards/CardStatistics';
import CardList from '../components/CreditCards/CardList';
import AddNewCard from '../components/CreditCards/AddNewCard';
import CardSettings from '../components/CreditCards/CardSettings';

function CreditCardPage() {
  return (
    <div className="credit-card-page">
      <div className="page-container">
        <MyCards />

        <div className="main-layout">
          {/* Kolom 1 */}
          <div className="column-group">
            <div className="left-column1">
              <CardStatistics />
            </div>
            <div className="right-column1">
              <CardList />
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="column-group">
            <div className="left-column2">
              <AddNewCard />
            </div>
            <div className="right-column2">
              <CardSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCardPage;
