import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

import '../styles/Header.css';

function SearchBar() {
  const {
    column,
    handleNumericChange,
    changeNumericClick,
  } = useContext(PlanetsContext);

  return (
    <div className="search-bar">
      <select
        data-testid="column-filter"
        id="setColumn"
        value={ column }
        onChange={ handleNumericChange }
      >
        <option name="column" value="population">population</option>
        <option name="column" value="orbital_period">orbital_period</option>
        <option name="column" value="diameter">diameter</option>
        <option name="column" value="rotation_period">rotation_period</option>
        <option name="column" value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="setComparison"
        onChange={ handleNumericChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        placeholder="Digite um número"
        id="setValue"
        onChange={ handleNumericChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ changeNumericClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SearchBar;
