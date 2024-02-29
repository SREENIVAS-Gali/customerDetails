import React from "react";

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-container">
      {/* Sorting dropdown */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="sort-dropdown"
      >
        <option value="">Sort by</option>
        <option value="time">Time</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SortDropdown;
