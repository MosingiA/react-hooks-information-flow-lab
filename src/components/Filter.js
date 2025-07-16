import React, { useState } from "react";

function Filter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  }

  return (
    <div className="filter">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Grains">Grains</option>
        <option value="Meat">Meat</option>
      </select>
    </div>
  );
}

export default Filter;