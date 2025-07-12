import React from 'react';


const ItemCatalog = ({ items, onDelete }) => {
  return (
    <div className="catalog">
      {items.length === 0 ? (
        <p className="no-items">No items to show</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="card card-slideup">
            <h3>{item.name}</h3>
            <p className="desc">{item.description}</p>
            <p><strong>Price:</strong> <span className="price">₹{item.basePrice.toLocaleString('en-IN')}</span></p>
            <p><strong>Category:</strong> <span className="cat-label">{item.category}</span></p>
            <button className="delete-btn" onClick={() => onDelete(index)}>
              <span role="img" aria-label="delete">🗑️</span> Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemCatalog;
