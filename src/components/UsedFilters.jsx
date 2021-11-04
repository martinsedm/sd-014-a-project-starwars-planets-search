import React, { useContext } from 'react';
import Context from '../context/Context';

function UsedFilters() {
  const {
    filters,
    setFilters,
    arrayFilters,
    setArrayFilters,
  } = useContext(Context);

  function handleClick({ target }) {
    const { name } = target;
    const { filterByNumericValues } = filters;

    const newArrayFilters = [...arrayFilters];
    newArrayFilters.splice(Number(name), 1);
    setArrayFilters(newArrayFilters);
    const newFilterByNumericValues = [...filterByNumericValues];
    newFilterByNumericValues.splice(Number(name), 1);
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...newFilterByNumericValues,
      ],
    });
  }

  return (
    arrayFilters.map((element, i) => (
      <div data-testid="filter" key={ element }>
        { element }
        <button
          type="button"
          name={ i }
          onClick={ handleClick }
        >
          X
        </button>
      </div>
    ))
  );
}

export default UsedFilters;
