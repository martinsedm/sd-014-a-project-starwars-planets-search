import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterInputByName() {
  const { setFilters } = useContext(PlanetsContext);

  function handleChange(event) {
    const filterName = {
      filterByName: {
        name: (event.target.value).toLowerCase(),
      },
      filterByNumericValues: [{
        column: '',
        comparison: '',
        value: '',
      }],
    };
    setFilters(filterName);
  }

  return (
    <input
      type="search"
      placeholder="Filtrar por nome"
      data-testid="name-filter"
      onChange={ handleChange }
    />
  );
}

export default FilterInputByName;
