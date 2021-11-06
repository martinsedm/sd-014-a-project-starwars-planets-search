import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filters() {
  const { filters: { filterByNumericValues }, deleteFilter } = useContext(PlanetsContext);
  return (
    <section className="filters-section">
      { filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index } data-testid="filter" className="filter">
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
      ))}
    </section>
  );
}
