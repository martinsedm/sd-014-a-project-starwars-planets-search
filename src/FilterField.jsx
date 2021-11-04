import React, { useContext } from 'react';
import PlanetsContext from './context/PlanetsContext';

function FilterField() {
  const { getFilter } = useContext(PlanetsContext);
  return (
    <input
      onChange={ getFilter }
      data-testid="name-filter"
      placeholder="Which planet do you seek?"
      type="text"
    />
  );
}

export default FilterField;
