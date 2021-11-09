import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <div>
      Filter
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        onChange={ handleChange }
        placeholder="Filtre pelo nome"
      />
    </div>
  );
}

export default Filter;
