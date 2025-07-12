import React from 'react';

const CategoryFilter = ({ categories, onFilter }) => {
  return (
    <select onChange={(e) => onFilter(e.target.value)} className="filter">
      <option value="All">All Categories</option>
      {categories.map((cat, idx) => (
        <option key={idx} value={cat}>{cat}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
