import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function ClearValueFilter() {
  const { filters, clearFilterSelected } = useContext(planetsContext);
  const { filterByNumericValues } = filters;

  return (
    <section>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          <p>{ `${column} ${comparison} ${value}` }</p>
          <button
            type="button"
            // apago column - estou pegando pela key
            onClick={ () => clearFilterSelected(column) }
          >
            X
          </button>
        </div>
      ))}
    </section>
  );
}

export default ClearValueFilter;
