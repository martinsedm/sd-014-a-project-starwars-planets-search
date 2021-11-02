import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

const Filters = () => {
  const {
    filter: { filterByNumericValues },
    removeNumericFilter,
  } = useContext(planetsContext);

  return (
    <section>
      {
        filterByNumericValues.map(({ column, comparison, value }) => (
          <div key={ column } data-testid="filter">
            <p>{ column }</p>
            <p>{ comparison }</p>
            <p>{ value }</p>
            <button
              type="button"
              onClick={ () => removeNumericFilter(column) }
            >
              X
            </button>
          </div>
        ))
      }
    </section>
  );
};

export default Filters;
