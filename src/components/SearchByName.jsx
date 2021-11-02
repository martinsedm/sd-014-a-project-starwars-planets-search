import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';

export default function SearchByName() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <p className="filters-form">
      <label
        htmlFor="filterPlanets"
        className="label-search-name"
      >
        Digite para começar a pesquisar pelo nome do planeta
        <input
          id="filterByName"
          placeholder="Digite aqui para pesquisar por nome"
          onChange={ handleChange }
          data-testid="name-filter"
          value={ filters.filterByName.name }
          type="text"
          className="input-search-name"
        />
      </label>
    </p>
  );
}
