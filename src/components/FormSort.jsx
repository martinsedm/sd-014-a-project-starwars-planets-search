import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function FormSort() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [column, setColumn] = useState(filters.order.column);
  const [sort, setSort] = useState(filters.order.sort);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  };

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <select
        data-testid="column-sort"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        <option value="name">name</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="climate">climate</option>
        <option value="gravity">gravity</option>
        <option value="terrain">terrain</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
        <option value="created">created</option>
        <option value="edited">edited</option>
        <option value="url">url</option>
      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="sort"
          id="ASC"
          value="ASC"
          onChange={ (e) => setSort(e.target.value) }
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="sort"
          id="DESC"
          value="DESC"
          onChange={ (e) => setSort(e.target.value) }
        />
      </label>
      <button type="submit" data-testid="column-sort-button">Ordenar</button>
    </form>
  );
}

export default FormSort;
