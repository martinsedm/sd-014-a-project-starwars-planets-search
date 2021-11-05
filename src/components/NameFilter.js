import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';

function NameFilter() {
  const { name, nameFilterChange } = useContext(PlanetContext);

  return (
    <form>
      <input
        onChange={ (event) => nameFilterChange(event.target.value) }
        value={ name }
        data-testid="name-filter"
        type="text"
        name="name"
        placeholder="Filtrar por nome"
      />
    </form>
  );
}

export default NameFilter;
