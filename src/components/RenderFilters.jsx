import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function RenderFilters() {
  const {
    filters: { filters: { filterByNumericValues } },
    deleteFilterByNumericValues,
  } = useContext(PlanetsContext);
  return (
    <div>
      {filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <span>{filter.column}</span>
          <span>{filter.comparison}</span>
          <span>{filter.value}</span>
          <button
            type="button"
            onClick={ () => deleteFilterByNumericValues(filter.column) }
          >
            x
          </button>
        </div>))}
    </div>
  );
}

export default RenderFilters;
