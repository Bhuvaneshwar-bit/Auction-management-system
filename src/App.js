import React, { useState } from 'react';
import AddItemForm from './components/AddItemForm';
import ItemCatalog from './components/ItemCatalog';
import CategorySummary from './components/CategorySummary';
import './Styles.css';


function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Define your static categories here
  const allCategories = [
    'Electronics',
    'Furniture',
    'Antiques',
    'Books',
    'Clothing',
    'Jewelry',
    'Other'
  ];

  const filteredItems = items;

  return (
    <div className="container">
      <h1>Auction Management System</h1>
      <AddItemForm onAdd={addItem} categories={allCategories} />
      <CategorySummary items={items} />
      <ItemCatalog items={filteredItems} onDelete={deleteItem} />
    </div>
  );
}

export default App;
