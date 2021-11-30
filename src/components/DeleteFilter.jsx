import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function DeleteFilter() {
  const {
    filters,
    setFilters,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const removeFilter = (filter) => {
    const newFilter = filterByNumericValues
      .filter(({ column }) => column !== filter.column);
    setFilters({
      ...filters,
      filterByNumericValues: newFilter,
    });
  };

  return (
    <ul>
      { filterByNumericValues.map((filter) => (
        <li key={ filter.column } data-testid="filter">
          <span>{ JSON.stringify(filter) }</span>
          <button
            type="button"
            onClick={ () => removeFilter(filter) }
          >
            X
          </button>
        </li>
      )) }
    </ul>
  );
}

export default DeleteFilter;
