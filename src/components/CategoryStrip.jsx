import React from "react";

const CategoryStrip = ({ categories, onCategorySelect }) => {
  return (
    <div className="category-strip">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-card"
          onClick={() => onCategorySelect(category)}
        >
          <img src={category.image} alt={category.category} className="category-image" />
          <span className="category-name">{category.category}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryStrip;
