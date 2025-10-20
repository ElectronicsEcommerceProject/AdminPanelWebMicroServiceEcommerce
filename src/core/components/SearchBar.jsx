import React from 'react';

const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
