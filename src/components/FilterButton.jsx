import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterButton() {
  const { handleClick } = useContext(PlanetsContext);

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ handleClick }
    >
      Filtrar
    </button>
  );
}

export default FilterButton;
