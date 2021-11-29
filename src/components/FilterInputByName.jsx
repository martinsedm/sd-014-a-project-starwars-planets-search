import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterInput() {
  const { handleChange } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="search"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default FilterInput;
