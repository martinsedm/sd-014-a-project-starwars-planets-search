import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

import '../styles/Header.css';

function SearchBar() {
  const { numericFilter, setNumericFilter } = useContext(PlanetsContext);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [filterColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  return (
    <div className="search-bar">
      <select
        data-testid="column-filter"
        name="column-filter"
        id="column-filter"
        onChange={ (event) => setFilterByNumericValues({
          ...filterByNumericValues,
          column: event.target.value,
        }) }
      >
        { filterColumn
          .map((item) => <option value={ item } key={ item }>{ item }</option>) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison-filter"
        id="comparison-filter"
        onChange={ (event) => setFilterByNumericValues({
          ...filterByNumericValues,
          comparison: event.target.value,
        }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        placeholder="Digite um número"
        name="value-filter"
        id="value-filter"
        onChange={ (event) => setFilterByNumericValues({
          ...filterByNumericValues,
          value: event.target.value,
        }) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setNumericFilter({
          ...numericFilter,
          filterByNumericValues: [filterByNumericValues],
        }) }

      >
        Filtrar
      </button>
    </div>
  );
}

export default SearchBar;
