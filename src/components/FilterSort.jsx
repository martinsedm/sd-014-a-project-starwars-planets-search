import React, { useContext, useState } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';

export default function FilterSort() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortAscDesc, setSortAscDesc] = useState('ASC');

  const sortOptions = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const handleClick = () => {
    setFilters({
      ...filters,
      order: { column: sortColumn, sort: sortAscDesc },
    });
  };

  const createSelect = () => (
    <select
      data-testid="column-sort"
      onChange={ ({ target: { value } }) => setSortColumn(value) }
    >
      {sortOptions.map((option, index) => (
        <option key={ index }>{option}</option>
      ))}
    </select>
  );

  return (
    <div className="filter-order">
      <p>Ordene seus resultados:</p>
      <div>
        { createSelect() }
      </div>
      <div onChange={ ({ target: { value } }) => setSortAscDesc(value) }>
        <label htmlFor="column-sort">
          Ascendente
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            name="column-sort"
            checked="checked"
            value="ASC"
          />
        </label>
        <label htmlFor="column-sort">
          Descendente
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            name="column-sort"
            value="DESC"
          />
        </label>
      </div>
      <button
        data-testid="column-sort-button"
        onClick={ handleClick }
        type="button"
      >
        Ordenar
      </button>
    </div>
  );
}
