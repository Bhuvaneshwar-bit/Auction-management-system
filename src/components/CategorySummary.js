import React from 'react';

const CategorySummary = ({ items }) => {
  const countMap = {};
  items.forEach(item => {
    countMap[item.category] = (countMap[item.category] || 0) + 1;
  });

  return (
    <div className="summary">
      <h4>Items per Category</h4>
      {Object.entries(countMap).map(([cat, count]) => (
        <p key={cat}>{cat}: {count}</p>
      ))}
    </div>
  );
};

export default CategorySummary;
