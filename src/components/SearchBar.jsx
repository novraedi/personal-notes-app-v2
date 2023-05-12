import React from "react";
import PropTypes from "prop-types";

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul ..."
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </div>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
