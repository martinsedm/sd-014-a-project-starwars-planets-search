import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterInput() {
  const { changeName } = useContext(StarWarsContext);

  return (
    <div className="filter-name">
      <input
        type="search"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        onChange={ changeName }
      />
    </div>
  );
}

export default FilterInput;
