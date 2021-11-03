import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filters.filterByName.name }
      onChange={ handleChange }
      placeholder="Filtre pelo nome"
    />
  );
}

export default FilterByName;
