import React, { useContext } from 'react';
import ContextPlanet from '../context/ContextPlanet';

function Filter() {
  const { handleChange } = useContext(ContextPlanet);

  return (
    <input
      data-testid="name-filter"
      placeholder="Filtrar busca"
      onChange={ handleChange }
    />
  );
}

export default Filter;
