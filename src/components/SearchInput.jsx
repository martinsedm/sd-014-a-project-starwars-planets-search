import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function SearchInput() {
  const { searchName, changeNameFilter } = useContext(PlanetsContext);

  return (
    <input
      className="search-input"
      type="search"
      data-testid="name-filter"
      id="filterByName"
      placeholder="Filtrar por Nome"
      value={ searchName }
      onChange={ changeNameFilter }
    />
  );
}

export default SearchInput;
