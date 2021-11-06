import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filters() {
  const { filters: { filterByNumericValues }, deleteFilter } = useContext(PlanetsContext);
  return (
    filterByNumericValues.map(({ column, comparison, value }, index) => (
      <section key={ index } data-testid="filter">
        <div className="filter">
          <p>
            { column }
            {' '}
            { comparison }
            {' '}
            { value }
          </p>
          <button
            type="button"
            className="delete-btn"
            onClick={ () => deleteFilter(column) }
          >
            x
          </button>
        </div>
      </section>
    ))
  );
}
