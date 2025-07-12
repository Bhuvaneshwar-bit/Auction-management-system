import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    basePrice: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = parseFloat(formData.basePrice);

    if (!formData.name || !formData.category || isNaN(price) || price <= 0) {
      alert("Please enter valid details. Base Price must be a positive number.");
      return;
    }

    onAdd({...formData, basePrice: price});
    setFormData({ name: '', description: '', basePrice: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Item Name" value={formData.name} onChange={handleChange} />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input name="basePrice" placeholder="Base Price" value={formData.basePrice} onChange={handleChange} />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="" disabled>Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
