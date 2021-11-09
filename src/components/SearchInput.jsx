import React from 'react';

function SearchInput(filter, onChange) {
  return (
    <input
      className="search-input"
      type="search"
      data-testid="name-filter"
      id="filterByName"
      placeholder="Filtrar por Nome"
      value={ filter }
      onChange={ onChange }
    />
  );
}

export default SearchInput;
