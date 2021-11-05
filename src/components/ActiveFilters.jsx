import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ActiveFilters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValue } = filters;
  return (
    <div>
      { filterByNumericValue.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          <span>{`${column} ${comparison} ${value}`}</span>
          <button
            type="button"
            onClick={ () => {
              const newFilters = [...filterByNumericValue];
              newFilters.splice(newFilters.indexOf(column), 1);
              setFilters({ ...filters, filterByNumericValue: newFilters });
            } }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
