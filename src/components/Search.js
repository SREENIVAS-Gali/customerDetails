import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default Search;
