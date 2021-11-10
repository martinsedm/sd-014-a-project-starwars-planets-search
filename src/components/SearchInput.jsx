import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function SearchInput() {
  const { name, changeFilter } = useContext(PlanetsContext);

  return (
    <input
      className="search-input"
      type="search"
      data-testid="name-filter"
      id="filterByName"
      placeholder="Filtrar por Nome"
      value={ name }
      onChange={ changeFilter }
    />
  );
}

export default SearchInput;
