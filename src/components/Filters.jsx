import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filters() {
  const { filters: { filterByNumericValues }, deleteFilter } = useContext(PlanetsContext);
  return (
    filterByNumericValues.map(({ column, comparison, value }, index) => (
      <section key={ index } data-testid="filter">
        <p>
          { column }
          {' '}
          { comparison }
          {' '}
          { value }
          <button
            type="button"
            onClick={ () => deleteFilter(column) }
          >
            x
          </button>
        </p>
      </section>
    ))
  );
}
