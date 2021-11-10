import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { setSearchName } = useContext(PlanetContext);
  const placeHolder = 'Filtrar por nome';

  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder={ placeHolder }
      onChange={ ({ target }) => setSearchName(target.value) }
    />
  );
}

export default SearchBar;
