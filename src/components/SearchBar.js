import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { setSearchName } = useContext(PlanetContext); // data-testid="name-filter"
  const { valueColumn, setValueColumn } = useContext(PlanetContext); // data-testid="column-filter"
  const { valueComparison, setValueComparison } = useContext(PlanetContext); // data-testid="comparison-filter"
  const { numberBox, setNumberBox } = useContext(PlanetContext); // data-testid="value-filter"

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ ({ target: { value } }) => setSearchName(value.toLowerCase()) }
      />
      <select
        type="select"
        name="column-filter"
        value={ valueColumn }
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setValueColumn(value) }
      >
        <option value="">-</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        type="select"
        name="comparison-filter"
        data-testid="comparison-filter"
        value={ valueComparison }
        onChange={ ({ target: { value } }) => setValueComparison(value) }
      >
        <option value="">-</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value-filter"
        data-testid="value-filter"
        value={ numberBox }
        onChange={ ({ target: { value } }) => setNumberBox(value) }
      />
    </div>
  );
}

export default SearchBar;
