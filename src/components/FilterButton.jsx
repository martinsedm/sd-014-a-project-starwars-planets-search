import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterButton() {
  const { handleClick } = useContext(PlanetsContext);

  return (
    <input
      type="button"
      data-testid="button-filter"
      onClick={ handleClick }
      value="Filtrar"
    />
  );
}

export default FilterButton;
