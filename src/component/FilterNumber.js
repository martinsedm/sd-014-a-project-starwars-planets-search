import React, { useContext } from 'react';
import ContextStar from '../context/ContextStar';

function FilterNumber() {
  const { handleClickInput, filterInput, handleButton } = useContext(ContextStar);

  return (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          data-testid="value-filter"
          onChange={ handleClickInput }
          value={ filterInput }
          type="number"
        />
      </label>
      <button
        id="filter"
        type="button"
        data-testid="button-filter"
        onClick={ handleButton }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterNumber;
