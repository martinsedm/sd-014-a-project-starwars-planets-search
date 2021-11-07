import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function CurrentFilters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const removeFilter = (filter) => {
    const newFilterByNumericValues = filterByNumericValues.filter(
      ({ column }) => column !== filter,
    );
    setFilters({ ...filters, filterByNumericValues: newFilterByNumericValues });
  };

  return (
    filterByNumericValues.length > 0
    && filterByNumericValues.map(({ column, comparison, value }) => (
      <div data-testid="filter" key={ column }>
        {column}
        {' '}
        {comparison}
        {' '}
        {value}
        <button onClick={ () => removeFilter(column) } type="button">
          X
        </button>
      </div>
    ))
  );
}

export default CurrentFilters;
