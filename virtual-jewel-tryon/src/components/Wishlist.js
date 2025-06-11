import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
  const items = [
    {
      id: 1,
      name: 'Diamond Ring',
      price: '₹50,000',
      image: 'https://via.placeholder.com/80?text=Ring'
    },
    {
      id: 2,
      name: 'Gold Necklace',
      price: '₹70,000',
      image: 'https://via.placeholder.com/80?text=Necklace'
    },
  ];

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-heading">My Wishlist</h2>
      {items.length === 0 ? (
        <p className="empty-message">Your wishlist is empty.</p>
      ) : (
        <ul className="wishlist-grid">
          {items.map((item) => (
            <li key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} className="wishlist-image" />
              <div className="wishlist-details">
                <h3 className="wishlist-item-name">{item.name}</h3>
                <p className="wishlist-item-price">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;

