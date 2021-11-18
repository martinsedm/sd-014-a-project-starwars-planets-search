import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function FilterPlanetsByName() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

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
            onChange={ handleChange }
          />
        </label>
      </form>
    </div>
  );
}

export default FilterPlanetsByName;
