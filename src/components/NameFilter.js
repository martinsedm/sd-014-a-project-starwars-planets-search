import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function NameFilter() {
  const { handleChange } = useContext(PlanetsContext);

  return (
    <form>
      <label htmlFor="name">
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Filtrar por nome"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default NameFilter;
