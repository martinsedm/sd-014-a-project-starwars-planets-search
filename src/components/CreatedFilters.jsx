import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

export default function CreatedFilters() {
  const { filters, removeFilter } = useContext(MainContext);

  return (
    <div>
      { filters.filterByNumericValues.map(({ column, comparison, value }) => (
        <div key={ column }>
          <span>{ `${column} - ${comparison} - ${value}` }</span>
          <button
            type="button"
            data-testid="filter"
            onClick={ () => removeFilter(column) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
