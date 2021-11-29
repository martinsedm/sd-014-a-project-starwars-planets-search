import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function FilterPlanetsByName() {
  const { filters, handleChangeNameFilter } = useContext(PlanetsContext);

  return (
    <div>
      <h1>Star Wars Planets</h1>
      <form>
        <label htmlFor="input-name">
          Filtre por nome:
          <input
            data-testid="name-filter"
            type="text"
            id="input-name"
            value={ filters.filterByName.name }
            onChange={ ({ target }) => handleChangeNameFilter(target.value) }
          />
        </label>
      </form>
    </div>
  );
}

export default FilterPlanetsByName;
