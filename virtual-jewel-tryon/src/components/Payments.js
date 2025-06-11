import React from 'react';
import './Payments.css';

const Payments = () => {
  const history = [
    { id: 1, item: 'Gold Earrings', amount: '₹30,000', date: '2024-08-12' },
    { id: 2, item: 'Platinum Bracelet', amount: '₹45,000', date: '2024-09-01' },
  ];

  return (
    <div className="payments-container">
      <h2 className="payments-title">Payment History</h2>
      {history.length === 0 ? (
        <p className="empty-state">No payment history available.</p>
      ) : (
        <table className="payments-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map(entry => (
              <tr key={entry.id}>
                <td>{entry.item}</td>
                <td className="amount">{entry.amount}</td>
                <td>{new Date(entry.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Payments;

