import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setFilters(
      { ...filters, // isac ajudou a nao quebrar qd os numeros são filtrados
        filterByName: {
          name: value,
        },
      },
    );
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
