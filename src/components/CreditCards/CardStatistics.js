import React from 'react';
import './CardStatistics.css';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'DBL Bank', value: 35, color: '#5570F1' },
  { name: 'BRC Bank', value: 25, color: '#FFCC91' },
  { name: 'ABM Bank', value: 20, color: '#97A5EB' },
  { name: 'MCP Bank', value: 20, color: '#FF9C28' },
];

export default function CardStatistics() {
  return (
    <div className="statistics-section">
    <h2 className="section-title">Card Expense Statistics</h2>
      <div className="statistics-card">
        <div className="chart-container">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="bank-list">
          <div className="bank-column">
            <div className="bank-item">
              <div className="bank-color" style={{ backgroundColor: '#5570F1' }}></div>
              <div className="bank-name">DBL Bank</div>
            </div>
            <div className="bank-item">
              <div className="bank-color" style={{ backgroundColor: '#FFCC91' }}></div>
              <div className="bank-name">BRC Bank</div>
            </div>
          </div>
          <div className="bank-column">
            <div className="bank-item">
              <div className="bank-color" style={{ backgroundColor: '#97A5EB' }}></div>
              <div className="bank-name">ABM Bank</div>
            </div>
            <div className="bank-item">
              <div className="bank-color" style={{ backgroundColor: '#FF9C28' }}></div>
              <div className="bank-name">MCP Bank</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}