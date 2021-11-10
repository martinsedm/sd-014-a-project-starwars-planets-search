import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

function UsedFilters() {
  const { filters } = useContext(PlanetContext);

  if (filters.filterByNumericValues) {
    const { filterByNumericValues } = filters;

    return filterByNumericValues.length > 0
      && filterByNumericValues.map((usedFilter, index) => (
        <div
          key={ index }
        >
          <select
            disabled
          >
            <option>{ usedFilter.column }</option>
          </select>
          <select
            disabled
          >
            <option>{ usedFilter.comparison }</option>
          </select>
          <input
            type="number"
            value={ usedFilter.value }
            disabled
          />
        </div>
      ));
  }
}

export default UsedFilters;
